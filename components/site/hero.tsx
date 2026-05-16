import Image from "next/image";
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
  className,
}: HeroProps) {
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
      <div className="page-section relative grid gap-6 px-0 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.14fr)_minmax(260px,0.86fr)] lg:items-end lg:gap-8 lg:py-15">
        <div className="space-y-5">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-4">
            <h1 className="max-w-4xl font-display text-[2.25rem] leading-[0.95] tracking-tight text-white sm:text-[3.45rem] lg:text-[4.1rem] xl:text-[4.55rem]">
              {title}
            </h1>
            <p className="max-w-[40rem] text-[15px] leading-7 text-white/74 sm:text-[1.02rem] sm:leading-8">
              {description}
            </p>
          </div>
          {actions}
        </div>
        {aside ? (
          <div className="relative flex h-full max-w-[26rem] flex-col justify-end gap-3 justify-self-start lg:justify-self-end">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
