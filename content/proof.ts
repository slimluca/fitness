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
      "A quiet detail view that reinforces the calm, appointment-only studio atmosphere.",
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
      "Close coaching attention in a private setting where the session can stay focused and personal.",
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
      "A calm trainer portrait area that keeps the about page personal without crowding the layout.",
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
      "A clean credentials area for qualifications and professional trust signals.",
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
      "A focused equipment detail that supports the premium private gym atmosphere.",
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
      "A couple coaching visual area for clients who prefer shared private training.",
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
      "A house call visual area for villa guests and private residence clients who want coaching brought to them.",
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
      "A remote coaching visual area for programme reviews, check-ins, and travel-friendly support.",
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
      "A privacy-safe progress area for approved client outcomes and measured change.",
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
      "A clean space for measured progress, mobility changes, or other client-approved proof.",
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
      "A discreet consultation visual that reflects the calm appointment-only arrival experience.",
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
