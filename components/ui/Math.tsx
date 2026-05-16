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

/**
 * KaTeX rendered inside SVG via <foreignObject>. Use as a drop-in
 * replacement for SVG <text> when the label contains math. The
 * foreignObject's x/y/width/height define the bounding box; the
 * KaTeX-rendered content is centered within it via flexbox.
 *
 * Usage:
 *   <SvgM x={100} y={50} w={120} h={20}>{String.raw`\theta^*`}</SvgM>
 *
 *   <SvgM x={100} y={50} w={120} h={20} align="left" color="ink-70">
 *     <>policy <M>{String.raw`\pi`}</M></>
 *   </SvgM>
 *
 * Renders the children as HTML inside the SVG, so mixed prose+math
 * is fine. Glossary tooltips work here too — but interactions inside
 * foreignObject can be flaky in some browsers.
 */
export function SvgM({
  x,
  y,
  w,
  h,
  children,
  align = "center",
  color,
  size = "11px",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: React.ReactNode | string;
  align?: "left" | "center" | "right";
  color?: string;
  size?: string;
}) {
  const justify =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";
  // If children is a plain string, route it through <M> so it's KaTeX-rendered.
  const content =
    typeof children === "string" ? <M>{children}</M> : children;
  return (
    <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: "visible" }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: justify,
          fontSize: size,
          color: color ?? "var(--color-ink-90)",
          lineHeight: 1.1,
        }}
      >
        {content}
      </div>
    </foreignObject>
  );
}
