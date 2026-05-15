export default function Cover() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-sm py-lg">
        <div className="w-full max-w-[var(--container-page)] mx-auto text-center">
          {/* Row 1 — title */}
          <h1 className="font-serif text-3xl text-ink leading-none tracking-tight">
            <span className="block">The Closed-Loop</span>
            <span className="block italic">Libidinal Economy</span>
          </h1>

          {/* Row 2 — subtitle */}
          <p className="font-serif italic text-lg text-ink-70 mt-md mx-auto max-w-[32rem]">
            {/* TKTK — subtitle, ~12–18 words */}
            A framework for attention capture under platform capitalism
          </p>

          {/* Row 3 — three paths */}
          <nav
            aria-label="Primary sections"
            className="font-mono text-md text-ink-90 mt-md"
          >
            <a
              href="/argument"
              className="whitespace-nowrap hover:text-oxblood transition-colors duration-100"
            >
              i. the argument
            </a>
            <span className="mx-sm text-ink-50" aria-hidden="true">
              ·
            </span>
            <a
              href="/mathematics"
              className="whitespace-nowrap hover:text-oxblood transition-colors duration-100"
            >
              ii. the mathematics
            </a>
            <span className="mx-sm text-ink-50" aria-hidden="true">
              ·
            </span>
            <a
              href="/visualizations"
              className="whitespace-nowrap hover:text-oxblood transition-colors duration-100"
            >
              iii. the visualizations
            </a>
          </nav>

          {/* Epigraph — 144px below paths */}
          <figure className="mt-xl mx-auto max-w-[34rem] text-ink-70">
            <blockquote className="font-serif italic text-base leading-relaxed">
              {/* TKTK — epigraph quote */}
              &ldquo;Tktk tktk tktk tktk tktk tktk tktk tktk tktk tktk tktk
              tktk tktk tktk tktk tktk tktk tktk tktk.&rdquo;
            </blockquote>
            <figcaption className="font-mono text-xs text-oxblood mt-xs">
              {/* TKTK — attribution */}— Source, Year
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-sm py-md">
        <div className="max-w-[var(--container-page)] mx-auto font-mono text-xs text-ink-50 flex flex-col sm:flex-row sm:justify-between items-center gap-xs">
          <span>Adnan Selimović, Ph.D.</span>
          <span>2026</span>
          <span>CC BY-SA 4.0 (text) · MIT (code)</span>
        </div>
      </footer>
    </main>
  );
}
