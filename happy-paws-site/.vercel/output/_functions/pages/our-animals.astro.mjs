import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CfKLfJFf.mjs';
import { $ as $$CTA } from '../chunks/CTA_DO8n3P-Q.mjs';
import { a as getAllAnimals } from '../chunks/xano_CzwxzERg.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$OurAnimals = createComponent(async ($$result, $$props, $$slots) => {
  const animals = await getAllAnimals();
  console.log(`Loaded ${animals.length} animals from Xano`);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Happy Paws Dog Rescue - Our Animals Available for Adoption", "description": "Meet our wonderful animals looking for their forever homes. Browse available dogs, cats, and other pets ready for adoption.", "data-astro-cid-mlfvg3q5": true }, { "default": async ($$result2) => renderTemplate`    ${maybeRenderHead()}<section id="page-header" data-astro-cid-mlfvg3q5> <div class="cs-container" data-astro-cid-mlfvg3q5> <h1 class="cs-title" data-astro-cid-mlfvg3q5>Our Animals</h1> <p class="cs-text" data-astro-cid-mlfvg3q5>
Meet our wonderful animals who are looking for their forever homes. Each pet has been health-checked, 
        vaccinated, and is ready to become a beloved family member.
</p> </div> </section>    <section id="animal-filters" data-astro-cid-mlfvg3q5> <div class="cs-container" data-astro-cid-mlfvg3q5> <div class="cs-filter-group" data-astro-cid-mlfvg3q5> <button class="cs-filter-button active" data-filter="all" data-astro-cid-mlfvg3q5>All Animals</button> <button class="cs-filter-button" data-filter="dogs" data-astro-cid-mlfvg3q5>Dogs</button> <button class="cs-filter-button" data-filter="cats" data-astro-cid-mlfvg3q5>Cats</button> <button class="cs-filter-button" data-filter="available" data-astro-cid-mlfvg3q5>Available</button> <button class="cs-filter-button" data-filter="pending" data-astro-cid-mlfvg3q5>Pending</button> <button class="cs-filter-button" data-filter="adopted" data-astro-cid-mlfvg3q5>Adopted</button> <button class="cs-filter-button" data-filter="special-needs" data-astro-cid-mlfvg3q5>Special Needs</button> </div> </div> </section>    <section id="animal-grid" data-astro-cid-mlfvg3q5> <div class="cs-container" data-astro-cid-mlfvg3q5> <div class="cs-card-group" data-astro-cid-mlfvg3q5> ${animals.map((animal) => {
    const typeFilter = animal.type.toLowerCase() === "dog" ? "dogs" : animal.type.toLowerCase() === "cat" ? "cats" : animal.type.toLowerCase();
    const statusFilter = animal.status.toLowerCase();
    const categories = `${typeFilter} ${statusFilter} ${animal.specialNeeds ? "special-needs" : ""}`.trim();
    return renderTemplate`<div class="cs-item"${addAttribute(categories, "data-category")} data-astro-cid-mlfvg3q5> <picture class="cs-picture" data-astro-cid-mlfvg3q5> <img loading="lazy" decoding="async"${addAttribute(animal.image, "src")}${addAttribute(animal.name, "alt")} width="400" height="300" data-astro-cid-mlfvg3q5> </picture> <div class="cs-item-content" data-astro-cid-mlfvg3q5> <div class="cs-status-badge cs-status-{animal.status.toLowerCase()}" data-astro-cid-mlfvg3q5> ${animal.status} </div> <h3 class="cs-item-title" data-astro-cid-mlfvg3q5>${animal.name}</h3> <div class="cs-item-details" data-astro-cid-mlfvg3q5> <span class="cs-detail" data-astro-cid-mlfvg3q5>${animal.breed}</span> <span class="cs-detail" data-astro-cid-mlfvg3q5>${animal.age}</span> <span class="cs-detail" data-astro-cid-mlfvg3q5>${animal.gender}</span> <span class="cs-detail" data-astro-cid-mlfvg3q5>${animal.size}</span> </div> <p class="cs-item-text" data-astro-cid-mlfvg3q5>${animal.description}</p> <div class="cs-compatibility" data-astro-cid-mlfvg3q5> <h4 data-astro-cid-mlfvg3q5>Good with:</h4> <div class="cs-compatibility-tags" data-astro-cid-mlfvg3q5> ${animal.goodWithKids && renderTemplate`<span class="cs-tag" data-astro-cid-mlfvg3q5>Kids</span>`} ${animal.goodWithCats && renderTemplate`<span class="cs-tag" data-astro-cid-mlfvg3q5>Cats</span>`} ${animal.goodWithDogs && renderTemplate`<span class="cs-tag" data-astro-cid-mlfvg3q5>Dogs</span>`} </div> </div> <div class="cs-button-group" data-astro-cid-mlfvg3q5> <a${addAttribute(`/animal-details/${animal.id}`, "href")} class="cs-button-solid" data-astro-cid-mlfvg3q5>Learn More</a> <a href="/applications" class="cs-button-transparent" data-astro-cid-mlfvg3q5>Apply to Adopt</a> </div> </div> </div>`;
  })} </div> <div class="cs-more-info" data-astro-cid-mlfvg3q5> <h2 data-astro-cid-mlfvg3q5>Don't See Your Perfect Match?</h2> <p data-astro-cid-mlfvg3q5>
We have more animals in foster care and new arrivals coming in regularly. 
          Contact us to learn about animals that may not be listed yet or to get on our waiting list 
          for specific types of pets.
</p> <a href="/contact" class="cs-button-solid" data-astro-cid-mlfvg3q5>Contact Us</a> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-mlfvg3q5": true })} ` })}  ${renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/our-animals.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/our-animals.astro", void 0);

const $$file = "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/our-animals.astro";
const $$url = "/our-animals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurAnimals,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
