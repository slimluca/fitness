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

const experienceOptions = [
  "Complete beginner",
  "Some experience",
  "Intermediate",
  "Advanced",
];

const contactPreferenceOptions = [
  "WhatsApp preferred",
  "Email preferred",
  "Either is fine",
];

const clientContextOptions = [
  "Resident in Mauritius",
  "Expat in Mauritius",
  "Tourist or villa guest",
  "Prefer to explain in notes",
];

const startTimelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "This month",
  "Just researching for now",
];

type BookingFormProps = {
  type?: "consultation" | "contact" | "service-inquiry";
  defaultService?: string;
};

const submitLabels = {
  consultation: "Book Consultation",
  contact: "Request Availability",
  "service-inquiry": "Request Availability",
} as const;

const formIntros = {
  consultation:
    "Share your goals, preferred coaching format, and schedule so your consultation request can be reviewed properly from the start.",
  contact:
    "Use this private enquiry form if you want to explain your situation in more detail before moving ahead with consultation or WhatsApp.",
  "service-inquiry":
    "Request availability for your preferred coaching option and we will confirm fit, scheduling, and the best next step personally.",
} as const;

export function BookingForm({
  type = "consultation",
  defaultService,
}: BookingFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [service, setService] = useState(defaultService ?? serviceOptions[0]);
  const [experience, setExperience] = useState(experienceOptions[0]);
  const [contactPreference, setContactPreference] = useState(contactPreferenceOptions[0]);
  const [clientContext, setClientContext] = useState(clientContextOptions[0]);
  const [startTimeline, setStartTimeline] = useState(startTimelineOptions[0]);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setError("");
    const payload = Object.fromEntries(formData.entries());
    const attribution = getLeadAttributionSnapshot(pathname);

    payload.service = service;
    payload.experience = experience;
    payload.contactPreference = contactPreference;
    payload.clientContext = clientContext;
    payload.startTimeline = startTimeline;
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
            contact_preference: contactPreference,
            client_context: clientContext,
            start_timeline: startTimeline,
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
          contact_preference: contactPreference,
          client_context: clientContext,
          start_timeline: startTimeline,
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
            contact_preference: contactPreference,
            client_context: clientContext,
            start_timeline: startTimeline,
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
          contact_preference: contactPreference,
          client_context: clientContext,
          start_timeline: startTimeline,
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
      className="grid gap-5 rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
          Private enquiry form
        </p>
        <p className="text-sm leading-7 text-white/72">{formIntros[type]}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${type}-name`} className="text-sm text-white/72">
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
          <label htmlFor={`${type}-phone`} className="text-sm text-white/72">
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
          <label htmlFor={`${type}-email`} className="text-sm text-white/72">
            Email (optional)
          </label>
          <Input
            id={`${type}-email`}
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-service`} className="text-sm text-white/72">
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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-2">
          <label htmlFor={`${type}-experience`} className="text-sm text-white/72">
            Experience level
          </label>
          <Select value={experience} onValueChange={setExperience}>
            <SelectTrigger id={`${type}-experience`}>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {experienceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-client-context`} className="text-sm text-white/72">
            Client context
          </label>
          <Select value={clientContext} onValueChange={setClientContext}>
            <SelectTrigger id={`${type}-client-context`}>
              <SelectValue placeholder="Choose client context" />
            </SelectTrigger>
            <SelectContent>
              {clientContextOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-schedule`} className="text-sm text-white/72">
            Preferred schedule
          </label>
          <Input
            id={`${type}-schedule`}
            name="schedule"
            placeholder="Early morning, lunch, evenings..."
            autoComplete="off"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-contact-preference`} className="text-sm text-white/72">
            Preferred reply method
          </label>
          <Select value={contactPreference} onValueChange={setContactPreference}>
            <SelectTrigger id={`${type}-contact-preference`}>
              <SelectValue placeholder="Choose contact preference" />
            </SelectTrigger>
            <SelectContent>
              {contactPreferenceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${type}-start-timeline`} className="text-sm text-white/72">
            Preferred start timing
          </label>
          <Select value={startTimeline} onValueChange={setStartTimeline}>
            <SelectTrigger id={`${type}-start-timeline`}>
              <SelectValue placeholder="Choose start timing" />
            </SelectTrigger>
            <SelectContent>
              {startTimelineOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor={`${type}-location-context`} className="text-sm text-white/72">
            Area or stay location (optional)
          </label>
          <Input
            id={`${type}-location-context`}
            name="locationContext"
            placeholder="Grand Baie, Pereybere, villa stay, or online only..."
            autoComplete="off"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor={`${type}-goals`} className="text-sm text-white/72">
          Goals
        </label>
        <Textarea
          id={`${type}-goals`}
          name="goals"
          placeholder="Tell us about your goals, current routine, and what kind of support you want."
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor={`${type}-limitations`} className="text-sm text-white/72">
          Injuries or limitations (optional)
        </label>
        <Textarea
          id={`${type}-limitations`}
          name="limitations"
          placeholder="Share anything we should know to tailor the coaching safely."
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
          <div className="flex flex-col gap-3 sm:flex-row">
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
        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : submitLabels[type]}
        </Button>
        <p className="text-sm leading-6 text-white/60">
          Most enquiries receive a reply within one business day. WhatsApp is usually the
          fastest route for urgent availability questions, and exact residential access
          details are only shared after fit and scheduling are confirmed.
        </p>
      </div>
    </form>
  );
}
