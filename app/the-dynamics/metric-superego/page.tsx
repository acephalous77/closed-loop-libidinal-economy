import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MetricSuperego } from "@/components/visualizations/MetricSuperego";

export const metadata: Metadata = {
  title: "metric superego — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.4. D_KL(ν_u ‖ π_R̂) trajectory under maintenance labor. The metric superego forms when L_m < L_m*; Mode B holds the gap when L_m ≥ L_m*.",
};

export default function MetricSuperegoPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "metric superego" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.4</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">metric superego</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the convergence of self-evaluation to platform reward
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            One of{" "}
            <a
              href="/the-mathematics#3-the-six-instruments"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the six instruments
            </a>{" "}
            (§3.4). Let <span className="font-mono">ν_u(t)</span> be the user's
            self-evaluative distribution — the posterior over their own
            value-states inferred from observed feedback. Let{" "}
            <span className="font-mono">π_R̂</span> be the distribution induced
            over user actions by the platform's reward functional{" "}
            <span className="font-mono">R̂</span>. The metric-superego claim is{" "}
            <span className="font-mono">D_KL(ν_u(t) ‖ π_R̂) → 0</span> as t → ∞
            — the user's image of what is valuable converges to the platform's.
            The convergence is mechanism-agnostic: free-energy minimization,
            operant reinforcement, or social comparison each produce it.
          </p>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            Proposition 2 in §5.2 gives the dynamics:{" "}
            <span className="font-mono">d D_KL / dt = −h_0(β_u) + r(L_m)</span>.
            Without maintenance labor (Mode B), the first term dominates and the
            divergence collapses. With labor above the threshold{" "}
            <span className="font-mono">L_m* = h_0/c_op</span>, the second term
            holds the gap.
          </p>

          <MetricSuperego />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">L_m = 0</span> the trajectory
              decays smoothly to zero — the metric superego forms. The line
              turns oxblood when the divergence falls below 0.05 and the
              readout marks the status. Step{" "}
              <span className="font-mono">L_m</span> through the threshold{" "}
              <span className="font-mono">L_m* ≈ 0.80</span> and the dynamics
              flip: above threshold, the labor input exactly counteracts the
              platform's pull and the gap stabilizes; well above it, the gap
              grows.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              This is the formal content of{" "}
              <a
                href="/the-mathematics#5-three-modes-of-intervention"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                Mode B (Proposition 2)
              </a>
              : artisanal labor preserves a real gap{" "}
              <span className="font-mono">γ &gt; 0</span> for the user who
              practices it. But the closure persists — Lemma 1's bound is
              unchanged; the trajectory the user maintains is parallel to the
              loop, not a modification of it. The framework's claim is that
              Mode B is real for the practitioner and structurally invisible at
              the population level.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
