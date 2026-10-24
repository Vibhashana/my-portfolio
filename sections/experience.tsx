"use client";

import { useState } from "react";

import SectionHeader from "@/components/section-header";
import { companies } from "@/lib/data";
import { cn } from "@/lib/utils";

const year = (date: string) => date.split(" ").at(-1);

const Experience = () => {
  const [open, setOpen] = useState<string | null>(companies[0].name);

  return (
    <section id="experience" className="container-page py-[72px] md:py-36">
      <SectionHeader
        eyebrow="04 — Experience"
        title="Work experience"
        description="Over ten years of shipping interfaces — from kiosk and mobile apps to edtech platforms and SaaS."
        className="[&>p]:hidden md:[&>p]:block"
      />

      <ol className="mt-8 border-b border-line md:mt-16">
        {companies.map(({ name, role, start, end, highlights, stack }) => {
          const expanded = open === name;
          const panelId = `experience-${name.toLowerCase().replace(/\W+/g, "-")}`;

          return (
            <li key={name} className="border-t border-line">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : name)}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-3 py-5 text-left md:grid-cols-[220px_1fr_auto] md:items-start md:gap-10 md:py-9"
              >
                <span className="mono-label text-ink-muted md:hidden">
                  {year(start)} — {year(end)}
                </span>
                <span className="hidden font-mono text-mono-m text-ink-muted md:block md:pt-1.5">
                  {start} — {end}
                </span>
                <span className="col-start-1 row-start-2 flex flex-col gap-1 md:col-start-auto md:row-start-auto md:flex-row md:items-baseline md:gap-4">
                  <span className="text-h3 font-semibold">{name}</span>
                  <span className="text-body-s text-ink-muted md:text-body-m">
                    {role}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "col-start-2 row-span-2 row-start-1 grid size-11 place-items-center rounded-full border text-[28px] font-semibold leading-none transition-colors duration-200 md:col-start-auto md:row-span-1 md:row-start-auto",
                    expanded
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-ink group-hover:border-ink/40"
                  )}
                >
                  {expanded ? "–" : "+"}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-label={`${name} highlights`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden" inert={!expanded}>
                  <div className="flex flex-col gap-5 pb-6 md:ml-[260px] md:mr-[84px] md:pb-9">
                    <ul className="flex flex-col text-body-s md:text-body-m">
                      {highlights.map((highlight) => (
                        <li key={highlight}>— {highlight}</li>
                      ))}
                    </ul>
                    <p className="mono-label text-ink-muted">
                      {stack.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
