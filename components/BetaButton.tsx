"use client";
import { useState, type CSSProperties } from "react";

type Props = {
  label: string;
  variant?: "primary" | "ghost";
  full?: boolean;
  style?: CSSProperties;
};

/** Pre-launch purchase CTA: looks like a real button, does not navigate, and
    reveals the beta date on hover (desktop) or tap (touch). */
export default function BetaButton({ label, variant = "primary", full = false, style }: Props) {
  const [tip, setTip] = useState(false);
  return (
    <span
      className={`beta-wrap${full ? " beta-wrap--full" : ""}`}
      style={style}
      onMouseEnter={() => setTip(true)}
      onMouseLeave={() => setTip(false)}
    >
      <button
        type="button"
        className={`btn btn--${variant} beta-btn`}
        aria-disabled="true"
        onClick={() => setTip((v) => !v)}
      >
        {label}
      </button>
      <span className={`beta-tip${tip ? " show" : ""}`} role="status">
        Beta access opens 19 June
      </span>
    </span>
  );
}
