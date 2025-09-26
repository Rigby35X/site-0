import { c as createComponent, b as createAstro, e as addAttribute, d as renderScript, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot, g as renderHead } from './astro/server_DxW1KWNy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { getIconData, iconToSVG } from '@iconify/utils';

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/node_modules/astro/components/ClientRouter.astro", void 0);

const name = "Happy Paws Dog Rescue";
const email = "info@happypawsrescue.org";
const phoneForTel = "555-DOG-PAWS";
const phoneFormatted = "(555) DOG-PAWS";
const ein = "12-3456789";
const address = {"lineOne":"123 Rescue Lane","lineTwo":"Suite 100","city":"Dog City","state":"CA","zip":"90210","mapLink":"https://maps.google.com/your-location"};
const domain = "happypawsrescue.org";
const client = {
  name,
  email,
  phoneForTel,
  phoneFormatted,
  ein,
  address,
  domain,
};

const navData = [
	{
		key: "Home",
		url: "/",
		children: [
		]
	},
	{
		key: "About",
		url: "/about/",
		children: [
		]
	},
	{
		key: "Our Dogs",
		url: "/our-animals/",
		children: [
		]
	},
	{
		key: "Applications",
		url: "/applications/",
		children: [
		]
	},
	{
		key: "Donate",
		url: "/donate/",
		children: [
		]
	}
];

const icons = {"local":{"prefix":"local","lastModified":1758925069,"icons":{"mdi--caret":{"body":"<path fill=\"currentColor\" d=\"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z\"/>","width":24,"height":24}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/node_modules/astro-icon/components/Icon.astro", void 0);

const $$DarkModeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="dark-mode-toggle" aria-label="dark mode toggle" aria-pressed="false"> <svg class="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"></path></svg> <img class="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15"> </button> ${renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/DarkModeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/DarkModeToggle.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- ============================================ --><!--                 Navigation                   --><!-- ============================================ -->${maybeRenderHead()}<header id="cs-navigation" data-astro-cid-3ef6ksr2> <div class="cs-container" data-astro-cid-3ef6ksr2> <!--Nav Logo--> <a href="/" class="cs-logo" aria-label="back to home" data-astro-cid-3ef6ksr2> <img src="/assets/svgs/happy-paws.svg" alt="Happy Paws Dog Rescue" width="240" height="80" aria-hidden="true" decoding="async" data-astro-cid-3ef6ksr2> </a> <!--Navigation List--> <div class="cs-nav-wrapper" data-astro-cid-3ef6ksr2> <nav class="cs-nav" role="navigation" data-astro-cid-3ef6ksr2> <!--Mobile Nav Toggle--> <button class="cs-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="cs-expanded-ul" aria-label="Toggle mobile menu." data-astro-cid-3ef6ksr2> <div class="cs-box" aria-hidden="true" data-astro-cid-3ef6ksr2> <span class="cs-line cs-line1" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="cs-line cs-line2" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="cs-line cs-line3" aria-hidden="true" data-astro-cid-3ef6ksr2></span> </div> </button> <!-- If you want to use another navigation stitch and enjoy the benefits of dynamic routing, replace the .cs-ul-wrapper in the navigation stitch with this one below --> <div class="cs-ul-wrapper" data-astro-cid-3ef6ksr2> <ul id="cs-expanded-ul" class="cs-ul" data-astro-cid-3ef6ksr2> ${navData.map((entry) => renderTemplate`<li${addAttribute([
    "cs-li",
    { "cs-dropdown": entry.children?.length > 0 }
  ], "class:list")} data-astro-cid-3ef6ksr2> ${entry.children?.length > 0 ? (
    // If entry has children in navData.json, create a button and a dropdown icon
    renderTemplate`<button aria-expanded="false"${addAttribute(`submenu-${entry.key}`, "aria-controls")}${addAttribute([
      "cs-li-link cs-dropdown-button",
      { "cs-active": Astro2.url.pathname.includes(entry.url) }
    ], "class:list")} data-astro-cid-3ef6ksr2> ${entry.key} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi--caret", "class": "cs-drop-icon", "data-astro-cid-3ef6ksr2": true })} </button>`
  ) : (
    // If entry does not have children in navData.json, create an anchor
    renderTemplate`<a${addAttribute(entry.url, "href")}${addAttribute([
      "cs-li-link",
      { "cs-active": Astro2.url.pathname === entry.url }
    ], "class:list")}${addAttribute(Astro2.url.pathname === entry.url ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${entry.key} </a>`
  )} ${entry.children?.length > 0 && // If entry has children in navData.json, create a drop down menu
  renderTemplate`<ul${addAttribute(`submenu-${entry.key}`, "id")} class="cs-drop-ul" data-astro-cid-3ef6ksr2> ${entry.children.map((child) => renderTemplate`<li class="cs-drop-li" data-astro-cid-3ef6ksr2> <a${addAttribute(child.url, "href")} class="cs-li-link cs-drop-link"${addAttribute(Astro2.url.pathname === child.url ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${child.key} </a> </li>`)} </ul>`} </li>`)} </ul> </div> </nav> <a href="/contact" class="cs-button-solid cs-nav-button" data-astro-cid-3ef6ksr2>Contact Us</a> </div> <!--Dark Mode toggle: remove component if you don't want to enable a dark mode toggle--> ${renderComponent($$result, "DarkModeToggle", $$DarkModeToggle, { "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/Header.astro", void 0);

function getCurrentYear() {
  return new Date().getFullYear();
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const currentYear = getCurrentYear();
  return renderTemplate`<!-- ============================================ --><!--                   Footer                     --><!-- ============================================ -->${maybeRenderHead()}<footer id="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="left-section" data-astro-cid-sz7xmlte> <a class="logo" href="/" data-astro-cid-sz7xmlte><img loading="lazy" decoding="async" src="/assets/svgs/happy-paws-white.svg" alt="Happy Paws Dog Rescue" width="280" height="110" data-astro-cid-sz7xmlte></a> <p data-astro-cid-sz7xmlte>
Extra content if you need it, if not you can delete this whole p tag. I
        usually do.
</p> </div> <div class="right-section" data-astro-cid-sz7xmlte> <div class="lists" data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Information</h2> </li> ${navData.map((entry) => renderTemplate`<li class="cs-li" data-astro-cid-sz7xmlte> <a${addAttribute(entry.url, "href")} data-astro-cid-sz7xmlte> ${entry.key} </a> </li>`)} <li class="cs-li" data-astro-cid-sz7xmlte> <a href="/admin/index.html" data-astro-cid-sz7xmlte>
Admin Login
</a> </li> </ul> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Services</h2> </li> <li data-astro-cid-sz7xmlte>Service1</li> <li data-astro-cid-sz7xmlte>Service2</li> <li data-astro-cid-sz7xmlte>Service4</li> <li data-astro-cid-sz7xmlte>Service5</li> </ul> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Contact</h2> </li> <li data-astro-cid-sz7xmlte> <a href="/contact" data-astro-cid-sz7xmlte> ${client.address.lineOne}<br data-astro-cid-sz7xmlte> ${client.address.lineTwo}<br data-astro-cid-sz7xmlte> ${client.address.city} ${client.address.state} ${client.address.zip} </a> </li> <li data-astro-cid-sz7xmlte> <a${addAttribute(`tel:${client.phoneForTel}`, "href")} data-astro-cid-sz7xmlte>
T:
${client.phoneFormatted} </a> </li> <li data-astro-cid-sz7xmlte> <a${addAttribute(`mailto:${client.email}`, "href")} data-astro-cid-sz7xmlte>Click to Email</a> </li> <li data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>EIN: ${client.ein}</span> </li> </ul> <ul id="social-media-links" class="social-media" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Follow Us</h2> </li> <!-- Social media icons will be dynamically added here --> </ul> </div> </div> </div> <div class="credit" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Designed and Hand Coded by</span> <a href="/" target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Your Company Name</a> <span class="copyright" data-astro-cid-sz7xmlte> Copyright ${currentYear} - Present</span> </div> </footer> ${renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { description, title, preloadedImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- A fully fleshed-out <head>, dynamically changing based on client.json and the page front matter --><html lang="en"> <head><!-- View Transitions support -->', '<!-- Standard meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content="dog rescue, dog adoption, pet adoption, animal rescue, dog shelter, rescue dogs, adopt a dog, dog fostering, volunteer with dogs"><meta name="author" content="Happy Paws Dog Rescue"><meta name="robots" content="index, follow"><link rel="canonical"', "><!-- If present, preloads the image passed as a prop -->", '<!-- Social Media Display - generated automatically with the props passd to BaseLayout --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', ">", '<!-- Favicons --><link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png?v1"><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png"><link rel="manifest" href="/assets/favicons/site.webmanifest"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><!-- For home page, use service keywords for the title, including location for SEO.\n            Other pages should just include the page name.\n            \n            EXAMPLE:\n            Home page - House Painting Contractors | Painters and Co. | TestCity, WA\n            About Page - About us | Painters and Co.\n            --><title>\n                ', "\n            </title><!-- Sitewide Scripts -->", "", '</head> <body> <!-- Screen reader skip main nav --> <a class="skip" aria-label="skip to main content" href="#main">Click To Skip To Main Content</a> ', ' <main id="main"> ', " </main> ", ` <script>
    // helper functions to toggle dark mode
    function enableDarkMode() {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  
    function disableDarkMode() {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  
    function setTheme() {
      // default to the light theme
      let theme = "light";
  
      // check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
      if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
      }
      // if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
      else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        theme = "dark";
      }
  
      // if there is no preference set, the default of light will be used. apply accordingly
      theme === "dark" ? enableDarkMode() : disableDarkMode();
    }
  
    setTheme();
  
    document.addEventListener("astro:after-swap", setTheme); // For View Transitions purposes - astro:after-swap ensures that the theme is kept after navigating to a new page.
  <\/script></body></html>`])), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), addAttribute(description, "content"), addAttribute(`https://happypawsrescue.org${Astro2.url.pathname}`, "href"), preloadedImage && renderTemplate`<link rel="preload"${addAttribute(preloadedImage.src, "href")} as="image">`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://${client.domain}${Astro2.url.pathname}`, "content"), preloadedImage && renderTemplate`<meta property="og:image"${addAttribute(preloadedImage.src, "content")}> 
                <meta property="og:image:secure_url"${addAttribute(preloadedImage.src, "content")}>`, Astro2.url.pathname === "/" ? `${title}
                |
                ${client.name}
                |
                ${client.address.city},
                ${client.address.state}` : `${title}
                    |
                    ${client.name}`, renderScript($$result, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/kristinschue/Intermediate-Astro-Decap-CMS/happy-paws-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, client as c };
