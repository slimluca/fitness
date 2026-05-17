import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { AuthorBox } from "@/components/site/author-box";
import { BlogCard } from "@/components/site/blog-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getBlogCategoryBySlug,
  getBlogCategorySummaries,
  getBlogPostsByCategory,
  getPriorityBlogPostsForCategory,
} from "@/content";
import { normalizeCommercialLink } from "@/lib/commercial-links";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;
export const dynamicParams = true;

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
    description: `${category.description} Start with the strongest articles in this category, then move into the service or consultation path that fits.`,
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
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Blog category"
            title={`${category.name} articles that help you choose the right next step`}
            description={category.description}
            image={featuredPost?.featuredImage ?? "/training-session.jpeg"}
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>
                  {category.count} published article{category.count === 1 ? "" : "s"} in this
                  cluster.
                </p>
                <p>
                  Built to support stronger decisions around private coaching, online
                  support, and realistic fitness progress in Mauritius.
                </p>
                <p>
                  If this topic matches why you are searching, use the priority service and
                  landing-page links in this category before you disappear into the archive.
                </p>
                <p>{category.intro}</p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <AuthorBox />
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Start here
                </p>
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    This category gives readers a clean path through the most useful
                    articles first, then into the relevant service or contact page when
                    they are ready to act.
                  </p>
                  <p>{category.intro}</p>
                  <p>
                    Published depth: {category.count} article
                    {category.count === 1 ? "" : "s"}. If this cluster reflects why you
                    are searching, the fastest next step is usually one of the priority
                    links below rather than reading everything before taking action.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {priorityLinks.map((link) => (
                      <Link
                        key={`${link.href}${link.label}`}
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
                description="These are the strongest entry points if you want the clearest context before moving into a service page or consultation."
              />
            </div>
          </Reveal>
          <div className="mt-7 grid grid-equal premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
            {starterPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>

        {archivePosts.length > 0 ? (
          <section className="page-section">
            <Reveal>
              <SectionHeader
                eyebrow="More in this topic"
                title={`${category.name} archive`}
                description="Explore the rest of the published article set in this category once you have covered the strongest entry points."
              />
            </Reveal>
            <div className="mt-7 grid grid-equal premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
              {archivePosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.04}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {relatedCategories.length > 0 ? (
          <section className="page-section">
            <Reveal>
              <SectionHeader
                eyebrow="Related clusters"
                title="Keep exploring connected topics"
                description="These related categories help readers move from one useful question into the next article or service that fits."
              />
            </Reveal>
            <div className="mt-7 responsive-card-grid sm:mt-8">
              {relatedCategories.map((entry, index) => (
                <Reveal key={entry.slug} delay={index * 0.04}>
                  <Card className="flex h-full flex-col gap-4">
                    <h2 className="font-display text-3xl text-white">
                      <Link href={entry.href}>{entry.name}</Link>
                    </h2>
                    <p className="text-sm leading-7 text-white/72">{entry.description}</p>
                    <Link
                      href={entry.href}
                      className="mt-auto text-sm font-semibold text-[color:var(--brand-gold)]"
                    >
                      Explore topic
                    </Link>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
