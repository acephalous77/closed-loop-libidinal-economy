/**
 * Dividual posterior -- v2 dynamics plate.
 *
 * Operates Proposition 4' (apparatus s3.1). The platform's filtering
 * posterior contracts on the user state at the parametric rate.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { DividualPosterior } from "@/components/closed-loop-v2/DividualPosterior";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/dividual-posterior";

export const metadata: Metadata = {
  title: "Dividual posterior — v2 dynamics — closed-loop",
  description:
    "Operates Proposition 4': the platform's filtering posterior contracts on the user state at the parametric rate sqrt(d log t / t).",
  alternates: { canonical: PATH },
};

export default function DividualPosteriorPage() {
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
        <span className="text-ink-90">dividual posterior</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Dividual posterior
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-3/prop-4-prime"
          className="text-oxblood hover:underline"
        >
          Proposition 4&apos;
        </Link>
        {" · "}posterior contraction at the parametric rate
      </p>

      <div className="my-lg">
        <DividualPosterior />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The platform&apos;s filtering posterior{" "}
            <M>{String.raw`\Pi_t`}</M> contracts on the user state at
            the parametric rate{" "}
            <M>{String.raw`\varepsilon_t \sim \sqrt{d \log t / t}`}</M>.
            Left: posterior variance decay on log-log axes — the curve
            follows the parametric rate within a constant factor.
            Right: the posterior over user-state{" "}
            <M>{String.raw`u`}</M> as a Gaussian density contracting
            around the true{" "}
            <M>{String.raw`u_t^*`}</M> (oxblood vertical line).
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-3/prop-4-prime"
                className="text-oxblood hover:underline"
              >
                Proposition 4&apos;
              </Link>{" "}
              gives the classical parametric-rate Bayesian posterior
              contraction under three conditions (prior support,
              testability via U2, KL-neighborhood prior mass). The
              plate visualizes the contraction directly.
            </p>

            <p className="mb-sm">
              <em>The two parameters.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>d (dimension).</strong> Higher-dimensional
                user-state spaces give larger posterior variance at
                the same sample size. The log term in{" "}
                <M>{String.raw`\sqrt{d \log t / t}`}</M> grows slowly,
                so the parametric rate dominates; the curve shape is
                preserved across <M>{String.raw`d`}</M>.
              </li>
              <li>
                <strong>Effective-sample multiplier (axiom U1).</strong>{" "}
                (U1) gives a lower bound on the per-tick excitation
                probability <M>{String.raw`p_0 > 0`}</M>. The effective
                sample size is{" "}
                <M>{String.raw`\geq p_0 t`}</M>. Increasing the
                multiplier accelerates contraction; decreasing it
                slows the rate.
              </li>
            </ul>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              The dividual is the user-state-as-jointly-observable.
              Identifiability is supplied by (U2); excitation is
              supplied by (U1); parametric stability is supplied by
              (R1)+(R2). Deleuze&apos;s dividual is not a metaphor —
              it is the operational form of the platform&apos;s filter
              at the converged regime. The user-state continues to be
              whatever the user is; the platform converges on the
              user&apos;s state in the standard Bayesian-posterior
              sense.
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
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos; (dividual condition)
            </Link>
          </li>
          <li>
            Companion result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-5-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 5&apos; (metric superego)
            </Link>{" "}
            — the user-side counterpart to the platform-side dividual
          </li>
          <li>
            Required axioms:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 R1, U1, U2
            </Link>
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Proposition 4&apos; entry)
            </Link>{" "}
            — shadow-inference model on engagement traces
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — eighth plate.
      </footer>
    </main>
  );
}
