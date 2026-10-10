"use client";

import { useMemo, useState } from "react";
import { M } from "@/components/ui/Math";

/**
 * Somatic optimization — the body as the differential of the marked
 * point process N_t^i. Renders the raster of stimulus events (s_t) at
 * top and the per-register engagement events (dN^S, dN^C, dN^P, dN^K)
 * below across a 600-tick window. Under the closure, the raster
 * concentrates near the technical floor and clusters via Hawkes
 * cross-excitation.
 *
 * Standalone version: synthetic event generators per regime. The
 * conceptual point is the density and clustering pattern, not exact
 * reproduction of any specific sim trajectory.
 */

const REGISTERS = [
  { id: "S", label: "Subject" },
  { id: "C", label: "Citizen" },
  { id: "P", label: "Person" },
  { id: "K", label: "Consumer" },
] as const;

type RegisterId = (typeof REGISTERS)[number]["id"];

interface SimEvent {
  kind: "s" | "y";
  t: number;
  reg?: RegisterId;
}

interface Regime {
  key: string;
  label: string;
  // probability per tick of a stimulus firing
  stimRate: number;
  // mean Hawkes burst size (engagement events per stimulus)
  burstMean: number;
}

const REGIMES: Regime[] = [
  {
    key: "baseline",
    label: "baseline · pre-closure",
    stimRate: 0.015,
    burstMean: 0.3,
  },
  {
    key: "early",
    label: "early platform exposure",
    stimRate: 0.08,
    burstMean: 0.6,
  },
  {
    key: "converged",
    label: "converged · technical floor",
    stimRate: 0.42,
    burstMean: 1.2,
  },
  {
    key: "with-bonus",
    label: "with-bonus (Mode A, β = 10)",
    stimRate: 0.06,
    burstMean: 0.5,
  },
];

const WINDOW = 600;

/**
 * Deterministic PRNG (mulberry32). Math.random() during render sampled
 * differently on the server and the client, so the raster's HTML never
 * matched its hydration. A seeded generator renders the same sample in
 * both places; "regenerate sample" just advances the seed.
 */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function generateEvents(regime: Regime, seedTick: number): SimEvent[] {
  const rand = mulberry32(hashSeed(regime.key) + seedTick * 2654435761);
  const events: SimEvent[] = [];
  for (let t = 0; t < WINDOW; t++) {
    if (rand() < regime.stimRate) {
      events.push({ kind: "s", t });
      // Hawkes-style cross-excited burst.
      const burstSize = Math.max(0, Math.round(regime.burstMean + (rand() - 0.5)));
      for (let b = 0; b < burstSize; b++) {
        const reg = REGISTERS[Math.floor(rand() * 4)].id;
        events.push({ kind: "y", t: Math.min(WINDOW - 1, t + b), reg });
      }
    }
  }
  return events;
}

export function SomaticOptimization() {
  const [regimeKey, setRegimeKey] = useState<string>("converged");
  // Generate a key derived from regime + counter so user can press "regenerate"
  // to draw a new sample without changing regime.
  const [seedTick, setSeedTick] = useState<number>(0);
  const regime = REGIMES.find((r) => r.key === regimeKey) ?? REGIMES[0];

  const events = useMemo(
    () => generateEvents(regime, seedTick),
    // Regenerate when regime or seedTick changes (regime is a stable
    // object from the module-level REGIMES array).
    [regime, seedTick]
  );

  const stimEvents = events.filter((e) => e.kind === "s");
  const eventsByReg: Record<RegisterId, SimEvent[]> = {
    S: events.filter((e) => e.kind === "y" && e.reg === "S"),
    C: events.filter((e) => e.kind === "y" && e.reg === "C"),
    P: events.filter((e) => e.kind === "y" && e.reg === "P"),
    K: events.filter((e) => e.kind === "y" && e.reg === "K"),
  };
  const totalEvents = stimEvents.length;

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Picker */}
        <div className="font-mono text-sm text-ink-90 mb-md flex flex-wrap items-baseline gap-x-md gap-y-sm">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">regime =</span>
            <select
              value={regimeKey}
              onChange={(e) => {
                setRegimeKey(e.target.value);
                setSeedTick(0);
              }}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {REGIMES.map((r) => (
                <option key={r.key} value={r.key}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() => setSeedTick((s) => s + 1)}
            className="font-mono text-sm text-ink-70 hover:text-oxblood transition-colors duration-100 py-xs"
          >
            regenerate sample
          </button>
        </div>

        {/* Raster */}
        <div
          className="font-mono text-xs"
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: "8px",
            columnGap: "8px",
          }}
        >
          <Lane
            label={<span><M>{String.raw`s_t`}</M> stimuli</span>}
            events={stimEvents}
            cls="stim"
          />
          {REGISTERS.map((reg) => (
            <Lane
              key={reg.id}
              label={
                <span>
                  <M>{String.raw`dN^${reg.id.toLowerCase()}_t`}</M> · <b>{reg.label}</b>
                </span>
              }
              events={eventsByReg[reg.id]}
              cls={reg.id.toLowerCase()}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="font-mono text-sm text-ink-70 mt-md space-y-xs">
          <p>
            stimuli over {WINDOW}-tick window:{" "}
            <span className={totalEvents > 200 ? "text-oxblood" : "text-ink-90"}>
              {totalEvents}
            </span>
          </p>
          <p>
            inter-stimulus rate ≈{" "}
            <span className="text-ink-90">
              {((totalEvents / WINDOW) * 1000).toFixed(0)}
            </span>{" "}
            per 1000 ticks
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.5.</span> Stimulus
        events <M>{String.raw`s_t`}</M> at the top, per-register
        engagement events <M>{String.raw`dN^i_t`}</M>{" "}
        below. Each tick is a marked point process: the differential of the
        body — saccades, taps, scroll-events, gaze shifts — under Hawkes
        intensity <M>{String.raw`\lambda^i(t) = \lambda_0^i + \sum_j \alpha_{ij} \int \kappa(t-s)\, dN_s^j`}</M>.
        The optimization is over these somatic micro-events — the thumb's
        contacts with the screen. Its object is the body's differential, not
        deliberative choice. Under the converged policy the raster
        concentrates near the technical floor; under Mode A intervention it
        thins back out.
      </figcaption>
    </figure>
  );
}

function Lane({
  label,
  events,
  cls,
}: {
  label: React.ReactNode;
  events: SimEvent[];
  cls: string;
}) {
  // Choose color per lane class.
  const colorMap: Record<string, string> = {
    stim: "var(--color-ink)",
    s: "var(--color-oxblood)",
    c: "var(--color-ink-90)",
    p: "var(--color-ink-70)",
    k: "var(--color-ink-50)",
  };
  const color = colorMap[cls] ?? "var(--color-ink)";

  return (
    <>
      <div className="text-ink-70 self-center text-right pr-xs">{label}</div>
      <div
        className="relative bg-paper border-b border-paper-85"
        style={{ height: cls === "stim" ? "20px" : "16px" }}
        role="img"
        aria-label={`${cls} lane with ${events.length} events`}
      >
        {events.map((e, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: `${(e.t / WINDOW) * 100}%`,
              top: "10%",
              height: "80%",
              width: "1.5px",
              background: color,
            }}
          />
        ))}
      </div>
    </>
  );
}
