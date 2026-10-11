"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { apparatus } from "./engine";

const DEFINITIONS = [
  { n: "01", label: "session time", def: "seconds this tab has had the site open" },
  { n: "02", label: "pauses", def: "gaps of four seconds or more with no scroll, touch, click, or key" },
  { n: "03", label: "longest pause", def: "the run's longest such gap" },
  { n: "04", label: "works entered", def: "arrivals at a work; returns count" },
  { n: "05", label: "the stable point", def: "the work this session arrived at most; ties go to the most recent" },
];

function clock(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/**
 * The reader's apparatus — the corner instrument. Collapsed: one quiet
 * line. Expanded: the five readouts with their plain definitions, the
 * honesty note, and the way to the offprint.
 */
export function ApparatusInstrument() {
  const snap = useSyncExternalStore(
    apparatus.subscribe,
    apparatus.getSnapshot,
    apparatus.getSnapshot
  );
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!mounted || !snap.started) return null;

  const t = clock(now - snap.startedAt);
  const works = apparatus.worksEntered();
  const stable = apparatus.stablePoint();

  return (
    <div
      className="print-hide"
      style={{
        position: "fixed",
        left: "0.9rem",
        bottom: "0.9rem",
        zIndex: 90,
        fontFamily:
          'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace',
      }}
    >
      {open ? (
        <section
          id="apparatus-panel"
          aria-label="the reader's apparatus"
          style={{
            width: "min(21rem, calc(100vw - 1.8rem))",
            background: "var(--color-paper, #f4ede0)",
            color: "var(--color-ink-90, #2b2520)",
            border: "1px solid var(--color-paper-85, #ddd2bd)",
            padding: "0.85rem 0.95rem 0.95rem",
            boxShadow: "0 12px 40px rgba(26, 22, 18, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "1rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-ink-50, #6f665b)",
              }}
            >
              reader&rsquo;s apparatus
            </p>
            <button
              type="button"
              aria-label="close"
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: 0,
                color: "var(--color-ink-50, #6f665b)",
                cursor: "pointer",
                fontSize: "1rem",
                lineHeight: 1,
                padding: "0.1rem 0.3rem",
              }}
            >
              ×
            </button>
          </div>

          <ol style={{ listStyle: "none", margin: "0.7rem 0 0", padding: 0 }}>
            {DEFINITIONS.map((d, i) => (
              <li
                key={d.n}
                style={{
                  borderTop: "1px solid var(--color-paper-85, #ddd2bd)",
                  padding: "0.45rem 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.8rem",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-70, #5a514a)",
                    }}
                  >
                    {d.n} · {d.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--color-ink, #1a1612)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {i === 0
                      ? t
                      : i === 1
                        ? String(snap.pauses)
                        : i === 2
                          ? (snap.longestPauseMs ? clock(snap.longestPauseMs) : "—")
                          : i === 3
                            ? String(works)
                            : stable
                              ? `${stable.count}`
                              : "—"}
                  </span>
                </div>
                <p
                  style={{
                    margin: "0.15rem 0 0",
                    fontSize: "0.7rem",
                    lineHeight: 1.5,
                    color: "var(--color-ink-50, #6f665b)",
                  }}
                >
                  {d.def}
                </p>
                {i === 4 && stable && (
                  <p
                    style={{
                      margin: "0.2rem 0 0",
                      fontSize: "0.7rem",
                      color: "var(--color-oxblood, #7a1f1f)",
                    }}
                  >
                    {stable.mark} {stable.label}
                  </p>
                )}
              </li>
            ))}
          </ol>

          <p
            style={{
              margin: "0.7rem 0 0",
              fontFamily:
                'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif',
              fontStyle: "italic",
              fontSize: "0.92rem",
              lineHeight: 1.45,
              color: "var(--color-ink-70, #5a514a)",
            }}
          >
            The framework calls the foreclosed pause chrono-debt (§1.4). This
            instrument can show your pauses; what a pause would have cost
            cannot be measured from inside the loop.
          </p>

          <p style={{ margin: "0.7rem 0 0", fontSize: "0.75rem" }}>
            <Link
              href="/reader"
              style={{ color: "var(--color-oxblood, #7a1f1f)" }}
            >
              file the offprint →
            </Link>
          </p>
        </section>
      ) : (
        <button
          type="button"
          aria-expanded={open}
          aria-controls="apparatus-panel"
          onClick={() => setOpen(true)}
          style={{
            background: "var(--color-paper, #f4ede0)",
            color: "var(--color-ink-50, #6f665b)",
            border: "1px solid var(--color-paper-85, #ddd2bd)",
            padding: "0.42rem 0.7rem",
            cursor: "pointer",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            lineHeight: 1.4,
          }}
        >
          reader&rsquo;s apparatus · {t}
          <span className="hidden sm:inline">
            {" "}
            · {snap.pauses} {snap.pauses === 1 ? "pause" : "pauses"} · {works}{" "}
            {works === 1 ? "work" : "works"}
          </span>
        </button>
      )}
    </div>
  );
}
