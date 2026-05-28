/**
 * Metric-superego Lyapunov — v2 dynamics plate.
 *
 * Operates Proposition 5' (apparatus §3.2). The user's behavioral
 * distribution ν_u(t) converges to the platform-induced target π_R*
 * under Fisher–Rao gradient flow. D_KL is a strict Lyapunov function.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { MetricSuperego } from "@/components/closed-loop-v2/MetricSuperego";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/metric-superego";

export const metadata: Metadata = {
  title: "Metric superego — v2 dynamics — closed-loop",
  description:
    "Operates Proposition 5': ν_u(t) converging to π_R* under Fisher–Rao gradient flow. D_KL as strict Lyapunov function.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function MetricSuperegoPage() {
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
        <span className="text-ink-90">metric superego</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Metric superego
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-3/prop-5-prime"
          className="text-oxblood hover:underline"
        >
          Proposition 5&apos;
        </Link>
        {" · "}Fisher–Rao gradient flow with D_KL as Lyapunov function
      </p>

      <div className="my-lg">
        <MetricSuperego />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The user&apos;s behavioral distribution{" "}
            <M>{String.raw`\nu_u(t)`}</M> on the three-choice simplex
            evolves under Fisher–Rao gradient flow of{" "}
            <M>{String.raw`D_{KL}(\cdot \| \pi_{\hat R}^*)`}</M>. The
            moss point traces toward the oxblood target. The KL
            divergence (right panel) decreases monotonically to zero —
            the strict-Lyapunov certificate of convergence.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-3/prop-5-prime"
                className="text-oxblood hover:underline"
              >
                Proposition 5&apos;
              </Link>{" "}
              establishes that under axiom U3 and{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1
              </Link>
              &apos;s convergence{" "}
              <M>{String.raw`\theta_t \to \theta^*`}</M>, the user&apos;s
              behavioral distribution converges to the platform-induced
              target{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M>. The plate visualizes
              this on the 3-choice simplex.
            </p>

            <p className="mb-sm">
              <em>The simplex.</em> Each user-action distribution{" "}
              <M>{String.raw`\nu_u`}</M> over three choices{" "}
              <M>{String.raw`(a_1, a_2, a_3)`}</M> is a point in the
              triangle. Corners are pure-strategy distributions; the
              center is uniform. The platform-induced target{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M> is another point
              somewhere in the triangle — wherever the platform&apos;s
              reward functional has placed the maximum over user
              actions under{" "}
              <M>{String.raw`\mathcal{D}(\theta^*)`}</M>.
            </p>

            <p className="mb-sm">
              <em>The dynamics.</em> Fisher–Rao gradient flow of{" "}
              <M>{String.raw`D_{KL}(\nu \| \pi_{\hat R}^*)`}</M> moves{" "}
              <M>{String.raw`\nu_u(t)`}</M> in the &ldquo;straight&rdquo;
              direction toward{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M> on the simplex
              (geodesic in the Fisher–Rao metric). At each step the
              KL distance strictly decreases (LaSalle&apos;s invariance
              principle applied to gradient flow on the compact simplex).
            </p>

            <p className="mb-sm">
              <em>What the Lyapunov readout shows.</em> The right
              panel plots{" "}
              <M>{String.raw`D_{KL}(\nu_u(t) \| \pi_{\hat R}^*)`}</M>{" "}
              on log scale. The curve is strictly decreasing — the
              Lyapunov function certificate. Convergence rate scales
              with the plasticity parameter{" "}
              <M>{String.raw`\beta_u`}</M>; the half-life of the KL
              distance is roughly{" "}
              <M>{String.raw`\log 2 / (2 \beta_u)`}</M>.
            </p>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              The user&apos;s self-evaluative distribution drifts toward
              the platform&apos;s ledger. The judging organ is the
              platform&apos;s metric, internalized as the user&apos;s
              standard. The convergence is mechanism-agnostic — free-
              energy minimization, operant reinforcement, and Bayesian
              social learning all produce the same Fisher–Rao gradient
              flow at the operating-point linearization. The plate
              renders the structural form; specific user-side
              mechanisms vary the rate but not the destination.
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
              href="/closed-loop/the-apparatus/section-3/prop-5-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 5&apos; (metric superego)
            </Link>
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — the convergence{" "}
            <M>{String.raw`\theta_t \to \theta^*`}</M> that makes{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M> well-defined as the
            attracting fixed point
          </li>
          <li>
            Cohort-rate refinement:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8 (cohort gradient)
            </Link>{" "}
            — the developmental-rate constant{" "}
            <M>{String.raw`K = \beta_u`}</M> for the convergence
          </li>
          <li>
            Empirical calibration hook:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Proposition 5&apos; entry)
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — fifth plate.
      </footer>
    </main>
  );
}
