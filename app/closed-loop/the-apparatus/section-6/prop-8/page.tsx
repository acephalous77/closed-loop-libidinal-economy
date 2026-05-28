/**
 * Apparatus §6 — Proposition 8 (cohort gradient as developmental
 * Fisher–Rao convergence).
 *
 * The framework's first refutable empirical commitment. The
 * developmental propagator T_θ* has π_R* as an attracting fixed
 * point with exponential rate K > 0, giving the cohort-gradient
 * decay D_KL(ν^init(τ_exp) || π_R*) ≤ D_KL(ν^pre || π_R*) · e^(−2Kτ_exp).
 *
 * Content per publishing-pipeline manuscript §6.1-§6.3.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-6/prop-8";

export const metadata: Metadata = {
  title: "Proposition 8 (cohort gradient) — the apparatus — closed-loop",
  description:
    "The cohort gradient. The user's capacity for resistance varies systematically with developmental-stage-at-introduction to the converged platform regime. The framework's first refutable empirical commitment.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function Prop8Page() {
  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <Link href="/closed-loop/the-apparatus" className="hover:text-oxblood">the apparatus</Link>
        {" · "}
        <span className="text-ink-90">§6 · Prop 8</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Proposition 8 (cohort gradient as developmental Fisher–Rao convergence)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §6 · the cohort gradient
      </p>

      <DepthLayers>
        <Caption>
          The framework&apos;s first refutable empirical commitment.
          The user&apos;s capacity to maintain a behavioral distribution
          distinct from the platform-induced target{" "}
          <M>{String.raw`\pi_{\hat R}^*`}</M> varies systematically
          with developmental-stage-at-introduction to the converged
          platform regime. The KL distance decays exponentially in
          developmental exposure, with a rate <M>{String.raw`K`}</M>{" "}
          the framework predicts a falsifiable functional form for.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The original framework asserted the cohort prediction
            without deriving it. Proposition 8 supplies the derivation
            from the closed-loop dynamics. Let{" "}
            <M>{String.raw`\tau_{\mathrm{exp}}`}</M> denote the
            duration of a user&apos;s developmental exposure to the
            platform — the time from age-of-first-introduction to the
            converged regime up to the moment of analysis. Let{" "}
            <M>{String.raw`\nu_u^{\mathrm{init}}(\tau_{\mathrm{exp}})`}</M>{" "}
            denote the user&apos;s behavioral distribution at the start
            of the analysis period, given developmental exposure{" "}
            <M>{String.raw`\tau_{\mathrm{exp}}`}</M>.
          </p>

          <p className="mb-sm">
            <em>What the proposition says.</em> The developmental
            propagator (the dynamical operator that evolves{" "}
            <M>{String.raw`\nu_u`}</M> under platform exposure at the
            converged policy) has{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M> as an attracting fixed
            point with exponential rate{" "}
            <M>{String.raw`K > 0`}</M>. The user&apos;s initial KL
            distance from the platform target decays as{" "}
            <M>{String.raw`e^{-2K\tau_{\mathrm{exp}}}`}</M>.
          </p>

          <p className="mb-sm">
            <em>The two cohort regimes.</em>
          </p>

          <ul className="list-disc pl-md mb-sm space-y-xs">
            <li>
              <strong>Long-exposure cohort</strong>{" "}
              (<M>{String.raw`\tau_{\mathrm{exp}} \to \infty`}</M>):
              the KL distance approaches zero. The cohort starts the
              analysis essentially <em>at</em>{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M>. Mode B
              (artisanal-resistance intervention; see{" "}
              <Link
                href="/closed-loop/the-apparatus/section-7/theorem-9"
                className="text-oxblood hover:underline"
              >
                Theorem 9
              </Link>
              ) is structurally unavailable at the outset; there is
              nothing to maintain.
            </li>
            <li>
              <strong>Short-exposure cohort</strong>{" "}
              (<M>{String.raw`\tau_{\mathrm{exp}}`}</M> small): the KL
              distance is approximately the pre-platform distance.
              Mode B is available, subject to maintenance labor.
            </li>
          </ul>

          <p className="mb-sm">
            <em>Empirical scale.</em> For platform exposure beginning
            in adolescence (age <M>{String.raw`\sim 10`}</M>) and
            analysis in early adulthood (age{" "}
            <M>{String.raw`\sim 20`}</M>),{" "}
            <M>{String.raw`\tau_{\mathrm{exp}} \approx 10`}</M> years.
            With <M>{String.raw`K`}</M> on the order of{" "}
            <M>{String.raw`0.1`}</M> to <M>{String.raw`1`}</M> per
            year (a reasonable empirical calibration),{" "}
            <M>{String.raw`e^{-2K\tau_{\mathrm{exp}}} \in [10^{-9}, 10^{-1}]`}</M>{" "}
            — the long-exposure cohort starts the analysis essentially
            at <M>{String.raw`\pi_{\hat R}^*`}</M>. This is the
            framework&apos;s substantive empirical claim about the
            native cohort.
          </p>

          <p className="mb-sm">
            <em>What the proposition authorizes the prose to claim.</em>{" "}
            The native cohort — those who grew up entirely inside the
            platform — is structurally distinct from older cohorts.
            Not chronologically distinct. <em>Structurally</em>{" "}
            distinct. Their starting position in the simplex of
            behavioral distributions is at the platform-induced
            target. There is no behavioral distance to maintain.
            Adolescence-without-outside is the framework&apos;s name
            for this condition; Proposition 8 is its formal underwriter.
          </p>

          <p className="mb-sm">
            <em>The developmental-rate constant <M>{String.raw`K`}</M>.</em>{" "}
            <M>{String.raw`K`}</M> depends on the user&apos;s
            behavioral-plasticity rate <M>{String.raw`\beta_u`}</M>{" "}
            from (U3), the local Fisher–Rao metric at{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M>, the strength of the
            platform&apos;s reinforcement signals during the user&apos;s
            developmental period, and the intensity of cross-register
            coupling. The framework predicts the functional form{" "}
            <M>{String.raw`e^{-2K\tau_{\mathrm{exp}}}`}</M> without
            supplying <M>{String.raw`K`}</M> empirically. Calibration
            is an empirical-research target (see Corollary 8.1).
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/the-dynamics/cohort-gradient"
              className="text-oxblood hover:underline"
            >
              operate the cohort-gradient plate
            </Link>{" "}
            to vary <M>{String.raw`K`}</M> and the baseline distance,
            and watch where different cohorts (pre-platform, transition,
            native) sit on the decay curve.
          </p>
        </Middle>

        <Formal label="Proposition 8 (cohort gradient as developmental Fisher–Rao convergence)">
          <p className="mb-sm">
            <em>
              Under (R1), (U3), (U2), and Lemma 1&apos;s convergence{" "}
              <M>{String.raw`\theta_t \to \theta^*`}</M>, the
              developmental propagator{" "}
              <M>{String.raw`\mathcal{T}_{\theta^*}`}</M> has{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M> as an attracting
              fixed point with exponential rate{" "}
              <M>{String.raw`K > 0`}</M>:
            </em>
          </p>
          <MBlock>
            {String.raw`D_{KL}(\nu_u^{\mathrm{init}}(\tau_{\mathrm{exp}}) \,\|\, \pi_{\hat R}^*) \;\leq\; D_{KL}(\nu_u^{\mathrm{pre}} \,\|\, \pi_{\hat R}^*) \cdot e^{-2 K \tau_{\mathrm{exp}}}.`}
          </MBlock>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — three steps
          </p>

          <p className="mb-sm text-ink-90">
            <strong>Step 1 — Fisher–Rao gradient flow.</strong> Under
            (U3), at the operating-point linearization:
          </p>
          <MBlock>
            {String.raw`\dot \nu_u(t) = -\beta_u \nabla_g D_{KL}(\nu_u \,\|\, \pi_{\hat R}^*).`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            By Proposition 5&apos;/the LaSalle argument,{" "}
            <M>{String.raw`D_{KL}(\nu_u(t) \| \pi_{\hat R}^*)`}</M> is
            a strict Lyapunov function decreasing to zero.
          </p>

          <p className="mb-sm text-ink-90">
            <strong>Step 2 — Exponential rate at the limit.</strong>{" "}
            Near <M>{String.raw`\pi_{\hat R}^*`}</M> in the Fisher–Rao
            geometry, the gradient flow linearizes:
          </p>
          <MBlock>
            {String.raw`\frac{d}{dt} D_{KL}(\nu_u(t) \,\|\, \pi_{\hat R}^*) = -\beta_u \|\nabla_g D_{KL}\|_g^2 = -2 \beta_u \cdot D_{KL} \cdot (1 + O(D_{KL})),`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            where the factor of 2 comes from the relation between{" "}
            <M>{String.raw`\|\nabla_g D_{KL}\|^2`}</M> and{" "}
            <M>{String.raw`D_{KL}`}</M> near the minimum (the Hessian
            of <M>{String.raw`D_{KL}`}</M> at{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M> equals twice the Fisher
            information matrix, hence the metric tensor itself, hence
            the unit operator in Fisher–Rao coordinates).
          </p>

          <p className="mb-sm text-ink-90">
            Solving the linearized ODE:{" "}
            <M>{String.raw`D_{KL}(\nu_u(t)) = D_{KL}(\nu_u(0)) \cdot e^{-2\beta_u t} (1 + o(1))`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            <strong>Step 3 — Substitute</strong>{" "}
            <M>{String.raw`K = \beta_u`}</M> and{" "}
            <M>{String.raw`t = \tau_{\mathrm{exp}}`}</M>:
          </p>
          <MBlock>
            {String.raw`D_{KL}(\nu_u^{\mathrm{init}}(\tau_{\mathrm{exp}})) = D_{KL}(\nu_u^{\mathrm{pre}}) \cdot e^{-2 K \tau_{\mathrm{exp}}} + o(e^{-2K\tau_{\mathrm{exp}}}).`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            The substantive bound is the inequality.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Corollaries
          </p>

          <ul className="list-disc pl-md space-y-xs text-base">
            <li>
              <strong>Corollary 8.1 (cohort-gradient testability).</strong>{" "}
              The cohort gradient is empirically testable by stratifying
              a study population by{" "}
              <M>{String.raw`\tau_{\mathrm{exp}}`}</M> and measuring{" "}
              <M>{String.raw`D_{KL}(\hat\nu_u^{\mathrm{init}}(\tau_{\mathrm{exp}}) \| \hat\pi_{\hat R}^*)`}</M>.
              Confirmation: a monotone, exponentially-decreasing
              relationship. Falsification: no cohort effect, or
              non-exponential functional form.
            </li>
            <li>
              <strong>Corollary 8.2 (network amplification).</strong>{" "}
              Network clustering amplifies the cohort effect. If users
              in similar cohorts are clustered in the graph with high
              intra-community density, then the local-average exposure{" "}
              <M>{String.raw`\bar\tau_{\mathrm{exp}}(x)`}</M> at
              user-label <M>{String.raw`x`}</M> replaces the per-user{" "}
              <M>{String.raw`\tau_{\mathrm{exp}}`}</M> in the bound:{" "}
              <M>{String.raw`D_{KL}(\nu_u^{x, \mathrm{init}}) \leq C \cdot e^{-2 K \bar\tau_{\mathrm{exp}}(x)}`}</M>.
              See §8.5.
            </li>
          </ul>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure)
            </Link>{" "}
            — the convergence{" "}
            <M>{String.raw`\theta_t \to \theta^*`}</M> that drives the
            developmental dynamics to{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M>
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, U2, U3)
            </Link>
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/the-dynamics/cohort-gradient"
              className="text-oxblood hover:underline"
            >
              cohort gradient
            </Link>{" "}
            (operates this proposition; v1 lives, will be rebuilt)
          </li>
          <li>
            What follows:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9 (causal sensitivity)
            </Link>{" "}
            — Mode B&apos;s individual-scale unavailability for the
            long-exposure cohort
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
