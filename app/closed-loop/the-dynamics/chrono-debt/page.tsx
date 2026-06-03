import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { ChronoDebt } from "@/components/visualizations/ChronoDebt";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "chrono-debt — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.2. The deficit in pause-time at every scale simultaneously: realized-vs-baseline survival of the inter-stimulus interval.",
};

export default function ChronoDebtPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
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
            <Link
              href="/closed-loop/the-mathematics#3-the-six-instruments"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the six instruments
            </Link>{" "}
            (§3.2). Let{" "}
            <M>{String.raw`\Lambda_\circ(\tau)`}</M> be the pre-closure survival
            function of the inter-stimulus interval — the probability under the
            historical regime that the inter-stimulus interval exceeded{" "}
            <M>{String.raw`\tau`}</M>. Let{" "}
            <M>{String.raw`\Lambda(t,\tau)`}</M> be the realized survival
            under the closed loop at time <M>{String.raw`t`}</M>. The{" "}
            <em>chrono-debt at scale <M>{String.raw`\tau`}</M></em> is{" "}
            <M>{String.raw`D(t,\tau) = \Lambda_\circ(\tau) - \Lambda(t,\tau)`}</M>. The
            framework's central observation is that <M>{String.raw`D`}</M> is a{" "}
            <em>spectrum</em> — non-zero across the entire <M>{String.raw`\tau`}</M> axis at once.
          </p>

          <ChronoDebt />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Step the regime selector from <span className="font-mono">baseline</span> to{" "}
              <span className="font-mono">converged</span>. The realized
              survival curve (oxblood) collapses inward; the chrono-debt area
              (shaded oxblood) fills out across the whole τ axis. The deficit
              accumulates at every scale simultaneously — a foreclosed
              second and a foreclosed adolescence are different quantities,
              and both are present in D at once.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The aggregate readout uses the framework's default weighting{" "}
              <M>{String.raw`w(\tau) \propto \tau`}</M> — longer foreclosed
              windows count more. The choice reflects an empirical claim: the
              developmental and political consequences of foreclosed pause-time
              scale with the foreclosed window's scale. A foreclosed second is
              recoverable; a foreclosed adolescence is lost for good.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/foreclosure-clock", title: "foreclosure clock", note: "the survival function that the debt measures against" },
              { href: "/closed-loop/the-dynamics/captured-resonance", title: "captured resonance", note: "the timescale axis the debt accumulates over" },
              { href: "/closed-loop/the-dynamics/closed-loop", title: "the closed loop", note: <>the dynamics producing the realized <M>{String.raw`\Lambda(t,\tau)`}</M></> },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/sincere-captives#iv-the-weiner-pivot",
                title: "the sincere captives · §IV",
                note: "chrono-debt-as-obligation — the professional register of the same spectrum",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
