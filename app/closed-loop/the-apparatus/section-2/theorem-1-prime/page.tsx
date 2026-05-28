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
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-2/theorem-1-prime";

export const metadata: Metadata = {
  title: "Theorem 1' (reclamation impossibility) — the apparatus — closed-loop",
  description:
    "The conditional autocovariance the framework names as interiority has unbounded sample complexity under closed-loop sampling. The framework's hardest claim.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
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
            <M>{String.raw`\sigma_u^4/32`}</M> for any sample size in
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
            feasible sample size. This is not an argument against
            resistance. It is an argument about what kinds of
            vindication resistance can hope for. The substantive
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
          <p className="mb-sm"><em>for an absolute constant <M>{String.raw`c > 0`}</M>.</em></p>

          <p className="mb-sm">
            <strong>(ii) Operational form via Lemma 1.</strong>{" "}
            <em>The sample size required to achieve MSE{" "}
            <M>{String.raw`\varepsilon^2 > 0`}</M> satisfies</em>
          </p>
          <MBlock>
            {String.raw`T_{\min}(\varepsilon) \geq \frac{c \cdot \sigma_u^4 \cdot (\theta_{\mathrm{ref}}/\delta_{\min})^2}{\varepsilon^2 \cdot (1 + (c_v^*)^2)}.`}
          </MBlock>
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
            {String.raw`\inf_{\hat I_T} \sup_{P \in \mathcal{P}} \mathbb{E}_P\!\left[(\hat I_T - I_P(\tau))^2\right] \geq \frac{\sigma_u^4}{32}.`}
          </MBlock>

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
            (iii). <em>Full proof text to render here in Phase 2 final pass.</em>
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
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
