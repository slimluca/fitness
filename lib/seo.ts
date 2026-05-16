import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  keywords = [],
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const dedupedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]));
  const baseOpenGraph = {
    title,
    description,
    url,
    siteName: siteConfig.visualBrandName,
    locale: "en_US",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
  const openGraph: NonNullable<Metadata["openGraph"]> =
    type === "article"
      ? {
          ...baseOpenGraph,
          type: "article",
          publishedTime,
          modifiedTime,
        }
      : {
          ...baseOpenGraph,
          type: "website",
        };

  return {
    title,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.coachName }],
    creator: siteConfig.coachName,
    publisher: siteConfig.name,
    keywords: dedupedKeywords,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
