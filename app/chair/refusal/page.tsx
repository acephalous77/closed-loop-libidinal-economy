import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "On Refusal — On the Chair" },
  description:
    "A longer treatment of the politics sketched in On the Chair §IX. Four moves toward refusal, and an honest accounting of what each can and cannot do.",
  alternates: { canonical: "/chair/refusal" },
};

const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/refusal — extension of On the Chair §IX into a longer
 * standalone treatment. Written more openly in working-essayist
 * voice than the main piece — first person, admitted personal
 * failure, a fourth move the main essay did not have room for.
 */

export default function OnRefusal() {
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
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          ← On the Chair
        </a>
        <span>§ IX extended</span>
      </nav>

      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "3rem",
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
          Companion Essay
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5.4vw, 3.6rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.012em",
          }}
        >
          On Refusal
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.15rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Four moves, and an honest accounting of what each can and
          cannot do.
        </p>
      </header>

      <P>
        This essay extends a section. The section is § IX of <em>On the
        Chair</em>, which closes the main piece with three preliminary
        moves toward refusal: refuse the consent ritual, refuse the
        cadence, refuse the integration. I want, in this longer
        treatment, to take the same three moves with more care, to add
        a fourth the main essay did not have room for, and to be more
        honest, here, about what I think the moves can and cannot do.
      </P>
      <P>
        The honesty is the more important thing. The contemporary
        literature on technology refusal is bad. It is mostly written
        either by people who do not use the technology (a small body
        of work, easy to dismiss) or by people who use the technology
        professionally and therefore have a structural interest in
        describing refusal as more tractable than it actually is (a
        much larger body, harder to dismiss because some of it is
        good). I do not want to add to either pile. I want to say what
        I actually think the moves can accomplish, which is less than
        is usually claimed.
      </P>

      {/* §I */}
      <H>§ I &nbsp;&nbsp; Refuse the consent ritual</H>
      <P>
        The consent ritual is the apparatus&apos;s primary legitimation
        device. Refusing it is therefore the apparatus&apos;s primary
        anti-legitimation device. This is the move with the most modest
        political horizon and the most modest practical cost. It is also
        rarely undertaken at scale, which is informative.
      </P>
      <P>
        The practical version: stop clicking <em>Accept</em> on cookie
        banners; opt out of every analytics agreement you can identify;
        refuse the loyalty program; do not link your accounts. The
        cumulative effect on your own life is approximately the
        following — certain platforms become slightly less convenient;
        certain ads become less personalized; certain recommendations
        become less targeted; you spend about fifteen additional seconds
        per day on consent interactions you used to flick through.
      </P>
      <P>
        The cumulative effect on the apparatus&apos;s operation is
        approximately zero. The apparatus does not need your consent to
        operate on you; it needs your consent to operate on you legally.
        The legal alibi is real and politically consequential, but a
        single occupant&apos;s refusal does not produce a legal exposure
        for any platform. A million occupants&apos; refusal does, which
        is why the move is worth recommending. But the politics of
        organizing a million simultaneous refusals is not in my
        expertise. I will not pretend it is.
      </P>
      <P>
        What the first move can do, individually, is preserve a small
        interior space within which the occupant is not, at every
        moment, performing consent. The interior space is not large. It
        is also not nothing.
      </P>

      {/* §II */}
      <H>§ II &nbsp;&nbsp; Refuse the cadence</H>
      <P>
        The second move is the one I am most certain about and the one
        that is hardest to describe. The apparatus operates by capturing
        the rhythm at which the occupant&apos;s attention and affect
        proceed. The capture is invisible to the occupant in a way that
        no other apparatus operation is invisible. You can know how
        many hours you spent on your phone yesterday; you cannot know
        the cadence at which your dopamine peaks were entrained.
      </P>
      <P>
        Refusing the cadence means refusing to be present when the
        apparatus expects you to be present. In concrete terms, this is
        very specific. It does not mean reading a book instead of
        scrolling Instagram. It means reading a book at the moment
        Instagram has trained you to expect a notification check, in
        the rhythm Instagram has trained you to expect that check&apos;s
        resolution. The book is not the resistance. The rhythm of the
        book is the resistance.
      </P>
      <P>
        The practical version: identify a single time of day at which
        the apparatus has succeeded in colonizing your tempo; identify
        what activity has come to fill that time; commit to a different
        activity, at a different tempo, in that specific window. The
        activity needs to be slower than the apparatus&apos;s tempo,
        harder to track than the apparatus&apos;s metrics, and not
        produce shareable output. Walking around without your phone is
        good. Sitting in a chair without a screen is good. Talking to
        someone you live with about something neither of you would post
        is excellent.
      </P>
      <P>
        This move is, on my view, the most important because it is the
        one the apparatus is least able to predict and least able to
        optimize against. The apparatus has very good models of what
        you will click on, what you will buy, what you will share. The
        apparatus has almost no models of you when you are not in front
        of it. The interior space I described in § I is, in this sense,
        defended by the second move more than by the first.
      </P>

      {/* §III */}
      <H>§ III &nbsp;&nbsp; Refuse the integration</H>
      <P>
        The integration the apparatus offers — closed-loop comfort,
        the elimination of friction — is the apparatus&apos;s deepest
        seduction. Friction is unpleasant. The apparatus&apos;s offer
        to eliminate it is, in the short run, an offer of relief. The
        third move is the move that involves the most personal cost.
      </P>
      <P>
        To accept friction is to accept some version of the following:
        that the recommendation algorithm will sometimes recommend
        something you do not like; that a service interaction will
        sometimes require a phone call to a human being; that a
        household purchase will sometimes involve research; that a
        conversation will sometimes proceed without the apparatus
        mediating it. None of these are large costs. All of them are
        larger than the costs the first two moves involve. This is why
        the third move is the least undertaken.
      </P>
      <P>
        The honest version: I have not, in my own life, consistently
        refused the integration. I have made occasional gestures in its
        direction. I have not committed thoroughly to friction. I am
        not sure I will. I am sure I want to. I list it as a move not
        because I have lived it but because I have come to believe that
        it is the move the apparatus is least equipped to absorb.
      </P>

      {/* §IV */}
      <H>§ IV &nbsp;&nbsp; Refuse the legitimacy</H>
      <P>
        This is the move the main essay did not have room for. It is
        the political move. The first three are, in different
        proportions, individual practices. The fourth is a refusal at
        the level of social legitimacy.
      </P>
      <P>
        The contemporary apparatus is legitimate. It is treated by
        regulators, by journalists, by economists, by employers, and by
        most users as a normal feature of contemporary life — the way
        running water and electrical service are normal features. The
        fourth move is the refusal of that legitimacy. It says: this
        is not a normal feature; this is a recent imposition; this can
        be unwound.
      </P>
      <P>
        The practical version is varied. It includes voting for
        candidates who treat the platform economy as a regulable
        industry rather than a fait accompli. It includes refusing
        certain language in your own writing and speech (I have, for
        example, stopped using the word <em>user</em> to describe the
        relationship the apparatus has with the people it operates on).
        It includes telling other people about the apparatus when they
        have not yet noticed it. It includes preserving, in your own
        household and community, the institutional memory of what life
        looked like before the apparatus became the default — not
        because the prior arrangement was uniformly good (it wasn&apos;t)
        but because the prior arrangement was a different arrangement,
        which is the politically important fact.
      </P>
      <P>
        The fourth move is the one I have committed to most fully. It
        is also the one whose effects are hardest to measure, because
        the political horizon over which it could pay out is not a
        single year or a single election cycle. It is, in the best
        case, a generation.
      </P>

      {/* §V */}
      <H>§ V &nbsp;&nbsp; What I have not said</H>
      <P>
        I have not said that the moves are adequate. The four moves,
        individually or together, do not destroy the apparatus. The
        apparatus continues. I do not have a theory of how the
        apparatus ends. I am not sure anyone does.
      </P>
      <P>
        What the four moves can do is preserve, in the meantime, an
        interior position within which the occupant retains the capacity
        to recognize the apparatus as an apparatus and to act on that
        recognition. This is the political minimum. It is not the
        political maximum. The political maximum would require a
        coordinated regulatory and economic intervention I do not see
        on the contemporary horizon and do not feel qualified to design.
      </P>
      <P>
        I am going to keep writing about this. The four moves are the
        four moves I have come to so far. There may be a fifth I have
        not yet identified. If there is, I would like to know what it
        is.
      </P>

      <div
        style={{
          marginTop: "3rem",
          paddingTop: "1.6rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          textAlign: "right",
        }}
      >
        &mdash; Selimović, May 2026
      </div>
    </article>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: SERIF,
        fontSize: "1.075rem",
        lineHeight: 1.72,
        color: PAPER,
        margin: "0 0 1.2rem",
        textWrap: "pretty" as const,
      }}
    >
      {children}
    </p>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: SERIF,
        fontWeight: 600,
        fontSize: "1.35rem",
        letterSpacing: "-0.005em",
        color: PAPER,
        margin: "2.6rem 0 1.4rem",
        paddingTop: "1rem",
        borderTop: `1px solid ${RULE}`,
        fontStyle: "italic",
      }}
    >
      {children}
    </h2>
  );
}
