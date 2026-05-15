import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CapturedResonance } from "@/components/visualizations/CapturedResonance";

export const metadata: Metadata = {
  title: "captured resonance — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.6. Kuramoto phase coupling between the body and the medium; the lock condition K_bm > |ω_b − ω_m| made experiential.",
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
            <span className="font-mono">φ_b</span> — a circadian, sleep-wake, or
            attentional oscillator with intrinsic frequency{" "}
            <span className="font-mono">ω_b</span> — couples to the
            medium-delivery phase <span className="font-mono">φ_m</span> through
            a Kuramoto equation. When the coupling strength{" "}
            <span className="font-mono">K_bm</span> exceeds the frequency
            mismatch <span className="font-mono">|ω_b − ω_m|</span>, the body
            entrains. Under sustained policy on a closed-loop platform, the
            policy shapes <span className="font-mono">φ_m</span> through
            delivery timing; the user's circadian rhythm and attentional
            oscillation become forced oscillators whose driver is the apparatus.
          </p>

          <CapturedResonance />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">K_bm = 0</span> the body vector and
              the medium vector rotate at their own intrinsic rates; the angular
              gap Δφ drifts continuously. Step{" "}
              <span className="font-mono">K_bm</span> up across the threshold
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
        </article>
      </div>
    </main>
  );
}
