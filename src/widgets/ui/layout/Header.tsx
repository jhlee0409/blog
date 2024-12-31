"use client";
import { cn } from "@/shared/lib/utils";
import { Dock, HyperText } from "@/shared/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type IconProps = React.HTMLAttributes<SVGElement>;

const PATHS = {
  Home: "/",
  About: "/about",
};

export default function Header() {
  const path = usePathname();

  return (
    <div className="py-10 sticky top-0 z-10">
      <div className="relative flex flex-col items-center py-2 w-[30dvw] rounded-full gap-2">
        <div className="flex items-center backdrop-blur-md px-4 rounded-md">
          <HyperText
            className="text-4xl font-bold text-black dark:text-white"
            text="DEV"
          />
          <span className="text-4xl font-bold text-black dark:text-white">
            -
          </span>
          <HyperText
            className="text-4xl font-bold text-black dark:text-white"
            text="UNPACKER"
          />
        </div>
        <Dock.Container
          direction="middle"
          className="m-0"
          distance={200}
          magnification={100}
        >
          {Object.keys(PATHS).map((key) => {
            const isActive = path === PATHS[key as keyof typeof PATHS];

            return (
              <Dock.Icon key={key}>
                <Link
                  href={PATHS[key as keyof typeof PATHS]}
                  className={cn({
                    "font-bold bg-gray-500 rounded-lg px-2": isActive,
                  })}
                >
                  {key}
                </Link>
              </Dock.Icon>
            );
          })}
        </Dock.Container>
      </div>
    </div>
  );
}
