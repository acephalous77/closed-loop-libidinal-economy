import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.1 — Retirement as Liminal Economic Phase",
  description: "OHCOSE Phase VII, Sub-Protocol 7.1. The drawdown subject. Consumer continuity without productive role.",
  alternates: { canonical: "/ohcose/vii-exit/liminal-retirement" },
};

export default function LiminalRetirement() {
  return (
    <PageFrame pageNum="7.1" secCode="OHCOSE / LR / SP-7.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.1" title="Retirement as Liminal Economic Phase" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.1</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Retirement as Liminal Economic Phase</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The drawdown subject. Consumer continuity without
          productive role. The economy of unused time and the
          Office's strategies for filling it.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.1.1" title="The Drawdown" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-VII subject does not produce. The Office's
              concern is that the subject continue to consume. The
              accumulated capital is drawn down on a published schedule
              into the standard Phase-VII consumption channels:
              healthcare, eldercare, leisure, travel, memorial-product
              planning. The drawdown is paced to last the subject's
              actuarial life expectancy minus six months. Subjects
              who exit the drawdown early are recorded as
              Office-favorable; subjects who exhaust the drawdown
              are routed into the public-tier safety net under the
              Office's controlled-cost terms.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.1.2" title="Time Allocation" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's cohort-median Phase-VII weekly time
            allocation, age 70.
          </p>
          <RetTimeUse />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 7.1.A</span> — Phase-VII weekly time allocation (cohort median, age 70)
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase VII</Link>
          <Link href="/ohcose/vii-exit/death-as-logistics" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>7.2 death as logistics →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function RetTimeUse() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper95 = "var(--color-paper-95)";
  const buckets = [
    { label: "sleep / rest", hrs: 64 },
    { label: "media consumption", hrs: 26 },
    { label: "household / domestic", hrs: 15 },
    { label: "healthcare-related", hrs: 11 },
    { label: "social", hrs: 14 },
    { label: "hobbies / leisure", hrs: 18 },
    { label: "errands", hrs: 8 },
    { label: "other", hrs: 12 },
  ];
  const total = buckets.reduce((s, b) => s + b.hrs, 0);
  const W = 720;
  let cumX = 30;
  return (
    <svg viewBox={`0 0 ${W} 240`} className="w-full" role="img" aria-label="Phase-VII time use">
      <text x={W / 2} y={32} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>WEEKLY HOURS · cohort median, age 70</text>
      {buckets.map((b, i) => {
        const w = ((W - 60) * b.hrs) / total;
        const x = cumX;
        cumX += w;
        const labelY = i % 2 === 0 ? 168 : 196;
        return (
          <g key={i}>
            <rect x={x} y={80} width={w} height={60} fill={i === 1 ? accent : (i % 2 === 0 ? stroke : paper95)} stroke={stroke} strokeWidth="0.8" />
            {w > 30 && <text x={x + w / 2} y={114} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={i === 1 || i % 2 === 0 ? "var(--color-paper)" : stroke}>{b.hrs}h</text>}
            <line x1={x + w / 2} y1={140} x2={x + w / 2} y2={labelY - 14} stroke={strokeLight} strokeWidth="0.4" />
            <text x={x + w / 2} y={labelY} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>{b.label}</text>
          </g>
        );
      })}
      <g transform="translate(30, 220)">
        <rect x={0} y={0} width={18} height={18} fill={accent} stroke={stroke} strokeWidth="0.5" />
        <text x={26} y={13} fontSize="13" fontFamily="ui-monospace, monospace" fill={stroke}>highest-yield channel · advertising still applies</text>
      </g>
    </svg>
  );
}
