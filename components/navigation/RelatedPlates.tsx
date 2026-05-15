interface Entry {
  href: string;
  title: string;
  note: string;
}

interface RelatedPlatesProps {
  entries: Entry[];
}

/**
 * "Related" footer for a plate page — small list of cross-references to
 * other plates that touch the same structural moment. Set in monospace
 * at xs/sm with hairline divider above; meant to be unobtrusive but
 * present for the reader who wants to follow a thread laterally.
 */
export function RelatedPlates({ entries }: RelatedPlatesProps) {
  if (entries.length === 0) return null;
  return (
    <aside
      aria-label="Related"
      className="mt-2xl pt-md border-t border-paper-85"
    >
      <p className="font-mono text-xs text-ink-50 mb-sm uppercase tracking-wider">
        related
      </p>
      <ul className="flex flex-col gap-sm max-w-[var(--measure)]">
        {entries.map((e) => (
          <li key={e.href}>
            <a
              href={e.href}
              className="font-mono text-sm text-ink-90 hover:text-oxblood transition-colors duration-100"
            >
              ↗ {e.title}
            </a>
            <span className="font-serif italic text-sm text-ink-70 ml-xs">
              · {e.note}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
