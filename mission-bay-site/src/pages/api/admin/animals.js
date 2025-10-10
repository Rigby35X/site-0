/**
 * API Endpoint for Animal Management
 * Handles CRUD operations for animals via Xano
 */

// Xano Configuration
const XANO_CONFIG = {
    animalsUrl: import.meta.env.VITE_XANO_ANIMALS_URL || 'https://xz6u-fpaz-praf.n7e.xano.io/api:Od874PbA',
    token: import.meta.env.VITE_XANO_ANIMALS_TOKEN || '165XkoniNXylFdNKgO_aCvmAIcQ'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const url = `${XANO_CONFIG.animalsUrl}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XANO_CONFIG.token}`,
        ...options.headers
    };

    const response = await fetch(url, {
        ...options,
        headers
    });

    if (!response.ok) {
        throw new Error(`Xano API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

// Helper function to normalize status values
function normalizeStatus(status) {
    if (!status) return 'Available';

    const statusLower = status.toLowerCase();

    if (statusLower.includes('available')) return 'Available';
    if (statusLower.includes('adopted')) return 'Adopted';
    if (statusLower.includes('pending')) return 'Pending';
    if (statusLower.includes('medical')) return 'Medical';
    if (statusLower.includes('published')) return 'Published';

    return status; // Return original if no match
}

// Shared storage for fallback data
const sharedStorage = {
    animals: new Map()
};

// Helper function to get animals from shared storage
function getAnimals(orgId) {
    const orgAnimals = [];
    for (const [key, animal] of sharedStorage.animals) {
        if (animal.org === orgId) {
            orgAnimals.push(animal);
        }
    }
    return orgAnimals;
}

// GET - Fetch all animals for organization
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '9';
        
        let animals;
        try {
            // For org 9 (Mission Bay), fetch from dogs table with different schema
            if (orgId === '9') {
                const dogsData = await makeXanoRequest(`/dogs`);
                console.log('✅ Dogs fetched from Xano:', dogsData);
                
                // Map dogs data to animals format
                animals = dogsData.map(dog => ({
                    id: dog.id,
                    org: dog.org,
                    name: dog.Dog_Name,
                    litter_name: dog.Litter_Name || '',
                    species: 'dog',
                    breed: dog.Breed || '',
                    description: dog.My_Story || '',
                    status: normalizeStatus(dog.Code || 'Available'),
                    intake_date: dog.Intake_Date ? new Date(dog.Intake_Date).toISOString().split('T')[0] : null,
                    image_url: dog.main_image?.url || '',
                    updated_at: 0,
                    age: dog.Pup_is_currently_this_many_weeks_old ? Math.floor(dog.Pup_is_currently_this_many_weeks_old / 52) + ' years' : '',
                    gender: dog.Gender || '',
                    weight: dog.Estimated_Size_When_Grown || '',
                    color: dog.Markings || '',
                    created_at: dog.created_at || Date.now(),
                    size: dog.Estimated_Size_When_Grown?.includes('Large') ? 'Large' : 
                          dog.Estimated_Size_When_Grown?.includes('Medium') ? 'Medium' : 'Small',
                    images: {
                        main_image: dog.main_image,
                        additional_image_1: dog.additional_image_1,
                        additional_image_2: dog.additional_image_2,
                        additional_image_3: dog.additional_image_3,
                        additional_image_4: dog.additional_image_4
                    },
                    description_long: dog.My_Story || '',
                    location: '',
                    vaccinated: dog.Vaccinations === 'Yes',
                    spayed_neutered: dog.Is_Dog_Fixed || false,
                    microchip: dog.Microchip_Number ? true : false,
                    medical_notes: '',
                    special_needs: '',
                    house_trained: false,
                    energy_level: '',
                    good_with_kids: false,
                    org_description: '',
                    good_with_dogs: false,
                    good_with_cats: false,
                    training_notes: '',
                    playgroup_notes: '',
                    adoption_fee: 0,
                    adoption_fee_currency: '',
                    org_details: '',
                    is_featured: false,
                    priority: 0,
                    internal_notes: '',
                    meta_title: '',
                    meta_description: '',
                    main_image: dog.main_image,
                    additional_image_1: dog.additional_image_1,
                    additional_image_2: dog.additional_image_2,
                    additional_image_3: dog.additional_image_3,
                    additional_image_4: dog.additional_image_4
                }));
            } else {
                // For other orgs, use the standard animals endpoint
                animals = await makeXanoRequest(`/orgs/${orgId}/animals`);
                console.log('✅ Animals fetched from Xano:', animals);
            }
        } catch (xanoError) {
            console.warn('⚠️ Xano fetch failed, using shared storage:', xanoError.message);
            animals = getAnimals(orgId);
        }
        
        return new Response(JSON.stringify(animals), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    } catch (error) {
        console.error('Error in animals GET:', error);
        // Return fallback animals as last resort
        const orgId = new URL(request.url).searchParams.get('orgId') || '9';
        const fallbackAnimals = getAnimals(orgId);
        
        return new Response(JSON.stringify(fallbackAnimals), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

// POST - Create new animal
export async function POST({ request }) {
    try {
        const body = await request.json();
        const { orgId = '9', ...animalData } = body;

        let newAnimal;
        try {
            // For org 9 (Mission Bay), create in dogs table with different schema
            if (orgId === '9') {
                // Map admin data to dogs table schema
                const dogData = {
                    org: orgId,
                    Dog_Name: animalData.name,
                    Litter_Name: animalData.litter_name || '',
                    Breed: animalData.breed || '',
                    My_Story: animalData.description || '',
                    Code: animalData.status || 'Available',
                    Intake_Date: animalData.intake_date || null,
                    Gender: animalData.gender || '',
                    Estimated_Size_When_Grown: animalData.weight || animalData.size || '',
                    Markings: animalData.color || '',
                    Vaccinations: animalData.vaccinated ? 'Yes' : 'No',
                    Is_Dog_Fixed: animalData.spayed_neutered || false,
                    Microchip_Number: animalData.microchip ? 'Yes' : '',
                    // Handle age conversion (convert years to weeks if needed)
                    Pup_is_currently_this_many_weeks_old: animalData.age ?
                        (typeof animalData.age === 'string' ?
                            parseInt(animalData.age.replace(/[^\d]/g, '')) * 52 :
                            animalData.age * 52) : null
                };

                // Remove null/undefined values
                Object.keys(dogData).forEach(key => {
                    if (dogData[key] === null || dogData[key] === undefined || dogData[key] === '') {
                        delete dogData[key];
                    }
                });

                console.log('Creating dog with data:', dogData);

                const createdDog = await makeXanoRequest(`/dogs`, {
                    method: 'POST',
                    body: JSON.stringify(dogData)
                });

                console.log('✅ Dog created in Xano:', createdDog);

                // Map back to animals format for response
                newAnimal = {
                    id: createdDog.id,
                    org: createdDog.org,
                    name: createdDog.Dog_Name,
                    litter_name: createdDog.Litter_Name || '',
                    species: 'dog',
                    breed: createdDog.Breed || '',
                    description: createdDog.My_Story || '',
                    status: normalizeStatus(createdDog.Code || 'Available'),
                    intake_date: createdDog.Intake_Date ? new Date(createdDog.Intake_Date).toISOString().split('T')[0] : null,
                    image_url: createdDog.main_image?.url || '',
                    updated_at: Date.now(),
                    age: createdDog.Pup_is_currently_this_many_weeks_old ? Math.floor(createdDog.Pup_is_currently_this_many_weeks_old / 52) + ' years' : '',
                    gender: createdDog.Gender || '',
                    weight: createdDog.Estimated_Size_When_Grown || '',
                    color: createdDog.Markings || '',
                    created_at: createdDog.created_at || Date.now(),
                    size: createdDog.Estimated_Size_When_Grown?.includes('Large') ? 'Large' :
                          createdDog.Estimated_Size_When_Grown?.includes('Medium') ? 'Medium' : 'Small',
                    vaccinated: createdDog.Vaccinations === 'Yes',
                    spayed_neutered: createdDog.Is_Dog_Fixed || false,
                    microchip: createdDog.Microchip_Number ? true : false
                };
            } else {
                // For other orgs, use the standard animals endpoint
                const dataWithOrg = {
                    ...animalData,
                    org_id: orgId
                };

                newAnimal = await makeXanoRequest(`/orgs/${orgId}/animals`, {
                    method: 'POST',
                    body: JSON.stringify(dataWithOrg)
                });
                console.log('✅ Animal created in Xano:', newAnimal);
            }
        } catch (xanoError) {
            console.warn('⚠️ Xano create failed, using shared storage:', xanoError.message);
            // Create animal in shared storage as fallback
            newAnimal = {
                id: Date.now(),
                org: orgId,
                created_at: Date.now(),
                updated_at: Date.now(),
                ...animalData
            };
            sharedStorage.animals.set(newAnimal.id, newAnimal);
        }

        return new Response(JSON.stringify(newAnimal), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Error creating animal:', error);
        return new Response(JSON.stringify({ error: 'Failed to create animal' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// PUT - Update animal
export async function PUT({ request }) {
    try {
        const body = await request.json();
        const { id, orgId = '9', ...animalData } = body;

        if (!id) {
            return new Response(JSON.stringify({ error: 'Animal ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        let updatedAnimal;
        try {
            // For org 9 (Mission Bay), update in dogs table with different schema
            if (orgId === '9') {
                // Map admin data back to dogs table schema
                const dogData = {
                    Dog_Name: animalData.name,
                    Litter_Name: animalData.litter_name || '',
                    Breed: animalData.breed || '',
                    My_Story: animalData.description || '',
                    Code: animalData.status || 'Available',
                    Intake_Date: animalData.intake_date || null,
                    Gender: animalData.gender || '',
                    Estimated_Size_When_Grown: animalData.weight || animalData.size || '',
                    Markings: animalData.color || '',
                    Vaccinations: animalData.vaccinated ? 'Yes' : 'No',
                    Is_Dog_Fixed: animalData.spayed_neutered || false,
                    Microchip_Number: animalData.microchip ? 'Yes' : '',
                    // Handle age conversion (convert years back to weeks if needed)
                    Pup_is_currently_this_many_weeks_old: animalData.age ?
                        (typeof animalData.age === 'string' ?
                            parseInt(animalData.age.replace(/[^\d]/g, '')) * 52 :
                            animalData.age * 52) : null
                };

                // Remove null/undefined values
                Object.keys(dogData).forEach(key => {
                    if (dogData[key] === null || dogData[key] === undefined || dogData[key] === '') {
                        delete dogData[key];
                    }
                });

                console.log('Updating dog with data:', dogData);

                const updatedDog = await makeXanoRequest(`/dogs/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(dogData)
                });

                console.log('✅ Dog updated in Xano:', updatedDog);

                // Map back to animals format for response
                updatedAnimal = {
                    id: updatedDog.id,
                    org: updatedDog.org,
                    name: updatedDog.Dog_Name,
                    litter_name: updatedDog.Litter_Name || '',
                    species: 'dog',
                    breed: updatedDog.Breed || '',
                    description: updatedDog.My_Story || '',
                    status: normalizeStatus(updatedDog.Code || 'Available'),
                    intake_date: updatedDog.Intake_Date ? new Date(updatedDog.Intake_Date).toISOString().split('T')[0] : null,
                    image_url: updatedDog.main_image?.url || '',
                    updated_at: Date.now(),
                    age: updatedDog.Pup_is_currently_this_many_weeks_old ? Math.floor(updatedDog.Pup_is_currently_this_many_weeks_old / 52) + ' years' : '',
                    gender: updatedDog.Gender || '',
                    weight: updatedDog.Estimated_Size_When_Grown || '',
                    color: updatedDog.Markings || '',
                    created_at: updatedDog.created_at || Date.now(),
                    size: updatedDog.Estimated_Size_When_Grown?.includes('Large') ? 'Large' :
                          updatedDog.Estimated_Size_When_Grown?.includes('Medium') ? 'Medium' : 'Small',
                    vaccinated: updatedDog.Vaccinations === 'Yes',
                    spayed_neutered: updatedDog.Is_Dog_Fixed || false,
                    microchip: updatedDog.Microchip_Number ? true : false
                };
            } else {
                // For other orgs, use the standard animals endpoint
                updatedAnimal = await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(animalData)
                });
                console.log('✅ Animal updated in Xano:', updatedAnimal);
            }
        } catch (xanoError) {
            console.warn('⚠️ Xano update failed, using shared storage:', xanoError.message);
            // Update animal in shared storage as fallback
            const existingAnimal = sharedStorage.animals.get(parseInt(id));
            if (existingAnimal) {
                updatedAnimal = {
                    ...existingAnimal,
                    ...animalData,
                    updated_at: Date.now()
                };
                sharedStorage.animals.set(parseInt(id), updatedAnimal);
            } else {
                throw new Error('Animal not found');
            }
        }

        return new Response(JSON.stringify(updatedAnimal), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Error updating animal:', error);
        return new Response(JSON.stringify({ error: 'Failed to update animal' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// DELETE - Delete animal
export async function DELETE({ request }) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        const orgId = url.searchParams.get('orgId') || '9';

        if (!id) {
            return new Response(JSON.stringify({ error: 'Animal ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        try {
            // For org 9 (Mission Bay), delete from dogs table
            if (orgId === '9') {
                await makeXanoRequest(`/dogs/${id}`, {
                    method: 'DELETE'
                });
                console.log('✅ Dog deleted from Xano:', id);
            } else {
                // For other orgs, use the standard animals endpoint
                await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
                    method: 'DELETE'
                });
                console.log('✅ Animal deleted from Xano:', id);
            }
        } catch (xanoError) {
            console.warn('⚠️ Xano delete failed, using shared storage:', xanoError.message);
            // Delete from shared storage as fallback
            sharedStorage.animals.delete(parseInt(id));
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Error deleting animal:', error);
        return new Response(JSON.stringify({ error: 'Failed to delete animal' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// OPTIONS - Handle CORS preflight
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}
