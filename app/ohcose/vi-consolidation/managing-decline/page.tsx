import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.2 — Managing the Decline",
  description: "OHCOSE Phase VI, Sub-Protocol 6.2. Health optimization. The wellness pivot operationalized for the aging productive subject.",
  alternates: { canonical: "/ohcose/vi-consolidation/managing-decline" },
};

export default function ManagingDecline() {
  return (
    <PageFrame pageNum="6.2" secCode="OHCOSE / LR / SP-6.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.2" title="Managing the Decline" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.2</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Managing the Decline</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          Health optimization. Graceful aging. The wellness pivot
          operationalized for the productive subject whose body is
          beginning to push back.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.2.1" title="The Optimization Mandate" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              By the mid-fifties the subject's body begins to register
              the cumulative cost of prior Phases. The Office's
              response is the Phase-VI Health Optimization regime:
              additional preventive screenings, prescribed exercise
              protocols, supplement adjustments, and continuous
              biomarker monitoring through the wearable suite the
              subject has worn since Phase III. The Office's framing
              is that the subject is investing in their continued
              productive participation. The framing succeeds.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.2.2" title="Phase-VI Wellness Profile" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's standard Phase-VI Wellness Profile, the
            cohort-median view shared with the subject quarterly.
          </p>
          <WellnessProfile />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 6.2.A — Specimen Phase-VI Wellness Profile</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation/high-water-mark" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 6.1 high-water mark</Link>
          <Link href="/ohcose/vi-consolidation/intergenerational-obligations" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>6.3 intergenerational →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function WellnessProfile() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const markers = [
    { name: "Cardiovascular", value: "stable", trend: "→", note: "BP / LDL within target" },
    { name: "Metabolic", value: "watch", trend: "↓", note: "fasting glucose trending up" },
    { name: "Skeletal", value: "stable", trend: "→", note: "bone density Z-score -0.4" },
    { name: "Cognitive", value: "strong", trend: "↑", note: "baseline assessment normal" },
    { name: "Sleep architecture", value: "stable", trend: "→", note: "REM% within band" },
    { name: "Inflammatory", value: "watch", trend: "↑", note: "hs-CRP at upper bound" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase VI</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Quarterly Wellness Profile</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>C-2031-4A7Q-9X02-1A</div>
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", color: ink50 }}>age 55 · Q2</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {markers.map((m) => (
          <div key={m.name} style={{ border: "1px solid var(--color-paper-85)", padding: "0.6rem" }}>
            <div className="flex justify-between items-baseline">
              <span className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink50 }}>{m.name}</span>
              <span className="tabular-nums" style={{ fontSize: "0.95rem", color: m.value === "watch" ? accent : ink, fontWeight: 700 }}>{m.value} {m.trend}</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: ink70, marginTop: "0.2rem" }}>{m.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-md pt-sm" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>recommendation</div>
        <div style={{ fontSize: "0.8rem", color: ink70, marginTop: "0.2rem" }}>
          Add metabolic-watch supplement stack (Form WP-22). Continue exercise protocol at current intensity. Re-test fasting glucose in 90 days.
        </div>
      </div>
    </div>
  );
}
