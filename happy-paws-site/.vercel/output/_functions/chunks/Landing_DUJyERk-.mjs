import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import './index_DKHmmOtR.mjs';
import { $ as $$Picture } from './_astro_assets_Cqx0z2rv.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Landing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  const { title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="int-hero" data-astro-cid-sefmxpgk> <h1 id="home-h" data-astro-cid-sefmxpgk>${title}</h1> <!-- standard <picture> attributes are supported. Set loading to lazy for assets below the fold --> <!-- Note: because we use the getImage function to generate an optimized image, we need to use special properties. More info on [the getImage() page](https://docs.astro.build/en/guides/images/#generating-images-with-getimage) --> ${renderComponent($$result, "Picture", $$Picture, { "src": image.src, "width": image.attributes.width, "height": image.attributes.height, "formats": ["avif", "webp"], "alt": "A description of my image.", "aria-hidden": "true", "decoding": "async", "alt": "kitchen cabinets", "loading": "eager", "data-astro-cid-sefmxpgk": true })} </section> `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/Landing.astro", void 0);

export { $$Landing as $ };
