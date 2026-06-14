"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/sqe2", label: "SQE2" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const DARK_HERO = new Set(["/", "/sqe2"]);

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [betaTip, setBetaTip] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text only when sitting transparent over a dark hero (not scrolled).
  const onDark = DARK_HERO.has(pathname) && !scrolled && !open;

  return (
    <header className={`hdr${scrolled || open ? " scrolled" : ""}${onDark ? " on-dark" : ""}`}>
      <div className="container hdr-inner">
        <a href="/" className="hdr-brand" aria-label="Blacklaw home">Blacklaw</a>
        <nav className={`hdr-nav${open ? " open" : ""}`} aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <span
            className="hdr-cta-wrap"
            onMouseEnter={() => setBetaTip(true)}
            onMouseLeave={() => setBetaTip(false)}
          >
            <button
              type="button"
              className="hdr-cta hdr-cta--soon"
              aria-disabled="true"
              onClick={() => setBetaTip((v) => !v)}
            >
              Get Blacklaw
            </button>
            <span className={`hdr-cta-tip${betaTip ? " show" : ""}`} role="status">
              Beta access opens 19 June
            </span>
          </span>
        </nav>
        <button
          className="hdr-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
