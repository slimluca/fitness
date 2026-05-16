import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  onlineConsistencyTestimonial,
  pageHeroAssets,
  privateRoutineResetTestimonial,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
} from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Coaching | Online Personal Trainer Mauritius",
  description:
    "Online personal trainer in Mauritius with structured coaching, monthly programming, accountability, and WhatsApp support for clients who want professional guidance remotely.",
  path: "/online-coaching",
  keywords: [
    "Online Personal Trainer Mauritius",
    "Online Coaching Mauritius",
    "Fitness Coach Mauritius",
    "Personal Trainer Mauritius",
  ],
});

const coachingIncludes = [
  {
    title: "Custom programming",
    description:
      "A training plan built around your goals, equipment access, schedule, and current level.",
  },
  {
    title: "Accountability",
    description:
      "Regular check-ins and WhatsApp support keep the coaching personal instead of remote in name only.",
  },
  {
    title: "Remote flexibility",
    description:
      "Ideal for Mauritius-based clients who travel, busy professionals, or anyone who needs structure without studio sessions.",
  },
  {
    title: "Ongoing adjustment",
    description:
      "The plan evolves as your routine, recovery, and progress change across the month.",
  },
];

const whoItFits = [
  "Clients who travel often but want consistent guidance",
  "Mauritius residents who prefer remote structure and accountability",
  "Busy professionals who need clarity rather than gym-floor guesswork",
  "Anyone who wants WhatsApp-first support without needing in-person sessions",
];

const faqs = [
  {
    question: "Who is online coaching best for?",
    answer:
      "It is best for clients who want structure, accountability, and professional programming but do not need every session delivered in person.",
  },
  {
    question: "Is online coaching still personalised?",
    answer:
      "Yes. The coaching is shaped around your goal, schedule, equipment, and feedback, with WhatsApp used to keep communication direct and practical.",
  },
  {
    question: "Can this work if I travel often?",
    answer:
      "Yes. This is one of the strongest fits for online coaching because the structure stays with you even when the setting changes.",
  },
  {
    question: "How do I start?",
    answer:
      "Start with consultation or WhatsApp so the right remote support structure can be confirmed before the first coaching month begins.",
  },
];

export default function OnlineCoachingPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Online Coaching",
          description:
            "Remote fitness coaching with programming, accountability, and WhatsApp support for Mauritius clients and travel-heavy professionals.",
          provider: {
            "@id": `${siteConfig.domain}#business`,
          },
          areaServed: ["Mauritius", "Remote"],
          url: `${siteConfig.domain}/online-coaching`,
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Online Coaching", href: "/online-coaching" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Online coaching"
            title="Online coaching for clients who want structure without losing flexibility"
            description="Fitness by Fabrizio offers online coaching for Mauritius-based clients and travel-heavy professionals who want clear programming, accountability, and direct WhatsApp support without needing to train inside the studio every week."
            image={resolveProofAssetSrc(pageHeroAssets["online-coaching"])}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets["online-coaching"],
              "Online coaching support from Fitness by Fabrizio in Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(
              pageHeroAssets["online-coaching"],
            )}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href={siteConfig.primaryCtaHref} data-track-location="online-coaching-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton
                  size="lg"
                  label="WhatsApp Now"
                  trackLocation="online-coaching-hero"
                  messageKey="online"
                />
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="What is included"
              title="Remote coaching that still feels direct and personal"
              description="The online offer stays compact on purpose. What matters most is clarity, accountability, and a plan you can actually follow."
            />
          </Reveal>
          <div className="mt-7 grid grid-equal gap-5 md:grid-cols-2 xl:grid-cols-4 sm:mt-8">
            {coachingIncludes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Card className="flex h-full flex-col gap-3">
                  <h2 className="font-display text-[1.8rem] leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-7 text-white/70">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal>
              <Card className="flex h-full flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Who it is for
                </p>
                <div className="space-y-3 text-sm leading-7 text-white/70">
                  {whoItFits.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="flex h-full flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Why clients choose it
                </p>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  Better support without losing freedom
                </h2>
                <p className="text-base leading-8 text-white/72">
                  Online coaching works best when it replaces confusion with structure.
                  You know what to do, you have a real person to check in with, and the
                  plan stays aligned with real life.
                </p>
                <p className="text-base leading-8 text-white/72">
                  For clients in Mauritius who travel often, split time between locations,
                  or simply prefer remote guidance, this is the cleanest way to keep
                  standards high without relying on guesswork.
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Selected proof"
              title="Remote coaching still needs believable proof"
              description="The strongest reviews for online coaching usually speak to accountability, travel continuity, and how personal the support feels."
            />
          </Reveal>
          <div className="mt-8">
            <ReviewGrid items={[onlineConsistencyTestimonial, privateRoutineResetTestimonial]} compact />
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Short answers before you enquire"
              description="These are the main questions that usually matter before starting remote coaching."
            />
          </Reveal>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Ready for remote support?"
            title="Book consultation or message on WhatsApp about online coaching"
            description="If online coaching feels like the right fit, the next step is to clarify your goal, schedule, and support needs."
            actions={[
              { label: "Book Consultation", href: siteConfig.primaryCtaHref },
              {
                label: "WhatsApp Now",
                href: siteConfig.availabilityCtaHref,
                variant: "outline",
                messageKey: "online",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
