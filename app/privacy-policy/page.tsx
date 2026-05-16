import { JsonLd } from "@/components/site/json-ld";
import { LegalPageTemplate } from "@/components/site/legal-page-template";
import { getLegalDocument } from "@/content/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const document = getLegalDocument("privacy-policy")!;

export const metadata = buildMetadata({
  title: document.title,
  description: document.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ])}
      />
      <LegalPageTemplate document={document} />
    </>
  );
}
