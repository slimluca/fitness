import type { LegalDocument } from "@/content/types";

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How Fitness Grand Baie collects, uses, and protects enquiry, booking, and payment information.",
    intro: [
      "Fitness Grand Baie respects privacy as a core part of the service. Because the studio operates from a private residence and many clients value discretion, data handling is kept purposeful and limited.",
    ],
    sections: [
      {
        title: "Information collected",
        body: [
          "Information may include your name, email, phone number, WhatsApp contact, preferred service, scheduling preferences, health limitations disclosed voluntarily, and payment-related details necessary to complete a booking.",
          "Website analytics and advertising tools may also collect standard usage data such as pages viewed, device type, and traffic source where configured.",
        ],
      },
      {
        title: "How information is used",
        body: [
          "Information is used to reply to enquiries, manage appointments, process payments, improve service delivery, and communicate about bookings or coaching support.",
          "Data is not sold. Where third-party tools are used for analytics, payments, or form handling, those tools process data under their own policies.",
        ],
      },
      {
        title: "Client confidentiality",
        body: [
          "The residential location and private nature of the studio are handled with care. Exact address details are shared only as needed for confirmed appointments.",
          "Client results, images, or testimonials should only be published with permission.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "The operating terms for using the website, booking services, and purchasing training packages with Fitness Grand Baie.",
    intro: [
      "By using this website, submitting an enquiry, or purchasing a service, you agree to these terms. They are designed to protect both the client experience and the appointment-only nature of the business.",
    ],
    sections: [
      {
        title: "Appointments and eligibility",
        body: [
          "All services are subject to availability and are scheduled by appointment only. Fitness Grand Baie is not a public walk-in gym.",
          "Clients are responsible for ensuring that the information they provide during booking is accurate and current.",
        ],
      },
      {
        title: "Payments",
        body: [
          "Payments may be taken online through supported providers, by deposit, or through approved fallback methods such as bank transfer.",
          "Prices, package terms, and recurring billing details should be reviewed before purchase. Certain services may require confirmation before final scheduling.",
        ],
      },
      {
        title: "Use of the website",
        body: [
          "Website content is provided for informational and booking purposes. It should not be copied, misused, or represented as medical advice.",
          "Fitness Grand Baie may update site content, service details, pricing, or availability without prior notice.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    description:
      "Default refund and cancellation terms for consultations, packages, subscriptions, and appointment rescheduling.",
    intro: [
      "The refund and cancellation policy is intended to support fairness, scheduling integrity, and the premium appointment-only nature of the service.",
    ],
    sections: [
      {
        title: "Consultation deposits",
        body: [
          "Consultation deposits reserve protected calendar time and are generally non-refundable once the booking has been confirmed.",
          "Where approved, a deposit may be transferred to a package or rescheduled consultation in line with communication agreed directly with the coach.",
        ],
      },
      {
        title: "Packages and subscriptions",
        body: [
          "Unused packages are not automatically refundable once coaching access, planning, or reserved calendar space has been allocated.",
          "Recurring online coaching plans should be cancelled before the next billing cycle if you do not wish to continue. Access remains active through the paid period unless otherwise stated.",
        ],
      },
      {
        title: "Rescheduling and missed sessions",
        body: [
          "Reasonable notice should be given for rescheduling. Sessions missed without notice may be treated as used appointments.",
          "Emergency exceptions can be handled case by case at the discretion of Fitness Grand Baie.",
        ],
      },
    ],
  },
  {
    slug: "health-disclaimer",
    title: "Health Disclaimer",
    description:
      "Important guidance on physical readiness, medical advice, and client responsibility before training.",
    intro: [
      "Fitness Grand Baie provides fitness coaching, not medical diagnosis or treatment. Clients should use sound judgment and seek medical advice where appropriate before beginning a new training routine.",
    ],
    sections: [
      {
        title: "Medical responsibility",
        body: [
          "If you have an injury, illness, medical condition, pregnancy-related concern, or any uncertainty about exercise readiness, you should obtain appropriate medical advice before training.",
          "Any limitations disclosed during consultation or booking should be accurate and kept up to date so sessions can be adjusted responsibly.",
        ],
      },
      {
        title: "Exercise risk",
        body: [
          "Physical training involves effort, fatigue, and inherent risk. Programs are tailored carefully, but no fitness service can eliminate risk entirely.",
          "Clients are responsible for communicating discomfort, pain, unusual symptoms, or concerns during the coaching process.",
        ],
      },
      {
        title: "Informational content",
        body: [
          "Website articles, videos, and guidance are educational and should not be treated as personalised medical advice.",
        ],
      },
    ],
  },
];

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
