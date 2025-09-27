export { renderers } from '../../../renderers.mjs';

const XANO_CONFIG = {
  animalsUrl: "https://x8ki-letl-twmt.n7.xano.io/api:Od874PbA",
  token: "165XkoniNXylFdNKgO_aCvmAIcQ"
};
async function makeXanoRequest(endpoint, options = {}) {
  const url = `${XANO_CONFIG.animalsUrl}${endpoint}`;
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
    const animals = await makeXanoRequest(`/orgs/${orgId}/animals`);
    return new Response(JSON.stringify(animals), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  } catch (error) {
    console.error("Error fetching animals:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch animals" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function POST({ request }) {
  try {
    const body = await request.json();
    const { orgId = "3", ...animalData } = body;
    const dataWithOrg = {
      ...animalData,
      org_id: orgId
    };
    const newAnimal = await makeXanoRequest(`/orgs/${orgId}/animals`, {
      method: "POST",
      body: JSON.stringify(dataWithOrg)
    });
    return new Response(JSON.stringify(newAnimal), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error creating animal:", error);
    return new Response(JSON.stringify({ error: "Failed to create animal" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function PUT({ request }) {
  try {
    const body = await request.json();
    const { id, orgId = "3", ...animalData } = body;
    if (!id) {
      return new Response(JSON.stringify({ error: "Animal ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const updatedAnimal = await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(animalData)
    });
    return new Response(JSON.stringify(updatedAnimal), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error updating animal:", error);
    return new Response(JSON.stringify({ error: "Failed to update animal" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function DELETE({ request }) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const orgId = url.searchParams.get("orgId") || "3";
    if (!id) {
      return new Response(JSON.stringify({ error: "Animal ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await makeXanoRequest(`/orgs/${orgId}/animals/${id}`, {
      method: "DELETE"
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error deleting animal:", error);
    return new Response(JSON.stringify({ error: "Failed to delete animal" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function PATCH({ request }) {
  try {
    const body = await request.json();
    const { orgId = "3", animals } = body;
    if (!animals || !Array.isArray(animals)) {
      return new Response(JSON.stringify({ error: "Animals array is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let imported = 0;
    let errors = 0;
    const errorDetails = [];
    for (let i = 0; i < animals.length; i++) {
      try {
        const animalData = {
          ...animals[i],
          org_id: orgId
        };
        await makeXanoRequest(`/orgs/${orgId}/animals`, {
          method: "POST",
          body: JSON.stringify(animalData)
        });
        imported++;
      } catch (error) {
        errors++;
        errorDetails.push({
          row: i + 1,
          animal: animals[i].name || "Unknown",
          error: error.message
        });
        console.error(`Error importing animal ${i + 1}:`, error);
      }
    }
    return new Response(JSON.stringify({
      imported,
      errors,
      errorDetails: errorDetails.slice(0, 10)
      // Limit error details to first 10
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error in bulk import:", error);
    return new Response(JSON.stringify({ error: "Failed to process bulk import" }), {
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
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    GET,
    OPTIONS,
    PATCH,
    POST,
    PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
