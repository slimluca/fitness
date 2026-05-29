import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  languageHref?: string;
  languageLabel?: string;
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  image = "/training-session.jpeg",
  imageAlt = "Private coaching at Fitness Grand Baie in Grand Baie, Mauritius",
  imageObjectPosition,
  actions,
  aside,
  languageHref,
  languageLabel = "Voir en français",
  className,
}: HeroProps) {
  const hasAside = aside !== undefined && aside !== null;

  return (
    <section
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[var(--bg-deep)]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
          style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_30%),linear-gradient(112deg,rgba(5,5,5,0.95),rgba(5,5,5,0.74))]" />
      </div>
      <div
        className={cn(
          "hero-shell relative grid gap-5 py-8 sm:py-10 lg:gap-7 lg:py-11 xl:gap-9",
          hasAside
            ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.68fr)] lg:items-center"
            : "lg:grid-cols-[minmax(0,1fr)]",
        )}
      >
        <div className="min-w-0 space-y-3.5 lg:max-w-[70rem] lg:space-y-4">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-3.5">
            <h1
              className={cn(
                "font-display text-[1.9rem] leading-[0.97] tracking-tight text-white sm:text-[2.7rem] lg:text-[3.35rem] xl:text-[3.8rem]",
                hasAside ? "max-w-[52rem]" : "max-w-[64rem]",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-[0.97rem] leading-7 text-white/74 sm:text-[1rem] sm:leading-8",
                hasAside ? "max-w-[40rem]" : "max-w-[50rem]",
              )}
            >
              {description}
            </p>
          </div>
          {languageHref ? (
            <Link
              href={languageHref}
              hrefLang={languageHref.startsWith("/fr") ? "fr" : "en"}
              className="inline-flex w-fit rounded-full border border-[color:var(--brand-gold)]/25 bg-[color:var(--brand-gold)]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-gold)] transition hover:border-[color:var(--brand-gold)]/45 hover:bg-[color:var(--brand-gold)]/15"
            >
              {languageLabel}
            </Link>
          ) : null}
          {actions}
        </div>
        {aside ? (
          <div className="relative flex w-full max-w-[26rem] flex-col gap-3 justify-self-start lg:justify-self-end">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
