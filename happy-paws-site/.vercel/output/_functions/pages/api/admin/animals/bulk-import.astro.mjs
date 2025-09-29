export { renderers } from '../../../../renderers.mjs';

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
function validateAnimalData(animal) {
  const errors = [];
  if (!animal.name || animal.name.trim() === "") {
    errors.push("Name is required");
  }
  if (!animal.type || !["Dog", "Cat", "Other"].includes(animal.type)) {
    errors.push("Type must be Dog, Cat, or Other");
  }
  if (!["Available", "Pending", "Adopted"].includes(animal.status)) {
    errors.push("Status must be Available, Pending, or Adopted");
  }
  if (animal.age && typeof animal.age !== "string") {
    errors.push("Age must be a string");
  }
  if (!["Male", "Female", "Unknown"].includes(animal.gender)) {
    errors.push("Gender must be Male, Female, or Unknown");
  }
  if (!["Small", "Medium", "Large", "Extra Large"].includes(animal.size)) {
    errors.push("Size must be Small, Medium, Large, or Extra Large");
  }
  if (animal.specialNeeds !== void 0 && typeof animal.specialNeeds !== "boolean") {
    errors.push("Special Needs must be true or false");
  }
  if (animal.goodWithKids !== void 0 && typeof animal.goodWithKids !== "boolean") {
    errors.push("Good With Kids must be true or false");
  }
  if (animal.goodWithCats !== void 0 && typeof animal.goodWithCats !== "boolean") {
    errors.push("Good With Cats must be true or false");
  }
  if (animal.goodWithDogs !== void 0 && typeof animal.goodWithDogs !== "boolean") {
    errors.push("Good With Dogs must be true or false");
  }
  return errors;
}
function transformAnimalData(csvAnimal) {
  const species = csvAnimal.species || csvAnimal.type || "Dog";
  const type = species.charAt(0).toUpperCase() + species.slice(1).toLowerCase();
  return {
    name: csvAnimal.name?.trim() || "",
    type: type === "Dog" || type === "Cat" ? type : "Other",
    breed: csvAnimal.breed?.trim() || "",
    age: csvAnimal.age?.trim() || "",
    gender: csvAnimal.gender?.trim() || "Unknown",
    size: csvAnimal.size?.trim() || "Medium",
    weight: csvAnimal.weight?.trim() || "",
    status: csvAnimal.status?.trim() || "Available",
    arrivalDate: csvAnimal.arrivalDate?.trim() || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    description: csvAnimal.description?.trim() || "",
    specialNeeds: csvAnimal.special_needs === "true" || csvAnimal.specialNeeds === "true" || csvAnimal.special_needs === true || csvAnimal.specialNeeds === true,
    goodWithKids: csvAnimal.good_with_kids === "true" || csvAnimal.goodWithKids === "true" || csvAnimal.good_with_kids === true || csvAnimal.goodWithKids === true,
    goodWithCats: csvAnimal.good_with_cats === "true" || csvAnimal.goodWithCats === "true" || csvAnimal.good_with_cats === true || csvAnimal.goodWithCats === true,
    goodWithDogs: csvAnimal.good_with_dogs === "true" || csvAnimal.goodWithDogs === "true" || csvAnimal.good_with_dogs === true || csvAnimal.goodWithDogs === true,
    image: csvAnimal.image_url?.trim() || csvAnimal.image?.trim() || "/assets/images/animals/placeholder.jpg",
    images: csvAnimal.images ? csvAnimal.images.split(",").map((img) => img.trim()) : [csvAnimal.image_url?.trim() || csvAnimal.image?.trim() || "/assets/images/animals/placeholder.jpg"],
    personality: csvAnimal.personality ? csvAnimal.personality.split(",").map((trait) => trait.trim()) : [],
    medicalInfo: {
      spayedNeutered: csvAnimal.spayed_neutered === "true" || csvAnimal.spayedNeutered === "true" || csvAnimal.spayed_neutered === true || csvAnimal.spayedNeutered === true,
      vaccinated: csvAnimal.vaccinated === "true" || csvAnimal.vaccinated === true,
      microchipped: csvAnimal.microchip === "true" || csvAnimal.microchipped === "true" || csvAnimal.microchip === true || csvAnimal.microchipped === true,
      healthNotes: csvAnimal.healthNotes?.trim() || csvAnimal.health_notes?.trim() || ""
    }
  };
}
async function POST({ request }) {
  try {
    const body = await request.json();
    const { orgId = "3", animals } = body;
    if (!animals || !Array.isArray(animals)) {
      return new Response(JSON.stringify({
        error: "Animals array is required",
        imported: 0,
        errors: 1
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let imported = 0;
    let errors = 0;
    const errorDetails = [];
    for (let i = 0; i < animals.length; i++) {
      try {
        const transformedAnimal = transformAnimalData(animals[i]);
        const validationErrors = validateAnimalData(transformedAnimal);
        if (validationErrors.length > 0) {
          errors++;
          errorDetails.push({
            row: i + 2,
            // +2 because CSV has header row and arrays are 0-indexed
            animal: animals[i].name || "Unknown",
            error: validationErrors.join(", ")
          });
          continue;
        }
        const animalData = {
          ...transformedAnimal,
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
          row: i + 2,
          animal: animals[i].name || "Unknown",
          error: error.message
        });
        console.error(`Error importing animal ${i + 1}:`, error);
      }
    }
    return new Response(JSON.stringify({
      imported,
      errors,
      errorDetails: errorDetails.slice(0, 10),
      // Limit error details to first 10
      message: `Successfully imported ${imported} animals. ${errors} errors occurred.`
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error in bulk import:", error);
    return new Response(JSON.stringify({
      error: "Failed to process bulk import",
      imported: 0,
      errors: 1
    }), {
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
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
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
