import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="container flex sm:items-center sm:justify-center">
        <nav className="hidden items-center rounded-md border border-neutral-950/15 bg-white/10 backdrop-blur sm:flex dark:border-white/15">
          <div className="flex items-center justify-center gap-1 p-0.5">
            {menu.map(({ title, href }) => (
              <Link
                href={href}
                className="rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-neutral-50/10 hover:text-white dark:text-white/70"
                key={title}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="size-11 rounded-md border border-neutral-950/15 bg-white/10 backdrop-blur sm:hidden dark:border-white/15"
        >
          <Menu />
        </Button>
      </div>
    </header>
  );
};

export default Header;
