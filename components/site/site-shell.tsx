"use client";

import type { ReactNode } from "react";

import { AnalyticsRouteTracker } from "@/components/site/analytics-route-tracker";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { StickyMobileCTA } from "@/components/site/sticky-mobile-cta";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <AnalyticsRouteTracker />
      <AnnouncementBar />
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
