"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { apparatus, type Arrival } from "@/components/reader-apparatus/engine";

const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';
const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';

const READOUTS = [
  { n: "01", label: "session time", def: "seconds this tab has had the site open" },
  { n: "02", label: "pauses", def: "gaps of four seconds or more with no scroll, touch, click, or key" },
  { n: "03", label: "longest pause", def: "the run's longest such gap" },
  { n: "04", label: "works entered", def: "arrivals at a work; returns count" },
  { n: "05", label: "the stable point", def: "the work this session arrived at most; ties go to the most recent" },
];

const SLOTS = [
  { key: "/", mark: "◈", label: "the press" },
  { key: "/psychopolitics-atlas/index.html", mark: "◉", label: "The Psychopolitics of Socialization" },
  { key: "/closed-loop", mark: "◆", label: "The Closed-Loop Libidinal Economy" },
  { key: "/patriotic-times", mark: "✱", label: "Patriotic Times" },
  { key: "/ohcose", mark: "▣", label: "OHCOSE" },
  { key: "/chair", mark: "●", label: "The Ouroboros Life System" },
  { key: "/ouroboric-condition", mark: "○", label: "The Ouroboric Condition" },
  { key: "/manufacture-of-the-subject", mark: "■", label: "The Manufacture of the Subject" },
];

function clock(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function slotX(key: string): number {
  const i = Math.max(0, SLOTS.findIndex((s) => s.key === key));
  return 52 + i * 92;
}

export function Offprint() {
  const snap = useSyncExternalStore(
    apparatus.subscribe,
    apparatus.getSnapshot,
    apparatus.getSnapshot
  );
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const t = clock(now - (snap.startedAt || now));
  const works = apparatus.worksEntered();
  const stable = apparatus.stablePoint();
  const arrivals: Arrival[] = snap.arrivals.slice(0, 40);

  const pathPoints = arrivals
    .map((a) => `${slotX(a.key)},${78}`)
    .join(" ");
  const last = arrivals[arrivals.length - 1];

  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">
          autostimulus
        </Link>
        {" · "}
        <span className="text-ink-90">the reader&rsquo;s apparatus</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        The offprint
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        One session · in memory and nowhere else
      </p>

      <p className="text-base text-ink-90 mb-lg leading-snug">
        This offprint shows one session, held in memory and nowhere else.
        Nothing here was stored or sent; closing the tab ends the record.
        The panel names what each number measures — these are the same
        numbers, printed.
      </p>

      {arrivals.length === 0 && (
        <p className="font-mono text-xs text-ink-50 uppercase tracking-[0.18em] border border-paper-85 inline-block px-xs py-[0.35rem] mb-lg">
          no session on file — the apparatus records only while a tab is open
        </p>
      )}

      {arrivals.length > 0 && (
        <figure className="mb-lg">
          <svg
            viewBox="0 0 740 120"
            width="100%"
            role="img"
            aria-label="The reading path: arrivals across the press and the seven works, in order."
          >
            <line
              x1="52"
              y1="78"
              x2="696"
              y2="78"
              stroke="var(--color-paper-85, #d4d8d1)"
              strokeWidth="1"
            />
            {SLOTS.map((s) => (
              <text
                key={s.key}
                x={slotX(s.key)}
                y="82"
                textAnchor="middle"
                fontFamily={MONO}
                fontSize="15"
                fill={
                  last && last.key === s.key
                    ? "var(--color-oxblood, #174a77)"
                    : "var(--color-ink-70, #4b5258)"
                }
              >
                {s.mark}
              </text>
            ))}
            {arrivals.length > 1 && (
              <polyline
                points={pathPoints}
                fill="none"
                stroke="var(--color-ink-50, #5c646b)"
                strokeWidth="1.1"
                opacity="0.75"
              />
            )}
            {last && (
              <circle
                cx={slotX(last.key)}
                cy="78"
                r="3.4"
                fill="var(--color-oxblood, #174a77)"
              />
            )}
          </svg>
          <figcaption className="mt-xs font-mono text-xs text-ink-50 text-center">
            the reading path — arrivals in order; returns draw back
          </figcaption>
        </figure>
      )}

      <ol className="list-none p-0 m-0 border-t border-paper-85">
        {READOUTS.map((r, i) => (
          <li key={r.n} className="border-b border-paper-85 py-xs">
            <div className="flex justify-between gap-sm items-baseline">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-70">
                {r.n} · {r.label}
              </span>
              <span className="font-mono text-sm text-ink tabular-nums">
                {i === 0
                  ? t
                  : i === 1
                    ? String(snap.pauses)
                    : i === 2
                      ? (snap.longestPauseMs ? clock(snap.longestPauseMs) : "—")
                      : i === 3
                        ? String(works)
                        : stable
                          ? String(stable.count)
                          : "—"}
              </span>
            </div>
            <p className="font-mono text-xs text-ink-50 mt-[0.15rem] leading-relaxed">
              {r.def}
            </p>
            {i === 4 && stable && (
              <p className="font-mono text-xs text-oxblood mt-[0.2rem]">
                {stable.mark} {stable.label}
              </p>
            )}
          </li>
        ))}
      </ol>

      {arrivals.length > 0 && (
        <section className="mt-lg">
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
            Arrivals
          </h2>
          <ol className="list-none p-0 m-0 text-base text-ink-90">
            {arrivals.map((a, i) => (
              <li key={`${a.key}-${a.t}`} className="py-[0.2rem]">
                <span className="font-mono text-xs text-ink-50 tabular-nums mr-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif">
                  {a.mark} {a.label}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <p
        className="mt-lg font-serif italic text-sm text-ink-70 leading-snug"
        style={{ fontFamily: SERIF }}
      >
        The framework calls the foreclosed pause chrono-debt (§1.4). This
        instrument can show your pauses; what a pause would have cost cannot
        be measured from inside the loop.
      </p>

      <div className="print-hide mt-lg flex gap-sm items-baseline">
        <button
          type="button"
          onClick={() => window.print()}
          className="font-mono text-sm bg-ink text-paper px-sm py-[0.6rem] cursor-pointer hover:bg-oxblood transition-colors duration-100"
        >
          print / save as pdf
        </button>
        <Link
          href="/"
          className="font-mono text-xs text-ink-50 hover:text-oxblood"
        >
          ← the shelf
        </Link>
      </div>
    </main>
  );
}
