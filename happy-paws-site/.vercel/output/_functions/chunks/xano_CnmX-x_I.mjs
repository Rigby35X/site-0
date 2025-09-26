const XANO_ANIMALS_URL = "https://x8ki-letl-twmt.n7.xano.io/api:Od874PbA";
const XANO_ANIMALS_TOKEN = "165XkoniNXylFdNKgO_aCvmAIcQ";
const XANO_ORGANIZATIONS_TOKEN = "dummy-org-token-for-deployment";
const ORG_ID = "3";
function getHeaders(endpoint = "animals") {
  const headers = {
    "Content-Type": "application/json"
  };
  switch (endpoint) {
    case "animals":
      {
        headers["Authorization"] = `Bearer ${XANO_ANIMALS_TOKEN}`;
      }
      break;
    case "organizations":
      {
        headers["Authorization"] = `Bearer ${XANO_ORGANIZATIONS_TOKEN}`;
      }
      break;
    default:
      const baseToken = "mGDOpzrGb2PvfCn4tOJB7drqYvs";
      {
        headers["Authorization"] = `Bearer ${baseToken}`;
      }
  }
  return headers;
}
async function getAllAnimals(orgId = ORG_ID) {
  try {
    const response = await fetch(`${XANO_ANIMALS_URL}/orgs/${orgId}/animals`, {
      headers: getHeaders("animals")
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const animals = await response.json();
    return animals.map((animal) => ({
      id: animal.id.toString(),
      name: animal.name,
      type: animal.species === "dog" ? "Dog" : animal.species === "cat" ? "Cat" : "Dog",
      breed: animal.breed,
      age: animal.age + " years",
      gender: animal.gender,
      size: animal.size || "Medium",
      weight: animal.weight || "Unknown",
      status: animal.status || "Available",
      arrivalDate: animal.intake_date || new Date(animal.created_at).toISOString().split("T")[0],
      image: animal.image_url || "/assets/images/animals/placeholder.jpg",
      images: animal.images && Array.isArray(animal.images) ? animal.images : [animal.image_url || "/assets/images/animals/placeholder.jpg"],
      description: animal.description || animal.description_long || "No description available",
      specialNeeds: animal.special_needs ? true : false,
      goodWithKids: animal.good_with_kids || false,
      goodWithCats: animal.good_with_cats || false,
      goodWithDogs: animal.good_with_dogs || false,
      personality: animal.training_notes ? animal.training_notes.split(",").map((trait) => trait.trim()) : ["Friendly", "Loving"],
      medicalInfo: {
        spayedNeutered: animal.spayed_neutered || false,
        vaccinated: animal.vaccinated || false,
        microchipped: animal.microchip || false,
        specialNeeds: animal.special_needs ? true : false,
        medicalNotes: animal.medical_notes || "No medical notes"
      },
      adoptionFee: animal.adoption_fee || 250,
      fosterable: true,
      energyLevel: animal.energy_level || "Medium",
      trainingLevel: "Basic"
    }));
  } catch (error) {
    console.error("Error fetching animals from Xano:", error);
    return getFallbackAnimals();
  }
}
async function getAnimalById(id, orgId = ORG_ID) {
  try {
    const response = await fetch(`${XANO_ANIMALS_URL}/orgs/${orgId}/animals/${id}`, {
      headers: getHeaders("animals")
    });
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const animal = await response.json();
    return {
      id: animal.id.toString(),
      name: animal.name,
      type: animal.species === "dog" ? "Dog" : animal.species === "cat" ? "Cat" : "Dog",
      breed: animal.breed,
      age: animal.age + " years",
      gender: animal.gender,
      size: animal.size || "Medium",
      weight: animal.weight || "Unknown",
      status: animal.status || "Available",
      arrivalDate: animal.intake_date || new Date(animal.created_at).toISOString().split("T")[0],
      image: animal.image_url || "/assets/images/animals/placeholder.jpg",
      images: animal.images && Array.isArray(animal.images) ? animal.images : [animal.image_url || "/assets/images/animals/placeholder.jpg"],
      description: animal.description || animal.description_long || "No description available",
      specialNeeds: animal.special_needs ? true : false,
      goodWithKids: animal.good_with_kids || false,
      goodWithCats: animal.good_with_cats || false,
      goodWithDogs: animal.good_with_dogs || false,
      personality: animal.training_notes ? animal.training_notes.split(",").map((trait) => trait.trim()) : ["Friendly", "Loving"],
      medicalInfo: {
        spayedNeutered: animal.spayed_neutered || false,
        vaccinated: animal.vaccinated || false,
        microchipped: animal.microchip || false,
        specialNeeds: animal.special_needs ? true : false,
        medicalNotes: animal.medical_notes || "No medical notes"
      },
      adoptionFee: animal.adoption_fee || 250,
      fosterable: true,
      energyLevel: animal.energy_level || "Medium",
      trainingLevel: "Basic"
    };
  } catch (error) {
    console.error(`Error fetching animal ${id} from Xano:`, error);
    return null;
  }
}
function getFallbackAnimals() {
  return [
    {
      id: "1",
      name: "Luna",
      type: "Dog",
      breed: "Golden Retriever Mix",
      age: "3 years",
      gender: "Female",
      size: "Large",
      weight: "65 lbs",
      status: "Available",
      arrivalDate: "2024-01-15",
      image: "/assets/images/animals/placeholder.jpg",
      images: ["/assets/images/animals/placeholder.jpg"],
      description: "Luna is a sweet and gentle girl who loves playing fetch and cuddling on the couch.",
      specialNeeds: false,
      goodWithKids: true,
      goodWithCats: true,
      goodWithDogs: true,
      personality: ["Gentle and calm", "Loves to play fetch", "Great with children"],
      medicalInfo: {
        spayedNeutered: true,
        vaccinated: true,
        microchipped: true,
        specialNeeds: false,
        medicalNotes: ""
      },
      adoptionFee: 250,
      fosterable: true,
      energyLevel: "Medium",
      trainingLevel: "Basic"
    },
    {
      id: "2",
      name: "Max",
      type: "Dog",
      breed: "German Shepherd Mix",
      age: "2 years",
      gender: "Male",
      size: "Large",
      weight: "70 lbs",
      status: "Available",
      arrivalDate: "2024-02-01",
      image: "/assets/images/animals/placeholder.jpg",
      images: ["/assets/images/animals/placeholder.jpg"],
      description: "Max is an energetic and loyal companion who loves outdoor adventures.",
      specialNeeds: false,
      goodWithKids: true,
      goodWithCats: false,
      goodWithDogs: true,
      personality: ["Energetic", "Loyal", "Loves outdoor activities"],
      medicalInfo: {
        spayedNeutered: true,
        vaccinated: true,
        microchipped: true,
        specialNeeds: false,
        medicalNotes: ""
      },
      adoptionFee: 300,
      fosterable: true,
      energyLevel: "High",
      trainingLevel: "Intermediate"
    }
  ];
}
async function getAvailableAnimals(orgId = ORG_ID) {
  const allAnimals = await getAllAnimals(orgId);
  return allAnimals.filter(
    (animal) => animal.status && (animal.status.includes("Available") || animal.status === "Available" || animal.status === "available")
  );
}

export { getAvailableAnimals as a, getAnimalById as g };
