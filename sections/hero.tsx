import Image from "next/image";
import Link from "next/link";

import portraitPill from "@/assets/images/portrait-pill.jpg";
import { Button } from "@/components/ui/button";
import { facts } from "@/lib/data";

const Hero = () => {
  return (
    <section className="container-page flex flex-col gap-7 pb-12 pt-10 md:gap-16 md:pb-24 md:pt-[104px]">
      <p className="enter inline-flex w-fit items-center gap-2 rounded-full border border-line bg-card py-2 pl-3 pr-3 text-label font-medium md:gap-2.5 md:py-[9px] md:pl-3.5 md:pr-4">
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-success/60 motion-reduce:hidden" />
          <span className="relative size-2 rounded-full bg-success" />
        </span>
        Open to full-time roles &amp; freelance
      </p>

      <h1 className="font-semibold">
        <span className="enter block text-display-xl [animation-delay:60ms]">
          I design <span className="md:hidden">&amp;</span>
          <span className="hidden md:inline">and</span> build
        </span>
        <span className="enter flex items-center gap-3 [animation-delay:120ms] md:gap-8">
          <Image
            src={portraitPill}
            alt=""
            priority
            sizes="(min-width: 768px) 268px, 92px"
            className="enter-pill aspect-[268/136] w-[clamp(5.75rem,1.66rem+16.76vw,16.75rem)] rounded-full object-cover [animation-delay:180ms]"
          />
          <span className="font-serif text-display-xl-serif font-normal italic text-accent">
            thoughtful
          </span>
        </span>
        <span className="enter block text-display-xl [animation-delay:180ms]">
          web products.
        </span>
      </h1>

      <div className="enter flex flex-col gap-7 [animation-delay:260ms] lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-[540px] flex-col gap-7 md:gap-8">
          <p className="text-body-l text-ink-muted">
            Frontend developer with 10+ years in React, Next.js and TypeScript —
            and a UI/UX engineering background, so I take work from Figma to
            production without losing the details. I’ve shipped for teams like
            Pearson and Sinorbis, and I build my own SaaS products end to end.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Button asChild>
              <Link href="#work">See my work ↓</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#contact">Start a project ↗</Link>
            </Button>
          </div>
        </div>

        <dl className="flex justify-between border-t border-line pt-6 lg:gap-14 lg:border-0 lg:pt-0">
          {facts.map(({ value, label, shortLabel }) => (
            <div key={label} className="flex flex-col-reverse gap-1 md:gap-2">
              <dt className="mono-label text-ink-muted">
                <span className="md:hidden">{shortLabel}</span>
                <span className="hidden md:inline">{label}</span>
              </dt>
              <dd className="text-stat font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
