import Link from "next/link";

import { Button } from "@/components/ui/button";

type CaseHeroProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  cta?: { label: string; href: string };
  meta: { label: string; value: string }[];
};

const CaseHero = ({
  eyebrow,
  title,
  tagline,
  intro,
  cta,
  meta,
}: CaseHeroProps) => {
  return (
    <section className="container-page flex flex-col gap-6 pb-8 pt-7 md:gap-12 md:pb-[72px] md:pt-12">
      <nav
        aria-label="Breadcrumb"
        className="flex gap-2.5 text-label font-medium"
      >
        <Link
          href="/#work"
          className="transition-colors duration-200 hover:text-accent"
        >
          ← All work
        </Link>
        <span aria-hidden className="hidden text-ink-muted md:inline">
          /
        </span>
        <span className="hidden text-ink-muted md:inline">Case study</span>
      </nav>

      <div className="enter flex flex-col gap-2.5 md:gap-4">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="flex flex-col gap-2.5 md:gap-4">
          <span className="text-display-xl font-semibold">{title}</span>
          <span className="text-balance font-serif text-display-l-serif italic text-accent">
            {tagline}
          </span>
        </h1>
      </div>

      <div className="enter flex flex-col gap-6 [animation-delay:100ms] md:flex-row md:items-end md:justify-between md:gap-20">
        <p className="max-w-[620px] text-body-l text-ink-muted">{intro}</p>
        {cta && (
          <Button asChild className="w-full md:w-auto">
            <a href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label} ↗
            </a>
          </Button>
        )}
      </div>

      <dl className="enter grid [animation-delay:160ms] md:grid-cols-4 md:border-t md:border-line md:pt-7">
        {meta.map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-t border-line py-3.5 md:flex-col md:gap-2.5 md:border-0 md:py-0 md:pr-8"
          >
            <dt className="mono-label shrink-0 text-ink-muted">{label}</dt>
            <dd className="text-right text-label font-medium md:text-left">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default CaseHero;
