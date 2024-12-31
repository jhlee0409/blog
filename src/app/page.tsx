import HomePage from "@/pages/home/ui/HomePage";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

export default async function Home() {
  const data = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_PAGE_ID!,
    filter: {
      property: "status",
      select: {
        does_not_equal: "Private",
      },
    },
  });

  return <HomePage notion={data} />;
}
