export type LinkItem = {
  label: string;
  href: string;
};

export type CallToAction = LinkItem & {
  variant?: "default" | "outline" | "ghost";
  messageKey?:
    | "consultation"
    | "packages"
    | "online"
    | "advise"
    | "couples"
    | "houseCalls"
    | "payment";
};

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  note?: string;
};

export type FAQGroup = {
  title: string;
  description: string;
  items: FAQItem[];
};

export type ProofDisplayMode = "full-name" | "first-name" | "initials" | "private";

export type Testimonial = {
  name: string;
  role: string;
  displayMode?: ProofDisplayMode;
  displayName?: string;
  initials?: string;
  headline?: string;
  quote: string;
  result: string;
  sourceLabel?: string;
  location?: string;
  context?: string;
  serviceUsed?: string;
  transformationCategory?: string;
  image?: MediaAsset;
  rating?: number;
  privacyNote?: string;
  privateLabel?: string;
  timeframe?: string;
  challenge?: string;
  approach?: string;
  metrics?: ResultMetric[];
  wanted?: string;
  changed?: string;
};

export type CredibilityItem = {
  title: string;
  description: string;
  note?: string;
};

export type MediaAsset = {
  id: string;
  title: string;
  alt: string;
  caption: string;
  src?: string;
  note?: string;
  seoTitle?: string;
  credit?: string;
  filenameHint?: string;
  category:
    | "trainer"
    | "studio"
    | "equipment"
    | "session"
    | "lifestyle"
    | "results"
    | "travel"
    | "online"
    | "credentials";
  status?: "live" | "reserved";
  aspect?: "landscape" | "portrait" | "square";
  layout?: "feature" | "standard";
  objectPosition?: string;
  replacementPriority?: "high" | "medium" | "low";
};

export type ResultMetric = {
  label: string;
  value: string;
  note?: string;
};

export type ResultStory = {
  slug: string;
  title: string;
  category: string;
  clientProfile?: string;
  displayMode?: ProofDisplayMode;
  displayName?: string;
  initials?: string;
  context?: string;
  privateLabel?: string;
  summary: string;
  timeline: string;
  goal?: string;
  startingPoint?: string;
  challenge?: string;
  serviceUsed?: string;
  approach?: string;
  visibleResult?: string;
  quote?: string;
  image?: MediaAsset;
  metrics?: ResultMetric[];
  whatTheyWanted?: string;
  whatChanged?: string;
  proofNote?: string;
  outcomes: string[];
};

export type PricingItem = {
  slug: string;
  name: string;
  description: string;
  amount: number;
  unit: string;
  cadence?: string;
  badge?: string;
  type: "one-time" | "package" | "subscription" | "deposit";
  idealFor: string;
  features: string[];
  serviceSlug: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortName: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  idealFor: string;
  image: string;
  overview: string[];
  benefits: FeatureItem[];
  pillars: FeatureItem[];
  audience: string[];
  faq: FAQItem[];
  relatedLinks?: LinkItem[];
  primaryCtaMessageKey: string;
  pricingSlugs: string[];
};

export type LandingSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string[];
  sections: LandingSection[];
  faq: FAQItem[];
  relatedLinks?: LinkItem[];
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  featuredImage: string;
  featured: boolean;
  excerpt: string;
  keywords: string[];
  intro: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
  faq: FAQItem[];
  conversionLinks?: LinkItem[];
  relatedSlugs: string[];
};

export type EditorialIdea = {
  slug: string;
  title: string;
  category: string;
  intent: string;
  description: string;
  audience: string;
  primaryKeyword: string;
  targetHref: string;
  status: "Brief Ready" | "Planned";
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  intro: string[];
  sections: {
    title: string;
    body: string[];
  }[];
};
