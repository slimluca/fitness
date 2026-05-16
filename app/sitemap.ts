import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: "/", priority: 1, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/personal-training", priority: 0.92, changeFrequency: "monthly" as const },
    { route: "/online-coaching", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/results", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/reviews", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.84, changeFrequency: "monthly" as const },
    {
      route: "/personal-trainer-mauritius",
      priority: 0.94,
      changeFrequency: "monthly" as const,
    },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((entry) => ({
    url: `${siteConfig.domain}${entry.route}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
