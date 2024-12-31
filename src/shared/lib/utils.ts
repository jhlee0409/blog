import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const annotationStyles = {
  bold: "font-bold",
  italic: "italic",
  strikethrough: "line-through",
  underline: "underline",
};

export const notionStyles = (data: any) => {
  return Object.entries(data)
    .map(([key, value]) =>
      value ? annotationStyles[key as keyof typeof annotationStyles] : null
    )
    .join(" ");
};
