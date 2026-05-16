import Link from "next/link";

import type { CallToAction } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions: CallToAction[];
};

export function CTASection({
  eyebrow,
  title,
  description,
  actions,
}: CTASectionProps) {
  return (
    <Card className="overflow-hidden border-[color:var(--brand-gold)]/15 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          {actions.map((action) => (
            <Button key={`${action.label}-${action.href}`} asChild variant={action.variant ?? "default"}>
              {action.messageKey ? (
                <a
                  href={buildWhatsAppLink(
                    siteConfig.phone,
                    siteConfig.whatsappMessages[action.messageKey],
                  )}
                  target="_blank"
                  rel="noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label={action.label}
                  data-track-location="cta-section"
                >
                  {action.label}
                </a>
              ) : (
                <Link
                  href={action.href}
                  data-track-label={action.label}
                  data-track-location="cta-section"
                >
                  {action.label}
                </Link>
              )}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
