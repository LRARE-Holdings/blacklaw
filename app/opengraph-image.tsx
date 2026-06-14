import { ImageResponse } from "next/og";

export const alt = "Blacklaw — Walk in knowing.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "0 90px",
          background: "radial-gradient(120% 90% at 50% 0%, #1B1F26 0%, #0E1014 100%)",
          color: "#F4F5F7", fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 2, color: "#E8CC85" }}>BLACKLAW</div>
        <div style={{ display: "flex", marginTop: 8 }}>
          <div style={{ fontSize: 118, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>
            Walk in knowing.
          </div>
        </div>
        <div style={{ width: 90, height: 8, borderRadius: 4, background: "linear-gradient(90deg,#E8CC85,#BF9A45)", marginTop: 30 }} />
        <div style={{ fontSize: 34, color: "#A9B0BC", marginTop: 30 }}>
          Exam-grade preparation for the whole SQE — SQE1 and SQE2.
        </div>
      </div>
    ),
    { ...size }
  );
}
