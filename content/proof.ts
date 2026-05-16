import type { CredibilityItem, MediaAsset } from "@/content/types";

export const proofAssets = {
  privateStudioSession: {
    id: "private-studio-session",
    title: "Private coaching inside the Grand Baie studio",
    alt: "Personal training session inside the private Fitness Grand Baie studio in Grand Baie, Mauritius",
    caption:
      "Current approved live image showing the tone of the appointment-only coaching environment in Grand Baie.",
    note: "Use as the anchor proof image until the full studio and trainer photography set is complete.",
    seoTitle: "Private personal training session in Grand Baie, Mauritius",
    filenameHint: "fitness-grand-baie-private-training-session.jpg",
    src: "/training-session.jpeg",
    category: "session",
    status: "live",
    aspect: "landscape",
    layout: "feature",
    objectPosition: "center center",
  } as MediaAsset,
  privateStudioDetail: {
    id: "private-studio-detail",
    title: "Clean studio atmosphere and quiet session flow",
    alt: "Private training environment detail at Fitness Grand Baie in Mauritius",
    caption:
      "A tighter crop from the current live asset that helps the site feel more editorial and less template-driven.",
    note: "Ready to swap for a dedicated environment detail once new photography is available.",
    seoTitle: "Private gym studio detail at Fitness Grand Baie",
    filenameHint: "fitness-grand-baie-private-studio-detail.jpg",
    src: "/training-session.jpeg",
    category: "studio",
    status: "live",
    aspect: "portrait",
    objectPosition: "34% center",
  } as MediaAsset,
  coachingDetail: {
    id: "coaching-detail",
    title: "Close coaching attention in a premium private setting",
    alt: "Close-up coaching detail inside the private Fitness Grand Baie gym",
    caption:
      "A second crop from the live session image, useful as a believable stop-gap until more original photography is approved.",
    note: "Intended to be replaced later by a dedicated coaching-detail image rather than remain permanent.",
    seoTitle: "Close coaching detail inside the Grand Baie private gym",
    filenameHint: "fitness-grand-baie-coaching-detail.jpg",
    src: "/training-session.jpeg",
    category: "session",
    status: "live",
    aspect: "square",
    objectPosition: "64% center",
  } as MediaAsset,
  trainerPortraitReserved: {
    id: "trainer-portrait-reserved",
    title: "Approved Fabrizio portrait",
    alt: "Reserved slot for a future trainer portrait at Fitness Grand Baie",
    caption:
      "Prepared for a professionally shot portrait that matches the calm black-and-gold brand direction.",
    note: "Best replaced with a waist-up portrait inside the private studio or just outside the residence entrance.",
    seoTitle: "Trainer portrait at Fitness Grand Baie",
    filenameHint: "fabrizio-fitness-grand-baie-portrait.jpg",
    category: "trainer",
    status: "reserved",
    aspect: "portrait",
    replacementPriority: "high",
  } as MediaAsset,
  credentialsDetailReserved: {
    id: "credentials-detail-reserved",
    title: "Qualifications and certification detail",
    alt: "Reserved slot for future Fitness Grand Baie credentials or certification imagery",
    caption:
      "Prepared for approved certifications, qualifications, or workshop credentials presented in a clean editorial style.",
    note: "Use a sharp, glare-free image or scan with one clear qualification focus rather than a cluttered collage.",
    seoTitle: "Fitness Grand Baie credentials and certifications",
    filenameHint: "fitness-grand-baie-credentials.jpg",
    category: "credentials",
    status: "reserved",
    aspect: "square",
    replacementPriority: "medium",
  } as MediaAsset,
  equipmentDetailReserved: {
    id: "equipment-detail-reserved",
    title: "Private gym equipment detail",
    alt: "Reserved slot for future private gym equipment photography",
    caption:
      "Prepared for a clean detail image showing the quality, order, and upkeep of the private gym environment.",
    note: "A low-clutter strength or cable detail would work well here.",
    seoTitle: "Private gym equipment detail in Grand Baie",
    filenameHint: "fitness-grand-baie-equipment-detail.jpg",
    category: "equipment",
    status: "reserved",
    aspect: "square",
    replacementPriority: "medium",
  } as MediaAsset,
  coupleSessionReserved: {
    id: "couple-session-reserved",
    title: "Couple coaching session",
    alt: "Reserved slot for future couple training photography",
    caption:
      "Prepared for approved imagery showing two clients training together without losing the premium private feel.",
    note: "Ideal for a calm, well-lit session image rather than an energetic class-style shot.",
    seoTitle: "Couple training session at Fitness Grand Baie",
    filenameHint: "fitness-grand-baie-couple-training.jpg",
    category: "lifestyle",
    status: "reserved",
    aspect: "landscape",
    replacementPriority: "medium",
  } as MediaAsset,
  villaSessionReserved: {
    id: "villa-session-reserved",
    title: "House call coaching at a villa or private residence",
    alt: "Reserved slot for future house call training photography in Mauritius",
    caption:
      "Prepared for a tasteful image that communicates premium convenience for villa guests and private residence clients.",
    note: "A clean terrace, garden, or indoor villa setting would support this service well.",
    seoTitle: "House call personal training in Mauritius",
    filenameHint: "fitness-grand-baie-house-call-training.jpg",
    category: "travel",
    status: "reserved",
    aspect: "landscape",
    replacementPriority: "high",
  } as MediaAsset,
  onlineCheckInReserved: {
    id: "online-check-in-reserved",
    title: "Online coaching check-in and programme review",
    alt: "Reserved slot for future online coaching progress review imagery",
    caption:
      "Prepared for approved screenshots or device photography showing the monthly online coaching process.",
    note: "A tablet or phone review scene would work better than generic laptop imagery.",
    seoTitle: "Online coaching progress review at Fitness Grand Baie",
    filenameHint: "fitness-grand-baie-online-coaching-review.jpg",
    category: "online",
    status: "reserved",
    aspect: "landscape",
    replacementPriority: "high",
  } as MediaAsset,
  progressPhotoReserved: {
    id: "progress-photo-reserved",
    title: "Approved progress imagery",
    alt: "Reserved slot for future client progress photography",
    caption:
      "Prepared for client-approved progress imagery or anonymised before-and-after presentation where appropriate.",
    note: "Only publish with written approval and consistent lighting or matching-angle standards.",
    seoTitle: "Client progress proof for private coaching in Mauritius",
    filenameHint: "fitness-grand-baie-client-progress-proof.jpg",
    category: "results",
    status: "reserved",
    aspect: "portrait",
    replacementPriority: "high",
  } as MediaAsset,
  metricsDetailReserved: {
    id: "metrics-detail-reserved",
    title: "Measured progress and session-proof detail",
    alt: "Reserved slot for future measurable progress proof content",
    caption:
      "Prepared for body-composition summaries, mobility comparisons, or other measurable proof that feels clean and credible.",
    note: "Use only real, client-approved data and keep presentation minimal.",
    seoTitle: "Measured progress proof for private fitness coaching",
    filenameHint: "fitness-grand-baie-progress-metrics.jpg",
    category: "results",
    status: "reserved",
    aspect: "square",
    replacementPriority: "medium",
  } as MediaAsset,
  consultationMomentReserved: {
    id: "consultation-moment-reserved",
    title: "Arrival and consultation moment",
    alt: "Reserved slot for future consultation welcome imagery at Fitness Grand Baie",
    caption:
      "Prepared for a discreet image that communicates how calm and intentional the appointment-only arrival experience feels.",
    note: "A subtle entry, seating, or consultation setup image would reinforce trust well.",
    seoTitle: "Consultation arrival moment at Fitness Grand Baie",
    filenameHint: "fitness-grand-baie-consultation-arrival.jpg",
    category: "lifestyle",
    status: "reserved",
    aspect: "landscape",
    replacementPriority: "medium",
  } as MediaAsset,
};

export function resolveProofAssetSrc(
  asset: MediaAsset,
  fallback = "/training-session.jpeg",
) {
  return asset.src ?? fallback;
}

export function resolveProofAssetAlt(asset: MediaAsset, fallback: string) {
  return asset.src ? asset.alt : fallback;
}

export function resolveProofAssetObjectPosition(asset: MediaAsset) {
  return asset.src ? asset.objectPosition : undefined;
}

export const pageHeroAssets: Record<string, MediaAsset> = {
  home: proofAssets.privateStudioSession,
  about: proofAssets.trainerPortraitReserved,
  contact: proofAssets.consultationMomentReserved,
  pricing: proofAssets.privateStudioDetail,
  results: proofAssets.progressPhotoReserved,
  "book-consultation": proofAssets.consultationMomentReserved,
  "personal-training": proofAssets.privateStudioSession,
  "online-coaching": proofAssets.onlineCheckInReserved,
  reviews: proofAssets.consultationMomentReserved,
  "personal-trainer-mauritius": proofAssets.privateStudioSession,
};

export const homeProofGallery: MediaAsset[] = [
  proofAssets.privateStudioSession,
  proofAssets.trainerPortraitReserved,
  proofAssets.privateStudioDetail,
];

export const aboutProofGallery: MediaAsset[] = [
  proofAssets.trainerPortraitReserved,
  proofAssets.privateStudioSession,
  proofAssets.equipmentDetailReserved,
  proofAssets.credentialsDetailReserved,
];

export const servicesProofGallery: MediaAsset[] = [
  proofAssets.privateStudioSession,
  proofAssets.coupleSessionReserved,
  proofAssets.villaSessionReserved,
  proofAssets.onlineCheckInReserved,
];

export const resultsProofGallery: MediaAsset[] = [
  proofAssets.progressPhotoReserved,
  proofAssets.privateStudioDetail,
  proofAssets.metricsDetailReserved,
];

export const contactProofGallery: MediaAsset[] = [
  proofAssets.privateStudioSession,
  proofAssets.consultationMomentReserved,
];

export const pricingProofGallery: MediaAsset[] = [
  proofAssets.privateStudioDetail,
  proofAssets.progressPhotoReserved,
  proofAssets.consultationMomentReserved,
];

export const faqProofGallery: MediaAsset[] = [
  proofAssets.privateStudioSession,
  proofAssets.equipmentDetailReserved,
  proofAssets.trainerPortraitReserved,
  proofAssets.credentialsDetailReserved,
];

export const serviceProofGalleries: Record<string, MediaAsset[]> = {
  "private-personal-training": [
    proofAssets.privateStudioSession,
    proofAssets.coachingDetail,
    proofAssets.progressPhotoReserved,
  ],
  "couple-training": [
    proofAssets.coupleSessionReserved,
    proofAssets.privateStudioDetail,
    proofAssets.progressPhotoReserved,
  ],
  "house-calls": [
    proofAssets.villaSessionReserved,
    proofAssets.consultationMomentReserved,
    proofAssets.coachingDetail,
  ],
  "online-coaching": [
    proofAssets.onlineCheckInReserved,
    proofAssets.metricsDetailReserved,
    proofAssets.coachingDetail,
  ],
};

export const serviceHeroAssets: Record<string, MediaAsset> = {
  "private-personal-training": proofAssets.privateStudioSession,
  "couple-training": proofAssets.coupleSessionReserved,
  "house-calls": proofAssets.villaSessionReserved,
  "online-coaching": proofAssets.onlineCheckInReserved,
};

export const landingProofGalleries: Record<string, MediaAsset[]> = {
  "personal-trainer-mauritius": [
    proofAssets.privateStudioSession,
    proofAssets.progressPhotoReserved,
    proofAssets.trainerPortraitReserved,
  ],
  "personal-trainer-grand-baie": [
    proofAssets.privateStudioDetail,
    proofAssets.villaSessionReserved,
    proofAssets.consultationMomentReserved,
  ],
};

export const landingHeroAssets: Record<string, MediaAsset> = {
  "personal-trainer-mauritius": proofAssets.privateStudioSession,
  "personal-trainer-grand-baie": proofAssets.consultationMomentReserved,
};

export const proofArchitectureNotes: CredibilityItem[] = [
  {
    title: "Real asset ready",
    description:
      "Portraits, studio photography, progress images, and service-specific visuals now have dedicated structured slots instead of being improvised page by page.",
  },
  {
    title: "Privacy-first proof",
    description:
      "All proof areas are designed for client-approved imagery only, which suits a premium private gym better than aggressive public transformation marketing.",
  },
  {
    title: "Believable presentation",
    description:
      "Prepared asset slots are labelled clearly so the site feels honest now while staying ready for stronger visual proof later.",
  },
  {
    title: "Credentials ready",
    description:
      "About-page proof areas also support approved certifications and qualification imagery, making future authority drops easy to publish cleanly.",
  },
];

export const firstLiveAssetDropPlan = [
  {
    title: "Trainer portrait",
    asset: proofAssets.trainerPortraitReserved,
    targetPages: ["/", "/about"],
    reason:
      "This is the fastest trust upgrade for the homepage, about page, and lead pages that depend on coach credibility.",
  },
  {
    title: "Homepage and studio hero image",
    asset: proofAssets.privateStudioSession,
    targetPages: ["/", "/personal-trainer-mauritius"],
    reason:
      "A stronger hero-level studio image makes the brand feel more established from the first screen.",
  },
  {
    title: "Arrival or consultation reassurance image",
    asset: proofAssets.consultationMomentReserved,
    targetPages: ["/contact", "/book-consultation"],
    reason:
      "This supports contact confidence and reinforces the private appointment-only arrival experience.",
  },
  {
    title: "Approved results or progress proof",
    asset: proofAssets.progressPhotoReserved,
    targetPages: ["/results", "/services/private-personal-training"],
    reason:
      "One approved results asset can materially strengthen the trust layer on the pages that sit closest to conversion.",
  },
  {
    title: "Credentials or certification detail",
    asset: proofAssets.credentialsDetailReserved,
    targetPages: ["/about", "/personal-trainer-mauritius"],
    reason:
      "A clean credentials image helps the authority story feel more established without adding noise.",
  },
  {
    title: "Service-specific online and house-call visuals",
    asset: proofAssets.onlineCheckInReserved,
    targetPages: ["/services/online-coaching", "/services/house-calls"],
    reason:
      "These assets help the non-studio services feel just as real and premium as the core private-training offer.",
  },
];

export const monthThreeAssetPriority = [
  {
    title: "Homepage hero and trainer portrait",
    targetPages: ["/", "/about", "/personal-trainer-mauritius"],
    assets: [
      proofAssets.privateStudioSession.title,
      proofAssets.trainerPortraitReserved.title,
    ],
    reason:
      "These two assets create the fastest trust lift for search visitors deciding whether the business feels real enough to contact.",
  },
  {
    title: "Private personal training and results proof",
    targetPages: ["/services/private-personal-training", "/results"],
    assets: [
      proofAssets.progressPhotoReserved.title,
      proofAssets.coachingDetail.title,
    ],
    reason:
      "These are the commercial pages where real proof most directly improves conversion confidence.",
  },
  {
    title: "Contact and consultation reassurance image",
    targetPages: ["/contact", "/book-consultation"],
    assets: [proofAssets.consultationMomentReserved.title],
    reason:
      "A strong arrival or consultation image helps the private home-residence model feel calmer and more trustworthy before the first visit.",
  },
  {
    title: "Online and house-call service visuals",
    targetPages: ["/services/online-coaching", "/services/house-calls"],
    assets: [
      proofAssets.onlineCheckInReserved.title,
      proofAssets.villaSessionReserved.title,
    ],
    reason:
      "These assets make the non-studio services feel fully real and commercially credible, not secondary add-ons.",
  },
];
