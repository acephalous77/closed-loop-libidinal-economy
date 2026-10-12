"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useAnimating } from "./useAnimating";

/**
 * The network-coupling plate -- v2.
 *
 * Operates Theorem 10 + corollaries (apparatus s8). A networked
 * population of users with cross-user engagement coupling. The
 * stability/percolation condition rho(W) * rho(alpha) * integral_k < 1
 * separates bounded local cascades from supercritical platform-wide
 * cascades.
 *
 * Visualization: a small N-node graph laid out as a circle. Cascades
 * propagate from a seed node along edges; activated nodes render in
 * oxblood with intensity proportional to recent activation. Edge
 * connectivity rho(W) is set by a density slider.
 */

interface SimState {
  // activation[i] in [0, 1] — recent activation level for node i.
  activation: number[];
  t: number;
}

const NUM_NODES = 48;

function initialState(): SimState {
  return { activation: new Array(NUM_NODES).fill(0), t: 0 };
}

// Generate edges: each pair (i, j) has an edge with probability rho.
// Edges are symmetric. Returns a list of [i, j] pairs.
function generateEdges(rho: number, seed: number): [number, number][] {
  let state = seed;
  function rand() {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  }
  const edges: [number, number][] = [];
  for (let i = 0; i < NUM_NODES; i++) {
    for (let j = i + 1; j < NUM_NODES; j++) {
      if (rand() < rho) edges.push([i, j]);
    }
  }
  return edges;
}

// Step the simulation: each active node has a chance to trigger its
// neighbors (proportional to alpha); activations decay.
function step(
  state: SimState,
  edges: [number, number][],
  alpha: number,
  decay: number,
  rng: () => number,
): SimState {
  const activation = [...state.activation];
  // Build adjacency.
  const neighbors: number[][] = Array.from({ length: NUM_NODES }, () => []);
  for (const [i, j] of edges) {
    neighbors[i].push(j);
    neighbors[j].push(i);
  }
  // Propagate.
  const newActivation = new Array(NUM_NODES).fill(0);
  for (let i = 0; i < NUM_NODES; i++) {
    if (activation[i] > 0.01) {
      // Each neighbor has probability alpha of being activated.
      for (const n of neighbors[i]) {
        if (rng() < alpha * activation[i]) {
          newActivation[n] = Math.max(newActivation[n], 1.0);
        }
      }
    }
  }
  // Combine and decay.
  for (let i = 0; i < NUM_NODES; i++) {
    activation[i] = Math.max(activation[i] * decay, newActivation[i]);
  }
  return { activation, t: state.t + 1 };
}

export function NetworkCoupling() {
  const [rho, setRho] = useState(0.08); // connection density rho(W)
  const [alpha, setAlpha] = useState(0.3); // per-edge propagation probability
  const [decay, setDecay] = useState(0.85);
  const [edgeSeed, setEdgeSeed] = useState(123);
  const [state, setState] = useState<SimState>(() => initialState());
  const [running, setRunning] = useState(false);
  const animating = useAnimating(running);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const edges = useMemo(() => generateEdges(rho, edgeSeed), [rho, edgeSeed]);

  // Branching ratio. Approximate rho(W) by mean degree * connection density;
  // use edges.length / NUM_NODES as a proxy. The eigenvalue ~ mean degree.
  const meanDegree = (2 * edges.length) / NUM_NODES;
  const branchingRatio = meanDegree * alpha;
  const stable = branchingRatio < 1;

  // Node positions: circle layout.
  const cx = 220;
  const cy = 220;
  const radius = 170;
  const positions = Array.from({ length: NUM_NODES }, (_, i) => {
    const angle = (2 * Math.PI * i) / NUM_NODES;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  // Sim loop.
  useEffect(() => {
    if (!animating) return;
    let rngState = state.t + 1;
    function rng() {
      rngState = (rngState * 1664525 + 1013904223) % 4294967296;
      return rngState / 4294967296;
    }
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, edges, alpha, decay, rng));
    }, 120);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating, edges, alpha, decay]);

  function reset() {
    setRunning(false);
    setState(initialState());
  }

  // Seed: activate a single node (the first one).
  function seedCascade() {
    setState((s) => {
      const activation = [...s.activation];
      activation[0] = 1.0;
      return { ...s, activation };
    });
  }

  // Cascade size = sum of activations.
  const cascadeSize = state.activation.reduce((a, b) => a + b, 0);

  return (
    <div className="network-coupling-container">
      <style>{`
        .network-coupling-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
      `}</style>

      <svg
        viewBox="0 0 900 440"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Network coupling: engagement cascade across a 48-node graph"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Edges */}
        {edges.map(([i, j], idx) => (
          <line
            key={idx}
            x1={positions[i].x}
            y1={positions[i].y}
            x2={positions[j].x}
            y2={positions[j].y}
            stroke="var(--color-ink-70)"
            strokeWidth={0.5}
            opacity={0.5}
          />
        ))}
        {/* Nodes */}
        {positions.map((pos, i) => {
          const act = state.activation[i];
          return (
            <circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r={6}
              fill={act > 0.05 ? "var(--color-oxblood)" : "var(--color-ink-70)"}
              fillOpacity={act > 0.05 ? 0.3 + 0.7 * act : 0.4}
              stroke={i === 0 ? "var(--color-ink)" : "var(--color-paper)"}
              strokeWidth={i === 0 ? 2 : 1}
            />
          );
        })}

        {/* Right-side panel: branching ratio + threshold */}
        <g transform="translate(480 40)">
          <text x={0} y={0} className="axis-label">
            branching ratio rho(W) * alpha
          </text>
          <rect x={0} y={12} width={300} height={26} fill="none" stroke="var(--color-ink-70)" strokeWidth={1} />
          <rect
            x={0} y={12}
            width={Math.min(branchingRatio / 2, 1) * 300}
            height={26}
            fill={stable ? "var(--color-moss)" : "var(--color-oxblood)"}
            fillOpacity={0.6}
          />
          {/* Threshold marker at branching ratio = 1 */}
          <line x1={150} y1={6} x2={150} y2={44} stroke="var(--color-ink)" strokeWidth={1.5} strokeDasharray="2 3" />
          <text x={150} y={56} textAnchor="middle" className="axis-label">
            percolation threshold (= 1)
          </text>
          <text x={0} y={76} className="axis-label">
            {branchingRatio.toFixed(2)} -- {stable ? "subcritical (local cascades)" : "supercritical (platform-wide)"}
          </text>

          {/* Cascade size readout */}
          <text x={0} y={120} className="axis-label">
            cascade size
          </text>
          <text x={0} y={140} className="axis-label" fill="var(--color-ink)">
            {cascadeSize.toFixed(1)} / {NUM_NODES} nodes activated
          </text>

          {/* Mean degree */}
          <text x={0} y={170} className="axis-label">
            mean degree
          </text>
          <text x={0} y={190} className="axis-label" fill="var(--color-ink)">
            {meanDegree.toFixed(2)}
          </text>

          {/* Sim time */}
          <text x={0} y={220} className="axis-label">
            sim step
          </text>
          <text x={0} y={240} className="axis-label" fill="var(--color-ink)">
            {state.t}
          </text>

          {/* Description */}
          <text x={0} y={290} className="axis-label">
            seeded at node 0 (outlined in ink)
          </text>
          <text x={0} y={310} className="axis-label">
            oxblood = currently activated
          </text>
          <text x={0} y={330} className="axis-label">
            ink-70 = inactive
          </text>
        </g>
      </svg>

      {/* Controls */}
      <div className="mt-md flex flex-wrap gap-sm items-center">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          {running ? "[pause]" : "[play]"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          reset
        </button>
        <button
          type="button"
          onClick={seedCascade}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          seed cascade (node 0)
        </button>
        <button
          type="button"
          onClick={() => setEdgeSeed((s) => s + 1)}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          re-roll edges
        </button>
      </div>

      <div className="mt-md grid grid-cols-1 sm:grid-cols-3 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            rho (connection density){" "}
            <span className="ml-sm text-ink">{rho.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={0.01}
            max={0.3}
            step={0.005}
            value={rho}
            onChange={(e) => setRho(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            alpha (per-edge propagation){" "}
            <span className="ml-sm text-ink">{alpha.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.01}
            max={1}
            step={0.01}
            value={alpha}
            onChange={(e) => setAlpha(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            decay (per step){" "}
            <span className="ml-sm text-ink">{decay.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={0.99}
            step={0.01}
            value={decay}
            onChange={(e) => setDecay(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
