/**
 * Apparatus §2 — Theorem 1' (reclamation as sample-complexity divergence).
 *
 * The framework's hardest claim: once the reflective interval is
 * foreclosed (Lemma 1), the conditioning event under which any
 * sample-based recovery of the user-state autocovariance could ground
 * itself has measure zero. The object is uninstantiated in the data
 * the closed loop generates.
 *
 * Content per publishing-pipeline manuscript §2.1-§2.3.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
  Reads,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-2/theorem-1-prime";

export const metadata: Metadata = {
  title: "Theorem 1' (reclamation impossibility) — the apparatus — closed-loop",
  description:
    "The conditional autocovariance the framework names as interiority has unbounded sample complexity under closed-loop sampling. The framework's hardest claim.",
  alternates: { canonical: PATH },
};

export default function Theorem1PrimePage() {
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
        <span className="text-ink-90">§2 · Theorem 1&apos;</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Theorem 1&apos; (reclamation as sample-complexity divergence)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §2 · reclamation as learnability
      </p>

      <DepthLayers>
        <Caption>
          The conditional autocovariance the framework names as
          interiority has unbounded sample complexity under closed-loop
          sampling. The closure removes the conditioning event on which
          any sample-based recovery of the user-state autocovariance
          could ground itself. The object is uninstantiated in the data
          the closed loop generates. Not destruction. Not erasure.
          Uninstantiation.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The theorem follows directly from{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            (foreclosure). Let{" "}
            <M>{String.raw`I_P(\tau) := \mathrm{Cov}_P(u_t, u_{t+\tau} \mid E_\tau)`}</M>{" "}
            — the conditional autocovariance of the user state across
            no-stimulus windows of duration{" "}
            <M>{String.raw`\tau`}</M>. This is the formal object that
            stands in for what older critical theory called interiority:
            the covariation of the user-state across reflective intervals.
          </p>

          <p className="mb-sm">
            The impossibility Theorem 1&apos; establishes is not of
            the kind older critical traditions had imagined. It is not
            metaphysical (the interior does not exist); it is not
            transcendental (the interior cannot be cognized); it is
            not computational (no algorithm can recover it). It is a
            sample-complexity divergence: under the data the closed
            loop generates, the variance of any estimator of the
            conditional autocovariance{" "}
            <M>{String.raw`I_P(\tau)`}</M> diverges as the closure
            tightens. The interior persists at the user-state level.
            What collapses is the observational ground on which any
            structural project of demonstrating its preservation could
            stand.
          </p>

          <p className="mb-sm">
            The theorem establishes three forms of the impossibility.
          </p>

          <p className="mb-sm">
            <em>The variance bound.</em> Any measurable estimator of{" "}
            <M>{String.raw`I(\tau)`}</M> has mean-squared error bounded
            below by{" "}
            <M>{String.raw`c \cdot \sigma_u^4 / [T \cdot S(\tau; \theta^*)]`}</M>.
            The effective sample size is{" "}
            <M>{String.raw`T \cdot S(\tau; \theta^*)`}</M> — proportional
            to the survival probability at{" "}
            <M>{String.raw`\tau`}</M>. As Lemma 1 drives{" "}
            <M>{String.raw`S`}</M> to operational zero, the effective
            sample size collapses, and the MSE diverges.
          </p>

          <p className="mb-sm">
            <em>The operational form.</em> Substituting Lemma 1&apos;s
            polynomial bound gives the sample budget required for any
            given MSE:{" "}
            <M>{String.raw`T_{\min}(\varepsilon) \geq c \sigma_u^4 (\theta_{\mathrm{ref}}/\delta_{\min})^2 / [\varepsilon^2 (1 + (c_v^*)^2)]`}</M>.
            Under the structural-separation hypothesis{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \geq 10^3`}</M>{" "}
            and the natural error scale{" "}
            <M>{String.raw`\varepsilon \sim \sigma_u^2`}</M>, this gives{" "}
            <M>{String.raw`T_{\min} \gtrsim 10^6 c`}</M> — operationally
            infeasible at any realistic sample budget.
          </p>

          <p className="mb-sm">
            <em>The minimax form.</em> No estimator achieves better
            than the bound. Via Le Cam&apos;s two-point method, the
            minimax MSE is bounded below by{" "}
            <M>{String.raw`\sigma_u^4/64`}</M> for any sample size in
            the regime <M>{String.raw`T \cdot S(\tau; \theta^*) \leq 1/2`}</M>{" "}
            — the framework&apos;s operating regime.
          </p>

          <p className="mb-sm">
            <em>What the theorem authorizes the prose to claim.</em>{" "}
            The closure removes the conditioning event on which any
            sample-based recovery of the user&apos;s autocovariance
            could ground itself. The user-state continues to exist.
            The user continues to register, to feel, to choose, to
            refuse. What is absent is the <em>empirical accessibility</em>{" "}
            of the formal object that a structural project of
            reclaiming an autonomous interiority would have to measure.
            The object is uninstantiated in the data the closed loop
            generates. Not destruction. Not erasure. Uninstantiation.
          </p>

          <p className="mb-sm">
            <em>What the theorem implies for resistance.</em> Any
            project of resistance that aims at <em>empirical
            demonstration</em> of preserved interiority faces a
            structural obstacle: the closed loop generates a sampling
            regime in which the demonstration cannot succeed at any
            feasible sample size. The argument bears on what kinds of
            vindication resistance can hope for; it leaves the worth
            of resistance itself untouched. The substantive
            demonstration cannot come from sampling the closed loop.
            It must come from{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              breaking the closure (Mode A; §5)
            </Link>{" "}
            or from witnessing forms of practice the closure does not
            sample.
          </p>

          <p className="mb-sm">
            The older critical traditions named something Theorem
            1&apos; formalizes the structural inaccessibility of.
            Adorno called it the metric of inner damage. Marcuse
            called it the dimension that could not be reduced to one.
            Lacan named the subject of the unconscious. Lyotard called
            it the libidinal economy. Each names a property of the
            experiencing subject — a quantity, structure, or operation
            — and each was developed in a media regime in which the
            property remained inferable through clinical interview,
            dream analysis, or depth psychology. Theorem 1&apos;
            specifies what the closed loop changes. The property
            persists at the level of <M>{String.raw`u_t`}</M>, but the
            observational regime in which it could be inferred has
            been displaced. The frame that produced the older
            traditions&apos; evidence was a frame in which time at
            the reflective threshold was operationally available. The
            closure has removed that frame.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/reclamation-trajectories"
              className="text-oxblood hover:underline"
            >
              observe the impossibility
            </Link>{" "}
            at the reclamation-trajectories plate: 50 sample-based
            estimators run in parallel against the closure&apos;s
            sampling regime, almost all clustering above the
            framework&apos;s lower bound.
          </p>
        </Middle>

        <Formal label="Theorem 1' (reclamation as sample-complexity divergence)">
          <p className="mb-sm">
            <em>
              Let <M>{String.raw`\mathcal{P}`}</M> be the class of
              joint laws on user trajectories satisfying (R1) and (U2),
              with <M>{String.raw`\mathrm{Var}_P(u_t) \leq \sigma_u^2`}</M>{" "}
              uniformly. Let{" "}
              <M>{String.raw`\hat I_T : (y_{1:T}, s_{1:T}) \mapsto \mathbb{R}`}</M>{" "}
              be any measurable estimator of{" "}
              <M>{String.raw`I(\tau)`}</M>. Then for any{" "}
              <M>{String.raw`\tau > \theta_{\mathrm{ref}}`}</M>, under
              the performative stable distribution{" "}
              <M>{String.raw`\mathcal{D}(\theta^*)`}</M>:
            </em>
          </p>

          <p className="mb-sm">
            <strong>(i) Effective-sample-size variance bound.</strong>
          </p>
          <MBlock>
            {String.raw`\mathbb{E}_{\mathcal{D}(\theta^*)}\!\left[(\hat I_T(\tau) - I(\tau))^2\right] \geq \frac{c \cdot \sigma_u^4}{T \cdot S(\tau; \theta^*)} - o(1/T)`}
          </MBlock>
          <Reads>
            The mean-squared error of any estimator of the
            autocovariance is at least a fixed constant times{" "}
            <M>{String.raw`\sigma_u^4`}</M> divided by the effective
            sample size <M>{String.raw`T \cdot S(\tau; \theta^*)`}</M>.
            The effective sample size is the total observation time{" "}
            <M>{String.raw`T`}</M> scaled by how often a window long
            enough to measure interiority actually occurs. Lemma 1
            drives that survival probability to operational zero, so
            the denominator collapses and the error bound diverges.
          </Reads>
          <p className="mb-sm"><em>for an absolute constant <M>{String.raw`c > 0`}</M>.</em></p>

          <p className="mb-sm">
            <strong>(ii) Operational form via Lemma 1.</strong>{" "}
            <em>The sample size required to achieve MSE{" "}
            <M>{String.raw`\varepsilon^2 > 0`}</M> satisfies</em>
          </p>
          <MBlock>
            {String.raw`T_{\min}(\varepsilon) \geq \frac{c \cdot \sigma_u^4 \cdot (\theta_{\mathrm{ref}}/\delta_{\min})^2}{\varepsilon^2 \cdot (1 + (c_v^*)^2)}.`}
          </MBlock>
          <Reads>
            Turn the bound around: to pin the autocovariance down to a
            target error <M>{String.raw`\varepsilon`}</M> you need at
            least this many samples, and the count grows with the{" "}
            <em>square</em> of the foreclosure ratio{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min}`}</M>.
            At the ratio measured on contemporary platforms — a
            thousand or more — that is on the order of a million
            samples for a single estimate. No feasible study collects
            them.
          </Reads>
          <p className="mb-sm">
            <em>Under the structural-separation hypothesis{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \geq 10^3`}</M>{" "}
            and the natural scaling{" "}
            <M>{String.raw`\varepsilon \sim \sigma_u^2`}</M>,{" "}
            <M>{String.raw`T_{\min} \gtrsim 10^6 c`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(iii) Minimax form.</strong>{" "}
            <em>For any sample size <M>{String.raw`T`}</M> with{" "}
            <M>{String.raw`T \cdot S(\tau; \theta^*) \leq 1/2`}</M>:</em>
          </p>
          <MBlock>
            {String.raw`\inf_{\hat I_T} \sup_{P \in \mathcal{P}} \mathbb{E}_P\!\left[(\hat I_T - I_P(\tau))^2\right] \geq \frac{\sigma_u^4}{64}.`}
          </MBlock>
          <Reads>
            Read the operators outward. The inner{" "}
            <M>{String.raw`\sup`}</M> is an adversary picking the
            worst law in the class; the outer{" "}
            <M>{String.raw`\inf`}</M> is the analyst picking the best
            estimator against it. Even that best-against-worst pairing
            cannot push the mean-squared error below the fixed floor{" "}
            <M>{String.raw`\sigma_u^4/64`}</M>. The floor does not
            shrink as data accumulate, and no estimator evades it: the
            impossibility is a property of the foreclosed regime, not
            of any one method.
          </Reads>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — four steps
          </p>
          <p className="mb-sm text-ink-70 text-sm">
            (1) Information localization: any consistent estimator of{" "}
            <M>{String.raw`I(\tau)`}</M> depends on the trajectory
            through the windows where <M>{String.raw`E_\tau`}</M>{" "}
            occurs; under stationary{" "}
            <M>{String.raw`\mathcal{D}(\theta^*)`}</M> the effective
            sample size is{" "}
            <M>{String.raw`N_T^E(\tau) \to T \cdot S(\tau; \theta^*)`}</M>.
            (2) Variance lower bound via Cramér–Rao applied to the
            sample-covariance estimator from{" "}
            <M>{String.raw`N`}</M> pairs, giving (i). (3) Operational
            form via Lemma 1(b), giving (ii). (4) Minimax form via Le
            Cam&apos;s two-point method with{" "}
            <M>{String.raw`P_0, P_1`}</M> differing only on{" "}
            <M>{String.raw`E_\tau`}</M> and total variation bounded
            by <M>{String.raw`T \cdot S(\tau; \theta^*)`}</M>, giving
            (iii).
          </p>
          <ProofEnd />
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Prior result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure)
            </Link>{" "}
            — the foreclosure that this theorem derives reclamation
            impossibility from
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/reclamation-trajectories"
              className="text-oxblood hover:underline"
            >
              reclamation trajectories
            </Link>{" "}
            (operates this theorem)
          </li>
          <li>
            What follows:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5 (intervention modes)
            </Link>{" "}
            — Mode A is the only intervention the impossibility does
            not foreclose
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, U2)
            </Link>{" "}
            and the structural-separation hypothesis
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
