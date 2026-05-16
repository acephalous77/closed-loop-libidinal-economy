import { FrameworkOrientation } from "@/components/home/FrameworkOrientation";

export default function Cover() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center px-sm pt-[6rem] pb-md">
        {/* Title — two lines, EB Garamond 3xl, lowercase per spec */}
        <h1 className="font-serif text-3xl text-ink leading-none tracking-tight text-center">
          <span className="block">the closed-loop</span>
          <span className="block">libidinal economy</span>
        </h1>

        {/* Subtitle — directly below title, no asterisk separator */}
        <p className="font-serif italic text-lg text-ink-70 mt-md max-w-[34rem] text-center leading-snug">
          a framework for the dynamics of attention under platform capture
        </p>

        {/* Orientation block — what this is + the central image + 3 paths */}
        <FrameworkOrientation />

        {/* Epigraph — tightened spacing */}
        <figure className="mt-lg max-w-[34rem] text-center">
          <blockquote className="font-serif italic text-md text-ink-70 leading-snug">
            &ldquo;The splinter in your eye is the best magnifying glass.&rdquo;
          </blockquote>
          <figcaption className="font-mono text-xs text-ink-50 mt-xs">
            — Adorno, Minima Moralia §50
          </figcaption>
        </figure>

        {/* Author / place / year — lives above the global SiteFooter */}
        <p className="font-mono text-xs text-ink-50 mt-xl text-center">
          A.S. — 2026
        </p>
      </div>
    </main>
  );
}
