// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import relativeLinks from "astro-relative-links";
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
      footer: {
        content: `<p>&copy; 2025 Botify - Bulk WhatsApp Sending Software. All rights reserved.</p>
                  <p>Built with <a href="https://astro.build" target="_blank">Astro</a> & <a href="https://starlight.astro.build" target="_blank">Starlight</a></p>`,
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
});
