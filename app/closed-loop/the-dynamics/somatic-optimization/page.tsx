import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { SomaticOptimization } from "@/components/visualizations/SomaticOptimization";
import { M } from "@/components/ui/Math";

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
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
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
              href="/closed-loop/the-mathematics#3-the-six-instruments"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the six instruments
            </a>{" "}
            (§3.5). Engagement is not a sequence of choices. It is a counting
            process. The marked process{" "}
            <M>{String.raw`N_t^i`}</M> has Hawkes intensity{" "}
            <M>{String.raw`\lambda^i(t) = \lambda_0^i + \sum_j \alpha_{ij} \int \kappa(t-s)\, dN_s^j`}</M>{" "}
            — events cluster via cross-excitation between registers. The{" "}
            <em>somatic</em> qualifier signals that the differential{" "}
            <M>{String.raw`dN^i_t`}</M> is the body: saccades,
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
                href="/closed-loop/the-dynamics/libidinal-routing"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                libidinal routing
              </a>{" "}
              becoming visible at the event level.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch to <M>{String.raw`\text{with-bonus } (\beta = 10)`}</M> —
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
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/libidinal-routing", title: "libidinal routing", note: "registers differentiated at the event level" },
              { href: "/closed-loop/the-dynamics/surplus", title: "libidinal surplus", note: "per-register marks integrate into Σ" },
              { href: "/closed-loop/the-dynamics/captured-resonance", title: "captured resonance", note: "the body's other coupling to the apparatus" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/the-loop#what-the-loop-produces",
                title: "the loop · §3",
                note: "the body as differential — what the marked point process accumulates against",
              },
              {
                href: "/closed-loop/the-argument/sincere-captives#v-the-mechanism-of-capture",
                title: "the sincere captives · §V",
                note: "somatic optimization at the captive's terminal scale",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
