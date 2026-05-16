interface EssayNavProps {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  indexHref?: string;
  indexLabel?: string;
}

/**
 * Bottom-of-essay navigation bar. Renders:
 *   ← previous: <title>  |  the four pieces  |  next: <title> →
 *
 * Either side may be omitted (e.g. the first or last piece in the sequence).
 */
export function EssayNav({
  prev,
  next,
  indexHref = "/the-argument",
  indexLabel = "the argument",
}: EssayNavProps) {
  return (
    <nav
      aria-label="Essay sequence"
      className="font-mono text-xs text-ink-50 mt-2xl pt-lg border-t border-paper-85 max-w-[var(--measure)] mx-auto"
    >
      <ol className="flex flex-wrap items-baseline justify-between gap-x-md gap-y-xs">
        <li className="flex-1 min-w-0">
          {prev ? (
            <a
              href={prev.href}
              className="hover:text-oxblood transition-colors duration-100"
            >
              <span aria-hidden="true">←</span> previous:{" "}
              <span className="text-ink-70">{prev.title}</span>
            </a>
          ) : (
            <span className="text-ink-50/60">—</span>
          )}
        </li>
        <li className="text-center">
          <a
            href={indexHref}
            className="hover:text-oxblood transition-colors duration-100"
          >
            {indexLabel}
          </a>
        </li>
        <li className="flex-1 min-w-0 text-right">
          {next ? (
            <a
              href={next.href}
              className="hover:text-oxblood transition-colors duration-100"
            >
              next: <span className="text-ink-70">{next.title}</span>{" "}
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <span className="text-ink-50/60">—</span>
          )}
        </li>
      </ol>
    </nav>
  );
}
