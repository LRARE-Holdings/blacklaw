import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import PhoneShot from "../../components/PhoneShot";
import BetaButton from "../../components/BetaButton";

export const metadata: Metadata = {
  title: "SQE2 preparation",
  description:
    "SQE2 preparation built around the genuine station format, a live client you interview by voice, and marking against the published criteria.",
  alternates: { canonical: "/sqe2" },
  openGraph: {
    title: "SQE2 preparation — Blacklaw",
    description: "Assessed stations, a live voice client, and marking against the published criteria.",
    url: "https://blacklaw.co/sqe2",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an app for SQE2 preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blacklaw prepares candidates for SQE2 the way it is actually sat. It runs assessed stations in the genuine format, lets you interview a live client by voice, and marks your work against the published assessment criteria.",
      },
    },
    {
      "@type": "Question",
      name: "How is SQE2 marked in Blacklaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every station is marked against the SRA's published criteria, grade A to F per criterion with written feedback, in seconds. Spoken stations are transcribed on your device before marking.",
      },
    },
    {
      "@type": "Question",
      name: "What are the SQE2 oral stations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advocacy and client interview. In Blacklaw you record advocacy submissions and interview a voiced client who reveals information only when you ask the right questions, mirroring the real assessment.",
      },
    },
  ],
};

const STATIONS = [
  { t: "Legal writing", d: "A letter or email to a client, the other side, or a partner, on the real template." },
  { t: "Legal drafting", d: "Draft or amend a legal document from a precedent, under the clock." },
  { t: "Case & matter analysis", d: "A written report to a partner with legal analysis and client-focused advice." },
  { t: "Legal research", d: "A research note from a provided bundle, where some sources are deliberately irrelevant." },
  { t: "Advocacy", d: "Submissions to a judge, recorded aloud, assessed on structure and persuasion." },
  { t: "Client interview", d: "A live voice conversation, then the attendance note that follows it." },
];

export default function SQE2() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="section hero section--ink-deep">
        <div className="container hero-grid">
          <div>
            <Reveal delay={0.08}>
              <h1 className="display" style={{ color: "var(--on-ink)", marginTop: 16, fontSize: "clamp(44px,7vw,92px)" }}>
                SQE2,<br /><span className="hero-gold">in your pocket.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede" style={{ marginTop: 24, maxWidth: "40ch" }}>
                The second stage is practical and skills-based. Blacklaw recreates it as it is
                actually sat, with a live client and marking against the published criteria.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <BetaButton label="Get Blacklaw Complete" style={{ marginTop: 32 }} />
            </Reveal>
          </div>
          <Reveal delay={0.18} y={40}>
            <PhoneShot src="/shots/sqe2.png" alt="The SQE2 station hub with the skills and practice-areas readiness matrix" priority />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><h2 className="h-lg center mx-auto" style={{ maxWidth: "22ch" }}>How it mirrors the real assessment.</h2></Reveal>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {[
              { t: "The genuine format", d: "The same documents, the same timings, reading time on the clock. You sit it as you will sit it." },
              { t: "A live client, by voice", d: "Interview a voiced client who discloses only what good questioning uncovers, powered by AI." },
              { t: "Marked to the criteria", d: "Every answer assessed against the published criteria, A to F per criterion, with feedback in seconds." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.08}>
                <div className="card feature" style={{ height: "100%" }}>
                  <div className="feature-icon" aria-hidden>◆</div>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 12, marginBottom: 40, maxWidth: "20ch" }}>The six assessed skills, all in one place.</h2></Reveal>
          <div className="grid grid-3">
            {STATIONS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 0.06}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 className="h-md" style={{ marginBottom: 8 }}>{s.t}</h3>
                  <p className="muted" style={{ fontSize: 15.5 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="container">
          <Reveal><div className="gold-rule mx-auto" style={{ marginBottom: 26 }} /></Reveal>
          <Reveal delay={0.06}><h2 className="h-xl mx-auto" style={{ maxWidth: "16ch" }}>Preparation for the whole qualification.</h2></Reveal>
          <Reveal delay={0.14}>
            <a href="/pricing" className="btn btn--primary" style={{ marginTop: 30 }}>See Blacklaw Complete <span className="btn-arrow">→</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
