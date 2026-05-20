import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ENTRIES } from "../page";

const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";
const ACCENT = "#7a3a14"; // archive sepia

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

/**
 * The actual encyclopedia entries. Each is voiced as a future-historian
 * retrospective on a specific aspect of the Ouroboros Life System,
 * written in dispassionate scholarly prose with period-appropriate
 * archive markers and cross-references between entries.
 */

interface Body {
  paragraphs: (string | { quote: string })[];
  crossRefs?: { code: string; slug: string; note: string }[];
}

const BODIES: Record<string, Body> = {
  "ouroboros-ring": {
    paragraphs: [
      `The Ring is the apparatus's most legible design choice and its most candid one. A continuous closed circuit, mounted to the chair's base by adjustable arms, encircles the occupant at chest height; every input the occupant requires and every output the occupant generates routes through the Ring's tubing or its embedded cable assemblies. The visual logic, openly cited in the period marketing materials, is the ancient symbol of the snake devouring its tail.`,

      `Read in retrospect, the Ring is the apparatus's structural confession. Where the chair's surface advertising described an "ergonomic enclosure" and "total automation," the Ring stated outright that the occupant's nutrition, hydration, sedation, evacuation, and productive output were components of a single feedback loop. The occupant was the loop's variable element; the Ring was its constant.`,

      `Period theorists, writing in the same decades that produced the chair, had already developed the conceptual vocabulary the apparatus realized: the "closed-loop libidinal economy," the "foreclosure of the no-input window," the reduction of the subject to a node within an extraction circuit. The chair's designers, whether they knew the literature or not, built it as architecture.`,
    ],
    crossRefs: [
      { code: "2197.14", slug: "proto-apparatuses", note: "On the proto-systems that prefigured the Ring's logic." },
      { code: "2197.22", slug: "eternal-tier", note: "On the post-mortem persistence of the loop's data record." },
    ],
  },

  "period-typography": {
    paragraphs: [
      `Marketing materials surviving from the apparatus's commercial period exhibit characteristic typographic irregularities: "Goming Screen" for "Gaming Screen," "Wate exration" for "Waste Extraction," "Mobility Sensors (O₂ Senulus I)" for the intended sensor designation, "Panitation & Chemical Stimirutns" for "Sanitation & Chemical Stimulants," and dozens of related malformations across the corpus.`,

      `The errors are not typesetting mistakes. They are the visible signature of the period's dominant production technology: large generative diffusion models trained on text-and-image pairs, which by the late 2020s had begun rendering most consumer-product illustration and which had not yet solved the rendering of small label text. The malformations cluster around captions and label callouts &mdash; precisely where a 20th-century designer would have set type with intention.`,

      `Historians of the period have been divided on whether to correct these artifacts in archived materials. The present archive declines to correct them. They are evidence: a layer of the apparatus's manufacture that the apparatus's marketing voice could not fully suppress.`,

      { quote: "The visual signal of the period was not the absence of meaning but its near-miss." },

      `One scholar (Kreuzer 2174) has argued that the apparatus's marketing materials should be read as the period's first instance of a typographic register specific to algorithmically-produced consumer artifacts: a near-language, hovering just below the threshold at which the eye stops parsing. The reader who notices the typos has, by that act, exited the marketing voice.`,
    ],
  },

  "pro-tier-moratorium": {
    paragraphs: [
      `In Q3 of 2049 the European Union and three associated Tier-2 sovereignties issued a coordinated moratorium on new sales of the Pro-tier configuration. The official justification cited the tier's neural-feedback work terminal, which had been demonstrated in regulatory testing to maintain the occupant's productivity output during episodes that occupant biomarkers classified as severe affective distress.`,

      `The manufacturer's response, preserved in the proceedings, was that the productivity-feedback subsystem was operating within its published parameters and that any cessation of work-output during distress would have constituted a deviation from the contracted service level. The argument was lost. The Pro tier was withdrawn in the affected jurisdictions for sixteen months and was reintroduced in 2050 with a revised set of distress-cutoff thresholds.`,

      `The moratorium is significant less for what it suspended than for what it permitted to continue. The Essential and Eternal tiers remained in continuous distribution throughout. The case clarified the period's regulatory horizon: a Pro-tier subject in distress was a regulable population; an Essential-tier subject in distress was not.`,
    ],
    crossRefs: [
      { code: "2197.22", slug: "eternal-tier", note: "On the configuration the moratorium did not touch." },
    ],
  },

  "proto-apparatuses": {
    paragraphs: [
      `The Ouroboros Life System did not emerge as a singular invention. By the time of its commercial introduction (c. 2025–2030), the period's media-industrial complex had already produced a dense family of proto-apparatuses, each implementing a partial version of what the OLS would later consolidate.`,

      `The social-media platforms of the early platform era (notably the Meta corporation's Facebook and Instagram surfaces) had established that an attention-extracting feedback loop could be sustained at population scale by algorithmic selection of content against user engagement signals. A 2014 internal experiment, openly published, had demonstrated that the platform could induce specified emotional states in roughly one in fifty users by adjusting the affective composition of their feed. The result was generally treated, at the time, as a methodological curiosity rather than as a constitutive demonstration of the medium.`,

      `Adjacent to this surface, the short-form video platform TikTok (operated by ByteDance, c. 2017–) had refined the attention-extraction loop into a subconscious-preference identification engine: the platform's recommender did not query the user about their preferences but inferred them from the user's micro-gestural responses (swipe timing, dwell, replay).`,

      `In a parallel domain, the pornographic-media industry &mdash; what the theorist Paul Preciado called the "pharmacopornographic regime" &mdash; had been performing the same kind of inference on libidinal preference at intimate granularity since the early 2010s. The data-mining apparatus there was operationally identical to the social-media one; only the affective domain was different.`,

      `And in the sphere of governance: the Chinese Social Credit System (rolled out c. 2014–2020) operated the same logic at a single layer of remove, scoring citizens against a behavioral compliance metric and routing the score into access privileges across the lifecycle.`,

      `The Ouroboros Life System, viewed against these precedents, was not an invention. It was a packaging exercise. The apparatus consolidated into a single piece of consumer furniture what the platforms had already, separately, demonstrated could be done.`,
    ],
    crossRefs: [
      { code: "2197.04", slug: "ouroboros-ring", note: "On the geometric figure that named the consolidation." },
      { code: "2197.26", slug: "testimonial-analysis", note: "On the voice the consolidation required." },
    ],
  },

  "eternal-tier": {
    paragraphs: [
      `The Eternal configuration, priced "on request" and only available through direct manufacturer-issued invitation, extended the apparatus's service contract beyond the biological cessation of the occupant. The manufacturer's published guidance was that the Eternal contract included "estate transfer protocols" and "post-mortem data continuity" &mdash; phrases which, in the period's commercial vernacular, signaled the persistence of the occupant's productivity-feedback record and their consumer-preference profile beyond the occupant's death.`,

      `The literal architecture is recoverable from the surviving contract templates. The occupant's installed C-ID (the federal Consumer Identity assigned at biometric registration in the same period's lifecycle administration; see the parallel archive on the Office of Human Continuity) persisted in the apparatus's ledger for ninety-nine standard fiscal years after the occupant's death. During that interval, the occupant's preference profile remained an active datum for the manufacturer's brand partners. The occupant's adult inheritors did not own the profile; they were assigned the obligation to maintain the chair against eventual reactivation.`,

      `The Eternal tier's most striking feature, retrospectively, is that it was sold. There is no record of an Eternal contract being refused on grounds of repugnance. The configuration cleared regulatory review in every jurisdiction in which the OLS was approved for distribution. The reason, on the surviving evidence, was structural: the regulatory frameworks of the period adjudicated harms to the living. The Eternal tier was the manufacturer's wager that no framework would assess the harm of being administered after death.`,

      { quote: "The dead consumer was the only consumer who did not complain." },
    ],
    crossRefs: [
      { code: "2197.11", slug: "pro-tier-moratorium", note: "On the configurations regulation did, and did not, touch." },
    ],
  },

  "testimonial-analysis": {
    paragraphs: [
      `The marketing materials surviving from the OLS commercial period include a single canonical testimonial, attributed to an occupant identified as &ldquo;M.K., Pro tier · Cohort 2026.04&rdquo;: <em>I haven't had to stand up in nine months. The Pro tier has changed everything. My productivity is at an all-time high and I genuinely cannot imagine going back.</em>`,

      `The specimen is studied less for its authenticity (which is irrecoverable) than for its register. The voice is recognizable as a period-typical instance of what scholars have called the &ldquo;sincere-captive&rdquo; mode: an affective testimony delivered without irony, in which the occupant articulates the apparatus's constraints as the apparatus's gifts. The grammatical structure (the gratitude clause, the testimony of "transformation," the disavowal of any alternative) belongs to the same register as the gym-membership testimony, the franchise-onboarding video, the lifestyle-influencer's monologue.`,

      `What distinguishes the OLS testimonial from its commercial-class predecessors is the literal content. The occupant reports an inability to stand and presents this inability as accomplishment. The reader of the period would have parsed the testimony as ordinary marketing copy. The reader of the present period parses it as a confession.`,

      `The shift is not in the text. The text is the same. The shift is in what the period considered ordinary.`,
    ],
    crossRefs: [
      { code: "2197.04", slug: "ouroboros-ring", note: "On the apparatus the testimony describes." },
      { code: "2197.14", slug: "proto-apparatuses", note: "On the voice's commercial-class ancestry." },
    ],
  },

  "fitting-ritual": {
    paragraphs: [
      `Distribution of the OLS was channeled through a domestic-visit calibration procedure the manufacturer named the &ldquo;fitting.&rdquo; A bonded consultant arrived at the prospective occupant's residence with a portable measurement kit, conducted four hours of biometric and postural calibration, and departed with the dimensional and physiological specifications required to manufacture a tier-appropriate unit. The fitting was the precondition of purchase; no chair was sold to an unfitted occupant.`,

      `The ritual's surface logic was medical: the chair was to be tailored to the occupant's body in the same manner that a custom suit was tailored or, more precisely, that a prosthesis was. The period's marketing materials emphasized this register openly &mdash; the consultant wore a white coat, carried instruments, took notes.`,

      `What the marketing materials elided is recoverable from the surviving consultant training documents (Office of Manufacturer Compliance, 2034). The fitting was also an occasion for the consultant to assess the residence: floor-load capacity for the apparatus's 380-kilogram operating weight, electrical service for the continuous power draw, drainage proximity for the waste-extraction tie-in, and &mdash; most significantly &mdash; the occupant's household compliance environment. A consultant who flagged the household as &ldquo;non-supportive&rdquo; could decline to certify the fitting. The occupant could not then proceed to purchase.`,

      { quote: "The fitting was the apparatus's first instrument. It admitted the cooperative; it identified the resistant." },

      `Period scholarship has read the fitting as a domesticated inversion of the medical intake: where the intake assessed the patient against the diagnosis, the fitting assessed the household against the prosthesis. The chair was not, on this reading, a product the occupant chose. The chair was an apparatus the household had been invited to host.`,
    ],
    crossRefs: [
      { code: "2197.11", slug: "pro-tier-moratorium", note: "On the regulatory horizon of the apparatus's distribution." },
      { code: "2197.22", slug: "eternal-tier", note: "On the contractual extension beyond the fitting." },
    ],
  },

  "waste-subsystem": {
    paragraphs: [
      `Of the five Ouroboros Ring subsystems, the waste-extraction line is the one the period's marketing materials most carefully managed. The subsystem appears in the surviving copy under a small set of euphemistic designations: &ldquo;the chair's continuous-comfort line,&rdquo; &ldquo;the discreet sanitation interface,&rdquo; &ldquo;the cycle-closure subsystem,&rdquo; &ldquo;the eliminative routine.&rdquo; The literal function &mdash; catheterized urine collection and colostomy-port fecal extraction, both running continuously throughout the occupant's residence in the chair &mdash; was rarely named in marketing copy intended for the prospective occupant.`,

      `The discrepancy is instructive. Period marketing for analogous medical devices (dialysis units, ostomy equipment, indwelling catheters) routinely named the function explicitly, because the addressee was either a patient or a caregiver who had already accepted that the function was inevitable. The OLS marketing's addressee had not. The prospective occupant was being sold the chair as an aspirational lifestyle device, and the lifestyle had to be reconcilable with the body that would inhabit it.`,

      `The subsystem itself was, by all accounts, technically excellent. Surviving service records show extremely low rates of complication. The euphemism was not motivated by engineering shame. It was motivated by sales.`,

      { quote: "The chair could process the waste. The marketing could not." },

      `One scholar (Imai 2188) has noted that the OLS's waste-extraction copy provides the period's clearest documented case of the gap between what a consumer product was, in operation, and what the consumer was permitted to know about it before purchase. The apparatus that the occupant lived in for years was advertised with vocabulary the occupant would not, in any other domain, have accepted from a vendor.`,
    ],
    crossRefs: [
      { code: "2197.04", slug: "ouroboros-ring", note: "On the loop the subsystem closed." },
      { code: "2197.30", slug: "fitting-ritual", note: "On the consultant who carried the apparatus's full functional disclosure." },
    ],
  },

  "refurbished-aftermarket": {
    paragraphs: [
      `Following the OLS's formal proscription in the Tier-2 jurisdictions (c. 2058&ndash;2061, varying by sovereign), an active aftermarket emerged in refurbished units. The trade persisted for approximately forty years before declining into negligible volume in the late 2090s.`,

      `The aftermarket's commercial structure is recoverable from a small but consistent body of surviving court records. Units were generally sold by intermediaries who had acquired them from estates following the death of original occupants &mdash; estates which, under the Eternal-tier protocols, had been obligated to maintain the chair against reactivation but which had no further use for the apparatus once its original occupant ceased to function. Refurbishment consisted principally of replacement of consumable tubing assemblies and re-flashing of the productivity-feedback firmware to a version that would accept the new occupant's biometric registration.`,

      `The aftermarket's customer base was, on the surviving evidence, distinct from the original OLS market. Where the original product had been sold to professional-class subjects integrating the chair into a productivity-extraction lifestyle, the aftermarket served principally subjects who had been excluded from licit work and who used the chair as a single-room habitation. The energy-extraction tie-in, designed in the original era to feed the occupant's productive output back to the grid, was in the aftermarket era often disconnected entirely. The chair became, in this period, a place to live rather than a place to work.`,

      `This shift in use is one of the period's most-cited cases of how apparatus designed for one purpose acquires a second purpose its designers neither anticipated nor controlled. The OLS, designed as a productivity-extraction enclosure, ended its commercial life as cheap housing.`,
    ],
    crossRefs: [
      { code: "2197.11", slug: "pro-tier-moratorium", note: "On the regulatory horizon that produced the aftermarket." },
      { code: "2197.22", slug: "eternal-tier", note: "On the contractual mechanism that supplied it." },
      { code: "2197.48", slug: "successor-systems", note: "On what eventually replaced both the apparatus and its aftermarket." },
    ],
  },

  "successor-systems": {
    paragraphs: [
      `The Ouroboros Life System's commercial era ended in the 2050s, but the logic the apparatus had instantiated did not. The OLS's successor systems &mdash; what scholars have called the &ldquo;post-furniture&rdquo; generation of integrated apparatus &mdash; abandoned the chair's external enclosure form and migrated the same functions into the body itself.`,

      `The progression is recoverable in stages. The first successor, the Continuous Care Wearable (c. 2052), externalized the chair's biometric-monitoring and nutrient-delivery functions into a forearm cuff and a chest-mounted feed interface. The second, the Embedded Service Suite (c. 2061), implanted the relevant interfaces subcutaneously, eliminating the need for an external apparatus altogether. The third, in market by 2074, integrated the productivity-feedback subsystem directly into the cortical substrate.`,

      `The shift in commercial vocabulary is informative. The OLS had been sold as &ldquo;life support.&rdquo; The Continuous Care Wearable was sold as &ldquo;continuous care.&rdquo; The Embedded Service Suite was sold as &ldquo;wellness optimization.&rdquo; The cortical successor was sold as &ldquo;direct neural availability.&rdquo; At no point did the marketing copy describe the function the apparatus actually performed.`,

      { quote: "The chair was visible; the successor was wearable; the successor's successor was indistinguishable from the body it inhabited." },

      `The period's regulators consistently lagged the apparatus by approximately one product generation. Each successor reached commercial maturity in the interval between its predecessor's restriction and the regulatory framework's understanding that the new product was the previous product wearing different vocabulary.`,

      `By the late 22nd century the productivity-feedback subsystem had become a constitutive feature of the human body's commercial valuation: the body that did not carry an installed feedback interface was the body that could not be employed. At this point the apparatus that began as a chair had completed its disappearance into its occupant.`,
    ],
    crossRefs: [
      { code: "2197.04", slug: "ouroboros-ring", note: "On the form the apparatus eventually shed." },
      { code: "2197.14", slug: "proto-apparatuses", note: "On the earlier systems the chair had consolidated and the successors disaggregated again." },
      { code: "2197.41", slug: "refurbished-aftermarket", note: "On what happened to the chair itself once its functions migrated elsewhere." },
    ],
  },
};

export function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = ENTRIES.find((e) => e.slug === slug);
  if (!entry) return {};
  return {
    title: { absolute: `Entry ${entry.code} — ${entry.title}` },
    alternates: { canonical: `/chair/archive/${slug}` },
    robots: { index: false },
  };
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = ENTRIES.find((e) => e.slug === slug);
  const body = BODIES[slug];
  if (!entry || !body) notFound();

  return (
    <main
      style={{
        maxWidth: "42rem",
        margin: "0 auto",
        padding: "5rem 5vw 6rem",
      }}
    >
      {/* Top nav */}
      <nav style={{ marginBottom: "3rem" }}>
        <a
          href="/chair/archive"
          style={{
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_70,
            textDecoration: "none",
          }}
        >
          ← Imperial Archive
        </a>
      </nav>

      {/* Entry head */}
      <header style={{ borderBottom: `2px solid ${INK}`, paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: ACCENT,
            margin: 0,
            fontWeight: 700,
          }}
        >
          Entry {entry.code}
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            margin: "0.6rem 0 0",
            color: INK,
          }}
        >
          {entry.title}
        </h1>
        <p
          style={{
            marginTop: "0.8rem",
            fontFamily: SERIF,
            fontSize: "0.95rem",
            color: INK_70,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {entry.summary}
        </p>
      </header>

      {/* Body */}
      <article>
        {body.paragraphs.map((p, i) => {
          if (typeof p === "string") {
            return (
              <p
                key={i}
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "#1a1a1a",
                  margin: "0 0 1.5rem",
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            );
          }
          return (
            <blockquote
              key={i}
              style={{
                margin: "2rem 0 2.5rem",
                paddingLeft: "1.5rem",
                borderLeft: `2px solid ${ACCENT}`,
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.25rem",
                lineHeight: 1.5,
                color: INK,
              }}
            >
              {p.quote}
            </blockquote>
          );
        })}
      </article>

      {/* Cross-references */}
      {body.crossRefs && body.crossRefs.length > 0 && (
        <section style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: `1px solid ${INK_20}` }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: INK_40,
              marginBottom: "1rem",
            }}
          >
            See also
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {body.crossRefs.map((cr) => (
              <li
                key={cr.slug}
                style={{
                  padding: "0.6rem 0",
                  borderBottom: `1px solid ${INK_20}`,
                }}
              >
                <a
                  href={`/chair/archive/${cr.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "4.5rem 1fr",
                    columnGap: "1rem",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.78rem",
                      color: ACCENT,
                      fontWeight: 700,
                    }}
                  >
                    {cr.code}
                  </span>
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: "0.95rem",
                      color: INK_70,
                      fontStyle: "italic",
                      lineHeight: 1.45,
                    }}
                  >
                    {cr.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Archivist's mark */}
      <p
        style={{
          marginTop: "3rem",
          fontFamily: MONO,
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: INK_40,
          textAlign: "right",
        }}
      >
        — Imperial Archive · accession 2197 · entry {entry.code}
      </p>
    </main>
  );
}
