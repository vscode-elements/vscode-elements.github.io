import type {
  Attribute,
  ClassMember,
  ClassMethod,
  CssCustomProperty,
  CssPart,
  CustomElement,
  CustomElementDeclaration,
  CustomElementField,
  Event,
  Package,
  Slot,
} from "custom-elements-manifest";

type Comparable = ClassMember | CssCustomProperty;

const memberCompare = (a: Comparable, b: Comparable) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
};

export const getElementGroup = (name: string, pack: Package) => {
  const foundModule = pack.modules.find((m) => {
    const foundCustomElementDef = m.exports?.find(
      (e) => e.kind === "custom-element-definition" && e.name === name
    );

    return foundCustomElementDef;
  });

  return foundModule;
};

export type ComponentDeclaration = {
  tagName: string;
  deprecated: string | boolean | undefined;
  description?: string;
  fields: CustomElementField[];
  methods: ClassMethod[];
  attributes: Attribute[];
  events: Event[];
  slots: Slot[];
  cssProps: CssCustomProperty[];
  cssParts: CssPart[];
}

const sanitizeDeclaration = (declaration: CustomElement): ComponentDeclaration => {
  const { deprecated, description } = declaration;
  const tagName = declaration.tagName ?? ''
  const members = declaration.members ?? [];
  const publicMembers = members.filter((m) =>
    m.privacy ? m.privacy !== "private" && m.privacy !== "protected" : true
  );
  const fields = publicMembers
    .filter((m) => m.kind === "field")
    .sort(memberCompare) as CustomElementField[];
  const methods = publicMembers
    .filter((m) => m.kind === "method")
    .sort(memberCompare) as ClassMethod[];
  const attributes = declaration.attributes
    ? declaration.attributes.filter((a) => !a.fieldName).sort(memberCompare)
    : [];
  const events = declaration.events
    ? declaration.events.sort(memberCompare)
    : [];
  const slots = declaration.slots ? declaration.slots.sort(memberCompare) : [];
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
    fields,
    methods,
    attributes,
    events,
    slots,
    cssProps,
    cssParts,
  };
};

export const getCustomElementDeclaration = (tagName: string, cemData: Package) => {
  const elementGroup = getElementGroup(tagName, cemData as Package);

  if (!elementGroup?.declarations) {
    return;
  }

  const customElementDeclaration = elementGroup.declarations.find(
    (d) => (d as CustomElementDeclaration).customElement
  ) as CustomElement;

  return sanitizeDeclaration(customElementDeclaration);
};
