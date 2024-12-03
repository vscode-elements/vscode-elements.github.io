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
          items: [
            // { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
          ],
        },
        {
          label: "API",
          items: [
            { label: "Badge", link: "components/badge/api" },
            { label: "Button", link: "components/button/api" },
            { label: "Checkbox", link: "components/checkbox/api" },
            { label: "CheckboxGroup", link: "components/checkbox-group/api" },
            { label: "Collapsible", link: "components/collapsible/api" },
            { label: "ContextMenu", link: "components/context-menu/api" },
            {
              label: "ContextMenuItem",
              link: "components/context-menu-item/api",
            },
            { label: "Divider", link: "components/divider/api" },
            { label: "FormContainer", link: "components/form-container/api" },
            { label: "FormGroup", link: "components/form-group/api" },
            { label: "FormHelper", link: "components/form-helper/api" },
            { label: "Icon", link: "components/icon/api" },
            { label: "Label", link: "components/label/api" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
