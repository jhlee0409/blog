import { ImageBlock } from "@/shared/types/block";
import Image from "next/image";
import { memo, useState } from "react";

interface ImageContainerProps {
  url: string;
  alt?: string;
  caption?: string;
}

const ImageContainer = memo(
  ({ url, alt = "image", caption }: ImageContainerProps) => {
    const [loading, setLoading] = useState(true);
    return (
      <div className="py-6 flex flex-col items-center">
        <Image
          src={url}
          alt={alt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 50vw"
          className="w-auto h-auto max-w-full rounded-lg shadow-lg"
          priority
          quality={100}
          onLoadStart={() => setLoading(true)}
          onLoadingComplete={() => setLoading(false)}
        />
        {loading && (
          <div className="w-full h-32 animate-pulse bg-gray-200 rounded-lg" />
        )}
        {caption && (
          <caption className="mt-2 text-sm text-gray-500 text-center">
            {caption}
          </caption>
        )}
      </div>
    );
  }
);

ImageContainer.displayName = "ImageContainer";

const BlockImage = (data: ImageBlock) => {
  if (data.type === "external") {
    return <ImageContainer url={data.external.url} />;
  }

  if (data.type === "file") {
    return <ImageContainer url={data.file.url} />;
  }

  return data.caption.map((caption, idx) => (
    <ImageContainer
      key={`${caption.plain_text}-${idx}`}
      url={data.file.url}
      alt={caption.plain_text}
      caption={caption.plain_text}
    />
  ));
};

export default memo(BlockImage);
