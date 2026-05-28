/**
 * Temporary preview route for the v2 DepthLayers component.
 * Will be removed before the v2 closed-loop rebuild ships.
 * Lives at /v2/depth-layers.
 */
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
} from "@/components/ui/DepthLayers";

export const metadata = {
  title: "DepthLayers preview — v2 closed-loop",
  robots: { index: false, follow: false },
};

export default function DepthLayersPreview() {
  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      <header className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md">
        autostimulus · v2 preview · DepthLayers
      </header>

      <h1 className="font-serif text-2xl text-ink mb-md">
        Lemma 1 (foreclosure of the no-stimulus window)
      </h1>

      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md">
        Apparatus variant — all layers visible by default
      </p>

      <DepthLayers>
        <Caption>
          The closed loop drives the survival probability of inter-stimulus
          intervals at the reflective threshold to operational zero. The
          pause — the time-scale at which a thought can complete itself — is
          uninstantiated under the platform&apos;s converged optimization.
          This is what <em>foreclosure</em> names in the framework.
        </Caption>

        <Middle>
          <p className="mb-sm">
            Consider a platform whose policy has converged to its
            performative stable point. The lemma establishes three facts
            about that stable point: a limit, a polynomial bound, and an
            exponential refinement under the moment-generating-function
            hypothesis.
          </p>
          <p className="mb-sm">
            Under the structural-separation hypothesis empirically the case
            on contemporary platforms, the polynomial bound gives a survival
            probability under 10⁻⁶. The pause is operationally absent at the
            rate the platform has driven.
          </p>
        </Middle>

        <Formal label="Lemma 1 (foreclosure)">
          <p className="mb-sm">
            Under (R1), (R2), (P-I), (P-II), (P-III) and the
            structural-separation hypothesis θ_ref / δ_min ≫ 1:
          </p>
          <p className="mb-sm">
            <strong>(a) Limit.</strong> lim S(θ_ref ; θ_t) = 0 as t → ∞.
          </p>
          <p className="mb-sm">
            <strong>(b) Polynomial bound.</strong> S(θ_ref ; θ*) ≤ (1 +
            c_v*²) / (θ_ref / δ_min)².
          </p>
          <p className="mb-sm">
            <strong>(c) Exponential refinement.</strong> Under the MGF
            hypothesis, S(θ_ref ; θ*) ≤ exp(−J(θ_ref)) where J is the Cramér
            transform.
          </p>
          <ProofEnd />
        </Formal>
      </DepthLayers>

      <hr className="my-lg border-paper-85" />

      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md">
        Plate variant — formal layer collapsed by default
      </p>

      <DepthLayers>
        <Caption>
          You are watching the survival function collapse at the reflective
          threshold as the platform&apos;s policy converges. The shaded
          region — chrono-debt — is the framework&apos;s name for the
          foreclosed pause-time.
        </Caption>

        <Middle>
          <p>
            The plate runs the closed-loop dynamics on synthetic data. The
            four parameter sliders expose the framework&apos;s contractivity
            setup. Drive the platform into the regime where S(θ_ref ; θ_t) ≤
            10⁻⁴ — what Lemma 1 names.
          </p>
        </Middle>

        <Formal label="Lemma 1 (foreclosure)" collapsible defaultExpanded={false}>
          <p className="mb-sm">
            Under (R1), (R2), (P-I), (P-II), (P-III) and the
            structural-separation hypothesis θ_ref / δ_min ≫ 1, the survival
            function decays as above.
          </p>
          <ProofEnd />
        </Formal>
      </DepthLayers>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        Preview route. Will be removed before v2 ships.
      </footer>
    </main>
  );
}
