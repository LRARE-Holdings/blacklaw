import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Blacklaw — exam-grade SQE preparation", template: "%s — Blacklaw" },
  description: "The serious study companion for the SQE: 1,200+ questions, timed mock sittings, and the Verdict readiness score.",
  metadataBase: new URL("https://blacklaw.co"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <div className="wrap">
          <header>
            <a className="brand" href="/">Blacklaw</a>
            <div className="rule" />
          </header>
          <main>{children}</main>
          <footer>
            Blacklaw — exam-grade SQE preparation · a Pellar product
            <nav style={{ marginTop: 6 }}>
              <a href="/">Home</a>
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/support">Support</a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
