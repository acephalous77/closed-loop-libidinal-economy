import Link from "next/link";
/**
 * "Related reading in the argument" — a small footer surfaced on plate
 * pages that have a substantive prose counterpart in one of the four
 * pieces or the coda. Lives next to RelatedPlates and uses the same
 * visual register, but signals a different kind of crossing: from the
 * mechanism plate (the structural fact) to the prose treatment of what
 * the structural fact lives like (democratic substrate, cohort
 * formation, adult end-state).
 *
 * Each entry is a single anchor link; the description is one short
 * line. Don't list more than 3 — the point is to nudge, not to
 * inventory.
 */

interface ReadingEntry {
  href: string;
  /** Short title — usually "<piece title> · <section>" */
  title: string;
  /** One-line note on what's in that section that touches this plate. */
  note: React.ReactNode;
}

interface RelatedReadingProps {
  entries: ReadingEntry[];
}

export function RelatedReading({ entries }: RelatedReadingProps) {
  if (entries.length === 0) return null;
  return (
    <aside
      aria-label="Related reading in the argument"
      className="mt-2xl pt-md border-t border-paper-85"
    >
      <p className="font-mono text-xs text-ink-50 mb-sm uppercase tracking-wider">
        in the argument
      </p>
      <ul className="flex flex-col gap-sm max-w-[var(--measure)]">
        {entries.map((e) => (
          <li key={e.href}>
            <Link
              href={e.href}
              className="font-mono text-sm text-ink-90 hover:text-oxblood transition-colors duration-100"
            >
              ↗ {e.title}
            </Link>
            <span className="font-serif italic text-sm text-ink-70 ml-xs">
              · {e.note}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
