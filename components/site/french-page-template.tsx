import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { BookingForm } from "@/components/site/booking-form";
import { Hero } from "@/components/site/hero";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FrenchPage } from "@/content/french-pages";
import {
  pageHeroAssets,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
} from "@/content/proof";

type FrenchPageTemplateProps = {
  page: FrenchPage;
};

export function FrenchPageTemplate({ page }: FrenchPageTemplateProps) {
  const heroAsset = pageHeroAssets[page.heroImageKey];

  return (
    <div className="page-flow">
      <section className="page-section">
        <Hero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          image={resolveProofAssetSrc(heroAsset)}
          imageAlt={resolveProofAssetAlt(
            heroAsset,
            `${page.title} | Fitness by Fabrizio Grand Baie`,
          )}
          imageObjectPosition={resolveProofAssetObjectPosition(heroAsset)}
          languageHref={page.englishPath}
          languageLabel="View in English"
        />
      </section>

      {page.sections.map((section, sectionIndex) => (
        <section key={`${page.path}-${section.eyebrow}`} className="page-section">
          <Reveal delay={sectionIndex * 0.03}>
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
          </Reveal>

          {section.paragraphs?.length ? (
            <div className="mt-7 grid gap-4 sm:mt-8">
              {section.paragraphs.map((paragraph) => (
                <Card key={paragraph} className="max-w-[58rem] text-sm leading-7 text-white/72">
                  {paragraph}
                </Card>
              ))}
            </div>
          ) : null}

          {section.cards?.length ? (
            <div
              className={[
                "mt-7 grid gap-5 sm:mt-8",
                section.cards.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 xl:grid-cols-3",
              ].join(" ")}
            >
              {section.cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.04}>
                  <Card className="flex flex-col gap-3">
                    <h2 className="font-display text-[1.8rem] leading-tight text-white">
                      {card.title}
                    </h2>
                    <p className="text-sm leading-7 text-white/70">{card.description}</p>
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="pt-1 text-sm font-semibold text-[color:var(--brand-gold)]"
                      >
                        {card.label ?? "Voir la page"}
                      </Link>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {page.showContactForm ? (
        <section className="page-section">
          <div className="mx-auto max-w-[54rem]">
            <Reveal>
              <BookingForm type="consultation" />
            </Reveal>
          </div>
        </section>
      ) : null}

      {page.finalLinks.length ? (
        <section className="page-section">
          <Card className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                Prochaine étape
              </p>
              <h2 className="font-display text-3xl leading-tight text-white">
                Choisissez le chemin le plus utile maintenant.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {page.finalLinks.map((link, index) => (
                <Button
                  key={link.href}
                  asChild
                  variant={index === 0 ? "default" : index === 1 ? "outline" : "ghost"}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </Card>
        </section>
      ) : null}
    </div>
  );
}
