import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { ReclamationTrajectories } from "@/components/visualizations/ReclamationTrajectories";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "reclamation trajectories — The Closed-Loop Libidinal Economy",
  description:
    "Visualization II. The reclamation theorem rendered as a set that fails to grow. Switch the policy to Mode A and watch the highlighted set appear.",
};

export default function ReclamationTrajectoriesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "reclamation trajectories" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">visualization II.</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">
              reclamation trajectories
            </h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the conditional autocovariance as a set that fails to grow
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            <a
              href="/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              Theorem 1 (the reclamation theorem)
            </a>{" "}
            says that under (1)–(5) and (A1)–(A5) the conditional autocovariance{" "}
            <M>{String.raw`I(\tau) := \mathrm{Cov}(u_t,\, u_{t+\tau} \mid E_\tau)`}</M> is
            undefined-on-trajectory in the limit{" "}
            <M>{String.raw`t \to \infty`}</M> for{" "}
            <M>{String.raw`\tau > \theta_{\mathrm{ref}}`}</M> — the
            conditioning event{" "}
            <M>{String.raw`E_\tau := \{s_{t'} = 0 \text{ for } t < t' \le t+\tau\}`}</M>{" "}
            has measure zero (Lemma 1). Run the simulation. Each line is a user;
            trajectories that experience an <M>{String.raw`E_\tau`}</M> event turn oxblood. Under the closed-loop
            policy, the oxblood set does not grow. The visualization is the theorem
            rendered as a set that fails to appear.
          </p>

          <ReclamationTrajectories />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At default parameters with the closed-loop policy, the counter stays at{" "}
              <span className="font-mono">0</span> as the simulation runs to its horizon.
              No trajectory experiences a reflective-length no-input window. This is
              Lemma 1 made visible as the absence of an event: the failure of the
              highlighted set to populate.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Switch the policy to{" "}
              <M>{String.raw`\text{with-bonus } (\beta = 10)`}</M> —{" "}
              <a
                href="/the-mathematics#5-three-modes-of-intervention"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                Mode A (Proposition 1)
              </a>
              , architectural — and re-run. Now oxblood trajectories emerge. The
              regularized objective{" "}
              <M>{String.raw`\hat{R}'(\theta; \beta) = \mathbb{E}[\hat{R}] + \beta \cdot \mathbb{E}[\sum b(\tau^{(k)})]`}</M>{" "}
              rewards inter-stimulus intervals <M>{String.raw`\tau > \tau^*`}</M>; the operating point along the
              path <M>{String.raw`\tilde\theta(\beta)`}</M> moves to one with positive probability on long windows. The
              contrast is the framework's central political claim: only the architectural
              mode breaks Lemma 1 and recovers what Theorem 1 forecloses.
            </p>
            <p className="font-serif text-base text-ink-70 leading-[1.55]">
              <span className="italic">Implementation note.</span> 50 users at default.
              The simulation engine implements equations (1)–(5) of the formal exposition
              with simplified response dynamics; each user's state evolves
              independently. The stimulus raster at the bottom shows tick-level events
              for the representative user.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/foreclosure-clock", title: "foreclosure clock", note: "Lemma 1's bound, made physically legible" },
              { href: "/the-dynamics/causal-chain", title: "the causal chain", note: "the proof chain from Lemma 1 to Theorem 1" },
              { href: "/the-dynamics/intervention", title: "the three modes", note: "Mode A breaks what Theorem 1 forecloses" },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
