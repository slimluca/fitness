import { Star } from "lucide-react";

import type { Testimonial } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ReviewGridProps = {
  items: Testimonial[];
  compact?: boolean;
};

function getDisplayName(item: Testimonial) {
  if (item.displayMode === "initials") {
    return item.initials ?? item.displayName ?? item.name;
  }

  return item.displayName ?? item.name;
}

export function ReviewGrid({ items, compact = false }: ReviewGridProps) {
  if (items.length === 0) {
    return null;
  }

  const gridClass =
    items.length <= 2 || items.length === 4
      ? "grid premium-card-grid gap-4 md:grid-cols-2"
      : "grid premium-card-grid gap-4 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <Card key={`${item.name}-${item.quote}`} className="flex min-w-0 flex-col gap-4">
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="flex min-w-0 flex-wrap content-start gap-1.5">
              {item.sourceLabel ? <Badge variant="muted">{item.sourceLabel}</Badge> : null}
              {item.serviceUsed ? <Badge variant="muted">{item.serviceUsed}</Badge> : null}
            </div>
            {item.rating ? (
              <div className="flex h-5 shrink-0 items-center gap-1 self-start text-[color:var(--brand-gold)]">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex min-h-0 flex-col gap-4">
            {item.headline ? (
              <h3
                className={
                  compact
                    ? "font-display text-[1.28rem] leading-[1.14] text-white sm:text-[1.38rem]"
                    : "font-display text-[1.42rem] leading-[1.12] text-white sm:text-[1.62rem]"
                }
              >
                {item.headline}
              </h3>
            ) : null}

            <blockquote
              className={
                compact
                  ? "text-sm leading-6 text-white/74"
                  : "text-[0.95rem] leading-7 text-white/76"
              }
            >
              &quot;{item.quote}&quot;
            </blockquote>

            {item.result ? (
              <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                {item.result}
              </div>
            ) : null}
          </div>

          <div className="space-y-1 border-t border-white/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
              {getDisplayName(item)}
            </p>
            <p className="text-sm text-white/65">
              {[item.role, item.location].filter(Boolean).join(" | ")}
            </p>
            {item.privateLabel ? (
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                {item.privateLabel}
              </p>
            ) : null}
          </div>
        </Card>
      ))}
    </div>
  );
}
