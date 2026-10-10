"use client";

import { useState, type CSSProperties } from "react";

/**
 * The brochure's CTAs are fiction; clicking files nothing. This
 * authors the failure in-register (critique P3, ruled 2026-10-10):
 * the stamp appears under the button instead of a dead control.
 */
export function FailureButton({
  label,
  buttonStyle,
  stampStyle,
  fullWidth = false,
}: {
  label: string;
  buttonStyle: CSSProperties;
  stampStyle: CSSProperties;
  fullWidth?: boolean;
}) {
  const [notFiled, setNotFiled] = useState(false);
  return (
    <span
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        width: fullWidth ? "100%" : undefined,
      }}
    >
      <button style={buttonStyle} onClick={() => setNotFiled(true)}>
        {label}
      </button>
      {notFiled && (
        <span role="status" style={stampStyle}>
          Request not filed — pilot cohort closed
        </span>
      )}
    </span>
  );
}
