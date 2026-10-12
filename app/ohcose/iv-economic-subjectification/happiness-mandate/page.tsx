import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.5 — Affective Labor & the Happiness Mandate",
  description: "OHCOSE Phase IV, Sub-Protocol 4.5. The workplace happiness imperative. Emotional management as compliance. The smile metric.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/happiness-mandate" },
};

export default function HappinessMandate() {
  return (
    <PageFrame pageNum="4.5" secCode="OHCOSE / LR / SP-4.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.5" title="Happiness Mandate" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.5</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Affective Labor &amp;<br />the Happiness Mandate</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Phase-IV workplace's affective register. The smile as
          deliverable. Emotional management as the unpaid surcharge on
          paid productivity.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.5.1" title="The Mandate" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-IV workplace expects the subject to deliver
              productive output and a sustained positive affect. The
              Office's published guidance to employers binds the two
              deliverables together; a worker delivering
              output without the affect is recorded as a
              calibration-pending case. The Office considers sustained
              positive affect to be the cheapest available proxy for
              compliance.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.5.2" title="The Affect Sensor Suite" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Office-certified employers deploy an affect sensor suite
              in the workplace: desk-mounted camera (sentiment
              detection), microphone array (vocal-stress baseline), and
              the subject's own Phase-III wearable, now polling
              continuously into the employer's HR dashboard. The
              subject's smile rate, vocal warmth, and autonomic
              stability are computed in real time and consolidated
              into a single Workplace Affect Score.
            </p>
            <p>
              Subjects who let the Score drift below cohort median are
              flagged for the Phase-IV Employee Wellness pathway, which
              the Office and the employer co-administer. Most pathway
              entrants return to median within a single quarter.
              Sustained drift triggers Form 14-Q (Performance Concern).
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.5.3" title="Workplace Affect Trace" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The trace below shows a Phase-IV subject's Workplace Affect
            Score across a representative work day, with the Office's
            target band shaded.
          </p>
          <WorkplaceAffectTrace />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 4.5.A</span> — Workplace Affect trace (typical Tuesday)
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iv-economic-subjectification/curating-life" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 4.4 curating life</Link>
          <Link href="/ohcose/iv-economic-subjectification/entrenchment" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>4.6 entrenchment →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function WorkplaceAffectTrace() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const points = [
    { h: 8.5, v: 78 }, { h: 9, v: 82 }, { h: 10, v: 85 }, { h: 11, v: 80 },
    { h: 12, v: 72 }, { h: 13, v: 58 }, { h: 13.5, v: 62 }, { h: 14, v: 74 },
    { h: 15, v: 80 }, { h: 16, v: 77 }, { h: 17, v: 70 },
  ];
  const W = 700, H = 260, padL = 60, padR = 30, padT = 40, padB = 50;
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const xMin = 8, xMax = 17.5;
  const xFor = (h: number) => padL + ((h - xMin) / (xMax - xMin)) * innerW;
  const yFor = (v: number) => padT + (1 - v / 100) * innerH;
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(p.h)} ${yFor(p.v)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Workplace affect trace">
      <rect x={padL} y={yFor(85)} width={innerW} height={yFor(65) - yFor(85)} fill="var(--color-paper-95)" stroke={strokeLight} strokeDasharray="4 3" strokeWidth="0.6" />
      <text x={padL + innerW - 8} y={yFor(85) + 16} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end" fill={strokeLight}>target band (65–85)</text>
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke={stroke} strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke={stroke} strokeWidth="1" />
      {[20, 40, 60, 80, 100].map((v) => (
        <g key={v}>
          <line x1={padL - 4} y1={yFor(v)} x2={padL} y2={yFor(v)} stroke={stroke} strokeWidth="0.6" />
          <text x={padL - 8} y={yFor(v) + 4} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end" fill={strokeLight}>{v}</text>
        </g>
      ))}
      {[9, 11, 13, 15, 17].map((h) => (
        <g key={h}>
          <line x1={xFor(h)} y1={padT + innerH} x2={xFor(h)} y2={padT + innerH + 4} stroke={stroke} strokeWidth="0.6" />
          <text x={xFor(h)} y={padT + innerH + 18} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>{h % 12 === 0 ? 12 : h % 12}{h < 12 ? "a" : "p"}</text>
        </g>
      ))}
      <path d={path} fill="none" stroke={accent} strokeWidth="2" />
      {points.map((p, i) => (<circle key={i} cx={xFor(p.h)} cy={yFor(p.v)} r="3.5" fill={accent} />))}
      <text x={xFor(13)} y={yFor(58) + 18} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={accent}>lunch dip (flagged)</text>
      <text x={W / 2} y={26} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>WORKPLACE AFFECT SCORE · 0–100</text>
    </svg>
  );
}
