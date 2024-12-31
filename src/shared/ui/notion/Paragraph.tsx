import { ParagraphBlock } from "@/shared/types/block";
import RichText from "./RichText";

const Paragraph = (data: ParagraphBlock) => {
  return (
    <div className="whitespace-pre-wrap min-h-5">
      {data.rich_text.map(RichText)}
    </div>
  );
};
export default Paragraph;
