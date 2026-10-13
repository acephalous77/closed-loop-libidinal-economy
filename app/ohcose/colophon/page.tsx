import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../_components/PageFrame";
import { SectionHead } from "../_components/SectionHead";
import { WorksDoor } from "@/components/navigation/WorksDoor";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "OHCOSE colophon. Document attribution. Out-of-character disclosure.",
  alternates: { canonical: "/ohcose/colophon" },
};

export default function OhcoseColophon() {
  return (
    <PageFrame pageNum="c" secCode="OHCOSE / LR / Colophon">
      <nav className="mb-md">
        <Link
          href="/ohcose"
          className="font-mono uppercase hover:underline"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}
        >
          ← schedule of phases
        </Link>
      </nav>

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Document Attribution
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Colophon
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The page that breaks character. What this document actually is,
          who made it, and what it only appears to be.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* OUT-OF-CHARACTER DISCLOSURE */}
        <section>
          <SectionHead code="c.1" title="What This Is" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              <strong>OHCOSE</strong> is a critical-fiction performance piece
              authored by <strong>Adnan Selimović</strong>. The federal agency
              is fictional. The document is fictional. The Standard
              Consumer-Citizen and the Gen-C Model do not exist. The forms
              cited throughout (Form 1-A, Form 6-A, Form 9-Q, and the rest)
              do not exist. The C-ID format does not exist. The Compliance
              Postures, Wellness Dashboards, Substance Schedules, and
              Initiation Certificates do not exist.
            </p>
            <p>
              They are written as if they did. The work's argument lives
              in that gap.
            </p>
            <p>
              The seven Phases — Ontogenesis, Inscriptive Normalization,
              Adolescent Calibration, Economic Subjectification, Peak
              Productivity, Consolidation, Exit — describe a contemporary
              lifecycle as it has been redesigned by the political-economic
              architecture of late consumer capitalism. The bureaucratic
              voice in which the redesign is presented is the satire. The
              redesign itself is documented in the work's footnotes and
              the lineage below.
            </p>
          </div>
        </section>

        {/* INTELLECTUAL LINEAGE */}
        <section>
          <SectionHead code="c.2" title="Lineage" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The work reads through and against:
              Michel Foucault on discipline and biopolitics;
              Bernard Stiegler on proletarianization and tertiary retention;
              Byung-Chul Han on psychopolitics and the wellness imperative;
              Franco "Bifo" Berardi on the subsumption of language, creativity, and affect;
              Maurizio Lazzarato on the continuous launch of subjectivities;
              Paul B. Preciado on the pharmacopornographic regime;
              Jean-François Lyotard on the libidinal economy;
              Gilles Deleuze and Félix Guattari on desire and the control society;
              Karl Marx on surplus value (here extended to psychic surplus).
            </p>
            <p>
              The work is also continuous with the author's other projects
              at this atelier — most directly with the{" "}
              <Link
                href="/closed-loop"
                style={{ color: "var(--color-oxblood)", textDecoration: "underline" }}
              >
                Closed-Loop Libidinal Economy
              </Link>
              , which provides the formal framework (the foreclosure lemma,
              the reclamation theorem, the three modes of intervention)
              that OHCOSE dramatizes as institutional procedure.
            </p>
          </div>
        </section>

        {/* MANUSCRIPT */}
        <section>
          <SectionHead code="c.3" title="Manuscript &amp; Drafting" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The site is built from a manuscript draft titled simply{" "}
              <em>OHCOSE</em> (December 2025) — an eight-chapter document
              describing the lifecycle Phases I–VII plus a closing chapter
              on the Ouroboros Machine. The on-site work recasts the
              manuscript, going beyond transcription. The voice has been recast:
              the critical-theory analytical layer has been removed; the
              in-character Office voice has been drafted fresh per page
              and run through the author's de-AI principles. The manuscript
              remains the work's spine.
            </p>
            <p>
              Each sub-protocol presents one of the manuscript's diagnostic
              moves as if it were a real Office procedure. The fresh
              visualizations — the Cradle Anchoring Schematic, the
              Caregiver Compliance Posture, the Phase-I Yield Schedule,
              the Bell-Keyed Day, the Parent–Teacher Feedback Rubric, the
              Emotional Hygiene Compliance Report, the Yard Zone Map, the
              Consumption Pipeline, the Corridor Passage diagram, the
              Subjectivity Catalog, the Feed Composition Chart, the
              Wellness Dashboard, the Initiation Certificate — are
              instruments the work invented to make the manuscript's
              claims operable.
            </p>
          </div>
        </section>

        {/* SEAL + DESIGN */}
        <section>
          <SectionHead code="c.4" title="Design" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The official seal — Office of Human Continuity and Social
              Equilibrium — is an original design by the author. Page
              chrome (eggshell paper, gray border frame, OHCOSE word-mark
              top-right, doc-code stamp bottom-right, barcode bottom-left,
              red page number bottom-center) follows the published
              OHCOSE Report (Jun 2025) layout language.
            </p>
            <p>
              Typography: system institutional sans
              (Helvetica Neue / Inter / Arial). JetBrains Mono for
              document numbers and codes (open-source under SIL OFL).
              Accent red <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>#9c1818</span> —
              form-rejection register.
            </p>
          </div>
        </section>

        {/* LICENSE + CITATION */}
        <section>
          <SectionHead code="c.5" title="License &amp; Citation" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Textual content: <strong>CC BY-SA 4.0</strong>. Code: <strong>MIT</strong>.
              Citation welcome.
            </p>
            <p>
              Suggested citation: Selimović, A. <em>OHCOSE: Office of
              Human Continuity and Social Equilibrium</em>. 2026.
              autostimulus.org/ohcose
            </p>
          </div>
        </section>

        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ schedule of phases</Link>
          <WorksDoor className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }} />
        </nav>
      </article>
    </PageFrame>
  );
}
