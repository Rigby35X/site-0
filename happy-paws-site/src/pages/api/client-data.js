/**
 * API Endpoint for Client Data
 * Serves dynamic client data from Xano database
 */

// Xano Configuration
const XANO_CONFIG = {
    organizationsUrl: import.meta.env.VITE_XANO_ORGANIZATIONS_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz',
    token: import.meta.env.VITE_XANO_AUTH_TOKEN || import.meta.env.VITE_XANO_ORGANIZATIONS_TOKEN || 'mGDOpzrGb2PvfCn4tOJB7drqYvs'
};

// Simple global storage for organization data (shared with organization.js)
globalThis.organizationData = globalThis.organizationData || new Map();

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

// Helper function to adjust color brightness
function adjustColorBrightness(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');

    // Parse RGB values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate new values
    const newR = Math.max(0, Math.min(255, r + (r * percent / 100)));
    const newG = Math.max(0, Math.min(255, g + (g * percent / 100)));
    const newB = Math.max(0, Math.min(255, b + (b * percent / 100)));

    // Convert back to hex
    return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
}

// GET - Fetch client data
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || import.meta.env.PUBLIC_ORG_ID || '3';

        console.log('🔄 Fetching organization data for orgId:', orgId);

        // Fetch organization data from Xano
        let orgData;
        try {
            orgData = await makeXanoRequest(`/organizations/${orgId}`);
            console.log('✅ Organization data fetched from Xano:', orgData);
        } catch (xanoError) {
            console.warn('⚠️ Xano fetch failed, using global storage:', xanoError.message);

            // Check global storage first
            const stored = globalThis.organizationData.get(orgId);
            if (stored) {
                console.log('✅ Organization found in global storage:', stored);
                orgData = stored;
            } else {
                // Fallback organization data
                orgData = {
                    id: parseInt(orgId),
                    name: 'Happy Paws Dog Rescue',
                    email: 'info@happypawsrescue.org',
                    phone: '(555) DOG-PAWS',
                    ein: '11-1111111', // Default EIN that can be updated
                    address: '123 Rescue Lane',
                    city: 'Dog City',
                    state: 'CA',
                    zip: '90210',
                    website: 'https://happypawsrescue.org',
                    description: 'Dedicated to finding loving homes for dogs in need.',
                    primary_color: '#04736b',
                    secondary_color: '#6a9c9b'
                };

                // Store the fallback data
                globalThis.organizationData.set(orgId, orgData);
                console.log('✅ Using fallback organization data and storing in global storage');
            }
        }
        
        // Format phone for different uses
        const phoneForTel = orgData.phone ? orgData.phone.replace(/[^\d]/g, '') : '';
        const phoneFormatted = orgData.phone || '';
        
        // Create client data structure
        const clientData = {
            name: orgData.name || 'Happy Paws Dog Rescue',
            email: orgData.email || 'info@happypawsrescue.org',
            phoneForTel: phoneForTel,
            phoneFormatted: phoneFormatted,
            ein: orgData.ein || '',
            address: {
                lineOne: orgData.address || '',
                lineTwo: '',
                city: orgData.city || '',
                state: orgData.state || '',
                zip: orgData.zip || '',
                mapLink: `https://maps.google.com/?q=${encodeURIComponent(`${orgData.address}, ${orgData.city}, ${orgData.state} ${orgData.zip}`)}`
            },
            domain: orgData.website ? orgData.website.replace(/^https?:\/\//, '') : 'happypawsrescue.org',
            description: orgData.description || '',
            branding: {
                colors: {
                    primary: orgData.primary_color || '#2E8B57',
                    primaryLight: adjustColorBrightness(orgData.primary_color || '#2E8B57', 20),
                    secondary: orgData.secondary_color || '#4682B4',
                    secondaryLight: adjustColorBrightness(orgData.secondary_color || '#4682B4', 20)
                },
                logo: orgData.logo || '',
                fonts: {
                    heading: orgData.heading_font || 'Inter',
                    body: orgData.body_font || 'Inter'
                }
            },
            socialMedia: {
                facebook: orgData.facebook_url || '',
                instagram: orgData.instagram_url || '',
                twitter: orgData.twitter_url || ''
            },
            content: {
                aboutUs: orgData.about_us || '',
                mission: orgData.mission || '',
                vision: orgData.vision || ''
            }
        };
        
        return new Response(JSON.stringify(clientData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
        
    } catch (error) {
        console.error('Error fetching client data:', error);
        
        // Return fallback client data
        const fallbackData = {
            name: 'Happy Paws Dog Rescue',
            email: 'info@happypawsrescue.org',
            phoneForTel: '5553647297',
            phoneFormatted: '(555) DOG-PAWS',
            ein: '',
            address: {
                lineOne: '123 Rescue Lane, Suite 100',
                lineTwo: '',
                city: 'Dog City',
                state: 'CA',
                zip: '90210',
                mapLink: 'https://maps.google.com/?q=123+Rescue+Lane%2C+Suite+100%2C+Dog+City%2C+CA+90210'
            },
            domain: 'happypawsrescue.org',
            description: 'Dedicated to finding loving homes for dogs in need.',
            branding: {
                colors: {
                    primary: '#2E8B57',
                    primaryLight: '#3ba068',
                    secondary: '#4682B4',
                    secondaryLight: '#5a96c7'
                },
                logo: '',
                fonts: {
                    heading: 'Inter',
                    body: 'Inter'
                }
            },
            socialMedia: {
                facebook: '',
                instagram: '',
                twitter: ''
            },
            content: {
                aboutUs: '',
                mission: '',
                vision: ''
            }
        };
        
        return new Response(JSON.stringify(fallbackData), {
            status: 200,
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
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}
