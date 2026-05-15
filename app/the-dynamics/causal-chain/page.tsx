import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CausalChain } from "@/components/visualizations/CausalChain";

export const metadata: Metadata = {
  title: "the causal chain — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §4. The proof chain from the assumptions to Theorem 1, with mode interception points visible. Mode A cuts the chain; Modes B and C do not.",
};

export default function CausalChainPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "the causal chain" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §4</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">the causal chain</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the proof of Theorem 1 against the intervention modes
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            The structural argument of{" "}
            <a
              href="/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              §4
            </a>{" "}
            as a directed graph. The six assumptions{" "}
            <span className="font-mono">(A1)–(A6)</span> feed three intermediate
            results: the policy reaches{" "}
            <span className="font-mono">θ*</span> at the engagement-maximizer,
            the Asmussen renewal bound holds on the survival function, and the
            no-input event probability collapses (Lemma 1). From Lemma 1, the
            estimator variance for{" "}
            <span className="font-mono">I(τ)</span> diverges, and Theorem 1
            follows: <span className="font-mono">I(τ)</span> is
            undefined-on-trajectory.
          </p>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            The framework's structural claim about{" "}
            <a
              href="/the-mathematics#5-three-modes-of-intervention"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the three modes of intervention
            </a>{" "}
            is visible directly on this chain. Mode A intercepts at the θ*
            node — by adding <span className="font-mono">β · b(τ^(k))</span> to
            the reward, Assumption (A2)'s monotonicity fails. Modes B and C
            do not intercept this chain at all: they hold structures the
            chain doesn't depend on.
          </p>

          <CausalChain />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">closed-loop</span>, every node
              fires — the chain completes and Theorem 1's terminal node lights
              in oxblood: <span className="font-mono">RECLAMATION ⌀</span>.
              Switch to <span className="font-mono">with-bonus</span> and the
              red Mode A cut appears between the (A2) node and the θ* node;
              every downstream node dims; the terminal node goes dark.
              Theorem 1 does not fire.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Toggle the Mode B and Mode C indicators. Their footers brighten
              when active. The chain itself does not respond — Mode B and Mode
              C operate on parallel structures (the user's self-evaluative
              divergence D_KL and the platform's surplus Σ respectively).
              They produce real effects, but not the effect the chain produces.
              The framework's central political claim is this asymmetry:
              substituting one mode for another is substituting an
              intervention on one chain for an intervention on a different
              chain. The chains do not exchange.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
