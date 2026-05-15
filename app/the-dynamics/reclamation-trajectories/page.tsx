import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { ReclamationTrajectories } from "@/components/visualizations/ReclamationTrajectories";

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
            The{" "}
            <a
              href="/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              reclamation theorem
            </a>{" "}
            says that under the closed loop the conditional autocovariance I(τ) is
            undefined-on-trajectory for τ &gt; θ_ref — the conditioning event E_τ has
            measure zero. Run the simulation. Each line is a user; trajectories that
            experience a no-input window of length ≥ θ_ref turn oxblood. Under the
            closed-loop policy, the oxblood set does not grow. The visualization is the
            theorem rendered as a set that fails to appear.
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
              <span className="font-mono">with-bonus (β = 10)</span> — Mode A intervention,
              architectural — and re-run. Now oxblood trajectories emerge. The policy has
              been modified to internalize the cost of foreclosed pause-time; the
              operating point shifts; long no-input windows acquire positive measure. The
              contrast is the framework's central political claim: only the architectural
              mode produces what the theorem forecloses.
            </p>
            <p className="font-serif text-base text-ink-70 leading-[1.55]">
              <span className="italic">Implementation note.</span> 50 users at default.
              The simulation engine implements equations (1)–(5) of the formal exposition
              with simplified response dynamics; each user's state evolves
              independently. The stimulus raster at the bottom shows tick-level events
              for the representative user.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
