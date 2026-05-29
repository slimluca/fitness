import { notFound } from "next/navigation";

import { FrenchPageTemplate } from "@/components/site/french-page-template";
import { JsonLd } from "@/components/site/json-ld";
import { frenchPages, getFrenchPageBySlug } from "@/content/french-pages";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return frenchPages.map((page) => ({ slug: page.slug as string }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getFrenchPageBySlug(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [
      "Coach Sportif Grand Baie",
      "Coaching Prive Maurice",
      "Entrainement Personnel Maurice",
      "Coaching en Ligne Maurice",
    ],
  });
}

export default async function FrenchPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getFrenchPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Francais", href: "/fr" },
          { label: page.eyebrow, href: page.path },
        ])}
      />
      <FrenchPageTemplate page={page} />
    </>
  );
}
