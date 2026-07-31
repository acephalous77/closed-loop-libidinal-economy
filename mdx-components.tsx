import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="font-serif text-2xl text-ink leading-tight mt-xl mb-md">
        {children}
      </h1>
    ),
    /* Section breaks were set at mt-xl (9rem / 144px) with mb-md under the
       heading — a third of a laptop viewport of blank above every section,
       which read as a gap rather than as a break. Stepped down one rung on
       the same scale: the air still separates the sections, and the heading
       now sits closer to the prose it governs than to the section it ends. */
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="font-mono font-medium text-xl text-ink-90 leading-snug mt-lg mb-sm scroll-mt-md"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="font-mono font-medium text-md text-ink-90 leading-snug mt-md mb-sm scroll-mt-md"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
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
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => (
      <strong className="font-medium text-ink">{children}</strong>
    ),
    sub: ({ children }) => (
      <sub className="text-[0.75em] align-sub">{children}</sub>
    ),
    sup: ({ children }) => (
      <sup className="text-[0.75em] align-super">{children}</sup>
    ),
    blockquote: ({ children }) => (
      <blockquote className="font-serif italic text-lg text-ink-70 border-l-2 border-paper-85 pl-sm my-md">
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
      <hr className="border-0 border-t border-paper-85 my-lg" />
    ),
    ul: ({ children }) => (
      <ul className="font-serif text-base text-ink-90 list-disc pl-[1.5em] mb-sm space-y-xs">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="font-serif text-base text-ink-90 list-decimal pl-[1.5em] mb-sm space-y-xs">
        {children}
      </ol>
    ),
  };
}
