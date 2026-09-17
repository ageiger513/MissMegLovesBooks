"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo, BrandWordmark } from "@/components/BrandLogo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-taupe/30 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <Link
          href="/"
          className="flex items-center gap-3 text-ink"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            size="mark"
            priority
            className="h-12 w-12 rounded-full object-cover object-[center_28%] ring-1 ring-rose/40 sm:h-14 sm:w-14"
          />
          <span>
            <BrandWordmark compact />
            <span className="hidden text-[0.7rem] tracking-wide text-taupe sm:block">
              Tutoring · {site.location}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-ink underline decoration-rose decoration-2"
                    : "hover:text-ink"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="rounded-full bg-sage-dark px-4 py-2 text-cream hover:bg-sage"
          >
            Book now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-taupe/70 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-ink ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-taupe/30 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-2 hover:bg-paper-deep"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="rounded-full bg-sage-dark px-4 py-3 text-center font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Book now
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
