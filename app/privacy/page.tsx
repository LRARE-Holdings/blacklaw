import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <>
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 12 June 2026</p>
      <p>This policy explains what we collect when you use the Blacklaw iOS app, why, and your rights. The data controller is Pellar (contact: <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>).</p>
      <h2>What we collect</h2>
      <ul>
        <li><strong>Account data</strong> — email address, name, and sign-in identifiers (email/password, Sign in with Apple, or Google).</li>
        <li><strong>Study data</strong> — questions answered, results, confidence ratings, timing, streaks, readiness scores, mock-exam results, and your onboarding answers (exam date, study hours, focus topics, study windows, attempt number, self-rated confidence, optional referral source).</li>
        <li><strong>Subscription state</strong> — whether you hold an active subscription (billing itself is handled by Apple; we never see your payment details).</li>
        <li><strong>Diagnostics</strong> — crash reports, performance data and error-session replays via Sentry. Replays aggressively mask all text and images by default; your answers and personal details are not visible in them.</li>
        <li><strong>Usage analytics</strong> — via Google Firebase Analytics, only where you have allowed tracking through Apple&apos;s App Tracking Transparency prompt.</li>
        <li><strong>Push token</strong> — if you enable study reminders, a device token for notifications.</li>
      </ul>
      <h2>Why we collect it</h2>
      <p>To operate your account and sync your progress across devices (contract); to compute your readiness analytics, which are the product&apos;s core function (contract); to fix crashes and improve reliability (legitimate interest); to send study reminders you switch on (consent); and to understand aggregate usage (consent via ATT).</p>
      <h2>Where it lives</h2>
      <ul>
        <li><strong>Supabase</strong> — primary database and authentication, hosted in the EU (London/eu-west-2).</li>
        <li><strong>Google Firebase</strong> — authentication/notifications and analytics infrastructure (Google LLC, with appropriate safeguards for any non-UK/EU transfer).</li>
        <li><strong>Sentry</strong> — error monitoring, EU ingestion (Germany).</li>
        <li><strong>Apple</strong> — subscription billing under Apple&apos;s own privacy terms.</li>
      </ul>
      <h2>Retention and deletion</h2>
      <p>Your data is kept while your account exists. Deleting your account in the App (Account → Danger Zone → Delete Account) permanently removes your account and study data from our systems. Diagnostics age out automatically under Sentry&apos;s retention windows.</p>
      <h2>Your rights</h2>
      <p>Under UK GDPR you may request access, correction, deletion, portability, or restriction of your data, and you may withdraw consent (reminders, tracking) at any time in the App or device Settings. To exercise any right, email <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>. You may also complain to the ICO (ico.org.uk).</p>
      <h2>Children</h2>
      <p>Blacklaw is intended for users aged 16 and over and is not directed at children.</p>
      <h2>Changes</h2>
      <p>We will post any changes here and flag material changes in the App.</p>
    </>
  );
}
