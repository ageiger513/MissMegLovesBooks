type BotanicalProps = {
  className?: string;
};

export function LeafSprig({ className = "h-16 w-16" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M40 72C40 72 18 54 18 34c0-12 8-20 22-20s22 8 22 20c0 20-22 38-22 38Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 72V18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M40 34c-8-4-14-12-16-20M40 42c8-4 14-12 16-20M40 50c-7-3-12-9-14-16M40 58c7-3 12-9 14-16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PressedFlower({ className = "h-20 w-20" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="7" stroke="currentColor" strokeWidth="1.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="28"
          rx="8"
          ry="16"
          stroke="currentColor"
          strokeWidth="1.2"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function SectionDivider({ className = "" }: BotanicalProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-taupe/40 sm:w-24" />
      <svg viewBox="0 0 48 24" className="h-6 w-12 text-sage" fill="none">
        <path
          d="M2 12c8-10 14-10 22 0 8 10 14 10 22 0"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="24" cy="12" r="2.2" fill="currentColor" className="text-rose" />
      </svg>
      <span className="h-px w-16 bg-taupe/40 sm:w-24" />
    </div>
  );
}

export function CornerLeaves({ className = "h-28 w-28" }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 102c22-8 38-28 42-52"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M60 50c-18 2-32 14-38 30 18-4 32-16 38-30Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M72 88c16-18 22-40 18-62"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M90 26c-4 16-16 32-34 40 8-18 22-34 34-40Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
