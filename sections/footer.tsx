import { Button } from "@/components/ui/button";
import Link from "next/link";
import { links } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="relative py-4 after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-[200px] after:rounded-se-[100%] after:rounded-ss-[100%] after:bg-gradient-to-t after:from-blue-600 after:to-sky-400 after:opacity-20 after:blur-3xl after:filter dark:after:opacity-15">
      <div className="container">
        <hr className="mb-5 border-black/10 dark:border-white/15" />
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex flex-wrap gap-1">
            {links.map(({ href, title, icon: Icon }) => (
              <Button
                key={title}
                asChild
                title={title}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted-foreground/20"
                aria-label={title}
              >
                <Link href={href} target="_blank">
                  <Icon />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
