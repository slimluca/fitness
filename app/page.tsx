import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { GoogleReviewSummary } from "@/components/site/google-review-summary";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  pageHeroAssets,
  posturePerformanceStory,
  privateFatLossStory,
  privateRoutineResetTestimonial,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
  onlineConsistencyTestimonial,
  postureConfidenceTestimonial,
} from "@/content";
import { getGoogleReviewFeed } from "@/lib/google-reviews";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Trainer Mauritius for Private Premium Coaching",
  description:
    "Private personal trainer in Grand Baie, Mauritius for appointment-only coaching in a home-residence gym, plus online coaching for clients who want structure, privacy, and results.",
  path: "/",
  keywords: [
    "Personal Trainer Mauritius",
    "Private Personal Trainer Mauritius",
    "Private Gym Mauritius",
    "Personal Training Grand Baie",
    "Online Personal Trainer Mauritius",
  ],
});

const whyChooseCards = [
  {
    title: "Private gym experience",
    description:
      "Train in a calm home-residence studio in Grand Baie instead of a busy commercial gym floor.",
  },
  {
    title: "Personalised coaching",
    description:
      "Every session is shaped around your current level, your goals, and the pace you can realistically sustain.",
  },
  {
    title: "Appointment-only focus",
    description:
      "No walk-ins, no public-gym traffic, and no wasted session time. The environment is protected and deliberate.",
  },
  {
    title: "Results-driven support",
    description:
      "Progress is built through structure, technical coaching, and direct communication that keeps momentum high.",
  },
];

const offers = [
  {
    title: "Private Personal Training",
    description:
      "One-to-one coaching inside the private studio for clients who want focused guidance, privacy, and clear progression.",
    fit: "Best for Grand Baie clients who want hands-on coaching in a premium appointment-only setting.",
    href: "/personal-training",
  },
  {
    title: "Online Coaching",
    description:
      "Remote coaching with programming, accountability, and WhatsApp support for clients who want structure from anywhere.",
    fit: "Best for travel-heavy clients, busy professionals, and Mauritius-based clients who want ongoing support remotely.",
    href: "/online-coaching",
  },
];

const resultsPreview = [
  privateFatLossStory,
  posturePerformanceStory,
];

const homepageReviews = [
  privateRoutineResetTestimonial,
  postureConfidenceTestimonial,
  onlineConsistencyTestimonial,
];

export default function HomePage() {
  const googleReviewFeed = getGoogleReviewFeed();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <div className="space-y-16 py-6 sm:space-y-20 sm:py-8">
        <section className="page-section">
          <Hero
            eyebrow="Personal Trainer Mauritius"
            title="Personal Trainer Mauritius for Private Premium Coaching"
            description="Train with Fitness by Fabrizio in an appointment-only private gym in a home residence in Grand Baie, Mauritius. The experience is direct, discreet, and built for clients who want focused coaching rather than a public commercial gym."
            image={resolveProofAssetSrc(pageHeroAssets.home)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.home,
              "Private personal training session in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.home)}
            actions={
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={siteConfig.primaryCtaHref} data-track-location="home-hero">
                      Book Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="home-hero" />
                </div>
                <p className="text-sm text-white/62">
                  Appointment-only private gym in Grand Baie, Mauritius.
                </p>
              </div>
            }
            aside={
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-gold)]">
                  Private coaching, clearly positioned
                </p>
                <div className="grid gap-3 text-sm leading-7 text-white/72">
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                    Private gym in a home residence
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                    No walk-ins or public gym traffic
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                    Personal training and online coaching
                  </div>
                </div>
                <Link
                  href="/personal-trainer-mauritius"
                  className="inline-flex text-sm font-semibold text-[color:var(--brand-gold)]"
                >
                  Explore the Mauritius coaching page
                </Link>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Why choose Fitness by Fabrizio"
              title="A premium private coaching experience without wasted motion"
              description="The offer is intentionally simple: a private environment, better coaching attention, and a faster route into the right next step."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Card className="h-full space-y-3">
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
              eyebrow="Core offers"
              title="Choose the coaching format that fits your life"
              description="The public site stays intentionally tight. The two main offers below are the clearest commercial routes for this brand."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {offers.map((offer, index) => (
              <Reveal key={offer.href} delay={index * 0.05}>
                <Card className="h-full space-y-5">
                  <div className="space-y-3">
                    <h2 className="font-display text-4xl text-white">{offer.title}</h2>
                    <p className="text-base leading-8 text-white/72">{offer.description}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                    {offer.fit}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href={offer.href}>View Service</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href={siteConfig.primaryCtaHref}>Book Consultation</Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Results preview"
              title="Real progress matters more than noisy marketing"
              description="The strongest proof on this site stays focused on measurable change, stronger routines, and the private environment that makes consistency easier."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {resultsPreview.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.04}>
                <Card className="h-full space-y-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                    {story.category}
                  </p>
                  <h2 className="font-display text-3xl text-white">{story.title}</h2>
                  <p className="text-sm leading-7 text-white/70">{story.summary}</p>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/66">
                    {story.visibleResult}
                  </div>
                  <Link href="/results" className="text-sm font-semibold text-[color:var(--brand-gold)]">
                    View results
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <GoogleReviewSummary feed={googleReviewFeed} />
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Reviews preview"
                  title="Selected client feedback"
                  description="The first live reviews should reinforce privacy, professionalism, and why this feels different from a commercial gym experience."
                />
                <ReviewGrid items={homepageReviews} compact />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/reviews">View Reviews</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href={siteConfig.primaryCtaHref}>Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Next step"
            title="Book your consultation or message on WhatsApp"
            description="If you want private premium coaching in Grand Baie, the next move is simple. Start with consultation, use WhatsApp for a quick conversation, or request availability directly."
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
