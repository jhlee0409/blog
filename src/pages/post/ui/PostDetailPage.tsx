"use client";

import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { Block } from "@/shared/types/block";
import React, { Fragment, useEffect } from "react";
import {
  CodeBlock,
  BulletList,
  Heading,
  Paragraph,
  BlockImage,
} from "@/shared/ui/notion";
import Link from "next/link";

type Props = {
  data: ListBlockChildrenResponse;
};

const PostDetailPage = ({ data }: Props) => {
  const blocks = data.results as Block[];

  return (
    <div className="w-full px-4 max-w-screen-lg mx-auto pb-[100px]">
      {blocks.map(BlockComponent)}
    </div>
  );
};

const BlockComponent = (block: Block) => {
  const [children, setChildren] =
    React.useState<ListBlockChildrenResponse | null>(null);
  const isHead =
    block.type === "heading_1" ||
    block.type === "heading_2" ||
    block.type === "heading_3" ||
    block.type === "heading_4" ||
    block.type === "heading_5" ||
    block.type === "heading_6";

  useEffect(() => {
    if (!block || !block.has_children) return;
    (async () => {
      const res = await fetch(`/api/block/${block.id}`, {
        cache: "force-cache",
      });
      const data = await res.json();
      setChildren(data);
    })();
  }, [block]);

  if ("child_page" in block)
    return (
      <div key={block.id} className="w-fit">
        <Link href={`/post/${block.id}`}>
          <p className="p-1 pt-4 border-b border-[#21262d]">
            📄 {block.child_page.title}
          </p>
        </Link>
      </div>
    );
  return (
    <Fragment key={block.id}>
      {isHead ? <Heading {...block} /> : null}
      {block.type === "image" ? <BlockImage {...block.image} /> : null}
      {block.type === "bulleted_list_item" ? (
        <BulletList {...block.bulleted_list_item} />
      ) : null}
      {block.type === "code" ? <CodeBlock {...block.code} /> : null}
      {block.type === "paragraph" ? <Paragraph {...block.paragraph} /> : null}

      {children ? <PostDetailPage data={children} /> : null}
    </Fragment>
  );
};

export default PostDetailPage;
