import { Reveal } from "@/components/motion/reveal";
import { BookingForm } from "@/components/site/booking-form";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import {
  pageHeroAssets,
  resolveProofAssetAlt,
  resolveProofAssetObjectPosition,
  resolveProofAssetSrc,
} from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact | Private Personal Trainer in Grand Baie, Mauritius",
  description:
    "Contact Fitness by Fabrizio for private coaching in Grand Baie, Mauritius. WhatsApp-first replies, appointment-only private gym, and a direct consultation-first enquiry flow.",
  path: "/contact",
  keywords: [
    "Personal Trainer Mauritius Contact",
    "Personal Trainer Grand Baie Contact",
    "Private Gym Mauritius Contact",
  ],
});

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeService(value?: string) {
  if (!value) {
    return undefined;
  }

  const lowered = value.toLowerCase();

  if (lowered.includes("online")) {
    return "Online Coaching";
  }

  if (lowered.includes("private") || lowered.includes("personal")) {
    return "Private Personal Training";
  }

  return undefined;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const intent = first(params.intent);
  const defaultService = normalizeService(first(params.service));
  const formType: "consultation" | "contact" | "service-inquiry" =
    intent === "consultation"
      ? "consultation"
      : defaultService
        ? "service-inquiry"
        : "contact";

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Contact"
            title="Private coaching enquiries in Grand Baie, Mauritius"
            description="Use WhatsApp for the fastest reply or send a private enquiry through the consultation form. The studio is appointment only, based in a home residence, and not open to public walk-ins."
            image={resolveProofAssetSrc(pageHeroAssets.contact)}
            imageAlt={resolveProofAssetAlt(
              pageHeroAssets.contact,
              "Private contact and consultation environment in Grand Baie, Mauritius",
            )}
            imageObjectPosition={resolveProofAssetObjectPosition(pageHeroAssets.contact)}
          />
        </section>

        <section className="page-section">
          <div className="mx-auto max-w-[54rem]">
            <Reveal>
              <div id="contact-form" className="scroll-mt-32">
                <BookingForm type={formType} defaultService={defaultService} />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
