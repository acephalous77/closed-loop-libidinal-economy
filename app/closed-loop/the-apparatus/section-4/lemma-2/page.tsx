/**
 * Apparatus §4 — Lemma 2 (parametric continuity of regularized stable points).
 *
 * The technical scaffold Mode A (§5.1) rests on. Without Lemma 2's
 * IFT-continuity of the regularized stable point, Proposition 1''s
 * IVT argument for finding a β that achieves any target P(β) doesn't
 * go through. Lemma 2 is small but load-bearing.
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

const PATH = "/closed-loop/the-apparatus/section-4/lemma-2";

export const metadata: Metadata = {
  title: "Lemma 2 (parametric continuity) — the apparatus — closed-loop",
  description:
    "The technical scaffold for Mode A. Parametric continuity of the regularized performative stable point under the IFT, supplying the continuous path Proposition 1' applies the IVT to.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function Lemma2Page() {
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
        <span className="text-ink-90">§4 · Lemma 2</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Lemma 2 (parametric continuity of regularized stable points)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §4 · the technical scaffold for Mode A
      </p>

      <DepthLayers>
        <Caption>
          The technical scaffold Mode A (§5.1) rests on. Under the
          framework&apos;s regularity strengthened to global Hessian
          non-singularity along the parametric path, the regularized
          performative stable point{" "}
          <M>{String.raw`\theta_\beta^{*\prime}`}</M> is{" "}
          <M>{String.raw`C^1`}</M> in the regularization parameter{" "}
          <M>{String.raw`\beta`}</M>, monotone in the regularizer{" "}
          <M>{String.raw`B`}</M>, and supplies a continuous path from
          the unregularized stable point through the regularized
          regime.
        </Caption>

        <Middle>
          <p className="mb-sm">
            Mode A regularizes the platform&apos;s reward functional:{" "}
            <M>{String.raw`F'(\theta; \beta) = F(\theta) + \beta B(\theta)`}</M>,
            where <M>{String.raw`B(\theta)`}</M> is the expected sum
            of a bonus function{" "}
            <M>{String.raw`b(\tau)`}</M> over inter-stimulus intervals
            — the regularizer pays for the pause exceeding the
            reflective threshold.{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              Proposition 1&apos;
            </Link>{" "}
            wants to apply the intermediate value theorem to the
            survival probability{" "}
            <M>{String.raw`P(\beta)`}</M> on the parametric path
            indexed by <M>{String.raw`\beta`}</M>. For the IVT to
            apply, the path needs to be continuous. Lemma 2 supplies
            the continuity.
          </p>

          <p className="mb-sm">
            <em>What the lemma says.</em> Three things, in increasing
            substantive content. First, the regularized stable point{" "}
            <M>{String.raw`\theta_\beta^{*\prime}`}</M> is well-defined
            and varies smoothly with{" "}
            <M>{String.raw`\beta`}</M>. Second, the regularizer&apos;s
            value at the stable point grows monotonically in{" "}
            <M>{String.raw`\beta`}</M> (and the original reward
            decreases). Third, there exists a {`smooth path from θ* at β=0`}{" "}
            through the regularized regime, with{" "}
            <M>{String.raw`B`}</M> strictly increasing on a
            right-neighborhood of{" "}
            <M>{String.raw`\beta = 0`}</M> and{" "}
            <M>{String.raw`\sup_\beta B(\tilde\theta(\beta)) > 0`}</M>.
          </p>

          <p className="mb-sm">
            <em>Why the strengthened (R2).</em> The framework&apos;s
            standing (R2) gives local Hessian non-singularity at the
            stable point. The lemma needs global non-singularity along
            the path of regularized stable points — a stronger
            condition. Under generic-bifurcation regularity, this can
            be replaced with Whitney-stratification machinery; the
            substantive results survive.
          </p>

          <p className="mb-sm">
            <em>What the lemma authorizes the prose to claim.</em>{" "}
            Mode A is not an isolated point at some specific{" "}
            <M>{String.raw`\beta`}</M>. It is a smooth curve through
            parameter space along which the regularizer&apos;s payoff
            grows continuously. Any target survival probability in
            the achievable range corresponds to some{" "}
            <M>{String.raw`\beta_\varepsilon`}</M> on the curve. The
            political claim &ldquo;at sufficient regulation, the pause
            re-instantiates&rdquo; depends on Lemma 2&apos;s smoothness.
          </p>

          <p className="mb-sm">
            The policy-design corollary follows. A regulator
            considering a Mode A intervention is not choosing between
            &ldquo;regulate&rdquo; and &ldquo;don&apos;t
            regulate&rdquo; but choosing a point on a continuous
            curve indexed by <M>{String.raw`\beta`}</M>. Larger{" "}
            <M>{String.raw`\beta`}</M> yields more pause-instantiation
            and less platform-side reward; the curve is monotone in
            both, and smooth. The policy question is therefore
            quantitative: which target survival probability{" "}
            <M>{String.raw`\varepsilon`}</M> at{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}`}</M> is socially
            acceptable, and what <M>{String.raw`\beta`}</M> achieves
            it? Lemma 2 guarantees that the question has an answer in
            the framework&apos;s feasibility envelope — any{" "}
            <M>{String.raw`\varepsilon`}</M> in that envelope
            corresponds to some <M>{String.raw`\beta_\varepsilon`}</M>{" "}
            on the curve.
          </p>
        </Middle>

        <Formal label="Lemma 2 (parametric continuity of regularized stable points)">
          <p className="mb-sm">
            <em>
              Define{" "}
              <M>{String.raw`F(\theta) := \mathbb{E}_{\mathcal{D}(\theta)}[\hat R(\theta)]`}</M>{" "}
              and{" "}
              <M>{String.raw`B(\theta) := \mathbb{E}_{\mathcal{D}(\theta)}[\sum_k b(\tau^{(k)})]`}</M>,
              where{" "}
              <M>{String.raw`b : [0, \infty) \to [0, b_{\max}]`}</M>{" "}
              is bounded lower-semicontinuous with{" "}
              <M>{String.raw`b(\tau) > 0`}</M> for{" "}
              <M>{String.raw`\tau > \tau^*`}</M> and{" "}
              <M>{String.raw`b(\tau) = 0`}</M> for{" "}
              <M>{String.raw`\tau \leq \tau^*`}</M>. Define{" "}
              <M>{String.raw`F'(\theta; \beta) := F(\theta) + \beta B(\theta)`}</M>{" "}
              for <M>{String.raw`\beta \geq 0`}</M>. Under (R1), (R2)
              strengthened to global non-singularity of{" "}
              <M>{String.raw`H_F + \beta H_B`}</M> along the relevant
              path, and (P-II):
            </em>
          </p>

          <p className="mb-sm">
            <strong>(i)</strong>{" "}
            <M>{String.raw`\theta_\beta^{*\prime} := \arg\max_\theta F'(\theta; \beta)`}</M>{" "}
            <em>is locally well-defined for each{" "}
            <M>{String.raw`\beta \geq 0`}</M>;{" "}
            <M>{String.raw`\beta \mapsto \theta_\beta^{*\prime}`}</M>{" "}
            is <M>{String.raw`C^1`}</M> on{" "}
            <M>{String.raw`[0, \infty)`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(ii) Monotonicity.</strong>{" "}
            <M>{String.raw`B(\theta_\beta^{*\prime})`}</M>{" "}
            <em>is non-decreasing in{" "}
            <M>{String.raw`\beta`}</M>;{" "}
            <M>{String.raw`F(\theta_\beta^{*\prime})`}</M> is
            non-increasing in <M>{String.raw`\beta`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(iii) Path existence and strict growth.</strong>{" "}
            <em>There exists a <M>{String.raw`C^1`}</M> path{" "}
            <M>{String.raw`\tilde\theta : [0, \infty) \to \Theta`}</M>{" "}
            with{" "}
            <M>{String.raw`\tilde\theta(0) = \theta^*`}</M> and{" "}
            <M>{String.raw`B(\tilde\theta(\beta))`}</M> strictly
            increasing on a right-neighborhood of{" "}
            <M>{String.raw`\beta = 0`}</M>, with{" "}
            <M>{String.raw`\sup_\beta B(\tilde\theta(\beta)) > 0`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — three parts
          </p>

          <p className="mb-sm text-ink-90">
            <strong>(i) Continuity via IFT.</strong> The first-order
            condition at{" "}
            <M>{String.raw`\theta_\beta^{*\prime}`}</M> is{" "}
            <M>{String.raw`G(\theta, \beta) := \nabla F + \beta \nabla B = 0`}</M>.
            The Jacobian in{" "}
            <M>{String.raw`\theta`}</M> is{" "}
            <M>{String.raw`H_F + \beta H_B`}</M>, non-singular by the
            strengthened (R2). The implicit function theorem (Rudin
            1976, Theorem 9.28) gives{" "}
            <M>{String.raw`\beta \mapsto \theta_\beta^{*\prime}`}</M>{" "}
            <M>{String.raw`C^1`}</M> on{" "}
            <M>{String.raw`[0, \infty)`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            <strong>(ii) Monotonicity via envelope theorem.</strong>{" "}
            Differentiating the FOC:{" "}
            <M>{String.raw`d\theta_\beta^{*\prime}/d\beta = -(H_F + \beta H_B)^{-1} \nabla B`}</M>.
            At a local maximum,{" "}
            <M>{String.raw`H_F + \beta H_B`}</M> is negative definite,
            so{" "}
            <M>{String.raw`-(H_F + \beta H_B)^{-1}`}</M> is positive
            definite, and
          </p>
          <MBlock>
            {String.raw`\frac{dB(\theta_\beta^{*\prime})}{d\beta} = -\nabla B^\top (H_F + \beta H_B)^{-1} \nabla B \geq 0,`}
          </MBlock>
          <p className="mb-sm text-ink-90">
            strict when{" "}
            <M>{String.raw`\nabla B \neq 0`}</M>. By the envelope
            theorem applied to{" "}
            <M>{String.raw`V(\beta) := F'(\theta_\beta^{*\prime}; \beta)`}</M>:{" "}
            <M>{String.raw`V'(\beta) = B(\theta_\beta^{*\prime}) \geq 0`}</M>.
            Differentiating{" "}
            <M>{String.raw`V = F + \beta B`}</M> directly:{" "}
            <M>{String.raw`dF/d\beta = V'(\beta) - B - \beta\, dB/d\beta = -\beta\, dB/d\beta \leq 0`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            <strong>(iii) Path existence and strict growth.</strong>{" "}
            At <M>{String.raw`\beta = 0`}</M>,{" "}
            <M>{String.raw`\tilde\theta(0) = \theta^*`}</M>. By (i),
            the path extends smoothly on{" "}
            <M>{String.raw`[0, \infty)`}</M>. By Lemma 1 Step 2,{" "}
            <M>{String.raw`\bar\lambda(\theta^*) = \lambda_{\max}`}</M>,
            so the inter-arrival distribution at{" "}
            <M>{String.raw`\theta^*`}</M> concentrates near{" "}
            <M>{String.raw`\delta_{\min} < \tau^*`}</M>, giving{" "}
            <M>{String.raw`B(\theta^*) \approx 0`}</M> (operationally).
            By (P-II), the{" "}
            <M>{String.raw`B`}</M>-maximizer (firing at{" "}
            <M>{String.raw`\tau^*`}</M>-intervals) is in{" "}
            <M>{String.raw`\Pi`}</M> and has{" "}
            <M>{String.raw`B > 0`}</M>. At{" "}
            <M>{String.raw`\theta^*`}</M>,{" "}
            <M>{String.raw`\nabla B \neq 0`}</M>. By continuity,{" "}
            <M>{String.raw`\nabla B(\tilde\theta(\beta)) \neq 0`}</M>{" "}
            on a right-neighborhood of{" "}
            <M>{String.raw`\beta = 0`}</M>. Strict growth on this
            neighborhood follows from (ii);{" "}
            <M>{String.raw`\sup_\beta B(\tilde\theta(\beta)) > B(\theta^*) = 0`}</M>.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            The lemma supplies the technical scaffolding for Mode A
            (§5.1): a parametric path from the unregularized stable
            point through the regularized regime. The strengthened
            (R2) is the cleanest hypothesis for global IFT
            continuation; under generic-bifurcation regularity it can
            be replaced with Whitney-stratification machinery, but
            the substantive results survive.
          </p>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Consumer:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5 Mode A (Proposition 1&apos;)
            </Link>{" "}
            — the lemma&apos;s payoff in the framework&apos;s central
            political claim
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — Step 2&apos;s rate saturation gives{" "}
            <M>{String.raw`B(\theta^*) \approx 0`}</M>
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, R2, P-II)
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
