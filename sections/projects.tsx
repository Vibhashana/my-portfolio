import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ycDirectoryImage from "@/assets/images/yc-directory.png";
import bookNestImage from "@/assets/images/booknest.png";
import nextDashboardImage from "@/assets/images/next-dashboard.png";
import { grainImage } from "@/assets/images";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "YC Directory",
      image: ycDirectoryImage,
      description:
        "A modern web application for startup pitches built with Next.js 15, Sanity CMS, and TypeScript. The platform allows users to submit, view, and explore startup pitches with a clean and intuitive interface.",
      liveUrl: "https://ycdirectory.sahanbandara.com",
      githubUrl: "https://github.com/Vibhashana/yc_directory",
    },
    {
      id: 2,
      title: "BookNest",
      image: bookNestImage,
      description:
        "BookNest is a modern web application built with Next.js that provides an intuitive interface for browsing and purchasing books online.",
      liveUrl: "https://booknest.sahanbandara.com",
      githubUrl: "https://github.com/Vibhashana/circle-frontend-challenge",
    },
    {
      id: 3,
      title: "Acme Dashboard",
      image: nextDashboardImage,
      description:
        "A dashboard project created using Next.js App router and authentication",
      liveUrl: "https://acmedashboard.sahanbandara.com",
      githubUrl: "https://github.com/Vibhashana/nextjs_dashboard",
    },
  ];

  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            What I&apos;ve Built
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-muted-foreground">
          Here&apos;s a selection of projects I&apos;ve worked on. Each one
          highlights my dedication to quality and attention to detail.
        </p>

        <div className="mt-8 space-y-10 md:mt-24 lg:space-y-24">
          {projects.map(
            ({ id, title, description, image, liveUrl, githubUrl }) => (
              <div
                className="group relative isolate flex flex-col gap-10 rounded-lg p-6 outline outline-2 outline-neutral-800/10 dark:outline-white/10 md:mb-10 md:p-6 lg:flex-row lg:items-center lg:p-10 lg:even:flex-row-reverse"
                key={id}
              >
                <div
                  className="absolute inset-0 -z-10 rounded-lg opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                />
                <div className="lg:w-[1500px]">
                  <h3 className="mb-4 text-xl font-semibold">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row md:mt-8">
                    <Button asChild>
                      <Link href={liveUrl} target="_blank">
                        <span>Visit live site</span>
                        <ArrowUpRight />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={githubUrl} target="_blank">
                        <Github />
                        <span>Go to GitHub repository</span>
                      </Link>
                    </Button>
                    {/* <Button variant="secondary" asChild>
                      <Link href={`/projects/${id}`}>View project details</Link>
                    </Button> */}
                  </div>
                </div>

                <div className="z-10 lg:-mt-24">
                  <Image
                    src={image}
                    alt={title}
                    width={1086}
                    height={648}
                    className="rounded-xl"
                    sizes="(min-width: 1360px) 460px, (min-width: 1040px) 33.67vw, calc(95.56vw - 67px)"
                  />
                </div>
              </div>
            )
          )}
        </div>
        {/* <div className="text-center">
          <Button variant="secondary" asChild>
            <Link href="/projects">
              <span>See all projects</span>
              <ArrowRight />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
