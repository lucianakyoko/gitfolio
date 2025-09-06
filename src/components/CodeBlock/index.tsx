'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle, Copy } from "lucide-react";

type CodeBlockProps = {
  content: string;
}

export function CodeBlock({content}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="bg-white rounded border border-blue-100 p-4 mb-4 w-full">
      <pre className="text-sm overflow-auto whitespace-pre-wrap bg-gray-800 text-white p-4 rounded-md overflow-x-auto">{content}</pre>

      <div className="flex justify-end mt-2">
        <Button
          className="flex items-center gap-2 border border-blue-100 text-gray-500 cursor-pointer hover:bg-blue-50"
          size="sm"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copiar
            </>
          )}
        </Button>
      </div>
    </div>
  )
}