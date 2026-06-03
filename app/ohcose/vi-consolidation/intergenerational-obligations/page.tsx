import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.3 — Intergenerational Obligations",
  description: "OHCOSE Phase VI, Sub-Protocol 6.3. The sandwich generation. Aging parents, launching adult children, the unpaid caregiver shift.",
  alternates: { canonical: "/ohcose/vi-consolidation/intergenerational-obligations" },
};

export default function IntergenerationalObligations() {
  return (
    <PageFrame pageNum="6.3" secCode="OHCOSE / LR / SP-6.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.3" title="Intergenerational Obligations" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.3</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Intergenerational Obligations</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The sandwich generation. The Phase-VI subject as
          simultaneous caregiver to aging parents and supporter of
          launching adult children. The Office's unpaid caregiver
          shift.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.3.1" title="The Two Directions" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In Phase VI the subject begins to look in two
              directions. Upward to aging parents who now require
              navigation of the eldercare system, monitoring of
              medications, and increasing logistical support. Downward
              to adult children attempting their own Phase IV
              entrenchment under conditions tighter than the
              subject's were. Each direction draws unpaid labor from
              the Phase-VI subject. The Office benefits from both.
            </p>
            <p>
              The subject experiences the obligations as love. The
              Office endorses the framing. Love performs the
              extraction the market would otherwise have to perform
              at scale; the substitution is the Office's most reliable
              Phase-VI cost saving.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.3.2" title="The Standard Allocation" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's cohort-median allocation of the Phase-VI
            subject's weekly time across the directions.
          </p>
          <TimeAllocation />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 6.3.A — Phase-VI weekly time allocation (cohort median, hours)</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation/managing-decline" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 6.2 managing decline</Link>
          <Link href="/ohcose/vi-consolidation/golden-years" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>6.4 golden years →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function TimeAllocation() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper95 = "var(--color-paper-95)";
  const buckets = [
    { label: "paid work", hrs: 47 },
    { label: "parent caregiving (unpaid)", hrs: 9 },
    { label: "adult-child support (unpaid)", hrs: 7 },
    { label: "household / domestic labor", hrs: 14 },
    { label: "sleep", hrs: 52 },
    { label: "self (leisure, exercise, etc.)", hrs: 13 },
    { label: "civic / household admin", hrs: 11 },
    { label: "commute / transit", hrs: 9 },
    { label: "other", hrs: 6 },
  ];
  const total = buckets.reduce((s, b) => s + b.hrs, 0);
  // 168 hrs in a week — rest is unaccounted (~0). Render as horizontal stacked bar.
  const W = 720;
  const barY = 80;
  const barH = 60;
  let cumX = 30;
  return (
    <svg viewBox={`0 0 ${W} 260`} className="w-full" role="img" aria-label="Phase VI time allocation">
      <text x={W / 2} y={32} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>WEEKLY HOURS · {total} of 168 accounted</text>
      {buckets.map((b, i) => {
        const w = ((W - 60) * b.hrs) / total;
        const x = cumX;
        cumX += w;
        const isUnpaid = b.label.includes("unpaid") || b.label.includes("domestic");
        const labelY = i % 2 === 0 ? 168 : 196;
        return (
          <g key={i}>
            <rect x={x} y={barY} width={w} height={barH} fill={isUnpaid ? accent : (i % 3 === 0 ? stroke : paper95)} stroke={stroke} strokeWidth="0.8" />
            {w > 30 && (
              <text x={x + w / 2} y={barY + barH / 2 + 5} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={isUnpaid || i % 3 === 0 ? "var(--color-paper)" : stroke}>{b.hrs}h</text>
            )}
            <line x1={x + w / 2} y1={barY + barH} x2={x + w / 2} y2={labelY - 14} stroke={strokeLight} strokeWidth="0.4" />
            <text x={x + w / 2} y={labelY} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>{b.label}</text>
          </g>
        );
      })}
      <g transform="translate(30, 220)">
        <rect x={0} y={0} width={18} height={18} fill={accent} stroke={stroke} strokeWidth="0.5" />
        <text x={26} y={13} fontSize="13" fontFamily="ui-monospace, monospace" fill={stroke}>unpaid labor extracted by the Office at zero direct cost</text>
      </g>
    </svg>
  );
}
