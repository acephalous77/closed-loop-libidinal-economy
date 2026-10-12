import Link from "next/link";

/**
 * Citation register — "cite this work" at the foot of the v2 surfaces
 * (a compact single-line variant for the project cover).
 *
 * From the 2026-10-10 critique's P1: the framework had no citation
 * surface while the v1 archive carried the citation_* meta. The
 * highwire meta now rides the v2 routes (metadata `other:`); this is
 * the visible unit — author · title · version · URL, plus the
 * numbered-results note, in the apparatus register (hairline top,
 * mono label, serif citation).
 */
export function CitationBlock({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="font-mono text-xs text-ink-50 mt-xs text-center max-w-[36rem]">
        cite this work — Selimović, A., the closed-loop libidinal economy, v2
        (autostimulus, 2026) · autostimulus.org/closed-loop
      </p>
    );
  }
  const buildSha = process.env.BUILD_SHA;
  return (
    <section
      aria-label="Cite this work"
      className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50"
    >
      <p className="uppercase tracking-wider text-ink-70">
        Cite this work — v2 · 2026
      </p>
      <p className="mt-sm font-serif italic text-sm text-ink-70 max-w-prose">
        Selimović, A. — the closed-loop libidinal economy, v2. autostimulus,
        2026.{" "}
        <Link
          href="/closed-loop"
          className="not-italic underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          autostimulus.org/closed-loop
        </Link>
      </p>
      <p className="mt-sm leading-relaxed">
        Numbered results cite by section and number — e.g. §7 · Theorem 9.
      </p>
      <p className="mt-sm leading-relaxed">
        {buildSha ? `build ${buildSha} · ` : ""}
        <Link
          href="/closed-loop/errata"
          className="underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          errata →
        </Link>
      </p>
    </section>
  );
}
