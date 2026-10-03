import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-taupe/30 bg-paper-deep/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo
              size="footer"
              className="h-20 w-20 rounded-2xl object-cover object-top ring-1 ring-taupe/20"
            />
            <div>
              <p className="font-serif text-xl text-ink">Miss Meg</p>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ink">
                Loves Books
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Thoughtful reading support with {site.owner}, an elementary
            teacher, school librarian, and reading specialist. In-person in{" "}
            {site.location} and virtually.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
            For parents
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            This site is for parents and caregivers. We do not collect
            information directly from children.
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-taupe/30 py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {site.name}. Tutoring · reading support ·
        confidence.
      </div>
    </footer>
  );
}
