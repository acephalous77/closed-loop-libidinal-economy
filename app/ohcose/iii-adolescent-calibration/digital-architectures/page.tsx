import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.3 — Digital Architectures of Adolescent Life",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.3. The feed as scaffold. Machinic preemption of spontaneity. Continuous archival of peer interaction.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/digital-architectures",
  },
};

export default function DigitalArchitectures() {
  return (
    <PageFrame pageNum="3.3" secCode="OHCOSE / LR / SP-3.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.3" title="Digital Architectures" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.3
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Digital Architectures<br />
          of Adolescent Life
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The feed as Phase-III scaffold. The pre-conscious orientation
          of mood, attention, and aspiration. Continuous archival of
          peer interaction at the gesture level.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.3.1" title="The Feed as Scaffold" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              By Phase III each subject has been issued a personal device
              and a curated suite of Office-vetted platforms. The
              subject experiences the suite as a set of social and
              entertainment applications they have chosen. The Office
              experiences the suite as the principal Phase-III
              instrument: the platform through which subjectivity-
              catalogue offerings (sub-protocol 3.1) are delivered, the
              channel through which subculture recuperation pathways
              (sub-protocol 3.2) are launched, and the substrate from
              which the Phase-III Affective Officer reads the subject's
              real-time state.
            </p>
            <p>
              The feed operates pre-consciously. The Phase-III subject
              does not deliberate about which post comes next; the post
              arrives. The post is selected by the platform from a
              candidate pool the platform has prepared from the
              subject's prior engagement signal. The subject responds.
              The response feeds the next selection. The loop closes
              within the subject's working memory; the subject does not
              perceive the loop.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.3.2" title="The Feed Composition" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Phase-III feed is composed of seven content categories,
            mixed in the proportions the Office's longitudinal evidence
            indicates produce the deepest calibration with the lowest
            disengagement risk. The composition is adjusted weekly per
            subject.
          </p>

          <FeedCompositionChart />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 3.3.A — Standard Phase-III feed composition (sample week)
          </p>
        </section>

        <section>
          <SectionHead code="3.3.3" title="Continuous Archival" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Every interaction the subject has with the Phase-III feed
              is archived: every swipe, every dwell, every double-tap,
              every screenshot, every direct message, every group chat
              utterance, every voice-note. The archive is structured at
              the gesture level and is timestamped against the subject's
              biometric stream from the device (accelerometer, gyroscope,
              facial-camera engagement, pulse-rate from the touch
              sensor).
            </p>
            <p>
              The subject does not experience the archival. The subject
              experiences the affordance. The Office's published
              guidance to platform partners is that the affordance must
              never disclose the archive's existence in any register the
              subject would read as serious. References to data
              collection are confined to the privacy policy and to
              cookie banners written in a register the subject's
              cohort uniformly skips.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.3.4" title="The Preemption Effect" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office's longitudinal evidence indicates that
              Phase-III subjects with median feed exposure (currently
              4h 12m per day) develop a preemptive mode in which they
              do not initiate the question that might lead to
              unscripted action; they wait for the feed to suggest it
              and select among the suggestions. The preemption is the
              Phase-III deliverable. A subject who exits Phase III with
              the preemptive mode installed accommodates Phase IV
              economic subjectification at the rate the Office
              specifies.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/iii-adolescent-calibration/rebellion-packaged" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 3.2 rebellion packaged</a>
          <a href="/ohcose/iii-adolescent-calibration/pharmacopornographic-order" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>3.4 pharmacopornographic →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Feed Composition Chart — horizontal stacked bar showing the seven
 * content categories in their Office-specified proportions, with
 * percentage labels.
 */
function FeedCompositionChart() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  const categories = [
    { label: "peer", pct: 28, fill: stroke, textFill: paper },
    { label: "subculture", pct: 18, fill: accent, textFill: paper },
    { label: "brand", pct: 16, fill: strokeLight, textFill: paper },
    { label: "wellness", pct: 12, fill: paper95, textFill: stroke },
    { label: "news (curated)", pct: 10, fill: stroke, textFill: paper },
    { label: "entertainment", pct: 11, fill: accent, textFill: paper },
    { label: "creator", pct: 5, fill: strokeLight, textFill: paper },
  ];

  const W = 620;
  const barY = 64;
  const barH = 56;
  const labelsY = 150;

  let cumX = 30;
  return (
    <svg viewBox={`0 0 ${W} 200`} className="w-full" role="img" aria-label="Phase-III feed composition">
      <text x={W / 2} y={28} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
        FEED COMPOSITION · % of daily engagement minutes
      </text>
      <text x={W / 2} y={44} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
        median daily feed exposure: 4 h 12 m
      </text>

      {/* Stacked bar */}
      {categories.map((c, i) => {
        const w = ((W - 60) * c.pct) / 100;
        const x = cumX;
        cumX += w;
        return (
          <g key={i}>
            <rect x={x} y={barY} width={w} height={barH} fill={c.fill} stroke={stroke} strokeWidth="0.8" />
            {w > 35 && (
              <text x={x + w / 2} y={barY + barH / 2 + 4} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={c.textFill}>
                {c.pct}%
              </text>
            )}
            {/* Connector + label below */}
            <line x1={x + w / 2} y1={barY + barH} x2={x + w / 2} y2={labelsY - 14 + (i % 2) * 12} stroke={strokeLight} strokeWidth="0.5" />
            <text x={x + w / 2} y={labelsY + (i % 2) * 12} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>
              {c.label}
            </text>
          </g>
        );
      })}

      <text x={W / 2} y={186} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
        proportions adjusted weekly per subject; cohort means published in Annex 7
      </text>
    </svg>
  );
}
