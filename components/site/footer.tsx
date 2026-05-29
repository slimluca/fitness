import Link from "next/link";

import { footerSeoLinks, primaryNavigation, siteConfig } from "@/content/site";
import { Logo } from "@/components/site/logo";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/site/language-switcher";

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
      <div className="page-section grid gap-6 py-6 sm:py-7 lg:grid-cols-[1.08fr_0.96fr_0.96fr] lg:items-start lg:gap-8">
        <div className="space-y-3.5">
          <Logo className="opacity-95" />
          <p className="max-w-md text-sm leading-6 text-white/66">
            Private premium coaching in Grand Baie, Mauritius for clients who want an
            appointment-only gym experience in a home residence, not a public
            commercial gym.
          </p>
          <div className="grid gap-1.5 text-sm text-white/62">
            <p>{siteConfig.location}</p>
            <p>WhatsApp: {siteConfig.phoneDisplay}</p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
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

        <div className="space-y-3 lg:pt-1">
          <h3 className="font-display text-[1.22rem] leading-tight text-white">Navigation</h3>
          <div className="grid gap-x-5 gap-y-2 text-sm text-white/62 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 lg:pt-1">
          <h3 className="font-display text-[1.22rem] leading-tight text-white">Explore</h3>
          <div className="space-y-3 text-sm leading-6 text-white/62">
            <p>
              Appointment-only private gym in a home residence. No walk-ins. Access is
              shared only after confirmation.
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-white/42 sm:text-xs">
        Appointment-only private gym in Grand Baie, Mauritius. Copyright 2026
        Fitness by Fabrizio.
      </div>
    </footer>
  );
}
