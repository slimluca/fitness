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
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.visualBrandName} home`}
      title={siteConfig.visualBrandName}
    >
      <span className="relative block h-[58px] w-[58px] overflow-hidden rounded-[18px] border border-white/10 bg-black/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:h-[66px] sm:w-[66px] sm:rounded-[20px] lg:h-[72px] lg:w-[72px]">
        <Image
          src={siteConfig.logoImage}
          alt={siteConfig.visualBrandName}
          fill
          sizes="(min-width: 1024px) 72px, (min-width: 640px) 66px, 58px"
          className="object-contain"
          priority
          quality={100}
        />
      </span>
    </Link>
  );
}
