"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as {
        error?: string;
        mailto?: string;
      };

      if (!response.ok) {
        if (payload.mailto) {
          window.location.href = payload.mailto;
          setStatus("success");
          setMessage(
            "Email is not configured on the server yet, so your mail app should open instead.",
          );
          return;
        }
        throw new Error(payload.error || "Unable to send right now.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Megan will reply to the parent email you shared.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email directly.",
      );
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-2xl border border-taupe/70 bg-white px-4 py-3 text-ink outline-none focus:border-sage";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[2rem] border border-taupe/50 bg-white p-6 sm:p-8">
      <p className="text-sm text-ink-soft">
        Parents and caregivers only. Please do not submit a child’s email
        address.
      </p>

      <label className="block text-sm font-medium">
        Your name
        <input name="parentName" required autoComplete="name" className={fieldClass} />
      </label>

      <label className="block text-sm font-medium">
        Your email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>

      <label className="block text-sm font-medium">
        Phone <span className="font-normal text-ink-soft">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Child’s first name{" "}
          <span className="font-normal text-ink-soft">(optional)</span>
          <input name="childFirstName" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium">
          Grade <span className="font-normal text-ink-soft">(optional)</span>
          <input name="grade" className={fieldClass} />
        </label>
      </div>

      <label className="block text-sm font-medium">
        In-person or virtual{" "}
        <span className="font-normal text-ink-soft">(optional)</span>
        <select name="format" defaultValue="" className={fieldClass}>
          <option value="">Not sure yet</option>
          <option value="in-person">In-person in Burbank</option>
          <option value="virtual">Virtual</option>
        </select>
      </label>

      <label className="block text-sm font-medium">
        How can Megan help?
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-sage-dark px-5 py-3 text-sm font-semibold text-cream hover:bg-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send a parent note"}
      </button>

      {message ? (
        <p
          className={
            status === "error" ? "text-sm text-rose-deep" : "text-sm text-sage-dark"
          }
        >
          {message}
        </p>
      ) : null}

      <p className="text-xs text-ink-soft">
        You can also email{" "}
        <a className="underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
