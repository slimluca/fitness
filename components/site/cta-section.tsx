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
  const visibleActions = actions;

  return (
    <Card className="overflow-hidden border-[color:var(--brand-gold)]/15 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
      <div className="grid gap-5 lg:grid-cols-[1.16fr_0.84fr] lg:items-end lg:gap-7">
        <div className="space-y-4">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h2 className="font-display text-[2.15rem] leading-[0.98] tracking-tight text-white sm:text-[2.7rem] lg:text-[3.05rem]">
            {title}
          </h2>
          <p className="max-w-[39rem] text-[15px] leading-7 text-white/72 sm:text-[1.02rem] sm:leading-8">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-col lg:items-stretch">
          {visibleActions.map((action) => (
            <Button
              key={`${action.label}-${action.href}`}
              asChild
              variant={action.messageKey ? "dark" : action.variant ?? "default"}
              className={
                action.messageKey
                  ? "w-full border border-[color:var(--whatsapp-green)]/35 bg-black text-[color:var(--whatsapp-green)] shadow-none hover:border-[color:var(--whatsapp-green)] hover:bg-black/90 sm:w-auto lg:w-full"
                  : "w-full sm:w-auto lg:w-full"
              }
            >
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
