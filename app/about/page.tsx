import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { CornerLeaves, SectionDivider } from "@/components/Botanical";
import { CtaButtons } from "@/components/CtaButtons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.teacher}, the teacher, librarian, and reading specialist behind ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <CornerLeaves className="pointer-events-none absolute right-0 top-10 h-40 w-40 text-sage/25" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-taupe">About</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          {site.teacher}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Miss Meg Loves Books is the tutoring practice of {site.teacher}, an
          elementary teacher, librarian, and reading specialist who helps
          children grow into confident, capable readers.
        </p>

        <div className="mx-auto mt-10 max-w-md">
          <BrandLogo
            size="hero"
            className="h-auto w-full rounded-[2rem] object-contain"
          />
        </div>

        <h2 className="mt-14 font-serif text-3xl text-ink">Background</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Megan brings classroom teaching, library work, and specialist
          training to every session. That mix matters. Teaching keeps the work
          practical. Librarianship keeps it rooted in real books and real
          tastes. Reading-specialist training keeps it precise: she can notice
          whether a child is stumbling on sounds, rushing through phrasing, or
          missing the thread of a story.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          She works with elementary readers, roughly kindergarten through sixth
          grade — including reluctant readers and children who need support with
          decoding, fluency, or comprehension.
        </p>

        <SectionDivider className="my-12" />

        <h2 className="font-serif text-3xl text-ink">Philosophy</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Children deserve to be seen as readers, not as a percentile. Sessions
          are calm and structured, with room for curiosity. Parents deserve
          plain language: what is going well, what needs practice, and what a
          realistic next stretch of tutoring could look like.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Work happens in person in Burbank, California, or virtually, so
          families can choose the format that fits.
        </p>

        <CtaButtons className="mt-10" />
      </div>
    </div>
  );
}
