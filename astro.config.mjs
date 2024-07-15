import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://cmoisdead.github.io",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  plugins: ["prettier-plugin-astro"],
  overrides: [{
    files: "*.astro",
    options: {
      parser: "astro"
    }
  }],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-katex"]
  }
});