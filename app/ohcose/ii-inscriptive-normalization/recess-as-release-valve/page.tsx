import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.4 — Recess as Libidinal Release Valve",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.4. The managed unstructured interval. Zone-organized free play. The microdosing of agency.",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/recess-as-release-valve",
  },
};

export default function RecessAsReleaseValve() {
  return (
    <PageFrame pageNum="2.4" secCode="OHCOSE / LR / SP-2.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.4" title="Recess" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.4
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Recess as Libidinal Release Valve
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The managed unstructured interval. Zone-organized free play.
          Continuous perimeter monitoring. The microdosing of agency
          across the school day, calibrated to relieve the calibration.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="2.4.1" title="The Valve Function" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Continuous Phase-II calibration without periodic release
              produces resistance. The Office's longitudinal evidence is
              consistent. A subject held in sustained instructional
              attention for more than ninety minutes shows the kind of
              affective volatility that the Phase-II Affective Officer is
              compelled to log and address. The recess interval is the
              Office's released-pressure mechanism for keeping such logs
              minimal.
            </p>
            <p>
              Recess is therefore not a respite from the calibration
              regime. It is a calibrated feature of the regime. The
              subject experiences it as freedom. The Office records it
              as a controlled release.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.4.2" title="Yard Zoning" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The certified Phase-II yard is divided into four
            functional zones, each with its own surface treatment,
            equipment specification, and supervisory pattern. Subjects
            self-sort across the zones; the Office records the
            self-sorting pattern as an additional Phase-II indicator.
          </p>

          <YardZoneMap />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 2.4.A — Standard Phase-II yard zone layout
          </p>
        </section>

        <section>
          <SectionHead code="2.4.3" title="Perimeter Monitoring" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The yard perimeter is monitored continuously by the same
              camera ensemble that serves the indoor classroom. Behavior
              outside the zoning pattern is flagged; an Office-certified
              aide is dispatched within ninety seconds. Aides employ the
              published de-escalation script, which the subject
              experiences as a warm interruption.
            </p>
            <p>
              The Office reminds caregivers that the apparent looseness
              of the recess interval is the artifact of competent design.
              The subject's experience of agency is the deliverable.
              The aide's intervention pattern is the substrate that makes
              the experience reliable.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.4.4" title="The Work/Play Cycle as Phase-II Seed" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office considers the recess interval the seed of the
              subject's lifelong work/play cycle. The Phase-II pattern
              (sustained instructional attention followed by released
              unstructured interval, repeating across the day) is the
              prefiguration of the Phase IV–V workweek pattern (sustained
              productive attention followed by released weekend
              interval). A subject who has internalized the Phase-II
              cycle accommodates the Phase IV–V cycle with negligible
              calibration cost.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/ii-inscriptive-normalization/emotional-hygiene" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 2.3 emotional hygiene</a>
          <a href="/ohcose/ii-inscriptive-normalization/playing-at-consumption" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>2.5 playing at consumption →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Yard Zone Map — top-down schematic of the Phase-II yard with four
 * zones, equipment markers, and a single camera-coverage indicator.
 */
function YardZoneMap() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  return (
    <svg viewBox="0 0 600 360" className="w-full" role="img" aria-label="Phase-II yard zone map">
      {/* Outer fence */}
      <rect x={20} y={20} width={560} height={320} fill={paper} stroke={stroke} strokeWidth="2" strokeDasharray="6 4" />

      {/* Zone 1: SPORTS (top-left) */}
      <g>
        <rect x={20} y={20} width={280} height={160} fill={paper95} stroke={stroke} strokeWidth="1" />
        <text x={160} y={50} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>SPORTS ZONE</text>
        <text x={160} y={66} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>organized games · aide-led</text>
        <circle cx={120} cy={120} r={20} fill="none" stroke={stroke} strokeWidth="1.5" />
        <circle cx={200} cy={120} r={20} fill="none" stroke={stroke} strokeWidth="1.5" />
      </g>

      {/* Zone 2: CREATIVE (top-right) */}
      <g>
        <rect x={300} y={20} width={280} height={160} fill={paper} stroke={stroke} strokeWidth="1" />
        <text x={440} y={50} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>CREATIVE ZONE</text>
        <text x={440} y={66} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>chalk · easels · loose parts</text>
        {[0,1,2,3,4].map((i) => <rect key={i} x={350 + i*30} y={120} width={20} height={20} fill="none" stroke={stroke} strokeWidth="1" />)}
      </g>

      {/* Zone 3: QUIET (bottom-left) */}
      <g>
        <rect x={20} y={180} width={280} height={160} fill={paper} stroke={stroke} strokeWidth="1" />
        <text x={160} y={210} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>QUIET ZONE</text>
        <text x={160} y={226} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>books · board games</text>
        {[0,1,2].map((i) => <rect key={i} x={80 + i*60} y={260} width={48} height={48} fill="none" stroke={stroke} strokeWidth="1" />)}
      </g>

      {/* Zone 4: TRANSITION (bottom-right) */}
      <g>
        <rect x={300} y={180} width={280} height={160} fill={paper95} stroke={stroke} strokeWidth="1" />
        <text x={440} y={210} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>TRANSITION ZONE</text>
        <text x={440} y={226} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>line-up · regulated wait</text>
        {[0,1,2,3,4,5].map((i) => <circle key={i} cx={370 + i*28} cy={290} r={8} fill={stroke} />)}
      </g>

      {/* Camera coverage cone — single example */}
      <g>
        <circle cx={300} cy={180} r={6} fill={accent} />
        <text x={310} y={170} fontSize="9" fontFamily="ui-monospace, monospace" fill={accent} fontWeight="700">CAM</text>
        <path d="M 300 180 L 100 100 L 100 260 Z" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="0.5" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}
