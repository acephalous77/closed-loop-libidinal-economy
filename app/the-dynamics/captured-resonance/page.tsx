import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { CapturedResonance } from "@/components/visualizations/CapturedResonance";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "captured resonance — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.6. Kuramoto phase coupling between body and medium; the lock-condition threshold made experiential.",
};

export default function CapturedResonancePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "captured resonance" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.6</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">captured resonance</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the body as forced oscillator under the medium's delivery phase
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
            (§3.6). The biological phase{" "}
            <M>{String.raw`\varphi_b`}</M> — a circadian, sleep-wake, or
            attentional oscillator with intrinsic frequency{" "}
            <M>{String.raw`\omega_b`}</M> — couples to the
            medium-delivery phase <M>{String.raw`\varphi_m`}</M> through
            a Kuramoto equation. When the coupling strength{" "}
            <M>{String.raw`K_{bm}`}</M> exceeds the frequency
            mismatch <M>{String.raw`|\omega_b - \omega_m|`}</M>, the body
            entrains. Under sustained policy on a closed-loop platform, the
            policy shapes <M>{String.raw`\varphi_m`}</M> through
            delivery timing; the user's circadian rhythm and attentional
            oscillation become forced oscillators whose driver is the apparatus.
          </p>

          <CapturedResonance />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <M>{String.raw`K_{bm} = 0`}</M> the body vector and
              the medium vector rotate at their own intrinsic rates; the angular
              gap <M>{String.raw`\Delta\varphi`}</M> drifts continuously. Step{" "}
              <M>{String.raw`K_{bm}`}</M> up across the threshold
              (≈ 0.007 here) and watch the gap settle to a constant — the
              vectors phase-lock and the lock indicator turns oxblood.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The phenomenon is not metaphorical. It is the same Kuramoto
              entrainment observed in circadian biology, in social
              synchronization, and in neural population dynamics. The framework
              names the mechanism by which the apparatus crosses the threshold,
              not the threshold itself.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/chrono-debt", title: "chrono-debt spectrum", note: "the timescale axis along which entrainment occurs" },
              { href: "/the-dynamics/somatic-optimization", title: "somatic optimization", note: "the body's other coupling" },
              { href: "/the-dynamics/closed-loop", title: "the closed loop", note: "the architecture that drives the entrainment" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/the-argument/sincere-captives#v-the-mechanism-of-capture",
                title: "the sincere captives · §V",
                note: "captured resonance at the affect-grammar layer, one level up",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
