import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.4 — Civic Anchoring",
  description: "OHCOSE Phase V, Sub-Protocol 5.4. Putting down roots. The PTA, the slate. The grassroots layer of population stability.",
  alternates: { canonical: "/ohcose/v-peak-productivity/civic-anchoring" },
};

export default function CivicAnchoring() {
  return (
    <PageFrame pageNum="5.4" secCode="OHCOSE / LR / SP-5.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.4" title="Civic Anchoring" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.4</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Civic Anchoring</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Phase-V subject's deepening relation to place. The local,
          the routinized, the volunteer slate. The grassroots layer of
          population stability.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.4.1" title="The Roots" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-V subject puts down roots. The neighborhood,
              the school district, the local sports leagues, the
              place of worship, the trusted dentist, the regular
              restaurant, the weekly errand route. Each of these is
              a small thread that, accumulated, becomes the cabling
              that holds the subject in place. The Office records
              the accumulation as the Civic Anchoring Index.
            </p>
            <p>
              Subjects with high Civic Anchoring Indices are unlikely
              to leave. They are unlikely to change employers. They
              are unlikely to relocate. They are unlikely to
              radicalize. They are reliable. The Office values them
              accordingly.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.4.2" title="The Anchoring Inventory" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office maintains a standardized inventory of Phase-V
            anchoring channels. Each carries a weight; the composite
            yields the subject's Civic Anchoring Index.
          </p>
          <AnchoringInventory />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 5.4.A — Phase-V Civic Anchoring Inventory (rev. 11.2)</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity/family-formation" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 5.3 family formation</Link>
          <Link href="/ohcose/v-peak-productivity/midlife-affect" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>5.5 midlife affect →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function AnchoringInventory() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { channel: "school-district participation (PTA, volunteer)", weight: "0.18", note: "high stability" },
    { channel: "place-of-worship membership (active)", weight: "0.16", note: "intergenerational signal" },
    { channel: "local sports / youth-league involvement", weight: "0.12", note: "moderate" },
    { channel: "neighborhood-association engagement", weight: "0.11", note: "grassroots compliance" },
    { channel: "local political slate (vote / canvas)", weight: "0.10", note: "predictable" },
    { channel: "routinized local consumption (the regular spots)", weight: "0.09", note: "demographic signal" },
    { channel: "professional-association local chapter", weight: "0.08", note: "career-civic crossover" },
    { channel: "homeowner-association activity", weight: "0.16", note: "property-anchor lock-in" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink }}>Civic Anchoring Inventory</div>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>rev. 11.2 · weighted</div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>channel</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>weight</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.8rem", color: ink }}>{r.channel}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.weight}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
