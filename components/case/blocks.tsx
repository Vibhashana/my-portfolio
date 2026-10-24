import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export const CaseSection = ({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone | "surface";
}) => (
  <section
    className={cn(
      tone === "dark" && "bg-night text-on-night",
      tone === "surface" && "bg-surface"
    )}
  >
    <div className={cn("container-page pb-16 md:pb-[120px]", className)}>
      {children}
    </div>
  </section>
);

export const CaseHeading = ({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: Tone;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-20",
      className
    )}
  >
    <div className="flex max-w-[800px] flex-col gap-6 md:gap-[18px]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-balance text-title-m font-semibold">{title}</h2>
    </div>
    {description && (
      <p
        className={cn(
          "text-body-m md:max-w-[400px]",
          tone === "dark" ? "text-on-night-muted" : "text-ink-muted"
        )}
      >
        {description}
      </p>
    )}
  </div>
);

export const Showcase = ({
  image,
  alt,
  tone = "light",
}: {
  image: StaticImageData;
  alt: string;
  tone?: Tone;
}) => (
  <div
    className={cn(
      "flex items-center justify-center rounded-3xl px-[18px] py-8 md:rounded-[36px] md:px-[100px] md:py-[62px]",
      tone === "dark" ? "bg-night" : "bg-surface"
    )}
  >
    <Image
      src={image}
      alt={alt}
      priority
      sizes="(min-width: 1280px) 1000px, calc(100vw - 76px)"
      className="h-auto w-full max-w-[1000px]"
    />
  </div>
);

export const Brief = ({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) => (
  <div className="grid gap-6 md:grid-cols-2 md:gap-24">
    <div className="flex flex-col gap-6 md:gap-5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-balance text-h2 font-semibold">{title}</h2>
    </div>
    <div className="flex flex-col gap-5 text-body-l text-ink-muted md:pt-[34px]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export const Flow = ({
  steps,
  tone = "light",
}: {
  steps: { title: string; description: string }[];
  tone?: Tone;
}) => (
  <ol className="mt-8 flex flex-col items-stretch md:mt-16 lg:flex-row">
    {steps.map(({ title, description }, i) => (
      <Fragment key={title}>
        {i > 0 && (
          <li
            aria-hidden
            className={cn(
              "flex items-center justify-center py-2 text-h3 font-semibold lg:px-3.5 lg:py-0",
              tone === "dark" ? "text-on-night-muted" : "text-ink-muted"
            )}
          >
            <span className="rotate-90 lg:rotate-0">→</span>
          </li>
        )}
        <Reveal
          as="li"
          delay={i * 70}
          className={cn(
            "flex flex-1 flex-col gap-2.5 rounded-3xl px-6 py-7",
            tone === "dark" ? "bg-night-raised" : "border border-line bg-card"
          )}
        >
          <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-[22px] font-semibold leading-[1.18] tracking-[-0.015em]">
            {title}
          </h3>
          <p
            className={cn(
              "text-body-s",
              tone === "dark" ? "text-on-night-muted" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      </Fragment>
    ))}
  </ol>
);

export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3 border-t border-line pt-5">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-body-s">
        <span aria-hidden className="text-accent">
          —
        </span>
        {item}
      </li>
    ))}
  </ul>
);

export const FeatureRow = ({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  reverse = false,
  visualClassName,
  bodyClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  visualClassName?: string;
  bodyClassName?: string;
}) => (
  <CaseSection className={bodyClassName}>
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[72px]",
        reverse && "lg:flex-row-reverse"
      )}
    >
      <div className="flex flex-col gap-3.5 lg:w-[380px] lg:shrink-0 lg:gap-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-balance text-h2 font-semibold">{title}</h2>
        <p className="text-body-m text-ink-muted">{description}</p>
        <div className="hidden lg:block">
          <Bullets items={bullets} />
        </div>
      </div>
      <Reveal
        className={cn(
          "flex flex-1 justify-center overflow-hidden rounded-[20px] bg-surface px-3.5 pt-[18px] lg:rounded-[28px] lg:px-11 lg:pt-12",
          visualClassName
        )}
      >
        {visual}
      </Reveal>
    </div>
  </CaseSection>
);

export const NextProject = ({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}) => (
  <CaseSection className="pt-0">
    <Reveal>
      <article className="grid overflow-hidden rounded-3xl bg-ink text-on-night md:rounded-[32px] lg:grid-cols-[480px_1fr]">
        <div className="flex flex-col justify-between gap-6 p-7 lg:p-14">
          <div className="flex flex-col gap-3.5">
            <p className="eyebrow">Next case study</p>
            <h2 className="text-display-m font-semibold">{title}</h2>
            <p className="max-w-[360px] text-body-m text-on-night-muted">
              {description}
            </p>
          </div>
          <Button asChild variant="onNight" className="w-fit">
            <Link href={href}>Read case study →</Link>
          </Button>
        </div>
        <div className="hidden items-center justify-center bg-night-raised p-10 lg:flex">
          <Image
            src={image}
            alt=""
            sizes="640px"
            className="h-auto max-h-[303px] w-auto"
          />
        </div>
      </article>
    </Reveal>
  </CaseSection>
);
