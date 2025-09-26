import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C5xYyPQE.mjs';
import { $ as $$CTA } from '../chunks/CTA_DO8n3P-Q.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_D7rfH5RV.mjs';
import { l as landingImage } from '../chunks/landing_DCUbpOhM.mjs';
import { b as getImage } from '../chunks/_astro_assets_Cqx0z2rv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const optimizedImage = await getImage({ src: landingImage, format: "avif" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Saving Dogs, Finding Forever Homes", "description": "Dedicated to rescuing and rehoming dogs in the greater metro area since 2015", "preloadedImage": optimizedImage, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`    ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <div class="cs-flex-group" data-astro-cid-j7pv25f6> <span class="cs-topper" data-astro-cid-j7pv25f6>Dog Rescue & Adoption</span> <h1 class="cs-title" data-astro-cid-j7pv25f6>Every Dog Deserves a Loving Home</h1> <p class="cs-text" data-astro-cid-j7pv25f6>
Happy Paws Dog Rescue has been saving lives and finding forever homes for dogs in need since 2015. Our dedicated team works tirelessly to rescue, rehabilitate, and rehome dogs of all ages and breeds.
</p> <a href="/our-animals" class="cs-button-solid" data-astro-cid-j7pv25f6>Adopt a Dog</a> <a href="/about" class="cs-button-transparent" data-astro-cid-j7pv25f6> <img class="cs-img" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Hero/play.svg" alt="play icon" width="17" height="17" data-astro-cid-j7pv25f6>
Learn About Us
</a> </div> </div> <!-- Background Image --> <!-- We can't use Astro <Picture /> as it does not support multiple sources --> <picture class="cs-picture" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/hero-m.webp" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/hero.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async"${addAttribute(optimizedImage.src, "src")} alt="new home" width="2500" height="1667" loading="eager" data-astro-cid-j7pv25f6> </picture> </section>    <section id="services" class="services" data-astro-cid-j7pv25f6> <div class="card" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/svgs/service1.svg" alt="appliance" width="48" height="48" data-astro-cid-j7pv25f6> </picture> <h2 data-astro-cid-j7pv25f6>Adoption</h2> <p data-astro-cid-j7pv25f6>
Find your perfect companion from our loving dogs waiting for forever homes.
        Our adoption process ensures the best match for both you and your new family member.
</p> </div> <div class="card" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/svgs/service2.svg" alt="foster care" width="48" height="48" data-astro-cid-j7pv25f6> </picture> <h2 data-astro-cid-j7pv25f6>Foster</h2> <p data-astro-cid-j7pv25f6>
Provide temporary loving care for dogs in need while they await their forever homes.
        Foster families are the heart of our rescue mission.
</p> </div> <div class="card" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/svgs/service3.svg" alt="volunteer" width="48" height="48" data-astro-cid-j7pv25f6> </picture> <h2 data-astro-cid-j7pv25f6>Volunteer</h2> <p data-astro-cid-j7pv25f6>
Join our dedicated team of volunteers helping with dog care, events, and administrative tasks.
        Every hour you give makes a difference in a dog's life.
</p> </div> </section>    <section id="sbs" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <!-- Left Image Section --> <div class="cs-left" data-astro-cid-j7pv25f6> <picture class="cs-picture cs-picture1" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/cabinets2-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/cabinets2.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/cabinets2.jpg" alt="cabinets" loading="lazy" width="400" height="563" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/construction-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/construction.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/construction.jpg" alt="house" loading="lazy" width="400" height="563" data-astro-cid-j7pv25f6> </picture> </div> <!-- Right Content Section--> <div class="cs-right" data-astro-cid-j7pv25f6> <span class="cs-topper" data-astro-cid-j7pv25f6>About Us</span> <h2 class="cs-title" data-astro-cid-j7pv25f6>About Happy Paws Rescue</h2> <p class="cs-text" data-astro-cid-j7pv25f6>
We are a community of passionate animal lovers dedicated to giving every dog and cat the chance they deserve. At Happy Paws Rescue, we believe every animal’s story matters. From abandoned puppies to senior dogs in need of a second chance, our mission is to rescue, rehabilitate, and rehome with love.
</p> <p class="cs-text" data-astro-cid-j7pv25f6>
Our work goes beyond simple rescue. We provide:

Safe Shelter & Care – Every animal receives medical treatment, nutritious food, and a warm place to heal.

Adoption Services – We carefully match pets with families to ensure lifelong homes.

Foster Network – Our foster families give animals the comfort of a home while they await adoption.

Community Education – We promote responsible pet ownership, spay/neuter programs, and compassionate care.
</p> <div class="cs-flex-group" data-astro-cid-j7pv25f6> <p class="cs-flex-p" data-astro-cid-j7pv25f6> <img class="cs-quote-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/quote-white.svg" alt="gavel" width="136" height="77" data-astro-cid-j7pv25f6> </p></div> <a href="/about" class="cs-button-solid" data-astro-cid-j7pv25f6>More About Us</a> </div> </div> </section>    <section id="sbs-r" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <!-- Left Image Section --> <div class="cs-left" data-astro-cid-j7pv25f6> <picture class="cs-picture cs-picture1" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/construction-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/construction.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/construction.jpg" alt="house" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/cabinets2-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/cabinets2.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/cabinets2.jpg" alt="cabinets" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> </div> <!-- Right Content Section--> <div class="cs-right" data-astro-cid-j7pv25f6> <span class="cs-topper" data-astro-cid-j7pv25f6>SEO Ranking</span> <h2 class="cs-title" data-astro-cid-j7pv25f6>Talk about a main service keyword</h2> <p class="cs-text" data-astro-cid-j7pv25f6>
In consequat tincidunt turpis sit amet imperdiet. Praesent Class
          officelan nonatoureanor mauris laoreet, iaculis libero quis. Curabitur
          et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent
          nonatourean olei aptent taciti sociosqu ad litora torquent per.
</p> <p class="cs-text" data-astro-cid-j7pv25f6>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tenetur,
          iure nihil ipsam qui atque commodi id voluptatem nesciunt, quis animi
          fuga cum doloribus! Eaque laboriosam, unde consectetur iure asperiores
          ullam. Consequuntur debitis a voluptatibus vitae optio autem explicabo
          quia neque est quas, in placeat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus modi laudantium voluptatibus
          rem libero error minus quia eligendi sapiente eos.
</p> </div> </div> </section>    <section id="gallery" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <span class="cs-topper" data-astro-cid-j7pv25f6>Our Portfolio</span> <h2 class="cs-title" data-astro-cid-j7pv25f6>
Et orci volutpat, back up generator installations
</h2> <div class="cs-image-group" data-astro-cid-j7pv25f6> <!-- Row 1--> <div class="cs-row cs-row-1" data-astro-cid-j7pv25f6> <!-- To add more images, copy and paste this row's picture tags here in order from cs-picture-1 to cs-picture-3 and they will maintain the same layout--> <picture class="cs-picture cs-picture1" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port1-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port1.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port1.jpg" alt="new hallway" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port4-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port4.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port4.jpg" alt="new home construction" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture3" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port7-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port7.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port7.jpg" alt="building a new wall" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> </div> <!-- Row 2 --> <div class="cs-row cs-row-2" data-astro-cid-j7pv25f6> <!-- To add more images, copy and paste this row's picture tags here in order from cs-picture-1 to cs-picture-3 and they will maintain the same layout--> <picture class="cs-picture cs-picture1" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port2-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port2.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port2.jpg" alt="new kitchen" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port5-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port5.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port5.jpg" alt="apartment addition" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture3" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port8-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port8.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port8.jpg" alt="kew kitchen cabinets" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> </div> <!-- Row 3 --> <div class="cs-row cs-row-3" data-astro-cid-j7pv25f6> <!-- To add more images, copy and paste this row's picture tags here in order from cs-picture-1 to cs-picture-3 and they will maintain the same layout--> <picture class="cs-picture cs-picture1" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port3-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port3.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port3.jpg" alt="new kitchen" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture2" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port6-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port6.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port6.jpg" alt="apartment addition" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> <picture class="cs-picture cs-picture3" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/portfolio/port9-m.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/portfolio/port9.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async" src="/assets/images/portfolio/port9.jpg" alt="kew kitchen cabinets" loading="lazy" width="400" height="560" data-astro-cid-j7pv25f6> </picture> </div> </div> <a href="/projects" class="cs-button-solid" data-astro-cid-j7pv25f6>View all projects</a> </div> </section>    ${renderComponent($$result2, "FAQ", $$FAQ, { "data-astro-cid-j7pv25f6": true })}    <section id="reviews" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <span class="cs-topper" data-astro-cid-j7pv25f6>Our Reviews</span> <h2 class="cs-title" data-astro-cid-j7pv25f6>Words From Our Customers</h2> <p class="cs-text" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor
        volutpat porttitor sagittis nunc nisl. Sagittis sit pellentesque gravida
        viverra. Leo ut sed euismod tortor risus et. Ornare non neque, leo,
        ornare. Lorem ipsum dolor sit amet.
</p> <ul class="cs-card-group" data-astro-cid-j7pv25f6> <!-- Review 1 --> <li class="cs-item" data-astro-cid-j7pv25f6> <img class="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile5.png" alt="profile picture" width="80" height="80" data-astro-cid-j7pv25f6> <p class="cs-item-p" data-astro-cid-j7pv25f6>
Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor
            habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed
            ullamcorper lectus et. Auctor velit diam fermentum consequat.
            Feugiat viverra massa urna, volutpat orci imperdiet eget eget.
</p> <span class="cs-reviewer" data-astro-cid-j7pv25f6>
Jon Doe
<span class="cs-desc" data-astro-cid-j7pv25f6>Homeowner</span> </span> <img class="cs-item-stars" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16" data-astro-cid-j7pv25f6> </li> <!-- Review 2 --> <li class="cs-item" data-astro-cid-j7pv25f6> <img class="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile-4.png" alt="profile picture" width="80" height="80" data-astro-cid-j7pv25f6> <p class="cs-item-p" data-astro-cid-j7pv25f6>
Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor
            habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed
            ullamcorper lectus et. Auctor velit diam fermentum consequat.
            Feugiat viverra massa urna, volutpat orci imperdiet eget eget.
</p> <span class="cs-reviewer" data-astro-cid-j7pv25f6>
Jane Doe
<span class="cs-desc" data-astro-cid-j7pv25f6>Homeowner</span> </span> <img class="cs-item-stars" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16" data-astro-cid-j7pv25f6> </li> </ul> <a aria-label="read more reviews" href="/reviews" class="cs-button-solid" data-astro-cid-j7pv25f6>Our Reviews</a> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/index.astro", void 0);

const $$file = "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
