import { FloralDivider } from "@/components/Floral";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="mx-auto max-w-3xl px-4 pb-10 pt-14 text-center sm:pt-16">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sage-dark">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      <FloralDivider className="mx-auto mt-6 max-w-xs" />
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {description}
      </p>
    </header>
  );
}
