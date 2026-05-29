import { FrenchPageTemplate } from "@/components/site/french-page-template";
import { JsonLd } from "@/components/site/json-ld";
import { frenchHomePage } from "@/content/french-pages";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: frenchHomePage.metaTitle,
  description: frenchHomePage.metaDescription,
  path: frenchHomePage.path,
  keywords: [
    "Coach Sportif Grand Baie",
    "Coaching Prive Maurice",
    "Entrainement Personnel Maurice",
    "Salle Privee Grand Baie",
  ],
});

export default function FrenchHomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Francais", href: "/fr" },
        ])}
      />
      <FrenchPageTemplate page={frenchHomePage} />
    </>
  );
}
