/**
 * Crisis-boundary bifurcations -- v2 dynamics plate.
 *
 * Operates Theorem 12 (apparatus s10). Three generic codimension-1
 * bifurcation regimes at the contractivity boundary kappa_Phi = 1,
 * plus the non-generic pitchfork under cohort (Z_2) symmetry.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { CrisisBoundary } from "@/components/closed-loop-v2/CrisisBoundary";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";

const PATH = "/closed-loop/v2-dynamics/crisis-boundary";

export const metadata: Metadata = {
  title: "Crisis-boundary bifurcations — v2 dynamics — closed-loop",
  description:
    "Operates Theorem 12: three generic codimension-1 bifurcation regimes at the contractivity boundary κ_Φ = 1, plus the non-generic pitchfork under cohort (ℤ₂) symmetry.",
  alternates: { canonical: PATH },
};

export default function CrisisBoundaryPage() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[1100px] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-70">v2 dynamics</span>
        {" · "}
        <span className="text-ink-90">crisis boundary</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Crisis-boundary bifurcations
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-10/theorem-12"
          className="text-oxblood hover:underline"
        >
          Theorem 12
        </Link>
        {" · "}three generic bifurcation regimes at the contractivity boundary, plus the symmetry-protected pitchfork
      </p>

      <div className="flex items-center gap-sm mb-sm" aria-hidden>
        <span className="text-ink-70 shrink-0">
          <PlateGlyph slug="crisis-boundary" size={80} strokeWidth={1.05} />
        </span>
        <span className="h-px flex-1 bg-paper-85" />
      </div>

      <div className="my-lg">
        <CrisisBoundary />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            Three generic codimension-1 bifurcation regimes at the
            contractivity boundary{" "}
            <M>{String.raw`\kappa_\Phi = 1`}</M> — saddle-node,
            period-doubling, Neimark-Sacker — plus the non-generic
            pitchfork, which appears when cohort{" "}
            <M>{String.raw`\mathbb{Z}_2`}</M> symmetry is present. Each
            has an empirically observable platform-dynamical signature.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-10/theorem-12"
                className="text-oxblood hover:underline"
              >
                Theorem 12
              </Link>{" "}
              classifies the generic codimension-1 bifurcations of the
              performative operator Phi when its dominant eigenvalue
              touches the unit circle at{" "}
              <M>{String.raw`\kappa_\Phi = 1`}</M>. The plate visualizes
              the bifurcation diagrams of each regime; the reader selects
              which to view.
            </p>

            <p className="mb-sm">
              <em>Three generic regimes, plus one under symmetry.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>Saddle-node.</strong> Eigenvalue at{" "}
                <M>{String.raw`+1`}</M>, quadratic non-degeneracy.
                Stable and unstable fixed points collide at{" "}
                <M>{String.raw`\mu = 0`}</M> and annihilate; above
                threshold the dynamics jump or diverge. Empirical
                signature: platform crises, hard resets, algorithm-
                rebuild events.
              </li>
              <li>
                <strong>Pitchfork (non-generic).</strong> Eigenvalue at{" "}
                <M>{String.raw`+1`}</M>, cubic non-degeneracy. This one
                is non-generic: it requires{" "}
                <M>{String.raw`\Phi`}</M> to commute with a{" "}
                <M>{String.raw`\mathbb{Z}_2`}</M> symmetry, which
                symmetric cohorts can supply. Where that symmetry holds,
                a single stable fixed point becomes unstable and two
                symmetric stable points appear. Empirical signature:
                polarized stable regimes.
              </li>
              <li>
                <strong>Period-doubling (flip).</strong> Eigenvalue at{" "}
                <M>{String.raw`-1`}</M>. Stable fixed point becomes
                unstable; stable 2-cycle appears. Cascade to chaos
                follows. Empirical signature: oscillating then chaotic
                engagement.
              </li>
              <li>
                <strong>Neimark-Sacker.</strong> Complex eigenvalue
                pair on the unit circle (Hopf-like). Stable fixed
                point becomes unstable; stable invariant circle
                appears with amplitude{" "}
                <M>{String.raw`\sqrt{\mu}`}</M>. One of the three
                generic codim-1 cases. Empirical signature: rage-bait
                cycles, viral rhythms, recurrent content patterns.
              </li>
            </ul>

            <p className="mb-sm">
              <em>Reading the diagrams.</em> Stable branches render as
              solid warm-ink curves; unstable branches as dashed
              oxblood. The dashed oxblood vertical line at{" "}
              <M>{String.raw`\mu = 0`}</M> marks the bifurcation point
              (i.e., the crisis boundary{" "}
              <M>{String.raw`\kappa_\Phi = 1`}</M>). To the left: pre-
              crisis regime; to the right: post-crisis.
            </p>

            <p className="mb-sm">
              <em>What the theorem authorizes the prose to claim.</em>{" "}
              Repeated algorithm-rebuild events, monetization pivots,
              rage-bait cycles, viral cascade rhythms are bifurcation
              phenomena at the contractivity boundary the framework
              names — structurally classifiable trajectories of a
              platform in crisis.
            </p>
          </Middle>
        </DepthLayers>
      </div>

      <section className="mt-xl pt-md border-t border-paper-85 max-w-prose mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Operates:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-10/theorem-12"
              className="text-oxblood hover:underline"
            >
              Theorem 12 (crisis-boundary classification)
            </Link>
          </li>
          <li>
            Prior result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9 (causal sensitivity)
            </Link>{" "}
            — the closure-amplification factor that diverges as{" "}
            <M>{String.raw`\kappa_\Phi`}</M> approaches the boundary
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axiom R1
            </Link>{" "}
            — the contractivity hypothesis
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Theorem 12 entry)
            </Link>{" "}
            — Lyapunov exponents, recurrence quantification, spectral
            analysis on engagement time-series
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — eleventh plate.
      </footer>
    </main>
  );
}
