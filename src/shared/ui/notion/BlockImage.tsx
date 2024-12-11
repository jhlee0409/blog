import { ImageBlock } from "@/shared/types/block";
import Image from "next/image";

const BlockImage = (data: ImageBlock) => {
  return data.caption.map((caption, idx) => {
    return (
      <div
        className="py-6 flex flex-col items-center h-[200px]"
        key={caption.plain_text + idx}
      >
        <Image
          src={data.file.url}
          alt={caption.plain_text}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[30%] h-auto"
          onBlur={() => {}}
        />
        <caption className="inline text-sm text-gray-500">
          {`< ${caption.plain_text} >`}
        </caption>
      </div>
    );
  });
};
export default BlockImage;
