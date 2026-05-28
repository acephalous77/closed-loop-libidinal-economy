/**
 * Network coupling -- v2 dynamics plate. The twelfth.
 *
 * Operates Theorem 10 + the cascade theorem + the percolation
 * threshold (apparatus s8). Networked engagement cascades.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { NetworkCoupling } from "@/components/closed-loop-v2/NetworkCoupling";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/network-coupling";

export const metadata: Metadata = {
  title: "Network coupling — v2 dynamics — closed-loop",
  description:
    "Operates Theorem 10 + cascade + percolation. Networked engagement dynamics with the rho(W) rho(alpha) integral_k = 1 threshold.",
  alternates: { canonical: PATH },
};

export default function NetworkCouplingPage() {
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
        <span className="text-ink-90">network coupling</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Network coupling
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-8"
          className="text-oxblood hover:underline"
        >
          §8 network coupling
        </Link>
        {" · "}cascade dynamics and the percolation threshold
      </p>

      <div className="my-lg">
        <NetworkCoupling />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            A 48-node random graph with connection density{" "}
            <M>{String.raw`\rho(W)`}</M>. Seed an engagement event at
            node 0; cascades propagate along edges with per-edge
            probability <M>{String.raw`\alpha`}</M>. The branching
            ratio <M>{String.raw`\rho(W) \cdot \alpha`}</M> determines
            whether the cascade dissipates locally (subcritical) or
            propagates platform-wide (supercritical).
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-8"
                className="text-oxblood hover:underline"
              >
                §8
              </Link>{" "}
              extends the single-user apparatus to networked
              populations. The engagement-cascade theorem (§8.4) gives
              the stability condition{" "}
              <M>{String.raw`\rho(W) \cdot \rho(\alpha) \cdot \int \kappa < 1`}</M>;
              the percolation theorem (§8.5) classifies the resulting
              cascade dynamics. The plate visualizes both: cascades
              live on the graph; the branching-ratio bar shows where
              the parameters sit relative to threshold.
            </p>

            <p className="mb-sm">
              <em>Three regimes to explore.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>Subcritical (rho · alpha {`<`} 1).</strong>{" "}
                Low connection density or low per-edge propagation.
                Seeded cascade dissipates after a few hops; cascade
                size remains small; the percolation bar reads moss.
              </li>
              <li>
                <strong>Near threshold (rho · alpha {`~`} 1).</strong>{" "}
                Critical dynamics. Long-range temporal correlations;
                power-law cascade sizes; the framework&apos;s
                mobilization-dispersion regime.
              </li>
              <li>
                <strong>Supercritical (rho · alpha {`>`} 1).</strong>{" "}
                High connectivity or strong per-edge propagation.
                Cascades propagate platform-wide; the percolation
                bar reads oxblood. This is the framework&apos;s
                substantive empirical claim about contemporary
                platforms.
              </li>
            </ul>

            <p className="mb-sm">
              <em>Why the threshold matters politically.</em> The
              fourth-cell intervention site — regulatory imposition
              on the observation channel — can in principle target
              the graph structure itself. Lowering{" "}
              <M>{String.raw`\rho(W)`}</M> below threshold converts
              super-critical cascade dynamics into local cascades.
              This is the framework&apos;s formal underwriter for
              graph-structure regulation as a Mode A site.
            </p>

            <p className="mb-sm">
              <em>What the theorem authorizes the prose to claim.</em>{" "}
              The mobilization-dispersion patterns characteristic of
              contemporary platforms are super-critical cascade
              dynamics on graphs above the percolation threshold.
              Theorem 10 supplies the formal vocabulary; the plate
              shows the threshold being crossed.
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
              href="/closed-loop/the-apparatus/section-8"
              className="text-oxblood hover:underline"
            >
              §8 Network coupling (Theorem 10 + cascade + percolation)
            </Link>
          </li>
          <li>
            Single-user counterpart:{" "}
            <Link
              href="/closed-loop/v2-dynamics/somatic-hawkes"
              className="text-oxblood hover:underline"
            >
              somatic Hawkes plate
            </Link>{" "}
            — the per-user cross-register cascades the network extends
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            (networked Lemma 1, §8.3) — the per-user foreclosure that
            grounds the average and uniform claims
          </li>
          <li>
            Intervention site:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5 fourth-cell mode
            </Link>{" "}
            — regulatory imposition on graph structure
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — network coupling.
      </footer>
    </main>
  );
}
