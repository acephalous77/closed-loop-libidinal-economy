export default function Cover() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-sm pt-[15rem] pb-md">
        {/* Title — two lines, EB Garamond 3xl, lowercase per spec */}
        <h1 className="font-serif text-3xl text-ink leading-none tracking-tight text-center">
          <span className="block">the closed-loop</span>
          <span className="block">libidinal economy</span>
        </h1>

        {/* Asterisk separator */}
        <div
          aria-hidden="true"
          className="font-mono text-md text-ink-50 mt-[4.5rem]"
        >
          *
        </div>

        {/* Subtitle — EB Garamond italic lg, ink-70, lowercase per spec */}
        <p className="font-serif italic text-lg text-ink-70 mt-[4.5rem] max-w-[34rem] text-center leading-snug">
          a framework for the dynamics of attention under platform capture
        </p>

        {/* Asterisk separator */}
        <div
          aria-hidden="true"
          className="font-mono text-md text-ink-50 mt-[3rem]"
        >
          *
        </div>

        {/* Three paths — vertical stack, JetBrains Mono medium md, ink-90, 24px between */}
        <nav
          aria-label="Primary sections"
          className="font-mono text-md text-ink-90 mt-[3rem] flex flex-col items-center gap-sm"
        >
          <a
            href="/the-argument"
            className="font-medium hover:text-oxblood transition-colors duration-100"
          >
            the argument
          </a>
          <a
            href="/the-mathematics"
            className="font-medium hover:text-oxblood transition-colors duration-100"
          >
            the mathematics
          </a>
          <a
            href="/the-dynamics"
            className="font-medium hover:text-oxblood transition-colors duration-100"
          >
            the dynamics
          </a>
        </nav>

        {/* Epigraph — 144px below paths, smaller composition */}
        <figure className="mt-xl max-w-[34rem] text-center">
          <blockquote className="font-serif italic text-md text-ink-70 leading-snug">
            &ldquo;The splinter in your eye is the best magnifying glass.&rdquo;
          </blockquote>
          <figcaption className="font-mono text-xs text-ink-50 mt-xs">
            — Adorno, Minima Moralia §50
          </figcaption>
        </figure>
      </div>

      {/* Footer — single line, JetBrains Mono xs, ink-50, no links */}
      <footer className="w-full px-sm py-md text-center">
        <p className="font-mono text-xs text-ink-50">
          A. Selimović, Ph.D. — Blacksburg, Virginia — 2026
        </p>
      </footer>
    </main>
  );
}
