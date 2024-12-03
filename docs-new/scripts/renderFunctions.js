const html = String.raw;

export function renderFields1(fields) {
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

const na = '<span class="na">n/a</span>';

function renderItem({
  name,
  attribute,
  type,
  defaultValue,
  description,
  readonly,
  reflects,
}) {
  const readonlyBadge = readonly ? '<Badge text="readonly" />' : "";
  const reflectsBadge = reflects
    ? '<Badge text="reflected" variant="success" />'
    : "";
  const typeText = type?.text ? `\`${type.text.replaceAll("|", "|")}\`` : "";
  const defaultText = defaultValue ? `\`${defaultValue}\`` : "";
  const descriptionText = description ? "\n" + description + "\n" : "";

  return `<details class="api-details" name="api-details">
  <summary>
    <span>${name} <span class="flags">${readonlyBadge}${reflectsBadge}</span></span>
  </summary>
  <table>
    <tr>
      <th scope="row">Name</th>
      <td>${name ?? ""}</td>
    </tr>
    <tr>
      <th scope="row">Attribute</th>
      <td>${attribute ?? ""}</td>
    </tr>
    <tr>
      <th scope="row">Type</th>
      <td>${typeText}</td>
    </tr>
    <tr>
      <th scope="row">Default</th>
      <td>${defaultText}</td>
    </tr>
    <tr>
      <th scope="row">Description</th>
      <td>${descriptionText}</td>
    </tr>
  </table>
</details>

`;
}

export function renderFields(fields) {
  let markup = "";
  markup += "## Properties\n\n";

  fields.forEach((f) => {
    const {
      name,
      attribute,
      type,
      default: defaultValue,
      description,
      readonly,
      reflects,
    } = f;

    markup += renderItem({
      name,
      attribute,
      type,
      defaultValue,
      description,
      readonly,
      reflects,
    });
  });

  return markup;
}
