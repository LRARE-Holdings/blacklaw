import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Blacklaw Pro covers SQE1 in full. Blacklaw Complete adds the SQE2 track. Monthly or annual, cancel any time.",
  alternates: { canonical: "/pricing" },
};

function Tick() {
  return <span className="tick" aria-hidden>✓</span>;
}

export default function Pricing() {
  return (
    <>
      <section className="section hero center">
        <div className="container">
          <Reveal delay={0.08}><h1 className="display" style={{ marginTop: 16, fontSize: "clamp(42px,6.5vw,82px)" }}>Two tiers. One qualification.</h1></Reveal>
          <Reveal delay={0.16}><p className="lede mx-auto" style={{ marginTop: 20, maxWidth: "40ch" }}>Start with SQE1. Add SQE2 when you reach it. Prices shown in the app before you commit.</p></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="price-grid">
            <Reveal>
              <div className="price-card">
                <p className="eyebrow">Blacklaw Pro</p>
                <div className="price-amt">SQE1<span> · in full</span></div>
                <p className="muted" style={{ fontSize: 15 }}>Everything you need for the first stage.</p>
                <ul className="price-list">
                  <li><Tick /> 1,250+ exam-standard questions</li>
                  <li><Tick /> Full Exam Day Simulation</li>
                  <li><Tick /> The Verdict readiness score</li>
                  <li><Tick /> Autopsy Mode and the daily companion</li>
                  <li><Tick /> Offline access</li>
                </ul>
                <a href="https://apps.apple.com/" className="btn btn--ghost" style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>Choose Pro</a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="price-card feature-tier">
                <span className="price-badge">The whole qualification</span>
                <p className="eyebrow">Blacklaw Complete</p>
                <div className="price-amt">SQE1 <span>+</span> SQE2</div>
                <p className="muted" style={{ fontSize: 15 }}>Everything in Pro, plus the SQE2 track.</p>
                <ul className="price-list">
                  <li><Tick /> Everything in Pro</li>
                  <li><Tick /> All SQE2 stations, written and oral</li>
                  <li><Tick /> Live client interviews by voice</li>
                  <li><Tick /> AI marking against the published criteria</li>
                  <li><Tick /> Verdict 2 readiness across the blueprint</li>
                </ul>
                <a href="https://apps.apple.com/" className="btn btn--primary" style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>Choose Complete</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="disclaimer center mx-auto" style={{ marginTop: 34 }}>
              Auto-renewing subscriptions billed monthly or annually through your Apple ID,
              cancellable any time in your App Store settings. Readiness scores and marking
              guide your preparation; they do not predict or guarantee examination outcomes.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
