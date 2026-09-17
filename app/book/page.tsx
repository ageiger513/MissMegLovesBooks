import type { Metadata } from "next";
import { BookingCalendar } from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a 20-minute introductory call with Megan Geiger of Miss Meg Loves Books.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <p className="text-sm uppercase tracking-[0.22em] text-taupe">Book</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        Book an intro call
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Choose a time that works. We’ll use the conversation to learn about your
        child and, if it is a good fit, plan a reading assessment and tutoring
        rhythm from there.
      </p>
      <div className="mt-10">
        <BookingCalendar />
      </div>
    </div>
  );
}
