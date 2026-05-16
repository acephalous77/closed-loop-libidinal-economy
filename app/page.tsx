import { FrameworkOrientation } from "@/components/home/FrameworkOrientation";

export default function Cover() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-sm pt-[10rem] pb-md">
        {/* Title — two lines, EB Garamond 3xl, lowercase per spec */}
        <h1 className="font-serif text-3xl text-ink leading-none tracking-tight text-center">
          <span className="block">the closed-loop</span>
          <span className="block">libidinal economy</span>
        </h1>

        {/* Asterisk separator */}
        <div
          aria-hidden="true"
          className="font-mono text-md text-ink-50 mt-[3rem]"
        >
          *
        </div>

        {/* Subtitle — EB Garamond italic lg, ink-70, lowercase per spec */}
        <p className="font-serif italic text-lg text-ink-70 mt-[3rem] max-w-[34rem] text-center leading-snug">
          a framework for the dynamics of attention under platform capture
        </p>

        {/* New: orientation block — what this is + the central image + 3 paths */}
        <FrameworkOrientation />

        {/* Epigraph */}
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
