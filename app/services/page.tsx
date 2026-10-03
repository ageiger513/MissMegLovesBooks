import type { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";
import { PricingList } from "@/components/PricingList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Intro calls, reading sessions, and literacy tutoring in Burbank or online. Free intro call; 30 minutes $55; 60 minutes $90.",
};

const services = [
  {
    name: "Intro call",
    detail: "About 20 minutes · Google Meet or phone",
    body: "A parent-only conversation. You can share what’s happening with reading, ask how Megan works, and decide whether an assessment is the right next step. There is no pressure to book further sessions on the call.",
  },
  {
    name: "Reading assessment",
    detail: "Longer session · Burbank in-person or virtual",
    body: "A warm look at your child as a reader — decoding, fluency, and comprehension — without turning the hour into a high-stakes test. Afterward, Megan writes a plain-language summary of strengths and needs and a recommended tutoring plan. This is arranged during the intro call rather than self-booked.",
  },
  {
    name: "Ongoing tutoring",
    detail: "Weekly rhythm designed after the assessment",
    body: "Once the picture is clear, Megan proposes a tutoring schedule. Ongoing weekly sessions are not self-booked on this site. The assessment exists so that plan can be thoughtful instead of generic.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <p className="text-sm uppercase tracking-[0.22em] text-taupe">Services</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        Literacy support, designed with parents
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Start with a 20-minute intro call. Assessments and ongoing tutoring are
        planned together after that conversation.
      </p>

      <div className="mt-12 grid gap-6">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-3xl border border-taupe/20 bg-white/70 p-8"
          >
            <h2 className="font-serif text-2xl text-ink">{service.name}</h2>
            <p className="mt-1 text-sm text-sage-deep">{service.detail}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{service.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-paper-deep/70 p-8">
          <h2 className="font-serif text-2xl text-ink">In person in Burbank</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Local families can meet in Burbank, California. In-person work is
            especially helpful for assessments and for readers who do better
            with books and materials in the same room.
          </p>
        </div>
        <div className="rounded-3xl bg-paper-deep/70 p-8">
          <h2 className="font-serif text-2xl text-ink">Virtual</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Virtual sessions use the same calm, structured approach. They work
            well for intro calls, many assessments, and ongoing tutoring when
            travel is a stretch.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-sm uppercase tracking-[0.22em] text-taupe">Pricing</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">What sessions cost</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          No packages you have to guess at. The intro call is free. Weekly
          tutoring is billed by the visit, or you can save a little with an
          eight-session pack.
        </p>
        <div className="mt-8">
          <PricingList />
        </div>
      </section>

      <CtaButtons className="mt-10" size="lg" />
    </div>
  );
}
