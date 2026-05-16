"use client";

import { useState } from "react";
import { M } from "@/components/ui/Math";

/**
 * Causal implication chain — the proof of Theorem 1 visualized.
 *
 *   (A2 + A3 + A5 + A6) → θ* attains λ_max ─┐
 *                                            ├─→ S(τ;θ*) ≤ C·e^(−τ/δ_min)
 *                              (A1 + A4) ───┘                │
 *                                                            ▼
 *                                              Pr(E_τ) → 0  (Lemma 1)
 *                                                            │
 *                                                            ▼
 *                                Var Î(τ) ∝ 1/Pr(E_τ) diverges (step 2)
 *                                                            │
 *                                                            ▼
 *                                I(τ) undefined-on-trajectory  (Theorem 1)
 *
 * Mode A cuts the chain at the θ* node (β · b(τ^(k)) regularization
 * destroys monotonicity). Modes B and C operate on parallel structures
 * (D_KL and Σ respectively) that the chain does not depend on.
 *
 * Adapted from the CausalChain panel in chain.jsx.
 */

interface OptionT {
  value: string;
  label: string;
}

const POLICY_OPTIONS: OptionT[] = [
  { value: "closed-loop", label: "closed-loop (β = 0)" },
  { value: "with-bonus", label: "with-bonus (Mode A, β = 10)" },
];

const W = 760;
const H = 460;

const NODES = {
  A2: { x: 20, y: 50, w: 110, h: 50, label: "(A2)", t: "reward monotone in N_T" },
  A3: { x: 20, y: 110, w: 110, h: 50, label: "(A3)", t: "π attains λ_max" },
  A5: { x: 20, y: 170, w: 110, h: 50, label: "(A5)", t: "SGA converges to θ*" },
  A6: { x: 20, y: 230, w: 110, h: 50, label: "(A6)", t: "θ* isolated, H ≺ 0" },
  A1: { x: 20, y: 290, w: 110, h: 50, label: "(A1)", t: "renewal CoV bounded" },
  A4: { x: 20, y: 350, w: 110, h: 50, label: "(A4)", t: "user responds (p₀ > 0)" },
  star: { x: 180, y: 140, w: 170, h: 80, label: "θ* is a local max", t: "λ̄(θ*) = λ_max = 1/δ_min" },
  bound: { x: 400, y: 60, w: 220, h: 80, label: "Asmussen renewal bound", t: "S(τ;θ*) ≤ C(c_v)·e^{−τ/δ_min}" },
  prZero: { x: 400, y: 180, w: 220, h: 80, label: "Lemma 1", t: "Pr(E_τ) → 0 for τ > θ_ref" },
  varDiv: { x: 400, y: 300, w: 220, h: 80, label: "Step 2 (Thm 1)", t: "Var Î(τ) ∝ 1/(N · Pr(E_τ))" },
  fore: { x: 640, y: 200, w: 110, h: 140, label: "Theorem 1", t: "I(τ) undefined-on-trajectory" },
} as const;

type NodeId = keyof typeof NODES;

interface Edge {
  from: NodeId;
  to: NodeId;
  litWhen: (lit: Record<string, boolean>) => boolean;
}

const EDGES: Edge[] = [
  { from: "A2", to: "star", litWhen: (l) => l.A2 },
  { from: "A3", to: "star", litWhen: (l) => l.A3 },
  { from: "A5", to: "star", litWhen: (l) => l.A5 },
  { from: "A6", to: "star", litWhen: (l) => l.A6 },
  { from: "star", to: "bound", litWhen: (l) => l.star },
  { from: "A1", to: "bound", litWhen: (l) => l.A1 },
  { from: "A4", to: "prZero", litWhen: (l) => l.A4 },
  { from: "bound", to: "prZero", litWhen: (l) => l.bound },
  { from: "prZero", to: "varDiv", litWhen: (l) => l.prZero },
  { from: "varDiv", to: "fore", litWhen: (l) => l.varDiv },
  { from: "prZero", to: "fore", litWhen: (l) => l.prZero },
];

export function CausalChain() {
  const [policy, setPolicy] = useState<string>("closed-loop");
  const [modeBOn, setModeBOn] = useState(false);
  const [modeCOn, setModeCOn] = useState(false);

  const beta = policy === "with-bonus" ? 10 : 0;
  const modeAOn = beta > 0.05;

  // Evaluate the proof chain.
  const lit: Record<string, boolean> = {
    A1: true,
    A2: !modeAOn, // A2 monotone unless Mode A intervenes
    A3: true,
    A4: true,
    A5: true,
    A6: true,
  };
  lit.star = lit.A2 && lit.A3 && lit.A5 && lit.A6;
  lit.bound = lit.star && lit.A1;
  lit.prZero = lit.bound && lit.A4;
  lit.varDiv = lit.prZero;
  lit.fore = lit.prZero && lit.varDiv;

  // Compute edge midpoint coords for SVG paths.
  function nodeCenterOut(id: NodeId) {
    const n = NODES[id];
    return { x: n.x + n.w, y: n.y + n.h / 2 };
  }
  function nodeCenterIn(id: NodeId) {
    const n = NODES[id];
    return { x: n.x, y: n.y + n.h / 2 };
  }

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Controls */}
        <div className="font-mono text-sm text-ink-90 mb-md flex flex-wrap items-baseline gap-x-md gap-y-sm">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">policy =</span>
            <select
              value={policy}
              onChange={(e) => setPolicy(e.target.value)}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {POLICY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="inline-flex items-center gap-x-xs cursor-pointer">
            <input
              type="checkbox"
              checked={modeBOn}
              onChange={(e) => setModeBOn(e.target.checked)}
              className="accent-oxblood"
            />
            <span className="text-ink-70">Mode B active (<M>{String.raw`L_m > 0`}</M>)</span>
          </label>
          <label className="inline-flex items-center gap-x-xs cursor-pointer">
            <input
              type="checkbox"
              checked={modeCOn}
              onChange={(e) => setModeCOn(e.target.checked)}
              className="accent-oxblood"
            />
            <span className="text-ink-70">Mode C active (<M>{String.raw`\sigma_C > 0`}</M>)</span>
          </label>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Proof chain under ${policy}. ${lit.fore ? "Reclamation foreclosed: chain fires to Theorem 1." : "Chain interrupted: Theorem 1 does not fire."}`}
        >
          <defs>
            <marker
              id="chain-arr-lit"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--color-ink)" }} />
            </marker>
            <marker
              id="chain-arr-dim"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--color-ink-50)" }} />
            </marker>
          </defs>

          {/* Edges */}
          {EDGES.map((e, idx) => {
            const isLit = e.litWhen(lit);
            const a = nodeCenterOut(e.from);
            const b = nodeCenterIn(e.to);
            const mx = (a.x + b.x) / 2;
            return (
              <path
                key={idx}
                d={`M ${a.x} ${a.y} Q ${mx} ${a.y} ${mx} ${(a.y + b.y) / 2} T ${b.x} ${b.y}`}
                fill="none"
                style={{ stroke: isLit ? "var(--color-ink)" : "var(--color-ink-50)" }}
                strokeWidth={isLit ? 1.5 : 0.8}
                opacity={isLit ? 0.95 : 0.4}
                markerEnd={`url(#${isLit ? "chain-arr-lit" : "chain-arr-dim"})`}
              />
            );
          })}

          {/* Mode A cut — slashes between A2/A3 column and star node */}
          {modeAOn && (
            <g>
              <line
                x1={150}
                y1={75}
                x2={180}
                y2={115}
                style={{ stroke: "var(--color-oxblood)" }}
                strokeWidth="2.5"
              />
              <line
                x1={150}
                y1={115}
                x2={180}
                y2={75}
                style={{ stroke: "var(--color-oxblood)" }}
                strokeWidth="2.5"
              />
              <text
                x={148}
                y={50}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="10"
                style={{ fill: "var(--color-oxblood)", letterSpacing: "0.8px" }}
              >
                MODE A
              </text>
              <text
                x={148}
                y={62}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="10"
                style={{ fill: "var(--color-oxblood)" }}
              >
                βR̂'
              </text>
            </g>
          )}

          {/* Nodes */}
          {(Object.keys(NODES) as NodeId[]).map((id) => {
            const n = NODES[id];
            const isLit = lit[id];
            const isTerminal = id === "fore";
            const fill = isLit
              ? isTerminal
                ? "var(--color-ink)"
                : "var(--color-paper-95)"
              : "var(--color-paper-85)";
            const stroke = isLit
              ? isTerminal
                ? "var(--color-oxblood)"
                : "var(--color-ink)"
              : "var(--color-ink-50)";
            const labelColor = isLit
              ? isTerminal
                ? "var(--color-oxblood)"
                : "var(--color-ink-90)"
              : "var(--color-ink-50)";
            const textColor = isLit
              ? isTerminal
                ? "var(--color-paper)"
                : "var(--color-ink)"
              : "var(--color-ink-70)";
            return (
              <g key={id}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  rx="2"
                  style={{ fill, stroke }}
                  strokeWidth={isLit ? 1.4 : 0.8}
                />
                <text
                  x={n.x + 10}
                  y={n.y + 16}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  style={{ fill: labelColor, letterSpacing: "1.2px" }}
                >
                  {n.label}
                </text>
                <text
                  x={n.x + n.w / 2}
                  y={n.y + (n.h > 60 ? 50 : 36)}
                  textAnchor="middle"
                  fontFamily="var(--font-serif)"
                  fontStyle="italic"
                  fontSize={n.h > 60 ? 13 : 11.5}
                  style={{ fill: textColor }}
                >
                  {n.t}
                </text>
                {isTerminal && isLit && (
                  <text
                    x={n.x + n.w / 2}
                    y={n.y + 100}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    style={{ fill: "var(--color-oxblood)", letterSpacing: "1.2px" }}
                  >
                    RECLAMATION ⌀
                  </text>
                )}
              </g>
            );
          })}

          {/* Mode B / Mode C footer indicators */}
          <line
            x1={20}
            y1={420}
            x2={360}
            y2={420}
            style={{ stroke: "var(--color-paper-85)" }}
            strokeDasharray="2 3"
          />
          <text
            x={20}
            y={436}
            fontFamily="var(--font-mono)"
            fontSize="10"
            style={{
              fill: modeBOn ? "var(--color-ink-90)" : "var(--color-ink-50)",
              letterSpacing: "1px",
            }}
          >
            MODE B · holds D_KL(ν_u ‖ π_R̂) &gt; 0
          </text>
          <text
            x={20}
            y={450}
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="11"
            style={{ fill: "var(--color-ink-70)" }}
          >
            parallel structure — chain unbroken
          </text>
          <line
            x1={420}
            y1={420}
            x2={740}
            y2={420}
            style={{ stroke: "var(--color-paper-85)" }}
            strokeDasharray="2 3"
          />
          <text
            x={420}
            y={436}
            fontFamily="var(--font-mono)"
            fontSize="10"
            style={{
              fill: modeCOn ? "var(--color-ink-90)" : "var(--color-ink-50)",
              letterSpacing: "1px",
            }}
          >
            MODE C · bounds Σ(T)
          </text>
          <text
            x={420}
            y={450}
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontSize="11"
            style={{ fill: "var(--color-ink-70)" }}
          >
            parallel structure — chain unbroken
          </text>
        </svg>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§4.</span> The proof
        chain from the assumptions to Theorem 1, with each node firing when
        its premise holds. Under closed-loop, the chain fires to completion
        and reclamation is foreclosed. Switch to with-bonus and Mode A cuts
        the chain at the <M>{String.raw`\theta^*`}</M> node — Assumption (A2) reward-monotonicity fails
        under <M>{String.raw`\beta \hat{R}'`}</M>. Modes B and C light
        their footers without modifying the chain: they hold parallel
        structures (<M>{String.raw`D_{\mathrm{KL}}`}</M>, <M>{String.raw`\Sigma`}</M>) that the proof of Theorem 1 does not depend on.
      </figcaption>
    </figure>
  );
}
