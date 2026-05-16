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
        "relative overflow-hidden rounded-[34px] border border-white/10 bg-[var(--bg-deep)] sm:rounded-[40px]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1180px, (min-width: 640px) calc(100vw - 2.5rem), calc(100vw - 1.5rem)"
          className="object-cover opacity-30"
          style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_28%),linear-gradient(110deg,rgba(5,5,5,0.94),rgba(5,5,5,0.72))]" />
      </div>
      <div className="relative grid gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-end lg:gap-10 lg:px-12 lg:py-16">
        <div className="space-y-6">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-[2.45rem] leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {title}
            </h1>
            <p className="max-w-[42rem] text-[15px] leading-7 text-white/74 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
          {actions}
        </div>
        {aside ? (
          <div className="relative rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:rounded-[30px] sm:p-6">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
