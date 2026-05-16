import { Hero } from "@/components/site/hero";
import type { LegalDocument } from "@/content/types";
import { Card } from "@/components/ui/card";

type LegalPageTemplateProps = {
  document: LegalDocument;
};

export function LegalPageTemplate({ document }: LegalPageTemplateProps) {
  return (
    <div className="page-flow">
      <section className="page-section">
        <Hero
          eyebrow="Legal"
          title={document.title}
          description={document.description}
          image="/training-session.jpeg"
        />
      </section>
      <section className="page-section">
        <div className="grid gap-6">
          <Card className="space-y-5">
            {document.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-white/72">
                {paragraph}
              </p>
            ))}
          </Card>
          {document.sections.map((section) => (
            <Card key={section.title} className="space-y-4">
              <h2 className="font-display text-4xl text-white">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-white/72">
                  {paragraph}
                </p>
              ))}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
