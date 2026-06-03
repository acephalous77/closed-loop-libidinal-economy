import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.1 — Consolidation Overview",
  description: "OHCOSE Phase V, Sub-Protocol 5.1. The Phase V mandate framed: career + household + civic identity as a unified extraction architecture.",
  alternates: { canonical: "/ohcose/v-peak-productivity/consolidation" },
};

export default function ConsolidationOverview() {
  return (
    <PageFrame pageNum="5.1" secCode="OHCOSE / LR / SP-5.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.1" title="Consolidation Overview" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.1</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Consolidation Overview</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The unified Phase-V subject: a single architecture in which
          career, household, and civic identity reinforce one another
          and the surplus extracts itself cleanly.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.1.1" title="The Three Pillars" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-V subject rests on three pillars: the Career
              Pillar (productive output), the Household Pillar
              (reproductive and consumption output), and the Civic
              Pillar (political stability and grassroots compliance).
              The Office's Phase-V calibration optimizes the
              interaction among the three. A subject whose pillars
              reinforce one another produces surplus at the rate the
              Office expects. A subject whose pillars conflict
              requires intervention.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.1.2" title="The Phase-V Surplus Yield Schedule" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's standard Phase-V cohort yield by sub-protocol.
            Yields scale per subject-year; values shown are the cohort
            median for the 2049 cohort.
          </p>
          <PhaseVYieldChart />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 5.1.A — Phase-V cohort surplus yield by channel (2049 cohort median)</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase V</Link>
          <Link href="/ohcose/v-peak-productivity/economic-zenith" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>5.2 economic zenith →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function PhaseVYieldChart() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const data = [
    { label: "labor output", yield: 92 },
    { label: "consumption", yield: 88 },
    { label: "reproductive", yield: 64 },
    { label: "civic-grassroots", yield: 58 },
    { label: "data emission", yield: 96 },
    { label: "obligation servicing", yield: 90 },
  ];
  const W = 720;
  const H = 320;
  const padX = 28;
  const padY = 80;
  const barW = (W - 2 * padX) / data.length - 18;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Phase-V cohort surplus yields">
      <text x={W / 2} y={32} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
        SURPLUS YIELD · % of cohort theoretical maximum
      </text>
      {data.map((d, i) => {
        const x = padX + i * ((W - 2 * padX) / data.length) + 9;
        const h = (d.yield / 100) * (H - 2 * padY);
        const y = H - padY - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={h} fill={i === 4 ? accent : paper} stroke={stroke} strokeWidth="1.2" />
            <text x={x + barW / 2} y={y - 8} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={i === 4 ? accent : stroke}>{d.yield}%</text>
            <text x={x + barW / 2} y={H - padY + 18} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>{d.label}</text>
          </g>
        );
      })}
      <line x1={padX} y1={H - padY} x2={W - padX} y2={H - padY} stroke={stroke} strokeWidth="1" />
    </svg>
  );
}
