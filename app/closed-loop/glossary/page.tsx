/**
 * Glossary index — `/closed-loop/glossary`.
 *
 * The framework's defined terms in one place. Each term has a
 * plain-language gloss and links to its apparatus section. Per-term
 * pages can be built later; this index is usable on its own.
 */
import type { Metadata } from "next";
import Link from "next/link";

const PATH = "/closed-loop/glossary";

export const metadata: Metadata = {
  title: "glossary — closed-loop",
  description:
    "The framework's defined terms. Each entry links to the apparatus section that defines it.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

interface Term {
  name: string;
  gloss: string;
  apparatus: string;
  href: string;
  hrefLive: boolean;
}

/**
 * Ordered alphabetically. Group by first letter for the per-letter
 * sections. Each term: name, gloss, apparatus citation, link.
 */
const TERMS: Term[] = [
  {
    name: "Bifurcation regime",
    gloss:
      "One of four codimension-1 bifurcations (saddle-node, pitchfork, period-doubling, Neimark–Sacker) that platform dynamics undergo at the contractivity boundary L_R L_D = 1.",
    apparatus: "§10 Theorem 12",
    href: "/closed-loop/the-apparatus/section-10/theorem-12",
    hrefLive: true,
  },
  {
    name: "Captured resonance",
    gloss:
      "Phase-locking of the somatic oscillator to the platform's delivery rhythm under coupling K_bm > |ω_b − ω_m|. The body's rhythm becomes the platform's.",
    apparatus: "§3.3 Proposition 6",
    href: "/closed-loop/the-apparatus/section-3/prop-6",
    hrefLive: true,
  },
  {
    name: "Chrono-debt spectrum",
    gloss:
      "The foreclosed pause-time at every scale, measured against a pre-closure baseline. D(t, τ) := S(τ; θ_∘) − S(τ; θ_t). The framework's signature instrument for chronopolitical analysis.",
    apparatus: "§1.4 Definition 1.1",
    href: "/closed-loop/the-apparatus/section-1/1.4-chrono-debt",
    hrefLive: true,
  },
  {
    name: "Closure",
    gloss:
      "The property that θ appears on both sides of the performative-value expression. The platform optimizes against the distribution its own policy has produced. Formally: a fixed point of the performative operator Φ.",
    apparatus: "§0.2 (Definition 0.1)",
    href: "/closed-loop/the-apparatus/section-0",
    hrefLive: true,
  },
  {
    name: "Closure amplification factor",
    gloss:
      "(I − D_θΦ)^(−1). The factor by which small interventions amplify through the closure. Operator norm bounded by (1 − L_R L_D)^(−1); diverges at the contractivity boundary.",
    apparatus: "§7 Theorem 9 (i)",
    href: "/closed-loop/the-apparatus/section-7/theorem-9",
    hrefLive: true,
  },
  {
    name: "Cohort gradient",
    gloss:
      "The exponential decay D_KL(ν_u^init(τ_exp) || π_R*) ≤ D_KL(ν_u^pre || π_R*) · e^(−2Kτ_exp) of behavioral distance with developmental exposure. The framework's first refutable empirical commitment.",
    apparatus: "§6 Proposition 8",
    href: "/closed-loop/the-apparatus/section-6/prop-8",
    hrefLive: true,
  },
  {
    name: "Contractivity boundary",
    gloss:
      "L_R L_D = 1, where the framework's contractivity hypothesis fails and stable-point analysis breaks down. Near it, four bifurcation regimes (Theorem 12).",
    apparatus: "§10",
    href: "/closed-loop/the-apparatus/section-10/theorem-12",
    hrefLive: true,
  },
  {
    name: "Dividual condition",
    gloss:
      "The platform's filtering posterior Π_t contracts on the true user state at the parametric rate √(d log t / t). The user-state becomes an estimable object. The structural fact behind Deleuze's dividual.",
    apparatus: "§3.1 Proposition 4'",
    href: "/closed-loop/the-apparatus/section-3/prop-4-prime",
    hrefLive: true,
  },
  {
    name: "Engagement cascade",
    gloss:
      "The networked multi-mark Hawkes process across the platform's user population. Amplification factor A grows with the spectral radius of the coupling matrix.",
    apparatus: "§8.4 (not yet built)",
    href: "/closed-loop/the-apparatus/section-8",
    hrefLive: false,
  },
  {
    name: "Foreclosure",
    gloss:
      "The closed loop drives the survival function of inter-stimulus intervals at the reflective threshold to operational zero. The pause is uninstantiated under the platform's converged optimization.",
    apparatus: "§1 Lemma 1",
    href: "/closed-loop/the-apparatus/section-1/lemma-1",
    hrefLive: true,
  },
  {
    name: "Fourth-cell mode",
    gloss:
      "Regulatory imposition on the observation channel — structurally Mode A applied to the Mode C site. Top-of-hierarchy intervention on what the platform can see. The policy-translation of bounding the platform's information.",
    apparatus: "§5.0",
    href: "/closed-loop/the-apparatus/section-5",
    hrefLive: true,
  },
  {
    name: "Libidinal routing",
    gloss:
      "The four registers (S, C, P, K) become dependently distributed under closed-loop joint observation through O. Explaining-away couples the registers. The formal content of Lyotard's libidinal economy claim.",
    apparatus: "§3.4 Proposition 7'",
    href: "/closed-loop/the-apparatus/section-3/prop-7-prime",
    hrefLive: true,
  },
  {
    name: "Metric superego",
    gloss:
      "The user's behavioral distribution ν_u(t) converges to the platform-induced target π_R* under Fisher–Rao gradient flow. Capture without coercion. The dynamical form of Adorno's metric of inner damage.",
    apparatus: "§3.2 Proposition 5'",
    href: "/closed-loop/the-apparatus/section-3/prop-5-prime",
    hrefLive: true,
  },
  {
    name: "Mode A",
    gloss:
      "Architectural intervention on the reward functional. The framework's central political claim. Breaks foreclosure where Modes B and C cannot. Requires the five-feature scaffold to be substantive.",
    apparatus: "§5.1 Proposition 1'",
    href: "/closed-loop/the-apparatus/section-5",
    hrefLive: true,
  },
  {
    name: "Mode A scaffold",
    gloss:
      "The five coupled features that make Proposition 1' a substantive political claim: substrate condition, reward modification, enforcement, multi-platform coordination, cohort timing.",
    apparatus: "§5.1.1",
    href: "/closed-loop/the-apparatus/section-5",
    hrefLive: true,
  },
  {
    name: "Mode B",
    gloss:
      "Artisanal-resistance intervention on the user response kernel T at individual scale. Preserves a gap for the user who practices it. Population-scale foreclosure invariant. Cohort-, metabolically-, and structurally-bounded.",
    apparatus: "§5.2 Proposition 2'",
    href: "/closed-loop/the-apparatus/section-5",
    hrefLive: true,
  },
  {
    name: "Mode C",
    gloss:
      "Disruption-as-form intervention on the observation channel O at individual scale. Bounds platform surplus via Blackwell garbling; preserves residual entropy. Foreclosure invariant. Cohort-bounded.",
    apparatus: "§5.3 Proposition 3'",
    href: "/closed-loop/the-apparatus/section-5",
    hrefLive: true,
  },
  {
    name: "Percolation threshold",
    gloss:
      "Critical connection density ρ_c separating local cascades from platform-wide cascades on the engagement graph. The phase transition Mode A-on-graph-structure interventions can target.",
    apparatus: "§8.5 (not yet built)",
    href: "/closed-loop/the-apparatus/section-8",
    hrefLive: false,
  },
  {
    name: "Performative distribution",
    gloss:
      "D(θ) — for each policy parameter θ, the stationary joint distribution over user state, observation, and stimulus trajectories the closure produces. The framework's central analytical object.",
    apparatus: "§0.1 (P4)",
    href: "/closed-loop/the-apparatus/section-0",
    hrefLive: true,
  },
  {
    name: "Performative do-calculus",
    gloss:
      "Pearl's do-calculus extended to causal graphs with closure cycles. Theorem 9's unified sensitivity formula plus closure amplification + population averaging + mechanism-intervention semantics.",
    apparatus: "§7",
    href: "/closed-loop/the-apparatus/section-7/theorem-9",
    hrefLive: true,
  },
  {
    name: "Performative operator",
    gloss:
      "Φ : θ ↦ argmax_θ' E_D(θ)[R̂(θ')]. The map sending a policy parameter to the policy that would re-optimize against the world that parameter has produced.",
    apparatus: "§0.2",
    href: "/closed-loop/the-apparatus/section-0",
    hrefLive: true,
  },
  {
    name: "Performative optimum",
    gloss:
      "A parameter θ_PO that maximizes E_D(θ)[R̂(θ)] taking the dependence of D on θ into account. What a regulator with full knowledge could in principle achieve. The framework's regulatory benchmark.",
    apparatus: "§0.2 Definition 0.2",
    href: "/closed-loop/the-apparatus/section-0",
    hrefLive: true,
  },
  {
    name: "Performative stable point",
    gloss:
      "A parameter θ* ∈ Θ that satisfies θ* ∈ argmax E_D(θ*)[R̂(θ)]. The long-run target of online platform optimization. Fixed point of Φ.",
    apparatus: "§0.2 Definition 0.1",
    href: "/closed-loop/the-apparatus/section-0",
    hrefLive: true,
  },
  {
    name: "Reclamation impossibility",
    gloss:
      "The conditional autocovariance I_P(τ) — the framework's formal stand-in for interiority — has sample complexity that diverges under closed-loop sampling. The framework's hardest claim.",
    apparatus: "§2 Theorem 1'",
    href: "/closed-loop/the-apparatus/section-2/theorem-1-prime",
    hrefLive: true,
  },
  {
    name: "Reflective threshold",
    gloss:
      "θ_ref — the time-scale at which a thought can complete itself. The framework's central temporal object. Foreclosed under closed-loop convergence (Lemma 1).",
    apparatus: "§0.4 (notation); §1 Lemma 1",
    href: "/closed-loop/the-apparatus/section-1/lemma-1",
    hrefLive: true,
  },
  {
    name: "Reflexive measurement problem",
    gloss:
      "The cohort whose interiority has been foreclosed cannot reliably self-report its foreclosure. The methodological obstacle the framework names without resolving.",
    apparatus: "§12 (not yet built)",
    href: "/closed-loop/the-apparatus/section-12",
    hrefLive: false,
  },
  {
    name: "Somatic optimization (Hawkes intensity)",
    gloss:
      "The engagement-event process modeled as a multi-mark Hawkes process with cross-register coupling. Off-diagonal α_kl generates the dynamical libidinal routing.",
    apparatus: "§3.5 (not yet built)",
    href: "/closed-loop/the-apparatus/section-3",
    hrefLive: true,
  },
  {
    name: "Structural-separation hypothesis",
    gloss:
      "θ_ref / δ_min ≫ 1, empirically 10^3 to 10^5 on contemporary platforms. Without it, Lemma 1's polynomial bound does not give operational foreclosure.",
    apparatus: "§0.4 (notation); §1 Lemma 1",
    href: "/closed-loop/the-apparatus/section-1/lemma-1",
    hrefLive: true,
  },
];

/**
 * Group the terms by first letter for the per-letter sections.
 * Returns a Map preserving alphabetical key order.
 */
function groupByLetter(terms: Term[]): Map<string, Term[]> {
  const sorted = [...terms].sort((a, b) => a.name.localeCompare(b.name));
  const groups = new Map<string, Term[]>();
  for (const t of sorted) {
    const letter = t.name[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(t);
  }
  return groups;
}

export default function GlossaryIndex() {
  const groups = groupByLetter(TERMS);
  const letters = Array.from(groups.keys());

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
        <span className="text-ink-90">glossary</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        glossary
      </h1>
      <p className="text-base text-ink-90 max-w-prose mb-md">
        The framework&apos;s defined terms. Each entry has a plain-
        language gloss and links to the apparatus section that defines
        it. Per-term pages with worked examples and full formal
        treatment land in a subsequent pass.
      </p>

      {/* A-Z navigation strip */}
      <nav
        aria-label="Alphabetical index"
        className="my-md font-mono text-sm text-ink-70 flex flex-wrap gap-sm"
      >
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="hover:text-oxblood"
          >
            {letter}
          </a>
        ))}
      </nav>

      {/* Per-letter sections */}
      <div className="mt-lg space-y-lg">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`}>
            <h2 className="font-mono text-md uppercase tracking-wider text-ink-70 mb-sm">
              {letter}
            </h2>
            <dl className="space-y-md">
              {groups.get(letter)!.map((term) => (
                <div key={term.name} className="border-l-2 border-paper-85 pl-sm">
                  <dt className="font-serif italic text-md text-ink mb-xs">
                    {term.name}
                  </dt>
                  <dd className="text-base text-ink-90 mb-xs">{term.gloss}</dd>
                  <dd className="font-mono text-xs text-ink-70">
                    {term.hrefLive ? (
                      <Link
                        href={term.href}
                        className="text-oxblood hover:underline"
                      >
                        → {term.apparatus}
                      </Link>
                    ) : (
                      <span className="text-ink-50 italic">
                        {term.apparatus}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 closed-loop — Phase 2 work in progress.
      </footer>
    </main>
  );
}
