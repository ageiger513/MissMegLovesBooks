import { pricing } from "@/lib/site";

type PricingListProps = {
  compact?: boolean;
};

export function PricingList({ compact = false }: PricingListProps) {
  const items = compact ? pricing.slice(0, 3) : pricing;

  return (
    <div className="space-y-4">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : ""}`}>
        {items.map((item) => (
          <article
            key={`${item.name}-${item.time}`}
            className="rounded-3xl border border-taupe/20 bg-white/80 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
              {item.time}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink">{item.name}</h3>
            <p className="mt-3 font-serif text-3xl text-ink">{item.price}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.note}</p>
          </article>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">
        Virtual and in-person rates are the same. If Megan comes to your home,
        there is a $15 travel fee. Sessions are planned with you after the intro
        call.
      </p>
    </div>
  );
}
