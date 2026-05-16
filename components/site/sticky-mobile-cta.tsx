import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/85 p-3 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="min-h-11 px-2 text-[11px] leading-tight sm:text-xs"
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
        <Button asChild size="sm" className="min-h-11 px-2 text-[11px] leading-tight sm:text-xs">
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
          className="min-h-11 px-2 text-[11px] leading-tight sm:text-xs"
        >
          <Link
            href="/contact"
            data-track-label="Request Availability"
            data-track-location="sticky-mobile-cta"
          >
            Request Availability
          </Link>
        </Button>
      </div>
    </div>
  );
}
