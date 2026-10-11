/**
 * Cohort gradient — v2 dynamics plate.
 *
 * Operates Proposition 8 (apparatus §6). The framework's first
 * refutable empirical commitment: D_KL(ν^init || π_R*) decays
 * asymptotically exponentially in developmental exposure τ_exp,
 * at terminal rate 2K (K = β_u), with a slower global bound at
 * 2K_glob and log D_KL concave at short exposure.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { CohortGradient } from "@/components/closed-loop-v2/CohortGradient";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";

const PATH = "/closed-loop/v2-dynamics/cohort-gradient";

export const metadata: Metadata = {
  title: "Cohort gradient — v2 dynamics — closed-loop",
  description:
    "Operates Proposition 8: D_KL(ν^init(τ_exp) || π_R*) decays asymptotically exponentially with terminal rate 2K, under a global bound at the slower log-Sobolev rate 2K_glob. The cohort gradient as developmental Fisher–Rao convergence.",
  alternates: { canonical: PATH },
};

export default function CohortGradientPage() {
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
        <span className="text-ink-90">cohort gradient</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Cohort gradient
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-6/prop-8"
          className="text-oxblood hover:underline"
        >
          Proposition 8
        </Link>
        {" · "}the framework&apos;s first refutable empirical commitment
      </p>

      <div className="flex items-center gap-sm mb-sm" aria-hidden>
        <span className="text-ink-70 shrink-0">
          <PlateGlyph slug="cohort-gradient" size={80} strokeWidth={1.05} />
        </span>
        <span className="h-px flex-1 bg-paper-85" />
      </div>

      <div className="my-lg">
        <CohortGradient />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The KL distance{" "}
            <M>{String.raw`D_{KL}(\nu_u^{\mathrm{init}}(\tau_{\mathrm{exp}}) \| \pi_{\hat R}^*)`}</M>{" "}
            decays in developmental exposure{" "}
            <M>{String.raw`\tau_{\mathrm{exp}}`}</M> toward zero,
            steepening to a terminal log-slope of{" "}
            <M>{String.raw`-2K`}</M>. Three cohorts are marked: the
            pre-platform cohort (τ_exp = 0, at the baseline), the
            transition cohort (τ_exp = 5y), and the native cohort
            (τ_exp = 15y, typically below the operational-foreclosure
            threshold).
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>The framework&apos;s first refutable empirical
              commitment.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-6/prop-8"
                className="text-oxblood hover:underline"
              >
                Proposition 8
              </Link>{" "}
              derives the cohort gradient from the closed-loop
              dynamics: the developmental propagator{" "}
              <M>{String.raw`\mathcal{T}_{\theta^*}`}</M> has{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M> as an attracting
              fixed point. The user&apos;s initial behavioral distance
              decays toward zero asymptotically exponentially — terminal
              rate <M>{String.raw`2K`}</M>,{" "}
              <M>{String.raw`K = \beta_u`}</M> — with a global upper
              bound at the slower log-Sobolev rate{" "}
              <M>{String.raw`2K_{\mathrm{glob}} \leq 2\beta_u`}</M> and{" "}
              <M>{String.raw`\log D_{KL}`}</M> concave at short exposure.
              The plate renders the terminal exponential.
            </p>

            <p className="mb-sm">
              <em>The two parameters.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>K (developmental rate, /year).</strong> The
                rate at which behavioral distance decays under platform
                exposure. Depends on the user&apos;s behavioral-plasticity
                rate <M>{String.raw`\beta_u`}</M> (axiom U3), the
                local Fisher–Rao metric at{" "}
                <M>{String.raw`\pi_{\hat R}^*`}</M>, the platform&apos;s
                reinforcement-signal strength, and cross-register
                coupling intensity.
              </li>
              <li>
                <strong>D_KL^pre (baseline distance).</strong> The
                user&apos;s pre-platform KL distance from the
                platform-induced target. The pre-platform cohort starts
                here.
              </li>
            </ul>

            <p className="mb-sm">
              <em>The operational-foreclosure threshold.</em> The
              horizontal dashed line at{" "}
              <M>{String.raw`D_{KL} = 10^{-2}`}</M> marks where the
              cohort&apos;s behavioral distribution becomes
              operationally indistinguishable from the platform-induced
              target. At <M>{String.raw`K = 0.3`}</M> and{" "}
              <M>{String.raw`D_{KL}^{\mathrm{pre}} = 2`}</M> (typical
              parameter set), the native cohort (τ_exp = 15y) sits
              well below the threshold.
            </p>

            <p className="mb-sm">
              <em>Half-life.</em> The readout{" "}
              <M>{String.raw`\tau_{1/2} = \log 2 / (2K)`}</M> gives
              the time required for the KL distance to halve. At{" "}
              <M>{String.raw`K = 0.3`}</M>,{" "}
              <M>{String.raw`\tau_{1/2} \approx 1.2`}</M> years —
              every 1.2 years of platform exposure halves the
              behavioral distance.
            </p>

            <p className="mb-sm">
              <em>The empirical-research target.</em> The framework
              predicts a falsifiable functional form. To calibrate{" "}
              <M>{String.raw`K`}</M> empirically: stratify a study
              population by τ_exp, measure each cohort&apos;s KL
              distance from the platform target, fit the curve.
              Confirmation: a monotone, asymptotically-exponential
              relationship — concave in log at short exposure, with
              log-slope approaching{" "}
              <M>{String.raw`-2K`}</M> in the long-exposure cohort.
              Falsification: no cohort effect, non-monotonicity, or a
              tail that is not asymptotically exponential (e.g. power-law
              decay). The{" "}
              <Link
                href="/closed-loop/the-apparatus/section-12#priorities"
                className="text-oxblood hover:underline"
              >
                framework&apos;s priority-1 empirical study
              </Link>{" "}
              targets this calibration directly.
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
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8 (cohort gradient)
            </Link>
          </li>
          <li>
            Empirical calibration hook:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Proposition 8 entry)
            </Link>
          </li>
          <li>
            Priority study:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#priorities"
              className="text-oxblood hover:underline"
            >
              §12.2 Priority 1 — cohort-gradient verification
            </Link>
          </li>
          <li>
            Network extension:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-8"
              className="text-oxblood hover:underline"
            >
              §8.6 cohort graph-amplification
            </Link>{" "}
            — peer-clustering compounds the per-user gradient
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — third plate against the new sim setup.
      </footer>
    </main>
  );
}
