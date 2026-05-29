import type { Metadata } from "next";

import { AnalyticsScripts } from "@/components/site/analytics-scripts";
import { SiteShell } from "@/components/site/site-shell";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Personal Trainer Mauritius | Fitness by Fabrizio",
    template: `%s | ${siteConfig.visualBrandName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.coachName }],
  creator: siteConfig.coachName,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      en: siteConfig.domain,
      fr: `${siteConfig.domain}/fr`,
      "x-default": siteConfig.domain,
    },
  },
  openGraph: {
    title: "Personal Trainer Mauritius | Fitness by Fabrizio",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.visualBrandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.visualBrandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Mauritius | Fitness by Fabrizio",
    description: siteConfig.description,
    images: [`${siteConfig.domain}${siteConfig.ogImage}`],
  },
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ??
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--bg-base)] text-white">
        <AnalyticsScripts />
        <div className="relative flex min-h-full flex-col overflow-x-clip">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,#050505,#0a0a0a)]" />
          <SiteShell>{children}</SiteShell>
        </div>
      </body>
    </html>
  );
}
