import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { InterventionPanel } from "@/components/visualizations/InterventionPanel";
import { M } from "@/components/ui/Math";
import { RelatedReading } from "@/components/navigation/RelatedReading";

export const metadata: Metadata = {
  title: "the three modes — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §5. The three modes of intervention as a controls panel. Only Mode A breaks Lemma 1; Modes B and C preserve parallel structures the proof chain does not depend on.",
};

export default function InterventionPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
              { label: "the three modes" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[60rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §5</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">the three modes of intervention</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              architectural · artisanal · disruption-as-form
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            <a
              href="/closed-loop/the-mathematics#5-three-modes-of-intervention"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              §5
            </a>{" "}
            of the formal exposition states three formally distinct modes of
            intervention on the closed loop. They are three different
            operations on three different objects in the apparatus. They share
            no common mechanism that would make them flavors of one
            intervention. The framework's central
            political claim is that only Mode A breaks{" "}
            <a
              href="/closed-loop/the-dynamics/causal-chain"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the proof chain
            </a>{" "}
            from Lemma 1 to Theorem 1, while Modes B and C produce real
            effects on parallel structures —{" "}
            <a
              href="/closed-loop/the-dynamics/metric-superego"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              <M>{String.raw`D_{\mathrm{KL}}`}</M>
            </a>{" "}
            and{" "}
            <a
              href="/closed-loop/the-dynamics/surplus"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              <M>{String.raw`\Sigma(T)`}</M>
            </a>{" "}
            respectively — which the proof of Theorem 1 does not depend on.
            Substituting one mode for another is substituting an intervention
            on one structure for an intervention on a different structure.
          </p>

          <InterventionPanel />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The status line at the top of each mode card is the formal
              claim. Sweep <M>{String.raw`\beta`}</M> in Mode A above
              the threshold and the status flips from "Lemma 1 holds" to
              "breaks Lemma 1" in oxblood; the summary at the bottom updates.
              Sweep <M>{String.raw`L_m`}</M> in Mode B and the
              status flips at the threshold{" "}
              <M>{String.raw`L_m^* \approx 0.80`}</M>, but the Lemma 1
              status at the bottom does not change. Sweep{" "}
              <M>{String.raw`\sigma_\eta^+`}</M> in Mode C and
              the status notes that <M>{String.raw`\Sigma(T)`}</M> is bounded strictly below{" "}
              <M>{String.raw`\sup_\pi \mathbb{E}[\hat{R}]`}</M>, again without touching Lemma 1.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The three modes operate on three distinct timescales — Mode A on{" "}
              <M>{String.raw`T_{\mathrm{mix}}(\pi')`}</M> (months to years),
              Mode B on the user's metabolic cycle (daily to weekly), Mode C
              per-event (compounding through the user's exposure horizon).
              They do not exchange. There is no rate at which Mode B
              substitutes for Mode A; there is no exchange ratio between
              maintenance labor and mixing time. The framework's argumentative
              purpose is to make this non-substitutability formally costly to
              ignore.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/mode-space", title: "mode-space", note: "geometric non-substitutability of the modes" },
              { href: "/closed-loop/the-dynamics/causal-chain", title: "the causal chain", note: "where each mode intercepts the proof" },
              { href: "/closed-loop/the-dynamics/metric-superego", title: "metric superego", note: "Mode B's dynamics in detail" },
              { href: "/closed-loop/the-dynamics/surplus", title: "libidinal surplus", note: "what Mode C bounds in the policy's yield" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/citizen-after-the-pause#the-architectural-ask-made-concrete",
                title: "the citizen after the pause · §5",
                note: "Mode A made concrete: regulation, register-isolation, formation-window restrictions",
              },
              {
                href: "/closed-loop/the-argument/adolescence-without-outside#viii-the-open-question-of-mode-c",
                title: "adolescence without outside · §VIII",
                note: "the open question of whether Mode C is available to the cohort that grew up inside the loop",
              },
              {
                href: "/closed-loop/the-argument/sincere-captives#vii-the-foreclosure-of-mode-c",
                title: "the sincere captives · §VII",
                note: "Mode C structurally foreclosed for the captive — the limit case",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
