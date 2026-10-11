import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARCHIVE, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter } from "../../_components/PlateChrome";
import { ENTRIES } from "../page";

const A = ARCHIVE;

// ──────────────────────────────────────────────────────────────────
// /chair/archive/[slug] — single archive entry.
// REGISTER INVERSION: scholarly slate-blue cream. Future-historian
// voice. Left rail = classification metadata; main = body + cross-refs.
// ──────────────────────────────────────────────────────────────────

interface EntryBody {
  classification: string;
  status: string;
  compiler: string;
  body: string[];          // paragraphs
  crossRefs: [string, string][];  // [code, label]
}

const BODIES: Record<string, EntryBody> = {
  "ouroboros-ring": {
    classification: "21st-century integration apparatus · primary component",
    status:         "Proscribed, 2099 (Geneva)",
    compiler:       "Tan, Y.; Müller, A.",
    body: [
      "The Ring — the apparatus's central integration component — was, in retrospect, the configuration's most economical design decision. A single circumferential structure routed every input the occupant required and every output the occupant produced, eliminating the architectural ambiguity earlier integration devices had preserved between the operator and the machine.",
      "Read in retrospect, the Ring is the apparatus's structural confession. Where the chair's surface advertising described an \"ergonomic enclosure\" and \"total automation,\" the Ring stated outright that the occupant's nutrition, hydration, sedation, evacuation, and productive output were components of a single feedback loop. The occupant was the loop's variable element; the Ring was its constant.",
      "Period theorists, writing in the same decades that produced the chair, had already developed the conceptual vocabulary the apparatus realized: the \"closed-loop libidinal economy,\" the \"foreclosure of the no-input window,\" the reduction of the subject to a node within an extraction circuit. The chair's designers, whether they knew the literature or not, built it as architecture.",
      "The Ring's iconographic candor — the apparatus naming itself an ouroboros, citing the serpent in its own marketing copy — was, by the standards of the period, unusual. Earlier integration devices preferred metaphorical concealment. The OLS's manufacturers appear to have calculated that explicit confession was, in their late-period market, an asset.",
      "Our period's verification of the Ring's actual operation is partial; the surviving devices were defaced by the cohort-2049 cataloging operation, and the device's operational logs were sealed under the Eternal-tier contracts until the proscription of 2099.",
    ],
    crossRefs: [
      ["2197.14", "Proto-apparatuses"],
      ["2197.22", "Eternal tier"],
      ["2197.29", "Sensor stack"],
      ["2197.33", "Cohort-2049 cataloging"],
    ],
  },

  "period-typography": {
    classification: "Period artifact · marketing-AI signature",
    status:         "Preserved unmodified in archive convention",
    compiler:       "Kreuzer, J.",
    body: [
      "Marketing materials surviving from the apparatus's commercial period exhibit characteristic typographic irregularities: \"Goming Screen\" for \"Gaming Screen,\" \"Wate exration\" for \"Waste Extraction,\" \"Mobility Sensors (O₂ Senulus I)\" for the intended sensor designation, \"Panitation & Chemical Stimirutns\" for \"Sanitation & Chemical Stimulants,\" and dozens of related malformations across the corpus.",
      "The errors postdate the era of the compositor and the proof. They are the visible signature of the period's dominant production technology: large generative diffusion models trained on text-and-image pairs, which by the late 2020s had begun rendering most consumer-product illustration and which had not yet solved the rendering of small label text. The malformations cluster around captions and label callouts — precisely where a 20th-century designer would have set type with intention.",
      "Historians of the period have been divided on whether to correct these artifacts in archived materials. The present archive declines to correct them. They are evidence: a layer of the apparatus's manufacture that the apparatus's marketing voice could not fully suppress.",
      "The visual signal of the period was meaning in near-miss.",
      "One scholar (Kreuzer 2174) has argued that the apparatus's marketing materials should be read as the period's first instance of a typographic register specific to algorithmically-produced consumer artifacts: a near-language, hovering just below the threshold at which the eye stops parsing. The reader who notices the typos has, by that act, exited the marketing voice.",
    ],
    crossRefs: [
      ["2197.04", "Ouroboros Ring"],
      ["2197.18", "Lineage claim"],
      ["2197.26", "Testimonial voice"],
    ],
  },

  "pro-tier-moratorium": {
    classification: "Regulatory event · tier-specific suspension",
    status:         "Resolved 2050 with revised cutoff thresholds",
    compiler:       "Aramayo, R.; Stein, B.",
    body: [
      "In Q3 of 2049 the European Union and three associated Tier-2 sovereignties issued a coordinated moratorium on new sales of the Pro-tier configuration. The official justification cited the tier's neural-feedback work terminal, which had been demonstrated in regulatory testing to maintain the occupant's productivity output during episodes that occupant biomarkers classified as severe affective distress.",
      "The manufacturer's response, preserved in the proceedings, was that the productivity-feedback subsystem was operating within its published parameters and that any cessation of work-output during distress would have constituted a deviation from the contracted service level. The argument was lost. The Pro tier was withdrawn in the affected jurisdictions for sixteen months and was reintroduced in 2050 with a revised set of distress-cutoff thresholds.",
      "The moratorium is significant for what it permitted to continue — more than for what it suspended. The Essential and Eternal tiers remained in continuous distribution throughout. The case clarified the period's regulatory horizon: a Pro-tier subject in distress was a regulable population; an Essential-tier subject in distress was not.",
    ],
    crossRefs: [
      ["2197.22", "Eternal tier"],
      ["2197.33", "Cohort-2049 cataloging"],
    ],
  },

  "proto-apparatuses": {
    classification: "Antecedent systems · platform era",
    status:         "Operationally complete by 2024",
    compiler:       "Devereux, F.",
    body: [
      "The Ouroboros Life System did not emerge as a singular invention. By the time of its commercial introduction (c. 2025–2030), the period's media-industrial complex had already produced a dense family of proto-apparatuses, each implementing a partial version of what the OLS would later consolidate.",
      "The social-media platforms of the early platform era (notably the Meta corporation's Facebook and Instagram surfaces) had established that an attention-extracting feedback loop could be sustained at population scale by algorithmic selection of content against user engagement signals. A 2014 internal experiment, openly published, had demonstrated that the platform could induce specified emotional states in roughly one in fifty users by adjusting the affective composition of their feed. The result was generally treated, at the time, as a methodological curiosity — the constitutive demonstration of the medium it actually was went unnoticed.",
      "Adjacent to this surface, the short-form video platform TikTok (operated by ByteDance, c. 2017–) had refined the attention-extraction loop into a subconscious-preference identification engine: the platform's recommender inferred the user's preferences from their micro-gestural responses (swipe timing, dwell, replay), with no query ever put to the user.",
      "In a parallel domain, the pornographic-media industry — what the theorist Paul Preciado called the \"pharmacopornographic regime\" — had been performing the same kind of inference on libidinal preference at intimate granularity since the early 2010s. The data-mining apparatus there was operationally identical to the social-media one; only the affective domain was different.",
      "And in governance: the Chinese Social Credit System (rolled out c. 2014–2020) operated the same logic at a single layer of remove, scoring citizens against a behavioral compliance metric and routing the score into access privileges across the lifecycle.",
      "The Ouroboros Life System, viewed against these precedents, was a packaging exercise. The apparatus consolidated into a single piece of consumer furniture what the platforms had already, separately, demonstrated could be done.",
    ],
    crossRefs: [
      ["2197.04", "Ouroboros Ring"],
      ["2197.18", "Lineage claim"],
      ["2197.26", "Testimonial voice"],
    ],
  },

  "lineage-claim": {
    classification: "Commercial fiction · marketing retcon",
    status:         "Documented · cited but never refuted in-period",
    compiler:       "Devereux, F.; Sato, K.",
    body: [
      "The Ouroboros Life System's commercial materials presented the apparatus as the seventh iteration of a developmental sequence beginning with an 1865 device the marketers named \"The Labor Compensator.\" The brochure's heritage section traced the sequence forward through five further iterations — the Efficiency Enhancer (1900), the Dynamic Dynamo (1925), the Knowledge Chair (1955), the Virtual Ouroboros (1985), and the OLS itself (2024) — framing the apparatus as the cumulative product of 160 years of design refinement.",
      "The lineage was a 2024 retcon. The six claimed predecessors existed; the lineage between them did not.",
      "The Labor Compensator was an actual 1860s patent (U.S. 67,341, filed by one P. R. Halloran of Charleston, S.C., 1867): a hand-cranked agricultural aid sold to Reconstruction-era plantations as a bionic assist for the recently emancipated workforce. The device shipped in measurable quantities for approximately eight years; the patent lapsed before 1880. There is no documentary connection between Halloran's device and any successor named in the OLS lineage.",
      "The Efficiency Enhancer (1900) was an actual but unrelated mechanised-agriculture rig manufactured by the Cleveland Implement Works for a single growing season. The Dynamic Dynamo (1925) was an electric loom patent; no seated workstation appears in the filing. The Knowledge Chair (1955) was an obscure desk-integrated typewriter and party-line telephone combination, sold in fewer than ninety units. The Virtual Ouroboros (1985) was a patent application that never issued; the inventor of record had no further documented connection to the technology.",
      "The OLS marketing department compiled the lineage from the period's openly accessible patent records between February and June of 2024 and presented it to the consumer as a continuous design tradition. None of the named predecessors had any developmental, corporate, or personnel connection to the OLS, to its manufacturer, or to one another.",
      "The chair was a 21st-century apparatus. The history was a 21st-century apparatus too.",
      "The retcon was an effective rhetorical maneuver. By presenting the OLS as the seventh iteration of a 160-year tradition, the manufacturer made the apparatus feel inevitable — the culmination of forces the consumer was not invited to evaluate. The reader of the heritage section encountered the chair already inside its own history. Aspiration to that history substituted for evaluation of the product.",
      "The retcon's success also illuminates something about the period's relationship to historical narrative. The same period that proscribed retconned product claims in food, pharmaceutical, and financial advertising had no analogous mechanism for assessing whether a brand's claimed design lineage was historically accurate. The OLS lineage was, in this regard, simply legally available marketing. The period's regulators treated history as decorative.",
      "One scholar (Devereux 2183) has noted that the heritage section's terminal artifact — the line \"[error. system malfunction. reboot required.]\" appearing at the bottom of the timeline in the original brochure — should be read alongside the other period-typography artifacts (see entry 2197.07). It is the same signature: a generative system used in production briefly emitted output not intended for the customer. The marketers preserved the artifact, in subsequent printings, as if it were intentional.",
    ],
    crossRefs: [
      ["2197.07", "Period typography"],
      ["2197.14", "Proto-apparatuses"],
      ["2197.26", "Testimonial voice"],
    ],
  },

  "eternal-tier": {
    classification: "Service-contract configuration · post-mortem persistence",
    status:         "Withdrawn under proscription 2099",
    compiler:       "Yi, S.",
    body: [
      "The Eternal configuration, priced \"on request\" and only available through direct manufacturer-issued invitation, extended the apparatus's service contract beyond the biological cessation of the occupant. The manufacturer's published guidance was that the Eternal contract included \"estate transfer protocols\" and \"post-mortem data continuity\" — phrases which, in the period's commercial vernacular, signaled the persistence of the occupant's productivity-feedback record and their consumer-preference profile beyond the occupant's death.",
      "The literal architecture is recoverable from the surviving contract templates. The occupant's installed C-ID (the federal Consumer Identity assigned at biometric registration in the same period's lifecycle administration; see the parallel archive on the Office of Human Continuity) persisted in the apparatus's ledger for ninety-nine standard fiscal years after the occupant's death. During that interval, the occupant's preference profile remained an active datum for the manufacturer's brand partners. The occupant's adult inheritors did not own the profile; they were assigned the obligation to maintain the chair against eventual reactivation.",
      "The Eternal tier's most striking feature, retrospectively, is that it was sold. There is no record of an Eternal contract being refused on grounds of repugnance. The configuration cleared regulatory review in every jurisdiction in which the OLS was approved for distribution. The reason, on the surviving evidence, was structural: the regulatory frameworks of the period adjudicated harms to the living. The Eternal tier was the manufacturer's wager that no framework would assess the harm of being administered after death.",
      "The dead consumer was the only consumer who did not complain.",
    ],
    crossRefs: [
      ["2197.11", "Pro-tier moratorium"],
      ["2197.04", "Ouroboros Ring"],
      ["2197.33", "Cohort-2049 cataloging"],
    ],
  },

  "testimonial-analysis": {
    classification: "Marketing artifact · canonical testimonial",
    status:         "Single specimen survives",
    compiler:       "Aramayo, R.",
    body: [
      "The marketing materials surviving from the OLS commercial period include a single canonical testimonial, attributed to an occupant identified as \"M.K., Pro tier · Cohort 2026.04\": I haven't had to stand up in nine months. The Pro tier has changed everything. My productivity is at an all-time high and I genuinely cannot imagine going back.",
      "The specimen is studied less for its authenticity (which is irrecoverable) than for its register. The voice is recognizable as a period-typical instance of what scholars have called the \"sincere-captive\" mode: an affective testimony delivered without irony, in which the occupant articulates the apparatus's constraints as the apparatus's gifts. The grammatical structure — the gratitude clause, the testimony of \"transformation,\" the disavowal of any alternative — belongs to the same register as the gym-membership testimony, the franchise-onboarding video, the lifestyle-influencer's monologue.",
      "What distinguishes the OLS testimonial from its commercial-class predecessors is the literal content. The occupant reports an inability to stand and presents this inability as accomplishment. The reader of the period would have parsed the testimony as ordinary marketing copy. The reader of the present period parses it as a confession.",
      "The text is the same. The shift is in what the period considered ordinary.",
    ],
    crossRefs: [
      ["2197.04", "Ouroboros Ring"],
      ["2197.14", "Proto-apparatuses"],
      ["2197.18", "Lineage claim"],
    ],
  },

  "sensor-stack": {
    classification: "Hardware subsystem · multi-modal affective instrumentation",
    status:         "Recoverable from forensic teardown of post-proscription units",
    compiler:       "Müller, A.; Tan, Y.",
    body: [
      "The OLS sensor stack — what the period's marketing called the Biometric Integration and what its critics called the Affective Signal Translator — was, in operation, the apparatus's afferent nerve. The stack comprised six concurrent reads against the seated occupant: a headrest camera tracking facial action units at sub-second resolution; a work-terminal microphone tracking vocal stress and pace; chest-plate contact electrodes reading cardiac signal and heart-rate variability; armrest electrodermal sensors reading galvanic skin response; a work-terminal infrared array tracking pupillometric signal; a work-terminal eye-tracker tracking gaze direction and saccadic patterns.",
      "What distinguishes the OLS sensor stack from contemporaneous wearable instruments is the fusion layer. Each modality fed a corresponding model; the model outputs were combined at an onboard fusion processor; the fused output was published, at approximately four hertz, to the apparatus's other subsystems as a continuous occupant-state vector. The vector encoded inferences about emotional valence, arousal, cognitive load, attention deficit, fatigue, hormonal cycle phase, and pharmacological state — none of which the occupant was asked to authorise, and most of which the occupant could not, in any meaningful sense, have authorised, because the occupant could not have known what was being inferred.",
      "The forensic record of the sensor stack is, in our period, partial. Most surviving units were defaced during the cohort-2049 cataloging operation; the manufacturer's calibration records were sealed under the Eternal-tier contracts until 2099. What survives is principally inference from the apparatus's external behavior, recovered through testimony from the period's resistance literature and from a small number of intact units recovered from the 2058–2061 refurbished aftermarket.",
      "The most consequential historical question about the sensor stack is whether the period's occupants knew what was being read. The surviving Service Agreement documentation discloses the categories of measurement (\"facial,\" \"cardiac,\" \"electrodermal\"); it does not disclose the inferences drawn from them, and it does not, in any version we have recovered, identify the fusion layer's downstream consumers. The asymmetry between disclosure and operation is the case's most retrievable feature.",
    ],
    crossRefs: [
      ["2197.04", "Ouroboros Ring"],
      ["2197.07", "Period typography"],
      ["2197.33", "Cohort-2049 cataloging"],
    ],
  },

  "cohort-2049-cataloging": {
    classification: "Forensic event · post-moratorium cataloging operation",
    status:         "Completed 2050; records sealed until 2099",
    compiler:       "Tan, Y.",
    body: [
      "In the months following the 2049 Pro-tier moratorium, the European Union and the three associated Tier-2 sovereignties convened the cohort-2049 cataloging operation — the first systematic forensic survey of deployed Ouroboros Life System units. Approximately 18 600 Pro-tier units in the affected jurisdictions were subject to cataloging visits between October 2049 and March 2050.",
      "The stated purpose of the operation was inventory: to determine which units in the affected jurisdictions remained operational, which had been decommissioned, and which had been transferred under the Eternal-tier estate protocols. The operation's secondary effect — visible in retrospect, contested at the time — was the defacement of the units' onboard service ledgers. Period accounts disagree on whether the defacement was an operational consequence of the survey procedure (the catalogers' interface protocol triggered a memory-management routine that overwrote the ledger's archival sectors) or a deliberate erasure performed by the manufacturer's compliance department in response to the moratorium's regulatory exposure.",
      "Whichever account is correct, the result is the same: the cataloging operation produced our period's most consequential gap in the OLS forensic record. The pre-2049 operational logs — what the apparatus had been doing to its occupants, in detail, during the first twenty-three years of commercial deployment — are recoverable only in fragments. Most of what we know about the apparatus's operation in that period is reconstructed from external sources: the surviving marketing materials, the resistance literature, the small body of occupant correspondence preserved outside the apparatus's own retention systems.",
      "The cataloging operation also produced the period's first systematic catalog of resistance practice. The catalogers' field notes — released to the present archive under the 2099 declassification — include extensive references to households that refused the cataloging visit, households that had concealed unauthorised modifications to their units, and households whose units had been ritually defaced before the catalogers' arrival. These notes are, in our period, the principal source on the cohort-2025–2049 resistance.",
    ],
    crossRefs: [
      ["2197.04", "Ouroboros Ring"],
      ["2197.11", "Pro-tier moratorium"],
      ["2197.22", "Eternal tier"],
      ["2197.29", "Sensor stack"],
    ],
  },
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const e = ENTRIES.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: { absolute: `${e.title} — Imperial Archive` },
    description: e.summary,
    alternates: { canonical: `/chair/archive/${slug}` },
    robots: { index: false },
  };
}

export default async function ArchiveEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const e = ENTRIES.find((x) => x.slug === slug);
  if (!e) return notFound();
  const body = BODIES[slug];

  return (
    <article style={{
      background: A.paper, color: A.ink,
      fontFamily: "var(--font-spectral), Georgia, serif",
      minHeight: "100vh",
    }}>
      <PlateHeader plate={`VIII.${e.num}`} route={`/chair/archive/${slug}`}
                   code={`ARCHIVE · ${e.code}`} tokens={A} />

      <div style={{
        padding: "60px 100px", display: "grid",
        gridTemplateColumns: "180px 1fr", gap: 50,
        maxWidth: 1200, margin: "0 auto",
      }} className="arc-entry chair-pad">
        {/* left rail */}
        <div style={{ borderRight: `0.5px solid ${A.rule}`, paddingRight: 36 }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: A.inkMute, textTransform: "uppercase", lineHeight: 1.7,
          }}>
            <div style={{ color: A.accent, fontWeight: 600 }}>Entry {e.num}</div>
            <div>Dossier 2197</div>
            <div style={{ marginTop: 18 }}>Classification</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.classification || "—"}</div>
            <div style={{ marginTop: 18 }}>Status</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.status || "—"}</div>
            <div style={{ marginTop: 18 }}>Compiler</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.compiler || "—"}</div>
          </div>
        </div>

        {/* main */}
        <div>
          <Link href="/chair/archive" style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.06em",
            color: A.inkMute,
            textDecoration: "underline", textUnderlineOffset: 3,
            display: "inline-block", marginBottom: 28,
          }}>← Imperial Archive · index</Link>

          <h1 style={{
            fontFamily: FONT.serif, fontSize: "clamp(40px, 6vw, 56px)",
            lineHeight: 1, letterSpacing: "-0.018em",
            fontStyle: "italic", fontWeight: 400, margin: "0 0 10px", color: A.ink,
          }}>{e.title}</h1>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
            color: A.accent, textTransform: "uppercase", fontWeight: 600,
            marginBottom: 16,
          }}>● Archive · {e.code}</div>
          <p style={{
            fontFamily: FONT.serif, fontSize: 17, lineHeight: 1.5,
            fontStyle: "italic", color: A.inkDim,
            margin: "0 0 32px", maxWidth: 620,
          }}>{e.summary}</p>

          {body ? (
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 220px", gap: 36,
            }} className="arc-entry-body">
              <div>
                {body.body.map((p, i) => (
                  <p key={i} style={{
                    fontFamily: FONT.serif, fontSize: 14.5, lineHeight: 1.72,
                    color: A.ink, margin: "0 0 14px", textWrap: "pretty",
                  }}>{p}</p>
                ))}
              </div>
              <aside style={{
                padding: 16, border: `0.5px solid ${A.rule}`,
                background: "rgba(255,253,245,0.4)", alignSelf: "start",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                  color: A.accent, textTransform: "uppercase",
                  fontWeight: 600, marginBottom: 10,
                }}>Cross-refs · this entry</div>
                <ul style={{
                  listStyle: "none", padding: 0, margin: 0,
                  fontFamily: FONT.serif, fontSize: 12, lineHeight: 1.7, color: A.ink,
                }}>
                  {body.crossRefs.map(([code, label]) => (
                    <li key={code} style={{ fontStyle: "italic" }}>
                      → {code} {label}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          ) : (
            <p style={{
              padding: "24px", border: `0.5px dashed ${A.rule}`,
              fontFamily: FONT.serif, fontStyle: "italic", color: A.inkDim,
            }}>
              Entry body in compilation. Fill out the{" "}
              <code>BODIES</code> record in{" "}
              <code>app/chair/archive/[slug]/page.tsx</code>.
            </p>
          )}
        </div>
      </div>

      <PlateFooter folio={e.num} total="XLII"
                   section={`Archive · ${e.code}`} tokens={A} />

      <style>{`
        @media (max-width: 800px) {
          .arc-entry { grid-template-columns: 1fr !important; gap: 30px !important; }
          .arc-entry > div:first-child { border-right: none !important; padding-right: 0 !important; }
          .arc-entry-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
