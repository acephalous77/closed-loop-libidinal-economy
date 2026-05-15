import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { SomaticOptimization } from "@/components/visualizations/SomaticOptimization";

export const metadata: Metadata = {
  title: "somatic optimization — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.5. The body as the differential of the marked point process. Hawkes-style intensities, raster of stimuli and per-register engagement events.",
};

export default function SomaticOptimizationPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "somatic optimization" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.5</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">somatic optimization</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the body as the differential of the marked point process
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
            (§3.5). Engagement is not a sequence of choices. It is a counting
            process. The marked process{" "}
            <span className="font-mono">N_t^i</span> has Hawkes intensity{" "}
            <span className="font-mono">λ^i(t) = λ_0^i + Σ_j α_ij ∫ κ(t−s) dN_s^j</span>{" "}
            — events cluster via cross-excitation between registers. The{" "}
            <em>somatic</em> qualifier signals that the differential{" "}
            <span className="font-mono">dN^i_t</span> is the body: saccades,
            taps, scroll-events, gaze shifts, transaction events. The
            optimization is over these somatic micro-events. Deliberative
            choice does not enter.
          </p>

          <SomaticOptimization />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">baseline</span> the stimulus lane
              is sparse and the engagement events appear in scattered bursts.
              Step to <span className="font-mono">converged</span> and the
              stimulus lane fills out toward the tick floor; the engagement
              lanes cluster underneath, often firing across multiple registers
              at once — the off-diagonal{" "}
              <a
                href="/the-dynamics/libidinal-routing"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                libidinal routing
              </a>{" "}
              becoming visible at the event level.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch to <span className="font-mono">with-bonus (β = 10)</span> —
              Mode A — and the stimulus lane thins back out. The architectural
              intervention bears on the rate at which the differential is taken
              from the body; the body is not the actor in the loop, it is what
              the loop integrates against.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55]">
              The lanes are colored by register: S oxblood, C ink-90, P ink-70,
              K ink-50, with stimuli in ink at the top. Press{" "}
              <span className="font-mono">regenerate sample</span> to draw a
              fresh Hawkes realization at the same regime.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
