# Fitness Grand Baie Launch Checklist

## Before Go-Live

- Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
- Set `FORMS_WEBHOOK_URL` and submit a real test lead from each form.
- Add `FORMS_WEBHOOK_BEARER_TOKEN` if the webhook endpoint requires auth.
- Set `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, and `NEXT_PUBLIC_META_PIXEL_ID` if tracking is going live on day one.
- Add `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Confirm the live favicon/app icon and OG preview image are acceptable before launch.

## Asset Replacements

- Replace reserved trainer, studio, equipment, results, house-call, and online-coaching asset slots.
- Replace the reserved credentials/certifications slot on the About and FAQ proof layers if approved assets are available.
- Replace logo-based favicon/OG fallbacks with final brand assets if available.
- Replace privacy-safe testimonial placeholders with approved real testimonials.
- Replace case-study proof notes with approved photos, metrics, and captions where available.

## SEO / Indexing

- Confirm canonicals resolve to the final production domain.
- Confirm `robots.txt` and `sitemap.xml` are serving the live domain.
- Submit the sitemap in Google Search Console.
- Re-check that `/thank-you` and `/checkout` remain intentionally de-emphasized before launch.
- Check that 404 handling is working correctly on the live domain.

## QA

- Test homepage, consultation form, contact form, and service inquiry flow on mobile.
- Confirm WhatsApp links open the correct number: `+23058442849`.
- Confirm the thank-you redirect works after a successful form submission.
- Confirm forms fail safely if the production webhook is misconfigured.
- Review CTA consistency: `Book Consultation`, `WhatsApp Now`, `Request Availability`.
- Do one final manual pass for broken links, image crops, and spacing on mobile.
