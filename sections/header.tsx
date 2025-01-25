import { MobileNav } from "@/components/mobile-nav";
import { menu } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="container flex sm:items-center sm:justify-center">
        <nav className="hidden items-center rounded-md border border-neutral-950/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-white/15 sm:flex">
          <div className="flex items-center justify-center gap-1 p-0.5">
            {menu.map(({ title, href }) => (
              <Link
                href={href}
                className="rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-black/15 dark:text-white/70 hover:dark:bg-neutral-50/10 hover:dark:text-white"
                key={title}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
