import type { CredibilityItem, LinkItem, ProcessStep } from "@/content/types";

const defaultSiteUrl = "https://www.fitnessgrandbaie.com";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;
const normalizedSiteUrl = (
  /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Fitness Grand Baie",
  visualBrandName: "Fitness by Fabrizio",
  domain: normalizedSiteUrl,
  ogImage: "/logo.jpg",
  logoImage: "/logo.jpg",
  location: "Grand Baie, Mauritius",
  region: "North Mauritius",
  phone: "+23058442849",
  phoneDisplay: "+230 5844 2849",
  email: "fitnessgrandbaie@gmail.com",
  primaryCtaHref: "/contact?intent=consultation",
  availabilityCtaHref: "/contact",
  appointmentNotice:
    "Appointment-only private gym in a home residence | Grand Baie, Mauritius",
  description:
    "Personal trainer in Mauritius for private premium coaching in an appointment-only home-residence gym in Grand Baie, plus online coaching for clients who want focused support and privacy.",
  coachName: "Fabrizio",
  whatsappMessages: {
    consultation:
      "Hello, I would like to book a consultation for private personal training in Grand Baie.",
    packages:
      "Hello, I am interested in your personal training packages in Mauritius.",
    online:
      "Hello, I would like more information about online coaching.",
    advise:
      "Hello, I want to start with a personal trainer in Mauritius. Please advise on the best option.",
    couples:
      "Hello, I am interested in couple training. Please send availability and pricing.",
    houseCalls:
      "Hello, I would like to request availability for house call personal training in Mauritius.",
    payment:
      "Hello, I have completed my payment and would like to confirm my appointment and preferred schedule.",
  },
  socialProof: [
    "Private coaching in Grand Baie, Mauritius",
    "Appointment-only home-residence gym",
    "WhatsApp-first support and direct booking",
  ],
  keywords: [
    "Personal Trainer Mauritius",
    "Personal Trainer Grand Baie",
    "Private Gym Mauritius",
    "Private Personal Trainer Mauritius",
    "Fitness Coach Mauritius",
    "Personal Training Grand Baie",
    "Online Personal Trainer Mauritius",
    "Appointment Only Gym Mauritius",
    "Private Gym Grand Baie",
  ],
};

export const businessIdentityHighlights: CredibilityItem[] = [
  {
    title: "Business identity",
    description:
      "Fitness Grand Baie is an appointment-only private gym in a home residence in Grand Baie, Mauritius, not a public commercial gym.",
  },
  {
    title: "Visible brand",
    description:
      "The public-facing brand is Fitness by Fabrizio, with the lion mark carrying the premium black-and-gold identity across the site.",
  },
  {
    title: "Service profile",
    description:
      "The offer is intentionally focused on private personal training and online coaching for clients who value privacy, structure, and a calmer environment.",
  },
  {
    title: "Client fit",
    description:
      "Residents, expats, busy professionals, villa guests, and beginners choose the service because they want private coaching rather than crowded gym traffic.",
  },
];

export const googleBusinessProfileHighlights: CredibilityItem[] = [
  {
    title: "Consistent local description",
    description:
      "Every page reinforces the same business story: premium private coaching in Grand Baie, Mauritius with consultation-first next steps.",
  },
  {
    title: "Appointment-only clarity",
    description:
      "The home-residence setting and no-walk-in policy are explained clearly so local visitors understand the studio is exclusive, discreet, and scheduled in advance.",
  },
  {
    title: "WhatsApp-first convenience",
    description:
      "The site is aligned with real local behaviour by making WhatsApp the fastest route for availability, service fit, and follow-up questions.",
  },
  {
    title: "Review-ready proof structure",
    description:
      "Testimonials, case studies, and proof areas are built to accept Google-style reviews, privacy-safe quotes, and measurable client outcomes without redesign.",
  },
];

export const businessDescriptions = {
  short:
    "Private personal trainer in Grand Baie, Mauritius with appointment-only coaching in a home residence.",
  medium:
    "Fitness Grand Baie is an appointment-only private gym in a home residence in Grand Baie, Mauritius, offering private personal training and online coaching.",
  long:
    "Fitness Grand Baie is an appointment-only private gym in a home residence in Grand Baie, Mauritius. The business delivers private personal training and online coaching for residents, expats, villa guests, busy professionals, and beginners who want a premium alternative to crowded public gyms. Enquiries are handled personally, with WhatsApp as the fastest route for availability, consultation follow-up, and scheduling clarity.",
};

export const citationConsistencyReference = {
  businessName: "Fitness Grand Baie",
  shortDescription: businessDescriptions.short,
  mediumDescription: businessDescriptions.medium,
  longDescription: businessDescriptions.long,
  phoneDisplay: "+230 5844 2849",
  phoneDial: "+23058442849",
  location: "Grand Baie, Mauritius",
  appointmentOnlyLine:
    "Appointment-only private gym in a home residence. Not open to walk-ins.",
  privateGymLine:
    "Private coaching studio in a home residence in Grand Baie, Mauritius, not a public commercial gym.",
  serviceLine:
    "Private personal training and online coaching.",
  contactLine:
    "WhatsApp-first enquiries, consultation-first booking flow, and private scheduling confirmation.",
};

export const reviewRequestTemplates = {
  short:
    "Thank you again for training with Fitness Grand Baie. If the experience felt valuable, a short review about the private coaching environment, professionalism, or results would help a lot.",
  medium:
    "Thank you again for working with Fitness Grand Baie. If you felt well supported, a short review mentioning the private environment, coaching quality, or the results you have noticed would be greatly appreciated.",
  privateFriendly:
    "If you prefer discretion, even a short privacy-safe review about the coaching quality, private environment, or how the process felt can make a meaningful difference.",
};

export const citationCategoryLabels = [
  "Personal Trainer",
  "Private Gym",
  "Fitness Coach",
  "Personal Training",
  "Online Coaching",
];

export const gbpRolloutReference = {
  shortDescription:
    "Appointment-only private personal trainer in Grand Baie, Mauritius with coaching inside a private home-residence gym.",
  mediumDescription: businessDescriptions.medium,
  longDescription: businessDescriptions.long,
  categoryLabels: citationCategoryLabels,
  serviceLabels: [
    "Private Personal Training",
    "Online Coaching",
  ],
  appointmentOnlyLine:
    "Appointment-only private gym in a home residence. Not open to walk-ins or public gym traffic.",
  privateGymLine:
    "Private coaching studio in a home residence in Grand Baie, Mauritius, not a public commercial gym.",
  locationLine: "Grand Baie, Mauritius",
  phoneDisplay: "+230 5844 2849",
  phoneDial: "+23058442849",
  contactLine:
    "WhatsApp-first communication with consultation-first scheduling and privacy-respectful arrival handling.",
  reviewRequestLine:
    "If the private environment, professionalism, or results felt valuable, a short review helps the right local clients feel more confident contacting the business.",
};

export const leadPatternGuidance: CredibilityItem[] = [
  {
    title: "Homepage-origin leads",
    description:
      "Usually broad-intent visitors deciding whether the brand feels trustworthy enough to enquire. If lead quality is weak, clarify ideal fit and private-gym positioning earlier.",
  },
  {
    title: "Pricing-origin leads",
    description:
      "Usually higher-intent prospects comparing value, frequency, and service format. If leads stall here, improve reassurance around service fit, privacy, and what happens after enquiry.",
  },
  {
    title: "Service-page leads",
    description:
      "Usually warmer, more specific leads. If conversion is weak, the service page often needs stronger proof near the top or a clearer availability route.",
  },
  {
    title: "Landing-page leads",
    description:
      "Mauritius and Grand Baie landing pages often attract comparison traffic. If quality is weak, sharpen the distinction between private coaching, location fit, and the best next step.",
  },
  {
    title: "Blog-origin leads",
    description:
      "Often earlier in the decision journey. If traffic is healthy but enquiries are weak, improve article-to-service links, end-of-article CTAs, and category-to-money-page pathways.",
  },
  {
    title: "WhatsApp-heavy vs form-heavy",
    description:
      "WhatsApp-heavy traffic usually values speed and quick clarity. Form-heavy traffic often carries better context. Use both patterns to refine CTA prominence and qualification guidance rather than forcing one path.",
  },
];

export const monthThreeReviewRollout = [
  {
    title: "Homepage first",
    description:
      "Lead with 2 to 3 concise privacy-safe reviews that mention professionalism, private-gym comfort, and consistency.",
  },
  {
    title: "Mauritius landing page next",
    description:
      "Use one broader Mauritius-facing review plus one Grand Baie-specific private-coaching story so the page speaks to both trust and local intent.",
  },
  {
    title: "Private personal training and pricing",
    description:
      "Publish the clearest one-to-one result story and the strongest investment-justifying review once approval is available.",
  },
  {
    title: "Results, contact, and about",
    description:
      "Use longer-form or more reassuring proof here: measurable change on Results, confidence-building review on Contact, and professionalism-focused review on About.",
  },
];

export const reviewReadinessHighlights: CredibilityItem[] = [
  {
    title: "Privacy-safe client proof",
    description:
      "Testimonials can be published as full names, first names, initials, or private labels depending on what the client approves.",
  },
  {
    title: "Google review-friendly structure",
    description:
      "The proof system supports short review quotes, service context, location context, and result summaries in a format that still feels premium.",
  },
  {
    title: "Case-study upgrade path",
    description:
      "Stronger client stories can later expand into full case studies with challenge, approach, time frame, measurable proof, and approved imagery.",
  },
];

export const primaryNavigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Personal Training", href: "/personal-training" },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const footerSeoLinks: LinkItem[] = [
  { label: "Personal Trainer Mauritius", href: "/personal-trainer-mauritius" },
  { label: "Free Tools", href: "/tools" },
];

export const serviceAreaNotes = [
  "Grand Baie and nearby northern Mauritius",
  "Private residences, villas, and concierge-arranged stays",
  "Appointment scheduling confirmed in advance via WhatsApp or booking form",
];

export const coachCredibility: CredibilityItem[] = [
  {
    title: "Private coaching standard",
    description:
      "Fitness Grand Baie is built around focused one-to-one coaching rather than a crowded public gym model.",
  },
  {
    title: "Science-based approach",
    description:
      "Programming prioritises movement quality, progression, posture, strength, body composition, and long-term adherence.",
  },
  {
    title: "Performance background",
    description:
      "The brand story includes experience coaching boxing champion Osborn \"Big Daddy\" Machimana, adding a credible performance layer to the business.",
  },
  {
    title: "Premium client profile",
    description:
      "Trusted by residents, expats, busy professionals, villa guests, and beginners who prefer privacy over public gym traffic.",
  },
];

export const privateCoachingAdvantages: CredibilityItem[] = [
  {
    title: "No walk-in distractions",
    description:
      "Every session is scheduled, protected, and built around your goals instead of a noisy gym floor.",
  },
  {
    title: "Stronger technical coaching",
    description:
      "Private coaching allows closer attention to posture, biomechanics, exercise quality, and progression.",
  },
  {
    title: "Better fit for beginners",
    description:
      "Clients who feel uncomfortable in public gyms usually find it easier to stay consistent in a calmer private setting.",
  },
  {
    title: "Premium discretion",
    description:
      "A home-residence gym in Grand Baie creates a more refined, discreet environment for high-trust coaching.",
  },
];

export const bookingJourney: ProcessStep[] = [
  {
    title: "Submit your enquiry",
    description:
      "Choose the service, outline your goals, and share the schedule that works best for you.",
  },
  {
    title: "Personal review",
    description:
      "Every enquiry is reviewed to confirm fit, privacy expectations, and the strongest next step.",
  },
  {
    title: "WhatsApp confirmation",
    description:
      "WhatsApp is used for the fastest communication, availability confirmation, and scheduling refinement.",
  },
  {
    title: "Private appointment",
    description:
      "Access details are shared only after confirmation because the gym operates from a private home residence.",
  },
];

export const leadFlowCommitments: CredibilityItem[] = [
  {
    title: "Expected response time",
    description: "Most enquiries should receive a reply within one business day.",
  },
  {
    title: "WhatsApp-first support",
    description:
      "Quick questions about availability, service fit, and next steps are best handled on WhatsApp.",
  },
  {
    title: "Privacy respected",
    description:
      "Residential location details are handled discreetly and never presented like a public walk-in facility.",
  },
];

export const consultationExpectations: CredibilityItem[] = [
  {
    title: "What to include first",
    description:
      "Goals, training background, preferred service, schedule preference, and any limitations help the reply feel more useful from the first message.",
  },
  {
    title: "What happens after enquiry",
    description:
      "Availability, service fit, and the strongest next step are confirmed personally rather than pushed through a generic public-gym process.",
  },
  {
    title: "Why WhatsApp matters",
    description:
      "WhatsApp is the quickest way to finalise timing, continue the conversation after a form, and reduce delay for serious enquiries.",
  },
  {
    title: "Privacy before arrival",
    description:
      "Exact residential details are only shared after fit and scheduling are confirmed because the gym is private and appointment only.",
  },
];
