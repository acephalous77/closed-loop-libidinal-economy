import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { MetricSuperego } from "@/components/visualizations/MetricSuperego";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "metric superego — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.4. The user's self-evaluative distribution drifts toward the platform's reward-induced distribution under prolonged exposure; Mode B holds a positive gap when maintenance labor crosses the threshold.",
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
            (§3.4). Let <M>{String.raw`\nu_u(t)`}</M> be the user's
            self-evaluative distribution — the posterior over their own
            value-states inferred from observed feedback. Let{" "}
            <M>{String.raw`\pi_{\hat{R}}`}</M> be the distribution induced
            over user actions by the platform's reward functional{" "}
            <M>{String.raw`\hat{R}`}</M>. The metric-superego claim is{" "}
            <M>{String.raw`D_{\mathrm{KL}}(\nu_u(t) \,\|\, \pi_{\hat{R}}) \to 0`}</M>{" "}
            as <M>{String.raw`t \to \infty`}</M>
            — the user's image of what is valuable converges to the platform's.
            The convergence is mechanism-agnostic: free-energy minimization,
            operant reinforcement, or social comparison each produce it.
          </p>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            Proposition 2 in §5.2 gives the dynamics:{" "}
            <M>{String.raw`d D_{\mathrm{KL}} / dt = -h_0(\beta_u) + r(L_m)`}</M>.
            Without maintenance labor (Mode B), the first term dominates and the
            divergence collapses. With labor above the threshold{" "}
            <M>{String.raw`L_m^* = h_0/c_{\mathrm{op}}`}</M>, the second term
            holds the gap.
          </p>

          <MetricSuperego />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <M>{String.raw`L_m = 0`}</M> the trajectory
              decays smoothly to zero — the metric superego forms. The line
              turns oxblood when the divergence falls below 0.05 and the
              readout marks the status. Step{" "}
              <M>{String.raw`L_m`}</M> through the threshold{" "}
              <M>{String.raw`L_m^* \approx 0.80`}</M> and the dynamics
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
              <M>{String.raw`\gamma > 0`}</M> for the user who
              practices it. But the closure persists — Lemma 1's bound is
              unchanged; the trajectory the user maintains is parallel to the
              loop, not a modification of it. The framework's claim is that
              Mode B is real for the practitioner and structurally invisible at
              the population level.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/libidinal-routing", title: "libidinal routing", note: <>the registers <M>{String.raw`\nu_u`}</M> is defined over</> },
              { href: "/the-dynamics/intervention", title: "the three modes", note: "Mode B is the relevant intervention here" },
              { href: "/the-dynamics/cohort-gradient", title: "cohort gradient", note: <>the developmental mechanism behind <M>{String.raw`\nu_u`}</M></> },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/the-argument/sincere-captives#v-the-mechanism-of-capture",
                title: "the sincere captives · §V",
                note: "the metric superego's terminal convergence on the LinkedIn fanatic",
              },
              {
                href: "/the-argument/adolescence-without-outside#v-the-therapeutic-vernacular",
                title: "adolescence without outside · §V",
                note: "the therapeutic vernacular as the cohort's metric superego",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
