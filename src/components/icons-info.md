To use the icons, the codicons.css file must be included in the page:

```html
<link rel="stylesheet" href="path/to/codicon.css" id="vscode-codicon-stylesheet">
```

:::caution
Note the required `id` on the link element!
To use web fonts in web components, the component needs to include
the font stylesheet in addition to the page. This id serves as a lookup so
the icon component can automatically create and insert it's own link tag.
:::