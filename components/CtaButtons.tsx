import Link from "next/link";

type CtaButtonsProps = {
  className?: string;
  size?: "md" | "lg";
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function CtaButtons({ className = "", size = "md" }: CtaButtonsProps) {
  const shared =
    "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href="/book"
        className={`${shared} ${sizeClasses[size]} bg-ink text-paper hover:bg-sage focus-visible:outline-ink`}
      >
        Book an intro call
      </Link>
      <Link
        href="/contact"
        className={`${shared} ${sizeClasses[size]} border border-rose-deep/40 bg-paper text-rose-deep hover:bg-rose-deep/10 focus-visible:outline-rose-deep`}
      >
        Ask a question
      </Link>
    </div>
  );
}
