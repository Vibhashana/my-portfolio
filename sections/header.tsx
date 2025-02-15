import MobileNav from "@/components/mobile-nav";
import { menu } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";

const Header = () => {
  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="container flex sm:items-center sm:justify-center">
        <nav className="hidden items-center rounded-md border border-neutral-950/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-white/15 sm:flex">
          <div className="flex items-center justify-center p-0.5">
            <AnimatedBackground
              defaultValue={menu[0].title}
              className="rounded-md bg-black/15 dark:bg-neutral-50/10"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {menu.map(({ title, href }) => (
                <Link
                  href={href}
                  className="rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-300 dark:text-white/70 hover:dark:text-white data-[checked=true]:dark:text-white"
                  key={title}
                  data-id={title}
                >
                  {title}
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </nav>
        <MobileNav menu={menu} />
      </div>
    </header>
  );
};

export default Header;
