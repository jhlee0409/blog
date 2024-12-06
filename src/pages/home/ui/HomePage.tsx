"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/shared/ui";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row lg:w-1/2 w-full"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
  );
};

export default HomePage;
