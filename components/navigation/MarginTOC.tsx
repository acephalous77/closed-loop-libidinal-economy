import Link from "next/link";

interface TocEntry {
  number: string;
  title: string;
  slug: string;
}

interface MarginTOCProps {
  entries: TocEntry[];
}

/**
 * The essay's section index, set as a printed contents list.
 *
 * Deliberately static. An earlier version was `sticky top-md` and used an
 * IntersectionObserver to highlight whichever section the reader had
 * scrolled into — which is persistent chrome (Prop 5') and a reading-
 * position indicator (§3.5), both of which the colophon publishes as
 * refused. A contents list is scholarly apparatus; following the reader
 * down the page is the metric superego's substrate. So it sits in the
 * document flow and stays where it was set.
 *
 * Renders twice for the two viewports, one source of truth:
 *   - below `lg`, a collapsed <details> at the head of the essay, so long
 *     pieces are navigable on a phone (they previously had no contents at
 *     all — the whole aside was `hidden lg:block`);
 *   - at `lg` and up, the plain list in the left margin column.
 */
function List({ entries }: MarginTOCProps) {
  return (
    <ol className="flex flex-col gap-xs">
      {entries.map((entry) => (
        <li key={entry.slug} className="flex gap-x-xs leading-snug">
          <span className="text-oxblood shrink-0">{entry.number}</span>
          <Link href={`#${entry.slug}`} className="hover:text-ink-90">
            {entry.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function MarginTOC({ entries }: MarginTOCProps) {
  return (
    <nav
      aria-label="Contents"
      className="font-mono text-xs text-ink-50"
    >
      <h2 className="hidden lg:block text-ink-70 mb-sm uppercase tracking-wider">
        contents
      </h2>
      <div className="hidden lg:block">
        <List entries={entries} />
      </div>
    </nav>
  );
}

/**
 * The same index for narrow viewports — collapsed, in the document flow,
 * above the prose. Separate export so the layout can place it inside the
 * prose column rather than the margin.
 */
export function InlineTOC({ entries }: MarginTOCProps) {
  return (
    <details className="lg:hidden mb-md border-t border-b border-paper-85 py-xs print-hide">
      <summary className="font-mono text-xs text-ink-70 uppercase tracking-wider cursor-pointer">
        contents · {entries.length} sections
      </summary>
      <div className="font-mono text-xs text-ink-50 mt-sm">
        <List entries={entries} />
      </div>
    </details>
  );
}
