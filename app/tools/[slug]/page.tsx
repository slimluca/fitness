import Link from "next/link";
import { notFound } from "next/navigation";

import { ToolInterface } from "@/components/site/tool-interface";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { ToolCard } from "@/components/site/tool-card";
import { ToolIcon } from "@/components/site/tool-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllTools, getRelatedTools, getToolBySlug, siteConfig, toolGroups } from "@/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, toolSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return buildMetadata({
    title: tool.metaTitle,
    description: tool.metaDescription,
    path: `/tools/${tool.slug}`,
    keywords: tool.keywords,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const group = toolGroups.find((entry) => entry.slug === tool.group);
  const relatedTools = getRelatedTools(tool.slug);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={toolSchema(tool)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: tool.title, href: `/tools/${tool.slug}` },
        ])}
      />
      {tool.faq?.length ? <JsonLd data={faqSchema(tool.faq)} /> : null}

      <div className="page-flow">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.13),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]">
          <div className="hero-shell grid gap-6 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(300px,0.82fr)] lg:items-end lg:gap-10 lg:py-16">
            <div className="space-y-4">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Tools", href: "/tools" },
                  { label: tool.title, href: `/tools/${tool.slug}` },
                ]}
              />
              <Badge>{group?.title ?? "Tool"}</Badge>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[color:var(--brand-gold)]">
                  <ToolIcon icon={tool.icon} />
                </div>
                <div className="space-y-3">
                  <h1 className="max-w-[56rem] font-display text-[2.35rem] leading-[0.96] text-white sm:text-[3.35rem] lg:text-[4.3rem] xl:text-[4.75rem]">
                    {tool.title}
                  </h1>
                  <p className="max-w-[46rem] text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
                    {tool.intro}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2 text-sm leading-7 text-white/72">
                {tool.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {tool.commercialLinks.map((link, index) => (
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
                Built for helpful estimates and cleaner decision-making. Not medical
                advice and not a replacement for personalised assessment.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <ToolInterface tool={tool} />
        </section>

        <section className="page-section">
          <SectionHeader
            eyebrow="Related tools"
            title="Keep the next step useful and connected"
            description="These related tools help visitors go deeper without feeling like they need to leave the commercial journey behind."
          />
          <div className="mt-7 grid grid-equal gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
            {relatedTools.map((relatedTool) => (
              <ToolCard key={relatedTool.slug} tool={relatedTool} />
            ))}
          </div>
        </section>

        {tool.faq?.length ? (
          <section className="page-section">
            <SectionHeader
              eyebrow="FAQ"
              title="Short answers before you overthink the result"
              description="These are the main questions that usually matter after using the tool."
            />
            <div className="mt-8">
              <FAQAccordion items={tool.faq} />
            </div>
          </section>
        ) : null}

        <section className="page-section">
          <CTASection
            eyebrow="Want a personalised plan from this result?"
            title="Use the tool result as a starting point, then move into coaching"
            description="If you want a private training plan or cleaner online coaching structure based on your real numbers, the next step is consultation or a quick WhatsApp conversation."
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
