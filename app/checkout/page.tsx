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
    "Future payment activation page for Fitness Grand Baie. Consultation, WhatsApp, and availability requests are the active paths for now.",
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
      <div className="space-y-20 py-8 sm:py-10">
        <section className="page-section">
          <Hero
            eyebrow="Checkout on hold"
            title="Online payment is not active in the public website flow yet"
            description="Fitness Grand Baie is currently lead-generation focused. Book consultation, message on WhatsApp, or request availability first while the payment architecture remains preserved for future activation."
            image="/training-session.jpeg"
            aside={
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <p>The provider abstraction and checkout code remain in place.</p>
                <p>No live keys are hardcoded into the interface.</p>
                <p>The current public flow prioritises qualified leads over direct payment.</p>
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
                Lead-generation mode
              </p>
            </div>
            <h2 className="font-display text-4xl text-white">
              The premium booking journey starts with consultation, not checkout
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/72">
              This page stays online to preserve the future payment architecture, but the
              current website experience is intentionally routed through enquiry forms and
              WhatsApp so each client can be handled personally inside an appointment-only
              private coaching model.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact?intent=consultation">Book Consultation</Link>
              </Button>
              <WhatsAppButton label="WhatsApp Now" />
              <Button asChild variant="ghost">
                <Link href="/contact">Request Availability</Link>
              </Button>
            </div>
          </Card>
        </section>

        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Checkout UI, provider abstraction, and payment API routes are still in place for future activation.",
              "No live keys are exposed and the public website does not push visitors into payment before consultation.",
              "The active conversion paths are consultation form, contact form, service inquiry form, and WhatsApp.",
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
            title="Move into consultation, WhatsApp, or availability request"
            description="That keeps the experience premium, personal, and aligned with the appointment-only nature of the private gym."
            actions={[
              { label: "Book Consultation", href: "/contact?intent=consultation" },
              {
                label: "WhatsApp Now",
                href: "/contact",
                variant: "outline",
                messageKey: "consultation",
              },
              { label: "Request Availability", href: "/contact", variant: "ghost" },
            ]}
          />
        </section>
      </div>
    </>
  );
}
