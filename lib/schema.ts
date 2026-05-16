import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import type {
  BlogPost,
  FAQItem,
  LinkItem,
  SeoLandingPage,
  ServiceItem,
} from "@/content/types";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${siteConfig.domain}#business`,
    name: siteConfig.name,
    alternateName: siteConfig.visualBrandName,
    image: absoluteUrl("/training-session.jpeg"),
    logo: absoluteUrl(siteConfig.logoImage),
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    slogan: siteConfig.appointmentNotice,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grand Baie",
      addressRegion: siteConfig.region,
      addressCountry: "MU",
    },
    description: siteConfig.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "MU",
        availableLanguage: ["en"],
        url: absoluteUrl("/contact"),
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Grand Baie",
      },
      {
        "@type": "Country",
        name: "Mauritius",
      },
    ],
    keywords: siteConfig.keywords.join(", "),
    priceRange: "MUR 1,000 - MUR 2,000+",
    knowsAbout: [
      "Personal Training",
      "Private Gym Coaching",
      "Couple Training",
      "House Call Personal Training",
      "Online Coaching",
      "Fat Loss",
      "Strength Training",
      "Posture and Mobility",
    ],
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.domain}#coach`,
      name: siteConfig.coachName,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.domain}#coach`,
    name: siteConfig.coachName,
    jobTitle: "Personal Trainer in Mauritius",
    description:
      "Personal trainer at Fitness Grand Baie, an appointment-only private gym in a home residence in Grand Baie, Mauritius.",
    worksFor: {
      "@id": `${siteConfig.domain}#business`,
    },
    url: siteConfig.domain,
    image: absoluteUrl(siteConfig.logoImage),
    homeLocation: {
      "@type": "Place",
      name: "Grand Baie, Mauritius",
    },
    knowsAbout: [
      "Personal Training",
      "Private Coaching",
      "Strength Training",
      "Fat Loss",
      "Posture",
      "Biomechanics",
      "Online Coaching",
    ],
  };
}

export function serviceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.name,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@id": `${siteConfig.domain}#business`,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Grand Baie",
      },
      {
        "@type": "Country",
        name: "Mauritius",
      },
    ],
    serviceType: service.keyword,
    audience: {
      "@type": "Audience",
      audienceType: service.idealFor,
    },
    category: "Private Personal Training",
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    about: [
      {
        "@type": "Thing",
        name: post.category,
      },
      {
        "@type": "Thing",
        name: "Personal Trainer Mauritius",
      },
    ],
    author: {
      "@id": `${siteConfig.domain}#coach`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoImage),
      },
    },
    image: absoluteUrl(post.featuredImage),
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: LinkItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function landingPageSchema(page: SeoLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.metaDescription,
    url: absoluteUrl(`/${page.slug}`),
    about: [
      {
        "@type": "Thing",
        name: page.title,
      },
      {
        "@type": "Thing",
        name: "Grand Baie, Mauritius",
      },
    ],
    mainEntity: {
      "@id": `${siteConfig.domain}#business`,
    },
  };
}
