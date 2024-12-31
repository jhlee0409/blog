export interface NotionUser {
  object: "user";
  id: string;
  name: string;
  avatar_url: string;
  type: "person";
  person: {
    email: string;
  };
}

export interface NotionDate {
  start: string;
  end: null | string;
  time_zone: null | string;
}

export interface NotionSelect {
  id: string;
  name: string;
  color: string;
}

export interface NotionRichText {
  type: "text";
  text: {
    content: string;
    link: null | string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null | string;
}

export interface NotionProperties {
  date: {
    id: string;
    type: "date";
    date: NotionDate;
  };
  thumbnail: {
    id: string;
    type: "files";
    files: any[];
  };
  type: {
    id: string;
    type: "select";
    select: NotionSelect;
  };
  slug: {
    id: string;
    type: "rich_text";
    rich_text: NotionRichText[];
  };
  category: {
    id: string;
    type: "select";
    select: NotionSelect;
  };
  tags: {
    id: string;
    type: "multi_select";
    multi_select: NotionSelect[];
  };
  summary: {
    id: string;
    type: "rich_text";
    rich_text: NotionRichText[];
  };
  updatedAt: {
    id: string;
    type: "last_edited_time";
    last_edited_time: string;
  };
  author: {
    id: string;
    type: "people";
    people: NotionUser[];
  };
  title: {
    id: string;
    type: "title";
    title: NotionRichText[];
  };
  status: {
    id: string;
    type: "select";
    select: NotionSelect;
  };
}

export interface NotionPage {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: null | any;
  icon: null | any;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: NotionProperties;
  url: string;
  public_url: null | string;
}
