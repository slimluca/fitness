# Go-Live And First 30 Days

Use this as the main owner-friendly launch and early-monitoring document for Fitness Grand Baie.

## Final env vars to confirm

- `NEXT_PUBLIC_SITE_URL`
- `FORMS_WEBHOOK_URL`
- `FORMS_WEBHOOK_BEARER_TOKEN` if needed
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Final live checks before announcing the site

1. Confirm the live domain matches `NEXT_PUBLIC_SITE_URL`.
2. Submit one test consultation, one contact enquiry, and one service inquiry.
3. Confirm each successful form reaches the webhook and redirects to `/thank-you`.
4. Confirm WhatsApp links open `+23058442849`.
5. Confirm `Book Consultation`, `WhatsApp Now`, and `Request Availability` are visible and working on mobile.
6. Confirm `/thank-you` and `/checkout` are non-indexed.
7. Confirm `robots.txt` and `sitemap.xml` use the live domain.

## Final GBP and citation wording

Business name:

`Fitness Grand Baie`

Short description:

`Private personal trainer in Grand Baie, Mauritius with appointment-only coaching in a home residence.`

Medium description:

`Fitness Grand Baie is an appointment-only private gym in a home residence in Grand Baie, Mauritius, offering private personal training, couple training, house calls, and online coaching.`

Long description:

`Fitness Grand Baie is an appointment-only private gym in a home residence in Grand Baie, Mauritius. The business delivers private personal training, couple training, house calls, and online coaching for residents, expats, villa guests, busy professionals, and beginners who want a premium alternative to crowded public gyms. Enquiries are handled personally, with WhatsApp as the fastest route for availability, consultation follow-up, and scheduling clarity.`

Contact format:

- `+230 5844 2849`
- `Grand Baie, Mauritius`
- `Appointment-only private gym in a home residence`

## First review request steps

1. Ask the first satisfied client for a short Google review.
2. Ask whether the same wording can be adapted for the website.
3. Confirm privacy preference: full name, first name, initials, or private label.
4. Add the best early reviews to homepage, results, and private personal training first.

## First 7 days: check daily

- form submissions are still arriving correctly
- WhatsApp links still open correctly on mobile
- GA4 page views are firing
- `whatsapp_click`, `book_consultation_click`, and `request_availability_click` are appearing
- thank-you visits are showing after successful form submissions
- homepage, pricing, contact, and private-personal-training pages feel correct on mobile

## Weeks 2 to 4: check weekly

- Search Console impressions on `/`, `/personal-trainer-mauritius`, `/personal-trainer-grand-baie`, `/services/private-personal-training`, `/pricing`
- first clicks from branded and local-intent queries
- top blog categories getting first impressions
- any page with impressions but weak clicks
- any page with strong visits but weak CTA activity
- citation and GBP wording staying consistent

## First pages to monitor most closely

- `/`
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/services/private-personal-training`
- `/services/online-coaching`
- `/pricing`
- `/contact`
- `/book-consultation`

## First CTAs to monitor most closely

- `Book Consultation`
- `WhatsApp Now`
- `Request Availability`

## First signs of indexing success

- homepage and main landing pages start receiving impressions
- service pages begin receiving branded or local-intent impressions
- blog categories or strongest articles begin showing in Search Console

## First Search Console pages to inspect

- `/`
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/services/private-personal-training`
- `/services/online-coaching`
- `/pricing`
- top article pages already linked strongly from the homepage or category hubs

## First blog categories to watch

- `Personal Training Mauritius`
- `Private Gym Benefits`
- `Beginner Fitness`
- `Online Coaching`
- `Grand Baie Lifestyle`

## First signs of conversion friction

- contact page visits but weak form submissions
- pricing views but weak consultation or WhatsApp clicks
- consultation page visits but low thank-you visits
- article engagement but weak CTA clicks

## First quick wins to look for

- add the first real trainer portrait
- add the first approved review to the homepage and results page
- replace the most visible reserved trust image
- strengthen the title/meta of any page getting impressions but low CTR
- add internal links into any page that shows early ranking potential

## If impressions arrive but clicks stay low

Test improvements in this order:

1. title tag
2. meta description
3. H1 clarity
4. first-screen trust wording
5. internal links from stronger pages
