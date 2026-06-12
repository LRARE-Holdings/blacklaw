import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <>
      <p className="eyebrow">Legal</p>
      <h1>Terms of Use</h1>
      <p className="updated">Last updated: 12 June 2026</p>
      <p>These terms govern your use of the Blacklaw iOS application (&quot;the App&quot;), operated by Pellar (&quot;we&quot;, &quot;us&quot;). By creating an account or using the App you agree to these terms.</p>
      <h2>1. The service</h2>
      <p>Blacklaw is a study aid for candidates preparing for the Solicitors Qualifying Examination (SQE). The App provides practice questions, mock examinations, revision tools and readiness analytics.</p>
      <h2>2. Not legal advice; no affiliation</h2>
      <p>Content in the App is provided for examination preparation only and does not constitute legal advice. Blacklaw is not affiliated with, endorsed by, or connected to the Solicitors Regulation Authority or any examination provider. The Verdict Score and all analytics are indicators based on your practice data; they are not a prediction or guarantee of examination results.</p>
      <h2>3. Accounts</h2>
      <p>You must provide accurate information when creating an account and keep your credentials secure. You are responsible for activity under your account. You may delete your account and associated data at any time from within the App (Account → Danger Zone).</p>
      <h2>4. Subscriptions</h2>
      <p>Pro features require a paid subscription billed through your Apple ID. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period; manage or cancel any time in your device Settings. Prices are shown in the App before purchase. Refunds are handled by Apple under their terms.</p>
      <h2>5. Acceptable use</h2>
      <p>You may not copy, scrape, redistribute or resell the question bank or other content; reverse-engineer the App; or use it to build a competing product. Question content, explanations, the Verdict Engine and the Blacklaw brand are our intellectual property or licensed to us.</p>
      <h2>6. Availability and changes</h2>
      <p>We aim for high availability but the App is provided &quot;as is&quot; without warranty of uninterrupted service. We may update features, content and these terms; material changes will be notified in the App. Continued use after changes constitutes acceptance.</p>
      <h2>7. Liability</h2>
      <p>Nothing in these terms limits liability that cannot be limited by law. Otherwise, our total liability arising from your use of the App is limited to the amount you paid us in the twelve months before the claim. We are not liable for examination outcomes.</p>
      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.</p>
      <h2>9. Contact</h2>
      <p>Questions about these terms: <a href="mailto:hello@pellar.co.uk">hello@pellar.co.uk</a>.</p>
    </>
  );
}
