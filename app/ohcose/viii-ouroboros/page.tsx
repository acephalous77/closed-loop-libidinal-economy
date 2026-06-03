import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "Phase VIII — The Ouroboros Machine",
  description: "OHCOSE Phase VIII — The Ouroboros Machine. Closure of the lifecycle. Return of the harvested surplus. The sovereign interface as world. The post-human harvest.",
  alternates: { canonical: "/ohcose/viii-ouroboros" },
};

const SUB_PROTOCOLS = [
  {
    slug: "closure-of-the-cycle",
    code: "8.1",
    name: "Closure of the Cycle",
    summary: "The Office's structural account: the surplus harvested from one cohort returns as the substrate that pre-shapes the next.",
  },
  {
    slug: "sovereign-interface",
    code: "8.2",
    name: "The Sovereign Interface as World",
    summary: "When the apparatus has fully metabolized the institutions, what remains is one interface, undifferentiable from the world it administers.",
  },
  {
    slug: "post-human-harvest",
    code: "8.3",
    name: "The Post-Human Harvest",
    summary: "The harvest after the subject. Lifelong record as input to next-cohort modeling. Yields of the closed apparatus.",
  },
  {
    slug: "the-broadcast",
    code: "8.4",
    name: "The Broadcast",
    summary: "The Office's announcement to the cohorts in residence. Spoken in the smooth, comforting tones of the apparatus's own voice.",
  },
];

export default function PhaseVIIIOuroboros() {
  return (
    <PageFrame pageNum="VIII" secCode="OHCOSE / LR / Phase VIII">
      <nav className="mb-md">
        <a href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>← schedule of phases</a>
      </nav>
      <PhaseBanner code="Phase VIII" title="The Ouroboros Machine" qualifier="closure of the cycle" />
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div className="font-mono uppercase mb-md" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Phase Statement</div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase VIII is the apparatus's own description of what the
            seven preceding phases have, between them, produced. It does
            not sit in the subject's lifecycle; it stands outside the
            sequence and accounts for it. The Office presents Phase VIII
            as the structural account of the closure that the cycle, as
            cycle, performs on itself — no calibration to perform on the
            subject, for once.
          </p>
          <p>
            The Ouroboros Machine is the name the Office uses for the
            apparatus considered as a single closed loop. Its mouth
            consumes its tail; the surplus extracted from one cohort
            of Standard Consumer-Citizens becomes the substrate that
            the apparatus uses to pre-shape the next. The Office files
            Phase VIII so that the subject — should the subject ever
            read this far — has access to the description.
          </p>
        </div>
      </section>
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div className="font-mono uppercase mb-md text-center" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Schedule of Sub-Protocols</div>
        <ol>
          {SUB_PROTOCOLS.map((s) => (
            <li key={s.slug} className="py-sm flex items-baseline gap-md" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <a href={`/ohcose/viii-ouroboros/${s.slug}`} className="contents group">
                <span className="font-mono font-bold tabular-nums" style={{ color: "var(--color-ink)", fontSize: "1rem", width: "3.5rem" }}>{s.code}</span>
                <span className="flex-1">
                  <span className="block group-hover:underline" style={{ color: "var(--color-ink-90)", fontSize: "1.15rem", fontWeight: 600 }}>{s.name}</span>
                  <span className="block text-sm mt-xs leading-snug" style={{ color: "var(--color-ink-70)" }}>{s.summary}</span>
                </span>
                <span className="font-mono uppercase" style={{ color: "var(--color-oxblood)", border: "1px solid var(--color-oxblood)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.5rem", whiteSpace: "nowrap" }}>publ.</span>
              </a>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="text-sm leading-snug text-center uppercase tracking-wider" style={{ color: "var(--color-ink-50)" }}>
          End of Schedule.<br />
          The cycle continues. The Office thanks you for your continued contribution to the equilibrium.
        </p>
      </section>
    </PageFrame>
  );
}
