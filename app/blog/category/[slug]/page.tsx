import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { AuthorBox } from "@/components/site/author-box";
import { BlogCard } from "@/components/site/blog-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CTASection } from "@/components/site/cta-section";
import { EditorialIdeaCard } from "@/components/site/editorial-idea-card";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getBlogCategoryBySlug,
  getBlogCategorySummaries,
  getEditorialIdeasByCategory,
  getBlogPostsByCategory,
  getPriorityBlogPostsForCategory,
} from "@/content";
import { normalizeCommercialLink } from "@/lib/commercial-links";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogCategorySummaries().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return buildMetadata({
    title: `${category.name} | Personal Trainer Mauritius Articles`,
    description: `${category.description} Start with ${Math.min(category.count, 3)} strong article${Math.min(category.count, 3) === 1 ? "" : "s"}, then move into private coaching, pricing, or consultation with Fitness Grand Baie.`,
    path: category.href,
    keywords: category.keywords,
  });
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.name);
  const starterPosts = getPriorityBlogPostsForCategory(category.name);
  const archivePosts = posts.filter(
    (post) => !starterPosts.some((entry) => entry.slug === post.slug),
  );
  const featuredPost = posts[0];
  const plannedIdeas = getEditorialIdeasByCategory(category.name);
  const relatedCategories = getBlogCategorySummaries()
    .filter(
      (entry) =>
        entry.slug !== category.slug &&
        category.relatedCategories.includes(entry.name),
    )
    .slice(0, 3);
  const priorityLinks = category.priorityLinks.map(normalizeCommercialLink);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category.name, href: category.href },
        ])}
      />
      <div className="space-y-24 py-8 sm:py-10">
        <section className="page-section">
          <Hero
            eyebrow="Blog category"
            title={`${category.name} articles that help you choose the right next step`}
            description={category.description}
            image={featuredPost?.featuredImage ?? "/training-session.jpeg"}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact?intent=consultation" data-track-location={`blog-category-hero:${category.slug}`}>
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <WhatsAppButton
                  size="lg"
                  label="WhatsApp Now"
                  trackLocation={`blog-category-hero:${category.slug}`}
                />
                <Button asChild size="lg" variant="ghost">
                  <Link href="/contact" data-track-location={`blog-category-hero:${category.slug}`}>
                    Request Availability
                  </Link>
                </Button>
              </div>
            }
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>{category.count} published article{category.count === 1 ? "" : "s"} in this cluster.</p>
                <p>{plannedIdeas.length} planned article brief{plannedIdeas.length === 1 ? "" : "s"} supporting future topical depth.</p>
                <p>Built for stronger internal linking, cleaner topical authority, and premium readability across Mauritius and Grand Baie search intent.</p>
                <p>If this topic matches why you are searching, use the priority service and landing-page links in this category before reading the full archive.</p>
                <p>{category.intro}</p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <AuthorBox />
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="h-full space-y-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Start here
                </p>
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    This category supports the broader Personal Trainer Mauritius growth
                    strategy with richer supporting content, clearer local-intent coverage,
                    and better routes into consultation.
                  </p>
                  <p>
                    If this topic cluster matches what you need, use the linked service
                    pages and landing pages below as the fastest route into a higher-intent
                    next step.
                  </p>
                  <p>
                    {category.intro}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      Published depth: {category.count} article{category.count === 1 ? "" : "s"}
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      Planned cluster expansion: {plannedIdeas.length} brief{plannedIdeas.length === 1 ? "" : "s"}
                    </div>
                  </div>
                  <p>
                    If this cluster reflects why you are searching, the fastest next step is
                    usually one of the priority links below rather than reading the full
                    archive before taking action.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {priorityLinks.map((link) => (
                      <Link
                        key={link.href + link.label}
                        href={link.href}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/72"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild variant="outline">
                      <Link href="/personal-trainer-mauritius">Personal Trainer Mauritius</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/personal-training">Personal Training</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/contact?intent=consultation">Book Consultation</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <div className="space-y-5">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: category.name, href: category.href },
                ]}
              />
              <SectionHeader
                eyebrow="Best place to start"
                title={`Start with these ${category.name.toLowerCase()} articles`}
                description="These are the strongest entry points in the cluster if you want the most useful context first."
              />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {starterPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Full archive"
              title={`${category.name} archive`}
              description="Explore the wider article set in this cluster once you have read the strongest entry points."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(archivePosts.length > 0 ? archivePosts : posts).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>

        {plannedIdeas.length > 0 ? (
          <section className="page-section">
            <Reveal>
              <SectionHeader
                eyebrow="Upcoming in this cluster"
                title="Editorial briefs ready for future organic growth"
                description="These polished briefs keep the content engine organised so future articles can be added without rethinking the information architecture."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {plannedIdeas.map((idea, index) => (
                <Reveal key={idea.slug} delay={index * 0.04}>
                  <EditorialIdeaCard idea={idea} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Related clusters"
              title="Keep exploring connected topics"
              description="Cross-linking between related topics strengthens organic growth and helps readers discover the coaching path that fits best."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedCategories.map((entry, index) => (
              <Reveal key={entry.slug} delay={index * 0.04}>
                <Card className="h-full space-y-4">
                  <h2 className="font-display text-3xl text-white">
                    <Link href={entry.href}>{entry.name}</Link>
                  </h2>
                  <p className="text-sm leading-7 text-white/72">{entry.description}</p>
                  <Link href={entry.href} className="text-sm font-semibold text-[color:var(--brand-gold)]">
                    Explore topic
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="From content to enquiry"
            title="Book consultation, message on WhatsApp, or request availability"
            description="Once the content answers the key questions, the next move should feel simple, premium, and easy to trust."
            actions={[
              { label: "Book Consultation", href: "/contact?intent=consultation" },
              {
                label: "WhatsApp Now",
                href: "/contact",
                variant: "outline",
                messageKey: "consultation",
              },
              { label: "Request Availability", href: "/contact", variant: "ghost" },
            ]}
          />
        </section>
      </div>
    </>
  );
}
