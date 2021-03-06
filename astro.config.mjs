import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";
import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./public",
  publicDir: "./static", // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  integrations: [
    vue()
  ],
  adapter: netlify()
});
