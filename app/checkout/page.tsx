import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const checkoutMetadata = buildMetadata({
  title: "Checkout | Fitness Grand Baie",
  description:
    "Consultation-first booking guidance for Fitness Grand Baie. Book consultation or message on WhatsApp before any private coaching commitment.",
  path: "/checkout",
});

export const metadata: Metadata = {
  ...checkoutMetadata,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function CheckoutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
        ])}
      />
      <div className="page-flow">
        <section className="page-section">
          <Hero
            eyebrow="Consultation first"
            title="Private coaching starts with a conversation, not instant checkout"
            description="Fitness Grand Baie uses a consultation-first flow so availability, service fit, schedule, and goals are clarified before any private coaching commitment."
            image="/training-session.jpeg"
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>Use the consultation form for a structured enquiry.</p>
                <p>Use WhatsApp for faster questions about timing or service fit.</p>
                <p>Payment is handled only after the next step is personally confirmed.</p>
              </div>
            }
          />
        </section>

        <section className="page-section">
          <Card className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-full border border-[color:var(--brand-gold)]/30 bg-[color:var(--brand-gold)]/10 p-3">
                <LockKeyhole className="h-5 w-5 text-[color:var(--brand-gold)]" />
              </div>
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
                Consultation-first booking
              </p>
            </div>
            <h2 className="font-display text-4xl text-white">
              The premium booking journey starts with consultation, not checkout
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/72">
              Because the studio is appointment only, each enquiry is reviewed around
              goals, service fit, and scheduling before anything is confirmed. That keeps
              the experience personal and avoids pushing visitors into the wrong option.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact?intent=consultation">Book Consultation</Link>
              </Button>
              <WhatsAppButton label="WhatsApp Now" />
            </div>
          </Card>
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Consultation is the clearest first step for private personal training.",
              "WhatsApp is best for fast questions about availability and service fit.",
              "No public payment step is required before the coaching path is confirmed.",
            ].map((step) => (
              <Card key={step} className="text-sm leading-7 text-white/72">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-[color:var(--brand-gold)]" />
                  <span>{step}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="page-section">
          <CTASection
            eyebrow="Next step"
            title="Move into consultation or WhatsApp"
            description="That keeps the experience premium, personal, and aligned with the appointment-only nature of the private gym."
            actions={[
              { label: "Book Consultation", href: "/contact?intent=consultation" },
              {
                label: "WhatsApp Now",
                href: "/contact",
                variant: "outline",
                messageKey: "consultation",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
