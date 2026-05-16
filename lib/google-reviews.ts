import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";

export type GoogleReviewFeed = {
  source: "placeholder" | "google-places";
  averageRating: number | null;
  reviewCount: number | null;
  profileUrl?: string;
  placeId?: string;
  note: string;
  selectedReviews: Testimonial[];
};

export function getGoogleReviewFeed(): GoogleReviewFeed {
  const placeId =
    process.env.GOOGLE_PLACE_ID?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim() ||
    "";
  const profileUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim() || "";

  return {
    source: "placeholder",
    averageRating: null,
    reviewCount: null,
    profileUrl: profileUrl || undefined,
    placeId: placeId || undefined,
    note: placeId
      ? "Google Business Profile review sync can be activated once the approved Places review fetch is connected."
      : "Google review sync is prepared. Add the Place ID and approved review source when live credentials are available.",
    selectedReviews: testimonials.slice(0, 4),
  };
}
