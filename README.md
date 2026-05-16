# Fitness Grand Baie

Premium Next.js website for Fitness Grand Baie, built around:

- appointment-only private gym positioning
- premium conversion-focused design
- SEO around `Personal Trainer Mauritius`
- blog and editorial architecture for long-term organic growth
- modular checkout and inquiry flows with provider placeholders

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn-style UI primitives
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Optimization references

- `LAUNCH_CHECKLIST.md`
  Short pre-launch deployment checklist
- `POST_LAUNCH_OPTIMIZATION_PLAYBOOK.md`
  Search Console, GA4, and lead-conversion review guide for data-driven iteration
- `LOCAL_AUTHORITY_AND_LEAD_OPERATIONS.md`
  Google Business Profile, citations, reviews, and lead-response operating guide
- `POST_LAUNCH_DAY_ONE_NOTE.md`
  Short owner-friendly checklist for launch day and the first week live
- `GO_LIVE_AND_FIRST_30_DAYS.md`
  Main launch, first-review, and first-30-day monitoring note for the live site
- `FIRST_LIVE_DATA_LOOP.md`
  Short live-data, attribution, and first-proof-insertion guide for week-one optimization
- `FIRST_14_DAYS_GROWTH_LOOP.md`
  Early activation, CTR review, lead-quality interpretation, and first-14-day monitoring note
- `ANALYTICS_ACTIVATION_AND_30_DAY_GROWTH.md`
  Production-safe GA/Search Console activation and the first 30 days of growth review
- `MONTH_2_GROWTH_PLAYBOOK.md`
  Month-two reference for real review insertion, GBP/citation wording, page optimization, and lead-source interpretation
- `MONTH_3_GROWTH_PLAYBOOK.md`
  Month-three reference for Search Console-led winner-page refinement, first live proof insertion, and CTA / lead-quality decisions
- `LIVE_LAUNCH_EXECUTION_NOTE.md`
  Short owner-facing note for first live asset swaps, first review drops, first env activation, and first pages / CTAs to watch

## Important integration placeholders

The project is ready for real providers, but live credentials are intentionally not hardcoded.

- `NEXT_PUBLIC_SITE_URL`
  Public production domain used for canonicals, sitemap, robots, schema, and metadata base URLs
- `FORMS_WEBHOOK_URL`
  Forward booking/contact enquiries from `app/api/inquiries/route.ts`
- `FORMS_WEBHOOK_BEARER_TOKEN`
  Optional bearer token if the enquiry webhook is protected
- `NEXT_PUBLIC_GA_ID`
  Enables GA4 placeholder wiring
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
  Enables Google Ads / gtag wiring for future conversion tracking
- `NEXT_PUBLIC_META_PIXEL_ID`
  Enables Meta Pixel placeholder wiring
- `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  Enables Search Console verification meta wiring
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_BOOK_CONSULTATION`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_REQUEST_AVAILABILITY`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONSULTATION_FORM`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONTACT_FORM`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_SERVICE_INQUIRY`
  Optional Google Ads conversion labels for specific lead events

## Key architecture

- `app/`
  All routes including homepage, services, SEO landing pages, blog, checkout, legal pages, sitemap, and robots
- `components/site/`
  Reusable premium marketing, blog, CTA, and checkout components
- `components/ui/`
  shadcn-style primitives
- `content/`
  Structured editable content for services, pricing, FAQs, blog posts, testimonials, legal content, and SEO landing pages
- `lib/`
  SEO helpers, schema builders, tracking helpers, payment abstraction, and utilities

## Payment architecture

`app/api/checkout/route.ts` uses a modular placeholder checkout session creator in `lib/payments.ts`.

Current methods:

- `stripe_placeholder`
- `local_gateway`
- `paypal_placeholder`
- `bank_transfer`

This keeps the UI production-ready while leaving the provider implementation safe to connect later.
