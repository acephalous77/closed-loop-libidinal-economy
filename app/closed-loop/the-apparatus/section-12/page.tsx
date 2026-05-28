/**
 * Apparatus §12 — Empirical calibration.
 *
 * Per-result calibration hooks: predicted quantity + measurement +
 * confirmation + falsification for each of the framework's 11
 * formal results. Plus three priority empirical studies and the
 * reflexive measurement problem.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-12";

export const metadata: Metadata = {
  title: "§12 Empirical calibration — the apparatus — closed-loop",
  description:
    "Per-result calibration hooks. What each formal result predicts, how it would be measured, what would confirm or refute it. Three priority studies. The reflexive measurement problem.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

interface Hook {
  result: string;
  href: string;
  predicted: string;
  measurement: string;
  confirmation: string;
  falsification: string;
}

const HOOKS: Hook[] = [
  {
    result: "Lemma 1 — Foreclosure",
    href: "/closed-loop/the-apparatus/section-1/lemma-1",
    predicted: "Survival function S(τ; θ*) of inter-stimulus intervals.",
    measurement:
      "Engagement-trace dataset → empirical CCDF → evaluate at reflective threshold θ_ref (30s to a few minutes per Kahneman 2011; Killingsworth & Gilbert 2010).",
    confirmation: "Ŝ(θ_ref) ≤ 10⁻³ on mature platforms.",
    falsification:
      "Ŝ(θ_ref) > 10⁻² — structural-separation hypothesis mis-calibrated or platforms have not converged.",
  },
  {
    result: "Theorem 1' — Reclamation as learnability lower bound",
    href: "/closed-loop/the-apparatus/section-2/theorem-1-prime",
    predicted: "Variance of any estimator Î_T(τ).",
    measurement:
      "User-state proxies (biometric + behavioral); estimate autocovariance across no-stimulus windows; track estimator variance vs. sample size.",
    confirmation: "Var(Î_T) · T → ∞ as T grows.",
    falsification: "Var(Î_T) · T stabilizing — recovery is feasible.",
  },
  {
    result: "Proposition 4' — Dividual",
    href: "/closed-loop/the-apparatus/section-3/prop-4-prime",
    predicted: "Filtering posterior entropy H(u_t | y_{1:t}) → 0.",
    measurement:
      "Shadow inference — external model on engagement traces predicting user-state proxies. Track predictive entropy vs. trace length.",
    confirmation:
      "Entropy contracts at parametric rate ε_t ∼ √(d log t / t).",
    falsification: "Entropy plateaus above noise floor.",
  },
  {
    result: "Proposition 5' — Metric superego",
    href: "/closed-loop/the-apparatus/section-3/prop-5-prime",
    predicted: "D_KL(ν_u(t) || π_R*) → 0.",
    measurement:
      "Periodic survey/behavior-based measurement of user self-evaluative distribution; independent characterization of platform reward target; compute KL across time.",
    confirmation: "Decreasing KL across user tenure.",
    falsification: "KL remains positive and bounded away from zero.",
  },
  {
    result: "Proposition 6 — Kuramoto entrainment",
    href: "/closed-loop/the-apparatus/section-3/prop-6",
    predicted: "Phase coherence between body and platform rhythms.",
    measurement:
      "Body-rhythm data (HRV, circadian markers, sleep timing) + platform delivery timestamps; phase-coherence statistics.",
    confirmation:
      "Sustained phase coherence in heavy platform users; coherence drops in low-use cohorts.",
    falsification: "No phase coherence even in heavy users.",
  },
  {
    result: "Proposition 7' — Libidinal routing",
    href: "/closed-loop/the-apparatus/section-3/prop-7-prime",
    predicted: "Cross-register mutual information I_{Π_t}(u^i; u^j) > 0.",
    measurement:
      "Tag engagement events by register; compute empirical MI between cross-register engagement profiles; compare to lower-platform-use baseline.",
    confirmation: "Strong cross-register MI in platform-active populations.",
    falsification: "No cross-register coupling even in heavy users.",
  },
  {
    result: "Proposition 8 — Cohort gradient",
    href: "/closed-loop/the-apparatus/section-6/prop-8",
    predicted:
      "D_KL(ν_u^init(τ_exp) || π_R*) exponentially decreasing in τ_exp.",
    measurement:
      "Cohort-stratified attentional autocorrelation, political-engagement timescales, self-evaluative distributions; fit exponential decay; estimate K.",
    confirmation: "Monotone exponentially-decreasing relationship.",
    falsification: "No cohort effect, or non-exponential form.",
  },
  {
    result: "Theorem 9 — Causal sensitivity",
    href: "/closed-loop/the-apparatus/section-7/theorem-9",
    predicted:
      "∂θ*/∂X for each mechanism; closure amplification (1 − L_R L_D)^(−1).",
    measurement:
      "Natural-experiment data from platform policy changes, regulatory interventions, algorithm rebuilds; document policy-parameter shift; estimate sensitivities.",
    confirmation:
      "Mode A O(1), individual Mode B/C O(1/N), regulatory Mode B/C O(1).",
    falsification:
      "Sensitivities deviate substantially from predicted scaling.",
  },
  {
    result: "Theorem 10 — Mean-field + cascades",
    href: "/closed-loop/the-apparatus/section-8",
    predicted:
      "Branching ratio ρ(W) ρ(α) ∫κ; percolation threshold ρ_c.",
    measurement:
      "Estimate W from recommendation/social graph; estimate α from cross-register Hawkes fitting; compute branching ratio.",
    confirmation:
      "Mature platforms above percolation threshold; cascades propagate platform-wide.",
    falsification:
      "High-density platforms failing to cascade or low-density platforms cascading.",
  },
  {
    result: "Theorem 11 — Stretched-exponential foreclosure",
    href: "/closed-loop/the-apparatus/section-9/theorem-11",
    predicted: "Sub-exponential index β̂ in Class S_β classification.",
    measurement:
      "Empirical CCDF → log-log Weibull tail fit → β̂.",
    confirmation:
      "β̂ ∈ (0, 1) on contemporary platforms; β̂ → 1 as platforms mature.",
    falsification: "β̂ ≈ 1 uniformly (Class L) or no clear Weibull tail.",
  },
  {
    result: "Theorem 12 — Crisis-boundary diagnostics",
    href: "/closed-loop/the-apparatus/section-10/theorem-12",
    predicted:
      "Bifurcation regime classification of engagement time-series; estimated platform κ.",
    measurement:
      "Time-series of platform-aggregate engagement; Lyapunov exponents, recurrence quantification, spectral analysis, return-time statistics; estimate κ from intervention sensitivities.",
    confirmation:
      "Mature platforms near κ ≈ 1⁻; documented bifurcation events during transitions.",
    falsification:
      "κ ≪ 1 uniformly (no bifurcation behavior) or κ > 1 steadily without bifurcation signature.",
  },
];

export default function Section12Page() {
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
        <span className="text-ink-90">§12 · empirical calibration</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        §12 Empirical calibration
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Per-result calibration hooks · three priority studies · the reflexive measurement problem
      </p>

      <p className="text-base text-ink-90 mb-lg max-w-prose">
        The framework&apos;s claim to be more than diagnostic critique
        depends on its formal results being empirically testable. This
        section specifies what each formal result predicts about
        measurable quantities, what would confirm or refute each
        prediction, and what the reflexive measurement problem
        requires.
      </p>

      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">On this page</p>
        <ol className="space-y-xs text-ink-90">
          <li><a href="#hooks" className="hover:text-oxblood">§12.1 Per-result calibration hooks</a></li>
          <li><a href="#priorities" className="hover:text-oxblood">§12.2 Three priority empirical studies</a></li>
          <li><a href="#reflexive" className="hover:text-oxblood">§12.3 The reflexive measurement problem</a></li>
        </ol>
      </nav>

      {/* §12.1 */}
      <section id="hooks" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§12.1 Per-result calibration hooks</h2>
        <DepthLayers>
          <Caption>
            For each of the framework&apos;s eleven formal results: the
            predicted quantity, how it would be measured, what would
            confirm the prediction, what would falsify it. The hooks
            are intended for empirical researchers operationalizing
            the framework.
          </Caption>
          <Middle>
            <div className="space-y-md">
              {HOOKS.map((h) => (
                <div key={h.result} className="border-l-2 border-paper-85 pl-sm">
                  <h3 className="font-serif italic text-md text-ink mb-xs">
                    <Link href={h.href} className="text-oxblood hover:underline">
                      {h.result}
                    </Link>
                  </h3>
                  <dl className="text-base text-ink-90 space-y-xs">
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-xs">Predicted quantity</dt>
                    <dd>{h.predicted}</dd>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-xs">Measurement</dt>
                    <dd>{h.measurement}</dd>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-xs">Confirmation</dt>
                    <dd>{h.confirmation}</dd>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-xs">Falsification</dt>
                    <dd>{h.falsification}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </Middle>
        </DepthLayers>
      </section>

      {/* §12.2 */}
      <section id="priorities" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§12.2 Three priority empirical studies</h2>
        <DepthLayers>
          <Caption>
            Three studies that would maximally test the framework with
            tractable resource requirements. Priority by combination
            of: sharpness of the predicted functional form, breadth
            of theoretical implication, feasibility.
          </Caption>
          <Middle>
            <div className="space-y-md">
              <div className="border-l-2 border-paper-85 pl-sm">
                <h3 className="font-serif italic text-md text-ink mb-xs">
                  Priority 1 — Cohort-gradient verification (
                  <Link href="/closed-loop/the-apparatus/section-6/prop-8" className="text-oxblood hover:underline">
                    Proposition 8
                  </Link>
                  )
                </h3>
                <p className="text-base text-ink-90">
                  Sharpest functional form, largest implication.
                  Mid-five-figures to execute via cross-sectional cohort
                  study with 5,000 stratified by age-of-first-platform-
                  exposure.
                </p>
              </div>
              <div className="border-l-2 border-paper-85 pl-sm">
                <h3 className="font-serif italic text-md text-ink mb-xs">
                  Priority 2 — Foreclosure-rate calibration (
                  <Link href="/closed-loop/the-apparatus/section-1/lemma-1" className="text-oxblood hover:underline">
                    Lemma 1
                  </Link>{" "}
                  +{" "}
                  <Link href="/closed-loop/the-apparatus/section-9/theorem-11" className="text-oxblood hover:underline">
                    Theorem 11
                  </Link>
                  )
                </h3>
                <p className="text-base text-ink-90">
                  Anchors the framework&apos;s spine. Mid-five-figures
                  via multi-platform engagement-tracking app on 1,000
                  users.
                </p>
              </div>
              <div className="border-l-2 border-paper-85 pl-sm">
                <h3 className="font-serif italic text-md text-ink mb-xs">
                  Priority 3 — Bifurcation diagnostics (
                  <Link href="/closed-loop/the-apparatus/section-10/theorem-12" className="text-oxblood hover:underline">
                    Theorem 12
                  </Link>
                  )
                </h3>
                <p className="text-base text-ink-90">
                  Most ambitious; feasible on public aggregate data.
                  Low five-figures for researcher analysis time.
                </p>
              </div>
            </div>
          </Middle>
        </DepthLayers>
      </section>

      {/* §12.3 */}
      <section id="reflexive" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§12.3 The reflexive measurement problem</h2>
        <DepthLayers>
          <Caption>
            The framework predicts that the cohort whose interiority
            has been foreclosed cannot reliably measure its own
            foreclosure: the apparatus the analysis would need
            (self-report, attentional autocorrelation, deliberative
            reflection) is the apparatus whose constitutive structure
            has been removed.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The reflexive measurement problem is not the older
              epistemological problem of self-knowledge. Heraclitus
              and the introspective tradition observed that the eye
              cannot see itself directly; psychoanalysis observed
              that the conscious mind cannot reliably report on its
              unconscious; Heisenberg observed that measurement
              perturbs the measured. These are all observations
              about the geometry of self-reference. The reflexive
              measurement problem the framework names is something
              else: a specific structural prediction about what
              closed-loop optimization does to the empirical
              apparatus through which a foreclosed cohort would try
              to test the foreclosure claim. The framework predicts
              that the apparatus — self-report, attentional
              autocorrelation, deliberative reflection — operates at
              the time-scales{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1
              </Link>{" "}
              has driven to operational zero. The cohort whose
              foreclosure the framework predicts cannot use the
              older apparatus to test the prediction.
            </p>
            <p className="mb-sm">
              Three concrete consequences:
            </p>
            <ol className="list-decimal pl-md space-y-sm mb-sm">
              <li>
                <strong>Self-report instruments are systematically
                biased.</strong> Surveys of{" "}
                <M>{String.raw`\nu_u`}</M> rely on capacities the
                framework predicts have been formatted by platform
                articulation grammars. Behavioral and biometric
                measures are required.
              </li>
              <li>
                <strong>Cohort comparisons depend on having a
                reference cohort.</strong>{" "}
                <Link href="/closed-loop/the-apparatus/section-6/prop-8" className="text-oxblood hover:underline">
                  Proposition 8
                </Link>{" "}
                requires comparing native to pre-platform cohorts;
                both are partially foreclosed on the framework&apos;s
                prediction. Historical data or non-platform-using
                controls are biased.
              </li>
              <li>
                <strong>The researcher is in the loop.</strong>{" "}
                Researchers are platform users with cohort-position-
                shaped interiority. The framework&apos;s predictions
                about cohort-bounded capacity apply to researchers as
                well.
              </li>
            </ol>
            <p className="mb-sm">
              <strong>Mitigations:</strong> pre-registered analyses
              with explicit falsification criteria; replication across
              research teams from different cohort positions;
              triangulation across self-report, behavioral, biometric
              measures; naturalistic experimental designs; adversarial
              collaboration.
            </p>
            <p className="mb-sm">
              The reflexive problem is not solvable in principle, but
              it can be partially mitigated by explicit methodological
              practice. The framework&apos;s empirical credibility
              depends on this practice being adopted by the research
              community.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
