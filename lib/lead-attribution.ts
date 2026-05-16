const INITIAL_TOUCH_STORAGE_KEY = "fgb-initial-touch";
const LAST_CTA_STORAGE_KEY = "fgb-last-cta";

type OptionalStringMap = Record<string, string | undefined>;

export type PageContext = {
  pageType:
    | "homepage"
    | "services_overview"
    | "service_detail"
    | "pricing"
    | "contact"
    | "consultation"
    | "results"
    | "reviews"
    | "about"
    | "faq"
    | "blog_hub"
    | "blog_article"
    | "blog_category"
    | "seo_landing"
    | "other";
  articleSlug?: string;
  categorySlug?: string;
  serviceSlug?: string;
  landingSlug?: string;
};

export type InitialTouchContext = PageContext & {
  capturedAt: string;
  pagePath: string;
  pageUrl: string;
  referrer?: string;
  referrerDomain?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

export type LastCtaContext = PageContext & {
  capturedAt: string;
  eventName: string;
  href: string;
  label: string;
  location: string;
  pagePath: string;
};

export type LeadAttributionSnapshot = {
  currentPagePath?: string;
  currentPageUrl?: string;
  currentPageType?: PageContext["pageType"];
  currentReferrer?: string;
  currentReferrerDomain?: string;
  currentArticleSlug?: string;
  currentCategorySlug?: string;
  currentServiceSlug?: string;
  currentLandingSlug?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  initialLandingPath?: string;
  initialLandingUrl?: string;
  initialLandingType?: PageContext["pageType"];
  initialLandingArticleSlug?: string;
  initialLandingCategorySlug?: string;
  initialLandingServiceSlug?: string;
  initialLandingSlug?: string;
  initialReferrer?: string;
  initialReferrerDomain?: string;
  initialUtmSource?: string;
  initialUtmMedium?: string;
  initialUtmCampaign?: string;
  initialUtmTerm?: string;
  initialUtmContent?: string;
  lastCtaEvent?: string;
  lastCtaLabel?: string;
  lastCtaHref?: string;
  lastCtaLocation?: string;
  lastCtaPagePath?: string;
  lastCtaPageType?: PageContext["pageType"];
  lastCtaArticleSlug?: string;
  lastCtaCategorySlug?: string;
  lastCtaServiceSlug?: string;
  lastCtaLandingSlug?: string;
  lastCtaCapturedAt?: string;
};

function getReferrerDomain(referrer?: string) {
  if (!referrer) {
    return undefined;
  }

  try {
    return new URL(referrer).hostname;
  } catch {
    return undefined;
  }
}

export function getPageContext(pathname: string): PageContext {
  if (pathname === "/") {
    return { pageType: "homepage" };
  }

  if (pathname === "/services") {
    return { pageType: "services_overview" };
  }

  if (pathname === "/personal-training") {
    return {
      pageType: "service_detail",
      serviceSlug: "personal-training",
    };
  }

  if (pathname === "/online-coaching") {
    return {
      pageType: "service_detail",
      serviceSlug: "online-coaching",
    };
  }

  if (pathname.startsWith("/services/")) {
    return {
      pageType: "service_detail",
      serviceSlug: pathname.split("/")[2] || undefined,
    };
  }

  if (pathname === "/pricing") {
    return { pageType: "pricing" };
  }

  if (pathname === "/contact") {
    return { pageType: "contact" };
  }

  if (pathname === "/book-consultation") {
    return { pageType: "consultation" };
  }

  if (pathname === "/results") {
    return { pageType: "results" };
  }

  if (pathname === "/reviews") {
    return { pageType: "reviews" };
  }

  if (pathname === "/about") {
    return { pageType: "about" };
  }

  if (pathname === "/faq") {
    return { pageType: "faq" };
  }

  if (pathname === "/blog") {
    return { pageType: "blog_hub" };
  }

  if (pathname.startsWith("/blog/category/")) {
    return {
      pageType: "blog_category",
      categorySlug: pathname.split("/")[3] || undefined,
    };
  }

  if (pathname.startsWith("/blog/")) {
    return {
      pageType: "blog_article",
      articleSlug: pathname.split("/")[2] || undefined,
    };
  }

  if (pathname === "/personal-trainer-mauritius") {
    return {
      pageType: "seo_landing",
      landingSlug: pathname.replace(/^\//, "") || undefined,
    };
  }

  return { pageType: "other" };
}

export function getUtmContext(searchParams: URLSearchParams): OptionalStringMap {
  return {
    utmSource: searchParams.get("utm_source") ?? undefined,
    utmMedium: searchParams.get("utm_medium") ?? undefined,
    utmCampaign: searchParams.get("utm_campaign") ?? undefined,
    utmTerm: searchParams.get("utm_term") ?? undefined,
    utmContent: searchParams.get("utm_content") ?? undefined,
  };
}

function setSessionJson(key: string, value: object) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore sessionStorage errors to avoid breaking the lead flow.
  }
}

function getSessionJson<T>(key: string): T | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function persistInitialTouch(pathname: string) {
  if (typeof window === "undefined") {
    return;
  }

  const existing = getSessionJson<InitialTouchContext>(INITIAL_TOUCH_STORAGE_KEY);

  if (existing) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const pagePath = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  setSessionJson(INITIAL_TOUCH_STORAGE_KEY, {
    ...getPageContext(pathname),
    capturedAt: new Date().toISOString(),
    pagePath,
    pageUrl: window.location.href,
    referrer: document.referrer || undefined,
    referrerDomain: getReferrerDomain(document.referrer || undefined),
    ...getUtmContext(searchParams),
  } satisfies InitialTouchContext);
}

export function persistLastCta(context: LastCtaContext) {
  setSessionJson(LAST_CTA_STORAGE_KEY, context);
}

export function getInitialTouchContext() {
  return getSessionJson<InitialTouchContext>(INITIAL_TOUCH_STORAGE_KEY);
}

export function getLastCtaContext() {
  return getSessionJson<LastCtaContext>(LAST_CTA_STORAGE_KEY);
}

export function getLeadAttributionSnapshot(
  pathname: string,
): LeadAttributionSnapshot {
  if (typeof window === "undefined") {
    return {};
  }

  const pageContext = getPageContext(pathname);
  const searchParams = new URLSearchParams(window.location.search);
  const initialTouch = getInitialTouchContext();
  const lastCta = getLastCtaContext();

  return {
    currentPagePath: pathname,
    currentPageUrl: window.location.href,
    currentPageType: pageContext.pageType,
    currentReferrer: document.referrer || undefined,
    currentReferrerDomain: getReferrerDomain(document.referrer || undefined),
    currentArticleSlug: pageContext.articleSlug,
    currentCategorySlug: pageContext.categorySlug,
    currentServiceSlug: pageContext.serviceSlug,
    currentLandingSlug: pageContext.landingSlug,
    ...getUtmContext(searchParams),
    initialLandingPath: initialTouch?.pagePath,
    initialLandingUrl: initialTouch?.pageUrl,
    initialLandingType: initialTouch?.pageType,
    initialLandingArticleSlug: initialTouch?.articleSlug,
    initialLandingCategorySlug: initialTouch?.categorySlug,
    initialLandingServiceSlug: initialTouch?.serviceSlug,
    initialLandingSlug: initialTouch?.landingSlug,
    initialReferrer: initialTouch?.referrer,
    initialReferrerDomain: initialTouch?.referrerDomain,
    initialUtmSource: initialTouch?.utmSource,
    initialUtmMedium: initialTouch?.utmMedium,
    initialUtmCampaign: initialTouch?.utmCampaign,
    initialUtmTerm: initialTouch?.utmTerm,
    initialUtmContent: initialTouch?.utmContent,
    lastCtaEvent: lastCta?.eventName,
    lastCtaLabel: lastCta?.label,
    lastCtaHref: lastCta?.href,
    lastCtaLocation: lastCta?.location,
    lastCtaPagePath: lastCta?.pagePath,
    lastCtaPageType: lastCta?.pageType,
    lastCtaArticleSlug: lastCta?.articleSlug,
    lastCtaCategorySlug: lastCta?.categorySlug,
    lastCtaServiceSlug: lastCta?.serviceSlug,
    lastCtaLandingSlug: lastCta?.landingSlug,
    lastCtaCapturedAt: lastCta?.capturedAt,
  };
}
