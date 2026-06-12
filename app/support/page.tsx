import type { Metadata } from "next";
export const metadata: Metadata = { title: "Support" };

export default function Support() {
  return (
    <>
      <p className="eyebrow">Help</p>
      <h1>Support</h1>
      <p>We read everything. Email <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a> and a human will reply — usually within one working day.</p>
      <h2>Common questions</h2>
      <h3>How do I cancel my subscription?</h3>
      <p>Subscriptions are billed by Apple: open Settings → your name → Subscriptions → Blacklaw → Cancel. Access continues until the end of the paid period.</p>
      <h3>How do I reset my password?</h3>
      <p>On the sign-in screen choose &quot;Sign in&quot; → &quot;Forgotten password&quot;, and we&apos;ll email you a reset link that opens straight back into the app.</p>
      <h3>How do I delete my account?</h3>
      <p>In the app: Account → Danger Zone → Delete Account. This permanently removes your account and all study data.</p>
      <h3>What is the Verdict Score?</h3>
      <p>A 0–100 readiness indicator built from four signals: mastery, syllabus coverage, predicted retention, and study momentum. It is a strong indicator — not a guarantee of results.</p>
    </>
  );
}
