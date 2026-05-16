import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ResultCard } from "@/components/site/result-card";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  pageHeroAssets,
  postureConfidenceTestimonial,
  privateFatLossStory,
  privateRoutineResetTestimonial,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
  posturePerformanceStory,
  villaGuestContinuityStory,
} from "@/content";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Results | Private Coaching Outcomes in Mauritius",
  description:
    "See compact result stories from Fitness by Fabrizio in Grand Baie, Mauritius, including body-composition change, posture improvement, confidence, and travel-friendly coaching support.",
  path: "/results",
  keywords: [
    "Personal Trainer Mauritius Results",
    "Private Gym Mauritius Results",
    "Personal Training Grand Baie Results",
  ],
});

const resultStories = [
  privateFatLossStory,
  posturePerformanceStory,
  villaGuestContinuityStory,
];

export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Results", href: "/results" },
        ])}
      />
      <div className="space-y-16 py-6 sm:space-y-20 sm:py-8">
        <section className="page-section">
          <Hero
            eyebrow="Results"
            title="Compact proof for clients who want real progress, not loud promises"
            description="Results at Fitness by Fabrizio are presented around visible progress, stronger routines, better posture, and more confidence in a private appointment-only coaching environment in Grand Baie, Mauritius."
            image={resolveProofAssetSrc(pageHeroAssets.results)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.results,
              "Results-ready private coaching proof at Fitness by Fabrizio",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.results)}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={siteConfig.primaryCtaHref} data-track-location="results-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="results-hero" />
                <Button asChild size="lg" variant="ghost">
                  <Link href={siteConfig.availabilityCtaHref}>Request Availability</Link>
                </Button>
              </div>
            }
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>
                  The proof on this page is structured for real case studies, real
                  reviews, and approved imagery without needing to exaggerate anything.
                </p>
                <p>
                  The strongest theme across most progress stories is simple: private
                  coaching makes consistency easier for the right client.
                </p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Case-study highlights"
              title="Three proof stories with clearer commercial relevance"
              description="Each story below supports the same core brand message: focused private coaching, better adherence, and a calmer environment."
            />
          </Reveal>
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {resultStories.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.05}>
                <ResultCard item={story} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="space-y-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  What this page should prove
                </p>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  Better results usually follow better conditions
                </h2>
                <p className="text-base leading-8 text-white/72">
                  For many clients, the biggest shift is not just the exercise plan. It
                  is the private environment, the clearer coaching attention, and the
                  reduced friction around turning up consistently.
                </p>
                <p className="text-base leading-8 text-white/72">
                  That is why this page stays compact. It should help visitors trust the
                  business quickly and then move into contact or consultation.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Selected client feedback"
                  title="Reviews that reinforce the progress story"
                  description="Reviews work best on the results page when they connect directly to confidence, consistency, and the private-gym experience."
                />
                <ReviewGrid items={[privateRoutineResetTestimonial, postureConfidenceTestimonial]} compact />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Ready for your own progress story?"
            title="Book consultation or message on WhatsApp about private coaching"
            description="If the results page feels aligned with what you want, the next step is to start a private conversation about your goals and availability."
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
