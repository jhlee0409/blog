"use client";
import HyperText from "@/components/magicui/hyper-text";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Header() {
  return (
    <div className="py-10 sticky top-0">
      <div className="relative flex flex-col items-center py-2 w-[30dvw] rounded-full backdrop-blur-md">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="Unpacker"
        />
        <Dock
          direction="middle"
          className="m-0"
          distance={200}
          magnification={100}
        >
          <DockIcon>Post</DockIcon>
          <DockIcon>About</DockIcon>
        </Dock>
      </div>
    </div>
  );
}
