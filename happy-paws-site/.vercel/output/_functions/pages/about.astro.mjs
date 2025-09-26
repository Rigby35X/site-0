import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DHjCYarN.mjs';
import { $ as $$CTA } from '../chunks/CTA_DO8n3P-Q.mjs';
import { $ as $$Landing } from '../chunks/Landing_DUJyERk-.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_D7rfH5RV.mjs';
import { l as landingImage } from '../chunks/landing_DCUbpOhM.mjs';
import { b as getImage } from '../chunks/_astro_assets_Cqx0z2rv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedImage = await getImage({ src: landingImage, format: "avif" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Happy Paws", "description": "Learn about our mission, our team, and how we've been making a difference in the lives of dogs since 2015.", "preloadedImage": optimizedImage, "data-astro-cid-kh7btl4r": true }, { "default": async ($$result2) => renderTemplate`    ${renderComponent($$result2, "Landing", $$Landing, { "title": "About Happy Paws", "image": optimizedImage, "data-astro-cid-kh7btl4r": true })}    ${maybeRenderHead()}<section id="sbs" data-astro-cid-kh7btl4r> <div class="cs-container" data-astro-cid-kh7btl4r> <!-- Left Image Section --> <div class="cs-left" data-astro-cid-kh7btl4r> <picture class="cs-picture cs-picture1" data-astro-cid-kh7btl4r> <source media="(max-width: 600px)" srcset="/assets/images/cabinets2-m.jpg" data-astro-cid-kh7btl4r> <source media="(min-width: 601px)" srcset="/assets/images/cabinets2.jpg" data-astro-cid-kh7btl4r> <img aria-hidden="true" decoding="async" src="/assets/images/cabinets2.jpg" alt="cabinets" loading="lazy" width="400" height="563" data-astro-cid-kh7btl4r> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-kh7btl4r> <source media="(max-width: 600px)" srcset="/assets/images/construction-m.jpg" data-astro-cid-kh7btl4r> <source media="(min-width: 601px)" srcset="/assets/images/construction.jpg" data-astro-cid-kh7btl4r> <img aria-hidden="true" decoding="async" src="/assets/images/construction.jpg" alt="house" loading="lazy" width="400" height="563" data-astro-cid-kh7btl4r> </picture> </div> <!-- Right Content Section--> <div class="cs-right" data-astro-cid-kh7btl4r> <span class="cs-topper" data-astro-cid-kh7btl4r>Our Story</span> <h2 class="cs-title" data-astro-cid-kh7btl4r>Our Story of Saving Lives</h2> <p class="cs-text" data-astro-cid-kh7btl4r>
Happy Paws Dog Rescue was founded in 2015 by a group of passionate dog lovers who saw the overwhelming need for dog rescue in our community. What started as a small group of volunteers has grown into a comprehensive rescue organization that has saved over 1,200 dogs. We work with local shelters, take in owner surrenders, and rescue dogs from difficult situations, providing them with medical care, training, and love until they find their perfect forever homes.
</p> <p class="cs-text" data-astro-cid-kh7btl4r>
To rescue, rehabilitate, and rehome dogs in need while educating our community about responsible pet ownership, the importance of spay/neuter programs, and the incredible bond between humans and dogs. We believe every dog deserves a second chance and a loving home.
</p> <div class="cs-flex-group" data-astro-cid-kh7btl4r> <p class="cs-flex-p" data-astro-cid-kh7btl4r>
Our goal is to rescue as many animals as possible and get them into loving homes.
</p> <span class="cs-name" data-astro-cid-kh7btl4r>Justin Time</span> <span class="cs-job" data-astro-cid-kh7btl4r>CEO-Founder</span> <img class="cs-quote-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/quote-white.svg" alt="gavel" width="136" height="77" data-astro-cid-kh7btl4r> </div> <a href="/projects" class="cs-button-solid" data-astro-cid-kh7btl4r>Our Projects</a> </div> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/about.astro", void 0);

const $$file = "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
