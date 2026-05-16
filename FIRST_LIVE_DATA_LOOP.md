# First Live Data Loop

Use this note during the first live week once real traffic, leads, and reviews begin to appear.

## 1. Turn on the measurement layer

- Confirm `NEXT_PUBLIC_GA_ID` is set.
- Confirm `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set.
- Confirm `FORMS_WEBHOOK_URL` is set and a real enquiry reaches the destination.
- Confirm one test visit produces:
  - `page_view`
  - `whatsapp_click`
  - `book_consultation_click`
  - `request_availability_click`
  - `consultation_form_submit` or `contact_form_submit`
  - `thank_you_view`

## 2. What the site now captures on form enquiries

Each enquiry can now carry:

- current page path and page type
- initial landing page for the session
- UTM parameters when present
- referrer and referrer domain
- last tracked CTA clicked before the form
- article, category, service, or landing-page context when relevant

This helps separate:

- blog-origin leads
- pricing-page leads
- service-page leads
- direct WhatsApp-first behaviour
- paid or campaign traffic once UTMs are added

## 3. First week GA4 checks

Check these first:

- Which pages get the first real traffic:
  `/`, `/personal-trainer-mauritius`, `/personal-trainer-grand-baie`, `/pricing`, `/contact`, `/book-consultation`
- Which CTA events fire most:
  `whatsapp_click`, `book_consultation_click`, `request_availability_click`
- Whether form submits reach thank-you visits consistently
- Whether `form_submit_failed` appears at all

## 4. First Search Console checks

Start with:

- homepage
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/services/private-personal-training`
- `/services/online-coaching`

Healthy early signs:

- branded impressions appear first
- Grand Baie and Mauritius service queries begin appearing
- one or two blog categories begin earning low but real impressions

If impressions appear but clicks stay weak:

- test the title tag first
- then tighten the meta description
- then improve the H1 and first-screen trust message

## 5. Quick interpretation rules

- High WhatsApp clicks, low forms:
  This usually means intent is healthy, but visitors prefer low-friction conversation. Keep WhatsApp strong and simplify form reassurance.
- High forms, weak lead quality:
  Tighten service guidance, start-timing guidance, and the "best fit" copy on pricing and service pages.
- Pricing visits, weak action:
  Move stronger proof and clearer next-step copy nearer the pricing cards.
- Blog traffic rising, weak conversion:
  Improve the end CTA, add one more service link in the body, and make the "best next step" more specific to the article topic.

## 6. First real proof to add

Replace in this order:

1. trainer portrait
2. stronger private-studio hero image
3. contact or arrival reassurance image
4. first approved testimonial snippets
5. first results or progress asset
6. credentials or certification image

Add the first reviews here first:

1. homepage
2. results page
3. private personal training page
4. pricing page
5. personal-trainer-mauritius page

## 7. First pages to improve if performance is uneven

- `/pricing`
  Improve reassurance, proof, and "which option fits me" guidance.
- `/contact`
  Improve speed, trust, and clarity around the fastest route.
- `/book-consultation`
  Improve confidence, reduce friction, and clarify what happens next.
- top blog winners
  Improve internal links and end-of-article CTA precision.
