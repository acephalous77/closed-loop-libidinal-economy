/**
 * The apparatus index — `/closed-loop/the-apparatus`.
 *
 * Lists all 13 apparatus sections (§0 through §12) with their current
 * v2 build status. Built pages link through; in-progress pages render
 * as plain text with a note.
 *
 * The apparatus is the formal companion to the closed-loop framework.
 * Source: publishing-pipeline/manuscripts/closed-loop-complete/source/
 * 20_part_iv_formal_apparatus.md.
 */
import type { Metadata } from "next";
import Link from "next/link";

const PATH = "/closed-loop/the-apparatus";

export const metadata: Metadata = {
  title: "the apparatus — closed-loop",
  description:
    "The formal apparatus. 13 sections, 15 formal results, 6 measurable instruments, 3 intervention modes. The companion to the framework's prose.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false }, // v2 work-in-progress
};

interface Section {
  no: string;
  title: string;
  subtitle: string;
  status: "live" | "in-progress" | "not-started";
  href?: string;
  results?: { name: string; href: string; status: "live" | "not-started" }[];
}

const SECTIONS: Section[] = [
  {
    no: "0",
    title: "The spine",
    subtitle:
      "The performative setup (P1)–(P5), the closure as fixed point of Φ, the three axiom groups",
    status: "live",
    href: "/closed-loop/the-apparatus/section-0",
  },
  {
    no: "1",
    title: "Foreclosure",
    subtitle:
      "The closed loop drives the survival function at the reflective threshold to operational zero",
    status: "in-progress",
    results: [
      {
        name: "Lemma 1 (foreclosure of the no-stimulus window)",
        href: "/closed-loop/the-apparatus/section-1/lemma-1",
        status: "live",
      },
      {
        name: "Definition 1.1 (chrono-debt spectrum)",
        href: "/closed-loop/the-apparatus/section-1/1.4-chrono-debt",
        status: "live",
      },
    ],
  },
  {
    no: "2",
    title: "Reclamation as learnability",
    subtitle: "Theorem 1' — sample-complexity divergence under closed-loop sampling",
    status: "in-progress",
    results: [
      {
        name: "Theorem 1' (reclamation as sample-complexity divergence)",
        href: "/closed-loop/the-apparatus/section-2/theorem-1-prime",
        status: "live",
      },
    ],
  },
  {
    no: "3",
    title: "Auxiliary structural results",
    subtitle:
      "Propositions 4'–7': dividual condition, metric superego, captured resonance, libidinal routing",
    status: "in-progress",
    results: [
      {
        name: "Proposition 4' (dividual via posterior contraction)",
        href: "/closed-loop/the-apparatus/section-3/prop-4-prime",
        status: "live",
      },
      {
        name: "Proposition 5' (metric superego)",
        href: "/closed-loop/the-apparatus/section-3/prop-5-prime",
        status: "live",
      },
      {
        name: "Proposition 6 (somatic phase-locking, Kuramoto)",
        href: "/closed-loop/the-apparatus/section-3/prop-6",
        status: "not-started",
      },
      {
        name: "Proposition 7' (libidinal routing)",
        href: "/closed-loop/the-apparatus/section-3/prop-7-prime",
        status: "not-started",
      },
    ],
  },
  {
    no: "4",
    title: "Supporting lemma",
    subtitle: "Lemma 2 — the technical scaffold for §5 and §6",
    status: "not-started",
  },
  {
    no: "5",
    title: "Intervention modes",
    subtitle:
      "Propositions 1'–3' on Modes A/B/C, the 2×2 site×source taxonomy, the Mode A scaffold's five features",
    status: "not-started",
  },
  {
    no: "6",
    title: "Cohort gradient",
    subtitle:
      "Proposition 8 — formal derivation of the developmental decay D_KL · e^(−2Kτ)",
    status: "in-progress",
    results: [
      {
        name: "Proposition 8 (cohort gradient)",
        href: "/closed-loop/the-apparatus/section-6/prop-8",
        status: "live",
      },
    ],
  },
  {
    no: "7",
    title: "Performative do-calculus",
    subtitle:
      "Theorem 9 — the unified sensitivity formula. Closure-amplification (I − D_θ Φ)^(−1)",
    status: "in-progress",
    results: [
      {
        name: "Theorem 9 (causal sensitivity in performative systems)",
        href: "/closed-loop/the-apparatus/section-7/theorem-9",
        status: "live",
      },
    ],
  },
  {
    no: "8",
    title: "Network coupling",
    subtitle:
      "Theorem 10 + corollaries. Engagement cascade, percolation threshold, cohort graph-amplification",
    status: "not-started",
  },
  {
    no: "9",
    title: "Rate-of-foreclosure refinement",
    subtitle:
      "Theorem 11 — intermediate tail regimes between polynomial and exponential",
    status: "not-started",
  },
  {
    no: "10",
    title: "Crisis-boundary classification",
    subtitle:
      "Theorem 12 — four bifurcation regimes at the contractivity boundary",
    status: "in-progress",
    results: [
      {
        name: "Theorem 12 (crisis-boundary bifurcation classification)",
        href: "/closed-loop/the-apparatus/section-10/theorem-12",
        status: "live",
      },
    ],
  },
  {
    no: "11",
    title: "Synthesis",
    subtitle: "What the apparatus delivers; what it does not yet deliver",
    status: "not-started",
  },
  {
    no: "12",
    title: "Empirical calibration",
    subtitle:
      "Per-result calibration hooks; the reflexive measurement problem",
    status: "not-started",
  },
];

function StatusLabel({ status }: { status: Section["status"] }) {
  const text = status === "live"
    ? "live"
    : status === "in-progress"
    ? "in progress"
    : "not started";
  const color =
    status === "live"
      ? "text-oxblood"
      : status === "in-progress"
      ? "text-ink-90"
      : "text-ink-50";
  return (
    <span className={`font-mono text-xs uppercase tracking-wider ${color}`}>
      {text}
    </span>
  );
}

export default function ApparatusIndex() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[42rem] mx-auto">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-90">the apparatus</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        the apparatus
      </h1>
      <p className="text-base text-ink-90 max-w-prose mb-md">
        The formal companion to the framework&apos;s prose. Thirteen
        sections; fifteen formal results; six measurable instruments;
        three intervention modes in a 2×2 causal taxonomy. The
        apparatus is the spine the prose mirrors at every load-bearing
        claim.
      </p>
      <p className="text-base text-ink-70 italic max-w-prose mb-lg">
        The v2 rebuild is in progress. Sections marked &ldquo;live&rdquo;
        are rendered; the rest are pending. The full apparatus markdown
        lives in the manuscript pipeline at{" "}
        <code className="font-mono text-sm">
          publishing-pipeline/manuscripts/closed-loop-complete/source/
          20_part_iv_formal_apparatus.md
        </code>.
      </p>

      <ol className="space-y-md">
        {SECTIONS.map((section) => (
          <li key={section.no} className="border-l-2 border-paper-85 pl-sm">
            <div className="flex items-baseline gap-sm mb-xs">
              <span className="font-mono text-sm text-ink-70">
                §{section.no}
              </span>
              <h2 className="font-serif text-md text-ink m-0">
                {section.href ? (
                  <Link href={section.href} className="text-oxblood hover:underline">
                    {section.title}
                  </Link>
                ) : (
                  section.title
                )}
              </h2>
              <StatusLabel status={section.status} />
            </div>
            <p className="text-base text-ink-90 mb-xs">
              {section.subtitle}
            </p>
            {section.results && (
              <ul className="mt-xs space-y-xs ml-md">
                {section.results.map((r) => (
                  <li key={r.href} className="flex items-baseline gap-sm">
                    {r.status === "live" ? (
                      <Link
                        href={r.href}
                        className="text-oxblood hover:underline text-sm"
                      >
                        {r.name}
                      </Link>
                    ) : (
                      <span className="text-ink-50 text-sm italic">
                        {r.name}
                      </span>
                    )}
                    <StatusLabel status={r.status} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
