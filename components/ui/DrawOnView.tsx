"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * The drawn mark — wraps an SVG figure and inks its strokes in when the
 * block enters view (class `is-drawn`; the stroke animation lives in
 * globals.css and collapses under prefers-reduced-motion). Pair with
 * `pathLength={1}` on the shapes; stagger siblings via `--d` (index).
 */
export function DrawOnView({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || drawn) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [drawn]);

  return (
    <div
      ref={ref}
      className={("draw-on-view" + (drawn ? " is-drawn" : "") + (className ? " " + className : "")).trim()}
      style={style}
    >
      {children}
    </div>
  );
}
