import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

import type { GoogleReviewFeed } from "@/lib/google-reviews";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

type GoogleReviewSummaryProps = {
  feed: GoogleReviewFeed;
};

export function GoogleReviewSummary({ feed }: GoogleReviewSummaryProps) {
  const live = feed.averageRating !== null && feed.reviewCount !== null;

  if (!live) {
    return null;
  }

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        <Badge>Google reviews</Badge>
        <h2 className="font-display text-[1.95rem] leading-[0.98] text-white sm:text-[2.35rem]">
          Real Google review trust, shown cleanly
        </h2>
        <p className="max-w-[38rem] text-sm leading-7 text-white/72">
          When live Google review data is available, the rating summary is shown here in
          a compact format that supports trust without turning the page into a noisy widget.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Average rating
          </p>
          <div className="mt-3 flex items-end gap-3">
            <p className="font-display text-[3.4rem] leading-none text-white">
              {feed.averageRating?.toFixed(1)}
            </p>
            <div className="flex items-center gap-1 pb-1 text-[color:var(--brand-gold)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
            Review count
          </p>
          <p className="mt-3 font-display text-[3.4rem] leading-none text-white">
            {feed.reviewCount}
          </p>
        </div>
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
        <Button asChild>
          <Link
            href={siteConfig.primaryCtaHref}
            data-track-label="Book Consultation"
            data-track-location="google-reviews-summary"
          >
            Book Consultation
          </Link>
        </Button>
      </div>
    </Card>
  );
}
