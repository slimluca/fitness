import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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
  landingPageTestimonials,
  pageHeroAssets,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
  siteConfig,
} from "@/content";
import { breadcrumbSchema, faqSchema, landingPageSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const slug = "personal-trainer-mauritius";

const faqs = [
  {
    question: "Is this a public gym?",
    answer:
      "No. Fitness Grand Baie operates as an appointment-only private gym in a home residence in Grand Baie, Mauritius.",
  },
  {
    question: "Why choose a private personal trainer in Mauritius?",
    answer:
      "Private coaching gives you more attention, more privacy, and a calmer environment than a busy commercial gym, which often makes consistency easier.",
  },
  {
    question: "Do you work with beginners?",
    answer:
      "Yes. The private environment is especially helpful for beginners who want to build confidence without training in a crowded public space.",
  },
  {
    question: "Do you offer online coaching in Mauritius?",
    answer:
      "Yes. Online coaching is available for Mauritius-based clients and travel-heavy clients who want structured support remotely.",
  },
];

const whoItIsFor = [
  "Residents in Mauritius looking for a private premium coaching environment",
  "Grand Baie clients who want one-to-one training instead of a public gym",
  "Busy professionals who need structure and fast communication",
  "Expats and villa guests who value privacy and a discreet training setup",
];

const nextLinks = [
  { label: "Private Personal Training", href: "/personal-training" },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export async function generateStaticParams() {
  return [{ slug }];
}

export async function generateMetadata({ params }: PageProps) {
  const current = (await params).slug;

  if (current !== slug) {
    return {};
  }

  return buildMetadata({
    title: "Personal Trainer Mauritius | Private Premium Coaching in Grand Baie",
    description:
      "Personal trainer in Mauritius for private premium coaching in Grand Baie. Appointment-only private gym in a home residence, online coaching support, and a direct consultation-first path.",
    path: "/personal-trainer-mauritius",
    keywords: [
      "Personal Trainer Mauritius",
      "Private Personal Trainer Mauritius",
      "Private Gym Mauritius",
      "Personal Trainer Grand Baie",
      "Online Personal Trainer Mauritius",
    ],
  });
}

export default async function SeoLandingPage({ params }: PageProps) {
  const current = (await params).slug;

  if (current === "personal-trainer-grand-baie") {
    redirect("/personal-trainer-mauritius");
  }

  if (current !== slug) {
    notFound();
  }

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={landingPageSchema({
          slug,
          title: "Personal Trainer Mauritius",
          metaTitle: "Personal Trainer Mauritius | Private Premium Coaching in Grand Baie",
          metaDescription:
            "Personal trainer in Mauritius for private premium coaching in Grand Baie.",
          heroTitle: "Personal Trainer Mauritius",
          heroDescription:
            "Private premium coaching in Grand Baie, Mauritius for clients who want privacy, results, and a calmer environment.",
          intro: [],
          sections: [],
          faq: faqs,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Personal Trainer Mauritius", href: "/personal-trainer-mauritius" },
        ])}
      />

      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Personal Trainer Mauritius"
            title="Private premium coaching in Mauritius, built to convert serious enquiries"
            description="This page exists for people searching for a personal trainer in Mauritius and wanting a direct answer. Fitness by Fabrizio offers appointment-only private coaching in Grand Baie, inside a home residence gym, with online coaching available for clients who want remote structure."
            image={resolveProofAssetSrc(pageHeroAssets["personal-trainer-mauritius"])}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets["personal-trainer-mauritius"],
              "Personal trainer Mauritius private coaching image in Grand Baie",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(
              pageHeroAssets["personal-trainer-mauritius"],
            )}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href={siteConfig.primaryCtaHref} data-track-location="mauritius-hero">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton size="lg" label="WhatsApp Now" trackLocation="mauritius-hero" />
              </div>
            }
          />
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <Reveal className="h-full">
              <Card className="flex h-full flex-col justify-center gap-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Why choose this service in Mauritius
                </p>
                <h2 className="font-display text-4xl text-white sm:text-5xl">
                  A more private, focused alternative to the usual gym route
                </h2>
                <p className="card-copy text-base leading-8 text-white/72">
                  The offer is built for people who want more than generic gym access.
                  They want private coaching, a premium atmosphere, and a business that
                  communicates clearly from the first message.
                </p>
                <p className="card-copy text-base leading-8 text-white/72">
                  From the first message, the service stays practical: clarify your goal,
                  choose the right coaching format, and move forward without pressure.
                </p>
              </Card>
            </Reveal>
            <Reveal className="h-full" delay={0.05}>
              <div className="grid grid-equal gap-4 sm:grid-cols-2">
                {whoItIsFor.map((item) => (
                  <Card key={item} className="flex h-full gap-3">
                    <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Best next pages"
              title="Move from broad Mauritius intent into the right action"
              description="These are the most relevant routes for visitors who start broad and then want to make a decision quickly."
            />
          </Reveal>
          <div className="mt-7 grid grid-equal gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
            {nextLinks.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.04}>
                <Card className="flex h-full items-center">
                  <Link href={item.href} className="text-sm font-semibold leading-7 text-white">
                    {item.label}
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="h-full">
              <SectionHeader
                eyebrow="Selected reviews"
                title="Proof that supports a confident enquiry"
                description="The strongest testimonials on this page should make the private environment, professionalism, and results feel credible at a glance."
              />
              <div className="mt-8">
                <ReviewGrid
                  items={landingPageTestimonials["personal-trainer-mauritius"]}
                  compact
                />
              </div>
            </Reveal>
            <Reveal className="h-full" delay={0.05}>
              <div className="flex h-full flex-col justify-center space-y-6">
                <SectionHeader
                  eyebrow="Compact FAQ"
                  title="Answer the core objections, then move forward"
                  description="The FAQ covers the questions that usually matter before enquiry."
                />
                <FAQAccordion items={faqs} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Take the next step"
            title="Book consultation or message on WhatsApp about private coaching in Mauritius"
            description="If the private coaching model feels like the right fit, move into consultation now or message on WhatsApp for a quick response."
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
