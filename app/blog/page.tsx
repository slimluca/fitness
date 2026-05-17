import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AuthorBox } from "@/components/site/author-box";
import { BlogHubClient } from "@/components/site/blog-hub-client";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getBlogCategorySummaries,
  getFeaturedPost,
  getPublishedBlogPosts,
} from "@/content";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Fitness by Fabrizio Journal | Personal Trainer Mauritius Advice",
  description:
    "Selective fitness articles from Fitness by Fabrizio covering Personal Trainer Mauritius topics, private coaching, online coaching, weight loss, and beginner fitness in a premium, practical format.",
  path: "/blog",
  keywords: [
    "Personal Trainer Mauritius Blog",
    "Fitness Coach Mauritius Advice",
    "Private Gym Mauritius Articles",
  ],
});

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  const featuredPost = getFeaturedPost();
  const categorySummaries = getBlogCategorySummaries();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Journal"
            title="Useful fitness advice for Mauritius readers who want better coaching decisions"
            description="A curated resource for people comparing private coaching, online support, weight loss strategy, and beginner-friendly training in Mauritius. The focus is clarity, useful guidance, and confident next steps."
            image={featuredPost?.featuredImage ?? "/training-session.jpeg"}
            aside={
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Featured article
                </p>
                <h2 className="font-display text-3xl text-white">
                  {featuredPost?.title ?? "Premium coaching advice that stays practical"}
                </h2>
                <p className="text-sm leading-7 text-white/72">
                  {featuredPost?.excerpt ??
                    "Start with the strongest article, then move naturally into the service or contact page that fits your goal."}
                </p>
                <p className="text-sm leading-7 text-white/60">
                  {posts.length} published articles across {categorySummaries.length} focused
                  categories supporting Personal Trainer Mauritius, private gym, online
                  coaching, weight loss, and Grand Baie lifestyle search intent.
                </p>
                <p className="text-sm leading-7 text-white/60">
                  If you already know you want private coaching in Grand Baie, go straight
                  to Personal Training, Online Coaching, or Contact instead of reading the
                  full archive first.
                </p>
                {featuredPost ? (
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex text-sm font-semibold text-[color:var(--brand-gold)]"
                  >
                    Read featured article
                  </Link>
                ) : null}
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Reveal>
            <SectionHeader
              eyebrow="Browse by topic"
              title="Curated article groups built around real coaching questions"
              description="Each category helps readers find the right article quickly, then move naturally into the service or next step that fits."
            />
          </Reveal>
          <div className="mt-7 grid grid-equal premium-card-grid gap-5 md:grid-cols-2 xl:grid-cols-3 sm:mt-8">
            {categorySummaries.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.03}>
                <Card className="flex h-full flex-col gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-gold)]">
                      {category.count} article{category.count === 1 ? "" : "s"}
                    </p>
                    <h2 className="font-display text-3xl text-white">
                      <Link href={category.href}>{category.name}</Link>
                    </h2>
                  </div>
                  <p className="text-sm leading-7 text-white/72">{category.description}</p>
                  <Link
                    href={category.href}
                    className="mt-auto text-sm font-semibold text-[color:var(--brand-gold)]"
                  >
                    Explore category
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="balanced-split grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <AuthorBox />
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                  Why this journal exists
                </p>
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    These articles are written for people who are actively comparing
                    coaching options, trying to lose fat more intelligently, or starting
                    training without wanting generic gym advice.
                  </p>
                  <p>
                    The goal is to answer practical questions clearly, add useful local
                    context where it matters, and give readers a cleaner path toward the
                    right service rather than burying them in volume.
                  </p>
                  <p>
                    The strongest next pages are Personal Trainer Mauritius, Personal
                    Training, Online Coaching, and Contact.
                  </p>
                  <p>
                    The blog stays selective so it supports trust without making the main
                    site feel bloated or noisy.
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
              posts={posts}
              categories={categorySummaries.map((category) => category.name)}
            />
          </Reveal>
        </section>
      </div>
    </>
  );
}
