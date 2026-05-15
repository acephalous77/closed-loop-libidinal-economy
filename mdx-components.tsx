import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="font-serif text-2xl text-ink leading-tight mt-lg mb-md">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-mono text-xl text-ink leading-tight mt-lg mb-sm">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-mono text-md text-ink-90 leading-snug mt-md mb-sm">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm max-w-[var(--container-prose)]">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="font-serif italic text-lg text-ink-70 border-l-2 border-paper-85 pl-sm my-md max-w-[var(--container-prose)]">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-paper-95 px-[0.3em] py-[0.1em]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="font-mono text-sm bg-paper-95 p-sm overflow-x-auto my-sm">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="border-0 border-t border-paper-85 my-lg max-w-[var(--container-prose)]" />
    ),
  };
}
