import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AuthorBox } from "@/components/site/author-box";
import { BlogHubClient } from "@/components/site/blog-hub-client";
import { CTASection } from "@/components/site/cta-section";
import { EditorialIdeaCard } from "@/components/site/editorial-idea-card";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  blogPosts,
  editorialIdeas,
  getBlogCategorySummaries,
  getFeaturedPost,
  sortBlogPosts,
} from "@/content";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Trainer Mauritius Blog | Private Coaching Advice from Grand Baie",
  description:
    "Premium fitness advice from Fitness Grand Baie covering Personal Trainer Mauritius topics, private gym benefits, weight loss, nutrition, Grand Baie lifestyle, and online coaching, with clear paths back to consultation and core services.",
  path: "/blog",
  keywords: [
    "Personal Trainer Mauritius Blog",
    "Fitness Coach Mauritius Advice",
    "Private Gym Mauritius Articles",
  ],
});

export default function BlogPage() {
  const sortedPosts = sortBlogPosts(blogPosts);
  const featuredPost = getFeaturedPost();
  const categorySummaries = getBlogCategorySummaries();
  const publishedArticleCount = sortedPosts.length;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ])}
      />
      <div className="space-y-24 py-8 sm:py-10">
        <section className="page-section">
          <Hero
            eyebrow="Editorial blog"
            title="Premium fitness advice built for rankings, trust, and better coaching decisions"
            description="The blog is structured to support organic traffic around personal training in Mauritius while guiding readers naturally toward consultation, WhatsApp, and the most relevant coaching service."
            image={featuredPost.featuredImage}
            actions={
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact?intent=consultation" data-track-location="blog-hub-hero">
                    Book Consultation
                  </Link>
                </Button>
                <WhatsAppButton
                  size="lg"
                  label="WhatsApp Now"
                  trackLocation="blog-hub-hero"
                />
                <Button asChild size="lg" variant="ghost">
                  <Link href="/contact" data-track-location="blog-hub-hero">
                    Request Availability
                  </Link>
                </Button>
              </div>
            }
            aside={
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Featured article
                </p>
                <h2 className="font-display text-3xl text-white">{featuredPost.title}</h2>
                <p className="text-sm leading-7 text-white/72">{featuredPost.excerpt}</p>
                <p className="text-sm leading-7 text-white/60">
                  {publishedArticleCount} published articles across {categorySummaries.length} topical clusters supporting Personal Trainer Mauritius, Grand Baie, private gym, beginner fitness, and online coaching search intent.
                </p>
                <p className="text-sm leading-7 text-white/60">
                  If you already know you want private coaching in Grand Baie, use the
                  service, contact, or consultation links before getting lost in the full archive.
                </p>
                <Button asChild variant="outline">
                  <Link href={`/blog/${featuredPost.slug}`}>Read featured article</Link>
                </Button>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Category pages"
              title="Topical SEO clusters designed for long-term organic growth"
              description="Each category page supports internal linking, cleaner topical structure, and a stronger editorial engine around Personal Trainer Mauritius and related local-intent keywords."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categorySummaries.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.03}>
                <Card className="h-full space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-gold)]">
                      {category.count} article{category.count === 1 ? "" : "s"}
                    </p>
                    <h2 className="font-display text-3xl text-white">
                      <Link href={category.href}>{category.name}</Link>
                    </h2>
                  </div>
                  <p className="text-sm leading-7 text-white/72">{category.description}</p>
                  <Link href={category.href} className="text-sm font-semibold text-[color:var(--brand-gold)]">
                    Explore category
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <AuthorBox />
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="space-y-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Why trust this content
                </p>
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    The blog is written to support real search intent around Personal
                    Trainer Mauritius, not to fill the site with thin content.
                  </p>
                  <p>
                    Each article is designed to improve topical depth, answer practical
                    questions, and guide readers toward the relevant service or landing
                    page without feeling pushy.
                  </p>
                  <p>
                    The commercial goal is not to overpower the content. It is to help the
                    right reader move from research into the correct service, landing page,
                    or consultation path with less friction.
                  </p>
                  <p>
                    The best business pages to pair with this hub are Personal Trainer
                    Mauritius, Personal Training, Contact, and Book Consultation.
                  </p>
                  <p>
                    The current blog now covers {publishedArticleCount} published articles,
                    making the category hubs and internal links much more useful for both
                    readers and Google.
                  </p>
                  <p>
                    The editorial system also keeps the blog AdSense-ready by preserving
                    readability, spacing, author identity, and useful structure first.
                  </p>
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
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="page-section">
          <Reveal>
            <BlogHubClient
              posts={sortedPosts}
              categories={categorySummaries.map((category) => category.name)}
            />
          </Reveal>
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Editorial pipeline"
              title="High-intent article briefs queued for future organic growth"
              description="These are structured content opportunities, not thin placeholder posts. The system is ready for future publication when each article is written to full quality."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {editorialIdeas.map((idea, index) => (
              <Reveal key={idea.slug} delay={index * 0.03}>
                <EditorialIdeaCard idea={idea} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="From content to action"
            title="Use the advice, then book a private consultation"
            description="The content is designed to be genuinely useful first, then guide readers naturally toward personal training, online coaching, and direct WhatsApp contact."
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
