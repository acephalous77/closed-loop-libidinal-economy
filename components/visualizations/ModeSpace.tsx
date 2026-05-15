"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
import { useState } from "react";

/**
 * Mode-Space — three orthogonal axes (R̂ · B · D_KL) with the three
 * intervention modes drawn as paths from the closed-loop operating
 * point. Mode A moves through the R̂-B plane (architectural). Mode B
 * moves up the D_KL axis (artisanal). Mode C bounds a region around
 * the operating point (disruption-as-form). The orthogonality is the
 * argument: the modes operate on non-substitutable structures.
 *
 * R3F (React Three Fiber) scene with OrbitControls for rotation,
 * zoom, and pan. Axis-endpoint labels rendered as HTML overlays via
 * drei's <Html>, so the labels stay readable as the user rotates.
 */

// Color palette from CSS custom properties — read directly so the scene
// inherits the design system tokens.
const COLORS = {
  ink: "#1a1612",
  ink90: "#2b2520",
  ink70: "#5a514a",
  ink50: "#8a7f74",
  paper95: "#ebe3d3",
  paper85: "#ddd2bd",
  oxblood: "#7a1f1f",
};

const AXIS_LENGTH = 1.2;
const OP_POINT: [number, number, number] = [1, 0, 0]; // high R̂, zero B, zero D_KL

interface Visible {
  A: boolean;
  B: boolean;
  C: boolean;
}

function Axes() {
  return (
    <>
      {/* R̂ axis (X) */}
      <Line
        points={[
          [0, 0, 0],
          [AXIS_LENGTH, 0, 0],
        ]}
        color={COLORS.ink70}
        lineWidth={1.5}
      />
      {/* B axis (Y) */}
      <Line
        points={[
          [0, 0, 0],
          [0, AXIS_LENGTH, 0],
        ]}
        color={COLORS.ink70}
        lineWidth={1.5}
      />
      {/* D_KL axis (Z) */}
      <Line
        points={[
          [0, 0, 0],
          [0, 0, AXIS_LENGTH],
        ]}
        color={COLORS.ink70}
        lineWidth={1.5}
      />

      {/* Axis labels as HTML at endpoints */}
      <Html position={[AXIS_LENGTH + 0.05, 0, 0]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: COLORS.ink90,
            whiteSpace: "nowrap",
          }}
        >
          R̂_max
        </span>
      </Html>
      <Html position={[0, AXIS_LENGTH + 0.05, 0]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: COLORS.ink90,
          }}
        >
          B_max
        </span>
      </Html>
      <Html position={[0, 0, AXIS_LENGTH + 0.05]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: COLORS.ink90,
            whiteSpace: "nowrap",
          }}
        >
          D_KL_max
        </span>
      </Html>
    </>
  );
}

function OperatingPoint() {
  return (
    <>
      <mesh position={OP_POINT}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color={COLORS.ink90} />
      </mesh>
      <Html position={[OP_POINT[0] + 0.05, OP_POINT[1] + 0.05, OP_POINT[2]]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: COLORS.ink70,
            whiteSpace: "nowrap",
          }}
        >
          θ* · closed-loop
        </span>
      </Html>
    </>
  );
}

function ModeAPath() {
  // Operating point (1,0,0) curving to (0.3, 0.8, 0) along the R̂-B plane.
  // Generate a smooth curve.
  const pts: [number, number, number][] = [];
  for (let s = 0; s <= 1; s += 0.05) {
    const r = 1 - s * 0.7; // R̂ falls from 1 to 0.3
    const b = s * 0.8; // B grows from 0 to 0.8
    pts.push([r, b, 0]);
  }
  return (
    <>
      <Line
        points={pts}
        color={COLORS.oxblood}
        lineWidth={2.5}
      />
      <Html position={[0.3, 0.85, 0]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: COLORS.oxblood,
            whiteSpace: "nowrap",
          }}
        >
          Mode A · β R̂'
        </span>
      </Html>
    </>
  );
}

function ModeBPath() {
  // Operating point (1,0,0) → (1, 0, 0.8) along D_KL axis. Dashed.
  return (
    <>
      <Line
        points={[
          [1, 0, 0],
          [1, 0, 0.8],
        ]}
        color={COLORS.ink90}
        lineWidth={2}
        dashed
        dashSize={0.04}
        gapSize={0.03}
      />
      <Html position={[1, 0, 0.85]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: COLORS.ink90,
            whiteSpace: "nowrap",
          }}
        >
          Mode B · L_m
        </span>
      </Html>
    </>
  );
}

function ModeCRegion() {
  // Wireframe box around operating point: from (0.7,0,0) to (1.0, 0.18, 0.18).
  const x0 = 0.7,
    x1 = 1.0;
  const y0 = 0,
    y1 = 0.18;
  const z0 = 0,
    z1 = 0.18;
  // 12 edges of a box
  const edges: [number, number, number][][] = [
    // bottom face
    [[x0, y0, z0], [x1, y0, z0]],
    [[x1, y0, z0], [x1, y0, z1]],
    [[x1, y0, z1], [x0, y0, z1]],
    [[x0, y0, z1], [x0, y0, z0]],
    // top face
    [[x0, y1, z0], [x1, y1, z0]],
    [[x1, y1, z0], [x1, y1, z1]],
    [[x1, y1, z1], [x0, y1, z1]],
    [[x0, y1, z1], [x0, y1, z0]],
    // verticals
    [[x0, y0, z0], [x0, y1, z0]],
    [[x1, y0, z0], [x1, y1, z0]],
    [[x1, y0, z1], [x1, y1, z1]],
    [[x0, y0, z1], [x0, y1, z1]],
  ];
  return (
    <>
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={edge}
          color={COLORS.ink50}
          lineWidth={1}
          transparent
          opacity={0.55}
        />
      ))}
      <Html position={[(x0 + x1) / 2, y1 + 0.08, (z0 + z1) / 2]} center>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: COLORS.ink70,
            whiteSpace: "nowrap",
          }}
        >
          Mode C · σ_η⁺
        </span>
      </Html>
    </>
  );
}

export function ModeSpace() {
  const [visible, setVisible] = useState<Visible>({ A: true, B: true, C: true });
  const [resetKey, setResetKey] = useState(0);

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Controls */}
        <div className="font-mono text-sm text-ink-90 mb-md flex flex-wrap items-baseline gap-x-md gap-y-sm">
          <label className="inline-flex items-center gap-x-xs cursor-pointer">
            <input
              type="checkbox"
              checked={visible.A}
              onChange={(e) => setVisible({ ...visible, A: e.target.checked })}
              className="accent-oxblood"
            />
            <span className="text-ink-70">Mode A</span>
          </label>
          <label className="inline-flex items-center gap-x-xs cursor-pointer">
            <input
              type="checkbox"
              checked={visible.B}
              onChange={(e) => setVisible({ ...visible, B: e.target.checked })}
              className="accent-oxblood"
            />
            <span className="text-ink-70">Mode B</span>
          </label>
          <label className="inline-flex items-center gap-x-xs cursor-pointer">
            <input
              type="checkbox"
              checked={visible.C}
              onChange={(e) => setVisible({ ...visible, C: e.target.checked })}
              className="accent-oxblood"
            />
            <span className="text-ink-70">Mode C</span>
          </label>
          <button
            onClick={() => setResetKey((k) => k + 1)}
            className="font-mono text-sm text-ink-70 hover:text-oxblood transition-colors duration-100"
          >
            reset view
          </button>
        </div>

        {/* 3D Canvas */}
        <div
          className="[&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!block"
          style={{ width: "100%", height: "420px", background: COLORS.paper95 }}
          role="img"
          aria-label="3D scene with R̂, B, and D_KL axes and the three intervention paths"
        >
          <Canvas
            key={resetKey}
            camera={{ position: [1.8, 1.5, 1.8], fov: 50 }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.8} />
            <Axes />
            <OperatingPoint />
            {visible.A && <ModeAPath />}
            {visible.B && <ModeBPath />}
            {visible.C && <ModeCRegion />}
            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              target={[0.5, 0.4, 0.4]}
            />
          </Canvas>
        </div>

        {/* Legend */}
        <div className="mt-md font-mono text-xs text-ink-70 space-y-xs">
          <p>
            <span className="text-ink-90">Mode A</span> · modifies R̂ to include
            B; moves the policy along the R̂-B plane.
          </p>
          <p>
            <span className="text-ink-90">Mode B</span> · preserves a gap in
            D_KL; does not modify the policy at all.
          </p>
          <p>
            <span className="text-ink-90">Mode C</span> · bounds the operating
            region; reduces the achievable R̂.
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        The three paths are orthogonal. Mode A and Mode B are not substitutable
        — there is no rate at which user labor produces architectural change.
        Mode C contains the apparatus but does not break it. Rotate the
        space (mouse-drag), zoom (scroll), and isolate each mode with the
        checkboxes to see the non-substitutability geometrically.
      </figcaption>
    </figure>
  );
}
