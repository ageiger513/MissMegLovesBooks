import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CornerLeaves, PressedFlower, SectionDivider } from "@/components/Botanical";
import { CtaButtons } from "@/components/CtaButtons";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Start with a conversation",
    body: "Book a short intro call so Megan can hear what’s happening at home and at school — and so you can ask anything you’d like.",
  },
  {
    title: "See the reader, not just the score",
    body: "A reading assessment looks at decoding, fluency, and comprehension in a calm, kid-friendly way. You leave with a clear picture and a recommended plan.",
  },
  {
    title: "Build a tutoring rhythm",
    body: "Ongoing weekly sessions are designed after the assessment. They are not self-booked in this first step — Megan will propose a schedule that fits.",
  },
];

const credentials = [
  "Elementary teacher",
  "Librarian",
  "Reading specialist",
];

export default function HomePage() {
  return (
    <div>
      <section className="floral-wash relative overflow-hidden">
        <CornerLeaves className="pointer-events-none absolute -left-6 top-6 h-36 w-36 text-sage/35 sm:h-48 sm:w-48" />
        <PressedFlower className="pointer-events-none absolute -right-4 bottom-8 h-28 w-28 text-rose/35 sm:right-8" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-taupe">
              {site.location} · Virtual
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Help your child feel at home with books.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.name} offers personalized literacy support for elementary
              readers — reluctant, curious, or somewhere in between — with{" "}
              {site.teacher}, a teacher, librarian, and reading specialist.
            </p>
            <CtaButtons className="mt-8" size="lg" />
          </div>

          <div className="relative mx-auto max-w-md lg:max-w-none">
            <BrandLogo
              size="hero"
              priority
              className="h-auto w-full rounded-[2rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-taupe/15 bg-paper-deep/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 sm:px-8">
          {credentials.map((item) => (
            <p key={item} className="font-serif text-lg text-sage-deep">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-taupe">
          How it works
        </p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          A clear path for parents
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-taupe/20 bg-white/60 p-6"
            >
              <p className="text-sm text-rose-deep">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-sage-deep px-8 py-10 text-paper">
            <h2 className="font-serif text-3xl">Intro call</h2>
            <p className="mt-3 leading-relaxed text-paper/85">
              A 20-minute Google Meet or phone conversation. Share concerns, ask about
              approach, and decide whether a full reading assessment is the
              next step.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-sage-deep hover:bg-paper-deep"
            >
              Book an intro call
            </Link>
          </div>
          <div className="rounded-3xl border border-rose-deep/25 bg-white/70 px-8 py-10">
            <h2 className="font-serif text-3xl text-ink">Reading assessment</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A longer look at your child as a reader, in Burbank or virtually.
              You’ll receive a plain-language summary and a recommended tutoring
              plan — not a stack of jargon. Assessments are arranged during the
              intro call.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex rounded-full border border-rose-deep/40 px-5 py-2.5 text-sm font-medium text-rose-deep hover:bg-rose-deep/10"
            >
              Start with an intro call
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-taupe">Meet Megan</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          A teacher, librarian, and reading specialist
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          After years in elementary classrooms and school libraries,{" "}
          {site.teacher} now works with families who want reading support that
          is both skilled and kind.
        </p>
        <Link href="/about" className="mt-5 inline-block text-sm font-medium underline">
          Read more about Megan
        </Link>
        <CtaButtons className="mt-8 justify-center" size="lg" />
      </section>
    </div>
  );
}
