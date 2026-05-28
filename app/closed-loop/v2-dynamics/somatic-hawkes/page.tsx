/**
 * Somatic Hawkes -- v2 dynamics plate.
 *
 * Operates s3.5 Definition 3.1. Multi-mark Hawkes process across the
 * four registers with cross-register coupling. The dynamical
 * complement to libidinal routing's static explaining-away argument.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { SomaticHawkes } from "@/components/closed-loop-v2/SomaticHawkes";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/somatic-hawkes";

export const metadata: Metadata = {
  title: "Somatic Hawkes — v2 dynamics — closed-loop",
  description:
    "Operates s3.5: multi-mark Hawkes intensity across the four registers. Self-excitation + cross-register coupling. The dynamical form of libidinal routing.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function SomaticHawkesPage() {
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
        <span className="text-ink-90">somatic Hawkes</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Somatic Hawkes
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
          className="text-oxblood hover:underline"
        >
          §3.5 Definition 3.1
        </Link>
        {" · "}multi-mark Hawkes with cross-register coupling
      </p>

      <div className="my-lg">
        <SomaticHawkes />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            Four event tracks (S, C, P, K) — the four registers. Each
            event raises the intensity{" "}
            <M>{String.raw`\lambda^k(t)`}</M> on its own track
            (self-excitation, diagonal{" "}
            <M>{String.raw`\alpha_{kk}`}</M>) and on the others
            (cross-coupling, off-diagonal{" "}
            <M>{String.raw`\alpha_{kl}`}</M>) over the kernel
            timescale <M>{String.raw`\tau_k`}</M>. Cascades become
            visible: an event on one track triggers a burst across
            the others.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
                className="text-oxblood hover:underline"
              >
                Definition 3.1
              </Link>{" "}
              gives the multi-mark Hawkes intensity:
            </p>

            <p className="mb-sm font-mono text-sm pl-md">
              lambda^k(t) = lambda_0^k + sum_l alpha_kl · integral_0^t kappa(t-s) dN^l_s
            </p>

            <p className="mb-sm">
              The plate uses an exponential kernel{" "}
              <M>{String.raw`\kappa(s) = e^{-s/\tau_k}`}</M> and a
              symmetric <M>{String.raw`\alpha`}</M> matrix (diagonal
              = self-excitation; off-diagonal = cross-coupling).
              Events sampled per-tick at rate{" "}
              <M>{String.raw`\lambda^k(t) \cdot dt`}</M>.
            </p>

            <p className="mb-sm">
              <em>The stability condition.</em> Per §3.5,
              stability requires the branching ratio{" "}
              <M>{String.raw`\rho(\alpha) \cdot \int \kappa < 1`}</M>.
              For the symmetric{" "}
              <M>{String.raw`\alpha`}</M> matrix used here, the
              dominant eigenvalue is{" "}
              <M>{String.raw`\alpha_{kk} + 3 \alpha_{kl}`}</M>. The
              readout flips between &ldquo;stable&rdquo; (cascades
              dissipate) and &ldquo;supercritical&rdquo; (cascades
              blow up) as the parameters cross.
            </p>

            <p className="mb-sm">
              <em>Three regimes to explore.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>Independent registers.</strong> Set cross-
                coupling = 0. Each track behaves as its own self-
                exciting Hawkes process; tracks are dynamically
                decoupled.
              </li>
              <li>
                <strong>Cross-register cascades.</strong> Raise the
                cross-coupling. An event on one track now triggers
                events across the others. The intensity curves
                visibly couple — bursts on S produce bursts on C, P,
                K.
              </li>
              <li>
                <strong>Supercritical.</strong> Push the parameters
                past <M>{String.raw`\rho(\alpha) \int \kappa = 1`}</M>.
                Cascades grow without bound; events fill every track.
              </li>
            </ul>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              The dynamical complement to Prop 7&apos;&apos;s static
              explaining-away argument. The off-diagonal{" "}
              <M>{String.raw`\alpha_{kl}`}</M> is the dynamical
              machinery behind libidinal routing. The platform&apos;s
              optimization (Theorem 9) selects policies that increase
              the off-diagonals wherever cascades raise engagement.
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
              href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
              className="text-oxblood hover:underline"
            >
              §3.5 (somatic Hawkes instrument)
            </Link>
          </li>
          <li>
            Static counterpart:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-7-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 7&apos; (libidinal routing)
            </Link>
          </li>
          <li>
            Network extension:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-8"
              className="text-oxblood hover:underline"
            >
              §8 (engagement cascade theorem)
            </Link>{" "}
            — extends the stability condition to networked populations
            via{" "}
            <M>{String.raw`\rho(W) \rho(\alpha) \int \kappa < 1`}</M>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — tenth plate.
      </footer>
    </main>
  );
}
