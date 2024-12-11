import { BulletListItemBlock } from "@/shared/types/block";
import RichText from "./RichText";

const BulletList = (data: BulletListItemBlock) => {
  return (
    <div className="flex min-h-8">
      <div className="min-w-6 h-6 flex items-center justify-center">
        <div className="min-w-1.5 min-h-1.5 bg-white rounded-full" />
      </div>
      <div className="whitespace-pre-wrap">{data.rich_text.map(RichText)}</div>
    </div>
  );
};

export default BulletList;
