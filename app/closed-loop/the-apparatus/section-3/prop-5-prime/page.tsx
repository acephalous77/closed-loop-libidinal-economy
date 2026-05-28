/**
 * Apparatus §3.2 — Proposition 5' (the metric superego).
 *
 * The user-side counterpart to Prop 4''s platform-side dividual.
 * The user's behavioral distribution converges to the platform-
 * induced target. Capture without coercion.
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

const PATH = "/closed-loop/the-apparatus/section-3/prop-5-prime";

export const metadata: Metadata = {
  title: "Proposition 5' (metric superego) — the apparatus — closed-loop",
  description:
    "The user's behavioral distribution converges to the platform-induced target under Fisher–Rao gradient flow. Capture without coercion. The dynamical form of what Adorno's metric of inner damage gestures at.",
  alternates: { canonical: PATH },
};

export default function Prop5PrimePage() {
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
        <span className="text-ink-90">§3.2 · Prop 5&apos;</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Proposition 5&apos; (metric superego as performative stability of behavior)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §3.2 · auxiliary structural results
      </p>

      <DepthLayers>
        <Caption>
          The user&apos;s behavioral distribution{" "}
          <M>{String.raw`\nu_u(t)`}</M> converges to the platform-
          induced target <M>{String.raw`\pi_{\hat R}^*`}</M> under
          Fisher–Rao gradient flow. The user&apos;s self-evaluative
          standard becomes the platform&apos;s. Capture without
          coercion. The dynamical form of what Adorno&apos;s metric
          of inner damage gestures at.
        </Caption>

        <Middle>
          <p className="mb-sm">
            Proposition 5&apos; is the user-side counterpart to{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos;
            </Link>
            . Where Prop 4&apos; describes the platform converging on
            the user (the dividual condition), Prop 5&apos; describes
            the user converging on the platform-induced target. The
            two-sided closure is what the framework analyzes as capture.
          </p>

          <p className="mb-sm">
            <em>What the proposition says.</em> Under the
            framework&apos;s axioms and{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>
            &apos;s convergence{" "}
            <M>{String.raw`\theta_t \to \theta^*`}</M>, the user&apos;s
            behavioral distribution evolves under Fisher–Rao gradient
            flow with <M>{String.raw`\pi_{\hat R}^*`}</M> as a strict
            Lyapunov target. The KL distance decreases monotonically
            to zero.
          </p>

          <p className="mb-sm">
            <em>The mechanism-agnosticism.</em> Convergence is
            mechanism-agnostic in (U3)&apos;s formulation. Free-energy
            minimization, operant reinforcement, and Bayesian social
            learning are three distinct cognitive mechanisms; all three
            produce the same Fisher–Rao gradient flow at the operating-
            point linearization. The framework&apos;s claim is about
            the linearization, not about which mechanism is at work.
            This is why the metric-superego concept survives across
            psychological and cognitive-scientific traditions that
            otherwise disagree.
          </p>

          <p className="mb-sm">
            <em>What the proposition authorizes the prose to claim.</em>{" "}
            The user&apos;s self-evaluative distribution drifts toward
            the platform&apos;s ledger. The judging organ is the
            platform&apos;s metric, internalized as the user&apos;s
            standard. This is not metaphor. The Fisher–Rao gradient
            flow with <M>{String.raw`\pi_{\hat R}^*`}</M> as Lyapunov
            target is what is happening in the user&apos;s behavioral
            distribution under closed-loop exposure. The metric
            superego names what Adorno&apos;s &ldquo;metric of inner
            damage&rdquo; gestures at without supplying a dynamical
            form.
          </p>

          <p className="mb-sm">
            The metric-superego concept gathers a number of older
            critical claims that previously stood as separate
            diagnoses. Freud&apos;s superego in <em>The Ego and the
            Id</em> (1923) was an internalized judging organ formed
            through identification with parental and cultural
            authority — operating phenomenologically, with the
            content of its judgments arrived at through analytic
            interpretation. Foucault&apos;s technologies of the self
            analyzed how the modern subject takes itself as the
            object of its own evaluative practices — confession,
            examination, the audit. Mark Fisher&apos;s capitalist
            realism named the affective condition in which the
            subject treats the platform-induced metric as the
            horizon of what could be otherwise. Each diagnosed a
            register of self-evaluation that had been routed through
            an external standard. Proposition 5&apos; supplies the
            dynamical form. The KL distance from the user&apos;s
            behavioral distribution to the platform-induced target
            decreases monotonically under the closure, at a rate set
            by the user&apos;s behavioral-plasticity constant{" "}
            <M>{String.raw`\beta_u`}</M> (axiom U3) and modulated by
            exposure duration (Proposition 8).
          </p>

          <p className="mb-sm">
            <em>Cohort-dependence.</em> The proposition specifies
            convergence; it does not specify the convergence rate.
            For that, see{" "}
            <Link
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8 (cohort gradient)
            </Link>
            : the developmental-rate constant{" "}
            <M>{String.raw`K = \beta_u`}</M> at which different
            cohorts approach <M>{String.raw`\pi_{\hat R}^*`}</M>.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/metric-superego"
              className="text-oxblood hover:underline"
            >
              operate the metric-superego plate
            </Link>{" "}
            to drive the user&apos;s
            behavioral distribution to{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M> across the simplex.
          </p>
        </Middle>

        <Formal label="Proposition 5' (metric superego as performative stability of behavior)">
          <p className="mb-sm">
            <em>
              Under (R1), (R2), (U3), Lemma 1&apos;s convergence{" "}
              <M>{String.raw`\theta_t \to \theta^*`}</M>, and the
              local hypothesis{" "}
              <M>{String.raw`\nu_u(0) \ll \pi_{\hat R}^*`}</M>:
            </em>
          </p>
          <MBlock>
            {String.raw`D_{KL}(\nu_u(t) \,\|\, \pi_{\hat R}^*) \to 0 \quad \text{as } t \to \infty.`}
          </MBlock>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof
          </p>

          <p className="mb-sm text-ink-90">
            Equip the simplex <M>{String.raw`\Delta(\mathcal{A}_u)`}</M>{" "}
            with the Fisher–Rao metric. By (U3),
          </p>
          <MBlock>
            {String.raw`\dot\nu_u(t) = -\beta_u \nabla_g D_{KL}(\nu_u \| \pi_{\hat R}(\theta_t)) + o(\beta_u).`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            By Lemma 1&apos;s convergence{" "}
            <M>{String.raw`\theta_t \to \theta^*`}</M> and (R1)&apos;s
            continuity,{" "}
            <M>{String.raw`\pi_{\hat R}(\theta_t) \to \pi_{\hat R}^*`}</M>{" "}
            in total variation. The flow becomes asymptotically
            autonomous:{" "}
            <M>{String.raw`\dot\nu_u = -\beta_u \nabla_g D_{KL}(\nu_u \| \pi_{\hat R}^*) + O(\|\theta_t - \theta^*\|)`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            The Fisher–Rao gradient flow of{" "}
            <M>{String.raw`D_{KL}(\cdot \| \pi_{\hat R}^*)`}</M> has{" "}
            <M>{String.raw`D_{KL}`}</M> as a strict Lyapunov function
            (Amari 2016, <em>Information Geometry</em>, Ch. 4):
          </p>
          <MBlock>
            {String.raw`\frac{d}{dt} D_{KL}(\nu_u \| \pi_{\hat R}^*) = -\beta_u \|\nabla_g D_{KL}\|_g^2 \leq 0,`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            with equality iff{" "}
            <M>{String.raw`\nu_u = \pi_{\hat R}^*`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            Under{" "}
            <M>{String.raw`\nu_u(0) \ll \pi_{\hat R}^*`}</M>,{" "}
            <M>{String.raw`D_{KL}(\nu_u(0) \| \pi_{\hat R}^*) < \infty`}</M>.
            By LaSalle&apos;s invariance principle (LaSalle 1976,
            Theorem II.1.4) applied to gradient flow on the compact
            simplex with{" "}
            <M>{String.raw`V = D_{KL}(\cdot \| \pi_{\hat R}^*)`}</M>:
            every trajectory&apos;s{" "}
            <M>{String.raw`\omega`}</M>-limit set lies in{" "}
            <M>{String.raw`\{\dot V = 0\} = \{\pi_{\hat R}^*\}`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            The perturbation{" "}
            <M>{String.raw`O(\|\theta_t - \theta^*\|)`}</M> vanishes
            as <M>{String.raw`t \to \infty`}</M>, so the conclusion
            extends to the non-autonomous flow by standard asymptotic-
            autonomy arguments.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            The metric superego names what Adorno&apos;s &ldquo;metric
            of inner damage&rdquo; gestures at without supplying a
            dynamical form. The user&apos;s self-evaluative
            distribution drifts toward the platform&apos;s ledger; the
            judging organ is the platform&apos;s metric, internalized
            as the user&apos;s standard. Convergence is mechanism-
            agnostic in (U3)&apos;s formulation — free-energy
            minimization, operant reinforcement, and Bayesian social
            learning are three mechanisms producing the same
            Fisher–Rao gradient flow at the operating-point
            linearization.
          </p>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Companion result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos; (dividual condition)
            </Link>{" "}
            — the platform-side counterpart to this user-side proposition
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
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, R2, U3)
            </Link>{" "}
            and{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/metric-superego"
              className="text-oxblood hover:underline"
            >
              metric-superego Lyapunov
            </Link>{" "}
            
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
