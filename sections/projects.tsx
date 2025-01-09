import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ycDirectoryImage from "@/assets/images/yc-directory.png";
import bookNestImage from "@/assets/images/booknest.png";
import nextDashboardImage from "@/assets/images/next-dashboard.png";

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
      title: "BookNest",
      image: nextDashboardImage,
      description:
        "A dashboard project created using Next.js App router and authentication",
      liveUrl: "https://acmedashboard.sahanbandara.com",
      githubUrl: "https://github.com/Vibhashana/nextjs_dashboard",
    },
  ];

  return (
    <section className="py-12" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            What I&apos;ve Built
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-[60ch] text-center">
          Here&apos;s a selection of projects I&apos;ve worked on. Each one
          highlights my dedication to quality and attention to detail.
        </p>

        <div className="mt-10">
          {projects.map(
            ({ id, title, description, image, liveUrl, githubUrl }) => (
              <div className="mb-5 rounded-lg border p-4" key={id}>
                <Image src={image} alt={title} width={1308} height={816} />
                <h3 className="mb-4 mt-4 text-xl">{title}</h3>
                <p className="text-muted-foreground mb-5">{description}</p>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" asChild>
                    <Link href={`/projects/${id}`}>Details</Link>
                  </Button>
                  <Button asChild>
                    <Link href={liveUrl} target="_blank">
                      <span>View live site</span>
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={githubUrl} target="_blank">
                      <Github />
                      <span>Go to GitHub repository</span>
                    </Link>
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
