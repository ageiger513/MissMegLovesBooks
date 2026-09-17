export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="14" fill="#EFE8DC" />
      <path
        d="M10 32.5c6.2-1.4 9.8-7.2 9.2-14.4"
        stroke="#7D8F6A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17.4 21.2c1.8-2.6 4.8-3.6 7.1-2.2 1.8 1.1 1.6 3.6-.2 4.6-1.6.9-3.3.2-4.4-1.2-1.1 1.6-2.9 2.4-4.6 1.5-1.8-1-1.9-3.4-.3-4.6 1.3-1 3.2-.4 4.4 1.9Z"
        fill="#C9A4A0"
      />
      <path
        d="M24 16.5c.4 4.2-1.6 8.4-5.4 11.2"
        stroke="#5C6B4D"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M22 34.5c4.8-6.8 12.4-8.6 16.5-5.2"
        stroke="#A97873"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14 34h20.5c.4-4.6-3.6-8.2-10.2-8.2S13.6 29.4 14 34Z"
        fill="#5C6B4D"
      />
      <path d="M24.2 25.8V34" stroke="#F7F3EC" strokeWidth="1.2" />
      <path
        d="M16.2 32.4c2.4-2.6 5.2-3.8 8-3.8 2.8 0 5.6 1.2 8 3.8"
        stroke="#F7F3EC"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-sage ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-taupe/70" />
      <svg viewBox="0 0 72 24" className="h-6 w-16">
        <path
          d="M4 12h18"
          stroke="#C4B5A4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M50 12h18"
          stroke="#C4B5A4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M36 4c2.4 3.2 2.4 6.4 0 9.6-2.4-3.2-2.4-6.4 0-9.6Z"
          fill="#C9A4A0"
        />
        <path
          d="M29 12c3.4-2.2 6.8-2.2 10.2 0-3.4 2.2-6.8 2.2-10.2 0Z"
          fill="#7D8F6A"
        />
        <circle cx="36" cy="12" r="1.6" fill="#5C6B4D" />
      </svg>
      <span className="h-px flex-1 bg-taupe/70" />
    </div>
  );
}

export function CornerSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 102c18-8 34-28 38-58"
        stroke="#7D8F6A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M42 62c8-10 22-16 34-14"
        stroke="#C9A4A0"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M48 48c3.8-6 10.4-8.4 15.6-5.2 4.2 2.6 4 8.2-.4 10.6-3.8 2.2-8.2.4-10.8-3.2-2.4 3.8-6.8 5.8-11 3.4-4.4-2.6-4.6-8.2-.2-10.8 3.4-2 8-.4 10.8 5.2Z"
        fill="#C9A4A0"
        fillOpacity="0.9"
      />
      <path
        d="M30 78c4.6-7.4 12.4-10.4 18.8-7"
        stroke="#5C6B4D"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M28 86c5-2.4 8-7.2 8.4-12.8"
        stroke="#A97873"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookPortrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-taupe/50 bg-paper ${className}`}
    >
      <div className="floral-wash absolute inset-0" />
      <CornerSprig className="absolute -left-2 -top-4 h-36 w-36 opacity-80" />
      <CornerSprig className="absolute -bottom-8 -right-6 h-40 w-40 rotate-180 opacity-70" />
      <svg
        viewBox="0 0 280 320"
        className="relative mx-auto h-full w-full max-w-sm"
        role="img"
        aria-label="Placeholder illustration of books and botanicals until a photo of Megan is added"
      >
        <rect x="54" y="86" width="172" height="168" rx="10" fill="#5C6B4D" />
        <rect x="62" y="96" width="156" height="148" rx="6" fill="#F7F3EC" />
        <path d="M140 96v148" stroke="#C4B5A4" strokeWidth="2" />
        <rect x="78" y="124" width="48" height="8" rx="4" fill="#C9A4A0" />
        <rect x="78" y="142" width="36" height="6" rx="3" fill="#C4B5A4" />
        <rect x="154" y="124" width="48" height="8" rx="4" fill="#7D8F6A" />
        <rect x="154" y="142" width="40" height="6" rx="3" fill="#C4B5A4" />
        <rect x="38" y="214" width="28" height="86" rx="4" fill="#A97873" />
        <rect x="70" y="198" width="24" height="102" rx="4" fill="#7D8F6A" />
        <rect x="186" y="206" width="26" height="94" rx="4" fill="#C4B5A4" />
        <rect x="216" y="188" width="22" height="112" rx="4" fill="#5C6B4D" />
        <path
          d="M140 58c8 12 8 24 0 36-8-12-8-24 0-36Z"
          fill="#C9A4A0"
        />
        <circle cx="140" cy="76" r="4" fill="#5C6B4D" />
      </svg>
    </div>
  );
}
