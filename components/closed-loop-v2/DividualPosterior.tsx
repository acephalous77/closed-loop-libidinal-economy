"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The dividual-posterior plate -- v2.
 *
 * Operates Proposition 4': the platform's filtering posterior Pi_t
 * contracts on the true user state at the parametric rate
 *   epsilon_t ~ sqrt(d * log t / t).
 *
 * Two-panel visualization:
 *   Left: posterior variance Var(Pi_t) vs tick t, log-log scale.
 *         The curve fits the parametric rate (a line of slope -1 on
 *         log-log axes).
 *   Right: a 1-D posterior histogram with mean = true u_t* and
 *         variance = current Var(Pi_t). Width contracts as t grows.
 */

interface SimState {
  t: number;
  history: { t: number; variance: number }[];
}

const HISTORY_LENGTH = 400;

function initialState(): SimState {
  return { t: 1, history: [{ t: 1, variance: 1.0 }] };
}

// Compute posterior variance per Prop 4': Var ~ d * log(t) / (effective_sample * t).
function varianceAt(t: number, d: number, effectiveSampleMult: number): number {
  return (d * Math.log(t + 1)) / (effectiveSampleMult * t);
}

function step(state: SimState, d: number, effectiveSampleMult: number): SimState {
  const newT = state.t + 1;
  const variance = varianceAt(newT, d, effectiveSampleMult);
  const history = [
    ...state.history,
    { t: newT, variance },
  ].slice(-HISTORY_LENGTH);
  return { t: newT, history };
}

export function DividualPosterior() {
  const [d, setD] = useState(3); // dimension
  const [effSample, setEffSample] = useState(1.0); // effective-sample multiplier (related to U1 p_0)
  const [state, setState] = useState<SimState>(() => initialState());
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, d, effSample));
    }, 33);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, d, effSample]);

  function reset() {
    setRunning(false);
    setState(initialState());
  }

  // Plot dimensions.
  const width = 900;
  const height = 380;

  // Left panel — variance vs t (log-log).
  const leftX0 = 70;
  const leftY0 = 30;
  const leftW = 480;
  const leftH = 280;

  const tMin = 1;
  const tMax = Math.max(100, state.t);
  const logTMin = Math.log10(tMin);
  const logTMax = Math.log10(tMax);
  const varMin = 1e-4;
  const varMax = 2;
  const logVMin = Math.log10(varMin);
  const logVMax = Math.log10(varMax);

  const xOfT = (t: number) => leftX0 + ((Math.log10(Math.max(t, tMin)) - logTMin) / (logTMax - logTMin)) * leftW;
  const yOfV = (v: number) => {
    const logV = Math.log10(Math.max(v, varMin));
    const normalized = (logV - logVMin) / (logVMax - logVMin);
    return leftY0 + (1 - Math.max(0, Math.min(1, normalized))) * leftH;
  };
  const variancePath = state.history
    .map((h, i) => `${i === 0 ? "M" : "L"} ${xOfT(h.t).toFixed(2)} ${yOfV(h.variance).toFixed(2)}`)
    .join(" ");

  // Right panel — 1-D posterior histogram (Gaussian) around the true u_t*.
  const rightX0 = 600;
  const rightY0 = 30;
  const rightW = 280;
  const rightH = 280;
  const uMin = -3;
  const uMax = 3;
  const currentVariance = state.history[state.history.length - 1].variance;
  const sigma = Math.sqrt(Math.max(currentVariance, 1e-6));

  function gaussian(u: number, mean: number, sig: number): number {
    return Math.exp(-0.5 * Math.pow((u - mean) / sig, 2)) / (sig * Math.sqrt(2 * Math.PI));
  }

  const N = 100;
  const histPoints: { u: number; p: number }[] = [];
  for (let i = 0; i <= N; i++) {
    const u = uMin + (i / N) * (uMax - uMin);
    histPoints.push({ u, p: gaussian(u, 0, sigma) });
  }
  const maxP = Math.max(...histPoints.map((p) => p.p));
  const xOfU = (u: number) => rightX0 + ((u - uMin) / (uMax - uMin)) * rightW;
  const yOfP = (p: number) => rightY0 + (1 - p / maxP) * rightH;
  const histPath = histPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xOfU(p.u).toFixed(2)} ${yOfP(p.p).toFixed(2)}`)
    .join(" ");
  const histFillPath = `${histPath} L ${xOfU(uMax)} ${rightY0 + rightH} L ${xOfU(uMin)} ${rightY0 + rightH} Z`;

  return (
    <div className="dividual-posterior-container">
      <style>{`
        .dividual-posterior-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Dividual posterior: variance vs tick + contracting posterior histogram"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Left panel */}
        <g>
          <text x={leftX0 + leftW / 2} y={20} textAnchor="middle" className="axis-label">
            Var(Pi_t) vs tick t (log-log)
          </text>
          {/* Plot border */}
          <line x1={leftX0} y1={leftY0 + leftH} x2={leftX0 + leftW} y2={leftY0 + leftH} stroke="var(--color-ink)" strokeWidth={1} />
          <line x1={leftX0} y1={leftY0} x2={leftX0} y2={leftY0 + leftH} stroke="var(--color-ink)" strokeWidth={1} />
          {/* Y log gridlines */}
          {Array.from({ length: Math.ceil(logVMax - logVMin) + 1 }, (_, k) => {
            const log = Math.ceil(logVMin) + k;
            if (log > logVMax) return null;
            const y = yOfV(Math.pow(10, log));
            return (
              <g key={`y-${log}`}>
                <line x1={leftX0} y1={y} x2={leftX0 + leftW} y2={y} stroke="var(--color-paper-85)" strokeWidth={0.5} />
                <text x={leftX0 - 6} y={y + 4} textAnchor="end" className="axis-label">10^{log}</text>
              </g>
            );
          })}
          {/* X log ticks */}
          {Array.from({ length: Math.ceil(logTMax - logTMin) + 1 }, (_, k) => {
            const log = Math.ceil(logTMin) + k;
            if (log > logTMax) return null;
            const x = leftX0 + ((log - logTMin) / (logTMax - logTMin)) * leftW;
            return (
              <g key={`x-${log}`}>
                <line x1={x} y1={leftY0 + leftH} x2={x} y2={leftY0 + leftH + 4} stroke="var(--color-ink)" strokeWidth={1} />
                <text x={x} y={leftY0 + leftH + 16} textAnchor="middle" className="axis-label">10^{log}</text>
              </g>
            );
          })}
          {/* Reference slope -1 line (parametric rate) */}
          <line
            x1={xOfT(1)} y1={yOfV(1)}
            x2={xOfT(tMax)} y2={yOfV(1 / tMax)}
            stroke="var(--color-oxblood)" strokeWidth={1.2} strokeDasharray="3 4"
          />
          <text x={xOfT(tMax) - 6} y={yOfV(1 / tMax) - 8} textAnchor="end" className="axis-label" fill="var(--color-oxblood)">
            parametric rate ~ 1/t
          </text>
          {/* Variance curve */}
          <path d={variancePath} fill="none" stroke="var(--color-ink)" strokeWidth={2} />
        </g>

        {/* Right panel — posterior histogram */}
        <g>
          <text x={rightX0 + rightW / 2} y={20} textAnchor="middle" className="axis-label">
            Pi_t over u (contracting around true u_t*)
          </text>
          {/* Plot border */}
          <line x1={rightX0} y1={rightY0 + rightH} x2={rightX0 + rightW} y2={rightY0 + rightH} stroke="var(--color-ink)" strokeWidth={1} />
          <line x1={rightX0} y1={rightY0} x2={rightX0} y2={rightY0 + rightH} stroke="var(--color-ink)" strokeWidth={1} />
          {/* True u_t* vertical line */}
          <line
            x1={xOfU(0)} y1={rightY0} x2={xOfU(0)} y2={rightY0 + rightH}
            stroke="var(--color-oxblood)" strokeWidth={1.2} strokeDasharray="2 3"
          />
          <text x={xOfU(0) + 4} y={rightY0 + 12} className="axis-label" fill="var(--color-oxblood)">
            u_t*
          </text>
          {/* Posterior density */}
          <path d={histFillPath} fill="var(--color-ink)" fillOpacity={0.18} />
          <path d={histPath} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
          {/* X-axis */}
          <text x={rightX0 + rightW / 2} y={rightY0 + rightH + 16} textAnchor="middle" className="axis-label">
            u
          </text>
        </g>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">tick t</div>
          <div className="text-ink">{state.t}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">Var(Pi_t)</div>
          <div className="text-ink">{currentVariance.toExponential(2)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">posterior sigma</div>
          <div className="text-ink">{sigma.toFixed(3)}</div>
        </div>
      </div>

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
      </div>

      <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            d (state-space dimension){" "}
            <span className="ml-sm text-ink">{d}</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={d}
            onChange={(e) => setD(parseInt(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            effective sample mult (axiom U1 reachability){" "}
            <span className="ml-sm text-ink">{effSample.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={5}
            step={0.1}
            value={effSample}
            onChange={(e) => setEffSample(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
