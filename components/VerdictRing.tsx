"use client";
import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = { value?: number; size?: number; onInk?: boolean };

/** The signature dial: a champagne-gold sweep that draws and counts up when
    it scrolls into view. */
export default function VerdictRing({ value = 72, size = 220, onInk = true }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [num, setNum] = useState(reduce ? value : 0);

  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const target = (value / 100) * c;

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setNum(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const track = onInk ? "rgba(255,255,255,0.12)" : "#E4E7EC";
  const numColor = onInk ? "#F4F5F7" : "#14171C";
  const labelColor = onInk ? "#A9B0BC" : "#6B7280";

  return (
    <div ref={ref} style={{ width: size, height: size, position: "relative", margin: "0 auto" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="vr-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8CC85" />
            <stop offset="100%" stopColor="#BF9A45" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke="url(#vr-gold)" strokeWidth={stroke} strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={c}
          initial={{ strokeDashoffset: reduce ? c - target : c }}
          animate={inView ? { strokeDashoffset: c - target } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "grid", placeItems: "center",
        flexDirection: "column",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: size * 0.32, fontWeight: 700, letterSpacing: "-0.03em", color: numColor, lineHeight: 1 }}>
            {num}
          </div>
          <div style={{ fontSize: 12, letterSpacing: "2.5px", color: labelColor, marginTop: 6, fontWeight: 600 }}>
            VERDICT
          </div>
        </div>
      </div>
    </div>
  );
}
