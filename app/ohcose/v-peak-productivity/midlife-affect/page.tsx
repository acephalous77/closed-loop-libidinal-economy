import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.5 — Midlife Affect Regulation",
  description: "OHCOSE Phase V, Sub-Protocol 5.5. The midlife crisis industry. Commodified self-care. Therapy, retreat, supplement, certification.",
  alternates: { canonical: "/ohcose/v-peak-productivity/midlife-affect" },
};

export default function MidlifeAffect() {
  return (
    <PageFrame pageNum="5.5" secCode="OHCOSE / LR / SP-5.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.5" title="Midlife Affect Regulation" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.5</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Midlife Affect Regulation</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The crisis industry. Commodified self-care. The Office's
          partner-channel offerings for the Phase-V subject who finds
          their consolidation occasionally claustrophobic.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.5.1" title="The Crisis as Market" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-V subject occasionally experiences a sense
              that something is missing. The Office's response is the
              full midlife affect regulation market: therapy
              (Office-certified), retreat (Office-certified weekend
              packages), supplements (continuous prescription channels),
              certification programs (continuing-education credit toward
              an evening Master's), the personal coach, the men's-group,
              the breathwork class. Each is offered at an appropriate
              price band. Most Phase-V subjects sample one or two.
              Most return refreshed to the consolidation.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.5.2" title="The Industry Catalog" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's standard midlife regulation catalog, an
            extract.
          </p>
          <CrisisCatalogue />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 5.5.A — Phase-V Affect Regulation Catalog (extract)</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity/civic-anchoring" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 5.4 civic anchoring</Link>
          <Link href="/ohcose/v-peak-productivity/decline-foreshadowing" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>5.6 decline foreshadowing →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function CrisisCatalogue() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const offerings = [
    { code: "MR-A", name: "Talk Therapy (Standard)", price: "180 SU / session", duration: "6–24 month course" },
    { code: "MR-B", name: "Wellness Retreat (Weekend)", price: "2,800 SU", duration: "3 days / 2 nights" },
    { code: "MR-C", name: "Daily Supplement Stack", price: "120 SU / month", duration: "ongoing subscription" },
    { code: "MR-D", name: "Personal Coach", price: "450 SU / month", duration: "12-month engagement" },
    { code: "MR-E", name: "Men's Group / Women's Circle", price: "60 SU / session", duration: "weekly" },
    { code: "MR-F", name: "Evening MBA / Certificate", price: "26,000 SU", duration: "24-month program" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>code</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>offering</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>price band</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>duration</th>
          </tr>
        </thead>
        <tbody>
          {offerings.map((o) => (
            <tr key={o.code} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs uppercase" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>{o.code}</td>
              <td className="p-xs" style={{ fontSize: "0.8rem", color: ink, fontWeight: 600 }}>{o.name}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{o.price}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{o.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          full catalog: Annex 22 · partner-channel revenue share: standard
        </span>
      </div>
    </div>
  );
}
