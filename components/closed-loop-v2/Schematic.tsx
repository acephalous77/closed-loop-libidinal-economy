/**
 * The closed-loop schematic — the centerpiece of the v2 /closed-loop/
 * landing. Inline SVG with ten labeled parts (the five (P1)-(P5)
 * structural objects plus user dynamics, performative distribution,
 * reward, parameter update, and the closure operator Φ).
 *
 * STUB VERSION (Phase 1):
 *   - Composition + labels rendered.
 *   - No hover captions yet.
 *   - No click-to-navigate yet.
 *   - No keyboard semantics yet.
 *
 * Subsequent passes add: hover captions per part, route mappings per
 * autostimulus-planning/07_schematic_design.md §2, ARIA semantics +
 * keyboard nav per §8, mobile adaptations per §7.
 *
 * viewBox 0 0 960 800. Lower 60% of frame carries the closed loop;
 * upper 40% carries the optimization machinery. The closure arrow Φ
 * is the most visually weighty single element (oxblood, stroke 2.5).
 */
export function ClosedLoopSchematic() {
  return (
    <svg
      viewBox="0 0 960 800"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="schematic-title schematic-desc"
      className="w-full max-w-[960px] h-auto"
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
        optimization machinery back to the policy.
      </desc>

      {/* === Background — none. The page background carries through. === */}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* THE CLOSURE Φ — drawn first so it sits behind other parts.   */}
      {/* Curves from the upper-right (reward/optimization region)     */}
      {/* down along the right side and back up to the policy block.   */}
      {/* The figure's most weighty single element.                    */}
      {/* ──────────────────────────────────────────────────────────── */}
      <path
        d="M 800 110 C 920 180, 920 500, 720 580 C 580 640, 480 580, 480 320"
        fill="none"
        stroke="var(--color-oxblood)"
        strokeWidth="2.5"
        strokeLinecap="round"
        markerEnd="url(#arrowhead-oxblood)"
      />
      <text
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

      {/* ──────────────────────────────────────────────────────────── */}
      {/* OPTIMIZATION MACHINERY — upper region                        */}
      {/* ──────────────────────────────────────────────────────────── */}

      {/* REWARD FUNCTIONAL F(θ) */}
      <g>
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
        <text
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
        <text
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
      </g>

      {/* PERFORMATIVE DISTRIBUTION D(θ) */}
      <g>
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
        <text
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
        <text
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
      </g>

      {/* PARAMETER UPDATE */}
      <g>
        <rect
          x="380"
          y="100"
          width="220"
          height="50"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
        />
        <text
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
        <text
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
      </g>

      {/* Arrow from PARAMETER UPDATE down to POLICY */}
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

      {/* ──────────────────────────────────────────────────────────── */}
      {/* THE LOOP — lower region                                      */}
      {/* ──────────────────────────────────────────────────────────── */}

      {/* PLATFORM POLICY π_θ */}
      <g>
        <rect
          x="380"
          y="240"
          width="220"
          height="80"
          fill="var(--color-paper)"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
        />
        {/* Subtle slate-tinted cross-hatch */}
        <rect
          x="380"
          y="240"
          width="220"
          height="80"
          fill="var(--color-slate)"
          fillOpacity="0.06"
        />
        <text
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
        <text
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
      </g>

      {/* STIMULUS s_t arrow from POLICY to USER STATE */}
      <path
        d="M 540 320 L 540 460"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead-ink)"
      />
      <circle cx="540" cy="390" r="6" fill="var(--color-ink)" />
      <text
        x="555"
        y="395"
        fill="var(--color-ink)"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontSize="14"
      >
        s_t
      </text>

      {/* θ_ref annotation — dashed mark on stimulus arrow */}
      <line
        x1="525"
        y1="420"
        x2="555"
        y2="420"
        stroke="var(--color-oxblood)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <text
        x="600"
        y="425"
        fill="var(--color-oxblood)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.05em"
      >
        θ_ref (reflective threshold)
      </text>

      {/* USER STATE u_t — the visual anchor */}
      <g>
        <rect
          x="380"
          y="460"
          width="220"
          height="140"
          fill="var(--color-paper-95)"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
        />
        <text
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
        {/* Four registers, shown as 2x2 grid */}
        <g>
          <rect
            x="400"
            y="480"
            width="85"
            height="55"
            fill="none"
            stroke="var(--color-ink-70)"
            strokeWidth="0.5"
          />
          <text
            x="442"
            y="514"
            fill="var(--color-ink)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            S
          </text>
          <rect
            x="495"
            y="480"
            width="85"
            height="55"
            fill="none"
            stroke="var(--color-ink-70)"
            strokeWidth="0.5"
          />
          <text
            x="537"
            y="514"
            fill="var(--color-ink)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            C
          </text>
          <rect
            x="400"
            y="540"
            width="85"
            height="55"
            fill="none"
            stroke="var(--color-ink-70)"
            strokeWidth="0.5"
          />
          <text
            x="442"
            y="574"
            fill="var(--color-ink)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            P
          </text>
          <rect
            x="495"
            y="540"
            width="85"
            height="55"
            fill="none"
            stroke="var(--color-ink-70)"
            strokeWidth="0.5"
          />
          <text
            x="537"
            y="574"
            fill="var(--color-ink)"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.05em"
            textAnchor="middle"
          >
            K
          </text>
        </g>
      </g>

      {/* USER DYNAMICS T — small curved arrow on user state lower edge */}
      <path
        d="M 380 590 C 360 610, 360 640, 380 660"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1"
        markerEnd="url(#arrowhead-ink)"
      />
      <text
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

      {/* OBSERVATION CHANNEL O — wedge from USER STATE upper-left out */}
      <path
        d="M 380 480 L 240 380 L 240 410 Z"
        fill="var(--color-paper-95)"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
      />
      <text
        x="290"
        y="445"
        fill="var(--color-ink-70)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.05em"
        textAnchor="middle"
      >
        OBSERVATION O
      </text>

      {/* OBSERVATION y_t — node */}
      <circle cx="210" cy="380" r="12" fill="var(--color-ink)" />
      <text
        x="210"
        y="358"
        fill="var(--color-ink-70)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.05em"
        textAnchor="middle"
      >
        y_t
      </text>

      {/* Arrow from y_t to Π_t */}
      <path
        d="M 210 368 L 210 290"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead-ink)"
      />

      {/* FILTERING POSTERIOR Π_t */}
      <g>
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
        <text
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
        <text
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
      </g>

      {/* Arrow from Π_t back to POLICY */}
      <path
        d="M 260 268 L 380 268"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead-ink)"
      />

      {/* Contractivity boundary annotation on the closure arrow */}
      <line
        x1="900"
        y1="295"
        x2="900"
        y2="325"
        stroke="var(--color-oxblood)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <text
        x="940"
        y="315"
        fill="var(--color-oxblood)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="0.05em"
      >
        L_Ȓ L_D = 1
      </text>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* Arrowhead marker definitions                                 */}
      {/* ──────────────────────────────────────────────────────────── */}
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
    </svg>
  );
}
