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
    <section className={cn("relative overflow-hidden rounded-[40px] border border-white/10 bg-[var(--bg-deep)]", className)}>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_28%),linear-gradient(110deg,rgba(5,5,5,0.94),rgba(5,5,5,0.72))]" />
      </div>
      <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-20">
        <div className="space-y-6">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-4xl tracking-tight text-white sm:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
              {description}
            </p>
          </div>
          {actions}
        </div>
        {aside ? (
          <div className="relative rounded-[32px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:p-6">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
