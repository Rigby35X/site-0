/**
 * Shared in-memory storage for API data
 * This allows different API endpoints to share data when external APIs are unavailable
 */

// Global storage maps
const organizationStorage = new Map();
const animalsStorage = new Map();

// Default organization data
const defaultOrganizationData = {
    id: 3,
    name: 'Happy Paws Dog Rescue',
    email: 'info@happypawsrescue.org',
    phone: '(555) DOG-PAWS',
    ein: '11-1111111', // Updated default EIN
    address: '123 Rescue Lane',
    city: 'Dog City',
    state: 'CA',
    zip: '90210',
    website: 'https://happypawsrescue.org',
    description: 'Dedicated to finding loving homes for dogs in need.',
    primary_color: '#04736b', // Barkhaus colors
    secondary_color: '#6a9c9b'
};

// Organization storage functions
export function getOrganization(orgId) {
    const stored = organizationStorage.get(orgId);
    if (stored) {
        console.log('✅ Organization found in shared storage:', stored);
        return stored;
    }
    
    // Return default data and store it
    const defaultData = { ...defaultOrganizationData, id: parseInt(orgId) };
    organizationStorage.set(orgId, defaultData);
    console.log('✅ Using default organization data and storing in shared storage');
    return defaultData;
}

export function setOrganization(orgId, data) {
    const existingData = getOrganization(orgId);
    const updatedData = {
        ...existingData,
        ...data,
        id: parseInt(orgId),
        updated_at: new Date().toISOString()
    };
    
    organizationStorage.set(orgId, updatedData);
    console.log('✅ Organization updated in shared storage:', updatedData);
    return updatedData;
}

export function hasOrganization(orgId) {
    return organizationStorage.has(orgId);
}

// Animals storage functions
export function getAnimals(orgId) {
    const storageKey = `org_${orgId}_animals`;
    const stored = animalsStorage.get(storageKey);
    
    if (stored) {
        console.log('✅ Animals found in shared storage:', stored);
        return stored;
    }
    
    // Return default animals data
    const defaultAnimals = [
        {
            id: 1,
            name: 'Buddy',
            species: 'Dog',
            breed: 'Golden Retriever Mix',
            age: '3 years',
            gender: 'Male',
            size: 'Large',
            description: 'Buddy is a friendly and energetic dog who loves playing fetch and going on long walks. He\'s great with kids and other dogs!',
            image_url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
            status: 'Available',
            org_id: parseInt(orgId),
            created_at: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Luna',
            species: 'Dog',
            breed: 'Border Collie',
            age: '2 years',
            gender: 'Female',
            size: 'Medium',
            description: 'Luna is an intelligent and loyal companion. She knows several tricks and would thrive in an active household.',
            image_url: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400',
            status: 'Available',
            org_id: parseInt(orgId),
            created_at: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Max',
            species: 'Dog',
            breed: 'Labrador Mix',
            age: '5 years',
            gender: 'Male',
            size: 'Large',
            description: 'Max is a gentle giant who loves cuddles and treats. He\'s perfect for a family looking for a calm, loving companion.',
            image_url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400',
            status: 'Available',
            org_id: parseInt(orgId),
            created_at: new Date().toISOString()
        }
    ];
    
    animalsStorage.set(storageKey, defaultAnimals);
    console.log('✅ Using default animals data and storing in shared storage');
    return defaultAnimals;
}

export function setAnimals(orgId, animals) {
    const storageKey = `org_${orgId}_animals`;
    animalsStorage.set(storageKey, animals);
    console.log('✅ Animals updated in shared storage:', animals);
    return animals;
}

export function addAnimal(orgId, animalData) {
    const existingAnimals = getAnimals(orgId);
    const newAnimal = {
        ...animalData,
        id: Date.now(), // Generate unique ID
        org_id: parseInt(orgId),
        created_at: new Date().toISOString(),
        status: animalData.status || 'Available'
    };
    
    existingAnimals.push(newAnimal);
    setAnimals(orgId, existingAnimals);
    
    console.log('✅ Animal added to shared storage:', newAnimal);
    return newAnimal;
}

// Debug functions
export function debugStorage() {
    console.log('🔍 Storage Debug Info:');
    console.log('Organizations:', Array.from(organizationStorage.entries()));
    console.log('Animals:', Array.from(animalsStorage.entries()));
}

export function clearStorage() {
    organizationStorage.clear();
    animalsStorage.clear();
    console.log('🗑️ Storage cleared');
}
