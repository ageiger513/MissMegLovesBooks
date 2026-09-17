import type { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Send a parent note to ${site.owner} at ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Contact"
        title="A simple way to reach Megan"
        description={`${site.location}, with virtual sessions available. If you already know you want a time on the calendar, you can skip ahead and book.`}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.15fr]">
        <aside className="space-y-5">
          <div className="rounded-[2rem] border border-taupe/20 bg-paper-deep/70 p-6">
            <h2 className="font-serif text-2xl">Email</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Parents can write anytime at{" "}
              <a href={`mailto:${site.email}`} className="font-medium underline">
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-[2rem] border border-taupe/20 bg-paper-deep/70 p-6">
            <h2 className="font-serif text-2xl">Service area</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              In-person work is based in Burbank, California. Families anywhere
              can request virtual intro calls, assessments, and tutoring.
            </p>
          </div>
          <div className="rounded-[2rem] border border-taupe/20 bg-paper-deep/70 p-6">
            <h2 className="font-serif text-2xl">Prefer to book?</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Intro calls use the booking page so you can see real availability.
              Reading assessments are planned on that first call.
            </p>
            <CtaButtons className="mt-4" />
          </div>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
}
