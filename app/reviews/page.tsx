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
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
  testimonials,
} from "@/content";
import { getGoogleReviewFeed } from "@/lib/google-reviews";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reviews | Fitness by Fabrizio Private Coaching in Mauritius",
  description:
    "Read selected reviews and testimonials for Fitness by Fabrizio in Grand Baie, Mauritius. Private premium coaching in an appointment-only home-residence gym.",
  path: "/reviews",
  keywords: [
    "Personal Trainer Mauritius Reviews",
    "Private Gym Mauritius Reviews",
    "Personal Trainer Grand Baie Reviews",
  ],
});

const reviewTrustNotes = [
  {
    title: "Private by nature",
    description:
      "Many clients prefer privacy-safe proof. Reviews can be published as full names, first names, initials, or discreet labels depending on approval.",
  },
  {
    title: "Google review ready",
    description:
      "The reviews layer is built so Google Business Profile feedback can be added cleanly without changing the design or duplicating content.",
  },
  {
    title: "Relevant proof matters",
    description:
      "The most valuable reviews usually mention professionalism, privacy, coaching quality, and why the appointment-only format felt easier to trust.",
  },
];

export default function ReviewsPage() {
  const googleReviewFeed = getGoogleReviewFeed();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
        ])}
      />
      <div className="space-y-16 py-6 sm:space-y-20 sm:py-8">
        <section className="page-section">
          <Hero
            eyebrow="Reviews"
            title="Client feedback that reinforces the private premium coaching standard"
            description="This page is designed to hold both selected testimonials and future Google review sync cleanly. The goal is simple: show trust without turning the brand into a noisy testimonial wall."
            image={resolveProofAssetSrc(pageHeroAssets.reviews)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.reviews,
              "Review-ready private coaching environment in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.reviews)}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={siteConfig.primaryCtaHref} data-track-location="reviews-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="reviews-hero" />
              </div>
            }
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>
                  The most important trust signal here is not hype. It is whether the
                  feedback makes the business feel professional, private, and worth contacting.
                </p>
                <p>
                  That is why this page stays curated, compact, and ready for real Google
                  review data rather than padded with repeated quotes.
                </p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <GoogleReviewSummary feed={googleReviewFeed} />
          </Reveal>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Selected reviews"
              title="Privacy-safe testimonials with a premium presentation"
              description="These review cards are intentionally clean so the first real Google reviews or approved testimonials can be inserted quickly without redesigning the page."
            />
          </Reveal>
          <div className="mt-8">
            <ReviewGrid items={testimonials} />
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Trust notes"
              title="Why this review system is structured this way"
              description="The review experience should support the brand, not cheapen it."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviewTrustNotes.map((item, index) => (
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
          <CTASection
            eyebrow="Ready to enquire?"
            title="Use reviews to build confidence, then move into consultation"
            description="If the private coaching standard feels like the right fit, book a consultation, message on WhatsApp, or request availability now."
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
