import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "On Refusal — On the Chair" },
  description:
    "Longer treatment of § IX of the chair essay. A fourth move added to the essay's three, and a more honest accounting of what each can and cannot do.",
  alternates: { canonical: "/chair/refusal" },
};

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/refusal — single column, meditative.
// All the gravity in the prose. No marginal apparatus, no figure
// plates. Different rhythm from the essay-master.
// ──────────────────────────────────────────────────────────────────

export default function RefusalPage() {
  return (
    <article>
      <PlateHeader plate="IX.0" route="/chair/refusal" code="DOSS · OLS · REFUSAL" />

      <div className="chair-pad" style={{
        maxWidth: 760, margin: "0 auto",
        padding: "70px 32px 80px",
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 20, textAlign: "center",
        }}>Companion · § IX Extended</div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(64px, 12vw, 108px)",
          lineHeight: 0.92, letterSpacing: "-0.026em",
          fontStyle: "italic", fontWeight: 400, margin: 0,
          color: T.ink, textAlign: "center",
        }}>On Refusal.</h1>
        <p style={{
          fontFamily: FONT.serif, fontSize: 21, lineHeight: 1.5,
          color: T.inkDim, fontStyle: "italic", textAlign: "center",
          marginTop: 28, marginBottom: 0,
        }}>
          A fourth move added to the essay&apos;s three, and a more
          honest accounting of what each can and cannot do.
        </p>

        <div style={{ margin: "52px auto", width: 80, height: 0.5, background: T.accent }} />

        <p className="chair-dropcap" style={{
          fontFamily: FONT.serif, fontSize: 16, lineHeight: 1.75,
          color: T.ink, margin: "0 0 18px",
        }}>
          A politics is owed. The argument so far has been that the
          chair is useful as a figure because it makes the apparatus
          visible. Visibility is one thing; refusal is another, and
          what follows is about what to do once you have it. The longer treatment
          of the first three moves appears in the main essay at §IX;
          here I am more direct about what I have and have not
          managed to do myself.
        </p>

        <div style={{
          margin: "36px 0", padding: "24px 0",
          borderTop: `0.5px solid ${T.rule}`,
          borderBottom: `0.5px solid ${T.rule}`,
        }}>
          {[
            ["i",   "Withhold the consent.",   "The cookie banner, the TOS update, the permission prompt — the apparatus's primary legitimation. Refusing them leaves the apparatus standing but forecloses its legal alibis."],
            ["ii",  "Interrupt the cadence.",  "To be slow when speed is demanded, silent when noise is rewarded, inattentive when engagement is metered."],
            ["iii", "Accept the friction.",    "The friction the apparatus eliminates is frequently the very friction in which non-apparatus-mediated life consists."],
            ["iv",  "Be illegible.",           "Refuse the categories the apparatus uses to model you. This is the move I have struggled with most, and the one I would rather not lecture on from a position I have not earned."],
          ].map(([n, title, blurb]) => (
            <div key={n} style={{
              display: "grid", gridTemplateColumns: "36px 1fr",
              gap: 18, padding: "14px 0", alignItems: "baseline",
            }}>
              <span style={{
                fontFamily: FONT.mono, fontSize: 11, color: T.accent,
                fontWeight: 700, letterSpacing: "0.16em",
              }}>{n}.</span>
              <div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 22, fontStyle: "italic",
                  fontWeight: 500, letterSpacing: "-0.008em",
                  color: T.ink, marginBottom: 6,
                }}>{title}</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 14, lineHeight: 1.55,
                  color: T.inkDim,
                }}>{blurb}</div>
              </div>
            </div>
          ))}
        </div>

        <RP>
          The first move is the smallest and the most neglected. The
          apparatus&apos;s grip is secured by the cumulative effect of
          tiny consents, each one trivial, the aggregate decisive.
          Refusing them leaves the apparatus standing — but it strips
          the legal alibi the aggregate was building. The horizon is
          modest, the practice rare, and the two facts are related.
        </RP>
        <RP>
          The second move is harder. The apparatus&apos;s deepest grip
          is temporal. To withhold attention at the moment the apparatus
          has scheduled it to fire — to be slow when speed is demanded,
          silent when noise is rewarded, inattentive when engagement is
          metered — is to interrupt the cadence by which the apparatus
          operates.
        </RP>

        <blockquote style={{
          margin: "34px -20px", padding: "20px 30px",
          borderTop: `0.5px solid ${T.accent}`,
          borderBottom: `0.5px solid ${T.accent}`,
          fontFamily: FONT.serif, fontStyle: "italic",
          fontSize: 26, lineHeight: 1.32, color: T.ink,
          letterSpacing: "-0.008em", textAlign: "center",
        }}>
          Slowness, silence, inattention — the apparatus has a long
          history of pathologising all three, then selling them back as
          wellness. The rebranding is its tribute to how well they work.
        </blockquote>

        <RP>
          The third move is the costliest. The apparatus&apos;s
          promise — closed-loop comfort, friction eliminated — is its
          deepest seduction, because friction is unpleasant. The
          friction the apparatus eliminates is frequently the very
          friction in which non-apparatus-mediated life consists.
        </RP>
        <RP>
          No single one of these is adequate on its own. The interior they
          collectively defend is small. Smallness is what keeps it defensible.
          The moves preserve the capacity to recognize the
          apparatus as an apparatus, and to act on the recognition.
          That recognition is what the rest of this project has been
          trying to make available.
        </RP>

        <div style={{ margin: "52px auto 0", textAlign: "center" }}>
          <ChairGlyph size={40} stroke={T.accent} />
          <p style={{
            marginTop: 16, fontFamily: FONT.mono, fontSize: 10,
            letterSpacing: "0.28em", textTransform: "uppercase",
            color: T.inkMute,
          }}>— end of § IX —</p>
        </div>
      </div>

      <PlateFooter folio="36" total="42" section="Refusal · § IX extended" />
    </article>
  );
}

function RP({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: FONT.serif, fontSize: 16, lineHeight: 1.75,
      color: T.ink, margin: "0 0 16px",
    }}>{children}</p>
  );
}
