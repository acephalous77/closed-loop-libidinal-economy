import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { SurplusBreakdown } from "@/components/visualizations/SurplusBreakdown";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "surplus — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.1. The platform's accumulated yield over horizon T, decomposed across the four registers. The asymmetry is the policy's signature.",
};

export default function SurplusPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
              { label: "surplus" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.1</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">libidinal surplus</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the platform's accumulated yield, decomposed by register
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
            (§3.1). The platform's accumulated yield over horizon T is given by
            the marked point process in equation (5):{" "}
            <M>{String.raw`\Sigma(T) = \sum_i \int_0^T \rho_i(u_{t^-}, y_{t^-})\, dN^i_t`}</M>
            . The per-register decomposition{" "}
            <M>{String.raw`\Sigma^i(T)`}</M> is what gives the
            instrument its analytic power: the policy distributes extraction
            across registers to maximize joint long-run yield, and the
            distribution is observable — the temporal density of register-marks
            in any user's engagement stream estimates the policy's extraction
            priorities.
          </p>

          <SurplusBreakdown />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">baseline</span> the four registers
              extract roughly equally — pre-closure apparatuses were not
              jointly optimized. Step to{" "}
              <span className="font-mono">converged</span> and the distribution
              skews sharply: the Consumer register dominates the yield because
              the policy has learned where extraction kernels{" "}
              <M>{String.raw`\rho_i`}</M> integrate most.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch to <M>{String.raw`\text{with-bonus } (\beta = 10)`}</M> —
              Mode A — and total <M>{String.raw`\Sigma(T)`}</M> drops
              substantially. The architectural intervention costs the platform
              measurable yield; the per-register distribution also flattens
              because the modified policy fires less and the cross-excitation
              that concentrated extraction has less to work on. This is the
              quantitative content of Mode A's antagonism with engagement
              competition: under voluntary conditions, the platform that
              adopts it loses against the platform that doesn't.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/somatic-optimization", title: "somatic optimization", note: "where the extraction events come from" },
              { href: "/closed-loop/the-dynamics/intervention", title: "the three modes", note: "Mode A drops total surplus measurably" },
              { href: "/closed-loop/the-dynamics/tiktok", title: "tiktok", note: "Σ as the FYP's accumulated yield, in practice" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/sincere-captives#v-the-mechanism-of-capture",
                title: "the sincere captives · §V",
                note: "what the platform extracts from the captive — surplus at terminal density",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
