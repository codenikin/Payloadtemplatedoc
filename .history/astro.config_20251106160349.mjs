// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
export default defineConfig({
  output: "static",
  base: "./",
  build: {
    format: "preserve",
  },
  integrations: [
    starlight({
      title: "Botify Docs",
      social: [
        {
          icon: "laptop",
          label: "GitHub",
          href: "https://botify.codenik.in",
        },
      ],
      sidebar: [
        {
          label: "Installation",
          items: [
            { label: "introduction", slug: "guides/installation" },
            { label: "Server Requirements", slug: "guides/server" },
            { label: "Server Configuration", slug: "guides/serverinstall" },
            { label: "Botify installation", slug: "guides/botifyinstall" },
          ],
        },
        {
          label: "Dashboard Overview",
          slug: "dashboard",
        },
        {
          label: "Project structure",
          slug: "project",
        },
        {
          label: "Changes Logs",
          slug: "changelog",
        },
      ],
    }),
  ],
});
