import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: "https://site-0-5ayxjbg5q-rigby35xs-projects.vercel.app",
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  output: 'server',
  adapter: vercel()
});
