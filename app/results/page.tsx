import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/site/cta-section";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ResultCard } from "@/components/site/result-card";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
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
      <div className="page-flow">
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
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Case-study highlights"
              title="Three proof stories with clear coaching relevance"
              description="Each story below supports the same core brand message: focused private coaching, better adherence, and a calmer environment."
            />
          </Reveal>
          <div className="mt-7 grid grid-equal premium-card-grid gap-5 lg:grid-cols-2 2xl:grid-cols-3 sm:mt-8">
            {resultStories.map((story, index) => (
              <Reveal key={story.slug} delay={index * 0.05}>
                <ResultCard item={story} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  What better conditions change
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
                  A compact results page should make progress feel believable, relevant,
                  and easy to connect with the next private coaching step.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Client outcomes"
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
            ]}
          />
        </section>
      </div>
    </>
  );
}
