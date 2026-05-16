import type { MetadataRoute } from "next";

import { getAllTools, siteConfig } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: "/", priority: 1, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/personal-training", priority: 0.92, changeFrequency: "monthly" as const },
    { route: "/online-coaching", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/results", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/reviews", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.84, changeFrequency: "monthly" as const },
    { route: "/tools", priority: 0.76, changeFrequency: "monthly" as const },
    {
      route: "/personal-trainer-mauritius",
      priority: 0.94,
      changeFrequency: "monthly" as const,
    },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const toolRoutes = getAllTools().map((tool) => ({
    route: `/tools/${tool.slug}`,
    priority: 0.68,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...toolRoutes].map((entry) => ({
    url: `${siteConfig.domain}${entry.route}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
