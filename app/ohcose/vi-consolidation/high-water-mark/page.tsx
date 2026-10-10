import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.1 — The High-Water Mark of Capital",
  description: "OHCOSE Phase VI, Sub-Protocol 6.1. Peak earning, peak holdings, the narrative of earned seniority.",
  alternates: { canonical: "/ohcose/vi-consolidation/high-water-mark" },
};

export default function HighWaterMark() {
  return (
    <PageFrame pageNum="6.1" secCode="OHCOSE / LR / SP-6.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.1" title="High-Water Mark of Capital" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.1</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The High-Water Mark of Capital</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          Peak earnings. Peak holdings. The narrative of earned
          seniority. The shift from active production to stewardship
          of accumulated capital.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.1.1" title="The Apex" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In their fifties the Phase-VI subject typically reaches
              the peak of their lifetime earnings and the peak of
              their holdings. The dwelling is largely paid down. The
              retirement accounts are fully funded. The career rests
              in a stable Senior tier. The household has launched its
              children or is preparing to. The subject is, by every
              published indicator, at the apex of the standard
              lifecycle.
            </p>
            <p>
              The Office presents the apex as the reward for the
              prior Phases. The subject often agrees. The agreement
              is the desired posture for the work of Phase VI that
              follows.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.1.2" title="The Capital Architecture" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The standard Phase-VI subject's capital architecture, by
            instrument class.
          </p>
          <CapitalArchitecture />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 6.1.A</span> — Standard Phase-VI capital allocation (cohort median, age 55)
            </p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase VI</Link>
          <Link href="/ohcose/vi-consolidation/managing-decline" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>6.2 managing decline →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function CapitalArchitecture() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper95 = "var(--color-paper-95)";
  // Pie-chart equivalent stacked bar
  const slices = [
    { label: "primary dwelling (equity)", pct: 38, fill: stroke, textFill: "var(--color-paper)" },
    { label: "retirement accounts", pct: 28, fill: accent, textFill: "var(--color-paper)" },
    { label: "taxable investments", pct: 14, fill: strokeLight, textFill: "var(--color-paper)" },
    { label: "education trusts (children)", pct: 8, fill: paper95, textFill: stroke },
    { label: "cash / equivalents", pct: 6, fill: stroke, textFill: "var(--color-paper)" },
    { label: "other (insurance, collectibles)", pct: 6, fill: accent, textFill: "var(--color-paper)" },
  ];
  const W = 720;
  const barY = 80;
  const barH = 64;
  let cumX = 30;
  return (
    <svg viewBox={`0 0 ${W} 240`} className="w-full" role="img" aria-label="Capital architecture">
      <text x={W / 2} y={32} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
        CAPITAL ARCHITECTURE · % of household net worth
      </text>
      <text x={W / 2} y={54} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
        cohort median household, age 55
      </text>
      {slices.map((s, i) => {
        const w = ((W - 60) * s.pct) / 100;
        const x = cumX;
        cumX += w;
        const isRowA = i % 2 === 0;
        const labelY = isRowA ? 168 : 196;
        return (
          <g key={i}>
            <rect x={x} y={barY} width={w} height={barH} fill={s.fill} stroke={stroke} strokeWidth="0.8" />
            {w > 40 && (
              <text x={x + w / 2} y={barY + barH / 2 + 5} fontSize="15" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={s.textFill}>{s.pct}%</text>
            )}
            <line x1={x + w / 2} y1={barY + barH} x2={x + w / 2} y2={labelY - 14} stroke={strokeLight} strokeWidth="0.5" />
            <text x={x + w / 2} y={labelY} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>{s.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
