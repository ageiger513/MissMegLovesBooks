import Image from "next/image";
import { site } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "mark" | "nav" | "hero" | "footer";
};

const sizes = {
  mark: { width: 80, height: 80 },
  nav: { width: 72, height: 72 },
  footer: { width: 112, height: 112 },
  hero: { width: 900, height: 900 },
};

export function BrandLogo({
  className = "",
  priority = false,
  size = "nav",
}: BrandLogoProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src="/logo.jpg"
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}

export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="leading-tight">
      <span className="block font-serif text-lg text-ink sm:text-xl">Miss Meg</span>
      <span
        className={`block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ink ${
          compact ? "hidden sm:block" : ""
        }`}
      >
        Loves Books
      </span>
    </span>
  );
}
