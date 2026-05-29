"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLanguageLinks } from "@/lib/language-routes";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  mobile?: boolean;
};

export function LanguageSwitcher({ className, mobile = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const links = getLanguageLinks(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/[0.045] p-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62",
        mobile && "w-full justify-center rounded-[18px] p-1.5",
        className,
      )}
      aria-label="Language selector"
    >
      <Link
        href={links.en}
        hrefLang="en"
        className={cn(
          "rounded-full px-2.5 py-1.5 transition hover:text-white",
          mobile && "flex-1 text-center",
          links.current === "en" && "bg-[color:var(--brand-gold)] text-black hover:text-black",
        )}
      >
        EN
      </Link>
      <span className="px-1 text-white/28" aria-hidden="true">
        |
      </span>
      <Link
        href={links.fr}
        hrefLang="fr"
        className={cn(
          "rounded-full px-2.5 py-1.5 transition hover:text-white",
          mobile && "flex-1 text-center",
          links.current === "fr" && "bg-[color:var(--brand-gold)] text-black hover:text-black",
        )}
      >
        FR
      </Link>
    </div>
  );
}
