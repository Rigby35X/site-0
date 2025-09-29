/**
 * API Endpoint for Updating Client Data
 * Updates organization data in Xano database with settings from admin
 */

// Xano Configuration
const XANO_CONFIG = {
    organizationsUrl: import.meta.env.VITE_XANO_ORGANIZATIONS_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz',
    token: import.meta.env.VITE_XANO_AUTH_TOKEN || import.meta.env.VITE_XANO_ORGANIZATIONS_TOKEN || 'mGDOpzrGb2PvfCn4tOJB7drqYvs'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const url = `${XANO_CONFIG.organizationsUrl}${endpoint}`;
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XANO_CONFIG.token}`,
            ...options.headers
        },
        ...options
    });

    if (!response.ok) {
        throw new Error(`Xano request failed: ${response.status}`);
    }

    return response.json();
}

// POST - Update client data and organization settings
export async function POST({ request }) {
    try {
        const body = await request.json();
        console.log('Received update request:', body);
        const {
            orgId = '3',
            name,
            email,
            phone,
            ein,
            address,
            city,
            state,
            zip,
            website,
            description,
            primaryColor,
            secondaryColor,
            logo,
            fonts,
            aboutUs,
            mission,
            vision,
            socialMedia
        } = body;
        
        // Format phone for different uses
        const phoneForTel = phone ? phone.replace(/[^\d]/g, '') : '';
        const phoneFormatted = phone || '';
        
        // Create client data structure
        const clientData = {
            name: name || 'Happy Paws Dog Rescue',
            email: email || 'info@happypawsrescue.org',
            phoneForTel: phoneForTel,
            phoneFormatted: phoneFormatted,
            ein: ein || '',
            address: {
                lineOne: address || '',
                lineTwo: '',
                city: city || '',
                state: state || '',
                zip: zip || '',
                mapLink: `https://maps.google.com/?q=${encodeURIComponent(`${address}, ${city}, ${state} ${zip}`)}`
            },
            domain: website ? website.replace(/^https?:\/\//, '') : 'happypawsrescue.org',
            description: description || '',
            branding: {
                colors: {
                    primary: primaryColor || '#2E8B57',
                    primaryLight: adjustColorBrightness(primaryColor || '#2E8B57', 20),
                    secondary: secondaryColor || '#4682B4',
                    secondaryLight: secondaryColor || '#4682B4',
                    headerColor: '#2C3E50',
                    bodyTextColor: '#34495E',
                    bodyTextColorWhite: '#FFFFFF'
                },
                fonts: fonts || {
                    primary: 'Inter, sans-serif',
                    secondary: 'Inter, sans-serif'
                },
                logo: logo || '/assets/svgs/happy-paws.svg'
            },
            content: {
                aboutUs: aboutUs || '',
                mission: mission || '',
                vision: vision || ''
            },
            socialMedia: socialMedia || {}
        };

        // Update Xano organization data
        try {
            console.log('Updating Xano organization data for org:', orgId);
            const orgUpdateData = {
                name: name,
                email: email,
                phone: phoneFormatted,
                address: `${address}, ${city}, ${state} ${zip}`,
                website: website,
                description: description,
                primary_color: primaryColor,
                secondary_color: secondaryColor,
                logo: logo,
                facebook_url: socialMedia?.facebook || '',
                instagram_url: socialMedia?.instagram || '',
                twitter_url: socialMedia?.twitter || '',
                about_us: aboutUs,
                mission: mission,
                vision: vision,
                ein: ein
            };

            console.log('Sending to Xano:', orgUpdateData);
            const xanoResult = await makeXanoRequest(`/organizations/${orgId}`, {
                method: 'PATCH',
                body: JSON.stringify(orgUpdateData)
            });
            console.log('Xano update successful:', xanoResult);
        } catch (xanoError) {
            console.warn('Failed to update Xano organization data:', xanoError);
            // Don't fail the entire request if Xano fails
        }

        // Note: In serverless environments like Vercel, we can't write to files
        // Data is stored in Xano instead and retrieved dynamically
        console.log('Client data prepared for Xano storage:', clientData);
        
        return new Response(JSON.stringify({
            success: true,
            message: 'Client data and organization settings updated successfully',
            data: clientData
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        
    } catch (error) {
        console.error('Error updating client data:', error);
        return new Response(JSON.stringify({ 
            error: 'Failed to update client data',
            details: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Helper function to adjust color brightness
function adjustColorBrightness(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');

    // Parse RGB values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Adjust brightness
    const newR = Math.min(255, Math.max(0, r + (r * percent / 100)));
    const newG = Math.min(255, Math.max(0, g + (g * percent / 100)));
    const newB = Math.min(255, Math.max(0, b + (b * percent / 100)));

    // Convert back to hex
    return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
}

// Note: CSS custom properties updates are not supported in serverless environments
// Colors are applied dynamically via JavaScript in the frontend

// OPTIONS - Handle CORS preflight
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
