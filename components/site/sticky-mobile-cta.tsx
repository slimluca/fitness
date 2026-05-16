import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/88 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <Button asChild size="sm" className="min-h-12 px-1.5 text-[11px] leading-[1.15] sm:px-2 sm:text-xs">
          <Link
            href={siteConfig.primaryCtaHref}
            data-track-label="Book Consultation"
            data-track-location="sticky-mobile-cta"
          >
            Book Consultation
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="dark"
          className="min-h-12 border border-[color:var(--whatsapp-green)]/35 bg-black px-1.5 text-[11px] leading-[1.15] text-[color:var(--whatsapp-green)] shadow-none hover:border-[color:var(--whatsapp-green)] hover:bg-black/90 sm:px-2 sm:text-xs"
        >
          <a
            href={buildWhatsAppLink(
              siteConfig.phone,
              siteConfig.whatsappMessages.consultation,
            )}
            target="_blank"
            rel="noreferrer"
            data-track-event="whatsapp_click"
            data-track-label="WhatsApp Now"
            data-track-location="sticky-mobile-cta"
          >
            WhatsApp Now
          </a>
        </Button>
      </div>
    </div>
  );
}
