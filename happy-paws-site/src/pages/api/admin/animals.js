/**
 * API Endpoint for Animal Management
 * Handles CRUD operations for animals via Xano
 */

import { getAnimals, setAnimals, addAnimal } from '../../utils/storage.js';

// Xano Configuration
const XANO_CONFIG = {
    animalsUrl: import.meta.env.VITE_XANO_ANIMALS_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:Od874PbA',
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

    console.log('🔄 Making Xano animals request:', {
        url,
        method: options.method || 'GET',
        hasBody: !!options.body
    });

    const response = await fetch(url, {
        ...options,
        headers
    });

    console.log('📡 Xano animals response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Xano animals API error details:', errorText);
        throw new Error(`Xano API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log('✅ Xano animals response data:', responseData);
    return responseData;
}

// Note: Using shared storage from utils/storage.js

// GET - Fetch all animals for organization
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '3';

        let animals;

        try {
            animals = await makeXanoRequest(`/orgs/${orgId}/animals`);
            console.log('✅ Animals fetched from Xano:', animals);
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
        console.error('❌ Error in GET animals:', error);

        // Return fallback animals as last resort
        const orgId = new URL(request.url).searchParams.get('orgId') || '3';
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
        const { orgId = '3', ...animalData } = body;

        console.log('🔄 Creating new animal:', { orgId, animalData });

        // Add organization ID to animal data
        const dataWithOrg = {
            ...animalData,
            org_id: parseInt(orgId),
            id: Date.now(), // Generate unique ID for fallback
            created_at: new Date().toISOString(),
            status: animalData.status || 'Available'
        };

        let newAnimal;

        try {
            newAnimal = await makeXanoRequest(`/orgs/${orgId}/animals`, {
                method: 'POST',
                body: JSON.stringify(dataWithOrg)
            });
            console.log('✅ Animal created in Xano:', newAnimal);
        } catch (xanoError) {
            console.warn('⚠️ Xano create failed, using shared storage:', xanoError.message);

            // Use shared storage to add animal
            newAnimal = addAnimal(orgId, animalData);
        }

        return new Response(JSON.stringify(newAnimal), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('❌ Error creating animal:', error);
        return new Response(JSON.stringify({
            error: 'Failed to create animal',
            details: error.message
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

// PUT - Update animal
export async function PUT({ request }) {
    try {
        const body = await request.json();
        const { id, orgId = '3', ...animalData } = body;
        
        if (!id) {
            return new Response(JSON.stringify({ error: 'Animal ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const updatedAnimal = await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(animalData)
        });
        
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

// DELETE - Remove animal
export async function DELETE({ request }) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        const orgId = url.searchParams.get('orgId') || '3';
        
        if (!id) {
            return new Response(JSON.stringify({ error: 'Animal ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
            method: 'DELETE'
        });
        
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

// PATCH - Bulk import animals
export async function PATCH({ request }) {
    try {
        const body = await request.json();
        const { orgId = '3', animals } = body;

        if (!animals || !Array.isArray(animals)) {
            return new Response(JSON.stringify({ error: 'Animals array is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        let imported = 0;
        let errors = 0;
        const errorDetails = [];

        // Process each animal
        for (let i = 0; i < animals.length; i++) {
            try {
                const animalData = {
                    ...animals[i],
                    org_id: orgId
                };

                await makeXanoRequest(`/orgs/${orgId}/animals`, {
                    method: 'POST',
                    body: JSON.stringify(animalData)
                });

                imported++;
            } catch (error) {
                errors++;
                errorDetails.push({
                    row: i + 1,
                    animal: animals[i].name || 'Unknown',
                    error: error.message
                });
                console.error(`Error importing animal ${i + 1}:`, error);
            }
        }

        return new Response(JSON.stringify({
            imported,
            errors,
            errorDetails: errorDetails.slice(0, 10) // Limit error details to first 10
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Error in bulk import:', error);
        return new Response(JSON.stringify({ error: 'Failed to process bulk import' }), {
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
