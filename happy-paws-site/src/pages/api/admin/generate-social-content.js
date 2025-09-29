/**
 * API Endpoint for AI-Powered Social Media Content Generation
 * Uses OpenAI API to generate social media posts for animal rescue organizations
 */

// OpenAI Configuration
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-4-1106-preview';

// POST - Generate social media content
export async function POST({ request }) {
    try {
        const body = await request.json();
        const {
            postType,
            platform,
            platformConfig,
            animalData,
            customPrompt,
            tone = 'friendly',
            orgName = 'Happy Paws Dog Rescue'
        } = body;

        if (!OPENAI_API_KEY || OPENAI_API_KEY === 'sk-dummy-key-for-deployment') {
            console.log('OpenAI API key not configured, using fallback content generation');

            // Generate fallback content without OpenAI
            const fallbackContent = generateFallbackContent(postType, platform, platformConfig, animalData, customPrompt, tone, orgName);

            return new Response(JSON.stringify({
                success: true,
                ...fallbackContent,
                platform,
                postType,
                fallback: true,
                message: 'Generated using fallback templates (OpenAI not configured)'
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Debug: Log API key info (safely)
        console.log('OpenAI API Key found:', OPENAI_API_KEY ? `${OPENAI_API_KEY.substring(0, 7)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}` : 'undefined');
        console.log('OpenAI Model:', OPENAI_MODEL);

        // Build the prompt based on post type and platform
        const prompt = buildPrompt(postType, platform, platformConfig, animalData, customPrompt, tone, orgName);

        // Call OpenAI API
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: OPENAI_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a social media expert specializing in animal rescue organizations. Create engaging, heartwarming content that drives adoptions and community engagement.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!openaiResponse.ok) {
            const errorData = await openaiResponse.json();
            throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const openaiData = await openaiResponse.json();
        const generatedContent = openaiData.choices[0]?.message?.content;

        if (!generatedContent) {
            throw new Error('No content generated from OpenAI');
        }

        // Parse the generated content to extract post and hashtags
        const { content, hashtags, imagePrompt } = parseGeneratedContent(generatedContent);

        // Include animal image information if available
        let animalImages = null;
        if (animalData) {
            const images = [];
            if (animalData.image_url) images.push(animalData.image_url);
            if (animalData.images && Array.isArray(animalData.images)) {
                animalData.images.forEach(img => {
                    if (img && !images.includes(img)) images.push(img);
                });
            }
            if (images.length > 0) {
                animalImages = {
                    animalName: animalData.name,
                    images: images,
                    mainImage: images[0]
                };
            }
        }

        return new Response(JSON.stringify({
            success: true,
            content,
            hashtags,
            imagePrompt,
            animalImages,
            platform,
            postType
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (error) {
        console.error('Error generating social content:', error);
        return new Response(JSON.stringify({ 
            error: 'Failed to generate content',
            details: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Helper function to build prompts
function buildPrompt(postType, platform, platformConfig, animalData, customPrompt, tone, orgName) {
    // Enhanced platform specifications with content types
    const platformSpecs = {
        facebook: {
            post: 'Facebook post (conversational, community-focused, 1-2 paragraphs)',
            story: 'Facebook story (brief, engaging, call-to-action)',
            event: 'Facebook event description (informative, exciting)',
            fundraiser: 'Facebook fundraiser post (compelling, urgent, emotional)'
        },
        instagram: {
            post: 'Instagram feed post (visual-first, emoji-rich, hashtag-heavy)',
            story: 'Instagram story (brief, engaging, swipe-up worthy)',
            reel: 'Instagram reel caption (trendy, engaging, hook-focused)',
            carousel: 'Instagram carousel post (storytelling, educational)'
        },
        twitter: {
            tweet: 'Twitter post (concise, under 280 characters, punchy)',
            thread: 'Twitter thread starter (engaging hook, thread-worthy)',
            poll: 'Twitter poll post (engaging question, clear options)',
            space: 'Twitter Space announcement (exciting, informative)'
        },
        linkedin: {
            post: 'LinkedIn post (professional, impact-focused, longer form)',
            article: 'LinkedIn article introduction (professional, thought-leadership)',
            event: 'LinkedIn event post (professional networking focused)',
            job: 'LinkedIn job posting (professional, detailed, appealing)'
        },
        tiktok: {
            video: 'TikTok video caption (trendy, engaging, hook-focused)',
            trend: 'TikTok trend participation (current trends, viral potential)',
            educational: 'TikTok educational content (informative, engaging)',
            'behind-scenes': 'TikTok behind-the-scenes content (authentic, relatable)'
        },
        youtube: {
            short: 'YouTube Short description (engaging, hook-focused)',
            video: 'YouTube video description (detailed, SEO-friendly)',
            live: 'YouTube live stream description (exciting, informative)',
            premiere: 'YouTube premiere announcement (anticipation-building)'
        }
    };

    // Get platform-specific content type
    const contentType = platformConfig?.type || 'post';
    const platformSpec = platformSpecs[platform]?.[contentType] || platformSpecs[platform]?.post || `${platform} ${contentType}`;

    // Enhanced audience targeting
    const audienceContext = platformConfig?.audience || platformConfig?.focus || platformConfig?.trend || '';
    const styleContext = platformConfig?.style || '';

    // Build audience-specific context
    let audiencePrompt = '';
    if (audienceContext) {
        const audienceMap = {
            adopters: 'potential pet adopters looking for their perfect companion',
            volunteers: 'people interested in volunteering with animal rescue',
            donors: 'supporters who care about animal welfare and rescue funding',
            general: 'animal lovers and the general public',
            impact: 'professionals interested in social impact and community work',
            corporate: 'businesses and corporate partners for collaboration'
        };
        audiencePrompt = `Target audience: ${audienceMap[audienceContext] || audienceContext}. `;
    }

    // Enhanced post type templates with audience and style context
    const postTypeTemplates = {
        new_arrival: `Create a ${platformSpec} announcing a new animal arrival at ${orgName}. ${audiencePrompt}Focus on creating excitement and urgency for potential adopters.`,
        adoption_update: `Create a ${platformSpec} celebrating a successful adoption at ${orgName}. ${audiencePrompt}Highlight the happy ending and inspire others to adopt.`,
        fundraiser: `Create a ${platformSpec} for a fundraising campaign at ${orgName}. ${audiencePrompt}Create urgency and emotional connection to drive donations.`,
        volunteer_need: `Create a ${platformSpec} recruiting volunteers for ${orgName}. ${audiencePrompt}Emphasize the rewarding nature of volunteer work and community impact.`,
        success_story: `Create a ${platformSpec} sharing a heartwarming success story from ${orgName}. ${audiencePrompt}Focus on emotional storytelling and positive outcomes.`,
        event: `Create a ${platformSpec} promoting an upcoming event at ${orgName}. ${audiencePrompt}Create excitement and encourage attendance.`,
        general: customPrompt || `Create a ${platformSpec} for ${orgName}. ${audiencePrompt}Engage the community and promote animal welfare.`
    };

    let prompt = postTypeTemplates[postType] || postTypeTemplates.general;

    // Add style context if provided
    if (styleContext) {
        const styleMap = {
            aesthetic: 'Use an aesthetic, visually-focused approach with beautiful language.',
            candid: 'Use a candid, authentic, behind-the-scenes style.',
            educational: 'Focus on educational content that teaches about animal care.',
            emotional: 'Use emotional storytelling to create deep connections.',
            conversational: 'Use a conversational, friendly tone.',
            news: 'Use a news-style, factual approach.',
            humorous: 'Include appropriate humor while staying respectful.',
            urgent: 'Create urgency and immediate action.',
            professional: 'Maintain a professional, business-appropriate tone.'
        };

        if (styleMap[styleContext]) {
            prompt += ` ${styleMap[styleContext]}`;
        }
    }

    // Add animal data if provided
    if (animalData && animalData.name) {
        // Check if animal has photos
        const hasPhotos = (animalData.image_url || (animalData.images && animalData.images.length > 0));

        prompt += `\n\nAnimal Details:
- Name: ${animalData.name}
- Species: ${animalData.species || 'Dog'}
- Breed: ${animalData.breed || 'Mixed Breed'}
- Age: ${animalData.age || 'Unknown'}
- Gender: ${animalData.gender || 'Unknown'}
- Description: ${animalData.description || 'A wonderful companion looking for love'}
- Photos Available: ${hasPhotos ? 'Yes - actual photos of this animal are available for the post' : 'No - generic photos will be needed'}`;
    }

    // Add expert social media marketing context
    prompt = `You are a social media marketing expert specializing in animal rescue organizations. Your task is to create innovative, engaging content that resonates with animal rescuers, potential adopters, animal lovers, fosters, and volunteers.

${prompt}

The content should be fresh, relevant, and align with current ${platform} trends. Focus on creating content that encourages interaction, sharing, and meaningful engagement with the animal rescue community.

Consider these engagement strategies:
- Use storytelling to create emotional connections
- Include clear calls-to-action
- Leverage current social media trends appropriately
- Create content that encourages user-generated content
- Build community and foster relationships

Tone: ${tone}
Platform: ${platform} (${contentType})
${styleContext ? `Style: ${styleContext}` : ''}
${audienceContext ? `Target Audience: ${audienceContext}` : ''}

Please format your response as:
CONTENT: [the social media post content optimized for ${platform} ${contentType}]
HASHTAGS: [relevant hashtags separated by commas, optimized for ${platform}]
IMAGE_PROMPT: [a brief description for an image that would accompany this post, considering ${platform} visual requirements]`;

    // Add platform-specific link if provided
    if (platformConfig?.link) {
        prompt += `\nINCLUDE_LINK: ${platformConfig.link}`;
    }

    return prompt;
}

// Helper function to generate fallback content without OpenAI
function generateFallbackContent(postType, platform, platformConfig, animalData, customPrompt, tone, orgName) {
    const contentType = platformConfig?.type || 'post';

    // Fallback content templates
    const templates = {
        new_arrival: {
            content: animalData ?
                `🐾 Meet ${animalData.name}! This adorable ${animalData.breed || 'pup'} just arrived at ${orgName} and is looking for their forever home. ${animalData.description || 'They\'re full of love and ready to bring joy to a special family!'} Could that be you? 💕` :
                `🐾 We have a wonderful new arrival at ${orgName}! This sweet pup is looking for their forever home. Could that be you? 💕`,
            hashtags: ['NewArrival', 'AdoptDontShop', 'RescueDog', 'ForeverHome', 'AnimalRescue'],
            imagePrompt: animalData ? `Photo of ${animalData.name}, a ${animalData.breed || 'dog'} available for adoption` : 'Photo of a cute dog available for adoption'
        },
        adoption_update: {
            content: animalData ?
                `🎉 ADOPTED! ${animalData.name} has found their forever family! We're so happy to see this sweet ${animalData.breed || 'pup'} start their new chapter. Thank you to their new family for choosing adoption! ❤️` :
                `🎉 ADOPTED! Another success story from ${orgName}! We're so happy to see another pup find their forever family. Thank you for choosing adoption! ❤️`,
            hashtags: ['Adopted', 'SuccessStory', 'ForeverHome', 'AdoptDontShop', 'HappyEnding'],
            imagePrompt: animalData ? `Happy photo of ${animalData.name} with their new family` : 'Happy photo of an adopted dog with their new family'
        },
        fundraiser: {
            content: `🚨 Help us help them! ${orgName} needs your support to continue our mission of rescuing and caring for animals in need. Every donation, no matter the size, makes a difference in an animal's life. Can you help us reach our goal? 🙏`,
            hashtags: ['Fundraiser', 'DonateNow', 'AnimalRescue', 'HelpAnimals', 'MakeADifference'],
            imagePrompt: 'Heartwarming photo of rescued animals being cared for'
        },
        volunteer_need: {
            content: `🙋‍♀️ Calling all animal lovers! ${orgName} is looking for amazing volunteers to help with our mission. Whether you can walk dogs, help with events, or assist with admin tasks, we need YOU! Join our pack and make a difference! 🐕`,
            hashtags: ['Volunteer', 'JoinOurTeam', 'AnimalRescue', 'MakeADifference', 'CommunitySupport'],
            imagePrompt: 'Photo of volunteers happily working with rescue animals'
        },
        success_story: {
            content: animalData ?
                `💕 Success Story Saturday! Remember ${animalData.name}? This amazing ${animalData.breed || 'pup'} was once in need of rescue, and now look at them thriving in their forever home! Stories like this remind us why we do what we do. ✨` :
                `💕 Success Story Saturday! Another amazing transformation thanks to the power of rescue and love. Stories like this remind us why we do what we do at ${orgName}! ✨`,
            hashtags: ['SuccessStory', 'Transformation', 'RescueStory', 'ForeverHome', 'LoveWins'],
            imagePrompt: animalData ? `Before and after photos of ${animalData.name} showing their transformation` : 'Before and after photos showing a rescue transformation'
        },
        event: {
            content: `📅 Mark your calendars! ${orgName} has an exciting event coming up and we'd love to see you there! Join us for a day of fun, furry friends, and community. Details in our bio! 🎉`,
            hashtags: ['Event', 'CommunityEvent', 'FunForAll', 'AnimalRescue', 'JoinUs'],
            imagePrompt: 'Promotional image for an animal rescue event with happy people and dogs'
        },
        general: {
            content: customPrompt || `🐾 Every day at ${orgName}, we're working hard to give animals the second chance they deserve. From rescue to rehabilitation to finding forever homes, it's all about love. Thank you for being part of our mission! ❤️`,
            hashtags: ['AnimalRescue', 'SecondChances', 'AdoptDontShop', 'RescueLife', 'LoveAnimals'],
            imagePrompt: 'Heartwarming photo of rescue animals being cared for'
        }
    };

    // Get template or use general
    const template = templates[postType] || templates.general;

    // Adjust content for platform
    let content = template.content;
    let hashtags = [...template.hashtags];

    // Platform-specific adjustments
    if (platform === 'twitter') {
        // Shorten for Twitter
        if (content.length > 240) {
            content = content.substring(0, 237) + '...';
        }
        hashtags = hashtags.slice(0, 3); // Fewer hashtags for Twitter
    } else if (platform === 'instagram') {
        // Add more emojis for Instagram
        content = content.replace(/\./g, ' ✨');
        hashtags.push('Instadog', 'PuppyLove', 'RescueLife');
    } else if (platform === 'linkedin') {
        // More professional tone for LinkedIn
        content = content.replace(/🐾|🎉|💕/g, '').trim();
        hashtags = ['AnimalWelfare', 'CommunityImpact', 'SocialGood', 'Nonprofit'];
    }

    // Add platform-specific hashtags
    const platformHashtags = {
        instagram: ['DogsOfInstagram', 'RescueDogsOfInstagram', 'AdoptDontShop'],
        facebook: ['AnimalRescue', 'CommunitySupport', 'AdoptDontShop'],
        twitter: ['RescueDogs', 'AdoptDontShop'],
        linkedin: ['AnimalWelfare', 'SocialImpact'],
        tiktok: ['RescueDogs', 'DogsOfTikTok', 'AdoptDontShop']
    };

    if (platformHashtags[platform]) {
        hashtags.push(...platformHashtags[platform]);
    }

    // Remove duplicates and limit hashtags
    hashtags = [...new Set(hashtags)].slice(0, platform === 'instagram' ? 15 : 8);

    return {
        content,
        hashtags,
        imagePrompt: template.imagePrompt,
        animalImages: animalData ? {
            animalName: animalData.name,
            images: animalData.image_url ? [animalData.image_url] : [],
            mainImage: animalData.image_url
        } : null
    };
}

// Helper function to parse generated content
function parseGeneratedContent(generatedText) {
    const lines = generatedText.split('\n');
    let content = '';
    let hashtags = [];
    let imagePrompt = '';

    for (const line of lines) {
        if (line.startsWith('CONTENT:')) {
            content = line.replace('CONTENT:', '').trim();
        } else if (line.startsWith('HASHTAGS:')) {
            const hashtagText = line.replace('HASHTAGS:', '').trim();
            hashtags = hashtagText.split(',').map(tag => tag.trim().replace('#', ''));
        } else if (line.startsWith('IMAGE_PROMPT:')) {
            imagePrompt = line.replace('IMAGE_PROMPT:', '').trim();
        } else if (!content && line.trim()) {
            // If no CONTENT: prefix found, use the first non-empty line
            content = line.trim();
        }
    }

    // Fallback hashtags if none were generated
    if (hashtags.length === 0) {
        hashtags = ['AdoptDontShop', 'RescueAnimals', 'AnimalRescue', 'ForeverHome'];
    }

    return { content, hashtags, imagePrompt };
}

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
