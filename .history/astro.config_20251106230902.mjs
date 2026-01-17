// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import relativeLinks from "astro-relative-links";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  output: "static",
  base: "/",

  integrations: [
    relativeLinks(),
    starlight({
      title: "Botify Docs",
      social: [
        {
          icon: "laptop",
          label: "GitHub",
          href: "https://botify.codenik.in",
        },
      ],
      components: {
        HeroImage: "./src/components/HeroImage.astro",
      },
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

  vite: {
    plugins: [tailwindcss()],
  },
});
