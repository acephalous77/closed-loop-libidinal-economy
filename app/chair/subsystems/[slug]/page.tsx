import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../../_components/PlateChrome";
import { SUBSYSTEMS } from "../page";

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/subsystems/[slug] — long-form subsystem detail.
// Skeleton: I Figure · II Definition · III Mechanism · IV Inheritance
// · V In the Chair · VI A Note.
// Bodies live in BLOCKS keyed by slug. Add new subsystems by adding
// to SUBSYSTEMS (in ../page.tsx) and to BLOCKS here.
// ──────────────────────────────────────────────────────────────────

interface Block { figure: string; definition: string; mechanism: string; inheritance: string; inChair: string; note: string; }

const BLOCKS: Record<string, Block> = {
  "affective-signal-translators": {
    figure:     "The apparatus reads the occupant through a multi-modal sensor stack — face from the headrest camera, voice from the work terminal microphone, heart from the chest-plate electrode, skin conductance from the armrest, pupil and gaze from the work-terminal infrared array. The reads run continuously through the occupant's residence.",
    definition: "An affective signal translator is any apparatus capable of converting the occupant's measurable physiological state — heart rate variability, skin conductance, vocal stress, micro-expression — into a signal usable as input to the apparatus's other subsystems. The translation is what matters. The reading is instrumentation; the translation is governance.",
    mechanism:  "Each modality feeds a corresponding model. The models' outputs are fused at an onboard layer, producing a continuously-updated occupant-state vector. The vector is published, at ≈ 4 Hz, to the apparatus's other subsystems — most consequentially to the Desire Engine, which uses the vector to schedule the Content Stream.",
    inheritance:"The concept is Preciado's — the pharmacopornographic regime as the configuration in which sexual desire and biochemical modulation become direct inputs to capital accumulation. The technical stack is the affective-computing literature, Damasio for the somatic-marker hypothesis, and the affective-neuroscience inheritance generally.",
    inChair:    "The chair makes the configuration architectural. Where earlier deployments — the smartphone front-facing camera, the wearable's heart-rate sensor — measured episodically, the chair measures continuously and from above. The occupant is, by residence, instrumented.",
    note:       "The most important thing the apparatus does, here, is persuade the occupant that the reading is care. The reading is not care. The reading is the configuration's afferent nerve. The conflation of the two is what makes the configuration politically dangerous and, on the evidence so far, commercially viable.",
  },
  // …other subsystem bodies follow the same skeleton. For brevity in
  // this handoff only the example above is filled out. Adding more is
  // just editing this record.
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return SUBSYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = SUBSYSTEMS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} — Subsystems` },
    description: s.subtitle,
    alternates: { canonical: `/chair/subsystems/${slug}` },
  };
}

export default async function SubsystemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = SUBSYSTEMS.find((x) => x.slug === slug);
  if (!s) return notFound();

  const blocks = BLOCKS[slug];
  const idx = SUBSYSTEMS.findIndex((x) => x.slug === slug);
  const prev = SUBSYSTEMS[idx - 1];
  const next = SUBSYSTEMS[idx + 1];

  return (
    <article>
      <PlateHeader plate={`V.${s.num}`} route={`/chair/subsystems/${slug}`}
                   code={`DOSS · OLS · SUBSYSTEM · ${s.num}`} />

      <div style={{ padding: "50px 100px 0", maxWidth: 1200, margin: "0 auto" }}>
        {/* breadcrumb */}
        <div style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 36,
        }}>
          <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <a href="/chair/subsystems" style={{ color: "inherit", textDecoration: "none" }}>Subsystems</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <span style={{ color: T.accent }}>{s.num} · {s.title.toLowerCase()}</span>
        </div>

        {/* title block */}
        <div style={{
          display: "grid", gridTemplateColumns: "120px 1fr",
          gap: 36, alignItems: "start",
          paddingBottom: 36, borderBottom: `0.75px solid ${T.rule}`,
        }} className="sub-head">
          <div><ChairGlyph size={110} stroke={T.accent} phase={s.key} /></div>
          <div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
              color: T.accent, textTransform: "uppercase", fontWeight: 600,
              marginBottom: 14,
            }}>Subsystem · {s.num} of 07</div>
            <h1 style={{
              fontFamily: FONT.serif, fontSize: "clamp(48px, 7vw, 76px)",
              lineHeight: 0.96, letterSpacing: "-0.022em",
              fontStyle: "italic", fontWeight: 400,
              margin: "0 0 16px", color: T.ink,
            }}>{s.title}</h1>
            <p style={{
              fontFamily: FONT.serif, fontSize: 19, lineHeight: 1.5,
              color: T.inkDim, margin: "0 0 16px", maxWidth: 720,
              fontStyle: "italic",
            }}>{s.subtitle}</p>
            <div style={{
              display: "flex", gap: 24, flexWrap: "wrap",
              fontFamily: FONT.mono, fontSize: 10,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: T.inkMute,
            }}>
              <span>≈ 1 400 words</span>
              <span>·</span>
              <span>6 blocks</span>
              <span>·</span>
              <span>inheritance: {s.inheritance}</span>
            </div>
          </div>
        </div>

        {/* the six blocks */}
        {blocks ? (
          <div style={{
            marginTop: 44, display: "grid",
            gridTemplateColumns: "1fr 1fr", gap: 40,
          }} className="sub-blocks">
            <Block n="I"   title="Figure">     {blocks.figure}     </Block>
            <Block n="II"  title="Definition"> {blocks.definition} </Block>
            <Block n="III" title="Mechanism">  {blocks.mechanism}  </Block>
            <Block n="IV"  title="Inheritance">{blocks.inheritance}</Block>
            <Block n="V"   title="In the Chair">{blocks.inChair}   </Block>
            <Block n="VI"  title="A note">     {blocks.note}       </Block>
          </div>
        ) : (
          <p style={{
            marginTop: 44, padding: "24px",
            border: `0.5px dashed ${T.rule}`,
            fontFamily: FONT.serif, fontStyle: "italic", color: T.inkDim,
          }}>
            Long-form treatment in progress. The six-block skeleton —
            figure, definition, mechanism, inheritance, in the chair,
            a note — is filled out in the project repo at{" "}
            <code>app/chair/subsystems/[slug]/page.tsx</code>&apos;s{" "}
            <code>BLOCKS</code> record.
          </p>
        )}

        {/* siblings nav */}
        <div style={{
          marginTop: 40, paddingTop: 22,
          borderTop: `0.75px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="sub-nav">
          {prev ? (
            <a href={`/chair/subsystems/${prev.slug}`} style={navStyle()}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>← Subsystem {prev.num}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 22,
                fontStyle: "italic", fontWeight: 500, color: T.ink,
              }}>{prev.title}</div>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/chair/subsystems/${next.slug}`}
               style={{ ...navStyle(), textAlign: "right" }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>Subsystem {next.num} →</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 22,
                fontStyle: "italic", fontWeight: 500, color: T.ink,
              }}>{next.title}</div>
            </a>
          ) : <div />}
        </div>

        <div style={{ height: 80 }} />
      </div>

      <PlateFooter folio={`${22 + idx + 1}`} total="42"
                   section={`Subsystem · ${s.num} · ${s.title.split(" ").pop()}`} />

      <style>{`
        @media (max-width: 800px) {
          .sub-head, .sub-blocks, .sub-nav { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}

function Block({ n, title, children }: {
  n: string; title: string; children: React.ReactNode;
}) {
  return (
    <section>
      <div style={{
        display: "grid", gridTemplateColumns: "36px 1fr", gap: 14,
        alignItems: "baseline", marginBottom: 12,
        paddingBottom: 8, borderBottom: `0.5px solid ${T.rule}`,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, color: T.accent,
          fontWeight: 700, letterSpacing: "0.16em",
        }}>{n}</span>
        <span style={{
          fontFamily: FONT.serif, fontSize: 22, fontStyle: "italic",
          fontWeight: 500, color: T.ink, letterSpacing: "-0.005em",
          lineHeight: 1.1,
        }}>{title}</span>
      </div>
      <p style={{
        fontFamily: FONT.serif, fontSize: 14.5, lineHeight: 1.72,
        color: T.ink, margin: 0, textWrap: "pretty",
      }}>{children}</p>
    </section>
  );
}

function navStyle(): React.CSSProperties {
  return {
    padding: "20px 22px", border: `0.5px solid ${T.rule}`,
    textDecoration: "none", color: "inherit",
    background: "rgba(255,253,245,0.4)",
  };
}
