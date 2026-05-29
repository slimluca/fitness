import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewGrid } from "@/components/site/review-grid";
import { SectionHeader } from "@/components/site/section-header";
import { Card } from "@/components/ui/card";
import {
  pageHeroAssets,
  postureConfidenceTestimonial,
  pricingItems,
  privateFatLossStory,
  privateRoutineResetTestimonial,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
} from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Personal Training | Personal Trainer Mauritius in Grand Baie",
  description:
    "Private personal training in Grand Baie, Mauritius inside an appointment-only home-residence gym. One-to-one coaching for clients who want privacy, precision, and results.",
  path: "/personal-training",
  keywords: [
    "Private Personal Trainer Mauritius",
    "Personal Training Grand Baie",
    "Private Gym Mauritius",
    "Personal Trainer Mauritius",
  ],
});

const benefits = [
  {
    title: "One-to-one attention",
    description:
      "Every session is built around your current level, your goal, and the technical detail that usually gets lost in busy gyms.",
  },
  {
    title: "Private environment",
    description:
      "The studio is appointment only and located in a home residence, which makes the whole experience calmer and more focused.",
  },
  {
    title: "Better consistency",
    description:
      "A protected schedule and direct coaching support make it easier to show up, progress, and stay committed.",
  },
  {
    title: "Clear progression",
    description:
      "Whether the goal is fat loss, posture, strength, or confidence, the process stays structured and practical.",
  },
];

const expectations = [
  "A private coaching environment, not a public membership gym",
  "A session structure built around movement quality and progression",
  "Direct WhatsApp support for simple follow-up and scheduling clarity",
  "Appointment-only arrival details shared after confirmation",
];

const faqs = [
  {
    question: "Is this a public gym?",
    answer:
      "No. This is an appointment-only private gym in a home residence in Grand Baie, Mauritius. It is not open for public walk-ins.",
  },
  {
    question: "Who is private personal training best for?",
    answer:
      "It is ideal for clients who want focused one-to-one coaching, more privacy, better technical attention, and a premium alternative to crowded commercial gyms.",
  },
  {
    question: "Do beginners fit this service?",
    answer:
      "Yes. In fact, many beginners progress faster in a private setting because the environment feels calmer, less intimidating, and easier to trust.",
  },
  {
    question: "How do I start?",
    answer:
      "The best next step is to book a consultation or message on WhatsApp so availability, goals, and service fit can be confirmed personally.",
  },
];

const teaserPricing = pricingItems.filter((item) =>
  ["one-on-one-single", "one-on-one-8", "one-on-one-12"].includes(item.slug),
);

const testimonials = [privateRoutineResetTestimonial, postureConfidenceTestimonial];

export default function PersonalTrainingPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Private Personal Training",
          description:
            "One-to-one private personal training in an appointment-only home-residence gym in Grand Baie, Mauritius.",
          provider: {
            "@id": `${siteConfig.domain}#business`,
          },
          areaServed: ["Grand Baie", "Mauritius"],
          url: `${siteConfig.domain}/personal-training`,
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Personal Training", href: "/personal-training" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Private personal training"
            title="Private personal training in Grand Baie for clients who want real focus"
            description="This is the core offer behind Fitness by Fabrizio: one-to-one private coaching in an appointment-only home-residence gym in Grand Baie, Mauritius for clients who want privacy, structure, and better results than a public commercial gym experience."
            image={resolveProofAssetSrc(pageHeroAssets["personal-training"])}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets["personal-training"],
              "Private personal training session in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(
              pageHeroAssets["personal-training"],
            )}
            languageHref="/fr/entrainement-personnel"
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Why it works"
              title="A stronger personal-training experience starts with better conditions"
              description="Private coaching works well because the environment, the attention, and the scheduling all support the goal instead of getting in the way."
            />
          </Reveal>
          <div className="mt-7 compact-card-grid sm:mt-8">
            {benefits.map((item, index) => (
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
          <div className="balanced-split grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  What clients can expect
                </p>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  Clear coaching, protected privacy, and a premium standard
                </h2>
                <div className="space-y-3 text-sm leading-7 text-white/70">
                  {expectations.map((item) => (
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
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Pricing teaser
                </p>
                <div className="grid gap-4">
                  {teaserPricing.map((item) => (
                    <div
                      key={item.slug}
                      className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-display text-3xl text-white">{item.name}</p>
                          <p className="mt-2 text-sm leading-7 text-white/70">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-4xl text-white">MUR {item.amount}</p>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                            {item.unit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-7 text-white/60">
                  Final fit, schedule, and the best package are confirmed during the
                  consultation stage, not pushed through a public checkout flow.
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Results snapshot
                </p>
                <h2 className="font-display text-4xl text-white">{privateFatLossStory.title}</h2>
                <p className="text-sm leading-7 text-white/70">{privateFatLossStory.summary}</p>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                  {privateFatLossStory.visibleResult}
                </div>
                <Link
                  href="/results"
                  className="mt-auto text-sm font-semibold text-[color:var(--brand-gold)]"
                >
                  View full results
                </Link>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Selected reviews"
                  title="Client feedback that supports the private training offer"
                  description="These reviews reinforce the private environment, coaching quality, and confidence visitors need before making an enquiry."
                />
                <ReviewGrid items={testimonials} compact />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Short answers before you enquire"
              description="The page stays compact, so these are the main questions that usually matter before booking."
            />
          </Reveal>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>
    </>
  );
}
