import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  bookingJourney,
  pageHeroAssets,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
} from "@/content";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Thank You | Fitness by Fabrizio",
  description:
    "Thank-you page for private coaching enquiries at Fitness by Fabrizio with clear next steps and WhatsApp follow-up guidance.",
  path: "/thank-you",
  noIndex: true,
});

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeServiceLabel(value?: string) {
  if (!value) {
    return undefined;
  }

  const lowered = value.toLowerCase();

  if (lowered.includes("online")) {
    return "Online Coaching";
  }

  if (lowered.includes("private") || lowered.includes("personal")) {
    return "Private Personal Training";
  }

  return value;
}

export default async function ThankYouPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const source = first(params.source) ?? "contact";
  const service = normalizeServiceLabel(first(params.service));
  const followUpMessage = service
    ? `Hello, I submitted a ${source} enquiry for ${service} and would like to confirm the next step.`
    : "Hello, I submitted an enquiry and would like to confirm the next step.";

  const serviceLink =
    service === "Online Coaching" ? "/online-coaching" : "/personal-training";

  return (
    <div className="page-flow">
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Thank You", href: "/thank-you" },
        ])}
      />

      <section className="page-section">
        <Hero
          eyebrow="Thank you"
          title="Your enquiry is in and the next step is clear"
          description="Expect a personal reply within one business day. If timing matters, WhatsApp is still the fastest route for confirming availability, service fit, and the right next step."
          image={resolveProofAssetSrc(pageHeroAssets["book-consultation"])}
          imageAlt={resolveProofAssetAlt(
            pageHeroAssets["book-consultation"],
            "Private consultation follow-up at Fitness by Fabrizio",
          )}
          imageObjectPosition={resolveProofAssetObjectPosition(
            pageHeroAssets["book-consultation"],
          )}
          aside={
            <div className="space-y-5">
              <div className="inline-flex rounded-full border border-[color:var(--brand-gold)]/30 bg-[color:var(--brand-gold)]/10 p-4">
                <CheckCircle2 className="h-8 w-8 text-[color:var(--brand-gold)]" />
              </div>
              <div className="space-y-2 text-sm leading-7 text-white/72">
                <p>Source: {source}</p>
                {service ? <p>Service: {service}</p> : null}
                <p>Appointment-only private gym in Grand Baie, Mauritius.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild>
                  <a
                    href={buildWhatsAppLink(siteConfig.phone, followUpMessage)}
                    target="_blank"
                    rel="noreferrer"
                    data-track-event="whatsapp_click"
                    data-track-label="Confirm on WhatsApp"
                    data-track-location="thank-you"
                  >
                    Confirm on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href={serviceLink}>Review service</Link>
                </Button>
              </div>
            </div>
          }
        />
      </section>

      <section className="page-section">
        <div className="grid gap-6 lg:grid-cols-3">
          {bookingJourney.map((step) => (
            <Card key={step.title} className="flex h-full flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                {step.title}
              </p>
              <p className="text-sm leading-7 text-white/70">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex h-full flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              While you wait
            </p>
            <p className="text-sm leading-7 text-white/70">
              Review the main service page so the follow-up can move faster once the reply arrives.
            </p>
            <Button asChild variant="outline">
              <Link href={serviceLink}>View service</Link>
            </Button>
          </Card>
          <Card className="flex h-full flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              Need speed?
            </p>
            <p className="text-sm leading-7 text-white/70">
              Use WhatsApp if availability is your main question or if the enquiry is time sensitive.
            </p>
            <Button asChild variant="outline">
              <a
                href={buildWhatsAppLink(siteConfig.phone, followUpMessage)}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Now
              </a>
            </Button>
          </Card>
          <Card className="flex h-full flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              More proof
            </p>
            <p className="text-sm leading-7 text-white/70">
              If you want extra reassurance before the reply lands, review the Results and Reviews pages.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild variant="outline">
                <Link href="/results">View Results</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/reviews">Read Reviews</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="page-section">
        <CTASection
          eyebrow="Need to keep moving?"
          title="Use WhatsApp, request availability, or return to the main service page"
          description="The post-enquiry journey should still feel premium, private, and easy to trust."
          actions={[
            { label: "Book Consultation", href: siteConfig.primaryCtaHref },
            {
              label: "WhatsApp Now",
              href: siteConfig.availabilityCtaHref,
              variant: "outline",
              messageKey: "consultation",
            },
            {
              label: "Request Availability",
              href: siteConfig.availabilityCtaHref,
              variant: "ghost",
            },
          ]}
        />
      </section>
    </div>
  );
}
