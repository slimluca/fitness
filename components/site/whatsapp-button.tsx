"use client";

import { MessageCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

type WhatsAppButtonProps = ButtonProps & {
  messageKey?: keyof typeof siteConfig.whatsappMessages;
  label?: string;
  trackLocation?: string;
};

export function WhatsAppButton({
  messageKey = "consultation",
  label = "WhatsApp Now",
  variant = "outline",
  trackLocation = "whatsapp-button",
  ...props
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} {...props}>
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
