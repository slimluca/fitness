import Link from "next/link";
import { ArrowRight, Clock3, MapPin, MessageCircleMore } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { BookingForm } from "@/components/site/booking-form";
import { ContactCard } from "@/components/site/contact-card";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  contactPageTestimonials,
  leadFlowCommitments,
  pageHeroAssets,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
} from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact | Private Personal Trainer in Grand Baie, Mauritius",
  description:
    "Contact Fitness by Fabrizio for private coaching in Grand Baie, Mauritius. WhatsApp-first replies, appointment-only private gym, and a direct consultation-first enquiry flow.",
  path: "/contact",
  keywords: [
    "Personal Trainer Mauritius Contact",
    "Personal Trainer Grand Baie Contact",
    "Private Gym Mauritius Contact",
  ],
});

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeService(value?: string) {
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

  return undefined;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const intent = first(params.intent);
  const defaultService = normalizeService(first(params.service));
  const formType: "consultation" | "contact" | "service-inquiry" =
    intent === "consultation"
      ? "consultation"
      : defaultService
        ? "service-inquiry"
        : "contact";

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Contact"
            title="Private coaching enquiries in Grand Baie, Mauritius"
            description="Use WhatsApp for the fastest reply or send a private enquiry through the consultation form. The studio is appointment only, based in a home residence, and not open to public walk-ins."
            image={resolveProofAssetSrc(pageHeroAssets.contact)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.contact,
              "Private contact and consultation environment in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.contact)}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href="#contact-form" data-track-location="contact-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="contact-hero" />
              </div>
            }
          />
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="grid gap-4 sm:gap-5">
              <Reveal>
                <ContactCard
                  icon={<MessageCircleMore className="h-5 w-5" />}
                  title="WhatsApp first"
                  description="If you want the fastest answer about fit, scheduling, or the best next step, WhatsApp is usually the right place to start."
                >
                  <WhatsAppButton label="WhatsApp Now" />
                </ContactCard>
              </Reveal>
              <Reveal delay={0.05}>
                <ContactCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Private location"
                  description="The coaching studio is in Grand Baie, Mauritius inside a home residence, so the contact flow stays privacy respectful from the beginning."
                >
                  <p className="text-sm text-white/70">Appointment only. No walk-ins.</p>
                </ContactCard>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactCard
                  icon={<Clock3 className="h-5 w-5" />}
                  title="Response standard"
                  description="Serious enquiries are reviewed personally with a focus on service fit, schedule, and the clearest next action."
                >
                  <p className="text-sm text-white/70">Usually within one business day.</p>
                </ContactCard>
              </Reveal>
              <Reveal delay={0.15}>
                <Card className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                    What helps the reply
                  </p>
                  <div className="space-y-3 text-sm leading-7 text-white/70">
                    {leadFlowCommitments.map((item) => (
                      <div key={item.title}>
                        <p className="font-medium text-white">{item.title}</p>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.05}>
              <div id="contact-form" className="scroll-mt-32">
                <BookingForm type={formType} defaultService={defaultService} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Trust before you enquire"
              title="Selected feedback that supports the contact decision"
              description="The strongest contact-page proof is calm, believable, and close to the enquiry action."
            />
          </Reveal>
          <div className="mt-7 sm:mt-8">
            <ReviewGrid items={contactPageTestimonials} compact />
          </div>
        </section>
      </div>
    </>
  );
}
