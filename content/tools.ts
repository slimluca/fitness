import type { ToolDefinition, ToolGroup } from "@/content/types";

export const toolGroups: ToolGroup[] = [
  {
    slug: "body-health",
    title: "Body & Health",
    description:
      "Quick body-composition, hydration, and health-context tools that help visitors understand where they are starting.",
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    description:
      "Simple calorie, macro, protein, and meal-planning tools that support better decisions without overcomplicating the process.",
  },
  {
    slug: "strength-training",
    title: "Strength & Training",
    description:
      "Useful training calculators for strength, conditioning, and weekly structure when you want more clarity from each session.",
  },
  {
    slug: "planning-progress",
    title: "Planning & Progress",
    description:
      "Progress, adherence, and planning tools designed to keep the coaching conversation practical and easy to follow.",
  },
];

export const tools: ToolDefinition[] = [
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    metaTitle: "BMI Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Use this premium BMI calculator to estimate body mass index quickly, understand the category, and get simple next-step guidance.",
    intro:
      "Use this BMI calculator for a quick body-weight context check. It is helpful as a starting point, but it does not replace a fuller private coaching assessment.",
    summary:
      "Estimate body mass index fast and understand the result in plain language.",
    group: "body-health",
    kind: "calculator",
    icon: "scale",
    keywords: ["BMI Calculator Mauritius", "Fitness Calculator Mauritius", "Personal Trainer Mauritius"],
    highlights: [
      "Useful as a quick starting point before consultation",
      "Best paired with body-composition context and training goals",
      "Not a medical diagnosis or a complete health picture",
    ],
    faq: [
      {
        question: "Is BMI enough to judge fitness?",
        answer:
          "No. BMI is useful for quick context, but it does not show body composition, muscle mass, or training quality on its own.",
      },
      {
        question: "Should I use BMI before personal training?",
        answer:
          "It can be a helpful starting point, but a better coaching decision comes from goals, routine, movement quality, and consistency habits as well.",
      },
    ],
    relatedToolSlugs: [
      "body-fat-estimator",
      "ideal-weight-range-calculator",
      "calorie-calculator",
    ],
    commercialLinks: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "calorie-calculator",
    title: "Calorie Calculator",
    metaTitle: "Calorie Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Estimate maintenance calories, fat-loss calories, and muscle-gain calories with a clean calorie calculator built for practical coaching use.",
    intro:
      "This calorie calculator gives a practical starting estimate for maintenance, fat loss, and muscle gain. It is designed to help you make cleaner nutrition decisions before refining with real-world progress.",
    summary:
      "Estimate maintenance intake and adjust it for fat loss or muscle gain.",
    group: "nutrition",
    kind: "calculator",
    icon: "flame",
    keywords: [
      "Calorie Calculator Mauritius",
      "Nutrition Calculator Mauritius",
      "Online Coaching Mauritius",
    ],
    highlights: [
      "Uses a practical maintenance-calorie estimate",
      "Shows fat-loss and muscle-gain starting targets",
      "Best refined with real body-weight and adherence data",
    ],
    faq: [
      {
        question: "Are calorie calculators exact?",
        answer:
          "No. They are useful estimates. The best long-term result comes from adjusting the starting target based on adherence, recovery, and real progress.",
      },
      {
        question: "Is this useful for online coaching?",
        answer:
          "Yes. It gives a fast starting point for nutrition conversations, especially for clients who want structure before a personalised plan is built.",
      },
    ],
    relatedToolSlugs: ["macro-calculator", "protein-calculator", "meal-planning-checklist"],
    commercialLinks: [
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "macro-calculator",
    title: "Macro Calculator",
    metaTitle: "Macro Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Split calories into protein, carbohydrates, and fats with a clean macro calculator built for practical fitness planning.",
    intro:
      "Use this macro calculator when you already have a calorie target and want a cleaner split between protein, carbohydrates, and fats.",
    summary:
      "Turn a calorie target into a practical macro split for your goal.",
    group: "nutrition",
    kind: "calculator",
    icon: "calculator",
    keywords: ["Macro Calculator Mauritius", "Nutrition Coach Mauritius", "Online Coaching Mauritius"],
    highlights: [
      "Simple goal-based macro split",
      "Useful for fat loss, maintenance, or muscle gain",
      "A great bridge between calories and meal planning",
    ],
    faq: [
      {
        question: "Do macros need to be perfect every day?",
        answer:
          "No. Precision helps, but consistency matters more than chasing perfect numbers every day.",
      },
    ],
    relatedToolSlugs: ["calorie-calculator", "protein-calculator", "meal-planning-checklist"],
    commercialLinks: [
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "protein-calculator",
    title: "Protein Calculator",
    metaTitle: "Protein Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Calculate a practical daily protein target for fat loss, muscle gain, or general fitness with a clean, easy-to-use protein calculator.",
    intro:
      "This protein calculator helps you choose a practical daily target based on body weight and goal. It keeps the guidance simple enough to use immediately.",
    summary:
      "Set a clearer protein target for body composition, recovery, and consistency.",
    group: "nutrition",
    kind: "calculator",
    icon: "beef",
    keywords: ["Protein Calculator Mauritius", "Nutrition Coaching Mauritius", "Fitness Coach Mauritius"],
    highlights: [
      "Clear daily target based on body weight and goal",
      "Useful for fat loss, recovery, and muscle retention",
      "Easy to turn into a simple meal structure",
    ],
    faq: [
      {
        question: "Is higher protein useful for fat loss?",
        answer:
          "Often yes. A solid protein target can help with satiety, recovery, and preserving lean mass while calories are lower.",
      },
    ],
    relatedToolSlugs: ["macro-calculator", "calorie-calculator", "meal-planning-checklist"],
    commercialLinks: [
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Personal Training", href: "/personal-training" },
    ],
  },
  {
    slug: "water-intake-calculator",
    title: "Water Intake Calculator",
    metaTitle: "Water Intake Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Estimate a useful daily hydration target with this premium water intake calculator designed for training and active lifestyles.",
    intro:
      "Use this hydration calculator to set a practical daily water target. It is especially useful in warm, humid conditions where training output and recovery can suffer quickly if intake is too low.",
    summary:
      "Estimate a smart daily hydration target for body weight and activity.",
    group: "body-health",
    kind: "calculator",
    icon: "droplets",
    keywords: ["Water Intake Calculator Mauritius", "Fitness Calculator Mauritius", "Hydration Mauritius"],
    highlights: [
      "Body-weight and activity-based hydration estimate",
      "Helpful in warm coastal climates and active weeks",
      "Best used as a daily baseline, not a hard rule",
    ],
    faq: [
      {
        question: "Should training days change water needs?",
        answer:
          "Yes. Harder sessions, heat, and sweat loss usually push daily hydration needs higher than a quiet rest day.",
      },
    ],
    relatedToolSlugs: ["calorie-calculator", "step-goal-calculator", "meal-planning-checklist"],
    commercialLinks: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "body-fat-estimator",
    title: "Body Fat Estimator",
    metaTitle: "Body Fat Estimator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Estimate body-fat percentage with a simple, coaching-friendly body-fat estimator. Clear, useful, and labelled appropriately as an estimate.",
    intro:
      "This body-fat estimator gives a rough percentage estimate using simple inputs. It is intentionally labelled as an estimate and works best as a coaching conversation starter rather than a precision measurement.",
    summary:
      "Get a simple body-fat estimate and understand what the number roughly suggests.",
    group: "body-health",
    kind: "calculator",
    icon: "badge-percent",
    keywords: ["Body Fat Estimator Mauritius", "Body Fat Calculator Mauritius", "Personal Trainer Mauritius"],
    highlights: [
      "Simple estimate, clearly labelled as such",
      "Useful for context alongside training and nutrition habits",
      "More useful over time when paired with progress tracking",
    ],
    faq: [
      {
        question: "Is this body-fat estimate precise?",
        answer:
          "No. It is only a starting estimate. Skinfolds, scans, photos, measurements, and coaching context offer a fuller picture.",
      },
    ],
    relatedToolSlugs: [
      "bmi-calculator",
      "ideal-weight-range-calculator",
      "progress-tracker-guide",
    ],
    commercialLinks: [
      { label: "Results", href: "/results" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "one-rep-max-calculator",
    title: "One Rep Max Calculator",
    metaTitle: "One Rep Max Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Estimate your one-rep max and useful training percentages with a clean strength calculator built for practical gym programming.",
    intro:
      "Use this one-rep max calculator to estimate your top strength level from a working set and then turn it into useful training percentages for programming.",
    summary:
      "Estimate one-rep max and convert it into practical training loads.",
    group: "strength-training",
    kind: "calculator",
    icon: "dumbbell",
    keywords: ["One Rep Max Calculator Mauritius", "Strength Calculator Mauritius", "Private Gym Mauritius"],
    highlights: [
      "Fast estimate based on a working set",
      "Useful for setting structured strength loads",
      "Helps keep progression more deliberate",
    ],
    faq: [
      {
        question: "Do I need to test a true max lift?",
        answer:
          "No. An estimated one-rep max is often enough for practical training planning without forcing unnecessary maximal attempts.",
      },
    ],
    relatedToolSlugs: [
      "workout-split-planner",
      "pace-and-cardio-zone-calculator",
      "progress-tracker-guide",
    ],
    commercialLinks: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    slug: "ideal-weight-range-calculator",
    title: "Ideal Weight Range Calculator",
    metaTitle: "Ideal Weight Range Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "See a basic healthy weight range based on height with a clean, premium calculator that avoids exaggerated promises and medical overreach.",
    intro:
      "This tool gives a simple weight range based on height. It is best used as gentle context rather than a rigid target, especially if training history, muscle mass, or body composition vary a lot.",
    summary:
      "See a simple height-based weight range without turning it into a verdict.",
    group: "body-health",
    kind: "calculator",
    icon: "ruler",
    keywords: ["Ideal Weight Calculator Mauritius", "Weight Range Calculator Mauritius", "Fitness Calculator Mauritius"],
    highlights: [
      "Simple height-based reference range",
      "Useful as a broad guide, not a hard target",
      "Best interpreted with body composition and lifestyle context",
    ],
    faq: [
      {
        question: "Should everyone chase the middle of the range?",
        answer:
          "No. Strength history, frame, muscle mass, and personal goals all matter. The range is a broad reference, not the only target worth considering.",
      },
    ],
    relatedToolSlugs: ["bmi-calculator", "body-fat-estimator", "calorie-calculator"],
    commercialLinks: [
      { label: "Personal Trainer Mauritius", href: "/personal-trainer-mauritius" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "pace-and-cardio-zone-calculator",
    title: "Pace and Cardio Zone Calculator",
    metaTitle: "Pace and Cardio Zone Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Estimate heart-rate zones and pace guidance with a compact cardio calculator designed for practical conditioning decisions.",
    intro:
      "Use this cardio tool to estimate training zones and, if you know your current pace, get a rough guide for easier or harder running efforts.",
    summary:
      "Estimate heart-rate zones and pace guidance for better conditioning structure.",
    group: "strength-training",
    kind: "calculator",
    icon: "heart-pulse",
    keywords: ["Cardio Zone Calculator Mauritius", "Pace Calculator Mauritius", "Fitness Coach Mauritius"],
    highlights: [
      "Heart-rate guidance for easier conditioning work",
      "Optional pace input for more practical running context",
      "Useful for structure without overcomplicating cardio",
    ],
    faq: [
      {
        question: "Are these heart-rate zones exact?",
        answer:
          "No. They are estimated training zones and should be adjusted by how the work feels, your recovery, and your actual performance over time.",
      },
    ],
    relatedToolSlugs: [
      "step-goal-calculator",
      "one-rep-max-calculator",
      "progress-tracker-guide",
    ],
    commercialLinks: [
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "step-goal-calculator",
    title: "Step Goal Calculator",
    metaTitle: "Step Goal Calculator | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Set a realistic daily step target with a step goal calculator that balances current activity, goal, and adherence.",
    intro:
      "This step goal calculator helps you move from a vague step number to a more realistic daily target based on your current average and overall goal.",
    summary:
      "Set a realistic step target that supports adherence instead of burnout.",
    group: "planning-progress",
    kind: "calculator",
    icon: "activity",
    keywords: ["Step Goal Calculator Mauritius", "Walking Goal Calculator Mauritius", "Fitness Coach Mauritius"],
    highlights: [
      "Based on current activity and goal, not generic pressure",
      "Useful for fat loss, general health, and better routine adherence",
      "Helps build movement gradually instead of all at once",
    ],
    faq: [
      {
        question: "Do more steps always mean better results?",
        answer:
          "Not automatically. A step target works best when it supports your recovery, schedule, and ability to stay consistent over time.",
      },
    ],
    relatedToolSlugs: [
      "water-intake-calculator",
      "progress-tracker-guide",
      "meal-planning-checklist",
    ],
    commercialLinks: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "workout-split-planner",
    title: "Workout Split Planner",
    metaTitle: "Workout Split Planner | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Build a practical weekly training split based on your goal, experience, and available days with this compact planner.",
    intro:
      "Use this planner when you want a clearer weekly training structure. It translates experience, days per week, and goal into a split you can actually follow.",
    summary:
      "Turn training days and goals into a practical weekly split.",
    group: "strength-training",
    kind: "planner",
    icon: "notebook-pen",
    keywords: ["Workout Split Planner Mauritius", "Training Plan Mauritius", "Personal Trainer Mauritius"],
    highlights: [
      "Built around available time, not fantasy schedules",
      "Simple weekly structure for beginners and intermediate trainees",
      "Useful before personal training or online coaching starts",
    ],
    faq: [
      {
        question: "What is the best workout split?",
        answer:
          "The best split is the one that matches your level, goal, recovery, and real schedule. Consistency is usually more important than chasing the perfect split.",
      },
    ],
    relatedToolSlugs: [
      "one-rep-max-calculator",
      "progress-tracker-guide",
      "step-goal-calculator",
    ],
    commercialLinks: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Online Coaching", href: "/online-coaching" },
    ],
  },
  {
    slug: "meal-planning-checklist",
    title: "Meal Planning Checklist",
    metaTitle: "Meal Planning Checklist | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Use this interactive meal-planning checklist to improve nutrition consistency for fat loss, maintenance, or muscle gain.",
    intro:
      "This interactive checklist is designed to keep meal planning practical. It focuses on repeatable habits that usually matter more than nutrition perfection.",
    summary:
      "Check your core nutrition habits and see what needs tightening first.",
    group: "planning-progress",
    kind: "checklist",
    icon: "utensils-crossed",
    keywords: ["Meal Planning Mauritius", "Nutrition Checklist Mauritius", "Online Coaching Mauritius"],
    highlights: [
      "Focuses on adherence instead of food-rule overload",
      "Helps identify the one or two habits worth fixing first",
      "Useful for fat loss, maintenance, or muscle gain phases",
    ],
    faq: [
      {
        question: "Should I change everything at once?",
        answer:
          "Usually no. The strongest approach is to tighten the biggest weak points first and build consistency from there.",
      },
    ],
    relatedToolSlugs: ["calorie-calculator", "macro-calculator", "protein-calculator"],
    commercialLinks: [
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
  {
    slug: "progress-tracker-guide",
    title: "Progress Tracker Guide",
    metaTitle: "Progress Tracker Guide | Fitness by Fabrizio Mauritius",
    metaDescription:
      "Build a smarter progress-tracking system with this compact guide for measurements, photos, body weight, training performance, and adherence.",
    intro:
      "This interactive guide helps you decide what to track, how often to review it, and which metrics matter most for your goal so progress feels less random.",
    summary:
      "Set a clean progress-tracking system that actually supports decision-making.",
    group: "planning-progress",
    kind: "guide",
    icon: "line-chart",
    keywords: ["Progress Tracker Fitness Mauritius", "Fat Loss Tracking Mauritius", "Personal Trainer Mauritius"],
    highlights: [
      "Helps separate useful metrics from noisy ones",
      "Supports fat loss, muscle gain, and general fitness goals",
      "Great for month-to-month coaching conversations",
    ],
    faq: [
      {
        question: "What should I track first?",
        answer:
          "Track the metrics that best match your goal. Usually that means body weight trends, adherence, performance, and a small number of visual or measurement markers.",
      },
    ],
    relatedToolSlugs: [
      "body-fat-estimator",
      "step-goal-calculator",
      "workout-split-planner",
    ],
    commercialLinks: [
      { label: "Results", href: "/results" },
      { label: "Book Consultation", href: "/contact?intent=consultation" },
    ],
  },
];

export const toolsHubCommercialLinks = [
  { label: "Personal Training", href: "/personal-training" },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Contact", href: "/contact" },
];

export function getAllTools() {
  return tools;
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByGroup(group: ToolGroup["slug"]) {
  return tools.filter((tool) => tool.group === group);
}

export function getToolsHubSections() {
  return toolGroups.map((group) => ({
    ...group,
    tools: getToolsByGroup(group.slug),
  }));
}

export function getRelatedTools(slug: string) {
  const tool = getToolBySlug(slug);

  if (!tool) {
    return [];
  }

  return tool.relatedToolSlugs
    .map((relatedSlug) => getToolBySlug(relatedSlug))
    .filter((entry): entry is ToolDefinition => Boolean(entry));
}
