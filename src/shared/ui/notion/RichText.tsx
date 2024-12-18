import { cn, notionStyles } from "@/shared/lib/utils";
import { RichText as RichTextType } from "@/shared/types/block";

const RichText = (text: RichTextType, idx?: number) => {
  const Tag = text.annotations.code ? "span" : text.text.link ? "a" : "p";

  if (Tag === "p") return text.plain_text;

  return (
    <Tag
      href={text.text.link?.url}
      key={text.plain_text + idx}
      className={cn(notionStyles(text.annotations), {
        "text-red-500 px-1.5 rounded-sm py-0.5 bg-[#6e768166] mr-0.5 text-sm h-fit":
          text.annotations.code,
        "underline text-gray-400 pr-1.5": text.text.link,
      })}
    >
      {text.plain_text}
    </Tag>
  );
};

export default RichText;
