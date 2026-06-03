import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "Phase V — Peak Productivity & Reproductive Transfer",
  description:
    "OHCOSE Phase V — Peak Productivity & Reproductive Transfer (31–45 yrs). Career consolidation. Reproductive labor. Civic anchoring. The midlife affect regulation industry.",
  alternates: { canonical: "/ohcose/v-peak-productivity" },
};

const SUB_PROTOCOLS = [
  { slug: "consolidation", code: "5.1", name: "Consolidation Overview", summary: "The stable productive subject. Career, household, and civic identity as a single architecture." },
  { slug: "economic-zenith", code: "5.2", name: "Economic Zenith", summary: "Mid-career soul-capture. The cultivation of productive identification. The performance review." },
  { slug: "family-formation", code: "5.3", name: "Family Formation & Reproductive Labor", summary: "Household construction. The cost-of-raising privatized. The unpaid reproductive shift." },
  { slug: "civic-anchoring", code: "5.4", name: "Civic Anchoring", summary: "Roots, routines, and the local. Volunteer slates and the PTA. The grassroots layer of compliance." },
  { slug: "midlife-affect", code: "5.5", name: "Midlife Affect Regulation", summary: "The crisis industry. Commodified self-care. Therapy, retreat, supplement, certification." },
  { slug: "decline-foreshadowing", code: "5.6", name: "Foreshadowing Managed Decline", summary: "The mid-forties handoff. Wellness pivots. The Office's smooth transition to Phase VI." },
];

export default function PhaseVPeakProductivity() {
  return (
    <PageFrame pageNum="V" secCode="OHCOSE / LR / Phase V">
      <nav className="mb-md">
        <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>← schedule of phases</Link>
      </nav>
      <PhaseBanner code="Phase V" title="Peak Productivity & Reproductive Transfer" qualifier="31–45 yrs" />
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div className="font-mono uppercase mb-md" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Phase Statement</div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase V opens at the age-thirty boundary or upon partnership
            consolidation, whichever came first under Phase IV. It
            closes at the age-forty-five boundary. The Phase-V mandate
            is the harvest. Career attention is at maximum; household
            construction is in progress; reproductive labor is taking
            place; civic anchoring is stabilizing; consumer
            obligations are being serviced. The Office's surplus
            extraction from the Phase-V subject is the highest of the
            lifecycle.
          </p>
          <p>
            The work proceeds along six sub-protocols. Phase-V subjects
            often describe themselves as "in the thick of it." The
            Office shares that view.
          </p>
        </div>
      </section>
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div className="font-mono uppercase mb-md text-center" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Schedule of Sub-Protocols</div>
        <ol>
          {SUB_PROTOCOLS.map((s) => (
            <li key={s.slug} className="py-sm flex items-baseline gap-md" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <Link href={`/ohcose/v-peak-productivity/${s.slug}`} className="contents group">
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
          All Phase V sub-protocols are published.<br />
          Phase VI (Consolidation &amp; Role Reversal, 46–65 yrs) opens at the age-46 boundary.
        </p>
      </section>
    </PageFrame>
  );
}
