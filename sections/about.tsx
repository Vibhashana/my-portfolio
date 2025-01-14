import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-10" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          description="Hi, I'm Sahan Bandara, a passionate frontend developer with a
          knack for bringing designs to life. With 10 years of experience, I
          craft web applications that are fast, functional, and visually
          engaging. Whether it's coding responsive layouts or collaborating
          with designers, I'm here to make the web a better place, one
          pixel at a time."
        />

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
