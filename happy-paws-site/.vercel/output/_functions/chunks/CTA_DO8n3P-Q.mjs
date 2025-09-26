import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import 'clsx';
import { b as getImage } from './_astro_assets_Cqx0z2rv.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$CSPicture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CSPicture;
  const { mobileImgUrl, mobileMediaWidth, desktopImgUrl, desktopMediaWidth, fallbackImgUrl, alt } = Astro2.props;
  const mobileImg = await getImage({
    src: mobileImgUrl,
    format: "webp",
    // Adjust the width and height to play with the image's intrinsic size and ultimately, its file size
    width: 200,
    height: 200
  });
  const desktopImg = await getImage({
    src: desktopImgUrl,
    format: "webp",
    // Adjust the width and height to play with the image's intrinsic size and ultimately, its file size
    width: 800,
    height: 200
  });
  const fallbackImg = await getImage({
    src: fallbackImgUrl,
    format: "jpg",
    // Adjust the width and height to play with the image's intrinsic size and ultimately, its file size
    width: 800,
    height: 200
  });
  return renderTemplate`<!-- Adjust the width and height attributes sizes based on the stitch you're using -->${maybeRenderHead()}<picture data-astro-cid-vsk2doe7> <source${addAttribute(`(max-width: ${mobileMediaWidth})`, "media")}${addAttribute(mobileImg.src, "srcset")} data-astro-cid-vsk2doe7> <source${addAttribute(`(min-width: ${desktopMediaWidth})`, "media")}${addAttribute(desktopImg.src, "srcset")} data-astro-cid-vsk2doe7> <img aria-hidden="true" decoding="async"${addAttribute(fallbackImg.src, "src")}${addAttribute(alt, "alt")} loading="lazy" width="2500" height="1667" data-astro-cid-vsk2doe7> </picture> <!-- Adjust the styles based on the stitch you're using --> `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/TemplateComponents/CSPicture.astro", void 0);

const mobileImage = new Proxy({"src":"/_astro/construction-m.YaTrtEM0.jpg","width":400,"height":564,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/assets/images/CTA/construction-m.jpg";
							}
							
							return target[name];
						}
					});

const fallbackImage = new Proxy({"src":"/_astro/landing.D_wYLIJw.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/assets/images/CTA/cabinets2.jpg";
							}
							
							return target[name];
						}
					});

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta" data-astro-cid-4xty6sx2> <div class="container" data-astro-cid-4xty6sx2> <h2 class="title" data-astro-cid-4xty6sx2>
Get It Done
<br data-astro-cid-4xty6sx2>
With Us Today
</h2> <p data-astro-cid-4xty6sx2>
Say something catchy, informative, and encouraging to click the button to
      go to the contact page. I like to add these to the bottom of all pages.
</p> <a href="/contact" class="cs-button-solid" data-astro-cid-4xty6sx2>Get an Estimate Now</a> </div> ${renderComponent($$result, "CSPicture", $$CSPicture, { "mobileImgUrl": mobileImage, "mobileMediaWidth": "600px", "desktopImgUrl": fallbackImage, "desktopMediaWidth": "601px", "fallbackImgUrl": fallbackImage, "alt": "", "data-astro-cid-4xty6sx2": true })} </section> `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/CTA.astro", void 0);

export { $$CTA as $ };
