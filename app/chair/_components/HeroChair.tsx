import { MASTER, type Tokens, FONT } from "./tokens";

// ──────────────────────────────────────────────────────────────────
// HeroChair — the side-elevation figure, with optional callout pointers
// in the manner of an anatomical-atlas plate. Used as the cover figure
// and (without callouts) in mobile collapses.
// ──────────────────────────────────────────────────────────────────

interface HeroChairProps {
  tokens?: Tokens;
  withCallouts?: boolean;
}

export function HeroChair({
  tokens = MASTER, withCallouts = true,
}: HeroChairProps) {
  const ink = tokens.ink;
  const acc = tokens.accent;
  const mute = tokens.inkMute;

  return (
    <figure style={{ margin: 0, position: "relative" }}>
      <svg viewBox="0 0 720 380" style={{ width: "100%", height: "auto", display: "block" }}>
        {/* baseline */}
        <line x1="40" y1="350" x2="680" y2="350" stroke={ink} strokeWidth="0.6" opacity="0.55" />
        {/* tick marks under floor */}
        {Array.from({ length: 33 }).map((_, i) => (
          <line key={i} x1={40 + i * 20} y1="350" x2={40 + i * 20}
                y2={i % 5 === 0 ? 358 : 354}
                stroke={ink} strokeWidth="0.4" opacity="0.35" />
        ))}
        {/* reclined seat silhouette */}
        <path
          d="M 130 320 L 130 240 Q 130 218 152 214 L 300 198 L 510 158 Q 545 150 558 180 L 580 238 Q 580 250 568 256 L 192 338 Q 158 348 144 332 Z"
          fill="none" stroke={ink} strokeWidth="1.4"
        />
        {/* headrest */}
        <ellipse cx="528" cy="158" rx="38" ry="18" fill="none" stroke={ink} strokeWidth="1.1" />
        {/* RING at chest height */}
        <ellipse cx="404" cy="198" rx="108" ry="26" fill="none" stroke={acc} strokeWidth="1.6" />
        <ellipse cx="404" cy="198" rx="108" ry="26" fill="none" stroke={acc} strokeWidth="0.7"
                 strokeDasharray="2 4" opacity="0.5" transform="rotate(6 404 198)" />
        {/* work terminal */}
        <rect x="446" y="86" width="142" height="86" fill="none" stroke={ink} strokeWidth="0.9" />
        <line x1="446" y1="172" x2="496" y2="196" stroke={ink} strokeWidth="0.55" />
        {/* feed tubing — left side */}
        <path d="M 60 152 Q 130 178 296 200" fill="none" stroke={acc} strokeWidth="1" opacity="0.75" />
        <path d="M 60 188 Q 130 212 296 210" fill="none" stroke={acc} strokeWidth="1" opacity="0.75" />
        {/* drainage */}
        <path d="M 320 336 Q 350 346 404 346 L 660 346" fill="none" stroke={acc} strokeWidth="1" opacity="0.5" />
        {/* base plinth */}
        <rect x="208" y="338" width="262" height="14" fill={ink} opacity="0.8" />

        {withCallouts && (
          <g fontFamily={FONT.mono} fontSize="9" fill={mute} letterSpacing="0.16em">
            <line x1="404" y1="172" x2="404" y2="60" stroke={acc} strokeWidth="0.5" />
            <circle cx="404" cy="60" r="3" fill={acc} />
            <text x="404" y="48" textAnchor="middle" fill={acc} fontWeight="600">a</text>
            <text x="404" y="32" textAnchor="middle">RING · CENTRAL INTEGRATION</text>

            <line x1="517" y1="86" x2="640" y2="60" stroke={acc} strokeWidth="0.5" />
            <circle cx="640" cy="60" r="3" fill={acc} />
            <text x="640" y="48" textAnchor="end" fill={acc} fontWeight="600">b</text>
            <text x="640" y="32" textAnchor="end">WORK TERMINAL</text>

            <line x1="120" y1="170" x2="60" y2="100" stroke={acc} strokeWidth="0.5" />
            <circle cx="60" cy="100" r="3" fill={acc} />
            <text x="60" y="88" fill={acc} fontWeight="600">c</text>
            <text x="60" y="72">FEED · INPUT TUBING</text>

            <line x1="572" y1="346" x2="660" y2="378" stroke={acc} strokeWidth="0.5" />
            <circle cx="660" cy="378" r="3" fill={acc} />
          </g>
        )}
      </svg>
      <figcaption style={{
        marginTop: 12, fontFamily: FONT.mono, fontSize: 11, color: mute,
        letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center",
      }}>
        Fig. 0  ·  The apparatus  ·  side elevation, ringed
      </figcaption>
    </figure>
  );
}
