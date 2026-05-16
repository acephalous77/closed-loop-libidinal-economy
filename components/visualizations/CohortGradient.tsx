"use client";

import { useMemo, useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

/**
 * Cohort gradient — the framework's most direct empirical prediction.
 *
 * Conditional autocovariance I(τ) at τ=60s, normalized to a maximum of 1,
 * across cohort age-of-first-exposure bins (3, 5, 8, 12, 18, 25).
 *
 * The framework predicts a monotonically decreasing curve from old → young.
 * The visualization shows three alternative outcome scenarios (confirming,
 * null, disconfirming) against a falsification threshold. The prediction is
 * the most direct empirical commitment the framework makes; this plot
 * states what would count as data that disconfirms it.
 */

const AGES = [3, 5, 8, 12, 18, 25];

// Smooth sigmoid: 0.1 + 0.6 / (1 + e^(-(age-12)*0.3))
function predict(age: number): number {
  return 0.1 + 0.6 / (1 + Math.exp(-(age - 12) * 0.3));
}

// Confirming scenario: prediction with mild positive variance
function confirming(age: number): number {
  return Math.max(0, Math.min(1, predict(age) + 0.02 * Math.sin(age * 0.7)));
}

// Null scenario: flat at 0.4
function nullCase(_age: number): number {
  return 0.4;
}

// Disconfirming: inverted shape (higher for younger)
function disconfirming(age: number): number {
  return Math.max(0, Math.min(1, 0.8 - predict(age) * 0.7));
}

const FALSIFICATION_THRESHOLD = 0.5;

interface Hover {
  age: number;
  predicted: number;
}

export function CohortGradient() {
  const [hover, setHover] = useState<Hover | null>(null);

  const w = 620;
  const h = 360;
  const pad = { l: 60, r: 110, t: 30, b: 56 };

  const xScale = (age: number) =>
    pad.l + ((age - AGES[0]) / (AGES[AGES.length - 1] - AGES[0])) * (w - pad.l - pad.r);
  const yScale = (v: number) => pad.t + (1 - v) * (h - pad.t - pad.b);

  // Fine-grained age points for smooth curve
  const finePoints = useMemo(() => {
    const out: number[] = [];
    for (let a = AGES[0]; a <= AGES[AGES.length - 1]; a += 0.5) out.push(a);
    return out;
  }, []);

  const predictionLine = finePoints
    .map((a) => `${xScale(a)},${yScale(predict(a))}`)
    .join(" ");

  // Confidence band: ±0.08 around prediction
  const upperBand = finePoints
    .map((a) => `${xScale(a)},${yScale(Math.min(1, predict(a) + 0.08))}`)
    .join(" ");
  const lowerBand = finePoints
    .slice()
    .reverse()
    .map((a) => `${xScale(a)},${yScale(Math.max(0, predict(a) - 0.08))}`)
    .join(" ");
  const band = upperBand + " " + lowerBand;

  const confirmingLine = finePoints
    .map((a) => `${xScale(a)},${yScale(confirming(a))}`)
    .join(" ");
  const nullLine = finePoints
    .map((a) => `${xScale(a)},${yScale(nullCase(a))}`)
    .join(" ");
  const disconfirmingLine = finePoints
    .map((a) => `${xScale(a)},${yScale(disconfirming(a))}`)
    .join(" ");

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Cohort gradient plot: prediction curve, confidence band, three alternative scenarios, falsification threshold."
          onMouseLeave={() => setHover(null)}
        >
          {/* Y gridlines */}
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <g key={v}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={yScale(v)}
                y2={yScale(v)}
                style={{ stroke: "var(--color-paper-85)" }}
                strokeWidth="0.5"
              />
              <text
                x={pad.l - 8}
                y={yScale(v) + 3}
                fontFamily="var(--font-mono)"
                fontSize="9"
                textAnchor="end"
                style={{ fill: "var(--color-ink-50)" }}
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {/* Confidence band */}
          <polygon
            points={band}
            style={{ fill: "var(--color-paper-85)", opacity: 0.7 }}
          />

          {/* Disconfirming scenario */}
          <polyline
            points={disconfirmingLine}
            fill="none"
            style={{ stroke: "var(--color-ink-50)" }}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x={w - pad.r + 6}
            y={yScale(disconfirming(AGES[AGES.length - 1])) + 3}
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-ink-50)" }}
          >
            disconfirming
          </text>

          {/* Null scenario */}
          <polyline
            points={nullLine}
            fill="none"
            style={{ stroke: "var(--color-ink-50)" }}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x={w - pad.r + 6}
            y={yScale(0.4) + 3}
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-ink-50)" }}
          >
            null
          </text>

          {/* Confirming scenario */}
          <polyline
            points={confirmingLine}
            fill="none"
            style={{ stroke: "var(--color-ink-50)" }}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x={w - pad.r + 6}
            y={yScale(confirming(AGES[AGES.length - 1])) + 3}
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-ink-50)" }}
          >
            confirming
          </text>

          {/* Prediction (solid black) */}
          <polyline
            points={predictionLine}
            fill="none"
            style={{ stroke: "var(--color-ink)" }}
            strokeWidth="2"
          />

          {/* Falsification threshold */}
          <line
            x1={pad.l}
            x2={w - pad.r}
            y1={yScale(FALSIFICATION_THRESHOLD)}
            y2={yScale(FALSIFICATION_THRESHOLD)}
            style={{ stroke: "var(--color-oxblood)" }}
            strokeDasharray="6 4"
            strokeWidth="1.2"
          />
          <text
            x={w - pad.r + 6}
            y={yScale(FALSIFICATION_THRESHOLD) + 3}
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-oxblood)" }}
          >
            falsification
          </text>

          {/* Cohort point markers + hover hit areas */}
          {AGES.map((age) => {
            const x = xScale(age);
            const y = yScale(predict(age));
            return (
              <g key={age}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  style={{ fill: "var(--color-oxblood)" }}
                />
                {/* Tall transparent hit area for hover */}
                <rect
                  x={x - 20}
                  y={pad.t}
                  width="40"
                  height={h - pad.t - pad.b}
                  fill="transparent"
                  onMouseEnter={() => setHover({ age, predicted: predict(age) })}
                  style={{ cursor: "crosshair" }}
                />
              </g>
            );
          })}

          {/* Hover crosshair + tooltip */}
          {hover && (
            <g>
              <line
                x1={xScale(hover.age)}
                x2={xScale(hover.age)}
                y1={pad.t}
                y2={h - pad.b}
                style={{ stroke: "var(--color-oxblood)" }}
                strokeWidth="0.8"
                strokeDasharray="2 3"
              />
              <rect
                x={xScale(hover.age) + 8}
                y={yScale(hover.predicted) - 32}
                width="118"
                height="42"
                style={{ fill: "var(--color-paper)", stroke: "var(--color-ink-50)" }}
                strokeWidth="0.5"
              />
              <text
                x={xScale(hover.age) + 14}
                y={yScale(hover.predicted) - 18}
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                style={{ fill: "var(--color-ink-90)" }}
              >
                age = {hover.age}
              </text>
              <SvgM
                x={xScale(hover.age) + 14}
                y={yScale(hover.predicted) - 14}
                w={104}
                h={14}
                align="left"
                color="var(--color-oxblood)"
                size="10px"
              >
                <span style={{ display: "inline-flex", alignItems: "baseline", gap: "3px" }}>
                  <M>{String.raw`I(60\text{s})`}</M>
                  <span style={{ fontFamily: "var(--font-mono)" }}>{`≈ ${hover.predicted.toFixed(3)}`}</span>
                </span>
              </SvgM>
            </g>
          )}

          {/* Axes */}
          <line
            x1={pad.l}
            y1={h - pad.b}
            x2={w - pad.r}
            y2={h - pad.b}
            style={{ stroke: "var(--color-ink)" }}
          />
          <line
            x1={pad.l}
            y1={pad.t}
            x2={pad.l}
            y2={h - pad.b}
            style={{ stroke: "var(--color-ink)" }}
          />

          {/* X tick labels */}
          {AGES.map((age) => (
            <text
              key={age}
              x={xScale(age)}
              y={h - pad.b + 16}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              style={{ fill: "var(--color-ink-70)" }}
            >
              {age}
            </text>
          ))}

          {/* Axis labels */}
          <text
            x={(w + pad.l - pad.r) / 2}
            y={h - 10}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            style={{ fill: "var(--color-ink-70)", letterSpacing: "1px" }}
          >
            age of first exposure (years)
          </text>
          <SvgM
            x={8}
            y={pad.t + 2}
            w={180}
            h={16}
            align="left"
            color="var(--color-ink-70)"
            size="10px"
          >
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
              <M>{String.raw`I(\tau = 60\text{s})`}</M>
              <span style={{ fontFamily: "var(--font-mono)" }}>· normalized</span>
            </span>
          </SvgM>
        </svg>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">Prediction.</span>{" "}
        The framework predicts conditional autocovariance at reflective lags
        is moderated by developmental cohort: earlier age-of-first-exposure
        produces lower <M>{String.raw`I(\tau)`}</M> even after
        controlling for total exposure. The solid black curve is the
        prediction; the shaded band is the framework's hedge on magnitude;
        the oxblood dashed line is the falsification threshold. The three
        dotted curves show what confirming, null, and disconfirming data
        would look like. Hover a cohort age to see the exact predicted{" "}
        <M>{String.raw`I(60\text{s})`}</M> value.
      </figcaption>
    </figure>
  );
}
