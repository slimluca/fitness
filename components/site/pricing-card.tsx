import Link from "next/link";
import { Check } from "lucide-react";

import type { PricingItem } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { formatCurrency } from "@/lib/utils";

type PricingCardProps = {
  item: PricingItem;
  consultationHref: string;
};

export function PricingCard({
  item,
  consultationHref,
}: PricingCardProps) {
  return (
    <Card className={item.badge ? "border-[color:var(--brand-gold)]/30" : ""}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{item.name}</CardTitle>
          {item.badge ? <Badge>{item.badge}</Badge> : null}
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <p className="font-display text-4xl text-white">{formatCurrency(item.amount)}</p>
          <p className="text-sm text-white/60">{item.unit}</p>
        </div>
        <p className="text-sm leading-6 text-white/70">{item.idealFor}</p>
        <ul className="space-y-3">
          {item.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm text-white/72">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--brand-gold)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <Button asChild>
            <Link
              href={consultationHref}
              data-track-label="Book Consultation"
              data-track-location={`pricing-card:${item.slug}`}
            >
              Book Consultation
            </Link>
          </Button>
          <WhatsAppButton
            variant="outline"
            label="WhatsApp Now"
            trackLocation={`pricing-card:${item.slug}`}
            messageKey={item.serviceSlug === "online-coaching" ? "online" : item.serviceSlug === "couple-training" ? "couples" : "packages"}
          />
        </div>
      </CardContent>
    </Card>
  );
}
