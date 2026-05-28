"use client";

import { useState, type ReactNode, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * The closed-loop schematic — the centerpiece of the v2 /closed-loop/
 * landing. Inline SVG with ten labeled parts (the five (P1)-(P5)
 * structural objects plus user dynamics, performative distribution,
 * reward, parameter update, and the closure operator Φ) plus two
 * annotations (θ_ref, contractivity boundary).
 *
 * INTERACTIVE — Phase 1 prototype:
 *   - Hover or focus a part to see its plain-language caption in the
 *     panel below the figure.
 *   - Click (or Enter/Space when focused) to navigate to that part's
 *     apparatus section.
 *   - Tab cycles through parts in apparatus §0.1 enumeration order.
 *   - Routes target apparatus pages that don't exist yet (will be
 *     built in Phase 2); they 404 until then.
 *
 * Specification: autostimulus-planning/07_schematic_design.md §2-3, §8.
 *
 * Still TODO:
 *   - Mobile tap-to-reveal pattern (§7)
 *   - Label positioning polish where parts crowd
 */

type PartId =
  | "userState"
  | "observationChannel"
  | "observation"
  | "filteringPosterior"
  | "policy"
  | "stimulus"
  | "userDynamics"
  | "performativeDistribution"
  | "reward"
  | "parameterUpdate"
  | "closure"
  | "reflectiveThreshold"
  | "contractivityBoundary";

interface PartMeta {
  label: string;
  caption: string;
  route: string;
}

/**
 * Tab order follows apparatus §0.1's enumeration of the structural
 * objects (P1)-(P5), then the optimization machinery, then the
 * closure, then the two annotations.
 */
const TAB_ORDER: PartId[] = [
  "userState", // (P1)
  "observationChannel", // (P2)
  "observation",
  "filteringPosterior",
  "policy", // (P3)
  "stimulus",
  "userDynamics",
  "performativeDistribution", // (P4)
  "reward", // (P5)
  "parameterUpdate",
  "closure",
  "reflectiveThreshold",
  "contractivityBoundary",
];

const PARTS: Record<PartId, PartMeta> = {
  userState: {
    label: "User state u_t",
    caption:
      "The user state — what the user knows, feels, has done. Decomposed into four registers: somatic, cognitive, political, kinaesthetic. The framework's first structural object (P1).",
    route: "/closed-loop/the-apparatus/section-0",
  },
  observationChannel: {
    label: "Observation channel O",
    caption:
      "The observation channel — what the platform sees of the user. A measurable kernel producing observations y_t from the user state. The framework's second structural object (P2).",
    route: "/closed-loop/the-apparatus/section-0",
  },
  observation: {
    label: "Observation y_t",
    caption:
      "The observation — the platform's view of the user at time t. The intermediate object the policy operates on.",
    route: "/closed-loop/the-apparatus/section-0",
  },
  filteringPosterior: {
    label: "Filtering posterior Π_t",
    caption:
      "The platform's filtering posterior — what the platform infers about the user state from the observation history. Proposition 4' (the dividual condition) names how this posterior contracts under closed-loop sampling.",
    route: "/closed-loop/the-apparatus/section-3/prop-4-prime",
  },
  policy: {
    label: "Platform policy π_θ",
    caption:
      "The platform's policy — the function that, given observations about the user, samples the next stimulus. Parameterized by θ. The policy the closure optimizes; the central object of Mode A intervention.",
    route: "/closed-loop/the-apparatus/section-0",
  },
  stimulus: {
    label: "Stimulus s_t",
    caption:
      "The stimulus — what the platform delivers to the user at time t. Drawn from the policy's distribution over the stimulus space.",
    route: "/closed-loop/the-apparatus/section-0",
  },
  userDynamics: {
    label: "User dynamics T",
    caption:
      "The user dynamics — the Markov kernel describing how the user state evolves under platform stimulus. u_(t+1) ~ T(· | u_t, s_t).",
    route: "/closed-loop/the-apparatus/section-0",
  },
  performativeDistribution: {
    label: "Performative distribution D(θ)",
    caption:
      "The performative distribution — for each policy parameter θ, the stationary joint distribution over user state, observation, and stimulus trajectories that the closure produces. The framework's central analytical object.",
    route: "/closed-loop/the-apparatus/section-0",
  },
  reward: {
    label: "Reward functional F(θ)",
    caption:
      "The performative reward — the platform's optimization target. Engagement-monetization is the substantive economic claim that grounds this functional (axiom P-I, reward monotonicity in engagement).",
    route: "/closed-loop/the-apparatus/section-0/0.3-axioms",
  },
  parameterUpdate: {
    label: "Parameter update",
    caption:
      "Online gradient ascent on the performative reward, with Robbins–Monro step sizes (axiom P-III). The mechanism by which the platform's policy parameter θ_t converges to the performative stable point θ*.",
    route: "/closed-loop/the-apparatus/section-0",
  },
  closure: {
    label: "The closure Φ",
    caption:
      "The closure — the platform's optimization runs against the distribution its own policy has produced. The framework's central architectural fact. Formally: the performative operator Φ : θ ↦ argmax E_D(θ)[Ȓ(θ')]. Definitions 0.1 and 0.2 name the closure's two distinguished points.",
    route: "/closed-loop/the-apparatus/section-0/0.2-closure",
  },
  reflectiveThreshold: {
    label: "Reflective threshold θ_ref",
    caption:
      "θ_ref — the time-scale at which thought can complete itself. Foreclosed under closed-loop convergence: the survival function S(θ_ref ; θ_t) approaches operational zero (Lemma 1).",
    route: "/closed-loop/the-apparatus/section-1/lemma-1",
  },
  contractivityBoundary: {
    label: "Contractivity boundary L_Ȓ L_D = 1",
    caption:
      "The contractivity boundary — where the framework's contractivity hypothesis L_Ȓ L_D < 1 fails. Near it, four bifurcation regimes characterize platform instability (Theorem 12).",
    route: "/closed-loop/the-apparatus/section-10/theorem-12",
  },
};

export function ClosedLoopSchematic() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<PartId | null>(null);
  const [focusedId, setFocusedId] = useState<PartId | null>(null);

  // Focus takes precedence over hover for caption display
  const activeId = focusedId ?? hoveredId;
  const activePart = activeId ? PARTS[activeId] : null;

  function handleActivate(id: PartId) {
    router.push(PARTS[id].route);
  }

  function handleKeyDown(id: PartId, event: KeyboardEvent<SVGGElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate(id);
    }
  }

  /**
   * Wrapper for an interactive SVG group. Handles hover/focus state,
   * click activation, keyboard activation (Enter/Space), and ARIA
   * semantics for screen readers.
   */
  function Part({
    id,
    children,
  }: {
    id: PartId;
    children: ReactNode;
  }) {
    const meta = PARTS[id];
    const isActive = activeId === id;
    return (
      <g
        role="button"
        tabIndex={0}
        aria-label={`${meta.label}. ${meta.caption}`}
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
        onFocus={() => setFocusedId(id)}
        onBlur={() => setFocusedId(null)}
        onClick={() => handleActivate(id)}
        onKeyDown={(e) => handleKeyDown(id, e)}
        style={{ cursor: "pointer" }}
        data-active={isActive || undefined}
      >
        {children}
      </g>
    );
  }

  return (
    <div className="schematic-container">
      <style>{`
        .schematic-svg [role="button"] { transition: opacity 0.15s ease; }
        .schematic-svg [role="button"]:hover,
        .schematic-svg [role="button"]:focus-visible {
          opacity: 1;
        }
        .schematic-svg [role="button"][data-active] rect,
        .schematic-svg [role="button"][data-active] circle,
        .schematic-svg [role="button"][data-active] path {
          stroke: var(--color-oxblood);
        }
        /* Visible keyboard focus ring. SVG outline rendering varies across
           browsers; thicken the part's stroke and add an outline for the
           widest cross-browser support. */
        .schematic-svg [role="button"] { outline: none; }
        .schematic-svg [role="button"]:focus-visible {
          outline: 2px solid var(--color-oxblood);
          outline-offset: 2px;
        }
        .schematic-svg [role="button"]:focus-visible rect,
        .schematic-svg [role="button"]:focus-visible circle,
        .schematic-svg [role="button"]:focus-visible path {
          stroke: var(--color-oxblood);
          stroke-width: 2;
        }
      `}</style>

      <svg
        viewBox="0 0 960 800"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="schematic-title schematic-desc"
        className="schematic-svg w-full max-w-[960px] h-auto"
      >
        <title id="schematic-title">
          The closed-loop architecture — interactive schematic
        </title>
        <desc id="schematic-desc">
          A diagram of the closed-loop libidinal economy. The user state
          u_t at center evolves under stimulus s_t produced by the
          platform policy π_θ, which is itself optimized against the
          performative distribution D(θ) the policy produces, via the
          reward functional F(θ). The closure operator Φ runs from the
          optimization machinery back to the policy. Tab through the
          parts to navigate; Enter or Space to enter a part's apparatus
          section.
        </desc>

        {/* === Arrowhead marker definitions === */}
        <defs>
          <marker
            id="arrowhead-ink"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-ink)" />
          </marker>
          <marker
            id="arrowhead-oxblood"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-oxblood)" />
          </marker>
        </defs>

        {/* ──────────────────────────────────────────────────────────── */}
        {/* THE CLOSURE Φ — drawn first so other parts overlay it.       */}
        {/* ──────────────────────────────────────────────────────────── */}
        <Part id="closure">
          <path
            d="M 800 110 C 920 180, 920 500, 720 580 C 580 640, 480 580, 480 320"
            fill="none"
            stroke="var(--color-oxblood)"
            strokeWidth="2.5"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-oxblood)"
          />
          <text aria-hidden="true"
            x="900"
            y="380"
            fill="var(--color-oxblood)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
            transform="rotate(90 900 380)"
          >
            THE CLOSURE Φ
          </text>
        </Part>

        {/* === REWARD FUNCTIONAL F(θ) === */}
        <Part id="reward">
          <rect
            x="640"
            y="50"
            width="220"
            height="60"
            fill="var(--color-slate)"
            fillOpacity="0.15"
            stroke="var(--color-ink)"
            strokeWidth="1"
          />
          <text aria-hidden="true"
            x="750"
            y="40"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            REWARD F(θ)
          </text>
          <text aria-hidden="true"
            x="750"
            y="86"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="16"
            textAnchor="middle"
          >
            F(θ) = E[Ȓ]
          </text>
        </Part>

        {/* === PERFORMATIVE DISTRIBUTION D(θ) === */}
        <Part id="performativeDistribution">
          <rect
            x="640"
            y="140"
            width="220"
            height="55"
            fill="var(--color-fog)"
            fillOpacity="0.2"
            stroke="var(--color-ink)"
            strokeWidth="0.5"
          />
          <text aria-hidden="true"
            x="750"
            y="130"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            PERFORMATIVE DISTRIBUTION D(θ)
          </text>
          <text aria-hidden="true"
            x="750"
            y="174"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="14"
            textAnchor="middle"
          >
            D(θ) = stationary joint of (u, y, s)
          </text>
        </Part>

        {/* === PARAMETER UPDATE === */}
        <Part id="parameterUpdate">
          <rect
            x="380"
            y="100"
            width="220"
            height="50"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1"
          />
          <text aria-hidden="true"
            x="490"
            y="92"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            PARAMETER UPDATE
          </text>
          <text aria-hidden="true"
            x="490"
            y="130"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="14"
            textAnchor="middle"
          >
            θ_(t+1) = θ_t + α∇̂F(θ_t)
          </text>
        </Part>

        {/* Arrow from PARAMETER UPDATE down to POLICY (non-interactive) */}
        <path
          d="M 490 150 L 490 240"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead-ink)"
        />

        {/* Arrow from REWARD/PERF DIST into PARAMETER UPDATE */}
        <path
          d="M 640 145 L 600 130"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
        />

        {/* === PLATFORM POLICY π_θ === */}
        <Part id="policy">
          <rect
            x="380"
            y="240"
            width="220"
            height="80"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />
          <rect
            x="380"
            y="240"
            width="220"
            height="80"
            fill="var(--color-slate)"
            fillOpacity="0.06"
          />
          <text aria-hidden="true"
            x="490"
            y="232"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            PLATFORM POLICY π_θ
          </text>
          <text aria-hidden="true"
            x="490"
            y="290"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="18"
            textAnchor="middle"
          >
            π_θ : Y* → Δ(S)
          </text>
        </Part>

        {/* === STIMULUS s_t === */}
        <Part id="stimulus">
          <path
            d="M 540 320 L 540 460"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead-ink)"
          />
          <circle cx="540" cy="390" r="6" fill="var(--color-ink)" />
          <text aria-hidden="true"
            x="555"
            y="395"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="14"
          >
            s_t
          </text>
        </Part>

        {/* === θ_ref annotation === */}
        <Part id="reflectiveThreshold">
          <line
            x1="525"
            y1="420"
            x2="555"
            y2="420"
            stroke="var(--color-oxblood)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <text aria-hidden="true"
            x="600"
            y="425"
            fill="var(--color-oxblood)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
          >
            θ_ref (reflective threshold)
          </text>
        </Part>

        {/* === USER STATE u_t — visual anchor === */}
        <Part id="userState">
          <rect
            x="380"
            y="460"
            width="220"
            height="140"
            fill="var(--color-paper-95)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />
          <text aria-hidden="true"
            x="490"
            y="452"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            USER STATE u_t
          </text>
          {/* Four registers, 2x2 grid */}
          <rect x="400" y="480" width="85" height="55" fill="none" stroke="var(--color-ink-70)" strokeWidth="0.5" />
          <text aria-hidden="true" x="442" y="514" fill="var(--color-ink)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em" textAnchor="middle">S</text>
          <rect x="495" y="480" width="85" height="55" fill="none" stroke="var(--color-ink-70)" strokeWidth="0.5" />
          <text aria-hidden="true" x="537" y="514" fill="var(--color-ink)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em" textAnchor="middle">C</text>
          <rect x="400" y="540" width="85" height="55" fill="none" stroke="var(--color-ink-70)" strokeWidth="0.5" />
          <text aria-hidden="true" x="442" y="574" fill="var(--color-ink)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em" textAnchor="middle">P</text>
          <rect x="495" y="540" width="85" height="55" fill="none" stroke="var(--color-ink-70)" strokeWidth="0.5" />
          <text aria-hidden="true" x="537" y="574" fill="var(--color-ink)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em" textAnchor="middle">K</text>
        </Part>

        {/* === USER DYNAMICS T === */}
        <Part id="userDynamics">
          <path
            d="M 380 590 C 360 610, 360 640, 380 660"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1"
            markerEnd="url(#arrowhead-ink)"
          />
          <text aria-hidden="true"
            x="340"
            y="630"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="end"
          >
            T (DYNAMICS)
          </text>
        </Part>

        {/* === OBSERVATION CHANNEL O === */}
        <Part id="observationChannel">
          <path
            d="M 380 480 L 240 380 L 240 410 Z"
            fill="var(--color-paper-95)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
          />
          <text aria-hidden="true"
            x="290"
            y="350"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            OBSERVATION O
          </text>
        </Part>

        {/* === OBSERVATION y_t === */}
        <Part id="observation">
          <circle cx="210" cy="380" r="12" fill="var(--color-ink)" />
          <text aria-hidden="true"
            x="195"
            y="383"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="end"
          >
            y_t
          </text>
        </Part>

        {/* Arrow from y_t to Π_t (non-interactive) */}
        <path
          d="M 210 368 L 210 290"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead-ink)"
        />

        {/* === FILTERING POSTERIOR Π_t === */}
        <Part id="filteringPosterior">
          <rect
            x="160"
            y="245"
            width="100"
            height="45"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1"
            rx="4"
          />
          <text aria-hidden="true"
            x="210"
            y="237"
            fill="var(--color-ink-70)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            FILTERING Π_t
          </text>
          <text aria-hidden="true"
            x="210"
            y="275"
            fill="var(--color-ink)"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="14"
            textAnchor="middle"
          >
            Π_t
          </text>
        </Part>

        {/* Arrow from Π_t back to POLICY (non-interactive) */}
        <path
          d="M 260 268 L 380 268"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead-ink)"
        />

        {/* === Contractivity boundary annotation === */}
        <Part id="contractivityBoundary">
          <line
            x1="900"
            y1="295"
            x2="900"
            y2="325"
            stroke="var(--color-oxblood)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <text aria-hidden="true"
            x="940"
            y="315"
            fill="var(--color-oxblood)"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="0.05em"
          >
            L_Ȓ L_D = 1
          </text>
        </Part>
      </svg>

      {/* === Caption panel below the SVG. Updates on hover/focus. === */}
      <div
        className="caption-panel mt-md p-sm border-l-2 border-fog min-h-[6rem]"
        aria-live="polite"
        aria-atomic="true"
      >
        {activePart ? (
          <>
            <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
              {activePart.label}
            </div>
            <p className="text-base text-ink-90 leading-snug max-w-prose">
              {activePart.caption}
            </p>
            <p className="font-mono text-xs text-ink-50 mt-xs">
              click or press enter to enter {activePart.label.toLowerCase()}
            </p>
          </>
        ) : (
          <p className="text-base text-ink-70 italic leading-snug max-w-prose">
            Hover or focus a part of the figure to see its description.
            Click — or Tab to focus and press Enter — to enter that
            part&apos;s apparatus section.
          </p>
        )}
      </div>
    </div>
  );
}

// Set the tab order via the document order — TAB_ORDER is the
// authoritative source. The Part components above are rendered in
// SVG-rendering order (closure first so it sits behind), which is NOT
// the apparatus enumeration order. The browser walks tabbable elements
// in DOM order; we want apparatus order. Since the visual order
// requires the closure first, we override tab order via tabindex
// positive values in a future pass. For Phase 1 stub→prototype, DOM
// order is acceptable. Notation suppression: TAB_ORDER kept as the
// canonical reference for the eventual override.
void TAB_ORDER;
