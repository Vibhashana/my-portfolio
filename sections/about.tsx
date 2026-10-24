import Image from "next/image";

import portrait from "@/assets/images/portrait.jpg";
import DownloadCv from "@/components/download-cv";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="bg-surface md:bg-transparent">
      <div className="container-page flex flex-col gap-8 py-[72px] md:py-36 lg:flex-row lg:items-start lg:gap-24">
        <Reveal
          as="figure"
          variant="clip"
          className="relative shrink-0 overflow-hidden rounded-3xl lg:w-[472px] lg:rounded-[32px]"
        >
          <Image
            src={portrait}
            alt="Sahan sitting on a wooden staircase"
            sizes="(min-width: 1024px) 472px, calc(100vw - 40px)"
            className="aspect-[350/420] w-full object-cover lg:aspect-[472/640]"
          />
          <figcaption className="absolute bottom-5 left-5 hidden flex-col gap-1.5 rounded-[20px] border border-white/60 bg-white/85 px-5 py-4 backdrop-blur-xl md:flex">
            <span className="mono-label text-ink-muted">Off the clock</span>
            <span className="text-label font-medium">
              Design inspiration, a soldering iron
              <br /> and a good cup of coffee.
            </span>
          </figcaption>
        </Reveal>

        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-7 lg:gap-10">
            <p className="eyebrow">03 — Who I am</p>
            <h2 className="text-h2 font-semibold">
              Hi, I’m{" "}
              <span className="font-serif text-[1.136em] font-normal italic">
                {profile.fullName}
              </span>{" "}
              — a frontend developer who cares how products look, feel and
              perform, from the first Figma frame to the last line of code.
            </h2>
          </div>

          <div className="grid gap-5 text-body-m text-ink-muted md:grid-cols-2 md:gap-x-10">
            <p>
              I started as a UI/UX engineer, so I speak both design and code.
              Hand me a Figma file and I’ll hand back production React that
              matches it — states, edge cases and all.
            </p>
            <p>
              I’ve built for teams at Pearson, Eyepax and Sinorbis, and I run my
              own products — ezRSVP for weddings and Innkeep for small hotels —
              so I think about the business, not just the ticket.
            </p>
            <p>
              Day to day I work in React, Next.js and TypeScript with Tailwind,
              ShadCN, Chakra UI or Ant Design, test with Vitest and Testing
              Library, and care about performance and accessibility.
            </p>
            <p>
              I’m open to full-time frontend roles and freelance projects. If
              you’re hiring or have something to build, I’d love to hear about
              it.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <DownloadCv />
            <Button asChild variant="secondary">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
