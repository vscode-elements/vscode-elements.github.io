// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Components",
          items: [{ label: "Badge", slug: "components/badge" }],
        },
				{
          label: "API",
          items: [{ label: "Badge", slug: "components/badge/api" }],
        },
      ],
      customCss: [
        "./src/styles/custom.css",
      ]
    }),
  ],
});
