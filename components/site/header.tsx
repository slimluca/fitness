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

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
      <div className="page-section flex items-center justify-between gap-4 py-3.5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition",
                pathname === link.href ? "text-white" : "text-white/72 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton label="WhatsApp Now" />
          <Button asChild>
            <Link href="/contact?intent=consultation">Book Consultation</Link>
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="mt-8 space-y-6">
              <Logo />
              <div className="space-y-3">
                {primaryNavigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-[20px] border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white/80",
                      pathname === link.href && "border-[color:var(--brand-gold)]/30 text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                <WhatsAppButton className="w-full" label="WhatsApp Now" />
                <Button asChild className="w-full">
                  <Link href="/contact?intent=consultation">Book Consultation</Link>
                </Button>
                <Button asChild className="w-full" variant="ghost">
                  <Link href="/contact">Request Availability</Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
