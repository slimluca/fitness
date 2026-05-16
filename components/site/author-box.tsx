import Image from "next/image";
import Link from "next/link";

import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { proofAssets } from "@/content/proof";
import { coachCredibility, siteConfig } from "@/content/site";

type AuthorBoxProps = {
  compact?: boolean;
};

export function AuthorBox({ compact = false }: AuthorBoxProps) {
  const proof = compact ? coachCredibility.slice(0, 2) : coachCredibility.slice(0, 3);

  return (
    <Card className="space-y-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10">
        <Image
          src={proofAssets.privateStudioDetail.src!}
          alt={proofAssets.privateStudioDetail.alt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 32vw, 100vw"
          className="object-cover"
          style={{ objectPosition: proofAssets.privateStudioDetail.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.74))]" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Private studio environment
          </p>
          <p className="mt-2 text-sm leading-6 text-white/78">
            Appointment-only coaching in Grand Baie, Mauritius
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
          About the author
        </p>
        <h2 className="font-display text-3xl text-white">{siteConfig.coachName}</h2>
        <p className="text-sm leading-7 text-white/72">
          Personal trainer behind {siteConfig.visualBrandName}, an appointment-only private gym in a home residence in Grand Baie, Mauritius.
        </p>
      </div>
      <div className="space-y-3 text-sm leading-7 text-white/72">
        {proof.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
            <p className="font-medium text-white">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <Button asChild>
          <Link href="/contact?intent=consultation">Book Consultation</Link>
        </Button>
        <WhatsAppButton variant="outline" label="WhatsApp Now" />
        <Button asChild variant="outline">
          <Link href="/about">Meet Fabrizio</Link>
        </Button>
      </div>
    </Card>
  );
}
