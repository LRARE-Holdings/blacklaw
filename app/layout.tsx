import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const SITE = "https://blacklaw.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Blacklaw — Walk in knowing",
    template: "%s — Blacklaw",
  },
  description:
    "Exam-grade preparation for the whole SQE. The Verdict readiness score, full exam-day simulation, and SQE2 preparation that works like the real assessment.",
  applicationName: "Blacklaw",
  keywords: [
    "SQE", "SQE1", "SQE2", "SQE prep", "SQE practice questions",
    "Solicitors Qualifying Examination", "SQE2 app", "mock SQE",
    "qualify as a solicitor", "law revision",
  ],
  authors: [{ name: "Pellar" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Blacklaw",
    title: "Blacklaw — Walk in knowing",
    description:
      "Exam-grade preparation for the whole SQE — SQE1 and SQE2 — with a readiness score that tells you the truth.",
    url: SITE,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blacklaw — Walk in knowing",
    description: "Exam-grade preparation for the whole SQE. SQE1 and SQE2, one app.",
  },
  robots: { index: true, follow: true },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blacklaw",
  url: SITE,
  slogan: "Walk in knowing.",
  brand: "Blacklaw",
  parentOrganization: { "@type": "Organization", name: "Pellar" },
  description: "Exam-grade preparation for the Solicitors Qualifying Examination (SQE1 and SQE2).",
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Blacklaw",
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS",
  offers: { "@type": "Offer", category: "subscription" },
  description:
    "Practice, exam-day simulation, the Verdict readiness score, and the first SQE2 preparation in an app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgLd, appLd]) }}
        />
      </body>
    </html>
  );
}
