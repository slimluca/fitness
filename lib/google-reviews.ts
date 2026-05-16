import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";

export type GoogleReviewFeed = {
  source: "unavailable" | "google-places";
  averageRating: number | null;
  reviewCount: number | null;
  profileUrl?: string;
  placeId?: string;
  selectedReviews: Testimonial[];
};

type GoogleReviewPayload = {
  author_name?: string;
  authorAttribution?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  location?: string;
};

function getDisplayMode(name: string) {
  const trimmed = name.trim();
  if (!trimmed) {
    return {
      displayMode: "private" as const,
      displayName: "Google reviewer",
      initials: undefined as string | undefined,
    };
  }

  const parts = trimmed.split(/\s+/).filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");

  return {
    displayMode: "full-name" as const,
    displayName: trimmed,
    initials: initials || undefined,
  };
}

function parseGoogleReviewPayload(value: string | undefined): Testimonial[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as GoogleReviewPayload[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter((item) => item && typeof item.text === "string" && item.text.trim())
      .slice(0, 6)
      .map((item, index) => {
        const name = item.author_name?.trim() || item.authorAttribution?.trim() || `Reviewer ${index + 1}`;
        const identity = getDisplayMode(name);

        return {
          name,
          displayMode: identity.displayMode,
          displayName: identity.displayName,
          initials: identity.initials,
          role: item.relative_time_description?.trim() || "Google reviewer",
          quote: item.text!.trim(),
          result: "",
          rating: typeof item.rating === "number" ? item.rating : 5,
          sourceLabel: "Google review",
          location: item.location?.trim(),
        } satisfies Testimonial;
      });
  } catch {
    return [];
  }
}

export function getGoogleReviewFeed(): GoogleReviewFeed {
  const placeId =
    process.env.GOOGLE_PLACE_ID?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim() ||
    "";
  const profileUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim() || "";
  const averageRating = Number(
    process.env.GOOGLE_PLACE_AVERAGE_RATING?.trim() ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_AVERAGE_RATING?.trim() ||
      "",
  );
  const reviewCount = Number(
    process.env.GOOGLE_PLACE_REVIEW_COUNT?.trim() ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_REVIEW_COUNT?.trim() ||
      "",
  );
  const selectedReviews = parseGoogleReviewPayload(
    process.env.GOOGLE_PLACE_REVIEWS_JSON?.trim() ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_REVIEWS_JSON?.trim(),
  );
  const hasLiveSummary =
    Number.isFinite(averageRating) &&
    averageRating > 0 &&
    Number.isFinite(reviewCount) &&
    reviewCount > 0;

  return {
    source: hasLiveSummary ? "google-places" : "unavailable",
    averageRating: hasLiveSummary ? averageRating : null,
    reviewCount: hasLiveSummary ? reviewCount : null,
    profileUrl: profileUrl || undefined,
    placeId: placeId || undefined,
    selectedReviews: hasLiveSummary ? selectedReviews : testimonials.slice(0, 4),
  };
}
