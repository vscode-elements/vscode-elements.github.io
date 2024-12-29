// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  site: "https://vscode-elements.github.io",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/vscode-elements/elements",
      },
      editLink: {
        baseUrl:
          "https://github.com/vscode-elements/vscode-elements.github.io/edit/main/",
      },
      expressiveCode: {
        // @ts-ignore
        plugins: [pluginLineNumbers()],
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
            { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
            { label: "Checkbox", link: "components/checkbox" },
            { label: "CheckboxGroup", link: "components/checkbox-group" },
            { label: "Collapsible", link: "components/collapsible" },
            { label: "ContextMenu", link: "components/context-menu" },
            {
              label: "ContextMenuItem",
              link: "components/context-menu-item",
            },
            { label: "Divider", link: "components/divider" },
            { label: "FormContainer", link: "components/form-container" },
            { label: "FormGroup", link: "components/form-group" },
            { label: "FormHelper", link: "components/form-helper" },
            { label: "Icon", link: "components/icon" },
            { label: "Label", link: "components/label" },
            { label: "MultiSelect", link: "components/multi-select" },
            { label: "Option", link: "components/option" },
            { label: "ProgressRing", link: "components/progress-ring" },
            { label: "Radio", link: "components/radio" },
            { label: "RadioGroup", link: "components/radio-group" },
            { label: "Scrollable", link: "components/scrollable" },
            { label: "SingleSelect", link: "components/single-select" },
            { label: "SplitLayout", link: "components/split-layout" },
            { label: "TabHeader", link: "components/tab-header" },
            { label: "TabPanel", link: "components/tab-panel" },
            { label: "Table", link: "components/table" },
            { label: "TableBody", link: "components/table-body" },
            { label: "TableCell", link: "components/table-cell" },
            { label: "TableHeader", link: "components/table-header" },
            { label: "TableHeaderCell", link: "components/table-header-cell" },
            { label: "TableRow", link: "components/table-row" },
            { label: "Tabs", link: "components/tabs" },
            { label: "Textarea", link: "components/textarea" },
            { label: "Textfield", link: "components/textfield" },
            { label: "Tree", link: "components/tree" },
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
            {
              label: "TableHeaderCell",
              link: "components/table-header-cell/api",
            },
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
