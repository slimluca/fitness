import Link from "next/link";

import { CTASection } from "@/components/site/cta-section";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { ToolCard } from "@/components/site/tool-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getToolsHubSections, toolsHubCommercialLinks, siteConfig } from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free Fitness Tools | Fitness by Fabrizio Mauritius",
  description:
    "Explore premium free fitness calculators and planning tools from Fitness by Fabrizio, built to support clearer decisions around training, nutrition, progress, and coaching in Mauritius.",
  path: "/tools",
  keywords: [
    "Fitness Calculator Mauritius",
    "BMI Calculator Mauritius",
    "Calorie Calculator Mauritius",
    "Macro Calculator Mauritius",
    "Personal Trainer Mauritius",
    "Online Coaching Mauritius",
  ],
});

export default function ToolsHubPage() {
  const sections = getToolsHubSections();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
        ])}
      />
      <div className="page-flow">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.13),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]">
          <div className="hero-shell grid gap-7 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.74fr)] lg:items-center lg:gap-10 lg:py-14 xl:gap-12">
            <div className="space-y-4">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Tools", href: "/tools" },
                ]}
              />
              <Badge>Free fitness tools</Badge>
              <div className="space-y-3">
                <h1 className="max-w-[58rem] font-display text-[2.35rem] leading-[0.96] text-white sm:text-[3.4rem] lg:text-[4.35rem] xl:text-[4.85rem]">
                  Premium tools that make the site more useful without making it noisy
                </h1>
                <p className="max-w-[46rem] text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
                  These free tools are built to help with body-weight context, calories,
                  nutrition structure, training clarity, and progress tracking. They are
                  designed to feel clean, fast, and genuinely useful, not gimmicky.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:max-w-[29rem] lg:justify-self-end">
              <div className="space-y-3 text-sm leading-7 text-white/72">
                <p>
                  Use these tools for cleaner decisions, not for panic or perfection.
                  The best value usually comes from combining the estimates with real
                  habits, progress, and coaching context.
                </p>
                <p>
                  If you want a personalised plan instead of general estimates, move
                  from the tools into private personal training, online coaching, or a
                  direct consultation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {toolsHubCommercialLinks.map((link, index) => (
                  <Button
                    key={link.href}
                    asChild
                    variant={index === 0 ? "default" : index === 1 ? "outline" : "ghost"}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
              <p className="text-xs leading-6 text-white/50">
                Appointment-only private gym in Grand Baie, Mauritius. These tools are
                educational and not medical advice.
              </p>
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.slug} className="page-section">
            <SectionHeader
              eyebrow={section.title}
              title={`${section.title} tools`}
              description={section.description}
            />
            <div className="mt-7 grid grid-equal gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
              {section.tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        ))}

        <section className="page-section">
          <CTASection
            eyebrow="Use the estimate, then personalise the plan"
            title="If you want coaching built around your real numbers, start with consultation"
            description="The tools are useful on their own, but the strongest next step is still a plan built around your schedule, your training level, and your real-world goals."
            actions={[
              { label: "Book Consultation", href: siteConfig.primaryCtaHref },
              {
                label: "WhatsApp Now",
                href: siteConfig.availabilityCtaHref,
                variant: "outline",
                messageKey: "advise",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
