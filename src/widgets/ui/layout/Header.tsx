"use client";
import { Dock, HyperText } from "@/shared/ui";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Header() {
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
          <Dock.Icon>Post</Dock.Icon>
          <Dock.Icon>About</Dock.Icon>
        </Dock.Container>
      </div>
    </div>
  );
}
