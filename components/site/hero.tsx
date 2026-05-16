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
          "hero-shell relative grid gap-7 py-10 sm:py-12 lg:gap-10 lg:py-14 xl:gap-12",
          hasAside
            ? "lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.72fr)] lg:items-center"
            : "lg:grid-cols-[minmax(0,1fr)]",
        )}
      >
        <div className="min-w-0 space-y-5 lg:max-w-[70rem] lg:space-y-6">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-4">
            <h1
              className={cn(
                "font-display text-[2.25rem] leading-[0.95] tracking-tight text-white sm:text-[3.5rem] lg:text-[4.55rem] xl:text-[5.25rem]",
                hasAside ? "max-w-[58rem]" : "max-w-[72rem]",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-[15px] leading-7 text-white/74 sm:text-[1.05rem] sm:leading-8",
                hasAside ? "max-w-[45rem]" : "max-w-[54rem]",
              )}
            >
              {description}
            </p>
          </div>
          {actions}
        </div>
        {aside ? (
          <div className="relative flex h-full w-full max-w-[30rem] flex-col justify-center gap-3 justify-self-start lg:justify-self-end">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
