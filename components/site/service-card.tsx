import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { siteConfig } from "@/content/site";

type ServiceCardProps = {
  title: string;
  description: string;
  idealFor?: string;
  href: string;
  className?: string;
  messageKey?: keyof typeof siteConfig.whatsappMessages;
};

export function ServiceCard({
  title,
  description,
  idealFor,
  href,
  className,
  messageKey = "consultation",
}: ServiceCardProps) {
  return (
    <Card className={cn("group h-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4">
          <span>{title}</span>
          <ArrowUpRight className="h-5 w-5 text-[color:var(--brand-gold)] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {idealFor ? <p className="text-sm leading-6 text-white/70"><span className="text-white">Ideal for:</span> {idealFor}</p> : null}
        <div className="flex flex-col gap-3">
          <Link href={href} className="text-sm font-semibold text-[color:var(--brand-gold)]">
            View service details
          </Link>
          <WhatsAppButton size="sm" variant="ghost" messageKey={messageKey} label="WhatsApp Now" />
        </div>
      </CardContent>
    </Card>
  );
}
