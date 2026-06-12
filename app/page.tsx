export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">For SQE1 candidates</p>
          <h1 className="heroTitle">Know you&apos;re ready.</h1>
          <p className="heroSub">
            A 1,200+ question bank across every FLK1 and FLK2 topic. Full timed
            mock sittings under real exam conditions. And one number that tells
            you where you actually stand.
          </p>
          <a className="cta" href="#">Download on the App Store</a>
          <p className="fine">
            The Verdict Score estimates exam readiness — a strong indicator,
            not a guarantee of results.
          </p>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phoneScreen">
            <p className="phoneEyebrow">Your readiness</p>
            <p className="phoneTitle">Progress</p>
            <div className="phoneRule" />
            <div className="ringRow">
              <svg className="ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--hair)" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="50" fill="none"
                  stroke="url(#gold)" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray="226 314" transform="rotate(-90 60 60)"
                />
                <defs>
                  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="var(--gold1)" />
                    <stop offset="1" stopColor="var(--gold2)" />
                  </linearGradient>
                </defs>
                <text x="60" y="58" textAnchor="middle" className="ringNum">72</text>
                <text x="60" y="76" textAnchor="middle" className="ringLabel">VERDICT</text>
              </svg>
              <div>
                <span className="pill pillGold">On Track</span>
                <p className="phoneNote">Shore up your weakest topics next.</p>
              </div>
            </div>
            <div className="phoneCard">
              <p className="phoneCardTitle">Today&apos;s brief</p>
              <p className="phoneCardBody">6 weeks out — 34 min today: focus on Trusts, protect 12 fading answers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="featureRule" />
          <h2>The Verdict Score</h2>
          <p>
            One number from four signals — mastery, syllabus coverage, predicted
            retention, and momentum — shrunk toward caution on thin evidence and
            dampened by your weakest topic, because SQE1 requires passing both
            papers.
          </p>
        </div>
        <div className="feature">
          <div className="featureRule" />
          <h2>Exam Day Simulation</h2>
          <p>
            The real block: 90 questions, 2h33m, flag-and-return navigation, and
            no feedback until the paper is over. Then a debrief on score, pace,
            and exactly where the marks went.
          </p>
        </div>
        <div className="feature">
          <div className="featureRule" />
          <h2>A plan, every day</h2>
          <p>
            A daily brief sized to your hours and exam date: new coverage, spaced
            review, and rescue sessions for answers about to fade — built from a
            real forgetting curve, not a content calendar.
          </p>
        </div>
        <div className="feature">
          <div className="featureRule" />
          <h2>Honest calibration</h2>
          <p>
            You rate your confidence on every answer. We show you where
            confidence and results disagree — the difference between flagging an
            answer to revisit and second-guessing one you had right.
          </p>
        </div>
      </section>

      <section className="closer">
        <h2 className="closerTitle">Calm by design.</h2>
        <p>
          Built for the two-hour evening session and the final twelve weeks. No
          streak circus, no confetti — one gold ring that fills as you earn it.
        </p>
        <a className="cta" href="#">Download on the App Store</a>
      </section>
    </>
  );
}
