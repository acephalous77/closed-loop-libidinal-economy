import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MASTER, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../../_components/PlateChrome";
import { LINEAGE } from "../page";

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/lineage/[slug] — single iteration's long-form treatment.
// Skeleton: brochure-claim / mechanism / verification / what-survives.
// Bodies live in BODIES keyed by slug.
// ──────────────────────────────────────────────────────────────────

interface Body {
  shipped: string;
  context: string;
  claim: string;
  verdict: string;
  blocks: { title: string; body: string }[];
}

const TAG_COLOR: Record<string, string> = {
  real: T.accent, thin: "#a06820", fabricated: "#7a3a55",
};

const BODIES: Record<string, Body> = {
  "labor-compensator": {
    shipped: "Patent uncertain · provenance contested",
    context: "Emancipation · Reconstruction · McCormick reaper era",
    claim:   "'A hand-cranked mechanical aid that maintained productivity through the labor reorganization the period required.'",
    verdict: "Half real, half marketing. The 1860s patent family is real; the brochure's specific device is undocumented.",
    blocks: [
      { title: "The brochure's invention",
        body: "I have not been able to locate the patent. Halloran is the name the brochure assigns; the brochure cites USPTO record 67,341. There is no patent at that number. There is a patent at 67,431 (an improvement on the steam-engine governor, filed by J. P. Halligan of Boston in 1867) that the brochure's writer may have transposed into something more historically resonant. I have spent more time than I would like to admit looking for the Halloran filing. I have not found it." },
      { title: "What the period actually shipped",
        body: "The 1860s American South did generate a wave of mechanical-aid patents directed at the problem of how to get cotton harvested without the prior system of forced labor. McCormick reaper improvements, Whitney-derived ginning refinements, a small number of less-successful seed-planter mechanisms. These were sold to white landowners who had lost their workforce and now needed to extract a return from land they still owned. The mechanisms were labor-replacing. The 1860s engineering literature is unembarrassed about this. The OLS marketing literature, 160 years later, can no longer be." },
      { title: "The rhetorical move",
        body: "By naming a Reconstruction-era predecessor, the OLS positions itself within an American technological tradition of 'responding to labor scarcity' — a phrase the brochure repeats — against the more honest framing, which is that every iteration in the named lineage was a tool of accumulation. The brochure flips the moral charge: the chair becomes the latest in a long line of progressive labor-relief devices. This is the brochure's most consequential rhetorical move." },
      { title: "What survives the verification",
        body: "Strip away the brochure's flattery and what survives, from the actually-existing 1860s record, is this: in the years immediately following the legal end of forced labor in the United States, a generation of inventors and capitalists turned their attention to the problem of how to extract value from people who could now leave. The technology that emerged was a set of accumulation tools; the frame within which the chair would later be built — the worker as the variable element in a productive system, the system's job as managing that variability — was being assembled in the 1860s. The Labor Compensator, real or imagined, is the moment that frame became technical." },
    ],
  },

  "efficiency-enhancer": {
    shipped: "≈ 270 000 units across the McCormick-Deering reaper family",
    context: "Second Industrial Revolution · the assembly line · Taylorism",
    claim:   "'A 1900 device manufactured by the Cleveland Implement Works that combined mechanized agriculture and human labor into a single seated unit.'",
    verdict: "Manufacturer fabricated; configuration documented. Cleveland Implement Works did not exist; the McCormick-Deering Improved Reaper did.",
    blocks: [
      { title: "The manufacturer that wasn't",
        body: "Cleveland Implement Works did not exist. There was a Cleveland Foundry & Machine Works (founded 1881, stove castings and machine tools through 1923); there was a Cleveland-Cliffs Iron Company (iron and coal); there was a Cleveland Tractor Company (founded 1916, the Cletrac line — the name the brochure may have been reaching toward). None of these companies manufactured a seated agricultural workstation in 1900." },
      { title: "What actually shipped",
        body: "What did exist, in 1900, was the McCormick-Deering Improved Reaper, sold for $115, which a single operator could ride for ten to twelve hours per day. The seat was an iron pan. The operator's hands controlled the horses (it took two); the legs braced against the foot-rest; the productive output was the field's worth of cut grain at the end of the day. The 1900 Improved Reaper is the closest historical analog the actually-existing record provides to what the brochure calls the Efficiency Enhancer." },
      { title: "The seat as productive locus",
        body: "Three things distinguish the 1900 Improved Reaper from its predecessors. The operator no longer walked: the seat made the day longer because the operator did not have to stand. The hands were no longer free: the reins occupied them, which meant other agricultural tasks (water, food, communication) had to be carried by other workers around the seated operator. And the operator was, by virtue of being seated and engaged, the bottleneck of the whole operation. A walker can step out of line. A seated reaper-operator cannot. These features — seat as residence, hands as committed, operator as bottleneck — are the apparatus's contribution to the lineage. The chair, 124 years later, leaves the Improved Reaper's problem unsolved and extends the same three features into more and more of the operator's day." },
      { title: "What the brochure is hiding",
        body: "The brochure describes the Efficiency Enhancer as 'combining mechanized agriculture and human labor into a single seated unit.' The phrasing is evasive. The thing combined in 1900 was an ownership relation: the machine bought and owned by the landowner, the labor rented from the operator on a daily wage, the seated unit the configuration that let the landowner extract more from the operator's day than the previous configuration permitted. The 1900 Improved Reaper was a wage-pressure innovation. The 1900 iteration is the moment when the apparatus's seat becomes constitutive of the working day; before, the seat was incidental to it. Everything afterward is more of the same shift." },
    ],
  },

  "dynamic-dynamo": {
    shipped: "Hawthorne ≈ 8 000 stations · Ford River Rouge ≈ 20 000 seated workers (1936 peak)",
    context: "Hawthorne Studies · Ford River Rouge · electrification of industrial labor",
    claim:   "'The first electrified workstation' — circa 1925, with a 1940s field-deployable wartime variant.",
    verdict: "Documented and partly conflated. The 1925–1945 electrified-seat configuration is real; the Dynamic Dynamo name is the brochure's invention.",
    blocks: [
      { title: "The brochure's name vs. the historical record",
        body: "I am on slightly firmer historical ground here. The brochure dates the Dynamic Dynamo to 1925 and identifies it as 'the first electrified workstation.' Both are approximately true of an actually-existing class of devices the brochure could plausibly be drawing on. Western Electric's Hawthorne Works — the Cicero, Illinois telephone-component plant where the Hawthorne studies were conducted from 1924 to 1932 — had electrified assembly stations from approximately 1922. By the late 1920s the same factory had introduced seated stations for fine-component assembly: integrated electric work-light operated by a knee toggle, magnifier on a swing-arm, foot-pedal that controlled the workpiece-holder's rotation. There is no surviving record I have located of any of these stations being called the Dynamic Dynamo. The name is the brochure's invention. The configuration is approximately faithful to the period." },
      { title: "What the 1925 seat accomplished",
        body: "The 1925 electrified-seated configuration accomplished one thing of significance: it integrated the worker's hands, eyes, and foot into the assembly process without leaving the operator a body-part that could rest. The 1900 reaper-operator could relax their hands when the horses were going straight; the 1925 assembly worker could not relax anything. The chair, by 1925, had become the configuration that captured the entire operator at once. The Hawthorne studies famously found (or famously appeared to find, depending on which historiography one trusts) that productivity rose when the operators believed they were being observed. The contemporary frame would call this an early demonstration of what this project calls Feedback Rituals — the productivity gain that comes from being inside an observation loop. The Hawthorne discovery is, in this frame, the apparatus working as designed, in 1925." },
      { title: "Scale through the 1930s and 1940s",
        body: "The 1930s extended the configuration to scale. Ford's River Rouge plant operated, by 1936, what was at that point the largest seated-electrified assembly operation in human history: approximately twenty thousand seated workers, each at a station, each integrated into a moving line whose pace was set centrally. The configuration the contemporary chair makes legible in a single piece of furniture was, by 1936, an entire industrial city. The brochure mentions a 1940s 'field-deployable variant' of the Dynamic Dynamo. There is, in fact, a real device this could be drawing on: the M-209 cipher machine, which Allied infantry carried from 1942, and which had a seated operating configuration. I would not have included the wartime variant if I were writing the brochure. It does not strengthen the lineage. It only extends it into a domain (military intelligence) the brochure has otherwise been careful to avoid." },
      { title: "What survives the verification",
        body: "By 1945 the apparatus's seat had appeared in the agricultural field, the assembly line, the field-cipher position, and the office. The 1925–1945 period is the period in which the seat became, for the first time, the default working position of the American century. The chair, in 2024, is the last position remaining. I have been told, by colleagues older than me, that there is something specifically American about the centrality of the seated working position. I am not sure I believe this. The Soviet first-five-year-plan factories, by all accounts, also seated their assembly workers. The configuration is, on my current reading, capitalist-modernist; the American framing is incidental. I am open to being corrected." },
    ],
  },

  "knowledge-chair": {
    shipped: "83 units (1955 production run, discontinued 1957)",
    context: "Postwar computing · IBM era · Hartman patent",
    claim:   "'An integrated office workstation' — 1955, with claimed domestic adoption in the 1960s and networking in the 1970s.",
    verdict: "Real but renamed. The patent is U.S. 2,716,420 by Verne H. Hartman, Akron, Ohio. The 1970s networking claim is backdated by twenty years.",
    blocks: [
      { title: "The patent is real",
        body: "The Knowledge Chair is the iteration the brochure has been most ridiculed for, including in our own future archive. The 2197 archivist treats it as one of the lineage's most obvious fabrications — 'an obscure 1955 patent for a desk-integrated typewriter and party-line telephone combination' — and the description is accurate to the recorded period. The archive entry does not mention that the patent is real. U.S. 2,716,420, filed 1953, granted 1955, by an inventor named Verne H. Hartman of Akron, Ohio. The device was called, in the patent's own language, the 'integrated office workstation.' Eighty-three units shipped before the manufacturing line was discontinued in 1957. The Knowledge Chair, then, is real. The brochure has simply renamed it." },
      { title: "What the Hartman patent integrated",
        body: "The Hartman Integrated Office Workstation combined four things into a single seated configuration: an IBM Selectric-precursor typewriter (mechanical, electrified), a telephone handset on a flexible arm, a small lamp, and a foot-pedal that operated a wax-paper carbon-copy mechanism. The configuration was sold to mid-tier insurance offices, where the seated subject (almost always a woman) was expected to type at dictation from the telephone while maintaining a carbon-copy record of the call. The integration was technically clever and commercially unsuccessful. Eighty-three units is a small number. The reason for the failure is well documented in the period industry press: the workstation required the seated subject to do four things at once, and the available labor market was unwilling to do four things at once at the wage the manufacturer could afford to pay. The 1955 secretary, like the contemporary platform user, was a constrained resource." },
      { title: "The mid-century cognitive turn",
        body: "The Knowledge Chair represents, for the lineage, the moment when the seat began to capture the subject's cognitive output. Earlier seats had captured manual output. The 1900 reaper-operator's productive output was a cut field. The 1925 assembly worker's productive output was a wired component. The 1955 workstation's productive output was a typed transcript of a telephoned conversation — that is, a record of cognitive labor performed elsewhere translated into a written record by the seated subject. This is the apparatus's mid-century cognitive turn. The body remains seated; the bottleneck remains the operator; the configuration remains the seat. The kind of output the seat is configured to extract changes. The chair has, by 1955, become a cognitive-extraction device, in addition to its previous functions." },
      { title: "The brochure's overreach",
        body: "The brochure extends the iteration through 'domestic adoption' in the 1960s and 'networking' in the 1970s. The first claim is approximately accurate. By the early 1960s the recliner-with-television-set was a standard American living-room configuration; the Barcalounger, introduced 1947, had by 1965 sold approximately fourteen million units. The 1970s networking claim is more strained. The 1970s did see early time-sharing computing arrangements, but these were almost exclusively workplace deployments. There was no domestic 1970s networking of recliners. The brochure is, here, projecting a 1990s configuration backward. The Hartman patent's prose contains a phrase I have come back to several times. The Integrated Office Workstation was sold, the filing says, as a device that would 'permit the seated operator to remain productively engaged without interrupting the work-flow for routine procedural tasks.' This is the contemporary chair, in 1955 English. The configuration has only been intensified." },
    ],
  },

  "virtual-ouroboros": {
    shipped: "No matching device shipped in 1985",
    context: "Personal computer era · pre-web · brochure's backdating maneuver",
    claim:   "'The first networked iteration' — 1985 — in which 'physical and digital workspaces converged into a single interface in which work and leisure became indistinguishable.'",
    verdict: "Fabricated for 1985; the phenomenon described is real but dated approximately twenty years too early.",
    blocks: [
      { title: "Why the 1985 date is wrong",
        body: "The Virtual Ouroboros is the lineage's most embarrassing entry. The brochure dates it to 1985 and describes it as 'the first networked iteration,' in which 'physical and digital workspaces converged into a single interface in which work and leisure became indistinguishable.' Every word of this is wrong for 1985. The personal computer existed in 1985, in early domestic distribution: the IBM PC AT (August 1984), the Commodore Amiga (June 1985), the Apple Macintosh (January 1984). None were networked in any meaningful consumer sense. None were configured for the convergence the brochure describes. The 1985 personal computer was, for most domestic users, a sophisticated typewriter with an attached spreadsheet program." },
      { title: "Why the brochure backdated",
        body: "The iteration the brochure is straining toward is real, and it belongs to the 1995–2005 window. Tim Berners-Lee's WWW specification was published in 1989. The first publicly-available web browser (Mosaic) was released in 1993. The first commercial broadband in the United States was 1996. The brochure has, on this iteration, dated its claim approximately twenty years too early. I have thought about why. The backdating could be a marketing error: the writer reached for 'computers' and conflated the early PC era with the later networked era. It could also be deliberate. The brochure wants the lineage to feel deep, and the personal computer reads, to the contemporary reader, as ancient. The 1985 date borrows the personal computer's antiquity without the personal computer's actual functional limits. I am inclined toward the second reading." },
      { title: "What the brochure should have dated 1995–2010",
        body: "The actually-existing convergence the brochure is gesturing toward — physical and digital workspaces fused, work and leisure indistinguishable — was a product of the 2003–2010 period, in which broadband, the smartphone (iPhone 2007), social media (Facebook 2004; Twitter 2006), and the cloud-based productivity suite (Google Docs 2006) progressively dissolved the office-home distinction that had organized the American working day since the 1880s. The Virtual Ouroboros, in any meaningful sense, was operational by 2010. By 2015 it was the default condition of professional-class American life. The 2003–2010 period is the period in which the apparatus's contemporary form emerged. The OLS is a 2024 physical concretization of what the platform economy made operational fifteen years earlier. The brochure's backdating of this iteration to 1985 is, in effect, the brochure trying to make the chair look older than the platform that produced it." },
      { title: "What survives the verification",
        body: "What survives, regardless of dates, is that by the time the OLS launches in 2024 the convergence the brochure attributes to 1985 has been operationally complete for at least a decade. The chair arrives late to a convergence already finished, and concretizes it. The Virtual Ouroboros is, in some ways, the lineage's most interesting iteration. It is the iteration the brochure most clearly invented — and yet the underlying phenomenon is the phenomenon that most clearly produced the chair. The brochure's chronology is wrong; the brochure's intuition is right. I find this combination very characteristic of the apparatus's self-narration." },
    ],
  },

  "ouroboros-life-system": {
    shipped: "248 401 households (cohort 2026.05)",
    context: "Platform-economic maturity · the apparatus made architectural",
    claim:   "'The current iteration — closed-loop residential — manufactured by Ouroboros Industries LLC, Park Slope, Brooklyn.'",
    verdict: "Real and present. The brochure is the manufacturer's own document. I have not edited it.",
    blocks: [
      { title: "The only iteration I have not had to verify",
        body: "The OLS is the lineage's only iteration I have not had to verify against historical records. As of May 2026 the apparatus is an actually-existing commercial product, manufactured by Ouroboros Industries LLC of Park Slope, Brooklyn, fitted in 248 401 households across the Tier-1 and Tier-2 sovereignties. The brochure at /chair is the manufacturer's own document. I have not edited it. I have spent much of this lineage essay arguing that earlier iterations are, in various ways, fictional or backdated. The 2024 iteration is real and present. The question is whether it is novel." },
      { title: "Whether the chair is novel",
        body: "The honest answer is: not very. The OLS integrates seven subsystems, each of which existed, in deployed form, in the platform economy by approximately 2015. The OLS's specific innovation is to integrate them into a single piece of residential furniture and to sell that furniture as a product. The integration is a packaging innovation. The technology underneath is old. The packaging matters, however. The platforms operate by being everywhere and nowhere. The OLS operates by being a chair. A chair is unambiguous. The chair is in your living room or it is not. The chair is fitted to your body or it is not. The chair has tubes or it does not. The platforms permit a great deal of ambiguity about what they are doing; the chair, by being a chair, forecloses the ambiguity. This is, I think, the OLS's contribution." },
      { title: "The proscription question",
        body: "The 2197 archive treats the OLS as a commercial product of a period that ends with the apparatus's formal proscription in most Tier-2 sovereignties. I have left the proscription as a future event in the main essay, because as of May 2026 it has not happened. The Pro-tier moratorium of 2049 may or may not eventuate. The Eternal-tier protocols may or may not be challenged in court. The OLS's commercial period may run for another twenty years or it may end next year. I do not, in any case, expect the proscription, if it happens, to materially address the underlying configuration. The configuration is older than the chair and will outlive the chair. The 2197 archive's successor-systems entry — wearables, then implants, then cortical interfaces — is the trajectory the apparatus has been on since approximately 1900. The chair is a moment within the trajectory. The trajectory continues past it." },
      { title: "What survives the verification",
        body: "The 2024 iteration is the only one where I have an obligation to the reader to be unsentimental. The earlier iterations are, by the time I am describing them, history; the 2024 iteration is the iteration we are inside. I have been more direct here than I have been in the other lineage entries, because the contemporary apparatus is the one we still have a chance to refuse. The earlier iterations cannot be refused. They have already happened. The chair is the seventh seat. An eighth — whatever it turns out to be — is, on my current best guess, already being prototyped somewhere. I would prefer to have been wrong about this. The lineage's whole point is that it does not terminate. It intensifies. The chair is the form the intensification has currently reached. The next intensification will be the next form. It has been the same intensification since 1865." },
    ],
  },
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return LINEAGE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const l = LINEAGE.find((x) => x.slug === slug);
  if (!l) return {};
  return {
    title: { absolute: `${l.title} — Lineage` },
    description: l.subtitle,
    alternates: { canonical: `/chair/lineage/${slug}` },
  };
}

export default async function LineageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const l = LINEAGE.find((x) => x.slug === slug);
  if (!l) return notFound();
  const body = BODIES[slug];
  const verdictColor = TAG_COLOR[l.tag];
  const idx = LINEAGE.findIndex((x) => x.slug === slug);
  const prev = LINEAGE[idx - 1];
  const next = LINEAGE[idx + 1];

  return (
    <article>
      <PlateHeader plate={`VII.${l.num}`} route={`/chair/lineage/${slug}`}
                   code={`DOSS · OLS · LINEAGE · ${l.num}`} />

      <div className="chair-pad" style={{ padding: "60px 100px 0", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 36,
        }}>
          <Link href="/chair/essay" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</Link>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <Link href="/chair/lineage" style={{ color: "inherit", textDecoration: "none" }}>Lineage</Link>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <span style={{ color: T.accent }}>{l.num} · {l.title.replace(/^The /, "").toLowerCase()}</span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 16,
                        marginBottom: 14, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: T.accent, fontWeight: 700, textTransform: "uppercase",
          }}>ITER {l.num}  ·  {l.year}</span>
          <span style={{
            padding: "2px 10px", background: verdictColor, color: T.paper,
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.18em",
            textTransform: "uppercase", fontWeight: 600, borderRadius: 2,
          }}>
            {l.tag === "real" ? "● verified" :
             l.tag === "thin" ? "◐ thinly documented" :
                                "○ partly fabricated"}
          </span>
        </div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(48px, 7vw, 76px)",
          lineHeight: 0.96, letterSpacing: "-0.022em",
          fontStyle: "italic", fontWeight: 400,
          margin: "0 0 16px", color: T.ink,
        }}>{l.title}.</h1>
        <p style={{
          fontFamily: FONT.serif, fontSize: 18, lineHeight: 1.5,
          color: T.inkDim, fontStyle: "italic",
          margin: "0 0 40px", maxWidth: 760,
        }}>{l.subtitle}</p>

        {body ? (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 280px", gap: 56,
            paddingTop: 24, borderTop: `0.75px solid ${T.rule}`,
          }} className="lin-detail">
            <div>
              {body.blocks.map((b, i) => (
                <section key={i} style={{ marginBottom: 24 }}>
                  <div style={{
                    fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                    color: T.accent, textTransform: "uppercase", fontWeight: 600,
                    marginBottom: 10,
                  }}>{String(i + 1).padStart(2, "0")} · {b.title}</div>
                  <p style={{
                    fontFamily: FONT.serif, fontSize: 15, lineHeight: 1.72,
                    color: T.ink, margin: 0,
                  }}>{b.body}</p>
                </section>
              ))}
              <div style={{
                marginTop: 24, padding: "16px 18px",
                borderLeft: `2px solid ${verdictColor}`,
                background: "rgba(255,253,245,0.7)",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                  color: verdictColor, fontWeight: 700,
                  textTransform: "uppercase", marginBottom: 6,
                }}>Brochure claim · vs. historical record</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 13.5, fontStyle: "italic",
                  lineHeight: 1.5, color: T.inkDim, marginBottom: 8,
                }}>{body.claim}</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 13.5, lineHeight: 1.5, color: T.ink,
                }}><strong style={{ fontWeight: 600 }}>Verdict.</strong> {body.verdict}</div>
              </div>
            </div>
            <aside>
              <Field k="Year">{l.year}</Field>
              <Field k="Shipped">{body.shipped}</Field>
              <Field k={`World, in ${l.year}`}>{body.context}</Field>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: `0.5px solid ${T.rule}` }}>
                <ChairGlyph size={56} stroke={T.accent} />
              </div>
            </aside>
          </div>
        ) : (
          <p style={{
            padding: "24px", border: `0.5px dashed ${T.rule}`,
            fontFamily: FONT.serif, fontStyle: "italic", color: T.inkDim,
          }}>
            Long-form treatment in progress. Fill out the{" "}
            <code>BODIES</code> record in{" "}
            <code>app/chair/lineage/[slug]/page.tsx</code>.
          </p>
        )}

        {/* siblings */}
        <div style={{
          marginTop: 40, paddingTop: 22,
          borderTop: `0.75px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="lin-nav">
          {prev ? (
            <Link href={`/chair/lineage/${prev.slug}`} style={navStyle()}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>← Iter {prev.num} · {prev.year}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 20, fontStyle: "italic",
                fontWeight: 500, color: T.ink,
              }}>{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/chair/lineage/${next.slug}`}
               style={{ ...navStyle(), textAlign: "right" }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>Iter {next.num} · {next.year} →</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 20, fontStyle: "italic",
                fontWeight: 500, color: T.ink,
              }}>{next.title}</div>
            </Link>
          ) : <div />}
        </div>

        <div style={{ height: 80 }} />
      </div>

      <PlateFooter folio={l.num} total="42"
                   section={`Lineage · ${l.num} · ${l.year}`} />

      <style>{`
        @media (max-width: 800px) {
          .lin-detail, .lin-nav { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </article>
  );
}

function Field({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
        color: T.inkMute, textTransform: "uppercase",
        fontWeight: 600, marginBottom: 5,
      }}>{k}</div>
      <div style={{
        fontFamily: FONT.serif, fontSize: 13, fontStyle: "italic",
        color: T.ink, lineHeight: 1.5,
      }}>{children}</div>
    </div>
  );
}

function navStyle(): React.CSSProperties {
  return {
    padding: "18px 20px", border: `0.5px solid ${T.rule}`,
    textDecoration: "none", color: "inherit",
    background: "rgba(255,253,245,0.4)",
  };
}
