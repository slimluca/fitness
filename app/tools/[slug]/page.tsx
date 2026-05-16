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
import { Card } from "@/components/ui/card";
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
        <section className="page-section">
          <Card className="overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
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
                    <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                      {tool.title}
                    </h1>
                    <p className="text-measure text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
                      {tool.intro}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Why this tool helps
                </p>
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
          </Card>
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
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
