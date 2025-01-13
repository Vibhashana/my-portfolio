import { Button } from "@/components/ui/button";
import {
  Codepen,
  Dribbble,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Find me on LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/sahan-bandara/",
  },
  {
    title: "Check my code on GitHub",
    icon: <Github />,
    href: "https://github.com/Vibhashana",
  },
  {
    title: "Follow me on Twitter",
    icon: <Twitter />,
    href: "https://x.com/SahanVibhashana",
  },
  {
    title: "Join me on Facebook",
    icon: <Facebook />,
    href: "https://www.facebook.com/svbbk",
  },
  {
    title: "Check my Dribbble",
    icon: <Dribbble />,
    href: "https://dribbble.com/vibhashana",
  },
  {
    title: "Check my Codepen",
    icon: <Codepen />,
    href: "https://codepen.io/vibhashana",
  },
];

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <hr className="mb-5" />
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex flex-wrap gap-2">
            {links.map(({ href, title, icon }) => (
              <Button
                key={title}
                asChild
                title={title}
                variant="outline"
                size="icon"
              >
                <Link href={href} target="_blank">
                  {icon}
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
