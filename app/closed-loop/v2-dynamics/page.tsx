/**
 * The dynamics index — `/closed-loop/v2-dynamics`.
 *
 * Hub for the twelve v2 interactive plates. Each plate is a small
 * machine: a reader operates the closure's mechanism against a
 * parameter and sees the apparatus result behave. The plates are
 * the "Machine" surface in the Workshop / Schematic / Machine
 * triad.
 *
 * Distinct from /closed-loop/the-dynamics (the v1 plates, on the
 * pre-rework math). The v1 surface stays intact as a historical
 * artifact; v2 builds against the performative-prediction spine.
 */
import type { Metadata } from "next";
import Link from "next/link";

const PATH = "/closed-loop/v2-dynamics";

export const metadata: Metadata = {
  title: "the dynamics — closed-loop",
  description:
    "Twelve interactive plates. Each operates an apparatus result against a parameter so the reader sees the mechanism behave. The Machine surface of the v2 closed-loop rebuild.",
  alternates: { canonical: PATH },
};

interface Plate {
  name: string;
  href: string;
  gloss: string;
  apparatusName: string;
  apparatusHref: string;
}

const PLATES: Plate[] = [
  {
    name: "Foreclosure clock",
    href: "/closed-loop/v2-dynamics/foreclosure-clock",
    gloss:
      "The survival probability at the reflective threshold under the closed loop. The reader watches S(θ_ref; θ_t) drop toward operational zero as the policy converges.",
    apparatusName: "Lemma 1",
    apparatusHref: "/closed-loop/the-apparatus/section-1/lemma-1",
  },
  {
    name: "Chrono-debt spectrum",
    href: "/closed-loop/v2-dynamics/chrono-debt-spectrum",
    gloss:
      "The foreclosed pause-time at every scale, measured against the pre-closure baseline. The reader sees D(t, τ) accumulate as τ grows toward developmental scales.",
    apparatusName: "Definition 1.1",
    apparatusHref: "/closed-loop/the-apparatus/section-1/1.4-chrono-debt",
  },
  {
    name: "Dividual posterior",
    href: "/closed-loop/v2-dynamics/dividual-posterior",
    gloss:
      "The platform's filtering posterior contracting on the user state at the parametric rate. Variance vs tick on log-log, plus a contracting density panel.",
    apparatusName: "Proposition 4'",
    apparatusHref: "/closed-loop/the-apparatus/section-3/prop-4-prime",
  },
  {
    name: "Metric superego",
    href: "/closed-loop/v2-dynamics/metric-superego",
    gloss:
      "The KL distance from the user's behavioral distribution to the platform-induced target. The reader sees the monotone descent and the null-band band that the platform's measurement cannot resolve.",
    apparatusName: "Proposition 5'",
    apparatusHref: "/closed-loop/the-apparatus/section-3/prop-5-prime",
  },
  {
    name: "Captured resonance",
    href: "/closed-loop/v2-dynamics/captured-resonance",
    gloss:
      "Two oscillators, one coupling constant. Phase-locking iff K_bm > |ω_b − ω_m|. Two dials and a phase-difference plot; the reader crosses the threshold and sees the lock.",
    apparatusName: "Proposition 6",
    apparatusHref: "/closed-loop/the-apparatus/section-3/prop-6",
  },
  {
    name: "Libidinal routing",
    href: "/closed-loop/v2-dynamics/libidinal-routing",
    gloss:
      "Four registers, dependently distributed. Mutual information across registers under the platform's posterior. The reader raises off-diagonal coupling and watches I_{Π_t}(u^i; u^j) rise.",
    apparatusName: "Proposition 7'",
    apparatusHref: "/closed-loop/the-apparatus/section-3/prop-7-prime",
  },
  {
    name: "Somatic Hawkes",
    href: "/closed-loop/v2-dynamics/somatic-hawkes",
    gloss:
      "Multi-mark Hawkes across S/C/P/K with cross-register coupling. Events on one track raise intensity on the others; cascades visibly emerge when α_kl is raised.",
    apparatusName: "§3.5",
    apparatusHref: "/closed-loop/the-apparatus/section-3/3.5-hawkes",
  },
  {
    name: "Cohort gradient",
    href: "/closed-loop/v2-dynamics/cohort-gradient",
    gloss:
      "Developmental exposure to the converged regime. KL distance decays exponentially in exposure duration; the reader sees the long-exposure cohort start at the target.",
    apparatusName: "Proposition 8",
    apparatusHref: "/closed-loop/the-apparatus/section-6/prop-8",
  },
  {
    name: "Intervention asymmetry",
    href: "/closed-loop/v2-dynamics/intervention-asymmetry",
    gloss:
      "Three intervention sites — R̂, T, O — and the N-fold scale gap between Mode A and the individual-scale modes. The reader compares dθ*/dX across modes.",
    apparatusName: "Theorem 9",
    apparatusHref: "/closed-loop/the-apparatus/section-7/theorem-9",
  },
  {
    name: "Reclamation trajectories",
    href: "/closed-loop/v2-dynamics/reclamation-trajectories",
    gloss:
      "Three reclamation modes plotted against the same baseline. Mode A bends the trajectory; B and C nudge initial conditions inside the closure's basin.",
    apparatusName: "Theorem 1' + §5",
    apparatusHref: "/closed-loop/the-apparatus/section-2/theorem-1-prime",
  },
  {
    name: "Crisis-boundary bifurcations",
    href: "/closed-loop/v2-dynamics/crisis-boundary",
    gloss:
      "Three generic bifurcation regimes at the contractivity boundary κ_Φ = 1 — saddle-node, period-doubling, Neimark-Sacker — plus the pitchfork under cohort symmetry. The empirical signatures of each.",
    apparatusName: "Theorem 12",
    apparatusHref: "/closed-loop/the-apparatus/section-10/theorem-12",
  },
  {
    name: "Network coupling",
    href: "/closed-loop/v2-dynamics/network-coupling",
    gloss:
      "Engagement cascade across a social graph. Percolation threshold and cohort graph-amplification. The reader raises coupling and watches a cascade overtake the network.",
    apparatusName: "Theorem 10",
    apparatusHref: "/closed-loop/the-apparatus/section-8",
  },
];

export default function DynamicsIndex() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[42rem] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-90">the dynamics</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        the dynamics
      </h1>
      <p className="text-base text-ink-90 max-w-prose mb-md">
        Twelve interactive plates. Each plate is a small machine: a
        reader operates the apparatus result against a parameter and
        sees the mechanism behave. The plates are the framework&apos;s
        Machine surface — its claims are not only statable but
        operable.
      </p>
      <p className="text-base text-ink-70 italic max-w-prose mb-lg">
        Each plate carries a caption (the result in one sentence), a
        middle layer (what the controls do, what to look for), and a
        link back to the apparatus section that authorizes it. The
        plates are pedagogical companions to the formal results, not
        replacements.
      </p>

      <ol className="space-y-md">
        {PLATES.map((plate, i) => (
          <li key={plate.href} className="border-l-2 border-paper-85 pl-sm">
            <div className="flex items-baseline gap-sm mb-xs flex-wrap">
              <span className="font-mono text-sm text-ink-70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-md text-ink m-0">
                <Link href={plate.href} className="text-oxblood hover:underline">
                  {plate.name}
                </Link>
              </h2>
            </div>
            <p className="text-base text-ink-90 mb-xs">{plate.gloss}</p>
            <div className="font-mono text-xs uppercase tracking-wider text-ink-70">
              <Link
                href={plate.apparatusHref}
                className="text-oxblood hover:underline"
              >
                → {plate.apparatusName}
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Three navigation hubs
        </h2>
        <p className="text-base text-ink-90 max-w-prose mb-sm">
          The plates sit alongside three other navigation surfaces:
        </p>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            <Link
              href="/closed-loop/the-architecture"
              className="text-oxblood hover:underline"
            >
              the architecture
            </Link>{" "}
            — the closed loop as interactive schematic.
          </li>
          <li>
            <Link
              href="/closed-loop/the-apparatus"
              className="text-oxblood hover:underline"
            >
              the apparatus
            </Link>{" "}
            — the formal sections §0 through §12.
          </li>
          <li>
            <Link
              href="/closed-loop/the-instruments"
              className="text-oxblood hover:underline"
            >
              the instruments
            </Link>{" "}
            — six measurable instruments with their calibration hooks.
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 dynamics — twelve plates. v1 dynamics surface at{" "}
        <Link href="/closed-loop/the-dynamics" className="text-oxblood hover:underline">
          /closed-loop/the-dynamics
        </Link>{" "}
        preserved intact.
      </footer>
    </main>
  );
}
