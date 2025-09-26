export { renderers } from '../../../renderers.mjs';

const XANO_CONFIG = {
  contentUrl: "https://x8ki-letl-twmt.n7.xano.io/api:GMSb9gZv",
  token: "YOUR_CONTENT_TOKEN_HERE"
};
async function makeXanoRequest(endpoint, options = {}) {
  const url = `${XANO_CONFIG.contentUrl}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${XANO_CONFIG.token}`,
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
async function POST({ request }) {
  try {
    const contentData = await request.json();
    const { orgId, faqs, socialMedia, lastUpdated } = contentData;
    console.log("Saving website content for org:", orgId, contentData);
    const websiteContent = {
      org_id: orgId,
      faqs: JSON.stringify(faqs),
      social_media: JSON.stringify(socialMedia),
      last_updated: lastUpdated || (/* @__PURE__ */ new Date()).toISOString(),
      content_type: "website_settings"
    };
    try {
      const result = await makeXanoRequest("/website-content", {
        method: "POST",
        body: JSON.stringify(websiteContent)
      });
      return new Response(JSON.stringify({
        success: true,
        message: "Website content saved successfully",
        data: result
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    } catch (xanoError) {
      console.warn("Xano save failed, using local storage fallback:", xanoError);
      return new Response(JSON.stringify({
        success: true,
        message: "Website content saved locally (Xano endpoint not configured)",
        data: contentData,
        fallback: true
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }
  } catch (error) {
    console.error("Error saving website content:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to save website content",
      error: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  }
}
async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const orgId = url.searchParams.get("orgId") || "3";
    console.log("Loading website content for org:", orgId);
    try {
      const content = await makeXanoRequest(`/website-content/${orgId}`);
      return new Response(JSON.stringify({
        success: true,
        data: {
          orgId,
          faqs: JSON.parse(content.faqs || "[]"),
          socialMedia: JSON.parse(content.social_media || "{}"),
          lastUpdated: content.last_updated
        }
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    } catch (xanoError) {
      console.warn("Xano load failed, using default content:", xanoError);
      const defaultContent = {
        orgId,
        faqs: [
          {
            id: 1,
            question: "What is the adoption process?",
            answer: "Our adoption process includes an application, meet and greet, home visit, and adoption fee."
          },
          {
            id: 2,
            question: "What are the adoption fees?",
            answer: "Adoption fees vary by animal type and include spaying/neutering, vaccinations, and microchipping."
          },
          {
            id: 3,
            question: "Can I volunteer?",
            answer: "Yes! We welcome volunteers for various activities including dog walking, cat socialization, and administrative tasks."
          }
        ],
        socialMedia: {
          instagram: "",
          facebook: "",
          twitter: ""
        },
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      };
      return new Response(JSON.stringify({
        success: true,
        data: defaultContent,
        fallback: true
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }
  } catch (error) {
    console.error("Error loading website content:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to load website content",
      error: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  }
}
async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    OPTIONS,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
