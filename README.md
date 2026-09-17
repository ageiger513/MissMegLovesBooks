# Miss Meg Loves Books

Parent-facing website for Megan Geiger’s literacy tutoring practice in Burbank, California, with virtual sessions available.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Booking

The Book page currently offers **intro calls only**, using this Google Calendar appointment schedule:

https://calendar.app.google/mTL1SAMP2BMAQJdc9

Reading assessments are arranged during that first conversation. A second schedule can be added later with `NEXT_PUBLIC_ASSESSMENT_SCHEDULE_URL`.

## Contact form

Public contact address: **missmeglovesbooks@gmail.com**.

The form posts to `/api/contact`. Without an email API key, it opens a mailto draft to that inbox. To send from the website itself, configure one of:

- `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL`)
- `WEB3FORMS_ACCESS_KEY`

Also set `CONTACT_TO_EMAIL=missmeglovesbooks@gmail.com`.

## Deploy

Deploy on [Vercel](https://vercel.com) and add the same environment variables. Suggested domain: `missmeglovesbooks.com`.
