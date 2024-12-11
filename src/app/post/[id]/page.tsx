import { PostDetailPage } from "@/pages/post/ui";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

async function Page({ params }: { params: { id: string } }) {
  const data = await notion.blocks.children.list({
    block_id: params.id,
  });

  return <PostDetailPage data={data} />;
}

export default Page;
