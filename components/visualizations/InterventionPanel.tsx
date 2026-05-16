"use client";

import { useState } from "react";

/**
 * The three modes of intervention — Mode A (architectural),
 * Mode B (artisanal), Mode C (disruption-as-form) — side by side
 * with the framework's structural claim about each: which one breaks
 * Lemma 1, which one preserves a parallel structure, which one bounds
 * the surplus without breaking the chain.
 *
 * Adapted from the InterventionPanel in panels.jsx.
 */

const BETA_THRESHOLD = 0.05;
const LM_STAR = 0.8;
const SIGMA_C_THRESHOLD = 0.1;

export function InterventionPanel() {
  const [beta, setBeta] = useState<number>(0);
  const [Lm, setLm] = useState<number>(0);
  const [sigmaC, setSigmaC] = useState<number>(0);

  const modeAActive = beta > BETA_THRESHOLD;
  const modeBPreservesGap = Lm >= LM_STAR;
  const modeCActive = sigmaC > SIGMA_C_THRESHOLD;

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          {/* Mode A — Architectural */}
          <ModeCard
            badge="A"
            title="Architectural"
            status={modeAActive ? "breaks Lemma 1" : "Lemma 1 holds"}
            statusActive={modeAActive}
            description={
              <>
                Augment <span className="font-mono">R̂</span> with a bonus on
                long ISIs: <span className="font-mono">R̂' = R̂ + β · Σ_k b(τ^(k))</span>.
                The only mode that breaks the foreclosure. Operates on{" "}
                <span className="font-mono">T_mix(π')</span>.
              </>
            }
            knobLabel={<><span className="font-mono">β</span> <span className="text-ink-50">regularization</span></>}
            knobValue={beta}
            knobMin={0}
            knobMax={1.2}
            knobStep={0.01}
            onKnobChange={setBeta}
            footer={
              <>
                <span className="text-ink-50">Prop. 1:</span> P(β) continuous,
                P(0) ≈ 0, sup P(β) &gt; 0 ⇒ IVT recovers any ε ∈ (0, ε_max).
              </>
            }
          />

          {/* Mode B — Artisanal */}
          <ModeCard
            badge="B"
            title="Artisanal"
            status={
              modeBPreservesGap
                ? "Mode B holds D_KL > 0"
                : Lm > 0
                  ? "L_m < L_m* — gap collapses"
                  : "Lemma 1 unchanged"
            }
            statusActive={modeBPreservesGap}
            description={
              <>
                Maintenance labor <span className="font-mono">L_m</span> against
                the platform's pull. Preserves a positive{" "}
                <span className="font-mono">D_KL(ν_u ‖ π_R̂)</span> iff{" "}
                <span className="font-mono">L_m ≥ L_m*</span>. Does not modify
                the policy.
              </>
            }
            knobLabel={<><span className="font-mono">L_m</span> <span className="text-ink-50">labor</span></>}
            knobValue={Lm}
            knobMin={0}
            knobMax={2.0}
            knobStep={0.05}
            onKnobChange={setLm}
            footer={
              <>
                <span className="text-ink-50">Prop. 2:</span> dD_KL/dt = −h_0(β_u)
                + r(L_m). L_m* = r⁻¹(h_0) ≈ {LM_STAR.toFixed(2)}.
              </>
            }
          />

          {/* Mode C — Disruption-as-form */}
          <ModeCard
            badge="C"
            title="Disruption-as-form"
            status={
              modeCActive
                ? "bounds Σ(T) strictly below sup"
                : "Lemma 1 unchanged"
            }
            statusActive={modeCActive}
            description={
              <>
                Inflate <span className="font-mono">Var(η_t)</span> by refusing
                legibility. By Blackwell sufficiency,{" "}
                <span className="font-mono">sup_π E[R̂]</span> falls;{" "}
                <span className="font-mono">H_res &gt; 0</span> is held.
              </>
            }
            knobLabel={<><span className="font-mono">σ_η^+</span> <span className="text-ink-50">added noise</span></>}
            knobValue={sigmaC}
            knobMin={0}
            knobMax={0.6}
            knobStep={0.01}
            onKnobChange={setSigmaC}
            footer={
              <>
                <span className="text-ink-50">Prop. 3:</span> garbled channel ⇒
                strictly less optimal reward; per-register kernels can't be
                optimized as tightly.
              </>
            }
          />
        </div>

        {/* Summary status */}
        <div className="mt-md pt-sm border-t border-paper-85 font-mono text-sm text-ink-70">
          <p>
            Lemma 1 status:{" "}
            <span className={modeAActive ? "text-oxblood" : "text-ink-90"}>
              {modeAActive ? "BROKEN by Mode A" : "intact"}
            </span>
          </p>
          <p className="mt-xs text-ink-50 italic font-serif">
            Mode B preserves a parallel structure (D_KL), Mode C bounds the
            extracted surplus — neither breaks Lemma 1. Only Mode A reaches
            the foreclosure node of the proof chain.
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§5.</span> Three modes
        of intervention, side by side. Sweep each knob and watch the status
        line at the top of its card change. Only Mode A — the architectural
        intervention — can flip Lemma 1's status. Modes B and C produce real,
        structurally distinct effects on parallel objects, but they do not
        modify the proof chain. The non-substitutability is the framework's
        central political claim.
      </figcaption>
    </figure>
  );
}

function ModeCard({
  badge,
  title,
  status,
  statusActive,
  description,
  knobLabel,
  knobValue,
  knobMin,
  knobMax,
  knobStep,
  onKnobChange,
  footer,
}: {
  badge: string;
  title: string;
  status: string;
  statusActive: boolean;
  description: React.ReactNode;
  knobLabel: React.ReactNode;
  knobValue: number;
  knobMin: number;
  knobMax: number;
  knobStep: number;
  onKnobChange: (v: number) => void;
  footer: React.ReactNode;
}) {
  return (
    <div className="bg-paper p-sm border border-paper-85">
      <div className="flex items-baseline gap-x-xs mb-xs">
        <span
          className="font-mono font-medium text-sm px-xs"
          style={{
            background: "var(--color-ink)",
            color: "var(--color-paper)",
          }}
          aria-label={`Mode ${badge}`}
        >
          {badge}
        </span>
        <span className="font-mono text-md text-ink-90 ml-xs">{title}</span>
      </div>
      <div className="font-mono text-xs mb-sm">
        <span
          className={
            statusActive ? "text-oxblood" : "text-ink-50"
          }
        >
          {statusActive ? "● " : "○ "}
          {status}
        </span>
      </div>
      <p className="font-serif text-sm text-ink-90 leading-snug mb-sm">
        {description}
      </p>
      <div className="font-mono text-xs text-ink-70 mb-xs">{knobLabel}</div>
      <div className="flex items-center gap-x-sm">
        <input
          type="range"
          min={knobMin}
          max={knobMax}
          step={knobStep}
          value={knobValue}
          onChange={(e) => onKnobChange(Number(e.target.value))}
          className="flex-1 accent-oxblood cursor-pointer"
        />
        <span className="font-mono text-xs text-ink-90 w-[3rem] text-right">
          {knobValue.toFixed(2)}
        </span>
      </div>
      <p className="font-serif text-xs italic text-ink-70 mt-sm">{footer}</p>
    </div>
  );
}
