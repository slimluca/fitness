import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";

export type GoogleReviewFeed = {
  source: "unavailable" | "google-places" | "manual-google-profile";
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

type GooglePlaceDetailsResponse = {
  status?: string;
  error_message?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: GoogleReviewPayload[];
  };
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

function mapReviewToTestimonial(item: GoogleReviewPayload, index: number) {
  const name =
    item.author_name?.trim() ||
    item.authorAttribution?.trim() ||
    `Reviewer ${index + 1}`;
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
      .slice(0, 8)
      .map(mapReviewToTestimonial);
  } catch {
    return [];
  }
}

async function fetchLiveGoogleReviews(
  placeId: string,
  apiKey: string,
  profileUrl?: string,
): Promise<GoogleReviewFeed | null> {
  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: "rating,user_ratings_total,reviews,url",
      key: apiKey,
      reviews_sort: "newest",
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as GooglePlaceDetailsResponse;
    const result = payload.result;
    const averageRating = typeof result?.rating === "number" ? result.rating : null;
    const reviewCount =
      typeof result?.user_ratings_total === "number" ? result.user_ratings_total : null;
    const hasLiveSummary =
      averageRating !== null &&
      Number.isFinite(averageRating) &&
      reviewCount !== null &&
      Number.isFinite(reviewCount) &&
      reviewCount > 0;

    if (!hasLiveSummary) {
      return null;
    }

    const selectedReviews = Array.isArray(result?.reviews)
      ? result.reviews
          .filter((item) => item && typeof item.text === "string" && item.text.trim())
          .slice(0, 8)
          .map(mapReviewToTestimonial)
      : [];

    return {
      source: "google-places",
      averageRating,
      reviewCount,
      profileUrl: result?.url || profileUrl,
      placeId,
      selectedReviews,
    };
  } catch {
    return null;
  }
}

export async function getGoogleReviewFeed(): Promise<GoogleReviewFeed> {
  const placeId =
    process.env.GOOGLE_PLACE_ID?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim() ||
    "";
  const profileUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim() || "";
  const apiKey =
    process.env.GOOGLE_PLACES_API_KEY?.trim() ||
    process.env.GOOGLE_MAPS_API_KEY?.trim() ||
    "";
  const manualSelectedReviews = parseGoogleReviewPayload(
    process.env.GOOGLE_PLACE_REVIEWS_JSON?.trim() ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_REVIEWS_JSON?.trim(),
  );

  if (placeId && apiKey) {
    const liveFeed = await fetchLiveGoogleReviews(placeId, apiKey, profileUrl || undefined);

    if (liveFeed) {
      return {
        ...liveFeed,
        selectedReviews:
          liveFeed.selectedReviews.length > 0
            ? liveFeed.selectedReviews
            : manualSelectedReviews,
      };
    }
  }

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
  const hasManualSummary =
    Number.isFinite(averageRating) &&
    averageRating > 0 &&
    Number.isFinite(reviewCount) &&
    reviewCount > 0;

  return {
    source: hasManualSummary ? "manual-google-profile" : "unavailable",
    averageRating: hasManualSummary ? averageRating : null,
    reviewCount: hasManualSummary ? reviewCount : null,
    profileUrl: profileUrl || undefined,
    placeId: placeId || undefined,
    selectedReviews: hasManualSummary ? manualSelectedReviews : testimonials.slice(0, 4),
  };
}
