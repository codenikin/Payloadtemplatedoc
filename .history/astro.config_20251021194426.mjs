// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "why botify",
          slug: "botify",
        },
        {
          label: "Installation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "introduction", slug: "guides/installation" },
            { label: "Server Requirements", slug: "guides/server" },
          ],
        },

        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
