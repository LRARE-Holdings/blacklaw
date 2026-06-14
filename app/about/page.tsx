import type { Metadata } from "next";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blacklaw is built by Pellar to give SQE candidates an honest picture of their readiness, and to cover the whole qualification for the first time.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="section hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal delay={0.08}><h1 className="display" style={{ marginTop: 16, fontSize: "clamp(40px,6vw,76px)" }}>Why Blacklaw exists.</h1></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <div className="stack" style={{ fontSize: 19, color: "var(--sub)", lineHeight: 1.7 }}>
              <p>
                Qualifying as a solicitor in England and Wales now runs through the SQE, an
                expensive, high-stakes pair of examinations. Most candidates prepare without
                ever knowing whether they have done enough. That uncertainty is the problem
                Blacklaw was built to solve.
              </p>
              <p>
                It began as SQEz, a single-minded SQE1 question bank. The lesson of that first
                year was simple: candidates do not need more questions, they need to know what
                their answers mean. So we built the Verdict, a readiness score drawn from every
                answer, and rebuilt the whole app around it.
              </p>
              <p>
                Blacklaw now covers the second stage too.
                SQE2 is practical and skills-based, and few tools have attempted it. Ours runs the
                assessed stations in their real format, lets candidates interview a client by
                voice, and marks the work against the published criteria. One app, for the
                whole qualification.
              </p>
              <p>
                Blacklaw is made by Pellar. It is independent of the Solicitors Regulation
                Authority and the assessment provider. Its scores and marking exist to direct
                your preparation, never to promise a result.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 40 }}>
              <div className="gold-rule" style={{ marginBottom: 18 }} />
              <p className="h-md">Walk in knowing.</p>
              <a href="/pricing" className="btn btn--primary" style={{ marginTop: 22 }}>Get Blacklaw <span className="btn-arrow">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
