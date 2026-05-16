# Analytics Activation And 30-Day Growth

Use this note after launch to activate measurement safely and review the first month of live traffic.

## 1. Activate measurement in this order

Required first:

- `NEXT_PUBLIC_GA_ID`
- `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `FORMS_WEBHOOK_URL`

Optional after that:

- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- Google Ads conversion labels

## 2. Live activation checklist

1. Deploy with the real domain in `NEXT_PUBLIC_SITE_URL`.
2. Add the GA4 Measurement ID.
3. Add Search Console verification.
4. Submit one real test form.
5. Confirm the webhook receives the enquiry.
6. Confirm the thank-you page loads after a successful form submit.
7. In GA4 Realtime, confirm:
   - `page_view`
   - `book_consultation_click`
   - `whatsapp_click`
   - `request_availability_click`
   - form submit events
   - `thank_you_view`
8. Submit `/sitemap.xml` in Search Console.

## 3. Weekly GA4 review for the first 30 days

Check weekly:

- top landing pages
- top CTA events
- thank-you visits
- form failures
- pricing page visits vs action
- blog traffic vs blog CTA clicks

Pages to review first:

- `/`
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/pricing`
- `/contact`
- `/book-consultation`
- `/services/private-personal-training`
- `/services/online-coaching`
- `/results`

CTAs to review first:

- `Book Consultation`
- `WhatsApp Now`
- `Request Availability`

## 4. Weekly Search Console review for the first 30 days

Check weekly:

- impressions by page
- CTR by page
- average position on top money pages
- first branded queries
- first Mauritius and Grand Baie queries
- first service-page queries

Weak CTR usually looks like:

- homepage impressions growing with very few clicks
- Mauritius landing page impressions rising with weak CTR
- pricing or service pages getting impressions below 2 percent CTR

## 5. What to improve first if performance is weak

- Pricing gets traffic but weak action:
  Improve reassurance, proof, and "best next step" guidance near pricing cards.
- Blog traffic rises but leads stay weak:
  Improve article-to-service links, end CTAs, and category business-forward blocks.
- WhatsApp clicks are strong but forms are weak:
  Keep WhatsApp prominent and simplify form reassurance rather than forcing more form friction.
- Homepage impressions grow but clicks stay low:
  Improve the title, meta description, H1, and first-screen trust framing.

## 6. Lead-source interpretation

- Homepage-origin leads:
  Usually broader trust leads. Improve clarity if these enquiries feel vague.
- Pricing-origin leads:
  Usually higher intent. Improve service-fit guidance if quality is mixed.
- Contact-origin leads:
  Often reassurance or speed driven. Keep response expectations and WhatsApp-first wording strong.
- Service-page-origin leads:
  Usually better fit signals. Use them to learn which services deserve more proof and stronger above-the-fold messaging.
- SEO landing page leads:
  Strong sign that local SEO is working. Compare Mauritius intent vs Grand Baie intent.
- Blog-origin leads:
  Usually need clearer next steps. Improve the article's business pathway before changing the editorial tone.

High-intent signals:

- clear service preference
- specific goal
- realistic schedule
- start timing
- WhatsApp-friendly follow-up

Lower-intent signals:

- vague goals
- no schedule clues
- no preferred start timing
- no clear service interest

Tourist or expat signals:

- mentions of villa, stay length, travel, relocation, or flexible scheduling

Local resident signals:

- recurring schedule preferences
- nearby area references
- long-term coaching language
