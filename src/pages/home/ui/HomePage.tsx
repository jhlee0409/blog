"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/shared/ui";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { useRouter } from "next/navigation";
import { NotionPage } from "@/shared/types/notion";
import { useMemo } from "react";

type Props = {
  notion: QueryDatabaseResponse;
};

const HomePage = ({ notion }: Props) => {
  const { theme } = useTheme();
  const router = useRouter();

  const posts = useMemo(() => notion.results as NotionPage[], [notion.results]);

  return (
    <div className={"flex  w-full flex-col gap-4  lg:flex-row lg:w-1/2 w-full"}>
      {posts.map((page) => (
        <MagicCard
          key={page.id}
          className="cursor-pointer h-[300px] lg:h-[250px] flex-col items-center justify-center shadow-2xl text-4xl px-4"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          onClick={() => {
            router.push(`/post/${page.id}`);
          }}
        >
          <div className="flex flex-col justify-center items-center">
            {page.properties.title.title.map((title) => (
              <p
                className="text-2xl font-bold line-clamp-1"
                key={title.plain_text}
              >
                {title.plain_text}
              </p>
            ))}

            {page.properties.summary.rich_text.map((summary) => (
              <p
                className="text-sm line-clamp-1 text-gray-400 pt-2"
                key={summary.plain_text}
              >
                {summary.plain_text}
              </p>
            ))}
            <div className="flex gap-2 pt-4">
              {page.properties.tags.multi_select.map((tag) => (
                <span
                  className="text-sm line-clamp-1 text-white"
                  key={tag.name}
                >
                  {`#${tag.name}`}
                </span>
              ))}
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default HomePage;
