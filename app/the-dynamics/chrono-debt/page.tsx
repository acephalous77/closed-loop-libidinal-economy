import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { ChronoDebt } from "@/components/visualizations/ChronoDebt";

export const metadata: Metadata = {
  title: "chrono-debt — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.2. The deficit in pause-time at every scale at once. D(t,τ) = Λ_◦(τ) − Λ(t,τ).",
};

export default function ChronoDebtPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "chrono-debt" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.2</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">chrono-debt spectrum</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the deficit in pause-time at every scale, simultaneously
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
            (§3.2). Let{" "}
            <span className="font-mono">Λ_◦(τ)</span> be the pre-closure survival
            function of the inter-stimulus interval — the probability under the
            historical regime that the inter-stimulus interval exceeded τ. Let{" "}
            <span className="font-mono">Λ(t,τ)</span> be the realized survival
            under the closed loop at time t. The{" "}
            <em>chrono-debt at scale τ</em> is{" "}
            <span className="font-mono">D(t,τ) = Λ_◦(τ) − Λ(t,τ)</span>. The
            framework's central observation is that D is a{" "}
            <em>spectrum</em> — non-zero across the entire τ axis at once.
          </p>

          <ChronoDebt />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Step the regime selector from <span className="font-mono">baseline</span> to{" "}
              <span className="font-mono">converged</span>. The realized
              survival curve (oxblood) collapses inward; the chrono-debt area
              (shaded oxblood) fills out across the whole τ axis. The deficit
              accumulates at every scale, not at one preferred scale — a
              foreclosed second and a foreclosed adolescence are not the same
              quantity, but they are both present in D simultaneously.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The aggregate readout uses the framework's default weighting{" "}
              <span className="font-mono">w(τ) ∝ τ</span> — longer foreclosed
              windows count more. The choice is not arbitrary; it reflects the
              empirical claim that developmental and political consequences of
              foreclosed pause-time scale with the foreclosed window's scale. A
              foreclosed second is recoverable; a foreclosed adolescence is
              not.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/foreclosure-clock", title: "foreclosure clock", note: "the survival function that the debt measures against" },
              { href: "/the-dynamics/captured-resonance", title: "captured resonance", note: "the timescale axis the debt accumulates over" },
              { href: "/the-dynamics/closed-loop", title: "the closed loop", note: "the dynamics producing the realized Λ(t,τ)" },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
