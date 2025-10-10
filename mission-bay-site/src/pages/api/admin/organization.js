/**
 * API Endpoint for Organization Management
 * Handles organization data via Xano
 */

// Xano Configuration
const XANO_CONFIG = {
    organizationsUrl: import.meta.env.VITE_XANO_ORGANIZATIONS_URL || 'https://xz6u-fpaz-praf.n7e.xano.io/api:siXQEdjz',
    token: import.meta.env.VITE_XANO_ORGANIZATIONS_TOKEN || '165XkoniNXylFdNKgO_aCvmAIcQ'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const url = `${XANO_CONFIG.organizationsUrl}${endpoint}`;
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

// Shared storage for fallback data
const sharedStorage = {
    organizations: new Map()
};

// GET - Fetch organization data
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '9';
        
        let organization;
        try {
            organization = await makeXanoRequest(`/organizations/${orgId}`);
            console.log('✅ Organization fetched from Xano:', organization);
        } catch (xanoError) {
            console.warn('⚠️ Xano fetch failed, using shared storage:', xanoError.message);
            organization = sharedStorage.organizations.get(orgId) || {
                id: orgId,
                name: 'Mission Bay Puppy Rescue',
                email: 'admin@mbpr.org',
                phone: '(619) 555-PUPS',
                address: '456 Mission Bay Drive, Suite 200, San Diego, CA 92109',
                tax_id: '98-7654321'
            };
        }
        
        return new Response(JSON.stringify(organization), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    } catch (error) {
        console.error('Error fetching organization:', error);
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '9';
        
        // Return fallback organization data
        const fallbackOrg = {
            id: orgId,
            name: 'Mission Bay Puppy Rescue',
            email: 'admin@mbpr.org',
            phone: '(619) 555-PUPS',
            address: '456 Mission Bay Drive, Suite 200, San Diego, CA 92109',
            tax_id: '98-7654321'
        };
        
        return new Response(JSON.stringify(fallbackOrg), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// PUT - Update organization data
export async function PUT({ request }) {
    try {
        const body = await request.json();
        console.log('📝 Organization update request body:', body);
        
        // Extract orgId from body or URL params
        const url = new URL(request.url);
        const orgId = body.orgId || url.searchParams.get('orgId') || '9';
        
        let updatedOrganization;
        try {
            updatedOrganization = await makeXanoRequest(`/organizations/${orgId}`, {
                method: 'PUT',
                body: JSON.stringify(body)
            });
            console.log('✅ Organization updated in Xano:', updatedOrganization);
        } catch (xanoError) {
            console.warn('⚠️ Xano update failed, using shared storage:', xanoError.message);
            // Update in shared storage as fallback
            const existing = sharedStorage.organizations.get(orgId) || {};
            updatedOrganization = {
                ...existing,
                ...body,
                id: orgId,
                updated_at: Date.now()
            };
            sharedStorage.organizations.set(orgId, updatedOrganization);
        }
        
        return new Response(JSON.stringify(updatedOrganization), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('Error updating organization:', error);
        return new Response(JSON.stringify({ error: 'Failed to update organization' }), {
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
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}
