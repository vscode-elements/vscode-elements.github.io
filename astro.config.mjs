// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import starlightImageZoom from "starlight-image-zoom";

const analytics = `
(function(window, document, dataLayerName, id) {
window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f="; SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
tags.async=!0,tags.src="https://szoftverhiba.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
!function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
})(window, document, 'dataLayer', '5f92a4a8-87f5-418f-ac6f-1817837888c3');
`;

// https://astro.build/config
export default defineConfig({
  site: "https://vscode-elements.github.io",
  integrations: [
    starlight({
      title: "VSCode Elements",
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vscode-elements/elements",
        },
      ],
      favicon: "/favicon.ico",
      logo: {
        src: "/src/assets/logo.svg",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "xQEXVaL5aIe6GfMlfVDFzRqf0f4_XgL4son-Lk9RPQM",
          },
        },
        {
          tag: "script",
          attrs: {
            type: "text/javascript",
          },
          content: analytics,
        },
      ],
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
            { label: "Getting Started", slug: "guides/getting-started" },
            { label: "Working with forms", slug: "guides/working-with-forms" },
            {
              label: "Framework integrations",
              items: [
                { label: "React", slug: "guides/framework-integrations/react" },
                { label: "Vue", slug: "guides/framework-integrations/vue" },
              ],
            },
          ],
          collapsed: true,
        },
        {
          label: "Components",
          items: [
            { label: "Badge", slug: "components/badge" },
            { label: "Button", slug: "components/button" },
            { label: "ButtonGroup", slug: "components/button-group" },
            { label: "Checkbox", link: "components/checkbox" },
            { label: "CheckboxGroup", link: "components/checkbox-group" },
            { label: "Collapsible", link: "components/collapsible" },
            {
              label: "ContextMenu",
              items: [
                { label: "ContextMenu", link: "components/context-menu" },
                {
                  label: "ContextMenuItem",
                  link: "components/context-menu-item",
                },
              ],
            },
            { label: "Divider", link: "components/divider" },
            { label: "FormContainer", link: "components/form-container" },
            { label: "FormGroup", link: "components/form-group" },
            { label: "FormHelper", link: "components/form-helper" },
            { label: "Icon", link: "components/icon" },
            { label: "Label", link: "components/label" },
            { label: "Option", link: "components/option" },
            { label: "ProgressRing", link: "components/progress-ring" },
            { label: "Radio", link: "components/radio" },
            { label: "RadioGroup", link: "components/radio-group" },
            { label: "Scrollable", link: "components/scrollable" },
            {
              label: "Select",
              items: [
                { label: "SingleSelect", link: "components/single-select" },
                { label: "MultiSelect", link: "components/multi-select" },
              ],
            },
            { label: "SplitLayout", link: "components/split-layout" },
            {
              label: "Table",
              items: [
                { label: "Table", link: "components/table" },
                { label: "TableBody", link: "components/table-body" },
                { label: "TableCell", link: "components/table-cell" },
                { label: "TableHeader", link: "components/table-header" },
                {
                  label: "TableHeaderCell",
                  link: "components/table-header-cell",
                },
                { label: "TableRow", link: "components/table-row" },
              ],
            },
            {
              label: "Tabs",
              items: [
                { label: "Tabs", link: "components/tabs" },
                { label: "TabHeader", link: "components/tab-header" },
                { label: "TabPanel", link: "components/tab-panel" },
              ],
            },
            { label: "Textarea", link: "components/textarea" },
            { label: "Textfield", link: "components/textfield" },
            { label: "ToolbarButton", link: "components/toolbar-button" },
            { label: "ToolbarContainer", link: "components/toolbar-container" },
            {
              label: "Tree",
              items: [
                { label: "Tree", link: "components/tree" },
                { label: "TreeItem", link: "components/tree-item" },
              ],
            },
          ],
          collapsed: true,
        },
        {
          label: "API",
          items: [
            { label: "Badge", link: "components/badge/api" },
            { label: "Button", link: "components/button/api" },
            { label: "ButtonGroup", link: "components/button-group/api" },
            { label: "Checkbox", link: "components/checkbox/api" },
            { label: "CheckboxGroup", link: "components/checkbox-group/api" },
            { label: "Collapsible", link: "components/collapsible/api" },
            {
              label: "ContextMenu",
              items: [
                { label: "ContextMenu", link: "components/context-menu/api" },
                {
                  label: "ContextMenuItem",
                  link: "components/context-menu-item/api",
                },
              ],
              collapsed: false,
            },
            { label: "Divider", link: "components/divider/api" },
            { label: "FormContainer", link: "components/form-container/api" },
            { label: "FormGroup", link: "components/form-group/api" },
            { label: "FormHelper", link: "components/form-helper/api" },
            { label: "Icon", link: "components/icon/api" },
            { label: "Label", link: "components/label/api" },
            { label: "Option", link: "components/option/api" },
            { label: "ProgressRing", link: "components/progress-ring/api" },
            { label: "Radio", link: "components/radio/api" },
            { label: "RadioGroup", link: "components/radio-group/api" },
            { label: "Scrollable", link: "components/scrollable/api" },
            {
              label: "Select",
              items: [
                { label: "SingleSelect", link: "components/single-select/api" },
                { label: "MultiSelect", link: "components/multi-select/api" },
              ],
              collapsed: false,
            },
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
            { label: "ToolbarButton", link: "components/toolbar-button/api" },
            {
              label: "ToolbarContainer",
              link: "components/toolbar-container/api",
            },
            {
              label: "Tree",
              items: [
                { label: "Tree", link: "components/tree/api" },
                { label: "TreeItem", link: "components/tree-item/api" },
              ],
            },
          ],
          collapsed: true,
        },
      ],
      customCss: [
        "./src/styles/restore-defaults.css",
        "./src/styles/custom.css",
      ],
      plugins: [starlightImageZoom()],
    }),
  ],
});
