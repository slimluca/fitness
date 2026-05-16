"use client";

type EventPayload = Record<string, string | number | boolean | undefined>;

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
const googleAdsConversions: Partial<Record<string, string | undefined>> = {
  book_consultation_click:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_BOOK_CONSULTATION?.trim(),
  whatsapp_click:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP?.trim(),
  request_availability_click:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_REQUEST_AVAILABILITY?.trim(),
  consultation_form_submit:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONSULTATION_FORM?.trim(),
  contact_form_submit:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONTACT_FORM?.trim(),
  service_inquiry_submit:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_SERVICE_INQUIRY?.trim(),
};

const leadEvents = new Set([
  "book_consultation_click",
  "request_availability_click",
  "consultation_form_submit",
  "contact_form_submit",
  "service_inquiry_submit",
  "thank_you_view",
]);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackPageView(
  path: string,
  title?: string,
  context: EventPayload = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    ...context,
  };

  window.dataLayer?.push({
    event: "page_view",
    ...payload,
  });
  window.gtag?.("event", "page_view", payload);
  window.fbq?.("track", "PageView");
}

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer?.push({
    event: name,
    ...payload,
  });
  window.gtag?.("event", name, payload);

  if (leadEvents.has(name)) {
    window.fbq?.("track", "Lead", payload);
  }

  window.fbq?.("trackCustom", name, payload);

  const conversionLabel = googleAdsId ? googleAdsConversions[name] : undefined;

  if (conversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsId}/${conversionLabel}`,
      ...payload,
    });
  }
}
