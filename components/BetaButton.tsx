import { type CSSProperties } from "react";
import { BETA_URL } from "../lib/links";

type Props = {
  label: string;
  variant?: "primary" | "ghost";
  full?: boolean;
  style?: CSSProperties;
};

/** Purchase CTA — links to the public TestFlight beta. */
export default function BetaButton({ label, variant = "primary", full = false, style }: Props) {
  return (
    <a
      href={BETA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--${variant}${full ? " btn--full" : ""}`}
      style={style}
    >
      {label}
    </a>
  );
}
