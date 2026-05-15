"use client";

import { useEffect, useState } from "react";

interface TocEntry {
  number: string;
  title: string;
  slug: string;
}

interface MarginTOCProps {
  entries: TocEntry[];
}

export function MarginTOC({ entries }: MarginTOCProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const headings = entries
      .map((e) => document.getElementById(e.slug))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (intersections) => {
        for (const entry of intersections) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Active = the topmost visible heading; if none visible, the most recent one above the viewport.
        if (visible.size > 0) {
          // Headings are in document order; pick the first that is visible.
          const first = headings.find((h) => visible.has(h.id));
          if (first) setActiveSlug(first.id);
        } else {
          // No headings visible — find the last heading above the viewport top.
          let last: HTMLElement | null = null;
          for (const h of headings) {
            if (h.getBoundingClientRect().top < 0) last = h;
            else break;
          }
          if (last) setActiveSlug(last.id);
        }
      },
      {
        // Trigger when heading enters the top 40% of viewport.
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [entries]);

  return (
    <nav
      aria-label="Table of contents"
      className="font-mono text-xs text-ink-50 sticky top-md"
    >
      <h2 className="text-ink-70 mb-sm uppercase tracking-wider">contents</h2>
      <ol className="flex flex-col gap-xs">
        {entries.map((entry) => {
          const isActive = entry.slug === activeSlug;
          return (
            <li key={entry.slug} className="flex gap-x-xs leading-snug">
              <span className="text-oxblood shrink-0">{entry.number}</span>
              <a
                href={`#${entry.slug}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "text-ink-90 transition-colors duration-100"
                    : "hover:text-ink-90 transition-colors duration-100"
                }
              >
                {entry.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
