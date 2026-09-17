import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  parentName?: string;
  email?: string;
  phone?: string;
  childFirstName?: string;
  grade?: string;
  format?: string;
  message?: string;
  company?: string;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailto(body: ContactBody) {
  const subject = encodeURIComponent(`Parent note from ${asString(body.parentName)}`);
  const text = [
    `Parent: ${asString(body.parentName)}`,
    `Email: ${asString(body.email)}`,
    `Phone: ${asString(body.phone) || "—"}`,
    `Child first name: ${asString(body.childFirstName) || "—"}`,
    `Grade: ${asString(body.grade) || "—"}`,
    `Format: ${asString(body.format) || "—"}`,
    "",
    asString(body.message),
  ].join("\n");
  return `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (asString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const parentName = asString(body.parentName);
  const email = asString(body.email);
  const message = asString(body.message);

  if (!parentName || !email || !message) {
    return NextResponse.json(
      { error: "Please include your name, email, and a message." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please use a valid parent email address." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const text = [
    `Parent name: ${parentName}`,
    `Parent email: ${email}`,
    `Phone: ${asString(body.phone) || "—"}`,
    `Child first name: ${asString(body.childFirstName) || "—"}`,
    `Grade: ${asString(body.grade) || "—"}`,
    `Format: ${asString(body.format) || "—"}`,
    "",
    message,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Miss Meg Loves Books <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Parent inquiry from ${parentName}`,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Email could not be sent. Please try again or use the mailto link." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `Parent inquiry from ${parentName}`,
        from_name: parentName,
        email,
        message: text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Email could not be sent. Please try again or email directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      error: "Email delivery is not configured yet.",
      mailto: buildMailto(body),
    },
    { status: 503 },
  );
}
