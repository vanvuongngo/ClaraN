/** @jsxImportSource react */

import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { Copy } from "lucide-react";
import { getReadableLanguageName } from "../utils";

//TODO: find a syntax highlighter
// The react-syntax-highlighter shows a strange padding for the first lines and a text border.
//
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { codeStyle } from "../styles";

// Function to handle copying code to clipboard
const handleCopy = async (code: string) => {
  await writeText(code);
};

interface CodeProps {
  [x: string]: any;
  inline?: boolean;
  className?: string;
  children?: any;
}

export const code = ({
  inline,
  className,
  children: codeChildren,
  ...props
}: CodeProps): JSX.Element => {
  const match = /language-(\w+)/.exec(className || "");

  if (!inline && match) {
    const language = match[1];
    const code = String(codeChildren).replace(/\n$/, "");

    return (
      <>
        <div className="bg-main-view/10 flex items-center justify-between pb-2">
          <span className="text-secondary font-sans text-xs font-medium">
            {getReadableLanguageName(language)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(code);
            }}
            className="btn btn-ghost btn-sm flex items-center gap-1 font-sans"
          >
            <Copy size={16} />
            {"copy"}
          </button>
        </div>
        <div>
          {codeChildren}
          {/* <SyntaxHighlighter
          style={dracula}
          PreTag="div"
          language={match[1]}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={codeStyle}
          {...props}
        >
          {code}
        </SyntaxHighlighter> */}
        </div>
      </>
    );
  }

  return (
    <code className={className} {...props}>
      {codeChildren}
    </code>
  );
};
