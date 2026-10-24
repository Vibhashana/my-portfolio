"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

type SectionId = (typeof navLinks)[number]["id"];

// Highlights the nav link for whichever section sits under the header.
const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState<SectionId>("work");

  useEffect(() => {
    if (!enabled) return;

    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      // The last section whose top has passed 40% of the viewport wins;
      // above the first one (the hero), "Work" stays active.
      const line = window.innerHeight * 0.4;
      const current = sections.findLast(
        (section) => section.getBoundingClientRect().top <= line
      );
      setActive((current?.id as SectionId) ?? "work");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return enabled ? active : "work";
};

const Wordmark = () => (
  <Link
    href="/"
    className="flex items-center gap-2.5 md:gap-3"
    aria-label={`${profile.name} — home`}
  >
    <span className="grid size-9 place-items-center rounded-[11px] bg-ink font-serif text-[22px] italic leading-none tracking-[-0.015em] text-paper md:size-10 md:rounded-xl md:text-[26px]">
      sb
    </span>
    <span className="flex flex-col gap-[3px]">
      <span className="text-label font-medium">{profile.name}</span>
      <span className="mono-label hidden text-ink-muted md:block">
        {profile.role}
      </span>
    </span>
  </Link>
);

const Header = () => {
  const pathname = usePathname();
  const active = useActiveSection(pathname === "/");

  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-3.5 md:px-10 md:py-5">
        <Wordmark />

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-0.5 rounded-full border border-line bg-card/90 p-[5px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            {navLinks.map(({ title, href, id }) => (
              <li key={id}>
                <Link
                  href={href}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-[18px] py-2.5 text-label font-medium transition-colors duration-200",
                    active === id
                      ? "bg-ink text-paper"
                      : "text-ink hover:bg-surface"
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild className="hidden lg:inline-flex">
          <Link href="/#contact">Let’s talk ↗</Link>
        </Button>

        <Sheet>
          <SheetTrigger className="inline-flex h-11 items-center rounded-full border border-line bg-card px-[18px] text-label font-medium lg:hidden">
            Menu
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <Wordmark />
            <ul className="mt-8 flex flex-col">
              {navLinks.map(({ title, href, id }) => (
                <li key={id} className="border-b border-line">
                  <SheetClose asChild>
                    <Link
                      href={href}
                      className="flex items-center justify-between py-4 text-h3 font-semibold"
                    >
                      {title}
                      {active === id && (
                        <span className="size-2 rounded-full bg-accent" />
                      )}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetClose asChild>
              <Button asChild className="mt-8 w-full">
                <Link href="/#contact">Let’s talk ↗</Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
