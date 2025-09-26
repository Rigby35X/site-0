import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C1_4nL9v.mjs';
import { manifest } from './manifest_AxL_zkmL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/animal-details/_id_.astro.mjs');
const _page3 = () => import('./pages/api/admin/animals.astro.mjs');
const _page4 = () => import('./pages/api/admin/generate-social-content.astro.mjs');
const _page5 = () => import('./pages/api/admin/organization.astro.mjs');
const _page6 = () => import('./pages/api/admin/test-openai.astro.mjs');
const _page7 = () => import('./pages/api/admin/update-client-data.astro.mjs');
const _page8 = () => import('./pages/api/admin/website-content.astro.mjs');
const _page9 = () => import('./pages/applications.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/donate.astro.mjs');
const _page12 = () => import('./pages/events.astro.mjs');
const _page13 = () => import('./pages/our-animals.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/animal-details/[id].astro", _page2],
    ["src/pages/api/admin/animals.js", _page3],
    ["src/pages/api/admin/generate-social-content.js", _page4],
    ["src/pages/api/admin/organization.js", _page5],
    ["src/pages/api/admin/test-openai.js", _page6],
    ["src/pages/api/admin/update-client-data.js", _page7],
    ["src/pages/api/admin/website-content.js", _page8],
    ["src/pages/applications.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/donate.astro", _page11],
    ["src/pages/events.astro", _page12],
    ["src/pages/our-animals.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9878f7f5-40bc-4269-9a86-6b7ad31517bd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
