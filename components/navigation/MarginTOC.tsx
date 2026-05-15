interface TocEntry {
  number: string;
  title: string;
  slug: string;
}

interface MarginTOCProps {
  entries: TocEntry[];
}

export function MarginTOC({ entries }: MarginTOCProps) {
  return (
    <nav
      aria-label="Table of contents"
      className="font-mono text-xs text-ink-50 sticky top-md"
    >
      <h2 className="text-ink-70 mb-sm uppercase tracking-wider">contents</h2>
      <ol className="flex flex-col gap-xs">
        {entries.map((entry) => (
          <li key={entry.slug} className="flex gap-x-xs leading-snug">
            <span className="text-oxblood shrink-0">{entry.number}</span>
            <a
              href={`#${entry.slug}`}
              className="hover:text-ink-90 transition-colors duration-100"
            >
              {entry.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
