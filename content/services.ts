import { pricingItems } from "@/content/pricing";
import type { SeoLandingPage, ServiceItem } from "@/content/types";

export const services: ServiceItem[] = [
  {
    slug: "private-personal-training",
    name: "Private Personal Training",
    shortName: "One-on-One Private Training",
    keyword: "Private Personal Trainer Mauritius",
    metaTitle:
      "Private Personal Trainer Mauritius | One-to-One Coaching in Grand Baie",
    metaDescription:
      "Train one-to-one with a private personal trainer in Mauritius inside an appointment-only home-residence gym in Grand Baie. Ideal for privacy, posture, strength, fat loss, and better long-term consistency.",
    heroTitle: "Private Personal Trainer Mauritius in an Appointment-Only Gym",
    heroDescription:
      "Work one-to-one inside an appointment-only private gym in a home residence in Grand Baie, Mauritius with structured coaching, calmer sessions, and more personal attention than a public commercial gym can offer.",
    idealFor:
      "Clients who want expert coaching, privacy, and a highly personalised training environment.",
    image: "/training-session.jpeg",
    overview: [
      "This is private personal training built for clients who want real guidance without the distractions of a commercial gym. Sessions take place in a clean home-residence studio designed around discretion, professionalism, and measurable progress.",
      "Coaching starts with your goals, movement quality, and schedule realities. From there, each session is programmed to improve strength, body composition, posture, confidence, and long-term consistency.",
    ],
    benefits: [
      {
        title: "True one-on-one attention",
        description:
          "Every minute is focused on your movement quality, progression, and results.",
      },
      {
        title: "Private studio advantage",
        description:
          "No crowds, no waiting, and no performance anxiety from a public gym floor.",
      },
      {
        title: "Programmed progression",
        description:
          "Sessions are connected through a plan instead of being random workouts.",
      },
    ],
    pillars: [
      {
        title: "Assessment first",
        description:
          "Movement, posture, and lifestyle factors shape the plan from the start.",
      },
      {
        title: "Science-based coaching",
        description:
          "Technique, load, volume, and intensity are adjusted with purpose.",
      },
      {
        title: "Lifestyle support",
        description:
          "WhatsApp follow-up helps bridge the gap between sessions and daily life.",
      },
    ],
    audience: [
      "Beginners seeking confidence and privacy",
      "Busy professionals who value time and discretion",
      "Clients focused on posture, strength, fat loss, or toning",
      "Residents and expats wanting a premium alternative to public gyms",
    ],
    faq: [
      {
        question: "Is this suitable for complete beginners?",
        answer:
          "Yes. Private coaching is often the best starting point for beginners because sessions are fully tailored and there is no pressure from a public environment.",
      },
      {
        question: "Do you personalise workouts and progression?",
        answer:
          "Yes. The program is adjusted to your body, schedule, training age, and goal mix rather than using a one-size-fits-all routine.",
      },
      {
        question: "Can I buy a package online?",
        answer:
          "Not yet through the public website flow. For now, the best next step is to book a consultation, message on WhatsApp, or Book Consultation so the right option can be confirmed personally.",
      },
      {
        question: "Is this training done inside a public gym?",
        answer:
          "No. Sessions take place in an appointment-only private gym in a home residence in Grand Baie, Mauritius.",
      },
      {
        question: "Can I ask questions on WhatsApp before booking?",
        answer:
          "Yes. WhatsApp is ideal for quick questions about service fit, pricing direction, and availability before you commit to a consultation.",
      },
      {
        question: "How much personal training should I do each week?",
        answer:
          "That depends on your goals, schedule, and recovery, but many clients make strong progress with two or three well-structured sessions per week supported by a realistic routine outside the gym.",
      },
    ],
    primaryCtaMessageKey: "consultation",
    pricingSlugs: pricingItems
      .filter((item) => item.serviceSlug === "private-personal-training")
      .map((item) => item.slug),
  },
  {
    slug: "couple-training",
    name: "Couple Training",
    shortName: "Couple Training",
    keyword: "Couple Training Mauritius",
    metaTitle: "Couple Training Mauritius | Private Gym Grand Baie",
    metaDescription:
      "Train together in a premium private gym in Grand Baie. Couple training in Mauritius with professional coaching, accountability, and appointment-only privacy.",
    heroTitle: "Couple Training with Accountability and Total Privacy",
    heroDescription:
      "Share the discipline, the coaching, and the results in a premium private session built for couples or friends training together.",
    idealFor:
      "Pairs who want motivation, structure, and a discreet training environment.",
    image: "/training-session.jpeg",
    overview: [
      "Couple training combines premium private coaching with the motivational advantage of training alongside someone you trust. Sessions are adapted so both clients are challenged at the right level without compromising form or pacing.",
      "It works particularly well for partners who want to improve health together, rebuild routine, or make training more enjoyable and easier to maintain.",
    ],
    benefits: [
      {
        title: "Built-in accountability",
        description:
          "Shared appointments make consistency easier and help both people stay committed.",
      },
      {
        title: "Premium private setting",
        description:
          "Train together without the distractions or discomfort of a public gym.",
      },
      {
        title: "Balanced coaching",
        description:
          "Programs are adjusted so each person progresses safely and effectively.",
      },
    ],
    pillars: [
      {
        title: "Two-person structure",
        description:
          "Sessions are organised to keep both clients moving efficiently.",
      },
      {
        title: "Goal alignment",
        description:
          "Whether the goals match or differ, each plan still feels personal.",
      },
      {
        title: "Shared momentum",
        description:
          "Training together often improves follow-through outside the gym too.",
      },
    ],
    audience: [
      "Couples wanting to build healthy routines together",
      "Friends who train better with accountability",
      "Beginners who want a more private starting point",
      "Clients who prefer premium one-slot scheduling for two people",
    ],
    faq: [
      {
        question: "Can two people with different fitness levels train together?",
        answer:
          "Yes. Sessions are adjusted so both people are coached appropriately without slowing the other down.",
      },
      {
        question: "Is couple training only for romantic partners?",
        answer:
          "No. Friends, siblings, or other training partners can book the same format.",
      },
      {
        question: "Can we buy a couple package online?",
        answer:
          "The package options are shown clearly on the pricing page, but bookings currently begin through consultation, WhatsApp, or an availability request so the best fit can be confirmed first.",
      },
      {
        question: "Is couple training still private?",
        answer:
          "Yes. The format is delivered inside the same appointment-only private environment rather than on an open public gym floor.",
      },
      {
        question: "Can beginners use couple training?",
        answer:
          "Yes. It can be an excellent format for beginners who want support and accountability together in a calmer environment.",
      },
    ],
    primaryCtaMessageKey: "couples",
    pricingSlugs: pricingItems
      .filter((item) => item.serviceSlug === "couple-training")
      .map((item) => item.slug),
  },
  {
    slug: "house-calls",
    name: "House Calls",
    shortName: "House Calls",
    keyword: "House Call Personal Trainer Mauritius",
    metaTitle:
      "House Call Personal Trainer Mauritius | Private Coaching at Home or Villa",
    metaDescription:
      "Request a house call personal trainer in Mauritius for coaching at your home, villa, or private residence. Premium appointments available from Grand Baie.",
    heroTitle: "House Call Training for Home, Villa, and Residence Clients",
    heroDescription:
      "Bring premium personal coaching to your own space when convenience and privacy matter most.",
    idealFor:
      "Clients who want personal training at home or in a villa without commuting.",
    image: "/training-session.jpeg",
    overview: [
      "House calls are designed for clients who want convenience without sacrificing professionalism. Coaching is adapted to your available space, equipment, schedule, and privacy preferences.",
      "This option is especially valuable for villa guests, executives, and families who want training to integrate smoothly into their day instead of becoming another logistical challenge.",
    ],
    benefits: [
      {
        title: "Maximum convenience",
        description: "Training comes to you, reducing travel time and friction.",
      },
      {
        title: "Private by design",
        description:
          "Ideal for clients who prefer discretion in their own environment.",
      },
      {
        title: "Tailored to your space",
        description:
          "Sessions are structured around what is realistically available and effective.",
      },
    ],
    pillars: [
      {
        title: "Availability-first scheduling",
        description:
          "House calls are planned carefully around location and timing.",
      },
      {
        title: "Portable coaching format",
        description:
          "Sessions remain purposeful whether your space is compact or spacious.",
      },
      {
        title: "WhatsApp coordination",
        description:
          "Travel details and scheduling are confirmed clearly in advance.",
      },
    ],
    audience: [
      "Villa guests in Grand Baie and nearby areas",
      "Residents who want home-based coaching",
      "Busy professionals who prefer reduced travel time",
      "Clients wanting a premium on-location service",
    ],
    faq: [
      {
        question: "Which areas do you cover for house calls?",
        answer:
          "Coverage depends on schedule and distance. Grand Baie and surrounding northern areas are prioritised, with confirmation handled by WhatsApp.",
      },
      {
        question: "Do I need a full home gym?",
        answer:
          "No. Sessions can be adapted to available space and selected portable equipment when appropriate.",
      },
      {
        question: "How do I Book Consultation?",
        answer:
          "The fastest option is WhatsApp, especially for time-sensitive villa or residence requests.",
      },
      {
        question: "Who is house call training best suited to?",
        answer:
          "It is an excellent fit for villa guests, busy professionals, households that value convenience, and clients who want maximum privacy in their own space.",
      },
      {
        question: "Can tourists use house call coaching in Mauritius?",
        answer:
          "Yes. Depending on stay length and location, house calls can be an ideal premium option for tourists and short-stay visitors.",
      },
    ],
    primaryCtaMessageKey: "houseCalls",
    pricingSlugs: pricingItems
      .filter((item) => item.serviceSlug === "house-calls")
      .map((item) => item.slug),
  },
  {
    slug: "online-coaching",
    name: "Online Coaching",
    shortName: "Online Coaching",
    keyword: "Online Personal Trainer Mauritius",
    metaTitle:
      "Online Personal Trainer Mauritius | Monthly Coaching and WhatsApp Support",
    metaDescription:
      "Get monthly online coaching in Mauritius with tailored programming, progress reviews, nutrition guidance, and WhatsApp accountability from Fitness Grand Baie for travel, busy schedules, and long-term consistency.",
    heroTitle: "Online Personal Trainer Mauritius for Flexible Monthly Coaching",
    heroDescription:
      "Stay coached wherever you are with monthly programming, progress reviews, and WhatsApp support built for Mauritius clients, frequent travellers, and busy professionals who need flexibility without losing structure.",
    idealFor:
      "Clients who want recurring guidance, flexibility, and high-accountability support from anywhere.",
    image: "/training-session.jpeg",
    overview: [
      "Online coaching turns expert support into a flexible monthly system you can maintain anywhere. Instead of one-off advice, you get structure, progress reviews, and accountability that continue between sessions and travel periods.",
      "This is ideal for clients who need programming, coaching touchpoints, and WhatsApp guidance without relying entirely on in-person appointments.",
    ],
    benefits: [
      {
        title: "Monthly structure",
        description: "Your plan evolves with your progress instead of staying static.",
      },
      {
        title: "Anywhere coaching",
        description:
          "Useful for clients at home, in hotels, between trips, or overseas.",
      },
      {
        title: "WhatsApp accountability",
        description:
          "You stay connected for progress updates, check-ins, and guidance.",
      },
    ],
    pillars: [
      {
        title: "Custom programming",
        description:
          "Each training month is built around your routine, equipment, and objective.",
      },
      {
        title: "Progress reviews",
        description:
          "Regular feedback helps keep the plan aligned with real outcomes.",
      },
      {
        title: "Lifestyle guidance",
        description:
          "Nutrition, routine, and compliance support are part of the process.",
      },
    ],
    audience: [
      "Clients living outside Grand Baie",
      "Frequent travellers and busy professionals",
      "People wanting recurring coaching at lower friction",
      "Anyone needing accountability between in-person phases",
    ],
    faq: [
      {
        question: "How is progress tracked online?",
        answer:
          "Progress is tracked through regular updates, check-ins, and plan adjustments based on how your body, routine, and adherence are responding.",
      },
      {
        question: "Is online coaching paid monthly?",
        answer:
          "Yes. The coaching model is monthly, with the public website currently focused on consultation and enquiry capture before payment activation is turned on.",
      },
      {
        question: "Can online coaching work alongside in-person training?",
        answer:
          "Yes. It can complement private studio sessions by maintaining structure between appointments or travel periods.",
      },
      {
        question: "Is online coaching available to clients in Mauritius?",
        answer:
          "Yes. The service is available for clients in Mauritius and internationally who want recurring support and accountability.",
      },
      {
        question: "Is WhatsApp part of the online coaching experience?",
        answer:
          "Yes. WhatsApp is used for practical support, check-ins, and quick communication between more structured reviews.",
      },
      {
        question: "Can online coaching replace in-person training?",
        answer:
          "For some clients, yes. It works especially well when you need accountability, structure, and flexibility more than hands-on technical coaching. Others do best with a hybrid approach.",
      },
    ],
    primaryCtaMessageKey: "online",
    pricingSlugs: pricingItems
      .filter((item) => item.serviceSlug === "online-coaching")
      .map((item) => item.slug),
  },
];

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "personal-trainer-mauritius",
    title: "Personal Trainer Mauritius",
    metaTitle:
      "Personal Trainer Mauritius | Private Gym Coaching in Grand Baie",
    metaDescription:
      "Looking for a personal trainer in Mauritius? Fitness Grand Baie offers appointment-only private coaching in a home residence in Grand Baie, plus house calls and online coaching, with no public-gym crowds.",
    heroTitle: "Personal Trainer Mauritius in a Private Appointment-Only Gym",
    heroDescription:
      "Train with Fitness Grand Baie inside an appointment-only private gym in a home residence in Grand Baie, Mauritius, or choose house calls and online coaching if a more flexible format fits better.",
    intro: [
      "Personal training in Mauritius works best when the service is clear, private, and specific about who it fits. Fitness Grand Baie offers an appointment-only alternative to the commercial gym experience.",
      "Fitness Grand Baie is built for clients who want privacy, professionalism, and a premium coaching experience instead of a crowded public gym. The studio is appointment only, based in a home residence in Grand Baie, and designed for focused results.",
    ],
    sections: [
      {
        title: "Why choose a personal trainer in Mauritius?",
        paragraphs: [
          "Many clients in Mauritius want expert guidance but feel disconnected from the public gym environment. Crowds, lack of privacy, and generic programming often make consistency harder than it should be.",
          "A private personal trainer gives you structure, accountability, and a plan tailored to your body, schedule, and goals. That matters whether your focus is fat loss, strength, posture, confidence, or simply building a routine that lasts.",
        ],
        bullets: [
          "Private gym environment in Grand Baie",
          "House call and online coaching options",
          "WhatsApp support for easier communication",
          "Suitable for residents, expats, and visitors",
        ],
      },
      {
        title: "A private gym in Mauritius, not a public walk-in facility",
        paragraphs: [
          "Fitness Grand Baie is not a commercial gym. It is a private, appointment-only training space inside a home residence. That distinction matters because it creates a calmer, more focused experience for clients who care about discretion and quality.",
          "Sessions are booked in advance and each visit is centred on your coaching time. There are no walk-ins, membership crowds, or unnecessary distractions.",
        ],
      },
      {
        title: "Services available for different lifestyles",
        paragraphs: [
          "The coaching model includes one-on-one private personal training, couple training, house calls, and monthly online coaching. This makes it possible to choose the format that suits your schedule, privacy preferences, and comfort level.",
          "Whether you want to train inside the private studio, at your villa, or remotely with monthly support, the experience stays premium and tailored.",
        ],
      },
      {
        title: "Who this service fits best",
        paragraphs: [
          "The strongest fit is usually clients who value privacy, professionals who need efficiency, beginners who want a calmer start, and residents or visitors who prefer a high-trust coaching experience over a commercial gym membership.",
          "That client profile is one reason the appointment-only model works so well. It is built around attention and fit, not general public access.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you offer personal training only in Grand Baie?",
        answer:
          "The private studio is based in Grand Baie, while house calls and online coaching make the service accessible more broadly depending on location and schedule.",
      },
      {
        question: "Is Fitness Grand Baie suitable for beginners?",
        answer:
          "Yes. Many beginners prefer private coaching because it removes intimidation and creates a more supportive, personalised start.",
      },
      {
        question: "Can I book and pay online?",
        answer:
          "You can book a consultation or message on WhatsApp now. Payment is handled only after the right coaching path is confirmed personally.",
      },
      {
        question: "Do you offer house calls and online coaching in Mauritius?",
        answer:
          "Yes. The service mix includes both house calls and online coaching so clients can choose the format that best fits their location and schedule.",
      },
      {
        question: "What makes private coaching different from a commercial gym?",
        answer:
          "Private coaching offers more attention, more privacy, and a calmer environment, which often improves adherence and overall experience for the right client.",
      },
      {
        question: "Is WhatsApp a good way to ask about availability?",
        answer:
          "Yes. WhatsApp is one of the fastest ways to ask about availability, service fit, and the best next step.",
      },
      {
        question: "How much does a personal trainer cost in Mauritius?",
        answer:
          "Pricing depends on format and frequency. Fitness Grand Baie publishes clear pricing guidance online, then confirms the best-fit route through consultation or WhatsApp.",
      },
      {
        question: "Do you work with busy professionals in Mauritius?",
        answer:
          "Yes. The private coaching model is particularly well suited to busy professionals who value time efficiency, discretion, and a calmer alternative to public gyms.",
      },
    ],
    relatedLinks: [
      { label: "Private Personal Training", href: "/services/private-personal-training" },
      { label: "View Pricing", href: "/pricing" },
      { label: "See results", href: "/results" },
      { label: "Read the blog", href: "/blog" },
      {
        label: "How to Choose the Right Coach",
        href: "/blog/personal-trainer-mauritius-how-to-choose-the-right-coach",
      },
      {
        label: "Best Personal Trainer Mauritius",
        href: "/blog/best-personal-trainer-in-mauritius-what-qualifies-a-great-coach",
      },
      {
        label: "Busy Adults Who Want Results",
        href: "/blog/personal-trainer-mauritius-for-busy-adults-who-want-results",
      },
      {
        label: "Premium Trainer Guide",
        href: "/blog/what-makes-a-premium-personal-trainer-in-mauritius-different",
      },
      {
        label: "Trainer Instead of Just a Gym?",
        href: "/blog/how-to-know-when-you-need-a-personal-trainer-instead-of-just-a-gym",
      },
    ],
  },
  {
    slug: "personal-trainer-grand-baie",
    title: "Personal Trainer Grand Baie",
    metaTitle:
      "Personal Trainer Grand Baie | Appointment-Only Private Gym Coaching",
    metaDescription:
      "Looking for a personal trainer in Grand Baie? Fitness Grand Baie offers appointment-only coaching in a home-residence private gym, plus house calls and online coaching for residents, expats, and villa guests.",
    heroTitle: "Personal Trainer Grand Baie in a Private Appointment-Only Gym",
    heroDescription:
      "A premium private coaching option in Grand Baie for locals, expats, villa guests, and busy professionals who want calm, focused training instead of a public commercial gym.",
    intro: [
      "This page is designed for Grand Baie local intent: residents, expats, villa guests, and tourists who want to know whether private coaching in Grand Baie is a better fit than a standard public gym.",
      "Fitness Grand Baie answers that need with private coaching delivered from an appointment-only home gym in Grand Baie, plus house calls and online coaching for added flexibility.",
    ],
    sections: [
      {
        title: "A strong fit for local life in Grand Baie",
        paragraphs: [
          "The service suits full-time residents, busy professionals, expats, and villa guests who want high-quality coaching without crowding or wasted time.",
          "Because scheduling is appointment-based, the experience feels calm, premium, and designed around the client rather than a busy gym timetable.",
        ],
      },
      {
        title: "Why Grand Baie clients choose private coaching",
        paragraphs: [
          "Private coaching gives you one point of focus: your own progress. There is no waiting for equipment, no noisy gym floor, and no need to manage self-consciousness in front of strangers.",
          "That makes it ideal for beginners, clients rebuilding confidence, and professionals who simply prefer a more discreet standard of service.",
        ],
        bullets: [
          "Private studio access by appointment only",
          "Couple sessions and villa-friendly options",
          "WhatsApp-first contact and support",
          "Premium coaching for both short stays and long-term routines",
        ],
      },
      {
        title: "Flexible services for locals and travellers",
        paragraphs: [
          "The service mix includes private studio coaching, couple training, house calls, and online coaching. This gives Grand Baie clients flexible ways to stay consistent whether they live locally or split time between Mauritius and other destinations.",
        ],
      },
      {
        title: "A better fit for privacy-focused lifestyles",
        paragraphs: [
          "Grand Baie clients often value time quality, discretion, and a more refined service experience. Private coaching answers that need far more directly than an open-access public gym environment.",
        ],
      },
    ],
    faq: [
      {
        question: "Can tourists or villa guests book short-term coaching?",
        answer:
          "Yes. Single sessions, house calls, and shorter packages make the service suitable for short stays in Grand Baie.",
      },
      {
        question: "Is the private gym open to walk-ins?",
        answer:
          "No. The facility is appointment only and located in a private home residence.",
      },
      {
        question: "Is WhatsApp the best way to ask about availability?",
        answer:
          "Yes. WhatsApp is the fastest option for availability, package questions, and confirming details.",
      },
      {
        question: "Do you offer couple training and house calls in Grand Baie?",
        answer:
          "Yes. Both couple training and house calls are available depending on the client's needs and schedule fit.",
      },
      {
        question: "Is this service suitable for expats living in Grand Baie?",
        answer:
          "Yes. The private coaching model is a strong fit for expats who want structure, privacy, and a premium alternative to public gyms.",
      },
      {
        question: "Why choose private coaching in Grand Baie instead of a commercial gym membership?",
        answer:
          "For many clients, the advantages are privacy, time efficiency, more personal attention, and a calmer environment that feels easier to stay consistent with.",
      },
      {
        question: "Can busy professionals and tourists both use the service in Grand Baie?",
        answer:
          "Yes. The service suits residents, expats, busy professionals, villa guests, and tourists who want premium private coaching in Grand Baie without the public-gym experience.",
      },
    ],
    relatedLinks: [
      { label: "House Calls", href: "/services/house-calls" },
      { label: "Couple Training", href: "/services/couple-training" },
      { label: "Contact Fitness Grand Baie", href: "/contact" },
      { label: "View Pricing", href: "/pricing" },
      {
        label: "Your First Month in Grand Baie",
        href: "/blog/private-personal-training-in-grand-baie-what-your-first-month-looks-like",
      },
      {
        label: "How to Stay Fit in Grand Baie",
        href: "/blog/how-to-stay-fit-while-living-in-grand-baie",
      },
      {
        label: "Private Coaching for Expats",
        href: "/blog/private-fitness-coaching-for-expats-and-tourists-in-grand-baie",
      },
      {
        label: "Tourists Staying Short Term",
        href: "/blog/personal-trainer-grand-baie-for-tourists-staying-short-term",
      },
      {
        label: "Weight Loss in Grand Baie",
        href: "/blog/personal-training-for-weight-loss-in-grand-baie",
      },
      {
        label: "Fitness Tips for Tourists",
        href: "/blog/fitness-tips-for-tourists-staying-in-grand-baie",
      },
    ],
  },
];
