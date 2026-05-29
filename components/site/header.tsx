"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { LanguageSwitcher } from "@/components/site/language-switcher";

const frenchNavigation = [
  { label: "Accueil", href: "/fr" },
  { label: "À propos", href: "/fr/a-propos" },
  { label: "Entraînement", href: "/fr/entrainement-personnel" },
  { label: "En ligne", href: "/fr/coaching-en-ligne" },
  { label: "Résultats", href: "/fr/resultats" },
  { label: "Avis", href: "/fr/avis" },
  { label: "Outils", href: "/fr/outils" },
  { label: "Contact", href: "/fr/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isFrench = pathname === "/fr" || pathname.startsWith("/fr/");
  const navigation = isFrench ? frenchNavigation : primaryNavigation;
  const consultationHref = isFrench ? "/fr/contact" : "/contact?intent=consultation";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="page-section flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5">
        <Logo />
        <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.92rem] font-medium transition xl:text-[0.95rem]",
                pathname === link.href ? "text-white" : "text-white/72 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <div className="hidden items-center gap-3 xl:flex">
            <Button asChild>
              <Link href={consultationHref}>{isFrench ? "Consultation" : "Book Consultation"}</Link>
            </Button>
            <WhatsAppButton label={isFrench ? "WhatsApp" : "WhatsApp Now"} />
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white sm:h-11 sm:w-11"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="mt-7 space-y-6 sm:mt-8">
              <Logo />
              <div className="space-y-2.5">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-base leading-6 text-white/80",
                      pathname === link.href && "border-[color:var(--brand-gold)]/30 text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <LanguageSwitcher mobile />
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href={consultationHref}>{isFrench ? "Demander une consultation" : "Book Consultation"}</Link>
                </Button>
                <WhatsAppButton className="w-full" label={isFrench ? "WhatsApp" : "WhatsApp Now"} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
