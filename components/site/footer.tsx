import Link from "next/link";

import { footerSeoLinks, primaryNavigation, siteConfig } from "@/content/site";
import { Logo } from "@/components/site/logo";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.9fr_0.95fr] lg:px-8">
        <div className="space-y-5">
          <Logo className="opacity-95" />
          <p className="max-w-md text-sm leading-7 text-white/70">
            Private premium coaching in Grand Baie, Mauritius for clients who want an
            appointment-only gym experience in a home residence, not a public
            commercial gym.
          </p>
          <div className="space-y-2 text-sm text-white/65">
            <p>{siteConfig.location}</p>
            <p>WhatsApp-first contact: {siteConfig.phoneDisplay}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild>
              <Link
                href={siteConfig.primaryCtaHref}
                data-track-label="Book Consultation"
                data-track-location="footer"
              >
                Book Consultation
              </Link>
            </Button>
            <WhatsAppButton label="WhatsApp Now" trackLocation="footer" />
            <Button asChild variant="ghost">
              <Link
                href={siteConfig.availabilityCtaHref}
                data-track-label="Request Availability"
                data-track-location="footer"
              >
                Request Availability
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-2xl text-white">Navigation</h3>
          <div className="space-y-2 text-sm text-white/65">
            {primaryNavigation.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
            {footerSeoLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-2xl text-white">Trust & legal</h3>
          <div className="space-y-3 text-sm leading-7 text-white/65">
            <p>
              Appointment-only private gym in a home residence. Exact residential
              access details are only shared after confirmation.
            </p>
            <p>No walk-ins. No membership floor. Just private coaching by appointment.</p>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs uppercase tracking-[0.28em] text-white/45">
        Appointment-only private gym in Grand Baie, Mauritius. Copyright 2026
        Fitness by Fabrizio.
      </div>
    </footer>
  );
}
