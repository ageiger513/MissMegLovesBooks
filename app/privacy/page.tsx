import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles parent information. This site does not collect information from children.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-sm uppercase tracking-[0.22em] text-taupe">Privacy</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">For parents only</h1>
      <p className="mt-5 leading-relaxed text-ink-soft">
        {site.name} is a tutoring practice for children, but this website is
        written for parents and caregivers. We do not knowingly collect personal
        information from children under 13, and we do not create child accounts.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-ink">What we collect</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">
        When you use the contact form or book a time, we ask for parent contact
        details and, if you choose to share it, a child’s first name, grade,
        format preference, and a short note about reading. That information is
        used only to respond, prepare for a session, and design a tutoring plan.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-ink">What we do not collect</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">
        We do not ask for a child’s email address, school login, photos from a
        child, or any account that belongs to a child. Please do not send those
        in a form or booking note.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-ink">Booking and email</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Calendar bookings for intro calls are handled through Google Calendar
        appointment schedules connected to missmeglovesbooks@gmail.com. Contact
        messages are delivered by email, or by a form provider such as Resend or
        Web3Forms if one is connected. Those services process the information
        you submit in order to complete the request.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-ink">Questions</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">
        If you would like information updated or removed, use the contact form
        from a parent email. This policy will be refined as the practice grows;
        it is intended to stay aligned with a COPPA-aware, parent-mediated
        approach.
      </p>
    </div>
  );
}
