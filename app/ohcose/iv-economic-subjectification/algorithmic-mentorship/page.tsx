import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.2 — Algorithmic Mentorship",
  description: "OHCOSE Phase IV, Sub-Protocol 4.2. Programming ambition and compliance through algorithmic mentor systems.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/algorithmic-mentorship" },
};

export default function AlgorithmicMentorship() {
  return (
    <PageFrame pageNum="4.2" secCode="OHCOSE / LR / SP-4.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.2" title="Algorithmic Mentorship" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.2</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Algorithmic Mentorship</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The continuous mentor process. The programming of ambition and
          compliance through small, persistent, plausibly-helpful nudges.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.2.1" title="The Continuous Mentor" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Each Phase-IV subject is assigned a Continuous Mentor at
              onboarding. The Mentor is delivered through the same
              digital architecture that served Phase III (sub-protocol
              3.3). It now performs a different function: where Phase III
              ran affective calibration, Phase IV runs career-trajectory
              shepherding.
            </p>
            <p>
              The Mentor recommends. The Mentor flags. The Mentor
              reminds. It surfaces the certification course the
              subject is overdue to complete; it surfaces the lateral
              role the subject would be a strong candidate for; it
              surfaces the productivity habit the subject's peers
              have adopted. The recommendations are framed as helpful.
              The compliance they produce is the deliverable.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.2.2" title="The Decision Loop" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Mentor's decision loop runs continuously. The schematic
            below shows the standard pathway from subject state to
            recommendation to logged outcome.
          </p>
          <MentorshipLoop />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 4.2.A — Mentor decision loop (steady state)</p>
        </section>
        <section>
          <SectionHead code="4.2.3" title="The Ambition Index" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office computes an Ambition Index for each Phase-IV
              subject, derived from the subject's response rate to
              Mentor recommendations, the subject's net consumption of
              productivity content, and the subject's stated career
              targets. The Index is shared with employers as part of
              the standard hiring-data agreement; subjects with high
              Ambition Indices receive preferential routing into
              high-trajectory roles.
            </p>
            <p>
              Subjects who learn that the Index exists and adjust
              their behavior accordingly remain within the Office's
              measurement envelope. The Office records the adjustment
              and notes that the behavior change has improved the
              Index. The cycle closes.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iv-economic-subjectification/onboarding" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 4.1 onboarding</Link>
          <Link href="/ohcose/iv-economic-subjectification/romantic-markets" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>4.3 romantic markets →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function MentorshipLoop() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const fill = "var(--color-paper)";
  const nodes = [
    { x: 360, y: 60, label: "subject state", sub: "behavior + signals" },
    { x: 580, y: 180, label: "Mentor model", sub: "ranks recommendations" },
    { x: 360, y: 300, label: "recommendation", sub: "nudge delivered" },
    { x: 140, y: 180, label: "compliance log", sub: "response captured" },
  ];
  return (
    <svg viewBox="0 0 720 380" className="w-full" role="img" aria-label="Mentor decision loop">
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <path key={i} d={`M ${n.x} ${n.y} Q ${(n.x + next.x) / 2 + (i % 2 === 0 ? 40 : -40)} ${(n.y + next.y) / 2} ${next.x} ${next.y}`} fill="none" stroke={stroke} strokeWidth="1.5" />
        );
      })}
      <g>
        <text x="360" y="178" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={accent}>MENTOR LOOP</text>
        <text x="360" y="198" fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>continuous · per-subject</text>
      </g>
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r="56" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x={n.x} y={n.y - 4} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>{n.label}</text>
          <text x={n.x} y={n.y + 14} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>{n.sub}</text>
        </g>
      ))}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        const mx = (n.x + next.x) / 2 + (i % 2 === 0 ? 20 : -20);
        const my = (n.y + next.y) / 2;
        const angle = Math.atan2(next.y - n.y, next.x - n.x) * (180 / Math.PI);
        return <polygon key={`a${i}`} points="-7,-5 0,0 -7,5" transform={`translate(${mx}, ${my}) rotate(${angle})`} fill={stroke} />;
      })}
    </svg>
  );
}
