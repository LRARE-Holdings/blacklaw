"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BETA_URL } from "../lib/links";

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
          <a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-cta"
            onClick={() => setOpen(false)}
          >
            Get Blacklaw
          </a>
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
