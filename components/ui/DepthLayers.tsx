"use client";

import { useState, type ReactNode } from "react";

/**
 * The three-layer pedagogical kit for apparatus objects on the v2
 * closed-loop site. Each object (lemma, theorem, definition, instrument,
 * etc.) renders three layers: caption (plain-language), middle (worked
 * example / intuitive description), formal (statement + proof verbatim).
 *
 * The layers are common in structure but variable in content by object
 * type. See autostimulus-planning/03_pedagogical_kit_spec.md for the
 * per-type guidance.
 *
 * Visual treatment per autostimulus-planning/06_design_system.md §5.
 *
 * Usage:
 *
 *   <DepthLayers>
 *     <Caption>Plain-language gloss...</Caption>
 *     <Middle>Worked example...</Middle>
 *     <Formal label="LEMMA 1 (FORECLOSURE)">
 *       Statement + proof
 *       <ProofEnd />
 *     </Formal>
 *   </DepthLayers>
 *
 * On plate pages, pass `collapsible` to Formal so the formal layer is
 * collapsed by default; the reader expands it explicitly.
 */
export function DepthLayers({ children }: { children: ReactNode }) {
  return <div className="depth-layers">{children}</div>;
}

/** Caption layer — plain-language, one or two sentences. */
export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="depth-caption text-md text-ink-90 leading-snug mt-0 mb-sm">
      {children}
    </p>
  );
}

/** Middle layer — worked example, intuitive description. */
export function Middle({ children }: { children: ReactNode }) {
  return <div className="depth-middle text-base text-ink-90">{children}</div>;
}

/**
 * Formal layer — the apparatus's own statement and proof. Visually
 * distinct via a slightly cooler background and a monospace small-caps
 * label at top in oxblood.
 *
 * When `collapsible` is true (used on plate pages), the layer is hidden
 * behind a "show ..." affordance the reader clicks to expand.
 */
export function Formal({
  children,
  label,
  collapsible = false,
  defaultExpanded = true,
}: {
  children: ReactNode;
  label: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (collapsible) {
    return (
      <div className="depth-formal-wrapper my-md">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="font-mono text-xs uppercase tracking-wider text-ink-90 hover:text-oxblood transition-colors py-xs"
        >
          {expanded ? "▾" : "▸"}{" "}
          {expanded ? `hide ${label.toLowerCase()}` : `show ${label.toLowerCase()}`}
        </button>
        {expanded && <FormalBody label={label}>{children}</FormalBody>}
      </div>
    );
  }

  return <FormalBody label={label}>{children}</FormalBody>;
}

function FormalBody({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="depth-formal bg-formal-bg border border-fog p-sm my-md text-base text-ink-90">
      <div className="font-mono text-xs uppercase tracking-wider text-oxblood mb-xs">
        {label}
      </div>
      {children}
    </div>
  );
}

/** End-of-proof marker (∎), right-aligned on its own line. */
export function ProofEnd() {
  return <p className="text-right mt-xs mb-0">∎</p>;
}

/**
 * Plain-language reading of the equation directly above it. Always
 * visible — lets a reader who can't parse the LaTeX (or who, on a narrow
 * screen, can't see a wide formula in full) still follow the argument.
 *
 * Sits between the symbol-level glosses (MathTip tooltips on individual
 * symbols) and the conceptual Middle layer: it narrates the specific
 * equation, in words, one step at a time.
 *
 * Usage (inside a Formal block, right after an <MBlock>):
 *   <MBlock>{String.raw`...`}</MBlock>
 *   <Reads>Any estimator's error is at least … — and foreclosure drives
 *   the denominator to zero.</Reads>
 */
export function Reads({ children }: { children: ReactNode }) {
  return (
    <p className="reads-line border-l-2 border-paper-85 pl-sm my-sm text-sm text-ink-70 leading-snug">
      <span className="font-mono text-xs uppercase tracking-wider text-ink-50 mr-xs">
        in words
      </span>
      {children}
    </p>
  );
}
