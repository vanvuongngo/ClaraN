/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { code } from "./renderers/code";
import { MarkdownRendererProps } from "./types";

const QMarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const components: Components = {
    code,
  };

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </Markdown>
  );
};

export const MarkdownRenderer = qwikify$(QMarkdownRenderer);
