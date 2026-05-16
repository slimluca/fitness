import { proofAssets } from "@/content/proof";
import type { ResultStory, Testimonial } from "@/content/types";

export const privateRoutineResetTestimonial: Testimonial = {
  name: "Name withheld by request",
  role: "Business owner",
  displayMode: "initials",
  displayName: "A.M.",
  initials: "AM",
  headline: "A calmer environment made consistency realistic again",
  sourceLabel: "Private client testimonial",
  quote:
    "I did not need a louder gym. I needed a better environment. The private setting removed the friction I always felt in commercial gyms, and the coaching was precise from the first session.",
  result: "Built a sustainable routine with visible strength and body-composition progress.",
  location: "Grand Baie, Mauritius",
  context: "Grand Baie business owner",
  serviceUsed: "Private Personal Training",
  transformationCategory: "Fat loss and strength",
  image: proofAssets.privateStudioDetail,
  rating: 5,
  privateLabel: "Initials shown with client approval",
  timeframe: "12-week private coaching block",
  challenge: "Repeated stop-start attempts in commercial gyms and low adherence.",
  approach:
    "Private one-to-one sessions, realistic weekly structure, and a calmer training environment.",
  metrics: [
    { label: "Time frame", value: "12 weeks" },
    { label: "Focus", value: "Fat loss and strength" },
    { label: "Format", value: "Private studio coaching" },
  ],
  privacyNote:
    "Shared in a privacy-respectful format to match the appointment-only coaching environment.",
  wanted:
    "A discreet place to train seriously without crowds, waiting, or feeling observed.",
  changed:
    "Weekly adherence improved, strength numbers moved up, and training finally became part of normal life instead of something I kept restarting.",
};

export const coupleMomentumTestimonial: Testimonial = {
  name: "Names withheld by request",
  role: "Two professionals",
  displayMode: "private",
  displayName: "Private couple case study",
  headline: "Shared accountability without compromising personal coaching",
  sourceLabel: "Privacy-safe client feedback",
  quote:
    "The sessions felt private, organised, and genuinely premium. We were both coached at our own level, but the shared appointment made it much easier to stay committed.",
  result: "More energy, better consistency, and a stronger shared routine.",
  location: "North Mauritius",
  context: "Two working professionals in North Mauritius",
  serviceUsed: "Couple Training",
  transformationCategory: "Accountability and consistency",
  rating: 5,
  privateLabel: "Names kept private by request",
  timeframe: "8-week couple training block",
  challenge: "Protecting training time as two busy professionals with changing schedules.",
  approach:
    "Shared private sessions with individual coaching cues and a protected weekly appointment.",
  metrics: [
    { label: "Time frame", value: "8 weeks" },
    { label: "Focus", value: "Routine and accountability" },
    { label: "Format", value: "Private coaching for two" },
  ],
  privacyNote:
    "Formatted to protect client privacy while still showing the structure of the couple-training experience.",
  wanted:
    "A structured way to train together without joining a public gym or wasting time on generic classes.",
  changed:
    "Training became a protected part of the week, and both clients saw clear improvements in energy, confidence, and strength.",
};

export const onlineConsistencyTestimonial: Testimonial = {
  name: "Client name shared privately",
  role: "Frequent traveller",
  displayMode: "private",
  displayName: "Remote coaching case study",
  headline: "Remote coaching that still felt personal and accountable",
  sourceLabel: "Private client testimonial",
  quote:
    "What surprised me most was how personal the online coaching felt. The program, the WhatsApp support, and the reviews kept me moving even when my schedule was changing constantly.",
  result: "Maintained training momentum through travel and unpredictable work weeks.",
  location: "Mauritius and abroad",
  context: "Travel-heavy professional moving between Mauritius and abroad",
  serviceUsed: "Online Coaching",
  transformationCategory: "Consistency during travel",
  rating: 5,
  privateLabel: "Identity kept private for discretion",
  timeframe: "Ongoing monthly coaching",
  challenge: "Frequent travel and changing locations that usually disrupted consistency.",
  approach:
    "Monthly programme updates, WhatsApp accountability, and flexible check-ins built around travel.",
  metrics: [
    { label: "Format", value: "Monthly online coaching" },
    { label: "Focus", value: "Consistency during travel" },
    { label: "Support", value: "WhatsApp check-ins" },
  ],
  privacyNote:
    "Presented without personal identifiers because the client moves between countries and preferred a discreet format.",
  wanted:
    "A coaching structure that could survive flights, hotel stays, and inconsistent routines.",
  changed:
    "Instead of falling off every time life became busy, the client kept training standards high and maintained progress across different environments.",
};

export const postureConfidenceTestimonial: Testimonial = {
  name: "Name withheld by request",
  role: "Desk-based professional",
  displayMode: "initials",
  displayName: "J.R.",
  initials: "JR",
  headline: "Better movement quality changed the whole training experience",
  sourceLabel: "Private client testimonial",
  quote:
    "The biggest win was not just looking better. It was moving better. The sessions focused on posture, control, and strength in a way I had never experienced in a crowded gym.",
  result: "Improved posture, reduced stiffness, and rebuilt confidence with resistance training.",
  location: "Mauritius",
  context: "Desk-based professional in Mauritius",
  serviceUsed: "Private Personal Training",
  transformationCategory: "Posture and confidence",
  image: proofAssets.coachingDetail,
  rating: 5,
  privateLabel: "Initials shared with client approval",
  timeframe: "10-week posture and strength phase",
  challenge: "Poor posture, stiffness, and low confidence around strength work.",
  approach:
    "Technique-led private coaching with a strong emphasis on movement quality and progression.",
  metrics: [
    { label: "Time frame", value: "10 weeks" },
    { label: "Focus", value: "Posture and confidence" },
    { label: "Format", value: "Private personal training" },
  ],
  privacyNote:
    "Shared with identifying details removed, which is consistent with the brand's premium private positioning.",
  wanted:
    "To address stiffness, poor posture, and a lack of confidence under load.",
  changed:
    "Movement quality improved, day-to-day discomfort dropped, and strength training no longer felt intimidating or rushed.",
};

export const testimonials: Testimonial[] = [
  privateRoutineResetTestimonial,
  coupleMomentumTestimonial,
  onlineConsistencyTestimonial,
  postureConfidenceTestimonial,
];

export const homepageTestimonials = [
  privateRoutineResetTestimonial,
  coupleMomentumTestimonial,
  postureConfidenceTestimonial,
];

export const pricingTestimonials = [
  privateRoutineResetTestimonial,
  onlineConsistencyTestimonial,
  postureConfidenceTestimonial,
];

export const resultsPageTestimonials = testimonials;

export const contactPageTestimonials = [
  privateRoutineResetTestimonial,
  coupleMomentumTestimonial,
];

export const aboutPageTestimonials = [
  postureConfidenceTestimonial,
  privateRoutineResetTestimonial,
];

export const serviceTestimonialPlacements: Record<string, Testimonial[]> = {
  "private-personal-training": [
    privateRoutineResetTestimonial,
    postureConfidenceTestimonial,
  ],
  "couple-training": [coupleMomentumTestimonial, privateRoutineResetTestimonial],
  "house-calls": [coupleMomentumTestimonial, onlineConsistencyTestimonial],
  "online-coaching": [onlineConsistencyTestimonial, privateRoutineResetTestimonial],
};

export const landingPageTestimonials: Record<string, Testimonial[]> = {
  "personal-trainer-mauritius": [
    privateRoutineResetTestimonial,
    postureConfidenceTestimonial,
    coupleMomentumTestimonial,
  ],
  "personal-trainer-grand-baie": [
    privateRoutineResetTestimonial,
    coupleMomentumTestimonial,
  ],
};

export const privateFatLossStory: ResultStory = {
  slug: "fat-loss-confidence",
  title: "Private fat-loss reset with full discretion",
  category: "Fat loss",
  clientProfile: "Busy professional in Grand Baie",
  displayMode: "initials",
  displayName: "A.M.",
  initials: "AM",
  context: "Grand Baie business owner",
  privateLabel: "Initials shown with client approval",
  summary:
    "A client with a demanding schedule wanted to reduce body fat and rebuild confidence, but every commercial gym attempt had failed because the environment felt crowded, inefficient, and difficult to sustain.",
  timeline: "12-week coaching block",
  goal: "Reduce body fat, rebuild confidence, and finally stay consistent.",
  startingPoint:
    "Repeated stop-start attempts in public gyms and low confidence around maintaining a routine.",
  challenge:
    "The client wanted visible change without crowds, pressure, or another unsustainable extreme approach.",
  serviceUsed: "Private Personal Training",
  approach:
    "Progressive one-to-one coaching, weekly session structure, nutrition consistency, and a calmer private environment that removed common friction points.",
  visibleResult:
    "Body-composition progress, stronger adherence, and much greater comfort with training as part of weekly life.",
  quote:
    "The privacy made it easier to focus on doing the work instead of wondering who was watching.",
  image: proofAssets.privateStudioSession,
  metrics: [
    { label: "Time frame", value: "12 weeks" },
    { label: "Primary focus", value: "Body composition and confidence" },
    { label: "Coaching format", value: "Private studio sessions" },
  ],
  whatTheyWanted:
    "A private, high-trust setting where fat loss could be approached with structure instead of extremes.",
  whatChanged:
    "The client developed a repeatable weekly routine, improved nutrition consistency, and saw body-composition changes without needing public gym exposure.",
  proofNote:
    "Ready for future waist, body-weight, and progress-photo proof once approved for publication.",
  outcomes: [
    "Noticeable drop in waist measurement and body-fat trend",
    "Better session adherence and less stop-start behaviour",
    "Higher confidence in clothing, routine, and energy",
  ],
};

export const coupleAccountabilityStory: ResultStory = {
  slug: "couple-accountability",
  title: "Couple training that turned intention into momentum",
  category: "Accountability",
  clientProfile: "Two professionals balancing work and family commitments",
  displayMode: "private",
  displayName: "Private couple case study",
  context: "North Mauritius professionals",
  privateLabel: "Names kept private by request",
  summary:
    "Both clients wanted to train consistently but found it hard to protect time for themselves. A shared private appointment created accountability without sacrificing individual coaching quality.",
  timeline: "8-week shared programme",
  goal: "Create a realistic routine both clients could actually keep.",
  startingPoint:
    "Training was easy to postpone because work and family commitments always felt more urgent.",
  challenge:
    "Both clients needed shared accountability without feeling like one person would hold the other back.",
  serviceUsed: "Couple Training",
  approach:
    "Shared private sessions with clear coaching roles for each client, calendar protection, and a format that still felt personalised.",
  visibleResult:
    "More reliable attendance, stronger momentum between sessions, and improved confidence for both people.",
  quote:
    "Once the appointment was protected in the calendar, training stopped feeling optional.",
  image: proofAssets.coupleSessionReserved,
  metrics: [
    { label: "Time frame", value: "8 weeks" },
    { label: "Primary focus", value: "Consistency and accountability" },
    { label: "Coaching format", value: "Private coaching for two" },
  ],
  whatTheyWanted:
    "A premium, private format that made consistency easier and removed the stress of public gyms.",
  whatChanged:
    "Training became a protected calendar commitment, both clients improved confidence, and the routine became easier to maintain outside the studio as well.",
  proofNote:
    "Ready for future joint progress metrics, session attendance data, and approved testimonial photography.",
  outcomes: [
    "More consistent weekly attendance",
    "Visible strength gains and better general energy",
    "Shared accountability that improved follow-through between sessions",
  ],
};

export const posturePerformanceStory: ResultStory = {
  slug: "posture-performance",
  title: "Posture, mobility, and strength rebuilt together",
  category: "Posture",
  clientProfile: "Desk-based client dealing with stiffness and low confidence",
  displayMode: "initials",
  displayName: "J.R.",
  initials: "JR",
  context: "Mauritius desk-based professional",
  privateLabel: "Initials shared with approval",
  summary:
    "The initial need was not simply to work harder. It was to move better. The coaching focused on posture, movement quality, and progressive strength so the client could train confidently again.",
  timeline: "10-week technique and strength phase",
  goal: "Reduce stiffness and rebuild confidence under load.",
  startingPoint:
    "Long desk hours, tight shoulders, and low trust in how the body would feel during strength work.",
  challenge:
    "The client needed better movement quality before pushing harder, not just more intensity.",
  serviceUsed: "Private Personal Training",
  approach:
    "Movement-quality coaching, posture-focused exercise selection, gradual strength loading, and regular technical feedback.",
  visibleResult:
    "Better posture, less daily tightness, and a far more confident relationship with resistance training.",
  quote:
    "The difference was finally having enough coaching attention to correct the things that were holding me back.",
  image: proofAssets.coachingDetail,
  metrics: [
    { label: "Time frame", value: "10 weeks" },
    { label: "Primary focus", value: "Posture and movement quality" },
    { label: "Coaching format", value: "Technique-led private coaching" },
  ],
  whatTheyWanted:
    "To reduce stiffness, improve posture, and feel more capable during strength work.",
  whatChanged:
    "The client moved with better control, experienced less day-to-day tightness, and developed a far stronger relationship with resistance training.",
  proofNote:
    "Ready for future mobility-screen snapshots, posture comparison imagery, and approved narrative proof.",
  outcomes: [
    "Better shoulder position and more confident movement",
    "Reduced stiffness from long workdays",
    "Improved tolerance for progressive strength training",
  ],
};

export const villaGuestContinuityStory: ResultStory = {
  slug: "villa-guest-continuity",
  title: "Private coaching continuity for a villa guest in Grand Baie",
  category: "Travel fitness",
  clientProfile: "Short-stay villa guest wanting premium coaching support",
  displayMode: "private",
  displayName: "Private villa guest case study",
  context: "Grand Baie villa guest",
  privateLabel: "Guest identity kept private",
  summary:
    "The client wanted to stay disciplined during a limited stay in Mauritius without joining a public gym. A private coaching plan and carefully scheduled sessions created structure immediately.",
  timeline: "Short-stay coaching schedule",
  goal: "Maintain discipline and structure during a limited stay in Mauritius.",
  startingPoint:
    "Travel usually meant lower activity, less training quality, and a loss of routine.",
  challenge:
    "The client wanted premium support without joining a public gym or losing privacy during the stay.",
  serviceUsed: "House Calls",
  approach:
    "A short-stay coaching structure built around the villa schedule, practical session planning, and a clear continuation strategy after departure.",
  visibleResult:
    "Training momentum stayed intact throughout the trip and the client left with a clearer plan for what came next.",
  quote:
    "It felt far more seamless than trying to figure out an unfamiliar commercial gym during a short stay.",
  image: proofAssets.villaSessionReserved,
  metrics: [
    { label: "Time frame", value: "Short-stay block" },
    { label: "Primary focus", value: "Travel continuity" },
    { label: "Coaching format", value: "House call sessions" },
  ],
  whatTheyWanted:
    "A premium coaching option that respected privacy, schedule, and the temporary nature of the stay.",
  whatChanged:
    "The client maintained training standards during travel, avoided losing momentum, and left with a clearer structure for continuing afterwards.",
  proofNote:
    "Ready for future concierge referral proof, stay-duration context, and approved service imagery.",
  outcomes: [
    "Consistency maintained during travel",
    "No need for commercial gym access during the stay",
    "Clear next-step plan after departure from Mauritius",
  ],
};

export const resultStories: ResultStory[] = [
  privateFatLossStory,
  coupleAccountabilityStory,
  posturePerformanceStory,
  villaGuestContinuityStory,
];

export const homepageResultStories = [
  privateFatLossStory,
  posturePerformanceStory,
];

export const resultsPageResultStories = resultStories;

export const firstReviewDropTargets = [
  {
    placement: "Homepage",
    key: "home",
    notes:
      "Use 2 to 3 short privacy-safe reviews that show private-gym comfort, professionalism, and consistency.",
  },
  {
    placement: "Results page",
    key: "results",
    notes:
      "Add the strongest longer-form quote first, especially if it includes a clear before-and-after story or measurable outcome.",
  },
  {
    placement: "Private personal training page",
    key: "private-personal-training",
    notes:
      "Lead with the review that best explains why one-to-one coaching in a private environment felt different from a public gym.",
  },
  {
    placement: "Pricing page",
    key: "pricing",
    notes:
      "Use proof that makes the investment feel justified through service quality, consistency, and professionalism.",
  },
  {
    placement: "About page",
    key: "about",
    notes:
      "Lead with a review that reinforces professionalism, coaching quality, and why the private environment felt more reassuring than a public gym.",
  },
  {
    placement: "Personal Trainer Mauritius landing page",
    key: "personal-trainer-mauritius",
    notes:
      "Choose a review that speaks to Mauritius-wide intent, then support it with a Grand Baie-specific private coaching story.",
  },
  {
    placement: "Contact page",
    key: "contact",
    notes:
      "Use concise, confidence-building proof that reassures serious visitors they will receive a personal reply and a discreet appointment-only experience.",
  },
];

export const winnerPageReviewGuidance = {
  home: {
    targetCount: "2 to 3 reviews",
    bestFit:
      "Shorter quotes about professionalism, privacy, consistency, and why the studio felt easier to trust than a public gym.",
  },
  "personal-trainer-mauritius": {
    targetCount: "2 reviews",
    bestFit:
      "One broader Mauritius-facing review plus one Grand Baie-specific private-coaching story with a clear result summary.",
  },
  "private-personal-training": {
    targetCount: "2 reviews",
    bestFit:
      "Proof that one-to-one private coaching improved confidence, posture, adherence, or body composition more effectively than a crowded gym setting.",
  },
  pricing: {
    targetCount: "1 to 2 reviews",
    bestFit:
      "A review that makes the premium investment feel justified through coaching quality, structure, and service standards.",
  },
  results: {
    targetCount: "1 longer review or case-study quote",
    bestFit:
      "The clearest before-and-after narrative, especially if the client approved a measurable time frame, routine change, or stronger visible outcome.",
  },
  contact: {
    targetCount: "1 concise reassurance review",
    bestFit:
      "Short proof that the enquiry, follow-up, and private appointment process felt personal, fast, and professional.",
  },
  about: {
    targetCount: "1 to 2 reviews",
    bestFit:
      "Proof that supports Fabrizio's professionalism, coaching style, and the calm private environment rather than hype-heavy transformation language.",
  },
} as const;
