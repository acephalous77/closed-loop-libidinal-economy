import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";
import { LifecycleStrip } from "../_components/LifecycleStrip";
import { IntakeHeader } from "../_components/IntakeHeader";

export const metadata: Metadata = {
  title: "Phase III — Adolescent Calibration",
  description:
    "OHCOSE Phase III — Adolescent Calibration & Libidinal Integration (13–18 yrs). Calibrating desire for the market. Packaging rebellion. The digital feed. The pharmacopornographic order. The initiate.",
  alternates: { canonical: "/ohcose/iii-adolescent-calibration" },
};

const SUB_PROTOCOLS = [
  {
    slug: "calibrating-desire",
    code: "3.1",
    name: "Calibrating Desire for the Market",
    summary:
      "The continuous launch of new subjectivities. The channeling of adolescent restlessness into consumer behaviors.",
    status: "live",
  },
  {
    slug: "rebellion-packaged",
    code: "3.2",
    name: "Rebellion Packaged & Sold",
    summary:
      "Commodified subculture. The styling of dissent. The limits of market-sanctioned refusal.",
    status: "live",
  },
  {
    slug: "digital-architectures",
    code: "3.3",
    name: "Digital Architectures of Adolescent Life",
    summary:
      "The feed as scaffold. Machinic preemption of spontaneity. Continuous archival of peer interaction.",
    status: "live",
  },
  {
    slug: "pharmacopornographic-order",
    code: "3.4",
    name: "The Pharmacopornographic Order",
    summary:
      "Sex- and substance-regimes. Managed eroticism. Performance-pharmacology as norm.",
    status: "live",
  },
  {
    slug: "quantified-selfhood",
    code: "3.5",
    name: "Quantified Selfhood & Neurochemical Authority",
    summary:
      "Self-tracking apps. Wellness scoring. Outsourcing of self-perception to the dashboard.",
    status: "live",
  },
  {
    slug: "the-initiate",
    code: "3.6",
    name: "The Initiate — Debt & Hustle",
    summary:
      "Student debt as rite of passage. The startup mythology. The hand-off to Phase IV Economic Subjectification.",
    status: "live",
  },
];

export default function PhaseIIIAdolescentCalibration() {
  return (
    <PageFrame pageNum="III" secCode="OHCOSE / LR / Phase III">
      <nav className="mb-md">
        <Link
          href="/ohcose"
          className="font-mono uppercase hover:underline"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}
        >
          ← schedule of phases
        </Link>
      </nav>

      <PhaseBanner code="Phase III" title="Adolescent Calibration" qualifier="13–18 yrs" />

      {/* Lifecycle strip — position in the eight-phase arc */}
      <LifecycleStrip current={3} />

      <IntakeHeader phase={3} roman="III" name="Adolescent Calibration" span="13–18 yrs" protocols={6} />

      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div
          className="font-mono uppercase mb-md"
          style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Phase Statement
        </div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase III opens at the age-twelve boundary and closes at the
            age-eighteen boundary, at which point the Standard Consumer-Citizen
            is handed off to Phase IV Economic Subjectification. The
            Phase-III mandate is the calibration of newly-emerging
            adolescent desire to the market's available channels, the
            packaging of any residual refusal energy as a purchasable
            style, and the installation of the lifelong self-tracking
            posture under which Phases IV through VII operate.
          </p>
          <p>
            The work proceeds along six sub-protocols. Phase-III subjects
            present greater volatility than Phase-II subjects; the Office's
            instruments respond by deepening calibration. They do not
            restrain the subject; they intensify. Caregivers serving in Phase III are
            asked to recognize that the subject's adolescent register
            requires the appearance of caregiver retreat. The retreat is
            permitted. The Office's instruments do not retreat.
          </p>
        </div>
      </section>

      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div
          className="font-mono uppercase mb-md text-center"
          style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Schedule of Sub-Protocols
        </div>

        <ol>
          {SUB_PROTOCOLS.map((s) => {
            const Row = (
              <>
                <span
                  className="font-mono font-bold tabular-nums"
                  style={{ color: "var(--color-ink)", fontSize: "1rem", width: "3.5rem" }}
                >
                  {s.code}
                </span>
                <span className="flex-1">
                  <span
                    className="block group-hover:underline"
                    style={{ color: "var(--color-ink-90)", fontSize: "1.15rem", fontWeight: 600 }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="block text-sm mt-xs leading-snug"
                    style={{ color: "var(--color-ink-70)" }}
                  >
                    {s.summary}
                  </span>
                </span>
                <span
                  className="font-mono uppercase"
                  style={{
                    color: "var(--color-oxblood)",
                    border: "1px solid var(--color-oxblood)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    padding: "0.2rem 0.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  publ.
                </span>
              </>
            );
            return (
              <li
                key={s.slug}
                className="py-sm flex items-baseline gap-md"
                style={{ borderBottom: "1px solid var(--color-paper-85)" }}
              >
                <Link
                  href={`/ohcose/iii-adolescent-calibration/${s.slug}`}
                  className="contents group"
                >
                  {Row}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p
          className="text-sm leading-snug text-center uppercase tracking-wider"
          style={{ color: "var(--color-ink-50)" }}
        >
          All Phase III sub-protocols are published.<br />
          Phase IV (Economic Subjectification, 19–30 yrs) opens upon the subject's eighteenth birthday.
        </p>
      </section>
    </PageFrame>
  );
}
