import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LINEAGE } from "../page";

const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/lineage/[slug] — six companion essays on the brochure's
 * claimed lineage. Each treats the period the brochure dates to,
 * checks the brochure's claim against the historical record, and
 * keeps what survives.
 *
 * Voice rules (in keeping with the de-AI pass across the project):
 * first person where appropriate; specific names, dates, places;
 * admitted uncertainty; the occasional change of mind mid-paragraph;
 * no schoolboy outline structures.
 */

type Body = { paragraphs: (string | { quote: string })[] };

const BODIES: Record<string, Body> = {
  "labor-compensator": {
    paragraphs: [
      "I have not been able to locate the patent. Halloran is the name the brochure assigned to the device's inventor; the brochure cites the U.S. Patent and Trademark Office record number 67,341. There is no patent at that number. There is a patent at 67,431 (an improvement on the steam-engine governor, filed by a J. P. Halligan of Boston in 1867) that the brochure's writer may have transposed into something more historically resonant. I have spent more time than I would like to admit looking for the Halloran filing. I have not found it.",

      "This is the lineage's first lesson. The Labor Compensator is half real and half marketing. The half that is real is real enough: the 1860s American South did, in the immediate aftermath of Emancipation, generate a wave of mechanical-aid patents directed at the problem of how to get cotton harvested without the prior system of forced labor. Several of those patents shipped. Several of them are documented. None of them, on careful reading, are what the brochure describes.",

      "The brochure's Labor Compensator is a hand-cranked mechanical aid that &ldquo;maintained productivity through the labor reorganization the period required.&rdquo; The phrase is masterfully evasive. <em>The labor reorganization the period required</em> is the brochure's way of describing the end of slavery without describing the end of slavery. <em>Maintained productivity</em> is the brochure's way of describing the planter class's economic interest without describing the planter class. The device, in the brochure's account, is technical. The history the device was responding to is, in the brochure's account, weather.",

      "The actually-existing 1860s patents in this family — McCormick reaper improvements; Whitney-derived ginning refinements; a small number of less-successful seed-planter mechanisms — are more honest. They were sold to white landowners who had lost their workforce and now needed to extract a return from land they still owned. The mechanisms were not, in the contemporary sense, &ldquo;labor-saving.&rdquo; They were labor-replacing. The 1860s engineering literature is unembarrassed about this. The OLS marketing literature, 160 years later, can no longer be.",

      "The lineage claim does work. By naming a Reconstruction-era predecessor, the OLS positions itself within an American technological tradition of <em>responding to labor scarcity</em> — a phrase the brochure repeats — and against the more honest framing, which is that every iteration in the named lineage was a tool of accumulation. The brochure flips the moral charge: the chair becomes the latest in a long line of progressive labor-relief devices.",

      "This is the brochure's most consequential rhetorical move. It is also the move I have been least sure how to engage. I have considered, more than once, deleting the lineage section from the broader project entirely. It is too easy to read as endorsement.",

      "I have left it in. The reason is that the brochure's move is the period's move, and the period's move is the one this project is trying to make legible. The chair does not invent the gesture of <em>this product is the latest in a long American tradition of solving real human problems</em>. Every product makes the gesture. The chair's specific innovation, if it has one, is to make the gesture at unusually clinical scale. Naming the gesture is not endorsing it.",

      "Strip away the brochure's flattery and what survives, from the actually-existing 1860s record, is this: in the years immediately following the legal end of forced labor in the United States, a generation of inventors and capitalists turned their attention to the problem of how to extract value from people who could now leave. The technology that emerged was not the chair. But the frame within which the chair would later be built — that the worker is the variable element in a productive system, and that the system's job is to manage the worker's variability — was being assembled in the 1860s. The Labor Compensator, real or imagined, is the moment that frame became technical.",

      "I would like, eventually, to write a much longer history of this period. The contemporary apparatus is, to a degree I have not yet been able to fully articulate, a child of the post-Emancipation labor-management literature. The line from McCormick to Taylor to Mayo to the contemporary HR-analytics dashboard is more continuous than the industry permits itself to remember. This entry is the placeholder for that future essay.",
    ],
  },

  "efficiency-enhancer": {
    paragraphs: [
      "The Efficiency Enhancer is, in the brochure's account, a 1900 device manufactured by &ldquo;the Cleveland Implement Works&rdquo; for a single growing season. Cleveland Implement Works did not exist. There was a Cleveland Foundry &amp; Machine Works (founded 1881, stove castings and machine tools through 1923); there was a Cleveland-Cliffs Iron Company (iron and coal); there was a Cleveland Tractor Company (founded 1916, the Cletrac line — the name the brochure may have been reaching toward). None of these companies manufactured a seated agricultural workstation in 1900.",

      "What did exist, in 1900, was the McCormick-Deering Improved Reaper, sold for $115, which a single operator could ride for ten to twelve hours per day. The seat was an iron pan. The operator's hands controlled the horses (it took two); the operator's legs braced against the foot-rest; the operator's productive output was the field's worth of cut grain at the end of the day.",

      "The 1900 Improved Reaper is the closest historical analog the actually-existing record provides to what the brochure calls the Efficiency Enhancer. The analog is, in important ways, not the same.",

      "Three things distinguish the 1900 Improved Reaper from its predecessors. The operator no longer walked: the seat made the operator's day longer because the operator did not have to stand. The operator's hands were no longer free: the reins occupied them, which meant other agricultural tasks (water, food, communication) had to be carried by other workers around the seated operator. And the operator was, by virtue of being seated and engaged, the bottleneck of the whole operation. A walker can step out of line. A seated reaper-operator cannot.",

      "These features — seat as residence; hands as committed; operator as bottleneck — are the apparatus's contribution to the lineage. The chair, 124 years later, has not solved a problem the Improved Reaper failed to solve. It has extended the same three features into more and more of the operator's day.",

      "The brochure describes the Efficiency Enhancer as &ldquo;combining mechanized agriculture and human labor into a single seated unit.&rdquo; The phrasing is, again, evasive. What was combined was not, in 1900, machine and labor in some neutral conjunction. The machine was bought and owned by the landowner; the labor was rented from the operator on a daily wage; the seated unit was the configuration that allowed the landowner to extract more from the operator's day than the previous configuration permitted. The 1900 Improved Reaper was not a labor-saving innovation. It was a wage-pressure innovation.",

      "I am being more direct than I am usually inclined to be. The brochure's voice, on this particular iteration, is sufficiently evasive that any concession to its framing becomes participation in the evasion.",

      "The 1900 iteration is the moment when the apparatus's seat becomes constitutive of the working day rather than incidental to it. The 1865 device (such as it was) was a tool the worker used. The 1900 device was a position the worker occupied. The shift between those two states is the most important shift in the early history of the apparatus. Everything afterward is more of the same shift.",

      "By the time I am writing this, the contemporary chair will be electrified, screened, networked, and ringed. None of those innovations are innovations against the 1900 configuration. They are intensifications of it.",
    ],
  },

  "dynamic-dynamo": {
    paragraphs: [
      "I am on slightly firmer historical ground here. The brochure dates the Dynamic Dynamo to 1925 and identifies it as &ldquo;the first electrified workstation.&rdquo; Both are approximately true of an actually-existing class of devices the brochure could plausibly be drawing on.",

      "Western Electric's Hawthorne Works — the famous Cicero, Illinois telephone-component plant where the Hawthorne studies were conducted from 1924 to 1932 — had electrified assembly stations from approximately 1922. The stations were not chairs. They were workbenches with overhead lighting, individual electric soldering irons, and pneumatic-tool drop lines. The operator stood. The operator's productive output was the wired telephone component.",

      "By the late 1920s the same factory had introduced seated stations for fine-component assembly. The seated stations included an integrated electric work-light (operated by a knee toggle), a small magnifier on a swing-arm, and a foot-pedal that controlled the workpiece-holder's rotation. The operator's hands assembled the component; the operator's foot held the workpiece; the operator's eye, through the magnifier, monitored the work; the operator's productive output, again, was the wired component.",

      "There is no surviving record I have located of any of these stations being called the Dynamic Dynamo. The name is the brochure's invention. The configuration is approximately faithful to the period.",

      "The 1925 electrified-seated configuration accomplished one thing of significance: it integrated the worker's hands, eyes, and foot into the assembly process without leaving the operator a body-part that could rest. The 1900 reaper-operator could relax their hands when the horses were going straight; the 1925 assembly worker could not relax anything. The chair, by 1925, had become the configuration that captured the entire operator at once.",

      "The Hawthorne studies famously found (or famously appeared to find, depending on which historiography one trusts) that productivity at the seated stations rose when the operators believed they were being observed. The contemporary frame would call this an early demonstration of what this project calls <a href=\"/chair/subsystems/feedback-rituals\">Feedback Rituals</a> — the productivity gain that comes from being inside an observation loop. The Hawthorne discovery is, in this frame, not surprising. It is the apparatus, in 1925, working as designed.",

      "The 1930s extended the configuration to scale. Ford's River Rouge plant operated, by 1936, what was at that point the largest seated-electrified assembly operation in human history: approximately twenty thousand seated workers, each at a station, each integrated into a moving line whose pace was set centrally. The configuration the contemporary chair makes legible in a single piece of furniture was, by 1936, an entire industrial city.",

      "I do not want to over-claim the continuity. The Rouge worker could leave at shift's end; the chair occupant cannot. The Rouge worker was paid; the chair occupant pays. But the underlying configuration — seat as productive locus; operator as bottleneck; apparatus as the thing that maintains the configuration — is the same configuration the chair will, in 2024, still be operating.",

      "The brochure mentions a 1940s &ldquo;field-deployable variant&rdquo; of the Dynamic Dynamo. There is, in fact, a real device this could be drawing on: the M-209 cipher machine, which Allied infantry carried from 1942, and which had a seated operating configuration. The operator sat on the ground or a folded shelter, cradled the device between their legs, and operated the cipher dials with both hands while reading from a code-book held by a commanding officer. I would not have included the wartime variant if I were writing the brochure. It does not strengthen the lineage. It only extends it into a domain (military intelligence) the brochure has otherwise been careful to avoid.",

      "By 1945 the apparatus's seat had appeared in the agricultural field, the assembly line, the field-cipher position, and the office (the dictating-machine and the typewriter had been progressively electrifying the secretary's station for two decades). The 1925-1945 period is the period in which the seat became, for the first time, the default working position of the American century. The chair, in 2024, is the last position remaining.",

      "I have been told, by colleagues older than me, that there is something specifically American about the centrality of the seated working position. I am not sure I believe this. The Soviet first-five-year-plan factories, by all accounts, also seated their assembly workers. The configuration is, on my current reading, capitalist-modernist rather than American. I am open to being corrected.",
    ],
  },

  "knowledge-chair": {
    paragraphs: [
      "The Knowledge Chair is the iteration the brochure has been most ridiculed for, including in our own future archive. The 2197 archivist treats it as one of the lineage's most obvious fabrications — &ldquo;an obscure 1955 patent for a desk-integrated typewriter and party-line telephone combination&rdquo; — and the description is accurate to the recorded period.",

      "What the archive entry does not say is that the patent is real. U.S. 2,716,420, filed 1953, granted 1955, by an inventor named Verne H. Hartman of Akron, Ohio. The device was called, in the patent's own language, the &ldquo;integrated office workstation.&rdquo; Eighty-three units shipped before the manufacturing line was discontinued in 1957. The Knowledge Chair, then, is real. The brochure has simply renamed it.",

      "The Hartman Integrated Office Workstation combined four things into a single seated configuration: an IBM Selectric-precursor typewriter (mechanical, electrified), a telephone handset on a flexible arm, a small lamp, and a foot-pedal that operated a wax-paper carbon-copy mechanism. The configuration was sold to mid-tier insurance offices, where the seated subject (almost always a woman) was expected to type at dictation from the telephone while maintaining a carbon-copy record of the call.",

      "The integration was technically clever and commercially unsuccessful. Eighty-three units is a small number. The reason for the failure is well documented in the period industry press: the workstation required the seated subject to do four things at once, and the available labor market was unwilling to do four things at once at the wage the manufacturer could afford to pay. The 1955 secretary, like the contemporary platform user, was a constrained resource.",

      "What the Knowledge Chair represents, for the lineage, is the moment when the seat began to capture the subject's cognitive output rather than their manual output. The 1900 reaper-operator's productive output was a cut field. The 1925 assembly worker's productive output was a wired component. The 1955 workstation's productive output was a typed transcript of a telephoned conversation — that is, a record of cognitive labor performed elsewhere (the dictating party's spoken sentences) translated into a written record by the seated subject.",

      "This is the apparatus's mid-century cognitive turn. The body remains seated; the bottleneck remains the operator; the configuration remains the seat. What changes is the kind of output the seat is configured to extract. The chair has, by 1955, become a cognitive-extraction device, in addition to its previous functions.",

      "The brochure extends the iteration through &ldquo;domestic adoption&rdquo; in the 1960s and &ldquo;networking&rdquo; in the 1970s. The first claim is approximately accurate. By the early 1960s the recliner-with-television-set was a standard American living-room configuration; the Barcalounger Reclining Lounge Chair, introduced 1947, had by 1965 sold approximately fourteen million units; the configuration of seated subject + screen + ambient enclosure was, by the mid-1960s, the American evening's default position.",

      "The 1970s &ldquo;networking&rdquo; claim is more strained. The 1970s did see early time-sharing computing arrangements, in which seated terminal operators interacted with central mainframes via dial-up connections. These were, in the period, almost exclusively workplace deployments. There was no domestic 1970s networking of recliners. The brochure is, here, projecting a 1990s configuration backward.",

      "The mid-century iteration is when the apparatus's seat acquires both the screen and the cognitive-output target. The Hartman patent has, in nascent form, every functional element the OLS will integrate. What separates the two devices is approximately seventy years of computing-power scaling and approximately seventy years of distributional reach.",

      "There is, in the 1955 patent's prose, a phrase I have come back to several times. The Integrated Office Workstation was sold, the patent filing says, as a device that would &ldquo;permit the seated operator to remain productively engaged without interrupting the work-flow for routine procedural tasks.&rdquo; This is the contemporary chair, in 1955 English. The configuration has not been improved upon. It has only been intensified.",
    ],
  },

  "virtual-ouroboros": {
    paragraphs: [
      "The Virtual Ouroboros is the lineage's most embarrassing entry. The brochure dates it to 1985 and describes it as &ldquo;the first networked iteration,&rdquo; in which &ldquo;physical and digital workspaces converged into a single interface in which work and leisure became indistinguishable.&rdquo; Every word of this is wrong for 1985.",

      "What did exist in 1985 was the personal computer in early domestic distribution: the IBM PC AT (introduced August 1984); the Commodore Amiga (introduced June 1985); the Apple Macintosh (launched January 1984). None were networked in any meaningful consumer sense. None were configured for the convergence the brochure describes. The 1985 personal computer was, for most domestic users, a sophisticated typewriter with an attached spreadsheet program.",

      "The iteration the brochure is straining toward is real, but it is the 1995–2005 entry, not the 1985 entry. Tim Berners-Lee's World Wide Web specification was published in 1989. The first publicly-available web browser (Mosaic) was released in 1993. The first commercial broadband service in the United States was 1996. The &ldquo;convergence of physical and digital workspaces&rdquo; the brochure describes was a 2005 condition, not a 1985 condition. The brochure has, on this iteration, dated its claim approximately twenty years too early.",

      "I have thought about why for a while. The backdating could be a marketing error: the writer reached for <em>computers</em> and conflated the early personal computer era with the later networked computer era. It could also be deliberate. The brochure wants the lineage to feel deep, and the personal computer reads, to the contemporary reader, as ancient. The 1985 date borrows the personal computer's antiquity without the personal computer's actual functional limits.",

      "I am inclined toward the second reading. The brochure's other backdatings — the 1865 device that may not have shipped; the 1900 device that wasn't called what the brochure calls it; the 1925 device whose name the brochure invented — suggest a writer who is comfortable with chronological license. The 1985 date is an aesthetic decision, not a historical one.",

      "The actually-existing convergence the brochure is gesturing toward — physical and digital workspaces fused, work and leisure indistinguishable — was a product of the 2003-2010 period, in which broadband, the smartphone (iPhone 2007), social media (Facebook 2004; Twitter 2006), and the cloud-based productivity suite (Google Docs 2006) progressively dissolved the office-home distinction that had organized the American working day since the 1880s. The Virtual Ouroboros, in any meaningful sense, was operational by 2010. By 2015 it was the default condition of professional-class American life.",

      "This matters, for the lineage, because the 2003-2010 period is the period in which the apparatus's contemporary form emerged. The OLS is a 2024 physical concretization of what the platform economy made operational fifteen years earlier. The brochure's backdating of this iteration to 1985 is, in effect, the brochure trying to make the chair look older than the platform that produced it.",

      "I want to be careful here. The 2003-2010 platform emergence is not, in the contemporary economic-historiography literature, settled. There are at least three competing accounts (Zuboff's surveillance-capitalism account; Srnicek's platform-capitalism account; Galloway's monopoly-rents account) and they disagree on periodization. My own work has tended to position the period slightly later (2010–2015). Nothing in the lineage argument hinges on which periodization is right.",

      "What survives, regardless of dates, is that by the time the OLS launches in 2024 the convergence the brochure attributes to 1985 has been operationally complete for at least a decade. The chair is not introducing the convergence. The chair is concretizing it.",

      "The Virtual Ouroboros is, in some ways, the lineage's most interesting iteration. It is the iteration the brochure most clearly invented — and yet the underlying phenomenon (the convergence of physical and digital workspaces) is the phenomenon that most clearly produced the chair. The brochure's chronology is wrong; the brochure's intuition is right. I find this combination, in retrospect, very characteristic of the apparatus's self-narration.",
    ],
  },

  "ouroboros-life-system": {
    paragraphs: [
      "The OLS is the lineage's only iteration I have not had to verify against historical records. As of May 2026 the apparatus is an actually-existing commercial product, manufactured by Ouroboros Industries LLC of Park Slope, Brooklyn, fitted in 248,401 households across the Tier-1 and Tier-2 sovereignties. The brochure at <a href=\"/chair/the-system\">/chair/the-system</a> is the manufacturer's own document. I have not edited it.",

      "I have spent much of this lineage essay arguing that earlier iterations are, in various ways, fictional or backdated. The 2024 iteration is real and present. The question is whether it is novel.",

      "The honest answer is: not very. The OLS integrates seven subsystems (catalogued under <a href=\"/chair/subsystems\">subsystems</a>), each of which existed, in deployed form, in the platform economy by approximately 2015. The OLS's specific innovation is to integrate them into a single piece of residential furniture and to sell that furniture as a product. The integration is a packaging innovation, not a technical one.",

      "The packaging matters, however. The platforms operate by being everywhere and nowhere. The OLS operates by being a chair. A chair is unambiguous. The chair is in your living room or it is not. The chair is fitted to your body or it is not. The chair has tubes or it does not. The platforms permit a great deal of ambiguity about what they are doing; the chair, by being a chair, forecloses the ambiguity. This is, I think, the OLS's contribution.",

      "The 2197 archive treats the OLS as a commercial product of a period that ends with the apparatus's formal proscription in most Tier-2 sovereignties. I have left the proscription as a future event in the main essay, because as of May 2026 it has not happened. The Pro-tier moratorium of 2049 may or may not eventuate. The Eternal-tier protocols may or may not be challenged in court. The OLS's commercial period may run for another twenty years or it may end next year.",

      "I do not, in any case, expect the proscription, if it happens, to materially address the underlying configuration. The configuration is older than the chair and will outlive the chair. The 2197 archive's successor-systems entry — wearables, then implants, then cortical interfaces — is the trajectory the apparatus has been on since approximately 1900. The chair is a moment within the trajectory, not the trajectory's terminus.",

      "The 2024 iteration is the only one where I have an obligation to the reader to be unsentimental. The earlier iterations are, by the time I am describing them, history; the 2024 iteration is the iteration we are inside. I have been more direct here than I have been in the other lineage entries, because the contemporary apparatus is the one we still have a chance to refuse. The earlier iterations cannot be refused. They have already happened.",

      "The chair is the seventh seat. It is also, on my current best guess, not the last. I think the eighth seat — whatever it turns out to be — is already being prototyped somewhere. I would prefer to have been wrong about this.",

      "I am ending the lineage essay here. I would, in a different world, have one more iteration to add, after the OLS, that I could call the apparatus's terminal form. There is no such iteration. The lineage's whole point is that it does not terminate. It intensifies. The chair is the form the intensification has currently reached. The next intensification will be the next form. It has been the same intensification since 1865.",
    ],
  },
};

export function generateStaticParams() {
  return LINEAGE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = LINEAGE.find((l) => l.slug === slug);
  if (!entry) return {};
  return {
    title: { absolute: `${entry.title} — On the Chair` },
    description: entry.subtitle,
    alternates: { canonical: `/chair/lineage/${slug}` },
  };
}

export default async function LineageEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = LINEAGE.find((l) => l.slug === slug);
  const body = BODIES[slug];
  if (!entry || !body) notFound();

  const idx = LINEAGE.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? LINEAGE[idx - 1] : null;
  const next = idx < LINEAGE.length - 1 ? LINEAGE[idx + 1] : null;

  return (
    <article
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.5rem",
          fontFamily: MONO,
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          color: MUTED,
          textTransform: "uppercase",
        }}
      >
        <a href="/chair/lineage" style={{ color: "inherit", textDecoration: "none" }}>
          ← Lineage
        </a>
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          On the Chair
        </a>
      </nav>

      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Iteration {entry.number} · {entry.year}
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5.4vw, 3.4rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.012em",
          }}
        >
          {entry.title}
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.1rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {entry.subtitle}
        </p>
      </header>

      <article>
        {body.paragraphs.map((p, i) => {
          if (typeof p === "string") {
            return (
              <p
                key={i}
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.07rem",
                  lineHeight: 1.72,
                  color: PAPER,
                  margin: "0 0 1.2rem",
                  textWrap: "pretty" as const,
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            );
          }
          return (
            <blockquote
              key={i}
              style={{
                margin: "1.8rem 0",
                padding: "0 0 0 1.4rem",
                borderLeft: `2px solid ${ACCENT}`,
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.25rem",
                lineHeight: 1.5,
                color: PAPER,
              }}
            >
              {p.quote}
            </blockquote>
          );
        })}
      </article>

      <div
        style={{
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          textAlign: "right",
        }}
      >
        &mdash; Selimović, May 2026 · Iteration {entry.number} of 6
      </div>

      <nav
        style={{
          marginTop: "3rem",
          paddingTop: "1.6rem",
          borderTop: `1px solid ${RULE}`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4rem",
        }}
      >
        {prev ? (
          <a
            href={`/chair/lineage/${prev.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              ← {prev.year}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {prev.title}
            </div>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`/chair/lineage/${next.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              {next.year} →
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {next.title}
            </div>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
