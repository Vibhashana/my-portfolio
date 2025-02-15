import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MobileNavProps {
  menu: ReadonlyArray<{ readonly title: string; readonly href: string }>;
}

const MobileNav = ({ menu }: MobileNavProps) => {
  return (
    <>
      <Sheet>
        <SheetTitle>
          <span className="sr-only">Navigation menu panel</span>
        </SheetTitle>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="sm:hidden">
            <Menu className="!size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          {menu.length > 0 && (
            <div className="mt-8 grid gap-2">
              {menu.map(({ title, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="py-2 dark:text-white/70 hover:dark:text-white"
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
