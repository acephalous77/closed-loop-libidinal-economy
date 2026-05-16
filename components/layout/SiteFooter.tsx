/**
 * Site footer — sits at the bottom of every page via the root layout.
 * Three navigation links (reading list · colophon · instrumentation),
 * plus the author/place/year line. Hairline divider above; mono · xs ·
 * ink-50 so it recedes when not the focus, hovers oxblood for
 * affordance.
 *
 * Hidden on the cover page (which has its own footer composition) by
 * checking the route via a pathname guard at the component level — but
 * the simpler approach used here is just to render it on every page;
 * the cover page's existing footer is removed in the same change so
 * there's no duplication.
 */
export function SiteFooter() {
  return (
    <footer className="w-full mt-2xl pt-md pb-md border-t border-paper-85">
      <div className="mx-auto max-w-[var(--container-page)] px-sm flex flex-col sm:flex-row items-baseline justify-between gap-sm text-center sm:text-left">
        <p className="font-mono text-xs text-ink-50">
          <a
            href="/"
            className="hover:text-oxblood transition-colors duration-100"
          >
            the closed-loop libidinal economy
          </a>
        </p>
        <nav aria-label="Site sections" className="font-mono text-xs text-ink-50">
          <a
            href="/the-argument"
            className="hover:text-oxblood transition-colors duration-100"
          >
            the argument
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a
            href="/the-mathematics"
            className="hover:text-oxblood transition-colors duration-100"
          >
            the mathematics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a
            href="/the-dynamics"
            className="hover:text-oxblood transition-colors duration-100"
          >
            the dynamics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a
            href="/reading-list"
            className="hover:text-oxblood transition-colors duration-100"
          >
            reading list
          </a>
        </nav>
        <p className="font-mono text-xs text-ink-50">
          <a
            href="/colophon"
            className="hover:text-oxblood transition-colors duration-100"
          >
            colophon
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a
            href="/instrumentation"
            className="hover:text-oxblood transition-colors duration-100"
          >
            instrumentation
          </a>
        </p>
      </div>
    </footer>
  );
}
