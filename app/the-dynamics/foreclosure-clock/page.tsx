import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ForeclosureClock } from "@/components/visualizations/ForeclosureClock";

export const metadata: Metadata = {
  title: "foreclosure clock — The Closed-Loop Libidinal Economy",
  description:
    "Visualization I. The survival probability bound from Lemma 1, made physically legible by comparison to reference lengths.",
};

export default function ForeclosureClockPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "foreclosure clock" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">visualization I.</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">foreclosure clock</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the survival probability of the reflective window, made physically legible
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            <a
              href="/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              Lemma 1 (foreclosure of the no-input window)
            </a>{" "}
            establishes that the survival function of the inter-stimulus interval at the
            converged policy θ* satisfies{" "}
            <span className="font-mono">S(θ_ref; θ*) ≤ C(c<sub>v</sub>) · e<sup>−θ_ref/δ_min</sup></span>{" "}
            (Asmussen, Ch. V). The exponent θ_ref / δ_min is on the order of a thousand
            to a hundred thousand for realistic platforms. The bound is therefore
            mathematically positive but operationally indistinguishable from zero. The
            visualization renders this fact as a length comparison: the bound is smaller
            than the smallest physical scale.
          </p>

          <ForeclosureClock />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch δ_min between 1ms and 1s. At 1s, the bound has visible length — the
              "closure" doesn't yet hold. At 10ms (the realistic tick rate for engagement
              platforms), the bound collapses to invisibility against every physical
              reference. There is no physical scale at which the bound is meaningfully
              non-zero under the converged policy.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch the reference to the Planck length — the smallest physically
              meaningful quantity in the universe. The foreclosure bound is still many
              orders of magnitude smaller. This is what the proof means when it says the
              bound is{" "}
              <span className="italic">operationally indistinguishable from zero</span>.
              The mathematics has no operational referent below the Planck scale; the
              bound lives below.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
