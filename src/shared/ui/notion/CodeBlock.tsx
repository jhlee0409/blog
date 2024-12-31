import { CodeBlock as CodeBlockType } from "@/shared/types/block";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";

const CodeBlock = (data: CodeBlockType) => {
  return (
    <div className="rounded-md overflow-hidden py-6">
      <div className="flex justify-between bg-[rgb(40,_44,_52)] px-4 pt-3">
        <div className="flex items-center gap-2">
          <div className="bg-[#f45f57] w-2.5 h-2.5 rounded-full" />
          <div className="bg-[#f8bc2f] w-2.5 h-2.5 rounded-full" />
          <div className="bg-[#41c83f] w-2.5 h-2.5 rounded-full" />
        </div>
        <span className="text-sm text-gray-500">{data.language}</span>
      </div>
      <div className="[&_*]:font-d2coding [&_*]:!m-0">
        {data.rich_text.map((text) => (
          <SyntaxHighlighter
            key={text.plain_text}
            language={data.language}
            PreTag="pre"
            style={darcula}
            showLineNumbers={true}
            className="text-sm !rounded-none"
          >
            {String(text.plain_text).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;
