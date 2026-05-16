# Post-Launch Optimization Playbook

This site is set up to improve with real Search Console, GA4, and lead data instead of guesswork.

## 1. Priority page roles

- `/`
  Brand trust + broad local intent. This page should win branded searches, broad local discovery, and first-impression trust.
- `/personal-trainer-mauritius`
  Main keyword page. This should stay the clearest answer for `Personal Trainer Mauritius`.
- `/personal-trainer-grand-baie`
  Local conversion page. This should win Grand Baie intent, tourist/expat/local comparisons, and local service trust.
- `/services/private-personal-training`
  Best fit for one-to-one private coaching intent and private-gym alternative intent.
- `/services/online-coaching`
  Best fit for remote / flexible / recurring-coaching intent.
- `/pricing`
  Cost, comparison, and "is it worth it" intent.
- `/blog/*`
  Informational intent, topical authority, and assisted conversion.
- `/blog/category/*`
  Topical hub intent and internal-link distribution.

## 2. Search Console review workflow

Review the last 28 days first, then compare against the previous 28 days.

### High-impression, low-CTR pages

Check pages with:

- more than 150 impressions and low clicks
- money pages with CTR below 2%
- blog posts with CTR below 1.5%

Adjust in this order:

1. title tag
2. meta description
3. H1 / first-screen copy
4. intro paragraph
5. trust language near the top

### Page 2 or low page 1 opportunities

Prioritize pages with:

- average position between 7 and 20
- enough impressions to prove demand
- strong conversion relevance

Improve:

- richer query-match subheadings
- FAQ intent coverage
- internal links from stronger pages
- supporting blog links into the target page

### Query cannibalization checks

Watch for the same query triggering more than one of these:

- homepage
- `/personal-trainer-mauritius`
- `/personal-trainer-grand-baie`
- `/services/private-personal-training`

If overlap grows:

- strengthen the intended page's first-screen clarity
- tighten internal links toward the intended page
- reduce duplicate phrasing on the weaker competing page

## 3. Query buckets to monitor

### Homepage

- brand searches
- `fitness grand baie`
- broad local trust queries
- broader `personal trainer mauritius` support terms

### `/personal-trainer-mauritius`

- `personal trainer mauritius`
- `best personal trainer mauritius`
- `private personal trainer mauritius`
- `fitness coach mauritius`

### `/personal-trainer-grand-baie`

- `personal trainer grand baie`
- `grand baie personal trainer`
- `private gym grand baie`
- tourist / expat / villa guest local queries

### Service pages

- `private personal trainer mauritius`
- `online personal trainer mauritius`
- `house call personal trainer mauritius`
- `couple training mauritius`

### Blog

- high-impression informational queries
- comparison queries
- cost / worth-it queries
- beginner, expat, weight-loss, and private-gym queries

## 4. What to do when a page gets impressions but weak clicks

- Rewrite the title to make the page outcome clearer.
- Make the meta description more specific and less generic.
- Bring the real differentiator into the first screen:
  appointment-only, private gym, home residence, Grand Baie, WhatsApp-first contact.
- Add one strong trust block above the fold if needed.
- Add 1-3 stronger internal links from related pages that already get traffic.

## 5. What to do when a post gets clicks but weak lead flow

Check:

- `blog_cta_click`
- `book_consultation_click`
- `whatsapp_click`
- `request_availability_click`
- `blog_article_engaged`

If engagement is good but CTA activity is weak:

- improve the inline CTA copy
- move the first CTA block slightly higher
- add a more specific "best next step" block
- add one more relevant money-page link inside the body

## 6. GA4 / event interpretation guide

### Healthy lead flow pattern

- page views increase
- WhatsApp clicks and consultation clicks increase with them
- thank-you visits rise with form submissions

### Warning signals

- high pricing page views but weak consultation / WhatsApp clicks
  Pricing reassurance or CTA clarity may be weak.
- strong article engagement but weak blog CTA clicks
  The article is useful but the next-step logic is weak.
- many contact page visits but weak form submits
  The form or reassurance copy may need simplification.
- many consultation clicks but low thank-you visits
  The form may be causing friction or the webhook may need checking.

### Core events to review monthly

- `whatsapp_click`
- `book_consultation_click`
- `request_availability_click`
- `consultation_form_submit`
- `contact_form_submit`
- `service_inquiry_submit`
- `pricing_cta_click`
- `blog_cta_click`
- `blog_article_engaged`
- `thank_you_view`

## 7. Internal linking rules for future optimization

- Money pages should receive links from category hubs and high-impression articles.
- Top blog winners should link to at least 2 money pages.
- Category pages should always point to the strongest matching service or landing page.
- Homepage should keep linking to the main landing pages and best support articles.
- Results and testimonials should always link back to booking or contact routes.

## 8. Monthly review order

1. Search Console: top queries, high-impression low-CTR pages, position 7-20 pages
2. GA4 / events: lead clicks, form submits, thank-you visits, blog engagement
3. Internal linking: strengthen pages already proving demand
4. Metadata + intro tuning: only after reviewing real data
5. New content: publish around winning query clusters, not random topics
