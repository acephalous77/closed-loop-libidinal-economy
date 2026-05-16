import katex from "katex";
import { findGloss } from "@/lib/math-glossary";
import { MathTip } from "./MathTip";

/**
 * Inline KaTeX renderer for use inside plate pages and viz components.
 * MDX content gets KaTeX via remark-math + rehype-katex; this gives the
 * same typesetting to .tsx files.
 *
 * If the LaTeX source matches an entry in lib/math-glossary, the rendered
 * symbol is wrapped in a hover/tap tooltip with a plain-English gloss.
 * Otherwise it renders identically to a bare KaTeX span.
 *
 * Usage:  <M>{String.raw`\theta_{\mathrm{ref}}`}</M>
 */
export function M({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  const gloss = findGloss(children);
  if (gloss) return <MathTip html={html} gloss={gloss} />;
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
