import { cn, notionStyles } from "@/shared/lib/utils";
import { Block, Heading1Block } from "@/shared/types/block";

type Props = Heading1Block & {
  tagInfo: {
    tag: string;
    className: string;
  };
};

const CommonHeading = (data: Props) => {
  const { tag, className } = data.tagInfo;
  const Tag = tag as keyof JSX.IntrinsicElements;
  return data.rich_text.map((text, idx) => (
    <Tag
      key={text.plain_text + idx}
      className={cn(
        notionStyles(text.annotations),
        {
          "text-red-500 px-1.5 rounded-sm py-0.5 bg-[#6e768166] mr-0.5 text-sm h-fit":
            text.annotations.code,
          "underline text-gray-400 px-1.5": text.text.link,
        },
        className,
        "pt-6"
      )}
    >
      {text.plain_text}
    </Tag>
  ));
};

const notionHeadBlocks = {
  heading_1: {
    tag: "h1",
    className: "bold text-4xl mt-4 mb-2 border-b-2 border-[#21262d] pb-2.5",
  },
  heading_2: {
    tag: "h2",
    className: "bold text-3xl mt-4 mb-2 border-b-2 border-[#21262d] pb-1.5",
  },
  heading_3: {
    tag: "h3",
    className: "bold text-2xl mt-4 mb-2 pb-2.5",
  },
  heading_4: {
    tag: "h4",
    className: "bold text-xl mt-4 mb-2 pb-2.5",
  },
  heading_5: {
    tag: "h5",
    className: "bold text-lg mt-4 mb-2 pb-2.5",
  },
  heading_6: {
    tag: "h6",
    className: "bold text-base mt-4 mb-2 pb-2.5",
  },
};

const Heading = (data: Block) => {
  return (
    <CommonHeading
      {...data[data.type]}
      tagInfo={notionHeadBlocks[data.type as keyof typeof notionHeadBlocks]}
    />
  );
};

export default Heading;
