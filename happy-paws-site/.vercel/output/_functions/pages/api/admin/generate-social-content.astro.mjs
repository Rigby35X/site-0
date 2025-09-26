export { renderers } from '../../../renderers.mjs';

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";
const OPENAI_MODEL = "gpt-4-1106-preview";
async function POST({ request }) {
  try {
    const body = await request.json();
    const {
      postType,
      platform,
      platformConfig,
      animalData,
      customPrompt,
      tone = "friendly",
      orgName = "Happy Paws Dog Rescue"
    } = body;
    if (!OPENAI_API_KEY) ;
    console.log("OpenAI API Key found:", OPENAI_API_KEY ? `${OPENAI_API_KEY.substring(0, 7)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}` : "undefined");
    console.log("OpenAI Model:", OPENAI_MODEL);
    const prompt = buildPrompt(postType, platform, platformConfig, animalData, customPrompt, tone, orgName);
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: "You are a social media expert specializing in animal rescue organizations. Create engaging, heartwarming content that drives adoptions and community engagement."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });
    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || "Unknown error"}`);
    }
    const openaiData = await openaiResponse.json();
    const generatedContent = openaiData.choices[0]?.message?.content;
    if (!generatedContent) {
      throw new Error("No content generated from OpenAI");
    }
    const { content, hashtags, imagePrompt } = parseGeneratedContent(generatedContent);
    let animalImages = null;
    if (animalData) {
      const images = [];
      if (animalData.image_url) images.push(animalData.image_url);
      if (animalData.images && Array.isArray(animalData.images)) {
        animalData.images.forEach((img) => {
          if (img && !images.includes(img)) images.push(img);
        });
      }
      if (images.length > 0) {
        animalImages = {
          animalName: animalData.name,
          images,
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
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error generating social content:", error);
    return new Response(JSON.stringify({
      error: "Failed to generate content",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
function buildPrompt(postType, platform, platformConfig, animalData, customPrompt, tone, orgName) {
  const platformSpecs = {
    facebook: {
      post: "Facebook post (conversational, community-focused, 1-2 paragraphs)",
      story: "Facebook story (brief, engaging, call-to-action)",
      event: "Facebook event description (informative, exciting)",
      fundraiser: "Facebook fundraiser post (compelling, urgent, emotional)"
    },
    instagram: {
      post: "Instagram feed post (visual-first, emoji-rich, hashtag-heavy)",
      story: "Instagram story (brief, engaging, swipe-up worthy)",
      reel: "Instagram reel caption (trendy, engaging, hook-focused)",
      carousel: "Instagram carousel post (storytelling, educational)"
    },
    twitter: {
      tweet: "Twitter post (concise, under 280 characters, punchy)",
      thread: "Twitter thread starter (engaging hook, thread-worthy)",
      poll: "Twitter poll post (engaging question, clear options)",
      space: "Twitter Space announcement (exciting, informative)"
    },
    linkedin: {
      post: "LinkedIn post (professional, impact-focused, longer form)",
      article: "LinkedIn article introduction (professional, thought-leadership)",
      event: "LinkedIn event post (professional networking focused)",
      job: "LinkedIn job posting (professional, detailed, appealing)"
    },
    tiktok: {
      video: "TikTok video caption (trendy, engaging, hook-focused)",
      trend: "TikTok trend participation (current trends, viral potential)",
      educational: "TikTok educational content (informative, engaging)",
      "behind-scenes": "TikTok behind-the-scenes content (authentic, relatable)"
    },
    youtube: {
      short: "YouTube Short description (engaging, hook-focused)",
      video: "YouTube video description (detailed, SEO-friendly)",
      live: "YouTube live stream description (exciting, informative)",
      premiere: "YouTube premiere announcement (anticipation-building)"
    }
  };
  const contentType = platformConfig?.type || "post";
  const platformSpec = platformSpecs[platform]?.[contentType] || platformSpecs[platform]?.post || `${platform} ${contentType}`;
  const audienceContext = platformConfig?.audience || platformConfig?.focus || platformConfig?.trend || "";
  const styleContext = platformConfig?.style || "";
  let audiencePrompt = "";
  if (audienceContext) {
    const audienceMap = {
      adopters: "potential pet adopters looking for their perfect companion",
      volunteers: "people interested in volunteering with animal rescue",
      donors: "supporters who care about animal welfare and rescue funding",
      general: "animal lovers and the general public",
      impact: "professionals interested in social impact and community work",
      corporate: "businesses and corporate partners for collaboration"
    };
    audiencePrompt = `Target audience: ${audienceMap[audienceContext] || audienceContext}. `;
  }
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
  if (styleContext) {
    const styleMap = {
      aesthetic: "Use an aesthetic, visually-focused approach with beautiful language.",
      candid: "Use a candid, authentic, behind-the-scenes style.",
      educational: "Focus on educational content that teaches about animal care.",
      emotional: "Use emotional storytelling to create deep connections.",
      conversational: "Use a conversational, friendly tone.",
      news: "Use a news-style, factual approach.",
      humorous: "Include appropriate humor while staying respectful.",
      urgent: "Create urgency and immediate action.",
      professional: "Maintain a professional, business-appropriate tone."
    };
    if (styleMap[styleContext]) {
      prompt += ` ${styleMap[styleContext]}`;
    }
  }
  if (animalData && animalData.name) {
    const hasPhotos = animalData.image_url || animalData.images && animalData.images.length > 0;
    prompt += `

Animal Details:
- Name: ${animalData.name}
- Species: ${animalData.species || "Dog"}
- Breed: ${animalData.breed || "Mixed Breed"}
- Age: ${animalData.age || "Unknown"}
- Gender: ${animalData.gender || "Unknown"}
- Description: ${animalData.description || "A wonderful companion looking for love"}
- Photos Available: ${hasPhotos ? "Yes - actual photos of this animal are available for the post" : "No - generic photos will be needed"}`;
  }
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
${styleContext ? `Style: ${styleContext}` : ""}
${audienceContext ? `Target Audience: ${audienceContext}` : ""}

Please format your response as:
CONTENT: [the social media post content optimized for ${platform} ${contentType}]
HASHTAGS: [relevant hashtags separated by commas, optimized for ${platform}]
IMAGE_PROMPT: [a brief description for an image that would accompany this post, considering ${platform} visual requirements]`;
  if (platformConfig?.link) {
    prompt += `
INCLUDE_LINK: ${platformConfig.link}`;
  }
  return prompt;
}
function parseGeneratedContent(generatedText) {
  const lines = generatedText.split("\n");
  let content = "";
  let hashtags = [];
  let imagePrompt = "";
  for (const line of lines) {
    if (line.startsWith("CONTENT:")) {
      content = line.replace("CONTENT:", "").trim();
    } else if (line.startsWith("HASHTAGS:")) {
      const hashtagText = line.replace("HASHTAGS:", "").trim();
      hashtags = hashtagText.split(",").map((tag) => tag.trim().replace("#", ""));
    } else if (line.startsWith("IMAGE_PROMPT:")) {
      imagePrompt = line.replace("IMAGE_PROMPT:", "").trim();
    } else if (!content && line.trim()) {
      content = line.trim();
    }
  }
  if (hashtags.length === 0) {
    hashtags = ["AdoptDontShop", "RescueAnimals", "AnimalRescue", "ForeverHome"];
  }
  return { content, hashtags, imagePrompt };
}
async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    OPTIONS,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
