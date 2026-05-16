import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  aboutPageTestimonials,
  coachCredibility,
  pageHeroAssets,
  privateCoachingAdvantages,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
} from "@/content";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Fitness by Fabrizio | Private Personal Trainer Mauritius",
  description:
    "Meet Fabrizio and the private coaching philosophy behind Fitness Grand Baie, an appointment-only personal trainer in Grand Baie, Mauritius with a premium home-residence gym model.",
  path: "/about",
  keywords: [
    "Personal Trainer Mauritius",
    "Private Personal Trainer Mauritius",
    "Personal Trainer Grand Baie",
  ],
});

const philosophyCards = [
  {
    title: "Private by design",
    description:
      "The studio exists for clients who want calm focus, not a public gym floor, queues, or casual walk-in traffic.",
  },
  {
    title: "Technical and practical",
    description:
      "Coaching is built around movement quality, clear progression, and standards that hold up in real life.",
  },
  {
    title: "Premium without noise",
    description:
      "The goal is not to impress with clutter. It is to create a high-trust environment where clients can train well and stay consistent.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="About"
            title="A private coaching brand built for focus, privacy, and better adherence"
            description="Fitness by Fabrizio is the visible brand identity behind Fitness Grand Baie. The coaching model is intentionally simple: premium private training in Grand Baie, Mauritius for clients who want better coaching attention than a public commercial gym can usually offer."
            image={resolveProofAssetSrc(pageHeroAssets.about)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.about,
              "Trainer portrait placeholder for Fitness by Fabrizio in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.about)}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href={siteConfig.primaryCtaHref} data-track-location="about-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="about-hero" />
              </div>
            }
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-gold)]">
                  Fabrizio
                </p>
                <p>
                  The coaching style is calm, premium, and direct. It is designed for
                  people who want real structure, privacy, and a more personal standard of
                  coaching.
                </p>
                <p>
                  The studio is appointment only, based in a home residence in Grand
                  Baie, and positioned deliberately as an alternative to a public gym.
                </p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Card className="space-y-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Brand story
                </p>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  Why private training works better for the right client
                </h2>
                  <p className="card-copy text-base leading-8 text-white/72">
                  Many people do not need a bigger gym. They need a better environment.
                  Fitness Grand Baie is built around clients who want privacy, professional
                  guidance, and a cleaner coaching experience from the first enquiry.
                </p>
                  <p className="card-copy text-base leading-8 text-white/72">
                  That is why the business is appointment only, why the studio operates
                  from a home residence, and why the whole journey is built to feel more
                  personal than a public membership gym.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="grid gap-5">
                {philosophyCards.map((item) => (
                  <Card key={item.title} className="flex h-full flex-col gap-3">
                    <h3 className="font-display text-3xl text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-white/70">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Why this model works"
              title="Private coaching removes the friction that slows most people down"
              description="A premium private gym experience is not about exclusivity for its own sake. It is about creating a better training environment."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {privateCoachingAdvantages.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Card className="flex h-full flex-col gap-3">
                  <h2 className="font-display text-3xl text-white">{item.title}</h2>
                  <p className="text-sm leading-7 text-white/70">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Credibility"
              title="A compact authority story with room for real assets"
              description="The site is prepared for real portraits, credentials, and approved proof without needing to rely on filler or overbuilt pages."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coachCredibility.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Card className="flex h-full flex-col gap-3">
                  <h2 className="font-display text-3xl text-white">{item.title}</h2>
                  <p className="text-sm leading-7 text-white/70">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Client reassurance"
              title="Selected proof that supports the brand story"
              description="About-page reviews should reassure serious visitors that the professionalism and private environment feel strong in practice, not just in the copy."
            />
          </Reveal>
          <div className="mt-8">
            <ReviewGrid items={aboutPageTestimonials} compact />
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Work together"
            title="If the private coaching model fits, start with consultation"
            description="Tell us your goals, your schedule, and whether private personal training or online coaching feels like the better fit."
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
    </>
  );
}
