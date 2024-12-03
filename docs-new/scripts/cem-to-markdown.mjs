// import fs from "fs";
import * as fs from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { renderFields } from "./renderFunctions.js";

const camelize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const pascalToKebab = (s) =>
  s.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();

const kebabToPascal = (kebab) => {
  const parts = kebab.split("-");

  return parts.reduce(
    (prevVal, currentVal) => prevVal + camelize(currentVal),
    ""
  );
};

const memoizedDeclarations = {};

const memberCompare = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
};

const getElementGroup = (tagName, pack) => {
  const foundModule = pack.modules.find((m) => {
    const foundCustomElementDef = m.exports?.find(
      (e) => e.kind === "custom-element-definition" && e.name === tagName
    );

    return foundCustomElementDef;
  });

  return foundModule;
};

const getCustomElementDeclarations = (tagName, cemData) => {
  const elementGroup = getElementGroup(tagName, cemData);

  const customElementDeclarations = elementGroup?.declarations
    ? elementGroup.declarations.filter((d) => d.customElement)
    : [];

  const orderedDeclarations = customElementDeclarations.map((declaration) => {
    const { tagName, deprecated, description } = declaration;
    const members = declaration.members ?? [];
    const publicMembers = members.filter((m) =>
      m.privacy ? m.privacy !== "private" && m.privacy !== "protected" : true
    );
    const fields = publicMembers
      .filter((m) => m.kind === "field")
      .sort(memberCompare);
    const methods = publicMembers
      .filter((m) => m.kind === "method")
      .sort(memberCompare);
    const attributes = declaration.attributes
      ? declaration.attributes.filter((a) => !a.fieldName).sort(memberCompare)
      : [];
    const events = declaration.events
      ? declaration.events.sort(memberCompare)
      : [];
    const slots = declaration.slots
      ? declaration.slots.sort(memberCompare)
      : [];
    const cssProps = declaration.cssProperties
      ? declaration.cssProperties.sort(memberCompare)
      : [];
    const cssParts = declaration.cssParts
      ? declaration.cssParts.sort(memberCompare)
      : [];

    return {
      tagName,
      deprecated,
      description,
      members,
      publicMembers,
      fields,
      methods,
      attributes,
      events,
      slots,
      cssProps,
      cssParts,
    };
  });

  memoizedDeclarations[tagName] = orderedDeclarations;

  return orderedDeclarations;
};

function getTagNames(pack) {
  const jsModules = pack.modules.filter((m) => m.kind === "javascript-module");
  let tagNames = [];

  jsModules.forEach((m) => {
    const customElementsDeclarations =
      m.declarations?.filter((d) => d.customElement === true && !!d.tagName) ??
      [];

    tagNames.push(...customElementsDeclarations.map((d) => d.tagName));
  });

  return tagNames;
}

async function readManifestFile() {
  const fc = await fs.readFile(
    "node_modules/@vscode-elements/elements/custom-elements.json",
    "utf-8"
  );
  const data = JSON.parse(fc);

  return data;
}

function renderSingleDeclaration(declaration) {
  console.log(declaration.description);
  const { description, fields } = declaration;

  let md = "";
  md += description ? `\n${description}\n` : "";
  md += renderFields(fields);

  return md;
}

function renderDeclarations(declarations) {
  let md = "";

  declarations.forEach((d) => {
    md += renderSingleDeclaration(d);
  });

  return md;
}

async function writeMarkdownFile(tagName, declarations) {
  const componentShortName = tagName.replace("vscode-", "");

  let fc = `---
# Autogenerated file. Do not edit!
title: ${kebabToPascal(componentShortName)}
---

import { Badge } from '@astrojs/starlight/components';

\`<${tagName}>\`

${renderDeclarations(declarations)}
`;

  const dir = `src/content/docs/components/${componentShortName}/api`;

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  await fs.writeFile(`${dir}/index.mdx`, fc);
}

async function main() {
  const manifest = await readManifestFile();
  const tagNames = getTagNames(manifest);

  for (let i = 0; i < tagNames.length; i++) {
    const declarations = getCustomElementDeclarations(tagNames[i], manifest);
    await writeMarkdownFile(tagNames[i], declarations);
  }
}

main();