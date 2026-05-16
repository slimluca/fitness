"use client";

import { MessageCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink, cn } from "@/lib/utils";

type WhatsAppButtonProps = ButtonProps & {
  messageKey?: keyof typeof siteConfig.whatsappMessages;
  label?: string;
  trackLocation?: string;
};

export function WhatsAppButton({
  messageKey = "consultation",
  label = "WhatsApp Now",
  variant = "dark",
  trackLocation = "whatsapp-button",
  className,
  ...props
}: WhatsAppButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        "border border-[color:var(--whatsapp-green)]/35 bg-black text-[color:var(--whatsapp-green)] shadow-none hover:-translate-y-0.5 hover:border-[color:var(--whatsapp-green)] hover:bg-black/90",
        className,
      )}
      {...props}
    >
      <a
        href={buildWhatsAppLink(
          siteConfig.phone,
          siteConfig.whatsappMessages[messageKey],
        )}
        target="_blank"
        rel="noreferrer"
        data-track-event="whatsapp_click"
        data-track-label={label}
        data-track-location={trackLocation}
      >
        <MessageCircle className="h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
