import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-10" id="about">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            Who I Am
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          About Me
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-[60ch] text-center">
          Hi, I&apos;m Sahan Bandara, a passionate frontend developer with a
          knack for bringing designs to life. With 10 years of experience, I
          craft web applications that are fast, functional, and visually
          engaging. Whether it&apos;s coding responsive layouts or collaborating
          with designers, I&apos;m here to make the web a better place, one
          pixel at a time.
        </p>

        <div className="mt-5 text-center">
          <Button variant="secondary" asChild>
            <Link
              href="/CV of Sahan Vibhashana Bandara.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Download my CV</span>
              <FileDown />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
