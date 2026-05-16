"use client";

import { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getLeadAttributionSnapshot } from "@/lib/lead-attribution";
import { trackEvent } from "@/lib/tracking";

const serviceOptions = [
  "Not sure yet",
  "Private Personal Training",
  "Online Coaching",
];

type BookingFormProps = {
  type?: "consultation" | "contact" | "service-inquiry";
  defaultService?: string;
};

const submitLabels = {
  consultation: "Book Consultation",
  contact: "Book Consultation",
  "service-inquiry": "Book Consultation",
} as const;

const formIntros = {
  consultation:
    "Share the essentials and your consultation request can be reviewed properly without a long form.",
  contact:
    "Use this private enquiry form if you want a clear reply before moving ahead with consultation or WhatsApp.",
  "service-inquiry":
    "Share your preferred coaching option and main goal so the best next step can be confirmed personally.",
} as const;

export function BookingForm({
  type = "consultation",
  defaultService,
}: BookingFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [service, setService] = useState(defaultService ?? serviceOptions[0]);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setError("");
    const payload = Object.fromEntries(formData.entries());
    const attribution = getLeadAttributionSnapshot(pathname);

    payload.service = service;
    payload.type = type;
    payload.submittedAt = new Date().toISOString();
    Object.assign(payload, attribution);

    startTransition(async () => {
      try {
        const response = await fetch("/api/inquiries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          let message = "We could not submit your enquiry right now. Please try WhatsApp.";

          try {
            const data = (await response.json()) as { error?: string; code?: string };
            if (data.error) {
              message =
                data.code === "missing_webhook"
                  ? "Lead capture is not fully configured yet. Please use WhatsApp for now."
                  : data.error;
            }
          } catch {
            // Keep the default fallback message if the response body is unavailable.
          }

          setError(message);
          trackEvent("form_submit_failed", {
            form_type: type,
            service,
            http_status: response.status,
            page_path:
              typeof attribution.currentPagePath === "string"
                ? attribution.currentPagePath
                : pathname,
            page_type:
              typeof attribution.currentPageType === "string"
                ? attribution.currentPageType
                : undefined,
            last_cta_event:
              typeof attribution.lastCtaEvent === "string"
                ? attribution.lastCtaEvent
                : undefined,
            last_cta_location:
              typeof attribution.lastCtaLocation === "string"
                ? attribution.lastCtaLocation
                : undefined,
          });
          return;
        }

        trackEvent("form_submit", {
          form_type: type,
          service,
          page_path:
            typeof attribution.currentPagePath === "string"
              ? attribution.currentPagePath
              : pathname,
          page_type:
            typeof attribution.currentPageType === "string"
              ? attribution.currentPageType
              : undefined,
          article_slug:
            typeof attribution.currentArticleSlug === "string"
              ? attribution.currentArticleSlug
              : undefined,
          service_context:
            typeof attribution.currentServiceSlug === "string"
              ? attribution.currentServiceSlug
              : undefined,
          initial_page_type:
            typeof attribution.initialLandingType === "string"
              ? attribution.initialLandingType
              : undefined,
          initial_utm_source:
            typeof attribution.initialUtmSource === "string"
              ? attribution.initialUtmSource
              : undefined,
          last_cta_event:
            typeof attribution.lastCtaEvent === "string"
              ? attribution.lastCtaEvent
              : undefined,
          last_cta_location:
            typeof attribution.lastCtaLocation === "string"
              ? attribution.lastCtaLocation
              : undefined,
        });
        trackEvent(
          type === "consultation"
            ? "consultation_form_submit"
            : type === "contact"
              ? "contact_form_submit"
              : "service_inquiry_submit",
          {
            service,
            page_path:
              typeof attribution.currentPagePath === "string"
                ? attribution.currentPagePath
                : pathname,
            page_type:
              typeof attribution.currentPageType === "string"
                ? attribution.currentPageType
                : undefined,
            article_slug:
              typeof attribution.currentArticleSlug === "string"
                ? attribution.currentArticleSlug
                : undefined,
            service_context:
              typeof attribution.currentServiceSlug === "string"
                ? attribution.currentServiceSlug
                : undefined,
            initial_page_type:
              typeof attribution.initialLandingType === "string"
                ? attribution.initialLandingType
                : undefined,
            initial_utm_source:
              typeof attribution.initialUtmSource === "string"
                ? attribution.initialUtmSource
                : undefined,
            last_cta_event:
              typeof attribution.lastCtaEvent === "string"
                ? attribution.lastCtaEvent
                : undefined,
            last_cta_location:
              typeof attribution.lastCtaLocation === "string"
                ? attribution.lastCtaLocation
                : undefined,
          },
        );
        router.push(
          `/thank-you?source=${type}&service=${encodeURIComponent(service)}`,
        );
      } catch {
        setError("We could not submit your enquiry right now. Please try WhatsApp.");
        trackEvent("form_submit_failed", {
          form_type: type,
          service,
          http_status: 0,
          page_path:
            typeof attribution.currentPagePath === "string"
              ? attribution.currentPagePath
              : pathname,
          page_type:
            typeof attribution.currentPageType === "string"
              ? attribution.currentPageType
              : undefined,
          last_cta_event:
            typeof attribution.lastCtaEvent === "string"
              ? attribution.lastCtaEvent
              : undefined,
          last_cta_location:
            typeof attribution.lastCtaLocation === "string"
              ? attribution.lastCtaLocation
              : undefined,
        });
      }
    });
  }

  return (
    <form
      action={handleSubmit}
      className="grid gap-5 rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_20px_56px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:gap-6 sm:p-6 lg:p-7"
    >
      <div className="space-y-2.5">
        <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-gold)]">
          Private enquiry
        </p>
        <p className="text-sm leading-7 text-white/72">{formIntros[type]}</p>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${type}-name`} className="text-sm font-medium leading-6 text-white/80">
            Full name
          </label>
          <Input
            id={`${type}-name`}
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-phone`} className="text-sm font-medium leading-6 text-white/80">
            Phone / WhatsApp
          </label>
          <Input
            id={`${type}-phone`}
            name="phone"
            placeholder="+230..."
            autoComplete="tel"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-email`} className="text-sm font-medium leading-6 text-white/80">
            Email
          </label>
          <Input
            id={`${type}-email`}
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-service`} className="text-sm font-medium leading-6 text-white/80">
            Preferred service
          </label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id={`${type}-service`}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor={`${type}-schedule`} className="text-sm font-medium leading-6 text-white/80">
          Preferred schedule (optional)
        </label>
        <Input
          id={`${type}-schedule`}
          name="schedule"
          placeholder="Early morning, lunch, evenings..."
          autoComplete="off"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor={`${type}-goals`} className="text-sm font-medium leading-6 text-white/80">
          Goal / message
        </label>
        <Textarea
          id={`${type}-goals`}
          name="goals"
          placeholder="Tell us what you want help with and any useful context before we reply."
          required
        />
      </div>
      {error ? (
        <div
          aria-live="assertive"
          className="space-y-3 rounded-[24px] border border-red-400/20 bg-red-500/8 p-4"
        >
          <p role="alert" className="text-sm leading-7 text-red-200">
            {error}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              label="WhatsApp Now"
              variant="outline"
              size="sm"
              trackLocation="booking-form-error"
            />
          </div>
        </div>
      ) : null}
      <div className="space-y-3">
        <Button type="submit" disabled={pending} className="w-full sm:w-auto">
          {pending ? "Sending..." : submitLabels[type]}
        </Button>
        <p className="text-sm leading-6 text-white/60">
          Most enquiries receive a reply within one business day. WhatsApp is usually the
          fastest route for time-sensitive questions, and exact residential access details
          are only shared after fit and scheduling are confirmed.
        </p>
      </div>
    </form>
  );
}
