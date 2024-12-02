const renderDetail = (summary, content) => {
  return `
<detail>
  <summary>${summary}</summary>
  ${content}
</detail>
`;
};

function renderFieldsMd(fields) {
  let table = `
<div class="api-table properties">

|Name|Attribute|Type|Default|Description|Flags|
|---|---|---|---|---|---|
`;

  fields.forEach((f) => {
    const { name, attribute, type, description } = f;
    const typeText = type?.text
      ? `\`${type.text.replaceAll("|", "\\|")}\``
      : "";
    const defaultText = f.default ? `\`${f.default}\`` : "";
    const descriptionText = description
      ? `<div class="description">${description.replaceAll(
          "\n",
          "<br />"
        )}</div>`
      : "";
    const readonlyFlag = f.readonly ? '<Badge text="readonly" />' : "";
    const reflectsFlag = f.reflects
      ? '<Badge text="reflected" variant="success" />'
      : "";

    table += `|${name}|${
      attribute ?? ""
    }|${typeText}|${defaultText}|${descriptionText}|${readonlyFlag}${reflectsFlag}|\n`;
  });

  table += "\n</div>";

  let md = `
## Properties

${table}
`;

  return md;
}

function renderFieldsHTML(fields) {
  let html = "## Properties\n";

  fields.forEach((f) => {
    const { name, attribute, type } = f;
    const typeText = type?.text
      ? `\`${type.text.replaceAll("|", "\\|")}\``
      : "";

    let rows = "";

    rows += `<tr><th scope="row">Attribute</th><td>${attribute}</td></tr>`;
    rows += `<tr><th scope="row">Type</th><td>${typeText}</td></tr>`;

    html += `
<details>
  <summary>${name}</summary>
  <table>
    <tbody>
${rows}
    </tbody>
  </table>
</details>
`;
  });

  return html;
}

export function renderFields(fields) {
  return renderFieldsMd(fields);
}
