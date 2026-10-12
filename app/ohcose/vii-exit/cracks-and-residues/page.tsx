import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.5 — Cracks & Residues",
  description: "OHCOSE Phase VII, Sub-Protocol 7.5. Subjects who refuse closure. The unmanageable mourner. The residue the apparatus cannot smooth.",
  alternates: { canonical: "/ohcose/vii-exit/cracks-and-residues" },
};

export default function CracksAndResidues() {
  return (
    <PageFrame pageNum="7.5" secCode="OHCOSE / LR / SP-7.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.5" title="Cracks & Residues" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.5</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Cracks &amp; Residues</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The cases that do not close cleanly. The subject who refuses
          the standard exit protocol. The bereaved who does not move on.
          The residue the Office records as anomaly and partly absorbs.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.5.1" title="The Standard Anomaly Profile" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Across the cohort the Office expects an anomaly rate of
              roughly 3.7%: subjects who refuse the recommended
              eldercare-tier upgrade, subjects who decline standard
              end-of-cycle scheduling, bereaved partners who do not
              transition into Memorial Capitalism's grief register.
              The anomaly rate has been stable for three cohort
              decades. The Office considers it part of normal
              throughput.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.5.2" title="Anomaly Register" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office maintains an Anomaly Register for tracking
            subjects whose late-Phase behavior falls outside the
            published bands. The extract below shows the standard
            classifications.
          </p>
          <AnomalyRegister />
          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Tbl. 7.5.A</span> — Phase-VII Anomaly Register (extract, rev. 27.4)
            </p>
        </section>
        <section>
          <SectionHead code="7.5.3" title="On Residues" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In the Office's accounting, a residue is an expected
              remainder: the portion of the subject's affective signal
              its instruments could not convert. The Office's published guidance is
              that residues are inevitable, are recorded but not
              actively pursued, and are expected to settle within two
              cohort generations as the residue-producer ages out and
              the survivors normalize to the published register.
            </p>
            <p>
              The Office notes, as part of the standard Phase-VII
              after-action, that some residues do not settle. The note
              is small. The next paragraph of the after-action returns
              to the throughput statistics.
            </p>
          </div>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit/eldercare-markets" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 7.4 eldercare markets</Link>
          <Link href="/ohcose/vii-exit/lifecycle-closure" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>7.6 lifecycle closure →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function AnomalyRegister() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { code: "A-01", pattern: "Refusal of Tier-3 transfer", action: "Soft outreach · quarterly review" },
    { code: "A-02", pattern: "Sustained mourning > 14 mo", action: "Bereavement Coaching Pathway" },
    { code: "A-03", pattern: "Unscheduled end-of-cycle declaration", action: "Form 27-Z · advance-directive review" },
    { code: "A-04", pattern: "Estate-instrument refusal", action: "Legacy Counselor referral" },
    { code: "A-05", pattern: "Continued political activity post-72", action: "Note on file · no intervention" },
    { code: "A-06", pattern: "Public off-script statement", action: "Communications-team review · soft correction" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase VII</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Anomaly Register (extract)</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>cohort rate</div>
          <div style={{ fontSize: "1.2rem", color: accent, fontWeight: 700 }}>3.7 %</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>code</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>pattern</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>standard action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.code}</td>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: ink }}>{r.pattern}</td>
              <td className="p-xs" style={{ fontSize: "0.78rem", color: ink70 }}>{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
