import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { largeImage } from "@/assets/images";
import DownloadCv from "@/components/download-cv";

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

        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row">
          <div className="md:w-[65%]">
            <div className="space-y-4 leading-relaxed">
              <p>
                Hi, I&apos;m <strong>Sahan Vibhashana Bandara</strong>, a
                passionate frontend developer dedicated to crafting
                user-friendly, visually stunning, and performant websites. With
                a strong foundation in <strong>HTML, CSS, JavaScript</strong>,
                and <strong>TypeScript</strong>, I specialize in creating
                responsive, accessible, and dynamic user interfaces using modern
                frameworks like <strong>React</strong> and{" "}
                <strong>Next.js</strong>.
              </p>
              <p>
                My journey in web development began with a fascination for
                design and technology, and over the years, it has evolved into a
                career that allows me to combine creativity with
                problem-solving. I&apos;ve had the privilege of collaborating on
                diverse projects, from simple landing pages to complex web
                applications, honing my skills in frameworks like{" "}
                <strong>TailwindCSS</strong>, <strong>Sass, ShadCN,</strong> and
                libraries such as <strong>Chakra UI</strong> and{" "}
                <strong>Material UI</strong>.
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

            <div className="mt-6 flex flex-wrap items-center gap-4 text-center">
              <Button asChild>
                <Link
                  href="https://www.linkedin.com/in/sahan-bandara"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span>Connect me on LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="https://github.com/Vibhashana" target="_blank">
                  <FaGithub />
                  <span>Check my GitHub</span>
                </Link>
              </Button>
              <DownloadCv />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src={largeImage}
              alt="Sahan Bandara"
              width={288}
              height={288}
              className="mx-auto rounded-lg border-8 border-blue-500/20"
              sizes="(min-width: 380px) 272px, calc(33.33vw + 152px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
