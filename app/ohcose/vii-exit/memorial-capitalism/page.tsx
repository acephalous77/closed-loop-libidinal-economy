import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.3 — Memorial Capitalism",
  description: "OHCOSE Phase VII, Sub-Protocol 7.3. Monetized grief. The remembrance market. The data afterlife of the subject's C-ID.",
  alternates: { canonical: "/ohcose/vii-exit/memorial-capitalism" },
};

export default function MemorialCapitalism() {
  return (
    <PageFrame pageNum="7.3" secCode="OHCOSE / LR / SP-7.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.3" title="Memorial Capitalism" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.3</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Memorial Capitalism</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The market in remembrance. The Office's framing of grief as
          consumption. The subject's data afterlife and the
          partner-channel revenue it produces in perpetuity.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.3.1" title="The Remembrance Market" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Grief is a consumption category. The bereaved family is
              offered: the casket, the urn, the memorial service, the
              catered reception, the cemetery plot, the memorial
              landscape feature, the annual maintenance subscription,
              the in-memoriam donation directing-platform, the digital
              memorial subscription, the legacy-document package, the
              grief-counseling regimen, the genealogy-tree assembly
              service. Each is offered at a tier appropriate to the
              estate's drawdown remainder.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.3.2" title="The Data Afterlife" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The subject's C-ID does not die when the subject does.
              The C-ID transitions to a Data-Afterlife status under
              which the subject's lifetime behavioral record continues
              to be queryable by the Office's brand partners for the
              statutory ninety-nine fiscal years following biological
              exit. The record is anonymized for partner queries; the
              Office retains the linkage. The revenue accrues to the
              Phase-VII partner-channel pool.
            </p>
            <p>
              Survivors are offered the Data Afterlife Election (Form
              DC-7) at the ninety-day mark. Most elect Continuation.
              The Office presents Continuation as preserving the
              subject's memory.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.3.3" title="Memorial Catalog" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            A representative extract from the Office's certified
            memorial-product catalog.
          </p>
          <MemorialCatalogue />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 7.3.A — Phase-VII memorial catalog (extract)</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit/death-as-logistics" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 7.2 death as logistics</Link>
          <Link href="/ohcose/vii-exit/eldercare-markets" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>7.4 eldercare markets →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function MemorialCatalogue() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const items = [
    { code: "MEM-A", name: "Standard service package", price: "12,400 SU" },
    { code: "MEM-B", name: "Premium service + reception", price: "28,900 SU" },
    { code: "MEM-C", name: "Cemetery plot · double", price: "44,000 SU" },
    { code: "MEM-D", name: "Memorial landscape feature", price: "18,500 SU" },
    { code: "MEM-E", name: "Annual maintenance · perpetual", price: "1,400 SU / yr" },
    { code: "MEM-F", name: "Digital memorial (lifetime)", price: "3,200 SU" },
    { code: "MEM-G", name: "Genealogy + biographical doc", price: "9,800 SU" },
    { code: "MEM-H", name: "Data Afterlife Continuation", price: "free · revenue-share" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>code</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>offering</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.code} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs uppercase" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>{i.code}</td>
              <td className="p-xs" style={{ fontSize: "0.8rem", color: ink }}>{i.name}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.8rem", color: ink, fontWeight: 600 }}>{i.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md text-center">
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          full catalog: Annex 27 · cohort-median spend: 67,300 SU
        </span>
      </div>
    </div>
  );
}
