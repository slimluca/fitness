"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  getPageContext,
  persistInitialTouch,
  persistLastCta,
} from "@/lib/lead-attribution";
import { trackEvent, trackPageView } from "@/lib/tracking";

function inferEventName(href: string, label: string) {
  const normalizedHref = href.toLowerCase();
  const normalizedLabel = label.toLowerCase();

  if (
    normalizedHref.includes("wa.me") ||
    normalizedHref.includes("whatsapp.com") ||
    normalizedLabel.includes("whatsapp")
  ) {
    return "whatsapp_click";
  }

  if (
    normalizedHref.startsWith("/book-consultation") ||
    normalizedHref.startsWith("/contact?intent=consultation") ||
    normalizedLabel.includes("book consultation")
  ) {
    return "book_consultation_click";
  }

  if (
    normalizedHref.includes("#service-inquiry") ||
    normalizedLabel.includes("request availability")
  ) {
    return "request_availability_click";
  }

  if (normalizedLabel.includes("view pricing")) {
    return "pricing_cta_click";
  }

  return null;
}

function isBlogArticlePath(pathname: string) {
  return pathname.startsWith("/blog/") && !pathname.startsWith("/blog/category/");
}

export function AnalyticsRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const search = window.location.search.replace(/^\?/, "");
    const path = search ? `${pathname}?${search}` : pathname;
    const currentSearchParams = new URLSearchParams(window.location.search);
    const pageContext = getPageContext(pathname);

    trackPageView(path, document.title, {
      page_type: pageContext.pageType,
      article_slug: pageContext.articleSlug,
      category_slug: pageContext.categorySlug,
      service_slug: pageContext.serviceSlug,
      landing_slug: pageContext.landingSlug,
    });
    persistInitialTouch(pathname);

    if (pathname === "/thank-you") {
      trackEvent("thank_you_view", {
        source: currentSearchParams.get("source") ?? "unknown",
        service: currentSearchParams.get("service") ?? undefined,
      });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href") ?? "";
      const label =
        anchor.getAttribute("data-track-label")?.trim() ??
        anchor.textContent?.replace(/\s+/g, " ").trim() ??
        "";
      const location =
        anchor.getAttribute("data-track-location") ??
        (pathname.startsWith("/blog") ? "blog" : "site");
      const explicitEvent = anchor.getAttribute("data-track-event");
      const eventName = explicitEvent ?? inferEventName(href, label);
      const pageContext = getPageContext(pathname);

      if (!eventName) {
        return;
      }

      const payload = {
        href,
        label,
        location,
        page_path: pathname,
        page_type: pageContext.pageType,
        article_slug: pageContext.articleSlug,
        category_slug: pageContext.categorySlug,
        service_slug: pageContext.serviceSlug,
        landing_slug: pageContext.landingSlug,
      };

      trackEvent(eventName, payload);
      persistLastCta({
        ...pageContext,
        capturedAt: new Date().toISOString(),
        eventName,
        href,
        label,
        location,
        pagePath: pathname,
      });

      if (
        pathname.startsWith("/blog") &&
        [
          "book_consultation_click",
          "request_availability_click",
          "whatsapp_click",
          "pricing_cta_click",
        ].includes(eventName)
      ) {
        trackEvent("blog_cta_click", {
          ...payload,
          cta_event: eventName,
        });
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isBlogArticlePath(pathname)) {
      return;
    }

    let hasTrackedEngagement = false;

    function emitEngagement(engagementType: "scroll" | "time") {
      if (hasTrackedEngagement) {
        return;
      }

      hasTrackedEngagement = true;
      trackEvent("blog_article_engaged", {
        page_path: pathname,
        page_title: document.title,
        engagement_type: engagementType,
      });
    }

    function handleScroll() {
      const doc = document.documentElement;
      const scrollableHeight = doc.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const scrollDepth = window.scrollY / scrollableHeight;

      if (scrollDepth >= 0.55) {
        emitEngagement("scroll");
      }
    }

    const timeoutId = window.setTimeout(() => {
      emitEngagement("time");
    }, 45000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
