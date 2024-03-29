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
import cemData from "@data/custom-elements.json";

const memoizedDeclarations: {
  [key: string]: {
    tagName?: string;
    deprecated?: string | boolean;
    description?: string;
    members: ClassMember[];
    publicMembers: ClassMember[];
    fields: CustomElementField[];
    methods: ClassMethod[];
    attributes: Attribute[];
    events: Event[];
    slots: Slot[];
    cssProps: CssCustomProperty[];
    cssParts: CssPart[];
  }[];
} = {};

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

const getElementGroup = (name: string, pack: Package) => {
  const foundModule = pack.modules.find((m) => {
    const foundCustomElementDef = m.exports?.find(
      (e) => e.kind === "custom-element-definition" && e.name === name
    );

    return foundCustomElementDef;
  });

  return foundModule;
};

export const getCustomElementDeclarations = (tagName: string) => {
  if (memoizedDeclarations[tagName]) {
    return memoizedDeclarations[tagName];
  }

  const elementGroup = getElementGroup(tagName, cemData as Package);

  const customElementDeclarations = elementGroup?.declarations
    ? (elementGroup.declarations.filter(
        (d) => (d as CustomElementDeclaration).customElement
      ) as CustomElement[])
    : [];

  const orderedDeclarations = customElementDeclarations.map((declaration) => {
    const { tagName, deprecated, description } = declaration;
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
