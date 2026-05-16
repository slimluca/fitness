import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(siteConfig.phone, siteConfig.whatsappMessages.consultation)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.32)] transition hover:scale-105 md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
      data-track-event="whatsapp_click"
      data-track-label="Floating WhatsApp"
      data-track-location="floating-whatsapp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
