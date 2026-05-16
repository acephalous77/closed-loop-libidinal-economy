"use client";

import { useEffect } from "react";
import { findGloss } from "@/lib/math-glossary";

/**
 * Post-process MDX-rendered KaTeX content to attach hover/tap tooltips
 * for symbols that have a glossary entry. Mount this once anywhere on a
 * page that renders MDX math (e.g., the math page or the argument page);
 * it walks the document after mount, finds every .katex element, reads
 * the LaTeX source from its <annotation> child, and if the source
 * matches a glossary entry, decorates the element so the existing
 * .math-tip CSS applies.
 *
 * The decoration adds the same .math-tip / .math-tip__symbol classes
 * the <M> component uses, plus an open/close state via a global click
 * handler. Hover-on-desktop works via CSS; tap-to-toggle on mobile
 * works via the click handler installed here.
 */
export function MdxMathTooltips() {
  useEffect(() => {
    const decorate = () => {
      const katexNodes = document.querySelectorAll(".katex");
      katexNodes.forEach((el) => {
        // Skip if already inside a .math-tip (already decorated, e.g.,
        // from a <M> call in the same page).
        if (el.closest(".math-tip")) return;
        if (el.hasAttribute("data-mdx-tip-checked")) return;
        el.setAttribute("data-mdx-tip-checked", "true");

        // Read the LaTeX source from the annotation element.
        const annotation = el.querySelector(
          'annotation[encoding="application/x-tex"]',
        );
        const latex = annotation?.textContent?.trim();
        if (!latex) return;

        const gloss = findGloss(latex);
        if (!gloss) return;

        // Wrap the .katex span in a .math-tip wrapper so the existing
        // tooltip CSS applies. We do this by inserting a wrapper span
        // and moving the .katex node into it; the popover is created
        // on demand by the click/hover handler.
        const wrapper = document.createElement("span");
        wrapper.className = "math-tip math-tip--mdx";
        wrapper.setAttribute("data-gloss", gloss.gloss);
        if (gloss.href) wrapper.setAttribute("data-href", gloss.href);

        const symbolSpan = document.createElement("span");
        symbolSpan.className = "math-tip__symbol";
        el.parentNode?.insertBefore(wrapper, el);
        symbolSpan.appendChild(el);
        wrapper.appendChild(symbolSpan);
      });
    };

    decorate();

    // Re-run on dynamic content changes (e.g., navigation that swaps
    // the document tree without a full reload).
    const obs = new MutationObserver(decorate);
    obs.observe(document.body, { childList: true, subtree: true });

    // Tap-to-toggle on touch: a tap on a .math-tip opens its popover;
    // a tap outside closes any open popover.
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const tip = target.closest(".math-tip--mdx");
      // Close any currently-open popover (CSS sets display via this class).
      document
        .querySelectorAll(".math-tip--mdx.math-tip--open")
        .forEach((n) => {
          if (n !== tip) n.classList.remove("math-tip--open");
        });
      if (tip) {
        e.stopPropagation();
        tip.classList.toggle("math-tip--open");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document
          .querySelectorAll(".math-tip--mdx.math-tip--open")
          .forEach((n) => n.classList.remove("math-tip--open"));
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);

    return () => {
      obs.disconnect();
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
