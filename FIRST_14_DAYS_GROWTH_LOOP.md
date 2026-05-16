# First 14 Days Growth Loop

Use this note once the site is live and the first real traffic, reviews, and enquiries start arriving.

## 1. Activate measurement safely

Set these first:

- `NEXT_PUBLIC_GA_ID`
- `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `FORMS_WEBHOOK_URL`

Optional after that:

- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- Google Ads conversion labels

## 2. Activation test sequence

After deployment:

1. Open the homepage in a private browser window.
2. Click:
   - `Book Consultation`
   - `WhatsApp Now`
   - `Request Availability`
3. Submit one real test form.
4. Confirm:
   - GA4 receives a page view
   - CTA clicks appear
   - a form submit event appears
   - a `thank_you_view` appears
   - the webhook receives the enquiry payload
5. Verify Search Console ownership and submit `/sitemap.xml`.

## 3. What to review in GA4 first

Focus on:

- landing pages
- top page views
- CTA events
- form submits
- thank-you visits
- form failure events

Review these pages first:

- `/`
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/pricing`
- `/contact`
- `/book-consultation`
- `/services/private-personal-training`
- `/services/online-coaching`

Review these events first:

- `whatsapp_click`
- `book_consultation_click`
- `request_availability_click`
- `consultation_form_submit`
- `contact_form_submit`
- `service_inquiry_submit`
- `thank_you_view`
- `form_submit_failed`
- `blog_cta_click`

## 4. What to review in Search Console first

Check:

- impressions by page
- CTR by page
- average position on the main money pages
- the first queries appearing for Mauritius and Grand Baie terms

Start with:

- homepage
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/services/private-personal-training`
- `/services/online-coaching`

Weak early CTR usually looks like:

- homepage getting impressions but very few clicks
- the Mauritius landing page getting impressions below position 15 with low CTR
- category pages getting impressions but almost no entry clicks

## 5. Daily checks for week 1

- confirm forms still submit successfully
- confirm WhatsApp links still open correctly
- confirm thank-you visits still appear after form submits
- review the first pages getting impressions
- check whether homepage and pricing are getting visits without action

## 6. Checks for days 8 to 14

- compare homepage clicks vs consultation clicks
- compare pricing visits vs enquiry actions
- compare blog traffic vs blog CTA clicks
- review which service pages get the first meaningful impressions
- look for the first pages that deserve title or intro tuning

## 7. Lead-quality interpretation

- Homepage leads:
  Usually broad trust leads. Improve clarity and service guidance if these are vague.
- Pricing leads:
  Usually higher-intent. If quality is weak, make the pricing page clearer about service fit and frequency.
- Contact leads:
  Often need reassurance or speed. If many are vague, make WhatsApp-first guidance clearer.
- Service-page leads:
  Usually stronger fit signals. Use these to learn which services deserve more proof and stronger above-the-fold reassurance.
- SEO landing page leads:
  Good indicator that local-intent pages are working. Watch whether Mauritius and Grand Baie leads ask different questions.
- Blog article leads:
  Usually need clearer next steps. If quality is weak, improve the article-to-service mapping instead of making the article more salesy.

WhatsApp-heavy traffic with few forms:

- this often means intent is healthy but visitors want a faster, lighter path
- keep WhatsApp strong and simplify form reassurance before trying to force forms

Form-heavy traffic with weak lead quality:

- tighten service selection guidance
- tighten start timing guidance
- make the first-screen promise more selective on high-intent pages

## 8. If a page needs work first

- Homepage impressions but weak clicks:
  Improve the title, meta description, H1, and first-screen trust message.
- Pricing traffic but weak action:
  Move proof and reassurance closer to pricing cards and sharpen the “best next step” guidance.
- Blog traffic but weak conversion:
  Improve the first CTA block, end CTA, and article-to-service links.
- Contact traffic but weak submits:
  Reduce friction, strengthen response-time reassurance, and keep WhatsApp prominent.

## 9. First proof to replace

Replace in this order:

1. trainer portrait
2. homepage/private studio hero image
3. contact or consultation reassurance image
4. first approved review snippets
5. first approved results image
6. credentials or certification visual
