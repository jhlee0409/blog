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
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row lg:w-1/2 w-full"
      }
    >
      {posts.map((page) => (
        <MagicCard
          key={page.id}
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          onClick={() => {
            console.log(page.id);
            router.push(`/blog/${page.id}`);
          }}
        >
          <div className="flex flex-col justify-center items-center">
            {page.properties.title.title.map((title) => (
              <span className="text-sm" key={title.plain_text}>
                {title.plain_text}
              </span>
            ))}

            {page.properties.slug.rich_text.map((slug) => (
              <span className="text-sm" key={slug.plain_text}>
                {slug.plain_text}
              </span>
            ))}
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default HomePage;
