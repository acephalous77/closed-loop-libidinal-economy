/**
 * First v2 apparatus page — §1 Lemma 1 (foreclosure).
 *
 * This is the first real /closed-loop/the-apparatus/* page, proving
 * the end-to-end flow:
 *   schematic part (θ_ref annotation) → click → this page
 *
 * Content follows autostimulus-planning/10_sample_apparatus_section.md
 * (the worked sample of an apparatus section page). Layout uses the
 * v2 DepthLayers component for the three-layer pedagogical kit.
 *
 * Source of the formal statement: publishing-pipeline/manuscripts/
 * closed-loop-complete/source/20_part_iv_formal_apparatus.md §1.
 *
 * Note: the /closed-loop/the-apparatus/ index page and section index
 * pages don't exist yet; this page is intentionally orphaned from the
 * apparatus index for now. The schematic links here directly.
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

const PATH = "/closed-loop/the-apparatus/section-1/lemma-1";

export const metadata: Metadata = {
  title: "Lemma 1 (foreclosure) — the apparatus — closed-loop",
  description:
    "The closed loop drives the survival function of inter-stimulus intervals at the reflective threshold to operational zero. The pause is uninstantiated. Foreclosure, formally.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false }, // v2 work-in-progress; un-noindex before launch
};

export default function Lemma1Page() {
  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      {/* Breadcrumb */}
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
        <span className="text-ink-90">§1 · Lemma 1</span>
      </nav>

      {/* Page title */}
      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Lemma 1 (foreclosure of the no-stimulus window)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §1 · the spine of foreclosure
      </p>

      {/* The pedagogical kit */}
      <DepthLayers>
        <Caption>
          The closed loop drives the survival probability of
          inter-stimulus intervals at the reflective threshold{" "}
          <M>{String.raw`\theta_{\mathrm{ref}}`}</M> to operational
          zero. The pause — the time-scale at which a thought can
          complete itself — is uninstantiated under the platform&apos;s
          converged optimization. This is what <em>foreclosure</em>{" "}
          names in the framework.
        </Caption>

        <Middle>
          <p className="mb-sm">
            Consider a platform whose policy{" "}
            <M>{String.raw`\pi_\theta`}</M> has converged to its
            performative stable point <M>{String.raw`\theta^*`}</M>.
            The lemma establishes three facts about that stable point.
          </p>

          <p className="mb-sm">
            <em>The limit.</em> As the platform&apos;s policy parameter
            approaches <M>{String.raw`\theta^*`}</M>, the probability
            of an inter-stimulus interval exceeding the reflective
            threshold approaches zero. The reader can watch this
            convergence happen at the{" "}
            <Link
              href="/closed-loop/the-dynamics/foreclosure-clock"
              className="text-oxblood hover:underline"
            >
              foreclosure-clock plate
            </Link>{" "}
            — the warm-ink survival curve decaying past the dashed{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}`}</M> line, the
            oxblood region (chrono-debt) growing beneath the baseline.
          </p>

          <p className="mb-sm">
            <em>The polynomial rate.</em> At the stable point, the
            survival probability is bounded by{" "}
            <M>{String.raw`(1 + c_v^{*2})/(\theta_{\mathrm{ref}}/\delta_{\min})^2`}</M>.
            Under the structural-separation hypothesis{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \geq 10^3`}</M>{" "}
            — empirically the case on contemporary platforms — this
            gives a survival probability under{" "}
            <M>{String.raw`10^{-6}`}</M>. The pause is operationally
            absent at the rate the platform has driven.
          </p>

          <p className="mb-sm">
            <em>The exponential refinement.</em> When the inter-arrival
            distribution at <M>{String.raw`\theta^*`}</M> has a finite
            moment-generating function on some interval, the survival
            probability decays exponentially in the Cramér transform{" "}
            <M>{String.raw`J(\theta_{\mathrm{ref}})`}</M>. The
            framework&apos;s substantive claims survive under either
            the polynomial or the exponential regime; the exponential
            bound is a strengthening, not a load-bearing alternative.
          </p>

          <p className="mb-sm">
            <em>What the lemma requires.</em> Regularity conditions
            (R1) and (R2). The platform-side axioms (P-I) (reward
            monotonicity in engagement), (P-II) (policy expressivity
            to any rate up to <M>{String.raw`1/\delta_{\min}`}</M>),
            and (P-III) (SGD convergence under Robbins–Monro step
            sizes). The structural-separation hypothesis{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \gg 1`}</M>.
          </p>

          <p className="mb-sm">
            <em>What the lemma authorizes the prose to claim.</em> The
            foreclosure of the pause is not a stipulation. It is a
            derived consequence of the architectural setup — the
            closure plus the reward&apos;s monotonicity plus the
            policy class&apos;s expressivity. A reader who accepts the
            axioms accepts the foreclosure.
          </p>
        </Middle>

        <Formal label="Lemma 1 (foreclosure of the no-stimulus window)">
          <p className="mb-sm">
            <em>
              Under (R1), (R2), (P-I), (P-II), (P-III) and the
              structural-separation hypothesis{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \gg 1`}</M>:
            </em>
          </p>

          <p className="mb-sm">
            <strong>(a) Limit.</strong>
          </p>
          <MBlock>
            {String.raw`\lim_{t \to \infty} S(\theta_{\mathrm{ref}}; \theta_t) = 0.`}
          </MBlock>

          <p className="mb-sm">
            <strong>(b) Polynomial bound at <M>{String.raw`\theta^*`}</M>.</strong>
          </p>
          <MBlock>
            {String.raw`S(\theta_{\mathrm{ref}}; \theta^*) \leq \frac{1 + (c_v^*)^2}{(\theta_{\mathrm{ref}}/\delta_{\min})^2}.`}
          </MBlock>

          <p className="mb-sm">
            <strong>(c) Exponential bound under MGF hypothesis.</strong>{" "}
            If the inter-arrival distribution at{" "}
            <M>{String.raw`\theta^*`}</M> has{" "}
            <M>{String.raw`M(s) := \mathbb{E}_{\mathcal{D}(\theta^*)}[e^{s\tau^{(k)}}]`}</M>{" "}
            finite on <M>{String.raw`[0, s_0)`}</M>, then
          </p>
          <MBlock>
            {String.raw`S(\theta_{\mathrm{ref}}; \theta^*) \leq \exp(-J(\theta_{\mathrm{ref}})),`}
          </MBlock>
          <p className="mb-sm">
            where{" "}
            <M>{String.raw`J(x) := \sup_{s \geq 0}[sx - \log M(s)]`}</M>{" "}
            is the Cramér transform of the log-MGF evaluated at{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}`}</M>.
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — three steps. Convergence to the performative stable
            point; rate saturation at <span className="font-serif italic"><M>{String.raw`\theta^*`}</M></span> via value-dominance;
            survival bound on the inter-arrival distribution.
          </p>

          <p className="mb-sm text-ink-70 text-sm">
            Full proof drawn directly from apparatus §1.2 (manuscript
            source). Three steps: SGD convergence to{" "}
            <M>{String.raw`\theta^*`}</M> via Banach fixed-point on{" "}
            <M>{String.raw`\Phi`}</M>&apos;s contractivity (R1); rate
            saturation at <M>{String.raw`\lambda_{\max} = 1/\delta_{\min}`}</M>{" "}
            via stochastic dominance and (P-I), (P-II); survival bound
            via Markov on the second moment with{" "}
            <M>{String.raw`\mathbb{E}[(\tau^{(k)})^2] \leq (1 + (c_v^*)^2)\delta_{\min}^2`}</M>.
            The exponential refinement follows from Markov on the
            exponential transform plus the Cramér transform&apos;s
            sup. <em>Full text to render here in Phase 2 final pass.</em>
          </p>

          <ProofEnd />
        </Formal>
      </DepthLayers>

      {/* Cross-references */}
      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/the-dynamics/foreclosure-clock"
              className="text-oxblood hover:underline"
            >
              foreclosure clock
            </Link>{" "}
            (operates this lemma)
          </li>
          <li>
            Signature instrument:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
              className="text-oxblood hover:underline"
            >
              chrono-debt spectrum
            </Link>{" "}
            (Definition 1.1)
          </li>
          <li>
            Dependent result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              Theorem 1&apos; (reclamation impossibility)
            </Link>
          </li>
          <li>
            Dependent result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8 (cohort gradient)
            </Link>
          </li>
          <li>
            Required axioms:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0.3 (R1, R2, P-I, P-II, P-III)
            </Link>
          </li>
        </ul>
        <p className="text-sm text-ink-50 italic mt-sm">
          Cross-link targets that do not yet exist will 404 until
          Phase 2 builds them. The schematic at{" "}
          <Link
            href="/v2/schematic"
            className="text-oxblood hover:underline"
          >
            /v2/schematic
          </Link>{" "}
          and{" "}
          <Link
            href="/closed-loop/the-dynamics/foreclosure-clock"
            className="text-oxblood hover:underline"
          >
            the foreclosure-clock plate
          </Link>{" "}
          (v1, will be rebuilt) are live.
        </p>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
