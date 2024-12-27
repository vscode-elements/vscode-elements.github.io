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
      editLink: {
        baseUrl: 'https://github.com/vscode-elements/vscode-elements.github.io/edit/main/',
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
          collapsed: true,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
        {
          label: "Components",
          items: [
            // { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
          ],
          collapsed: true,
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
            { label: "MultiSelect", link: "components/multi-select/api" },
            { label: "Option", link: "components/option/api" },
            { label: "ProgressRing", link: "components/progress-ring/api" },
            { label: "Radio", link: "components/radio/api" },
            { label: "RadioGroup", link: "components/radio-group/api" },
            { label: "Scrollable", link: "components/scrollable/api" },
            { label: "SingleSelect", link: "components/single-select/api" },
            { label: "SplitLayout", link: "components/split-layout/api" },
            { label: "TabHeader", link: "components/tab-header/api" },
            { label: "TabPanel", link: "components/tab-panel/api" },
            { label: "Table", link: "components/table/api" },
            { label: "TableBody", link: "components/table-body/api" },
            { label: "TableCell", link: "components/table-cell/api" },
            { label: "TableHeader", link: "components/table-header/api" },
            { label: "TableHeaderCell", link: "components/table-header-cell/api" },
            { label: "TableRow", link: "components/table-row/api" },
            { label: "Tabs", link: "components/tabs/api" },
            { label: "Textarea", link: "components/textarea/api" },
            { label: "Textfield", link: "components/textfield/api" },
            { label: "Tree", link: "components/tree/api" },
          ],
          collapsed: true,
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
