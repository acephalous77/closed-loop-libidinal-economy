"use client";
import Link from "next/link";
/* ============================================================
   NARRATIVE SECTIONS — the lifecycle, crib to grave
   ============================================================ */
import React from "react";
import { LedgerCard, BlisterPack } from "./artwork";
import { LoopDemo, DesireTags, AvatarSubject } from "./setpieces";

export function Term({ children, gloss }: { children: React.ReactNode; gloss: string }) {
  return (
    <span className="term">
      {children}
      <span className="gloss">{gloss}</span>
    </span>
  );
}

/* folio opener — a consistent editorial header device */
export function Opener({ n, op, age, sub }: { n: string; op: string; age: string; sub: string }) {
  return (
    <div className="opener rev">
      <div className="opener-row">
        <span className="opener-n">{n}</span>
        <span className="opener-meta">
          <span className="opener-op">{op}</span>
          <span className="opener-age">{age}</span>
        </span>
        <span className="opener-sub src">{sub}</span>
      </div>
      <div className="rule" style={{ marginTop: 16 }} />
    </div>
  );
}

/* marginalia — the thinkers, in the margin */
export function Margin({ who, children }: { who?: string; children: React.ReactNode }) {
  return (
    <aside className="margin">
      <span className="margin-txt">{children}</span>
      {who && <span className="margin-who">— {who}</span>}
    </aside>
  );
}

/* interstitial — a threshold crossed; surfaces the folded operations */
export function Interstitial({
  id,
  age,
  op,
  line,
  v,
  tone,
}: {
  id: string;
  age: string;
  op: string;
  line: React.ReactNode;
  v: number;
  tone?: string;
}) {
  return (
    <section
      className={"inter" + (tone === "red" ? " red" : "")}
      id={id}
      data-stage
      data-screen-label={age + " — " + op}
      data-a0={parseInt(age, 10)}
      data-a1={parseInt(age, 10)}
      data-v0={v}
      data-v1={v}
    >
      <div className="inter-agewrap">
        <div className="inter-age" data-parallax>
          {age}
        </div>
      </div>
      <div className="inter-wrap">
        <div className="inter-kick mono">↓ &nbsp;threshold crossed</div>
        <div className="inter-op">{op}</div>
        <div className="inter-line rev">{line}</div>
        <div className="inter-meta mono">life-time value booked to here · ${v.toLocaleString("en-US")}</div>
      </div>
    </section>
  );
}

/* megahead — huge, grid-breaking stage title */
export function Head({ tag, children }: { tag?: string; children: React.ReactNode }) {
  return (
    <div className="stage-head rev">
      {tag && <span className="mh-tag">{tag}</span>}
      <h2 className="anton">{children}</h2>
    </div>
  );
}

/* accusation as a full-bleed band — the page turning on you */
export function Accuse({
  side = "l",
  mark,
  children,
}: {
  side?: string;
  mark?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"accuse-band rev " + side}>
      {mark && (
        <span className="ab-mark" aria-hidden="true">
          {mark}
        </span>
      )}
      <p className="accuse-big">{children}</p>
    </div>
  );
}

/* the breath — a near-empty void for rhythmic contrast */
export function Void({ top, bot, children }: { top?: string; bot?: string; children: React.ReactNode }) {
  return (
    <section className="void" data-screen-label="breath">
      {top && <div className="void-tick top mono">{top}</div>}
      <p className="void-line rev">{children}</p>
      {bot && <div className="void-tick bot mono">{bot}</div>}
    </section>
  );
}

/* a stage wrapper carrying age + ltv anchors the HUD interpolates */
export function Stage({
  a0,
  a1,
  v0,
  v1,
  id,
  label,
  children,
  style,
}: {
  a0: string;
  a1: string;
  v0: string;
  v1: string;
  id: string;
  label: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section
      className="stage"
      id={id}
      data-stage
      data-screen-label={label}
      data-a0={a0}
      data-a1={a1}
      data-v0={v0}
      data-v1={v1}
      style={style}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/* ---------- 00 · MASTHEAD ---------- */
export function Masthead() {
  return (
    <section
      className="full"
      id="top"
      data-screen-label="00 — Masthead"
      data-stage
      data-a0="0"
      data-a1="0"
      data-v0="0"
      data-v1="0"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "calc(var(--hud-h) + 4vh)",
        paddingBottom: "5vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="mast-ghost" aria-hidden="true">
        SUBJECT
      </div>
      <div className="wrap" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div className="flex between wrapf gap16">
          <span className="kicker red">A political economy of the human lifecycle</span>
          <span className="kicker">No. 001 / crib → deathbed</span>
        </div>
        <div className="rule red mt16" />
      </div>

      <div className="wrap" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <h1 className="anton slam in" style={{ fontSize: "clamp(44px,10vw,150px)" }}>
          The <span className="red">Manufacture</span>
          <br />
          of the Subject
        </h1>
        <p className="lede mt24" style={{ maxWidth: "38ch" }}>
          The industrialization of socialization — how a human subject is produced, station by station, on a line that
          runs from crib to deathbed.
        </p>
      </div>

      <div className="wrap" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div className="mast-index">
          {(
            [
              ["01", "Life-Time Value", "the account opens", "intro"],
              ["02", "Ontogenesis", "age 00–06", "ontogenesis"],
              ["03", "Adolescence", "age 06–18", "adolescence"],
              ["04", "Consumption", "age 18–55", "adulthood"],
              ["05", "Obsolescence", "age 55–84", "late"],
              ["06", "Exit", "the map is for", "conclusion"],
            ] as [string, string, string, string][]
          ).map(([n, op, age, id]) => (
            <Link key={id} href={"#" + id}>
              <span className="mi-n">{n}</span>
              <span className="mi-op">{op}</span>
              <span className="mi-age">{age}</span>
            </Link>
          ))}
        </div>
        <div className="rule thin mt24" />
        <div className="flex between center wrapf gap16" style={{ marginTop: 14 }}>
          <span className="src">After Adnan Selimović · Stiegler · Zuboff · Marcuse · Lyotard · Preciado</span>
          <span
            className="mono dim"
            style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase" }}
          >
            scroll to be born ↓
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 01 · INTRO / LIFE-TIME VALUE ---------- */
export function Intro() {
  return (
    <Stage id="intro" label="01 — Life-Time Value" a0="0" a1="0" v0="0" v1="0">
      <Opener n="01" op="Life-Time Value" age="the account opens" sub="i / vi" />
      <h2 className="pull rev mt24">
        Life-time
        <br />
        value
      </h2>
      <div className="flex gap40 wrapf mt40" style={{ alignItems: "flex-start" }}>
        <div className="prose rev d1">
          <p>
            <span className="drop">T</span>he marketer has a phrase for it: <b>life-time value</b>. The projected return
            on a customer if every moment of a life can be commodified, crib to deathbed. Read it slowly. It is an
            accounting category, and the asset it books is a human life.
          </p>
          <p>
            Capital still wants the working day, but its frontier has moved inward — to attention, to affect, to
            desire.{" "}
            <Term gloss="Zuboff: private experience claimed, unilaterally and without the asking, as free raw material — rendered into behavioral data and sold forward as prediction.">
              Behavioral surplus
            </Term>{" "}
            is what the meters read.{" "}
            <Term gloss="The capacity to feel, imagine, want, play, attach. Broader than behavioral surplus — it is what the meters are clamped to.">
              Psychic surplus
            </Term>{" "}
            is what the meters are clamped to.
          </p>
        </div>
        <div className="rev d2" style={{ flex: "1 1 280px", minWidth: 260 }}>
          <LedgerCard />
          <div className="cap mt8">
            ↑ the meter above tracks the value extracted from one life. it has already started.
          </div>
        </div>
      </div>
      <div className="marquee mt64">
        <div className="marquee-inner mono" style={{ fontSize: 22, padding: "12px 0", letterSpacing: ".08em" }}>
          ONTOGENESIS&nbsp;·&nbsp;HABITUALIZATION&nbsp;·&nbsp;CONSUMPTION&nbsp;·&nbsp;OBSOLESCENCE&nbsp;·&nbsp;STAGNATION&nbsp;·&nbsp;
          <b>EXIT</b>&nbsp;·&nbsp;ONTOGENESIS&nbsp;·&nbsp;HABITUALIZATION&nbsp;·&nbsp;CONSUMPTION&nbsp;·&nbsp;OBSOLESCENCE&nbsp;·&nbsp;STAGNATION&nbsp;·&nbsp;
          <b>EXIT</b>&nbsp;·&nbsp;
        </div>
      </div>
    </Stage>
  );
}

/* ---------- 02 · ONTOGENESIS ---------- */
export function Ontogenesis() {
  return (
    <Stage id="ontogenesis" label="02 — Ontogenesis" a0="0" a1="6" v0="0" v1="18000">
      <Opener n="02" op="Ontogenesis" age="early childhood · age 00–06" sub="desire, conditioned" />
      <Head tag="02 · ontogenesis">
        The cradle is
        <br />
        the first room of
        <br />a long enclosure
      </Head>
      <div className="flex gap40 wrapf mt40" style={{ alignItems: "flex-start" }}>
        <div className="prose rev d1">
          <Margin who="Winnicott, leased">
            The transitional object was the child&rsquo;s first “not-me” possession — comfort he authored himself. This
            one is owned upstream, and it logs.
          </Margin>
          <p>
            A two-year-old who cannot manage a spoon can manage a touchscreen. The gesture comes before the grammar, the
            swipe before the sentence. Hand the child the tablet and the crying stops — which is the whole point — and
            the autoplay queue advances on its own so the stopping never has to end.
          </p>
          <p>
            The licensed character arrives as a child&rsquo;s first love: a transitional object that, unlike the worn
            blanket, is owned upstream and renewed on a release schedule. Play arrives pre-scripted. Imagination is
            routed down storylines that terminate, reliably, at a checkout.
          </p>
          <p>
            I call the mechanism{" "}
            <Term gloss="Selimović: the technological interface through which a child's earliest libidinal processes are modulated by something that is also, quietly, a meter.">
              gadgetized mediation
            </Term>
            . The educational app that teaches the alphabet also logs the taps. The gap between an impulse and its
            gratification — the interval where a child once learned that wanting can be tolerated — thins toward zero.
          </p>
        </div>
        <div className="rev d2" style={{ flex: "1 1 300px", minWidth: 280 }}>
          <div style={{ border: "2px solid var(--bone)", padding: 20 }}>
            <div className="mono dim" style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase" }}>
              the short equation
            </div>
            <div className="anton mt16" style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 0.9 }}>
              new thing
              <br />
              <span className="red">=</span> relief
            </div>
            <div className="rule thin" style={{ margin: "18px 0" }} />
            <p className="cap" style={{ fontSize: 12 }}>
              <Term gloss="Marcuse: repression gives way to discharge — the drive released on terms that defuse it, its charge spent in the same motion.">
                Repressive desublimation
              </Term>
              : the restless energy that once found mischief is spent on a video. Nothing is forbidden. Everything is
              channeled. The charge is exactly the part that might have gone somewhere unscripted.
            </p>
          </div>
          <div className="halftone mt16" style={{ height: 70, opacity: 0.5 }} />
        </div>
      </div>
      <Accuse side="l" mark="YES">
        Before the child can speak the sentence, the child is hailed by it —{" "}
        <span className="hot">you are someone who wants this</span> — and answers, through the body, yes.
      </Accuse>
    </Stage>
  );
}

/* ---------- 03 · ADOLESCENCE (loop + tags) ---------- */
export function Adolescence() {
  return (
    <Stage id="adolescence" label="03 — Adolescence" a0="6" a1="18" v0="18000" v1="140000">
      <Opener n="03" op="Adolescence" age="age 06–18" sub="the greenhouse / the harvest" />
      <Head tag="03 · the harvest">
        If childhood plants
        <br />
        the appetite,
        <br />
        <span className="red">youth is the harvest</span>
      </Head>
      <div className="prose rev d1 mt40">
        <Margin who="Stiegler">
          Consumer capitalism takes the knowledge of how to live and how to want, and deposits it in the market — which
          hands the desire back ready-made.
        </Margin>
        <p>
          The libido surges in every direction at once — sexual, social, identitarian — and an apparatus stands ready
          that has spent decades learning the shape of that surge. Games, feeds, streams and pornography compose a
          single psychic economy around the adolescent, and underneath the play runs a steady extraction.
        </p>
      </div>

      <div className="mt40 rev d2">
        <LoopDemo />
      </div>

      <div className="flex gap40 wrapf mt64" style={{ alignItems: "flex-start" }}>
        <div className="prose rev" style={{ flex: "1 1 380px" }}>
          <p>
            Scholars named the condition{" "}
            <Term gloss="Play that is also work. The player's libidinal investment is the labor that makes the product — paid back in the token pleasures the product doles out.">
              playbor
            </Term>
            . The same operation runs through the feed, where it is harder to see because it looks like friendship. A
            friendship starts to feel like an audience to be kept.
          </p>
          <p>
            Sexual desire is captured on the same logic and at a scale without precedent. The recommendation engine
            learns a body&rsquo;s responses and feeds them back amplified — escalating, because escalation holds the
            session open. A surge of curiosity meets its video before it has finished forming as a question.
          </p>
        </div>
        <div className="rev d1" style={{ flex: "1 1 380px", minWidth: 300 }}>
          <DesireTags />
        </div>
      </div>
      <Accuse side="r" mark="$">
        The most private experience a person has becomes a predictive signal, <span className="hot">priced</span>. The
        passion that might have funded an upheaval is booked, in advance, against consumption.
      </Accuse>
    </Stage>
  );
}

/* ---------- 04 · ADULTHOOD (avatar) ---------- */
export function Adulthood() {
  return (
    <Stage id="adulthood" label="04 — Adulthood" a0="18" a1="55" v0="140000" v1="1900000">
      <Opener n="04" op="Consumption" age="age 18–55" sub="the algorithmic government of desire" />
      <Head tag="04 · consumption">
        A Skinner box,
        <br />
        upholstered
        <br />
        as convenience
      </Head>
      <div className="flex gap40 wrapf mt40" style={{ alignItems: "flex-start" }}>
        <div className="prose rev d1">
          <Margin who="Han">
            Neoliberalism makes the exhausted subject its own entrepreneur and its own exploiter — domination that no
            longer needs a master.
          </Margin>
          <p>
            It does not command. It offers — endlessly, in a register tuned to the individual — a marketplace of
            satisfactions wide enough to feel like the open world, and arranged so that every path returns to the
            work-and-spend.
          </p>
          <p>
            The next autoplay. The next <i>you might also like</i>. The next match served at the hour the model knows
            the loneliness peaks. The desires that result are co-authored, half mine and half the algorithm&rsquo;s, and
            the seam between the longing I arrived with and the one that was waiting for me is the thing I can no longer
            find.
          </p>
          <p>
            And the pharmaceutical industry has moved into the regulation of affect itself. Preciado&rsquo;s name for the
            regime is the{" "}
            <Term gloss="Preciado: power has stopped saying no to sex and started saying — have all you want, on our molecule, by our protocol. Government has reached the level of the dose.">
              pharmacopornographic
            </Term>
            : pleasure is provisioned, metered through the substance and the device.
          </p>
        </div>
        <div className="rev d2" style={{ flex: "1 1 320px", minWidth: 280 }}>
          <BlisterPack />
          <div className="barcode mt16" />
        </div>
      </div>

      <div className="mt64 rev">
        <AvatarSubject />
      </div>

      <Accuse side="l" mark="US">
        Participation in one&rsquo;s own extraction is experienced, from the inside, as{" "}
        <span className="hot">self-fulfilment</span>. The enjoyment is real. It is the binding agent.
      </Accuse>
      <p className="prose rev mt40" style={{ color: "var(--bone-dim)" }}>
        Marcuse named it decades ago, and the phrase still fits — a “comfortable, smooth, reasonable, democratic unfreedom,” held
        in place by the difficulty of imagining the alternative from inside a life this padded.
      </p>
    </Stage>
  );
}

/* ---------- 05 · LATE ADULTHOOD ---------- */
export function LateAdulthood() {
  return (
    <Stage id="late" label="05 — Late Adulthood" a0="55" a1="84" v0="1900000" v1="2380000">
      <Opener n="05" op="Obsolescence" age="late adulthood · age 55–84" sub="the silver economy" />
      <Head tag="05 · obsolescence">
        The hold it finds
        <br />
        is the clinic
      </Head>
      <div className="flex gap40 wrapf mt40" style={{ alignItems: "flex-start" }}>
        <div className="prose rev d1">
          <p>
            The aging of the body is rewritten as a sequence of treatable deficits, each with a product: the pill that
            restores function, the hormone therapy, the testosterone marketed against “Low T,” the shelf of anti-aging
            supplements that sells decline back as a thing one failed to prevent.
          </p>
          <p>
            A person disappointed by a life might once have taken the disappointment to a church, a movement, a kitchen
            table. Now it is far likelier to be taken to a prescriber and adjusted at the level of serotonin. The
            discontent is individualized into a chemical correction that keeps the person consuming — and leaves
            untouched the conditions that produced the ache.
          </p>
          <p>
            An eighty-year-old who joins a feed to see her grandson becomes, in the same instant, a fresh target for the
            insurers and the device-makers, and a newly legible source of data on a cohort that had been dark.
          </p>
        </div>
        <div className="rev d2" style={{ flex: "1 1 300px", minWidth: 280 }}>
          <div style={{ border: "2px solid var(--bone)" }}>
            <div
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                padding: "10px 14px",
                borderBottom: "1px solid var(--bone-faint)",
                color: "var(--bone-dim)",
              }}
            >
              age successfully™ — invoice
            </div>
            <div style={{ padding: "6px 14px 14px" }}>
              {(
                [
                  ["anti-aging serum", "$89"],
                  ["“low-t” therapy", "$240/mo"],
                  ["the reboot, for those who saw it first", "$59"],
                  ["pre-paid funeral plan", "$7,400"],
                  ["bank a strand of DNA", "$1,200"],
                ] as [string, string][]
              ).map((r, i) => (
                <div
                  key={i}
                  className="flex between"
                  style={{ padding: "9px 0", borderBottom: i < 4 ? "1px dashed var(--bone-faint)" : "none" }}
                >
                  <span className="mono" style={{ fontSize: 12, color: "var(--bone-dim)" }}>
                    {r[0]}
                  </span>
                  <span className="mono red" style={{ fontSize: 12 }}>
                    {r[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="cap mt8">
            memory itself comes back as merchandise. even the fear of death is a market.
          </div>
        </div>
      </div>
      <Accuse side="r" mark="84">
        The exit has no outside. <span className="hot">It is booked as an input.</span>
      </Accuse>
      <div className="cap rev mt24">
        In more than one wealthy country the spending peaks — and so do the profits — in the last months of a life. ↑ the
        meter knows this.
      </div>
    </Stage>
  );
}
