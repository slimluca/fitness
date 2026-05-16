import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { LinkItem } from "@/content/types";

type BreadcrumbsProps = {
  items: LinkItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
            <Link href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
