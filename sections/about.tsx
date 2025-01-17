import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { profileImage } from "@/assets/images";

const About = () => {
  return (
    <section className="py-10" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          //     description="Hi, I'm Sahan Bandara, a passionate frontend developer with a
          // knack for bringing designs to life. With 10 years of experience, I
          // craft web applications that are fast, functional, and visually
          // engaging. Whether it's coding responsive layouts or collaborating
          // with designers, I'm here to make the web a better place, one
          // pixel at a time."
        />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="md:w-[60%]">
            <div className="space-y-4">
              <p>
                Hi, I&apos;m Sahan Vibhashana Bandara, a passionate frontend
                developer dedicated to crafting user-friendly, visually
                stunning, and performant websites. With a strong foundation in
                HTML, CSS, JavaScript, and TypeScript, I specialize in creating
                responsive, accessible, and dynamic user interfaces using modern
                frameworks like React and Next.js.
              </p>
              <p>
                My journey in web development began with a fascination for
                design and technology, and over the years, it has evolved into a
                career that allows me to combine creativity with
                problem-solving. I&apos;ve had the privilege of collaborating on
                diverse projects, from simple landing pages to complex web
                applications, honing my skills in frameworks like TailwindCSS,
                Sass, ShadCN, and libraries such as Chakra UI and Material UI.
              </p>
              <p>
                I also enjoy diving into backend-friendly integrations,
                utilizing tools like Sanity for content management and ensuring
                seamless user experiences with form management libraries like
                React Hook Form and validation tools like Zod. Whether it&apos;s
                building from scratch or refining existing designs, I bring
                attention to detail, a user-centered approach, and a commitment
                to delivering quality results.
              </p>
              <p>
                Beyond coding, I&apos;m passionate about continuous learning. I
                actively keep up with industry trends, experiment with emerging
                technologies, and love collaborating with cross-functional teams
                to bring innovative ideas to life.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring design
                inspiration, contributing to open-source projects, or enjoying a
                good cup of coffee.
              </p>
              <p>
                Let&apos;s create something incredible together. Feel free to
                check out my projects or reach out—I&apos;d love to connect!
              </p>
            </div>

            <div className="mt-5 text-center">
              <Button variant="secondary" asChild>
                <Link
                  href="/CV of Sahan Vibhashana Bandara.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Download my resume</span>
                  <FileDown />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={profileImage}
              alt="Sahan Bandara"
              width={288}
              height={288}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
