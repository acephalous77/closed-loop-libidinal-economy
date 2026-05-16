import katex from "katex";

/**
 * Inline KaTeX renderer for use inside plate pages and viz components.
 * MDX content gets KaTeX via remark-math + rehype-katex; this gives the
 * same typesetting to .tsx files.
 *
 * Usage:  <M>{String.raw`\theta_{\mathrm{ref}}`}</M>
 */
export function M({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Block (display) variant. */
export function MBlock({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} className="katex-display" />;
}
