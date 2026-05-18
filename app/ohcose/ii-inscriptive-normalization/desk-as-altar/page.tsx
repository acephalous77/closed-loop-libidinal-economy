import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.1 — The Desk as Altar",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.1. The classroom as ritual space. The bell-keyed daily liturgy. Order presented as care.",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/desk-as-altar",
  },
};

export default function DeskAsAltar() {
  return (
    <PageFrame pageNum="2.1" secCode="OHCOSE / LR / SP-2.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.1" title="The Desk as Altar" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.1
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          The Desk as Altar
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The classroom as ritual space. The bell-keyed daily liturgy. The
          presentation of order as care. The architecture of the Phase-II
          subject's first sustained encounter with institutional time.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 2.1.1 */}
        <section>
          <SectionHead code="2.1.1" title="The Classroom as Ritual Space" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office-certified Phase-II classroom is calibrated to a
              specific affective register. Morning light enters through
              east-facing windows. Twenty-four small bodies sit upright at
              their desks. Pencils, pencil sharpeners, and seasonal
              decorations are arranged in the Office's published
              configuration. The day opens with a unison recitation of the
              alphabet, the Pledge, and the class motto.
            </p>
            <p>
              The classroom does not present itself as an institution. It
              presents itself as a benevolent setting in which the subject
              is held, attended to, and made to feel at home. The genius
              of the Phase-II design is that order arrives in the form of
              care. The teacher's smile accompanies the requirement that
              the subject sit still. The decorations are warm.
            </p>
          </div>
        </section>

        {/* 2.1.2 — Bell Schedule */}
        <section>
          <SectionHead code="2.1.2" title="The Bell-Keyed Day" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Phase-II day is sliced into predictable units by the
            classroom bell. The bell is the Phase-II subject's first
            encounter with non-negotiable institutional time. By the end
            of the first quarter, the subject responds to the bell at the
            level of reflex; the bell tolls, the subject rises, lines up,
            and proceeds to the next station without conscious deliberation.
          </p>

          <BellScheduleTimeline />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 2.1.A — Standard Phase-II school day (bell-keyed)
          </p>
        </section>

        {/* 2.1.3 — Order as Care */}
        <section>
          <SectionHead code="2.1.3" title="Order Presented as Care" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office's Phase-II pedagogy operates entirely through the
              affective channels Phase I installed. The subject's
              compliance with the bell is rewarded by the teacher's warm
              acknowledgment. The subject's deviation from the bell is
              corrected by the teacher's gentle redirection. At no point
              does the subject perceive correction as discipline; the
              correction is folded into the same affective register the
              subject was trained, in Phase I, to seek out.
            </p>
            <p>
              Caregivers who observe Phase-II classrooms occasionally
              report that the children appear unusually compliant. This
              is the calibration working. Compliance under Phase II is not
              imposed; it is invited, and the subject accepts. The Office
              prefers this mechanism because it produces no resistance
              record, and because it generalizes naturally into the
              workplace registers of Phases IV and V.
            </p>
          </div>
        </section>

        {/* 2.1.4 — Note */}
        <section>
          <SectionHead code="2.1.4" title="Note on Religious-Symbolic Continuity" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Caregivers from older affect-traditions occasionally note
              the resemblance between the classroom's bell-keyed liturgy
              and the rhythms of religious observance. The Office
              acknowledges the continuity. The Phase-II classroom is the
              successor institution to the parish hall, the chapel
              school, and the village circle; the affective infrastructure
              is the same. Only the doctrine has been updated.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/ii-inscriptive-normalization" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase II</a>
          <a href="/ohcose/ii-inscriptive-normalization/algorithmic-calibration" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>2.2 algorithmic calibration →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Bell-Keyed Day timeline — 8am to 3pm horizontal bar segmented into
 * subject-period blocks with bell-strike marks between.
 */
function BellScheduleTimeline() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  const periods = [
    { start: 8.0,  end: 8.5,  label: "OPEN", cat: "ritual" },
    { start: 8.5,  end: 9.5,  label: "READ", cat: "study" },
    { start: 9.5,  end: 10.25, label: "MATH", cat: "study" },
    { start: 10.25, end: 10.75, label: "REC", cat: "recess" },
    { start: 10.75, end: 11.75, label: "SOC", cat: "study" },
    { start: 11.75, end: 12.5,  label: "FEED", cat: "feed" },
    { start: 12.5, end: 13.5,  label: "WRITE", cat: "study" },
    { start: 13.5, end: 14.0,  label: "MOVE", cat: "motor" },
    { start: 14.0, end: 14.75, label: "ART", cat: "study" },
    { start: 14.75, end: 15.0, label: "CLOSE", cat: "ritual" },
  ];

  const start = 8;
  const end = 15;
  const span = end - start;
  const W = 720;
  const cellH = 44;
  const yTop = 28;

  const fillFor = (cat: string) => {
    switch (cat) {
      case "study":  return paper95;
      case "recess": return accent;
      case "feed":   return strokeLight;
      case "ritual": return stroke;
      case "motor":  return strokeLight;
      default: return paper;
    }
  };
  const textFor = (cat: string) => {
    return cat === "ritual" || cat === "recess" || cat === "feed" || cat === "motor" ? paper : stroke;
  };

  return (
    <svg viewBox={`0 0 ${W} 130`} className="w-full" role="img" aria-label="Bell-keyed Phase-II school day">
      {/* Period blocks */}
      {periods.map((p, i) => {
        const x = ((p.start - start) / span) * W;
        const w = ((p.end - p.start) / span) * W;
        return (
          <g key={i}>
            <rect x={x} y={yTop} width={w} height={cellH} fill={fillFor(p.cat)} stroke={stroke} strokeWidth="0.6" />
            <text x={x + w / 2} y={yTop + cellH / 2 + 3} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={textFor(p.cat)}>
              {p.label}
            </text>
          </g>
        );
      })}

      {/* Bell strike marks between periods */}
      {periods.slice(1).map((p, i) => {
        const x = ((p.start - start) / span) * W;
        return (
          <g key={`bell-${i}`}>
            <line x1={x} y1={yTop - 6} x2={x} y2={yTop} stroke={accent} strokeWidth="2" />
            <circle cx={x} cy={yTop - 9} r="2.5" fill={accent} />
          </g>
        );
      })}

      {/* Hour labels */}
      {[8, 9, 10, 11, 12, 13, 14, 15].map((h) => {
        const x = ((h - start) / span) * W;
        return (
          <g key={h}>
            <line x1={x} y1={yTop + cellH} x2={x} y2={yTop + cellH + 4} stroke={stroke} strokeWidth="0.5" />
            <text x={x} y={yTop + cellH + 16} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor={h === 8 ? "start" : h === 15 ? "end" : "middle"} fill={strokeLight}>
              {h % 12 === 0 ? 12 : h % 12}:00{h < 12 ? "a" : "p"}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(0, 102)">
        {[
          { cat: "study",  label: "study" },
          { cat: "recess", label: "recess" },
          { cat: "feed",   label: "feed" },
          { cat: "ritual", label: "ritual (open / close)" },
        ].map((item, i) => (
          <g key={item.cat} transform={`translate(${i * 170}, 0)`}>
            <rect x={0} y={4} width={14} height={14} fill={fillFor(item.cat)} stroke={stroke} strokeWidth="0.5" />
            <text x={20} y={15} fontSize="10" fontFamily="ui-monospace, monospace" fill={stroke}>{item.label}</text>
          </g>
        ))}
      </g>

      {/* Bell marker label */}
      <g transform="translate(0, 8)">
        <circle cx={5} cy={6} r="3" fill={accent} />
        <text x={14} y={10} fontSize="9" fontFamily="ui-monospace, monospace" fill={strokeLight}>bell strike</text>
      </g>
    </svg>
  );
}
