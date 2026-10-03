# Project context — Miss Meg Loves Books

Living brief for this tutoring business and website. Update this file when a decision, account, or feature changes so future work starts from the same picture.

Last updated: 2 October 2026

---

## What this is

A parent-facing literacy tutoring practice and launch website for **Megan Geiger** (Miss Meg). She is an elementary teacher, school librarian, and reading specialist. The first product is a professional site where Burbank parents can learn who she is and book an introductory call (in person or virtual). Ongoing weekly tutoring is designed after that conversation — it is not self-booked yet.

Audience: elementary readers, roughly **K–6**, including reluctant readers and children who need help with decoding, fluency, or comprehension.

---

## People and brand

| | |
|---|---|
| Practice name | Miss Meg Loves Books |
| Megan | Megan Geiger |
| Location | Burbank, California (in-person) and virtual |
| Look | Neutral cream paper, navy, dusty rose/coral, gold. Floral as accent, not cartoon. Serif headlines (Fraunces), sans body (Source Sans 3). |
| Logo | Illustration of Megan with books; file at `public/logo.jpg`. Used in the header (circular crop), hero, About, footer, and favicon. |
| Tagline on the mark | Tutoring · Reading support · Confidence |

The site talks to **parents and caregivers only**. No child accounts or child emails.

---

## Accounts and URLs

| Item | Value |
|---|---|
| Business email | missmeglovesbooks@gmail.com |
| Suggested public domain | missmeglovesbooks.com (GoDaddy; connect via Railway — see below) |
| GitHub | https://github.com/ageiger513/MissMegLovesBooks (public, account **ageiger513**) |
| Local folder | `C:\Users\geige\OneDrive\Documents\Tutoring Business\miss-meg-loves-books` |
| Intro-call booking | https://calendar.app.google/mTL1SAMP2BMAQJdc9 |
| Embed used on `/book` | Google Calendar appointment schedule (`?gv=true` embed URL in `lib/site.ts`) |

---

## What we built (the website)

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. Run with `npm run dev` (usually http://localhost:3000).

### Pages

| Route | Purpose |
|---|---|
| `/` | Hero, credentials, how it works, intro vs assessment overview, Meet Megan |
| `/about` | Bio, background (teacher / librarian / specialist), philosophy |
| `/services` | Intro calls, reading assessments, ongoing tutoring; Burbank vs virtual; published rates |
| `/book` | **Intro calls only** — Google Calendar embed + fallback link |
| `/contact` | Parent form + mailto to the Gmail |
| `/privacy` | Parent-only / COPPA-aware policy |

Primary CTAs: **Book an intro call** (`/book`) and **Ask a question** (`/contact`). Reading assessments are described as a service but arranged on the intro call, not self-scheduled.

### Booking

- Google Calendar (same Gmail), not Cal.com. Cal.com is nicer for branded embeds and intake later; Google was chosen because the business Gmail already exists and Meet is built in.
- GoDaddy/Railway cannot CNAME the **root** domain easily; **www + forward apex to www** is the recommended DNS path.
- Short `calendar.app.google` links do not iframe well (`X-Frame-Options`). The Book page uses the longer `/calendar/appointments/schedules/...?gv=true` embed and still offers the short link if the iframe fails.

### Contact form

Posts to `/api/contact`. Parent fields only (optional child first name and grade). Honeypot field `company`. With no Resend/Web3Forms key, the API returns a **mailto** fallback to missmeglovesbooks@gmail.com.

### Intentionally not built yet

Parent logins, payments, invoicing, lesson notes, or recurring weekly self-booking.

---

## Pricing

Published on `/` (intro, 30, and 60 minutes) and in full on `/services`. Defined in `lib/site.ts`.

Market scan of Burbank/LA literacy tutors (September 2026): Care.com homework help ~$27–36/hr; credentialed literacy teachers ~$75–100/hr; intensive clinics ~$100–167/hr.

**Recommended launch menu** (share with Megan; not published on the website):

| Offering | Price |
|---|---|
| Intro call, ~20 min | Free |
| 30-minute session | $55 (not half of $90 — overhead does not scale) |
| 60-minute session | $90 (default) |
| 8 × 60 min prepaid | $680 ($85 each) |
| Reading assessment + write-up | $140 |
| Travel to the child’s home | +$15 |
| Virtual / studio | Same rate |

One-pager for Megan: `C:\Users\geige\OneDrive\Documents\Tutoring Business\Miss Meg Pricing One-Pager.pdf`  
Interactive notes: canvas `canvases/burbank-tutoring-pricing.canvas.tsx` in the Cursor project folder.

---

## Deploy and domain (in progress)

Plan: **Railway** connected to the GitHub repo, custom domain on **GoDaddy**.

1. Confirm the app loads on Railway’s `*.up.railway.app` URL first (`npm run start` on the assigned `PORT`).
2. In Railway, add custom domain **www.missmeglovesbooks.com** (not the bare domain on GoDaddy DNS).
3. In GoDaddy DNS add **both** the CNAME and the TXT (`_railway-verify.www`) Railway shows. Copy with Railway’s buttons.
4. Forward `missmeglovesbooks.com` → `https://www.missmeglovesbooks.com` (301).
5. Wait for the green check and SSL. A 404 on the custom domain usually means the TXT record is missing.

GoDaddy cannot CNAME `@` / the apex to Railway. Cloudflare nameservers are the workaround if the site must live on the root URL with no www.

---

## Decisions log

| Decision | Choice | Why |
|---|---|---|
| First product | Launch marketing site + intro booking | Get students before building a full platform |
| Scheduling | Google Calendar intro calls only | Same Gmail; assessment calendar can wait |
| Email | missmeglovesbooks@gmail.com | Business inbox |
| Hosting target | Railway + GoDaddy www | User’s stack; not Vercel (README still mentions Vercel as an alternate) |
| GitHub | Public `MissMegLovesBooks` | Ready to connect to Railway |
| Brand colors | Navy / cream / coral / gold from the logo | Replaced the earlier sage-green palette |

---

## Still open

- [ ] Railway project live and GoDaddy DNS pointed at www
- [ ] Optional: Resend or Web3Forms so the contact form emails Megan without opening a mail app
- [ ] Real headshot / classroom photos if Megan wants them instead of the illustration in some spots
- [x] Publish rates on `/services` once Megan confirms
- [ ] Reading-assessment Google Calendar when she is ready (`NEXT_PUBLIC_ASSESSMENT_SCHEDULE_URL`)
- [ ] Payments and weekly session booking after she has a student rhythm

---

## How to work in this repo

```bash
cd "C:\Users\geige\OneDrive\Documents\Tutoring Business\miss-meg-loves-books"
npm install
npm run dev
```

Copy `.env.example` to `.env.local` for local overrides. Do not commit `.env.local`. Core contact and intro-booking URLs are also hardcoded as fallbacks in `lib/site.ts`.
