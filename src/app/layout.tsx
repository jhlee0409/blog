import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/ui/layout";
import { cn } from "@/shared/lib/utils";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Unpacker",
  description: "Hi I'm Dev-Unpacker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          inter.className,
          "dark flex flex-col w-screen items-center overflow-x-hidden px-4 pb-[100px] font-nexon"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
