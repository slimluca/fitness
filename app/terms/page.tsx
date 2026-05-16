import { JsonLd } from "@/components/site/json-ld";
import { LegalPageTemplate } from "@/components/site/legal-page-template";
import { getLegalDocument } from "@/content/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const document = getLegalDocument("terms")!;

export const metadata = buildMetadata({
  title: document.title,
  description: document.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Terms", href: "/terms" },
        ])}
      />
      <LegalPageTemplate document={document} />
    </>
  );
}
