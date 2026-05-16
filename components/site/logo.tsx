import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.visualBrandName} home`}
      title={siteConfig.visualBrandName}
    >
      <span className="relative block h-[48px] w-[48px] overflow-hidden rounded-[16px] border border-white/10 bg-black/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:h-[54px] sm:w-[54px] sm:rounded-[18px] lg:h-[60px] lg:w-[60px] lg:rounded-[20px]">
        <Image
          src={siteConfig.logoImage}
          alt={siteConfig.visualBrandName}
          fill
          sizes="(min-width: 1024px) 60px, (min-width: 640px) 54px, 48px"
          className="object-contain"
          priority
          quality={100}
        />
      </span>
    </Link>
  );
}
