import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const data = await notion.blocks.children.list({
    block_id: slug,
  });

  return new Response(JSON.stringify(data));
}
