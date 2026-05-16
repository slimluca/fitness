import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

import type { ResultStory } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ResultCardProps = {
  item: ResultStory;
};

export function ResultCard({ item }: ResultCardProps) {
  const identityLabel =
    item.displayMode === "initials"
      ? item.initials ?? item.displayName
      : item.displayName;

  return (
    <Card className="h-full overflow-hidden p-0">
      {item.image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          {item.image.src ? (
            <>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover"
                style={
                  item.image.objectPosition
                    ? { objectPosition: item.image.objectPosition }
                    : undefined
                }
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.84))]" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
          )}
          <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-1.5">
            <Badge>{item.category}</Badge>
            {item.serviceUsed ? <Badge variant="muted">{item.serviceUsed}</Badge> : null}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-2xl leading-tight text-white sm:text-[1.85rem]">
              {item.title}
            </p>
          </div>
        </div>
      ) : null}

      <div className="space-y-4 p-5">
        {!item.image ? (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-gold)]">
              {item.category}
            </p>
            <h3 className="font-display text-[1.55rem] leading-tight text-white sm:text-[1.75rem]">
              {item.title}
            </h3>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-1.5">
          <Badge variant="muted">{item.timeline}</Badge>
          {item.clientProfile ? <Badge variant="muted">{item.clientProfile}</Badge> : null}
          {item.privateLabel ? <Badge variant="muted">{item.privateLabel}</Badge> : null}
        </div>

        {identityLabel || item.context ? (
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              Case study profile
            </p>
            <p className="mt-2 text-sm leading-7 text-white/72">
              {[identityLabel, item.context].filter(Boolean).join(" | ")}
            </p>
          </div>
        ) : null}

        <p className="text-sm leading-7 text-white/72">{item.summary}</p>

        {(item.goal || item.startingPoint || item.challenge) ? (
          <div className="compact-card-grid">
            {item.goal ? (
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Goal
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">{item.goal}</p>
              </div>
            ) : null}
            {item.startingPoint ? (
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Starting Point
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  {item.startingPoint}
                </p>
              </div>
            ) : null}
            {item.challenge ? (
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  Challenge
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  {item.challenge}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        {item.approach ? (
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              Training Approach
            </p>
            <p className="mt-2 text-sm leading-7 text-white/72">{item.approach}</p>
          </div>
        ) : null}

        {item.metrics?.length ? (
          <div className="metric-grid">
            {item.metrics.map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="rounded-[22px] border border-white/10 bg-black/20 p-4"
              >
                <p className="font-display text-xl leading-tight text-white sm:text-2xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.14em] text-white/48">
                  {metric.label}
                </p>
                {metric.note ? (
                  <p className="mt-2 text-xs leading-5 text-white/52">{metric.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {item.whatTheyWanted || item.whatChanged ? (
          <div className="compact-card-grid">
            {item.whatTheyWanted ? (
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  What This Client Wanted
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  {item.whatTheyWanted}
                </p>
              </div>
            ) : null}
            {item.whatChanged ? (
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  What Changed
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  {item.whatChanged}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        {item.visibleResult ? (
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
              Result Summary
            </p>
            <p className="mt-2 text-sm leading-7 text-white/72">{item.visibleResult}</p>
          </div>
        ) : null}

        <ul className="space-y-3 text-sm text-white/72">
          {item.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3">
              <ArrowRight className="mt-0.5 h-4 w-4 text-[color:var(--brand-gold)]" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        {item.quote ? (
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
            <div className="flex items-center gap-2 text-[color:var(--brand-gold)]">
              <Quote className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.22em]">
                Client voice
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/72">&quot;{item.quote}&quot;</p>
          </div>
        ) : null}

      </div>
    </Card>
  );
}
