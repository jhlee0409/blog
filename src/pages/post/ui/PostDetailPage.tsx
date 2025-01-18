"use client";

import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { Block } from "@/shared/types/block";
import { Fragment } from "react";
import {
  CodeBlock,
  BulletList,
  Heading,
  Paragraph,
  BlockImage,
} from "@/shared/ui/notion";
import Link from "next/link";
import { useBlockChildren } from "../hooks/useBlockChildren";

type Props = {
  data: ListBlockChildrenResponse;
};

export default function PostDetailPage({ data }: Props) {
  const blocks = data?.results as Block[] | null;

  if (!blocks) return null;

  return (
    <div className="w-full px-4 max-w-screen-lg mx-auto">
      {blocks.map((block) => (
        <BlockComponent key={block.id} block={block} />
      ))}
    </div>
  );
}

const BlockComponent = ({ block }: { block: Block }) => {
  const { children, isLoading } = useBlockChildren(
    block.has_children ? block.id : ""
  );

  const isHead =
    block.type === "heading_1" ||
    block.type === "heading_2" ||
    block.type === "heading_3" ||
    block.type === "heading_4" ||
    block.type === "heading_5" ||
    block.type === "heading_6";

  if ("child_page" in block)
    return (
      <div className="w-fit">
        <Link href={`/post/${block.id}`}>
          <p className="p-1 pt-4 border-b border-[#21262d]">
            📄 {block.child_page.title}
          </p>
        </Link>
      </div>
    );

  return (
    <Fragment>
      {isHead ? <Heading {...block} /> : null}
      {block.type === "image" ? <BlockImage {...block.image} /> : null}
      {block.type === "bulleted_list_item" ? (
        <BulletList {...block.bulleted_list_item} />
      ) : null}
      {block.type === "code" ? <CodeBlock {...block.code} /> : null}
      {block.type === "paragraph" ? <Paragraph {...block.paragraph} /> : null}

      {isLoading ? (
        <div className="pl-4 py-2">
          <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3" />
        </div>
      ) : children ? (
        <div className="pl-4">
          <PostDetailPage data={children} />
        </div>
      ) : null}
    </Fragment>
  );
};
