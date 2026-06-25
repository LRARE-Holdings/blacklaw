import Reveal from "../components/Reveal";
import VerdictRing from "../components/VerdictRing";
import PhoneShot from "../components/PhoneShot";
import BetaButton from "../components/BetaButton";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section hero section--ink-deep">
        <div className="container hero-grid">
          <div>
            <Reveal delay={0.08}>
              <h1 className="display" style={{ color: "var(--on-ink)" }}>
                <span className="hero-tag">Walk in</span>
                <span className="hero-tag hero-gold">knowing.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lede" style={{ marginTop: 26, maxWidth: "38ch" }}>
                Exam-grade practice, a readiness score that tells you the truth, and
                SQE2 preparation that works like the real assessment. The whole qualification, one place.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <BetaButton label="Get Blacklaw" />
                <a href="/sqe2" className="btn btn--ghost">See SQE2</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} y={40}>
            <div className="device-duo">
              <PhoneShot src="/shots/home.png" alt="The Blacklaw home screen showing a Verdict readiness score" priority />
              <PhoneShot src="/shots/progress.png" alt="The Blacklaw progress screen with a 30-day Verdict trend" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="section section--tint" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <Reveal>
            <div className="kpis" style={{ justifyContent: "space-between" }}>
              <div><div className="kpi-num">2,000<span className="gold">+</span></div><div className="kpi-label">Exam-standard questions</div></div>
              <div><div className="kpi-num">90<span className="gold">/</span>153</div><div className="kpi-label">Full mock sitting, to the minute</div></div>
              <div><div className="kpi-num">SQE1 <span className="gold">+</span> 2</div><div className="kpi-label">The whole qualification</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE VERDICT */}
      <section className="section">
        <div className="container hero-grid">
          <Reveal>
            <div>
              <h2 className="h-xl" style={{ marginTop: 14 }}>One number,<br />honestly earned.</h2>
              <p className="lede" style={{ marginTop: 22, maxWidth: "42ch", color: "var(--sub)" }}>
                Every answer feeds a single readiness score, from 0 to 100. It weighs how
                firmly you hold each topic, how much of the syllabus you have covered, what
                the forgetting curve says you are about to lose, and how consistently you work.
              </p>
              <p className="disclaimer" style={{ marginTop: 18 }}>
                An indicator of readiness, not a prediction of results.
              </p>
              <a href="/features" className="btn btn--ghost" style={{ marginTop: 28 }}>How it works <span className="btn-arrow">→</span></a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="card" style={{ padding: "48px 30px", textAlign: "center" }}>
              <VerdictRing value={72} size={240} onInk={false} />
              <div style={{ marginTop: 18 }} className="muted">On track · Established</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURE TRIO */}
      <section className="section section--tint">
        <div className="container">
          <Reveal delay={0.06}><h2 className="h-lg center mx-auto" style={{ marginTop: 12, marginBottom: 48, maxWidth: "18ch" }}>Practice that respects how the SQE actually works.</h2></Reveal>
          <div className="grid grid-3">
            {[
              { t: "Exam Day Simulation", d: "Ninety questions in 153 minutes, no feedback until the paper closes. The real sitting, then a breakdown of every mark." },
              { t: "Autopsy Mode", d: "Each question you miss is taken apart: why the right answer is right, why yours was not, and the principle between them." },
              { t: "A daily companion", d: "A brief built from what you are forgetting, calibration of confidence against accuracy, and recall rescue before knowledge fades." },
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

      {/* SQE2 SHOWCASE */}
      <section className="section section--ink-deep">
        <div className="container hero-grid">
          <Reveal y={40}>
            <PhoneShot src="/shots/sqe2.png" alt="The Blacklaw SQE2 station hub with a readiness matrix" width={300} />
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <h2 className="h-xl" style={{ marginTop: 16, color: "var(--on-ink)" }}>SQE2, as it is<br />actually sat.</h2>
              <p className="lede" style={{ marginTop: 22, maxWidth: "40ch" }}>
                The practical half of the qualification, recreated as it is actually sat.
                Assessed stations in the genuine format. A live client you interview by
                voice. Every answer marked against the published criteria, in seconds.
              </p>
              <a href="/sqe2" className="btn btn--primary" style={{ marginTop: 30 }}>Explore SQE2 <span className="btn-arrow">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSER */}
      <section className="section center">
        <div className="container">
          <Reveal><div className="gold-rule mx-auto" style={{ marginBottom: 28 }} /></Reveal>
          <Reveal delay={0.06}><h2 className="display" style={{ fontSize: "clamp(40px, 7vw, 84px)" }}>Walk in knowing.</h2></Reveal>
          <Reveal delay={0.14}>
            <p className="lede mx-auto" style={{ marginTop: 22, maxWidth: "34ch" }}>
              Pro covers SQE1 in full. Complete adds the SQE2 track. Both on the App Store.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="/pricing" className="btn btn--primary" style={{ marginTop: 32 }}>See plans <span className="btn-arrow">→</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
