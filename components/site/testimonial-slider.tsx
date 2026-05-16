"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

import type { Testimonial } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type TestimonialSliderProps = {
  items: Testimonial[];
};

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [active, setActive] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[active % items.length];
  const displayName =
    activeItem.displayMode === "initials"
      ? activeItem.initials ?? activeItem.displayName ?? activeItem.name
      : activeItem.displayName ?? activeItem.name;

  function cycle(direction: 1 | -1) {
    setActive((current) => (current + direction + items.length) % items.length);
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-white/60">
          <Quote className="h-5 w-5 text-[color:var(--brand-gold)]" />
          <span className="text-sm uppercase tracking-[0.24em]">Client feedback</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => cycle(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => cycle(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="relative mt-6 min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.quote}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`grid gap-6 ${activeItem.image ? "lg:grid-cols-[0.78fr_1.22fr]" : ""}`}
          >
            {activeItem.image?.src ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src={activeItem.image.src}
                  alt={activeItem.image.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                  style={
                    activeItem.image.objectPosition
                      ? { objectPosition: activeItem.image.objectPosition }
                      : undefined
                  }
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                    Social proof asset
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/78">
                    {activeItem.image.title}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="space-y-6">
              {activeItem.rating ? (
                <div className="flex items-center gap-1 text-[color:var(--brand-gold)]">
                  {Array.from({ length: activeItem.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-2">
                {activeItem.sourceLabel ? (
                  <Badge variant="muted">{activeItem.sourceLabel}</Badge>
                ) : null}
                {activeItem.serviceUsed ? (
                  <Badge variant="muted">{activeItem.serviceUsed}</Badge>
                ) : null}
                {activeItem.location ? (
                  <Badge variant="muted">{activeItem.location}</Badge>
                ) : null}
                {activeItem.transformationCategory ? (
                  <Badge variant="muted">{activeItem.transformationCategory}</Badge>
                ) : null}
                {activeItem.timeframe ? (
                  <Badge variant="muted">{activeItem.timeframe}</Badge>
                ) : null}
                {activeItem.privateLabel ? (
                  <Badge variant="muted">{activeItem.privateLabel}</Badge>
                ) : null}
              </div>

              <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
                &quot;{activeItem.quote}&quot;
              </p>

              {activeItem.headline ? (
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72">
                  {activeItem.headline}
                </div>
              ) : null}

              {(activeItem.challenge || activeItem.approach) ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {activeItem.challenge ? (
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {activeItem.challenge}
                      </p>
                    </div>
                  ) : null}
                  {activeItem.approach ? (
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                        Approach
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {activeItem.approach}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {activeItem.metrics?.length ? (
                <div className="grid gap-4 sm:grid-cols-3">
                  {activeItem.metrics.map((metric) => (
                    <div
                      key={`${metric.label}-${metric.value}`}
                      className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                    >
                      <p className="font-display text-2xl text-white">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/48">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {(activeItem.wanted || activeItem.changed) ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {activeItem.wanted ? (
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                        What They Wanted
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {activeItem.wanted}
                      </p>
                    </div>
                  ) : null}
                  {activeItem.changed ? (
                    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                        What Changed
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {activeItem.changed}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                  {displayName}
                </p>
                <p className="text-white/70">
                  {activeItem.role}
                  {activeItem.location ? ` | ${activeItem.location}` : ""}
                </p>
                {activeItem.context ? (
                  <p className="text-sm leading-7 text-white/60">{activeItem.context}</p>
                ) : null}
                <p className="text-sm leading-7 text-white/60">{activeItem.result}</p>
              </div>

              {activeItem.privacyNote ? (
                <div className="rounded-[24px] border border-dashed border-white/12 bg-black/10 p-4 text-sm leading-7 text-white/55">
                  {activeItem.privacyNote}
                </div>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex gap-2">
        {items.map((item, index) => (
          <button
            key={`${item.name}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show testimonial ${index + 1}`}
            className={
              index === active
                ? "h-2.5 w-8 rounded-full bg-[color:var(--brand-gold)]"
                : "h-2.5 w-2.5 rounded-full bg-white/20 transition hover:bg-white/40"
            }
          />
        ))}
      </div>
    </Card>
  );
}
