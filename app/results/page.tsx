import { Reveal } from "@/components/motion/reveal";
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
            languageHref="/fr/resultats"
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
          <div className="mt-7 grid premium-card-grid gap-5 lg:grid-cols-3 sm:mt-8">
            {resultStories.map((story, index) => (
              <div
                key={story.slug}
              >
                <Reveal delay={index * 0.05}>
                  <ResultCard item={story} />
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
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
      </div>
    </>
  );
}
