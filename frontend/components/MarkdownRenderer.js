"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function MarkdownRenderer({ content }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const highlightTheme = mounted && resolvedTheme === 'light' ? oneLight : oneDark;
          
          return !inline && match ? (
            <SyntaxHighlighter
              style={highlightTheme}
              language={match[1]}
              PreTag="div"
              className="!rounded-xl overflow-hidden my-6 !bg-gray-50 dark:!bg-[#111] border border-gray-200 dark:border-cv-dark/30 shadow-sm"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={`${className} bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-cv-orange dark:text-cv-peach text-sm font-mono`} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
