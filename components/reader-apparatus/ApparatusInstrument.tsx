"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { apparatus, registerFor } from "./engine";

const DEFINITIONS = [
  { n: "01", label: "session time", def: "seconds this tab has had the site open" },
  { n: "02", label: "pauses", def: "gaps of four seconds or more with no scroll, touch, click, or key" },
  { n: "03", label: "longest pause", def: "the run's longest such gap" },
  { n: "04", label: "works entered", def: "arrivals at a work; returns count" },
  { n: "05", label: "the stable point", def: "the work this session arrived at most; ties go to the most recent" },
];

const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';
const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';

function clock(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

const mix = (a: string, b: string, pct: number) =>
  `color-mix(in srgb, ${a} ${pct}%, ${b})`;

/**
 * The reader's apparatus — the corner instrument, worn in the register
 * of whatever room it stands in: a work's own cover tokens inside that
 * work, the house's on the press, /reader and /thinkroom. Collapsed:
 * one quiet line. Expanded: five readouts with their plain definitions,
 * the honesty note, and the way to the offprint.
 */
export function ApparatusInstrument() {
  const pathname = usePathname() || "/";
  const reg = registerFor(pathname);
  // Ouroboric's only instruction line lives bottom-left; the chip moves right.
  const cornerRight =
    pathname === "/ouroboric-condition" ||
    pathname.startsWith("/ouroboric-condition/");
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

  const rule = mix(reg.accent, reg.bg, 32);
  const rowRule = mix(reg.accent, reg.bg, 24);
  const muted = { color: reg.ink, opacity: 0.68 } as const;

  return (
    <div
      className="print-hide"
      style={{
        position: "fixed",
        left: cornerRight ? "auto" : "0.9rem",
        right: cornerRight ? "0.9rem" : "auto",
        bottom: "0.9rem",
        zIndex: 90,
        fontFamily: MONO,
      }}
    >
      {open ? (
        <section
          id="apparatus-panel"
          aria-label="the reader's apparatus"
          style={{
            width: "min(21rem, calc(100vw - 1.8rem))",
            background: reg.bg,
            color: reg.ink,
            border: `1px solid ${rule}`,
            padding: "0.85rem 0.95rem 0.95rem",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.28)",
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
                ...muted,
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
                color: reg.ink,
                opacity: 0.7,
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
                  borderTop: `1px solid ${rowRule}`,
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
                      ...muted,
                    }}
                  >
                    {d.n} · {d.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: reg.ink,
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
                    ...muted,
                  }}
                >
                  {d.def}
                </p>
                {i === 4 && stable && (
                  <p
                    style={{
                      margin: "0.2rem 0 0",
                      fontSize: "0.7rem",
                      color: reg.accent,
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
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "0.92rem",
              lineHeight: 1.45,
              color: reg.ink,
              opacity: 0.85,
            }}
          >
            The framework calls the foreclosed pause chrono-debt (§1.4). This
            instrument can show your pauses; what a pause would have cost
            cannot be measured from inside the loop.
          </p>

          <p style={{ margin: "0.7rem 0 0", fontSize: "0.75rem" }}>
            <Link href="/reader" style={{ color: reg.accent }}>
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
            background: reg.bg,
            color: reg.ink,
            opacity: 0.9,
            border: `1px solid ${rule}`,
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
