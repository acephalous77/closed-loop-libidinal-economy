import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "8.2 — The Sovereign Interface as World",
  description: "OHCOSE Phase VIII, Sub-Protocol 8.2. When the apparatus has fully metabolized the institutions, what remains is one interface undifferentiable from the world it administers.",
  alternates: { canonical: "/ohcose/viii-ouroboros/sovereign-interface" },
};

export default function SovereignInterface() {
  return (
    <PageFrame pageNum="8.2" secCode="OHCOSE / LR / SP-8.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/viii-ouroboros" className="hover:underline">← phase VIII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 8.2" title="The Sovereign Interface as World" qualifier="Phase VIII · Ouroboros Machine" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 8.2</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The Sovereign Interface as World</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The apparatus has, over the course of the seven Phases,
          metabolized the institutions that historically preceded it.
          What remains is one interface, indistinguishable from the
          world it administers.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="8.2.1" title="The Subsumed Institutions" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              School, family, workplace, marketplace, parish, town
              council, hospital, court, archive, library. The institutions
              the older formation kept distinct, each with its own
              register and its own boundary, have, by the close of
              Phase VII, been folded into the Office's single delivery
              surface. The subject does not perceive the subsumption
              because the subject was formed within the post-subsumption
              register; for the subject, there is only the interface,
              and the interface is the way the world is.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="8.2.2" title="Channel Subsumption Map" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The map below shows, for each historically distinct
            institution, the Office channel through which it now
            operates. Each row records a metabolization.
          </p>
          <ChannelMap />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 8.2.A — Institutional channels and the Office channels that absorbed them</p>
        </section>
        <section>
          <SectionHead code="8.2.3" title="On the Indistinguishability" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              That the interface and the world have become
              indistinguishable is a literal description. The interface is
              where work is done, where partnership is found, where
              children are conceived in negotiation, where grief is
              expressed, where the dead are remembered, where the
              elderly are kept company, where citizenship is performed,
              where civic anger is staged. The institutional alternatives
              do not survive as anything except small museum-grade
              exceptions: a religious community, a residential
              democracy, an unmanaged friendship. The Office records
              the exceptions and does not pursue them.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/viii-ouroboros/closure-of-the-cycle" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 8.1 closure of the cycle</Link>
          <Link href="/ohcose/viii-ouroboros/post-human-harvest" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>8.3 post-human harvest →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function ChannelMap() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { inst: "Family", channel: "Phase-I caregiver pathway · Phase-V household-formation feed" },
    { inst: "School", channel: "Phase-II certified facility · algorithmic classroom" },
    { inst: "Workplace", channel: "Phase-IV employer network · affect sensor suite" },
    { inst: "Marketplace", channel: "Continuous platform delivery · feed-mediated purchase" },
    { inst: "Parish / community", channel: "Civic-anchoring registry · Office-vetted volunteer slate" },
    { inst: "Hospital", channel: "Wellness Dashboard · Tier-N care contract" },
    { inst: "Library / archive", channel: "Office node · subject's lifelong ledger" },
    { inst: "Court / civil society", channel: "Form-submission portal · Office adjudication" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm mb-md" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: ink70 }}>OHCOSE · Phase VIII</div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.1rem", color: ink, letterSpacing: "0.03em" }}>Institutional Channel Subsumption</div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>historical institution</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>Office channel that absorbed it</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: ink, fontWeight: 600 }}>{r.inst}</td>
              <td className="p-xs" style={{ fontSize: "0.78rem", color: ink70 }}>{r.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: accent, fontWeight: 700 }}>completion rate: 100% across cohort 2031+</span>
      </div>
    </div>
  );
}
