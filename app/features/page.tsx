import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import VerdictRing from "../../components/VerdictRing";
import PhoneShot from "../../components/PhoneShot";

export const metadata: Metadata = {
  title: "Features",
  description:
    "The Verdict readiness engine, full exam-day simulation, Autopsy Mode review, and a study companion that adapts to what you are forgetting.",
  alternates: { canonical: "/features" },
};

export default function Features() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <Reveal delay={0.08}><h1 className="display" style={{ marginTop: 16, fontSize: "clamp(42px,6.5vw,84px)" }}>Built to be honest with you.</h1></Reveal>
          <Reveal delay={0.16}><p className="lede" style={{ marginTop: 22, maxWidth: "46ch" }}>Most prep tells you what you have done. Blacklaw tells you where you stand, and what to do next.</p></Reveal>
        </div>
      </section>

      {/* Verdict */}
      <section className="section section--ink-deep">
        <div className="container hero-grid">
          <Reveal>
            <div>
              <h2 className="h-xl" style={{ marginTop: 14, color: "var(--on-ink)" }}>Four signals,<br />one score.</h2>
              <ul className="stack-sm" style={{ listStyle: "none", marginTop: 24 }}>
                {[
                  ["Mastery", "How firmly you hold each topic, weighted so weakness cannot hide behind strength."],
                  ["Coverage", "How much of the syllabus you have genuinely touched."],
                  ["Retention", "What the forgetting curve says you are about to lose."],
                  ["Momentum", "Whether you are studying like someone with a date in the diary."],
                ].map(([t, d]) => (
                  <li key={t} style={{ display: "flex", gap: 14 }}>
                    <span style={{ color: "var(--gold-on-ink)", fontWeight: 700 }}>◆</span>
                    <span className="lede" style={{ fontSize: 17, maxWidth: "42ch" }}><strong style={{ color: "var(--on-ink)" }}>{t}.</strong> {d}</span>
                  </li>
                ))}
              </ul>
              <p className="disclaimer" style={{ marginTop: 22, color: "var(--on-ink-sub)" }}>An indicator of readiness, not a prediction of results.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}><div style={{ display: "grid", placeItems: "center" }}><VerdictRing value={72} size={260} onInk /></div></Reveal>
        </div>
      </section>

      {/* Simulation + Autopsy with shots */}
      <section className="section">
        <div className="container hero-grid">
          <Reveal y={40}><PhoneShot src="/shots/mock.png" alt="A full mock exam sitting in Blacklaw" width={290} /></Reveal>
          <Reveal delay={0.12}>
            <div>
              <h2 className="h-lg" style={{ marginTop: 14 }}>Sit the paper before the paper.</h2>
              <p className="lede" style={{ marginTop: 20, maxWidth: "44ch", color: "var(--sub)" }}>
                Ninety questions, 153 minutes, no feedback until the end. The pacing and the
                pressure of the real sitting, then a breakdown of where the marks went, fed
                back into your readiness picture.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="grid grid-2">
            {[
              { t: "Autopsy Mode", d: "Every missed question taken apart: the correct answer, your answer, and the principle that decides between them. Understanding, not just the key." },
              { t: "A study companion", d: "A daily brief from what you are forgetting, confidence calibrated against accuracy, recall rescue before knowledge fades, and reminders on your schedule." },
              { t: "The full question bank", d: "Over 1,250 single-best-answer questions across FLK1 and FLK2, written to the style and standard of the assessment, every one explained." },
              { t: "Offline and yours", d: "The whole bank works offline. Your data stays yours; nothing is sold, and you are not tracked across other apps." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={(i % 2) * 0.08}>
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

      <section className="section center">
        <div className="container">
          <Reveal><h2 className="h-xl mx-auto" style={{ maxWidth: "16ch" }}>And the whole of SQE2, when you are ready.</h2></Reveal>
          <Reveal delay={0.1}><a href="/sqe2" className="btn btn--primary" style={{ marginTop: 28 }}>See SQE2 <span className="btn-arrow">→</span></a></Reveal>
        </div>
      </section>
    </>
  );
}
