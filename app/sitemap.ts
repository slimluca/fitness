import type { MetadataRoute } from "next";

import {
  getAllTools,
  getBlogCategorySummaries,
  getPublishedBlogPosts,
  siteConfig,
} from "@/content";

export const revalidate = 3600;

type SitemapEntry = {
  route: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  lastModified?: Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapEntry[] = [
    { route: "/", priority: 1, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/personal-training", priority: 0.92, changeFrequency: "monthly" as const },
    { route: "/online-coaching", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/results", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/reviews", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.84, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.72, changeFrequency: "weekly" as const },
    { route: "/tools", priority: 0.76, changeFrequency: "monthly" as const },
    {
      route: "/personal-trainer-mauritius",
      priority: 0.94,
      changeFrequency: "monthly" as const,
    },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const toolRoutes: SitemapEntry[] = getAllTools().map((tool) => ({
    route: `/tools/${tool.slug}`,
    priority: 0.68,
    changeFrequency: "monthly" as const,
  }));

  const categoryRoutes: SitemapEntry[] = getBlogCategorySummaries().map((category) => ({
    route: category.href,
    priority: 0.66,
    changeFrequency: "weekly" as const,
  }));

  const articleRoutes: SitemapEntry[] = getPublishedBlogPosts().map((post) => ({
    route: `/blog/${post.slug}`,
    priority: 0.64,
    changeFrequency: "weekly" as const,
    lastModified: new Date(post.publishAt),
  }));

  return [...routes, ...toolRoutes, ...categoryRoutes, ...articleRoutes].map((entry) => ({
    url: `${siteConfig.domain}${entry.route}`,
    lastModified: entry.lastModified ?? new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
