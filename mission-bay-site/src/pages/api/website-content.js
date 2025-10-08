/**
 * API Endpoint for Website Content
 * Fetches dynamic content from Xano for homepage sections
 */

// Enable server-side rendering for this endpoint
export const prerender = false;

// Xano Configuration
const XANO_CONFIG = {
    contentUrl: import.meta.env.VITE_XANO_CONTENT_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:MU8UozDK',
    token: import.meta.env.VITE_XANO_CONTENT_TOKEN || '165XkoniNXylFdNKgO_aCvmAIcQ'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const url = `${XANO_CONFIG.contentUrl}${endpoint}`;
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

// GET - Fetch website content for organization
export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const orgId = url.searchParams.get('orgId') || '9';
        const pageSlug = url.searchParams.get('page') || 'homepage';
        
        console.log(`🎨 Fetching website content for org ${orgId}, page ${pageSlug}`);
        
        let content;
        try {
            // Fetch content from Xano - Note: Xano expects query parameter, not path parameter
            content = await makeXanoRequest(`/website_content/${orgId}?id=1`);
            console.log('✅ Website content fetched from Xano:', content.length, 'sections');
            
            // Organize content by section_key for easier access
            const organizedContent = {};
            content.forEach(section => {
                // Include content for the requested page OR global content (footer, header, etc.)
                if ((section.page_slug === pageSlug || section.page_slug === 'global') && section.is_visible) {
                    // For footer, structure the content to match what admin expects
                    if (section.section_key === 'footer') {
                        organizedContent[section.section_key] = {
                            content: {
                                footer_organization_name: section.footer_organization_name,
                                footer_address_line_one: section.footer_address_line_one,
                                footer_address_line_two: section.footer_address_line_two,
                                footer_address_city: section.footer_address_city,
                                footer_address_state: section.footer_address_state,
                                footer_address_zip: section.footer_address_zip,
                                footer_phone: section.footer_phone,
                                footer_email: section.footer_email,
                                footer_copyright: section.footer_copyright,
                                footer_ein: section.footer_ein
                            }
                        };
                    } else {
                        organizedContent[section.section_key] = section;
                    }
                }
            });
            
            console.log('📋 Organized content sections:', Object.keys(organizedContent));
            
            return new Response(JSON.stringify(organizedContent), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                }
            });
            
        } catch (xanoError) {
            console.warn('⚠️ Xano fetch failed:', xanoError.message);
            
            // Return fallback content
            const fallbackContent = {
                hero: {
                    headline: "Every Dog Deserves a Loving Home",
                    subheadline: "Rescue • Love • Adopt",
                    body_text: "At Mission Bay Puppy Rescue, we're dedicated to finding loving homes for dogs in need.",
                    button_text: "Meet Our Dogs",
                    button_link: "/our-animals/",
                    background_image_url: "/assets/images/hero.jpg"
                },
                about_us: {
                    headline: "About Mission Bay Puppy Rescue",
                    subheadline: "About Us",
                    body_text: "Founded in 2020, Mission Bay Puppy Rescue has been dedicated to saving and rehoming dogs throughout San Diego.",
                    button_text: "More About Us",
                    button_link: "/about"
                },
                cta: {
                    headline: "Ready to Find Your New Best Friend?",
                    body_text: "Browse our available dogs, submit an application, or learn how you can help support our mission.",
                    button_text: "Start Your Adoption Journey",
                    button_link: "/our-animals"
                },
                footer: {
                    organization_name: "Mission Bay Puppy Rescue",
                    address_line_one: "123 Main Street",
                    address_line_two: "Suite 200",
                    address_city: "San Diego",
                    address_state: "CA",
                    address_zip: "92109",
                    phone: "555-555-5555",
                    email: "info@mbpr.org",
                    ein: "87-2984609"
                }
            };
            
            return new Response(JSON.stringify(fallbackContent), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
        
    } catch (error) {
        console.error('Error in website-content GET:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch website content' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// PUT - Update website content
export async function PUT({ request }) {
    try {
        // Get the request body as text first, then parse
        const requestBody = await request.text();
        console.log('📝 Raw request body:', requestBody);

        if (!requestBody) {
            throw new Error('Request body is empty');
        }

        const { orgId, sectionKey, content } = JSON.parse(requestBody);
        console.log(`🎨 Updating website content for org ${orgId}, section ${sectionKey}`, content);

        try {
            // First, get all content to find the record ID for this section
            console.log('🔍 Finding record ID for section:', sectionKey);
            const allContent = await makeXanoRequest(`/website_content/${orgId}?id=1`);

            // For global content (footer), look for global page_slug; for other sections, look for specific page
            const recordToUpdate = allContent.find(record =>
                record.section_key === sectionKey &&
                record.org_id == orgId &&
                (record.page_slug === 'global' || record.page_slug === 'homepage')
            );

            if (!recordToUpdate) {
                console.log(`📝 No existing record found for section '${sectionKey}', creating new record`);

                // Create new record - footer should be global, others are page-specific
                const newRecord = {
                    org_id: parseInt(orgId),
                    section_key: sectionKey,
                    page_slug: sectionKey === 'footer' ? 'global' : 'homepage',
                    is_visible: true,
                    content: content
                };

                console.log('🚀 Creating new record with data:', JSON.stringify(newRecord, null, 2));

                const createdRecord = await makeXanoRequest(`/website_content/${orgId}`, {
                    method: 'POST',
                    body: JSON.stringify(newRecord)
                });

                console.log('✅ Created new website content record:', createdRecord);

                return new Response(JSON.stringify({
                    success: true,
                    message: 'Content created successfully',
                    data: createdRecord
                }), {
                    status: 201,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            console.log('📝 Found record to update:', recordToUpdate.id);

            // Prepare update data with only the fields that were provided
            const updateData = {
                ...content,
                updated_at: Date.now()
            };

            console.log('🚀 Updating record with data:', updateData);

            // Make the PATCH request to update the record
            // Use the correct Xano endpoint with website_content_id parameter
            const xanoUpdateUrl = `https://x8ki-letl-twmt.n7.xano.io/api:MU8UozDK/website_content/${recordToUpdate.id}`;
            console.log('🌐 Making PATCH request to:', xanoUpdateUrl);
            console.log('📝 Record ID being updated:', recordToUpdate.id);

            const updateResponse = await fetch(xanoUpdateUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData)
            });

            if (!updateResponse.ok) {
                throw new Error(`Xano PATCH failed: ${updateResponse.status} ${updateResponse.statusText}`);
            }

            const updateResult = await updateResponse.json();

            console.log('✅ Content updated successfully in Xano:', updateResult);

            return new Response(JSON.stringify({
                success: true,
                message: 'Content updated successfully and saved to database!',
                data: updateResult
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

        } catch (xanoError) {
            console.error('⚠️ Xano update failed:', xanoError.message);

            return new Response(JSON.stringify({
                success: false,
                error: `Failed to update content: ${xanoError.message}`
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

    } catch (error) {
        console.error('Error in website-content PUT:', error);
        return new Response(JSON.stringify({
            success: false,
            error: `Failed to update website content: ${error.message}`
        }), {
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
