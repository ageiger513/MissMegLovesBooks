import { intakeQuestions, scheduleConfig } from "@/lib/site";

export function BookingCalendar() {
  const bookingUrl = scheduleConfig.introBookingUrl;
  const embedSrc = scheduleConfig.introEmbedUrl;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-taupe/20 bg-white/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
          Introductory call
        </p>
        <h2 className="mt-2 font-serif text-2xl text-ink">
          About 20 minutes · Google Meet or phone
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          A parent conversation to share what’s going on with reading, ask
          questions, and see whether we’re a good fit. Reading assessments are
          scheduled together on this call — they are not self-booked yet.
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
          What parents are asked
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
          {intakeQuestions.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-soft">
          Please book as a parent or caregiver. Do not enter a child’s email
          address.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-taupe/20 bg-white">
        <iframe
          title="Intro call calendar"
          src={embedSrc}
          className="h-[780px] w-full border-0"
        />
      </div>

      <p className="text-center text-sm text-ink-soft">
        If the calendar does not load,{" "}
        <a
          href={bookingUrl}
          className="font-medium underline"
          target="_blank"
          rel="noreferrer"
        >
          open the intro-call scheduler
        </a>
        .
      </p>
    </div>
  );
}
