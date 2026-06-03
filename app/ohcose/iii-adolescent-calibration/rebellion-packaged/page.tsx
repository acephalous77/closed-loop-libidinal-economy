import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.2 — Rebellion Packaged & Sold",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.2. Commodified subculture. The styling of dissent. The limits of market-sanctioned refusal.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/rebellion-packaged",
  },
};

export default function RebellionPackaged() {
  return (
    <PageFrame pageNum="3.2" secCode="OHCOSE / LR / SP-3.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.2" title="Rebellion Packaged" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.2
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Rebellion Packaged &amp; Sold
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The commodification of dissent. The conversion of refusal-energy
          into wardrobe, music, and merchandise. The narrow corridor of
          Office-sanctioned rebellion, and the response protocol for
          subjects who attempt to exit it.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.2.1" title="The Recuperation Premise" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Adolescent refusal-energy is a renewable resource. The
              Office has known this for many decades. The mechanism by
              which energy that might disrupt the lifecycle is routed
              into purchasable styling has been in continuous refinement
              since the punk recuperation of 1978, the hip-hop
              recuperation of 1991, the emo recuperation of 2003, the
              tradcore recuperation of 2027, and the dozens of smaller
              recuperations in the intervening years.
            </p>
            <p>
              The Office's published guidance to brand partners is that
              recuperation should proceed within a six-to-eighteen-month
              window from initial subcultural emergence. Earlier
              intervention risks suppressing the energy before its
              styling is fully formed. Later intervention permits the
              accumulation of an unbranded reservoir that becomes
              proportionally more difficult to channel.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.2.2" title="The Subculture Routing Schematic" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The schematic below maps the standard recuperation pathway
            from initial emergence through stable market integration.
            Each stage has a published timeline and a designated
            Office liaison.
          </p>

          <RecuperationFlow />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 3.2.A — Standard subculture recuperation pathway
          </p>
        </section>

        <section>
          <SectionHead code="3.2.3" title="The Out-of-Bounds Response" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              A Phase-III subject who attempts an unscripted rebellion
              — refusal-energy that has not yet been styled, or styling
              that does not route into a purchasable register — is
              flagged by the digital architecture (see sub-protocol
              3.3). The Office's response is graduated. First-tier
              response is the algorithmic offering of approved adjacent
              subcultures. Second-tier is the assignment of an
              Office-certified peer who models the approved style.
              Third-tier is the involvement of the Phase-III Affective
              Officer. Most flagged subjects resolve at first or second
              tier; the third tier sees fewer than two cases per
              ten-thousand-subject cohort.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.2.4" title="The Cool Index" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office maintains a Cool Index for each Phase-III
              subject, computed from the subject's subcultural
              affiliations, the social-desirability scores those
              affiliations carry within the subject's peer cohort, and
              the consumption pattern the affiliations entail. The Cool
              Index is shared with the Office's brand partners as part
              of the quarterly data-sharing agreement. A subject's
              Cool Index trajectory across Phase III is one of the
              Office's most reliable predictors of Phase IV consumer
              behavior.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iii-adolescent-calibration/calibrating-desire" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 3.1 calibrating desire</Link>
          <Link href="/ohcose/iii-adolescent-calibration/digital-architectures" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>3.3 digital architectures →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Subculture Recuperation Flow — five-stage horizontal pipeline
 * showing emergence → identification → styling → market launch →
 * stable integration. Each stage labeled with its expected timeline.
 */
function RecuperationFlow() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  const stages = [
    { label: "raw emergence", t: "wk 0–4", note: "informal peer cluster" },
    { label: "Office identification", t: "wk 4–12", note: "trend-officer flag" },
    { label: "styling pass", t: "mo 3–6", note: "brand-partner design" },
    { label: "market launch", t: "mo 6–12", note: "wardrobe / music / merch" },
    { label: "stable integration", t: "mo 12–18", note: "Cool Index logged" },
  ];

  const W = 620;
  const stageH = 92;
  const yMid = 120;
  const stageW = (W - 60) / stages.length;

  return (
    <svg viewBox={`0 0 ${W} 240`} className="w-full" role="img" aria-label="Subculture recuperation pathway">
      {/* Stage boxes left-to-right */}
      {stages.map((s, i) => {
        const x = 30 + i * stageW;
        const isLast = i === stages.length - 1;
        return (
          <g key={i}>
            <rect x={x + 4} y={yMid - stageH / 2} width={stageW - 8} height={stageH} fill={isLast ? accent : paper95} stroke={stroke} strokeWidth="1.5" />
            <text x={x + stageW / 2} y={yMid - 14} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={isLast ? paper : stroke}>
              {s.label}
            </text>
            <text x={x + stageW / 2} y={yMid + 8} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={isLast ? paper : strokeLight}>
              {s.t}
            </text>
            <text x={x + stageW / 2} y={yMid + 28} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={isLast ? paper : strokeLight}>
              {s.note}
            </text>
            {/* Connector arrow */}
            {i < stages.length - 1 && (
              <g>
                <line x1={x + stageW - 4} y1={yMid} x2={x + stageW + 4} y2={yMid} stroke={stroke} strokeWidth="1.5" />
                <polygon points={`${x + stageW + 4},${yMid - 3} ${x + stageW + 9},${yMid} ${x + stageW + 4},${yMid + 3}`} fill={stroke} />
              </g>
            )}
          </g>
        );
      })}

      {/* Out-of-bounds rejection path — fork down at "raw emergence" */}
      <g>
        <path d={`M ${30 + stageW / 2} ${yMid + stageH / 2} L ${30 + stageW / 2} ${yMid + stageH / 2 + 30}`} stroke={accent} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <text x={30 + stageW / 2} y={yMid + stageH / 2 + 46} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={accent}>
          if out-of-bounds: see 3.2.3
        </text>
      </g>

      {/* Header label */}
      <text x={W / 2} y={36} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
        STANDARD RECUPERATION PATHWAY · 12–18 mo
      </text>
    </svg>
  );
}
