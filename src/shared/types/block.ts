type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type Link = null | {
  url: string;
};

export type RichText = {
  annotations: Annotations;
  plain_text: string;
  href: null | string;
  text: {
    content: string;
    link: Link;
  };
  type: string;
};

export type Block = {
  archived: boolean;
  created_by: {
    object: string;
    id: string;
  };
  created_time: string;
  has_children: boolean;
  type: string;
  id: string;
  in_trash: boolean;
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  object: string;
  parent: {
    type: string;
    id: string;
  };
  properties: object;
  url: string;
  [key: string]: any;
};

export type Heading1Block = {
  rich_text: RichText[];
  is_toggleable: boolean;
  color: string;
};

type Caption = {
  type: "text";
  text: {
    content: string;
    link: Link;
  };
  annotations: Annotations;
  plain_text: string;
  href: null | string;
};

export type ImageBlock = {
  caption: Caption[];
  type: "file" | "external";
  file: {
    url: string;
    expiry_time: string;
  };
  external: {
    url: string;
  };
};

export type BulletListItemBlock = {
  rich_text: RichText[];
  color: string;
};

export type CodeBlock = {
  rich_text: RichText[];
  color: string;
  caption: RichText[];
  language: string;
};

export type ParagraphBlock = {
  rich_text: RichText[];
  color: string;
};
