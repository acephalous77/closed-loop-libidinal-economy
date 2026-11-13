"use client";

import { useEffect, useRef, useState } from "react";
import {
  makeInitialState,
  step,
  projectU,
  type SimState,
} from "@/lib/simulation/closed-loop";
import { M } from "@/components/ui/Math";

interface OptionT<T> {
  value: T;
  label: string;
}

const THETA_REF_OPTIONS: OptionT<number>[] = [
  { value: 50, label: "1s" }, // 50 ticks × 20ms = 1s
  { value: 250, label: "5s" },
  { value: 1500, label: "30s" },
  { value: 6000, label: "120s" },
  { value: 15000, label: "5 min" },
];

const N_USERS_OPTIONS: OptionT<number>[] = [
  { value: 50, label: "50" },
  { value: 200, label: "200" },
  { value: 500, label: "500" },
];

const POLICY_OPTIONS: OptionT<"closed-loop" | "with-bonus">[] = [
  { value: "closed-loop", label: "closed-loop (β = 0)" },
  { value: "with-bonus", label: "with-bonus (β = 10)" },
];

const HORIZON_TICKS = 15000; // 300s at 20ms per tick

interface UserSim {
  state: SimState;
  trail: number[]; // projected u over time
  maxIsi: number;
  stimTimes: number[]; // tick indices of fired stimuli (for raster)
}

function makeUser(): UserSim {
  return {
    state: makeInitialState(),
    trail: [],
    maxIsi: 0,
    stimTimes: [],
  };
}

export function ReclamationTrajectories() {
  const [thetaRef, setThetaRef] = useState<number>(1500); // 30s
  const [nUsers, setNUsers] = useState<number>(50);
  const [policy, setPolicy] = useState<"closed-loop" | "with-bonus">(
    "closed-loop"
  );
  const [running, setRunning] = useState<boolean>(false);
  const [tick, setTick] = useState<number>(0);
  const [windowedCount, setWindowedCount] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const usersRef = useRef<UserSim[]>([]);
  const thetaRefRef = useRef(thetaRef);
  const policyRef = useRef(policy);
  const runningRef = useRef(running);

  // Keep the loop's refs in step with state — written in an effect,
  // never during render.
  useEffect(() => {
    thetaRefRef.current = thetaRef;
    policyRef.current = policy;
    runningRef.current = running;
  }, [thetaRef, policy, running]);

  // Reclassify and repaint when the threshold or policy changes even while
  // paused; the interval is not running to do it.
  useEffect(() => {
    const users = usersRef.current;
    setWindowedCount(users.reduce((n, u) => n + (u.maxIsi >= thetaRef ? 1 : 0), 0));
    drawFrame();
  }, [thetaRef, policy]);

  // Reset users and counters — called from event handlers (the picker,
  // the reset button); the mount effect below seeds the initial set.
  function reset(n: number = nUsers) {
    usersRef.current = Array.from({ length: n }, () => makeUser());
    setTick(0);
    setWindowedCount(0);
    drawFrame();
  }

  // Initial user set + first draw. Count changes go through the picker.
  useEffect(() => {
    usersRef.current = Array.from({ length: nUsers }, () => makeUser());
    drawFrame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animation loop — interval-driven (more reliable than rAF in dev).
  useEffect(() => {
    const FRAME_MS = 16;

    const interval = setInterval(() => {
      if (!runningRef.current) return;
      const users = usersRef.current;
      const knobs = {
        beta: policyRef.current === "with-bonus" ? 10 : 0,
        Lm: 0,
        sigmaC: 0,
      };
      const tref = thetaRefRef.current;

      // The 500-user case cannot advance 30 ticks per user per frame on a
      // laptop; scale the batch so the canvas stays interactive.
      const ticksPerFrame = users.length >= 500 ? 8 : users.length >= 200 ? 16 : 30;
      let stillRunning = false;

      for (const user of users) {
        if (user.state.t >= HORIZON_TICKS) continue;
        stillRunning = true;
        for (let i = 0; i < ticksPerFrame; i++) {
          if (user.state.t >= HORIZON_TICKS) break;
          const before = user.state.lastStim;
          user.state = step(user.state, knobs, { light: true });
          if (user.state.t % 5 === 0) user.trail.push(projectU(user.state));
          if (user.state.lastStim !== before) user.stimTimes.push(user.state.t);
          if (user.state.isi > user.maxIsi) user.maxIsi = user.state.isi;
        }
      }

      // The window classification is derived from maxIsi, not latched:
      // changing θ_ref must reclassify users immediately (both ways).
      setWindowedCount(users.reduce((n, u) => n + (u.maxIsi >= tref ? 1 : 0), 0));

      const repTick = users.length > 0 ? users[0].state.t : 0;
      setTick(repTick);

      drawFrame();

      if (!stillRunning) {
        setRunning(false);
      }
    }, FRAME_MS);

    return () => clearInterval(interval);
  }, []);

  function drawFrame() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resolve device pixels. Round the backing store: fractional CSS sizes
    // at fractional DPR otherwise reallocate the canvas every frame.
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (!cssW || !cssH) return;
    const pixelW = Math.round(cssW * dpr);
    const pixelH = Math.round(cssH * dpr);
    if (canvas.width !== pixelW || canvas.height !== pixelH) {
      canvas.width = pixelW;
      canvas.height = pixelH;
    }
    ctx.setTransform(pixelW / cssW, 0, 0, pixelH / cssH, 0, 0);

    const W = cssW;
    const H = cssH;
    const TRAIL_BAND_H = H * 0.85;
    const RASTER_BAND_TOP = TRAIL_BAND_H + 4;
    const RASTER_BAND_H = H - RASTER_BAND_TOP - 2;

    // Theme tokens come from the live CSS variables so the canvas follows
    // the dark-mode palette instead of freezing the light-mode colours.
    const theme = getComputedStyle(canvas);
    const PAPER_95 = theme.getPropertyValue("--color-paper-95").trim() || "#e8eae4";
    const INK = theme.getPropertyValue("--color-ink").trim() || "#5a514a";
    const OXBLOOD = theme.getPropertyValue("--color-oxblood").trim() || "#7a1f1f";

    ctx.globalAlpha = 1;
    ctx.fillStyle = PAPER_95;
    ctx.fillRect(0, 0, W, H);

    const users = usersRef.current;
    if (users.length === 0) return;

    // Draw trajectory lines: ink-50 for unwindowed, oxblood for windowed.
    // Derived from maxIsi so a θ_ref change repaints the whole set.
    const tref = thetaRefRef.current;
    for (const user of users) {
      const trail = user.trail;
      if (trail.length < 2) continue;
      const inWindow = user.maxIsi >= tref;
      ctx.beginPath();
      ctx.strokeStyle = inWindow ? OXBLOOD : INK;
      ctx.globalAlpha = inWindow ? 0.85 : 0.55;
      ctx.lineWidth = inWindow ? 1.2 : 0.6;
      for (let i = 0; i < trail.length; i++) {
        // Trail index corresponds to tick = i * 5; x = tick / HORIZON_TICKS * W
        const x = ((i * 5) / HORIZON_TICKS) * W;
        const y = TRAIL_BAND_H * (1 - trail[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Stim raster — for the FIRST user only (representative).
    const rep = users[0];
    if (rep) {
      ctx.fillStyle = INK;
      ctx.globalAlpha = 0.7;
      for (const t of rep.stimTimes) {
        const x = (t / HORIZON_TICKS) * W;
        ctx.fillRect(x, RASTER_BAND_TOP, 0.7, RASTER_BAND_H);
      }
    }
    ctx.globalAlpha = 1;
  };

  // Initial draw on mount.
  useEffect(() => {
    drawFrame();
  }, []);

  const handleRunPause = () => {
    // If we're already at the horizon, reset then start.
    if (
      usersRef.current.length > 0 &&
      usersRef.current.every((u) => u.state.t >= HORIZON_TICKS)
    ) {
      reset();
      setTimeout(() => setRunning(true), 0);
    } else {
      setRunning((r) => !r);
    }
  };

  // The interval mirrors the representative user's tick into state, so the
  // readout derives from `tick` rather than reading the ref during render.
  const simSeconds = (tick * 0.02).toFixed(1);
  const horizonSeconds = (HORIZON_TICKS * 0.02).toFixed(0);

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Controls */}
        <div className="flex flex-wrap items-baseline gap-x-md gap-y-sm font-mono text-sm">
          <Picker
            label={<M>{String.raw`\theta_{\mathrm{ref}}`}</M>}
            options={THETA_REF_OPTIONS}
            value={thetaRef}
            onChange={setThetaRef}
          />
          <Picker
            label="users"
            options={N_USERS_OPTIONS}
            value={nUsers}
            onChange={(n) => {
              setNUsers(n);
              reset(n);
            }}
          />
          <Picker
            label="policy"
            options={POLICY_OPTIONS}
            value={policy}
            onChange={(v) => {
              setPolicy(v);
              reset();
            }}
          />
          <button
            onClick={handleRunPause}
            className="font-mono text-sm bg-ink text-paper px-sm py-xs hover:bg-oxblood transition-colors duration-100"
          >
            {running ? "pause" : "run"}
          </button>
          <button
            onClick={() => reset()}
            className="font-mono text-sm text-ink-70 hover:text-oxblood transition-colors duration-100 py-xs"
          >
            reset
          </button>
        </div>

        {/* Canvas */}
        <div className="mt-md">
          <canvas
            ref={canvasRef}
            className="w-full"
            style={{ height: "300px", display: "block" }}
            role="img"
            aria-label={`reclamation trajectories: ${nUsers} simulated users, ${windowedCount} experienced a no-input window of ≥ θ_ref`}
          />
        </div>

        {/* Counter */}
        <div className="font-mono text-sm text-ink-70 mt-md space-y-xs">
          <p>
            users simulated:{" "}
            <span className="text-ink-90">{nUsers}</span>
          </p>
          <p>
            simulated time:{" "}
            <span className="text-ink-90">{simSeconds}s</span>{" "}
            / {horizonSeconds}s
          </p>
          <p>
            window threshold <M>{String.raw`\theta_{\mathrm{ref}}`}</M>:{" "}
            <span className="text-ink-90">
              {THETA_REF_OPTIONS.find((o) => o.value === thetaRef)?.label}
            </span>
          </p>
          <p>
            trajectories with a no-input window ≥ <M>{String.raw`\theta_{\mathrm{ref}}`}</M>:{" "}
            <span className={windowedCount > 0 ? "text-oxblood" : "text-ink-90"}>
              {windowedCount} / {nUsers}
            </span>{" "}
            <span className="text-ink-50">
              ({nUsers > 0 ? ((100 * windowedCount) / nUsers).toFixed(1) : "0.0"}%)
            </span>
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        Each ink-50 line is a single user under the closed loop. Trajectories that
        experience a no-input window of duration ≥ <M>{String.raw`\theta_{\mathrm{ref}}`}</M> are rendered in oxblood. Under
        the converged closed-loop policy (β = 0), the oxblood set does not grow — the
        reclamation theorem rendered as a set that fails to appear. Switch the policy to{" "}
        <M>{String.raw`\text{with-bonus } (\beta = 10)`}</M> — Mode A — and oxblood
        trajectories emerge: the architectural intervention is the only one that produces
        them.
      </figcaption>
    </figure>
  );
}

function Picker<T>({
  label,
  options,
  value,
  onChange,
}: {
  label: React.ReactNode;
  options: OptionT<T>[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <label className="inline-flex items-center gap-x-xs text-ink-90">
      <span className="text-ink-70">{label} =</span>
      <select
        value={String(value)}
        onChange={(e) => {
          const next = options.find((o) => String(o.value) === e.target.value);
          if (next) onChange(next.value);
        }}
        className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em] py-[0.45rem]"
      >
        {options.map((o) => (
          <option key={String(o.value)} value={String(o.value)}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
