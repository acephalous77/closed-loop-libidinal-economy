import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";
import { LifecycleStrip } from "../_components/LifecycleStrip";
import { IntakeHeader } from "../_components/IntakeHeader";

export const metadata: Metadata = {
  title: "Phase VII — Exit",
  description: "OHCOSE Phase VII — Exit (65+ yrs). Retirement as liminal economic phase. Death as logistics and ritual. Memorial capitalism. Eldercare markets. The end of the lifecycle arc.",
  alternates: { canonical: "/ohcose/vii-exit" },
};

const SUB_PROTOCOLS = [
  { slug: "liminal-retirement", code: "7.1", name: "Retirement as Liminal Economic Phase", summary: "The drawdown subject. Consumer continuity without productive role. The economy of unused time." },
  { slug: "death-as-logistics", code: "7.2", name: "Death as Logistics & Ritual", summary: "End-of-cycle scheduling. The standardized procedure. The Office's death-form portfolio." },
  { slug: "memorial-capitalism", code: "7.3", name: "Memorial Capitalism", summary: "Monetized grief. The remembrance market. The data afterlife of the subject's C-ID." },
  { slug: "eldercare-markets", code: "7.4", name: "The Eldercare & Legacy Markets", summary: "Care-tier comparison. The continuing-care-retirement-community. Legacy products." },
  { slug: "cracks-and-residues", code: "7.5", name: "Cracks & Residues", summary: "Subjects who refuse. The unmanageable mourner. The residue the system cannot smooth." },
  { slug: "lifecycle-closure", code: "7.6", name: "The End of the Lifecycle Arc", summary: "Final closure. The subject's surplus returned to the Office. Pointer to the Ouroboros Machine." },
];

export default function PhaseVIIExit() {
  return (
    <PageFrame pageNum="VII" secCode="OHCOSE / LR / Phase VII">
      <nav className="mb-md">
        <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>← schedule of phases</Link>
      </nav>
      <PhaseBanner code="Phase VII" title="Exit" qualifier="65+ yrs" />

      {/* Lifecycle strip — position in the eight-phase arc */}
      <LifecycleStrip current={7} />

      <IntakeHeader phase={7} roman="VII" name="Exit" span="65+ yrs" protocols={6} />
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div className="font-mono uppercase mb-md" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Phase Statement</div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase VII opens at statutory retirement and closes upon
            the subject's biological exit. The Phase-VII mandate is
            the management of the post-productive subject: the
            stewardship of their accumulated capital through standard
            drawdown schedules; the routing of their continuing
            consumption into Office-certified eldercare,
            entertainment, and memorial markets; and the smooth
            execution of their death as logistical procedure.
          </p>
          <p>
            Phase VII closes the standard lifecycle arc. The work the
            Office performed across the prior six Phases is
            completed in the seventh.
          </p>
        </div>
      </section>
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div className="font-mono uppercase mb-md text-center" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Schedule of Sub-Protocols</div>
        <ol>
          {SUB_PROTOCOLS.map((s) => (
            <li key={s.slug} className="py-sm flex items-baseline gap-md" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <Link href={`/ohcose/vii-exit/${s.slug}`} className="contents group">
                <span className="font-mono font-bold tabular-nums" style={{ color: "var(--color-ink)", fontSize: "1rem", width: "3.5rem" }}>{s.code}</span>
                <span className="flex-1">
                  <span className="block group-hover:underline" style={{ color: "var(--color-ink-90)", fontSize: "1.15rem", fontWeight: 600 }}>{s.name}</span>
                  <span className="block text-sm mt-xs leading-snug" style={{ color: "var(--color-ink-70)" }}>{s.summary}</span>
                </span>
                <span className="font-mono uppercase" style={{ color: "var(--color-oxblood)", border: "1px solid var(--color-oxblood)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.5rem", whiteSpace: "nowrap" }}>publ.</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="text-sm leading-snug text-center uppercase tracking-wider" style={{ color: "var(--color-ink-50)" }}>
          All Phase VII sub-protocols are published.<br />
          See Annex VIII: <Link href="/ohcose/viii-ouroboros" style={{ color: "var(--color-oxblood)", textDecoration: "underline" }}>The Ouroboros Machine</Link> · the closure of the cycle.
        </p>
      </section>
    </PageFrame>
  );
}
