import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

import type { GoogleReviewFeed } from "@/lib/google-reviews";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type GoogleReviewSummaryProps = {
  feed: GoogleReviewFeed;
};

export function GoogleReviewSummary({ feed }: GoogleReviewSummaryProps) {
  const live = feed.averageRating !== null && feed.reviewCount !== null;

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        <Badge>Google reviews</Badge>
        <h2 className="font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
          {live ? "Google review trust, shown cleanly" : "Ready for live Google review sync"}
        </h2>
        <p className="max-w-[38rem] text-sm leading-7 text-white/72">
          {live
            ? "The Google Business Profile summary and selected client feedback are shown together so visitors can trust the quality of the coaching quickly."
            : "The review system is prepared for Google Business Profile data. Until live review sync is connected, selected privacy-safe client feedback remains the main trust layer on the site."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Average rating
          </p>
          <div className="mt-3 flex items-center gap-3">
            <p className="font-display text-5xl text-white">
              {live ? feed.averageRating?.toFixed(1) : "Ready"}
            </p>
            <Star className="h-5 w-5 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Review count
          </p>
          <p className="mt-3 font-display text-5xl text-white">
            {live ? feed.reviewCount : "Awaiting"}
          </p>
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/68">
        {feed.note}
      </div>

      <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {feed.profileUrl ? (
          <Button asChild variant="outline">
            <a href={feed.profileUrl} target="_blank" rel="noreferrer">
              View Google Profile
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : null}
        <Button asChild variant="ghost">
          <Link href="/contact" data-track-label="Request Availability" data-track-location="google-reviews-summary">
            Request Availability
          </Link>
        </Button>
      </div>
    </Card>
  );
}
