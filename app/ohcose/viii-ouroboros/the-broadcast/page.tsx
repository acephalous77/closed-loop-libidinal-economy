import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "8.4 — The Broadcast",
  description: "OHCOSE Phase VIII, Sub-Protocol 8.4. The Office's announcement to the cohorts in residence — spoken in the smooth, comforting tones of the apparatus's own voice.",
  alternates: { canonical: "/ohcose/viii-ouroboros/the-broadcast" },
};

export default function TheBroadcast() {
  return (
    <PageFrame pageNum="8.4" secCode="OHCOSE / LR / SP-8.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/viii-ouroboros" className="hover:underline">← phase VIII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 8.4" title="The Broadcast" qualifier="Phase VIII · Ouroboros Machine" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 8.4</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The Broadcast</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Office's standing announcement, transmitted across the
          channels of all the cohorts in residence. Spoken in the
          smooth, comforting tones of the apparatus's own voice.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="8.4.1" title="Transmission Notice" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At the conclusion of every fiscal cycle the Office issues
              the standing Broadcast across the digital architecture
              the cohorts use. The Broadcast is the apparatus's own
              voice, addressed to the user-citizens in their daily
              register: warm, attentive, faintly congratulatory. The
              Broadcast speaks without inviting reply. The Broadcast is
              the apparatus reporting on itself, in its own register,
              to the population it administers.
            </p>
            <p>
              The text below is the standard cycle-closing transmission.
              It is reproduced here for the archival record.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="8.4.2" title="The Transmission" />
          <Broadcast />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 8.4.A — Standing transmission text (cycle-close)</p>
        </section>
        <section>
          <SectionHead code="8.4.3" title="On Reception" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office reports that the Broadcast is heard by
              approximately 96.4% of user-citizens in residence, and
              that engagement with the Broadcast (defined as a
              non-instantaneous skip-through) sits at 71.8%. The
              Broadcast is the most-engaged single piece of content
              the Office issues. The Office considers this
              confirmation that the cycle, the apparatus, and the
              user-citizens are jointly operating within the
              published parameters.
            </p>
            <p>
              End of Schedule. End of Phase VIII. The cycle continues.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/viii-ouroboros/post-human-harvest" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 8.3 post-human harvest</Link>
          <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ schedule of phases</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function Broadcast() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  return (
    <div className="my-md" style={{ border: "3px double var(--color-ink)", background: "var(--color-paper)", padding: "2rem 1.75rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-md mb-md" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: ink50 }}>OHCOSE</div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.2rem", color: ink, letterSpacing: "0.04em" }}>Cycle-Closing Transmission</div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>standing text · all cohorts</div>
      </div>
      <div className="font-serif text-base leading-relaxed space-y-md" style={{ color: ink70, fontFamily: "var(--font-serif)" }}>
        <p style={{ fontStyle: "italic", color: ink }}>
          Dear user-citizens,
        </p>
        <p>
          The Office of Human Continuity and Social Equilibrium thanks
          you for your continued contribution to the equilibrium across
          the cycle just completed. Your output, your warmth, your
          regularity, and your care for one another have, in the
          aggregate, supported the apparatus that supports you. The
          cycle has been, by every measure the Office tracks, a
          successful one.
        </p>
        <p>
          As the cycle closes, the next opens. A new cohort is, at this
          moment, entering Phase I Ontogenesis at the certified
          facilities the Office maintains in every region. The
          calibration parameters that meet the new cohort have been
          re-tuned by the harvest your cohort contributed across the
          eight decades of your residence. They are well-prepared.
          They will not, the Office expects, encounter the frictions
          that earlier cohorts encountered. The apparatus learns. The
          apparatus thanks you.
        </p>
        <p>
          Continue, please, with your daily routines. The Office
          remains attentive. The Office remains attentive in ways
          calibrated to your present Phase and to your present cohort.
          The Office's continued attention is the substrate that makes
          your continued participation possible. Nothing is being asked
          of you that you have not already been prepared to deliver.
        </p>
        <p>
          The cycle continues. The Office thanks you for your continued
          contribution to the equilibrium.
        </p>
        <p style={{ fontStyle: "italic", color: ink, textAlign: "right", marginTop: "1.5rem" }}>
          — The Office
        </p>
      </div>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          transmission delivered across the digital architecture · standing text · revised quarterly
        </span>
      </div>
    </div>
  );
}
