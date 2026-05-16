"use client";

import { useEffect, useRef, useState } from "react";
import type { GlossEntry } from "@/lib/math-glossary";

/**
 * Client-side tooltip wrapper for math symbols that have a glossary
 * entry. Hover on desktop, tap-to-toggle on touch. Dismisses on
 * outside-tap and Escape. The KaTeX HTML is rendered by the server
 * (via <M>) and passed in as `html` — this component only adds the
 * interaction layer.
 */
export function MathTip({
  html,
  gloss,
}: {
  html: string;
  gloss: GlossEntry;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span
      ref={ref}
      className="math-tip"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => !v);
      }}
    >
      <span
        dangerouslySetInnerHTML={{ __html: html }}
        className="math-tip__symbol"
      />
      {open && (
        <span className="math-tip__popover" role="tooltip">
          <span className="math-tip__gloss">{gloss.gloss}</span>
          {gloss.href && (
            <a
              href={gloss.href}
              className="math-tip__link"
              onClick={(e) => e.stopPropagation()}
            >
              →&nbsp;source
            </a>
          )}
        </span>
      )}
    </span>
  );
}
