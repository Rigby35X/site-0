/**
 * API Endpoint for Client Data
 * Serves organization data to frontend components
 */

import clientData from '@data/client.json';

// Xano Configuration
const XANO_CONFIG = {
    organizationsUrl: import.meta.env.VITE_XANO_ORGANIZATIONS_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz',
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

// GET - Fetch client data for frontend
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || import.meta.env.PUBLIC_ORG_ID || '9';
        
        let dynamicData = {};
        
        try {
            // Fetch dynamic data from Xano
            const xanoData = await makeXanoRequest(`/organizations/${orgId}`);
            console.log('✅ Dynamic organization data fetched from Xano:', xanoData);
            
            // Map Xano fields to client data format
            dynamicData = {
                name: xanoData.name || clientData.name,
                email: xanoData.email || clientData.email,
                phone: xanoData.phone || clientData.phoneFormatted,
                phoneForTel: xanoData.phone_tel || clientData.phoneForTel,
                phoneFormatted: xanoData.phone || clientData.phoneFormatted,
                address: {
                    lineOne: xanoData.address_line_1 || clientData.address?.lineOne,
                    lineTwo: xanoData.address_line_2 || clientData.address?.lineTwo,
                    city: xanoData.city || clientData.address?.city,
                    state: xanoData.state || clientData.address?.state,
                    zip: xanoData.zip || clientData.address?.zip,
                    mapLink: xanoData.map_link || clientData.address?.mapLink
                },
                domain: xanoData.domain || clientData.domain,
                ein: xanoData.tax_id || clientData.ein, // Map tax_id to ein
                orgId: orgId,
                socialMedia: {
                    facebook: xanoData.facebook_url || '',
                    instagram: xanoData.instagram_url || '',
                    twitter: xanoData.twitter_url || ''
                }
            };
        } catch (xanoError) {
            console.warn('⚠️ Xano fetch failed, using static client data:', xanoError.message);
            // Use static client data as fallback
            dynamicData = {
                ...clientData,
                orgId: orgId,
                socialMedia: {
                    facebook: '',
                    instagram: '',
                    twitter: ''
                }
            };
        }
        
        return new Response(JSON.stringify(dynamicData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    } catch (error) {
        console.error('Error in client-data API:', error);
        
        // Return static client data as last resort
        const fallbackData = {
            ...clientData,
            orgId: '9',
            socialMedia: {
                facebook: '',
                instagram: '',
                twitter: ''
            }
        };
        
        return new Response(JSON.stringify(fallbackData), {
            status: 200,
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
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
