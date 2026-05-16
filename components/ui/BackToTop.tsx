"use client";

import { useEffect, useState } from "react";

/**
 * A small "↑ top" button fixed to the bottom-right of the viewport on
 * long pages. Appears only after the reader has scrolled past one
 * viewport-height; smooth-scrolls to top on click. Hidden on print.
 *
 * Mount once at the top of any long-form page (already done alongside
 * <ReadingProgress />).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > window.innerHeight);
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
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="print-hide"
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        zIndex: 40,
        padding: "0.45rem 0.75rem",
        background: "var(--color-paper)",
        color: "var(--color-ink-70)",
        border: "1px solid var(--color-paper-85)",
        borderRadius: "2px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        cursor: "pointer",
        opacity: visible ? 0.9 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.18s ease, transform 0.18s ease, color 0.12s ease, border-color 0.12s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--color-oxblood)";
        e.currentTarget.style.borderColor = "var(--color-oxblood)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--color-ink-70)";
        e.currentTarget.style.borderColor = "var(--color-paper-85)";
      }}
    >
      ↑ top
    </button>
  );
}
