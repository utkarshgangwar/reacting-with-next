"use client";

import { useState } from "react";

type CodeSnippetProps = {
  code: string;
  language?: string;
};

export default function CodeSnippet({ code, language = "tsx" }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full rounded-2xl border border-zinc-200 bg-zinc-900 text-white dark:border-zinc-800">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-sm text-zinc-400">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="rounded-md bg-zinc-800 px-2 py-1 text-xs hover:bg-zinc-700"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-4 pb-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}