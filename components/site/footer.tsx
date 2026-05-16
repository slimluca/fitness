import Link from "next/link";

import { footerSeoLinks, primaryNavigation, siteConfig } from "@/content/site";
import { Logo } from "@/components/site/logo";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const footerLinks = [
  ...primaryNavigation,
  ...footerSeoLinks.filter(
    (link) => !primaryNavigation.some((primaryLink) => primaryLink.href === link.href),
  ),
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="page-section grid gap-7 py-7 sm:py-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start lg:gap-8">
        <div className="space-y-4">
          <Logo className="opacity-95" />
          <p className="max-w-lg text-sm leading-7 text-white/68">
            Private premium coaching in Grand Baie, Mauritius for clients who want an
            appointment-only gym experience in a home residence, not a public
            commercial gym.
          </p>
          <div className="grid gap-1.5 text-sm text-white/62">
            <p>{siteConfig.location}</p>
            <p>WhatsApp: {siteConfig.phoneDisplay}</p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
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
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-[1.38rem] leading-tight text-white">Navigation</h3>
          <div className="grid gap-2 text-sm text-white/62">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-[1.38rem] leading-tight text-white">Explore</h3>
          <div className="space-y-3 text-sm leading-7 text-white/62">
            <p>
              Appointment-only private gym in a home residence. No walk-ins. Access is
              shared only after confirmation.
            </p>
            <div className="grid gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3.5 text-center text-[11px] uppercase tracking-[0.22em] text-white/42 sm:text-xs">
        Appointment-only private gym in Grand Baie, Mauritius. Copyright 2026
        Fitness by Fabrizio.
      </div>
    </footer>
  );
}
