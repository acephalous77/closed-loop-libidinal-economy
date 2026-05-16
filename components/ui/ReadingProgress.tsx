"use client";

import { useEffect, useState } from "react";

/**
 * A thin reading-progress bar fixed to the top of the viewport on long
 * pages. Tracks scroll position relative to the document; 0% at top,
 * 100% at bottom. Oxblood fill on a transparent track; 2px tall so it
 * never dominates the page.
 *
 * Hidden when the page hasn't scrolled and on print (via .print-hide
 * via globals.css's @media print rules).
 *
 * Mount once at the top of any long-form page (math, essays,
 * reading-list).
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(ratio);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="print-hide"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        background: "transparent",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: "var(--color-oxblood)",
          opacity: progress > 0.005 ? 0.7 : 0,
          transition: "width 0.08s linear, opacity 0.2s ease",
        }}
      />
    </div>
  );
}
