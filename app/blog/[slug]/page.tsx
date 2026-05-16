import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthorBox } from "@/components/site/author-box";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { RelatedPosts } from "@/components/site/related-posts";
import { TableOfContents } from "@/components/site/table-of-contents";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  formatBlogDate,
  getBlogCategoryPath,
  getBlogConversionLinks,
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
  getRelatedBlogPosts,
} from "@/content";
import { normalizeCommercialLink } from "@/lib/commercial-links";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.featuredImage,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishAt,
    modifiedTime: post.publishAt,
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);
  const conversionLinks = (post.conversionLinks ?? getBlogConversionLinks(post.category)).map(
    normalizeCommercialLink,
  );
  const bestNextLink = conversionLinks[0] ?? {
    label: "Book Consultation",
    href: "/contact?intent=consultation",
  };

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={faqSchema(post.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category, href: getBlogCategoryPath(post.category) },
          { label: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <div className="page-section py-10">
        <div className="grid gap-12 xl:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <div className="space-y-5">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: post.category, href: getBlogCategoryPath(post.category) },
                  { label: post.title, href: `/blog/${post.slug}` },
                ]}
              />
              <div className="space-y-4">
                <Link
                  href={getBlogCategoryPath(post.category)}
                  className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]"
                >
                  {post.category}
                </Link>
                <h1 className="font-display text-5xl tracking-tight text-white sm:text-6xl">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-white/55">
                  <span>By Fabrizio</span>
                  <span>{formatBlogDate(post.publishAt)}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-[36px] border border-white/10">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1280px) 70vw, 100vw"
              />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                Key takeaways
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-white/72">
                {post.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>

            <Card className="space-y-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                Best next step
              </p>
              <p className="text-sm leading-7 text-white/72">
                If this topic matches your situation, move next into the page that best
                fits your goal. That usually means reviewing the relevant service, landing
                page, or contact route while the question is still clear in your mind.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <Link
                    href="/contact?intent=consultation"
                    data-track-location={`blog-article-best-next:${post.slug}`}
                  >
                    Book Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={bestNextLink.href}
                    data-track-location={`blog-article-best-next:${post.slug}`}
                  >
                    {bestNextLink.label}
                  </Link>
                </Button>
                <WhatsAppButton
                  label="WhatsApp Now"
                  trackLocation={`blog-article-best-next:${post.slug}`}
                />
              </div>
            </Card>

            <div className="space-y-14">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 space-y-5">
                  <h2 className="font-display text-4xl text-white">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-white/76">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-2 text-base leading-8 text-white/76">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                Helpful next links
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Continue into the most relevant service, landing page, or booking route
                from this topic.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {conversionLinks.map((link) => (
                  <Link
                    key={`${link.href}${link.label}`}
                    href={link.href}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/72"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={getBlogCategoryPath(post.category)}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/72"
                >
                  {post.category}
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="font-display text-4xl text-white">Article FAQ</h2>
              <FAQAccordion items={post.faq} />
            </div>

            <CTASection
              eyebrow="From article to action"
              title="Ready to discuss your goals with a private personal trainer in Mauritius?"
              description="Move from reading into a real coaching conversation with private consultation, relevant services, pricing guidance, and WhatsApp support that matches the topic you just explored."
              actions={[
                { label: "Book Consultation", href: "/contact?intent=consultation" },
                {
                  label: "WhatsApp Now",
                  href: "/contact",
                  variant: "outline",
                  messageKey: "consultation",
                },
              ]}
            />

            <div className="space-y-6">
              <h2 className="font-display text-4xl text-white">Related posts</h2>
              <RelatedPosts posts={relatedPosts} />
            </div>
          </article>

          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <AuthorBox compact />
            <TableOfContents
              items={post.sections.map((section) => ({
                id: section.id,
                title: section.title,
              }))}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
