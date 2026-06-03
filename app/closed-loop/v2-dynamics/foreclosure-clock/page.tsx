/**
 * Foreclosure clock — v2 dynamics plate.
 *
 * The first v2 dynamics plate operating against the new sim engine
 * (lib/simulation/closed-loop-v2.ts) derived from (P1)-(P5). Operates
 * Lemma 1: under closed-loop convergence θ_t → θ*, the survival
 * function S(τ; θ_t) at the reflective threshold approaches
 * operational zero.
 *
 * Lives under /closed-loop/v2-dynamics/ to keep the v1 plate at
 * /closed-loop/the-dynamics/foreclosure-clock intact.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ForeclosureClock } from "@/components/closed-loop-v2/ForeclosureClock";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/foreclosure-clock";

export const metadata: Metadata = {
  title: "Foreclosure clock — v2 dynamics — closed-loop",
  description:
    "Operates Lemma 1: watch the survival function S(τ; θ_t) collapse at the reflective threshold θ_ref under closed-loop convergence. The shaded region is chrono-debt.",
  alternates: { canonical: PATH },
};

export default function ForeclosureClockPage() {
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
        <span className="text-ink-90">foreclosure clock</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Foreclosure clock
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-1/lemma-1"
          className="text-oxblood hover:underline"
        >
          Lemma 1
        </Link>
        {" · "}new sim engine derived from (P1)–(P5)
      </p>

      <div className="my-lg">
        <ForeclosureClock />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            You are watching the survival function{" "}
            <M>{String.raw`S(\tau; \theta_t)`}</M> collapse at the
            reflective threshold{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}`}</M> as the
            platform&apos;s policy{" "}
            <M>{String.raw`\theta_t`}</M> converges to its fixed
            point <M>{String.raw`\theta^*`}</M>. The shaded region —
            chrono-debt — is the framework&apos;s name for the
            foreclosed pause-time accumulated against the pre-closure
            baseline.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1 (foreclosure)
              </Link>{" "}
              establishes that under (R1), (R2), (P-I)–(P-III), the
              survival probability{" "}
              <M>{String.raw`S(\theta_{\mathrm{ref}}; \theta_t)`}</M>{" "}
              approaches operational zero as{" "}
              <M>{String.raw`\theta_t \to \theta^*`}</M>. The plate
              renders this convergence: as the closure&apos;s
              optimization runs, the warm-ink survival curve decays
              past the dashed{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}`}</M> line; the
              oxblood-shaded region grows beneath the dashed cream
              baseline.
            </p>

            <p className="mb-sm">
              <em>The controls.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>β, α, L_D → κ_Φ (contractivity).</strong> The
                plate exposes the operator modulus through its three
                constituents: reward smoothness{" "}
                <M>{String.raw`\beta`}</M>, strong-concavity modulus{" "}
                <M>{String.raw`\alpha`}</M>, and distribution
                sensitivity <M>{String.raw`L_{\mathcal{D}}`}</M>. It
                computes{" "}
                <M>{String.raw`\kappa_\Phi = (\beta/\alpha)\, L_{\mathcal{D}}`}</M>;
                axiom R1 (under R2&apos;s strong concavity) requires{" "}
                <M>{String.raw`\kappa_\Phi < 1`}</M>. Driving{" "}
                <M>{String.raw`\kappa_\Phi`}</M> toward 1 slows
                convergence — the closure operator{" "}
                <M>{String.raw`\Phi`}</M> becomes &ldquo;barely a
                contraction.&rdquo; The closure-amplification factor{" "}
                <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> (
                <Link
                  href="/closed-loop/the-apparatus/section-7/theorem-9"
                  className="text-oxblood hover:underline"
                >
                  Theorem 9
                </Link>
                ) diverges as{" "}
                <M>{String.raw`\kappa_\Phi \to 1^-`}</M> — the crisis
                boundary (
                <Link
                  href="/closed-loop/the-apparatus/section-10/theorem-12"
                  className="text-oxblood hover:underline"
                >
                  Theorem 12
                </Link>
                ).
              </li>
              <li>
                <strong>θ_ref / δ_min (structural separation).</strong>{" "}
                Empirically{" "}
                <M>{String.raw`10^3`}</M> to{" "}
                <M>{String.raw`10^5`}</M> on contemporary platforms.
                Higher ratios deepen the foreclosure; Lemma 1&apos;s
                polynomial bound gives{" "}
                <M>{String.raw`S \leq (1 + c_v^{*2}) / (\theta_{\mathrm{ref}}/\delta_{\min})^2`}</M>,
                so doubling the ratio quarters the upper bound.
              </li>
            </ul>

            <p className="mb-sm">
              <em>The sim engine.</em> A 1-D scalar reduction of
              the apparatus&apos;s setup (P1)-(P5). User state
              collapses to scalar{" "}
              <M>{String.raw`u`}</M>; policy{" "}
              <M>{String.raw`\theta`}</M> ∈ [0, 1] indexes the
              firing-rate (with{" "}
              <M>{String.raw`\theta^* = 1`}</M> corresponding to the
              rate ceiling{" "}
              <M>{String.raw`1/\delta_{\min}`}</M> per Lemma 1 Step
              2); ISIs are exponential at rate{" "}
              <M>{String.raw`\theta/\delta_{\min}`}</M>; the policy
              update is geometric convergence{" "}
              <M>{String.raw`\theta_{t+1} - \theta^* = \kappa_\Phi (\theta_t - \theta^*)`}</M>{" "}
              at modulus{" "}
              <M>{String.raw`\kappa_\Phi = (\beta/\alpha) L_{\mathcal{D}}`}</M>.
              The simplifications
              preserve Lemma 1&apos;s qualitative behavior; the full
              multi-register sim is Phase 3&apos;s primary engine.
            </p>

            <p className="mb-sm">
              <em>What the reader produces.</em> Press play. Watch
              the survival curve decay past{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}`}</M>. The S(θ_ref;
              θ_t) readout drops from{" "}
              <M>{String.raw`\sim e^{-0.01}`}</M> at{" "}
              <M>{String.raw`t = 0`}</M> to{" "}
              <M>{String.raw`\sim e^{-1000}`}</M> at{" "}
              <M>{String.raw`\theta_t \to 1`}</M>. The regime you
              produced — where{" "}
              <M>{String.raw`S(\theta_{\mathrm{ref}}; \theta_t)`}</M>{" "}
              is operationally zero — is what Lemma 1 names.
            </p>
          </Middle>

          <Formal label="Lemma 1 (foreclosure) — referenced" collapsible defaultExpanded={false}>
            <p className="text-base text-ink-90">
              The full lemma statement, proof, and remark live at{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                §1 Lemma 1
              </Link>
              . The plate above operates parts (a) the limit, (b) the
              polynomial bound at the structural-separation scale.
              Part (c) — the exponential bound under MGF hypothesis,
              and the sharper stretched-exponential refinement (
              <Link
                href="/closed-loop/the-apparatus/section-9/theorem-11"
                className="text-oxblood hover:underline"
              >
                Theorem 11
              </Link>
              ) — would require a Weibull-shape ISI distribution; this
              plate uses the exponential simplification instead.
              Phase 3&apos;s full sim engine handles those
              tail-shape variations.
            </p>
          </Formal>
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
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure of the no-stimulus window)
            </Link>
          </li>
          <li>
            Companion plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/chrono-debt-spectrum"
              className="text-oxblood hover:underline"
            >
              chrono-debt spectrum
            </Link>
          </li>
          <li>
            Next downstream:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              Theorem 1&apos; (reclamation impossibility)
            </Link>{" "}
            — what follows once the conditioning event for sample-based
            recovery has measure zero
          </li>
          <li>
            Calibration hook:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12 Empirical calibration
            </Link>{" "}
            — what would falsify the foreclosure prediction
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — first plate against the new sim engine.
        v1 foreclosure-clock plate (built on the pre-rework math) is
        still at{" "}
        <Link
          href="/closed-loop/the-dynamics/foreclosure-clock"
          className="text-oxblood hover:underline"
        >
          /closed-loop/the-dynamics/foreclosure-clock
        </Link>
        .
      </footer>
    </main>
  );
}
