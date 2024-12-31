import { ImageBlock } from "@/shared/types/block";
import Image from "next/image";

const BlockImage = (data: ImageBlock) => {
  if (data.type === "external") {
    return (
      <div className="py-6 flex flex-col items-center">
        <Image
          src={data.external.url}
          alt="image"
          width={0}
          height={0}
          sizes="sizes='(max-width: 1024px) 50vw, (max-width: 768px) 100vw, 33vw'"
          className="w-auto"
          onBlur={() => {}}
        />
      </div>
    );
  }

  if (data.type === "file") {
    return (
      <div className="py-6 flex flex-col items-center">
        <Image
          src={data.file.url}
          alt="image"
          width={0}
          height={0}
          sizes="sizes='(max-width: 1024px) 50vw, (max-width: 768px) 100vw, 33vw'"
          className="w-auto"
          onBlur={() => {}}
        />
      </div>
    );
  }
  return data.caption.map((caption, idx) => {
    return (
      <div
        className="py-6 flex flex-col items-center"
        key={caption.plain_text + idx}
      >
        <Image
          src={data.file.url}
          alt={caption.plain_text}
          width={0}
          height={0}
          sizes="sizes='(max-width: 1024px) 50vw, (max-width: 768px) 100vw, 33vw'"
          className="w-auto"
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
