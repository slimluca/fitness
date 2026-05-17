import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { GoogleReviewSummary } from "@/components/site/google-review-summary";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
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

export default async function ReviewsPage() {
  const googleReviewFeed = await getGoogleReviewFeed();
  const hasLiveGoogleReviews =
    googleReviewFeed.averageRating !== null && googleReviewFeed.reviewCount !== null;
  const reviewItems =
    hasLiveGoogleReviews && googleReviewFeed.selectedReviews.length
      ? googleReviewFeed.selectedReviews
      : testimonials;

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Reviews"
            title="Client feedback that reinforces the private premium coaching standard"
            description="Read privacy-safe client feedback focused on training quality, consistency, confidence, and the coaching experience in Grand Baie and online."
            image={resolveProofAssetSrc(pageHeroAssets.reviews)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.reviews,
              "Review-ready private coaching environment in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.reviews)}
          />
        </section>

        {hasLiveGoogleReviews ? (
          <section className="page-section">
            <Reveal>
              <GoogleReviewSummary feed={googleReviewFeed} />
            </Reveal>
          </section>
        ) : null}

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Selected reviews"
              title="Privacy-safe testimonials with a premium presentation"
              description="Only approved testimonials or real Google review content should appear here."
            />
          </Reveal>
          <div className="mt-8">
            <ReviewGrid items={reviewItems} />
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Ready to enquire?"
            title="Use reviews to build confidence, then move into consultation"
            description="If the private coaching standard feels like the right fit, book a consultation or message on WhatsApp now."
            actions={[
              { label: "Book Consultation", href: siteConfig.primaryCtaHref },
              {
                label: "WhatsApp Now",
                href: siteConfig.availabilityCtaHref,
                variant: "outline",
                messageKey: "consultation",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
