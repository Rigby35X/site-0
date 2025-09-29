/**
 * API Endpoint for Organization Management
 * Handles organization data via Xano
 */

import { getOrganization, setOrganization, hasOrganization } from '../../utils/storage.js';

// Xano Configuration
const XANO_CONFIG = {
    organizationsUrl: import.meta.env.VITE_XANO_ORGANIZATIONS_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz',
    token: import.meta.env.VITE_XANO_AUTH_TOKEN || import.meta.env.VITE_XANO_ORGANIZATIONS_TOKEN || 'mGDOpzrGb2PvfCn4tOJB7drqYvs'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const url = `${XANO_CONFIG.organizationsUrl}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XANO_CONFIG.token}`,
        ...options.headers
    };

    console.log('🔄 Making Xano request:', {
        url,
        method: options.method || 'GET',
        hasBody: !!options.body,
        headers: { ...headers, Authorization: '[REDACTED]' }
    });

    const response = await fetch(url, {
        ...options,
        headers
    });

    console.log('📡 Xano response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Xano API error details:', errorText);
        throw new Error(`Xano API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log('✅ Xano response data:', responseData);
    return responseData;
}

// GET - Fetch organization data
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '3';
        
        const organization = await makeXanoRequest(`/organizations/${orgId}`);
        
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
        
        // Use shared storage
        const orgId = url.searchParams.get('orgId') || '3';
        const fallbackOrg = getOrganization(orgId);
        
        return new Response(JSON.stringify(fallbackOrg), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

// PUT - Update organization
export async function PUT({ request }) {
    try {
        const body = await request.json();
        const { orgId = '3', ...orgData } = body;

        console.log('🔄 Updating organization:', {
            orgId,
            orgData,
            url: `${XANO_CONFIG.organizationsUrl}/organizations/${orgId}`
        });

        let updatedOrganization;

        try {
            updatedOrganization = await makeXanoRequest(`/organizations/${orgId}`, {
                method: 'PATCH',
                body: JSON.stringify(orgData)
            });
            console.log('✅ Organization updated successfully via Xano:', updatedOrganization);
        } catch (xanoError) {
            console.warn('⚠️ Xano update failed, using shared storage:', xanoError.message);

            // Use shared storage to update organization
            updatedOrganization = setOrganization(orgId, orgData);
        }

        return new Response(JSON.stringify(updatedOrganization), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.error('❌ Error updating organization:', error);

        // Return more detailed error information
        return new Response(JSON.stringify({
            error: 'Failed to update organization',
            details: error.message,
            xanoUrl: `${XANO_CONFIG.organizationsUrl}/organizations/${orgId || '3'}`,
            orgData: orgData
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
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
