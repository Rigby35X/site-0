export { renderers } from '../../../renderers.mjs';

const XANO_CONFIG = {
  organizationsUrl: "https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz",
  token: "dummy-org-token-for-deployment"
};
async function makeXanoRequest(endpoint, options = {}) {
  const url = `${XANO_CONFIG.organizationsUrl}${endpoint}`;
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
async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const orgId = url.searchParams.get("orgId") || "3";
    const organization = await makeXanoRequest(`/organizations/${orgId}`);
    return new Response(JSON.stringify(organization), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  } catch (error) {
    console.error("Error fetching organization:", error);
    const fallbackOrg = {
      id: "3",
      name: "Happy Paws Dog Rescue",
      email: "info@happypawsrescue.org",
      phone: "(555) DOG-PAWS",
      address: "123 Rescue Lane, Suite 100, Dog City, CA 90210",
      website: "https://happypawsrescue.org",
      description: "Dedicated to finding loving homes for dogs in need.",
      primary_color: "#2E8B57",
      secondary_color: "#1a5f3f"
    };
    return new Response(JSON.stringify(fallbackOrg), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
async function PUT({ request }) {
  try {
    const body = await request.json();
    const { orgId = "3", ...orgData } = body;
    const updatedOrganization = await makeXanoRequest(`/organizations/${orgId}`, {
      method: "PATCH",
      body: JSON.stringify(orgData)
    });
    return new Response(JSON.stringify(updatedOrganization), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error updating organization:", error);
    return new Response(JSON.stringify({ error: "Failed to update organization" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
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
    PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
