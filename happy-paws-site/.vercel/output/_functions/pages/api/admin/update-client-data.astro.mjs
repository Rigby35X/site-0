export { renderers } from '../../../renderers.mjs';

const XANO_CONFIG = {
  organizationsUrl: "https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz",
  token: "mGDOpzrGb2PvfCn4tOJB7drqYvs"
};
async function makeXanoRequest(endpoint, options = {}) {
  const url = `${XANO_CONFIG.organizationsUrl}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${XANO_CONFIG.token}`,
      ...options.headers
    },
    ...options
  });
  if (!response.ok) {
    throw new Error(`Xano request failed: ${response.status}`);
  }
  return response.json();
}
async function POST({ request }) {
  try {
    const body = await request.json();
    console.log("Received update request:", body);
    const {
      orgId = "3",
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
    const phoneForTel = phone ? phone.replace(/[^\d]/g, "") : "";
    const phoneFormatted = phone || "";
    const clientData = {
      name: name || "Happy Paws Dog Rescue",
      email: email || "info@happypawsrescue.org",
      phoneForTel,
      phoneFormatted,
      ein: ein || "",
      address: {
        lineOne: address || "",
        lineTwo: "",
        city: city || "",
        state: state || "",
        zip: zip || "",
        mapLink: `https://maps.google.com/?q=${encodeURIComponent(`${address}, ${city}, ${state} ${zip}`)}`
      },
      domain: website ? website.replace(/^https?:\/\//, "") : "happypawsrescue.org",
      description: description || "",
      branding: {
        colors: {
          primary: primaryColor || "#2E8B57",
          primaryLight: adjustColorBrightness(primaryColor || "#2E8B57", 20),
          secondary: secondaryColor || "#4682B4",
          secondaryLight: secondaryColor || "#4682B4",
          headerColor: "#2C3E50",
          bodyTextColor: "#34495E",
          bodyTextColorWhite: "#FFFFFF"
        },
        fonts: fonts || {
          primary: "Inter, sans-serif",
          secondary: "Inter, sans-serif"
        },
        logo: logo || "/assets/svgs/happy-paws.svg"
      },
      content: {
        aboutUs: aboutUs || "",
        mission: mission || "",
        vision: vision || ""
      },
      socialMedia: socialMedia || {}
    };
    try {
      console.log("Updating Xano organization data for org:", orgId);
      const orgUpdateData = {
        name,
        email,
        phone: phoneFormatted,
        address: `${address}, ${city}, ${state} ${zip}`,
        website,
        description,
        primary_color: primaryColor,
        secondary_color: secondaryColor,
        logo,
        facebook_url: socialMedia?.facebook || "",
        instagram_url: socialMedia?.instagram || "",
        twitter_url: socialMedia?.twitter || "",
        about_us: aboutUs,
        mission,
        vision,
        ein
      };
      console.log("Sending to Xano:", orgUpdateData);
      const xanoResult = await makeXanoRequest(`/organizations/${orgId}`, {
        method: "PATCH",
        body: JSON.stringify(orgUpdateData)
      });
      console.log("Xano update successful:", xanoResult);
    } catch (xanoError) {
      console.warn("Failed to update Xano organization data:", xanoError);
    }
    console.log("Client data prepared for Xano storage:", clientData);
    return new Response(JSON.stringify({
      success: true,
      message: "Client data and organization settings updated successfully",
      data: clientData
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error updating client data:", error);
    return new Response(JSON.stringify({
      error: "Failed to update client data",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
function adjustColorBrightness(hex, percent) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const newR = Math.min(255, Math.max(0, r + r * percent / 100));
  const newG = Math.min(255, Math.max(0, g + g * percent / 100));
  const newB = Math.min(255, Math.max(0, b + b * percent / 100));
  return `#${Math.round(newR).toString(16).padStart(2, "0")}${Math.round(newG).toString(16).padStart(2, "0")}${Math.round(newB).toString(16).padStart(2, "0")}`;
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
