"use client";

import ycDirectoryImage from "@/assets/images/yc-directory.png";
import bookNestImage from "@/assets/images/booknest.png";
import nextDashboardImage from "@/assets/images/next-dashboard.png";
import bookmarkImage from "@/assets/images/bookmark.png";
import { grainImage } from "@/assets/images";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

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
      "A responsive dashboard project created using Next.js App router and authentication",
    liveUrl: "https://acmedashboard.sahanbandara.com",
    githubUrl: "https://github.com/Vibhashana/nextjs_dashboard",
  },
  {
    id: 4,
    title: "Bookmark",
    image: bookmarkImage,
    description:
      "A responsive landing page for bookmark managing service. This is a solution to the Bookmark landing page challenge on Frontend Mentor.",
    liveUrl: "https://bookmark-fm.netlify.app/",
    githubUrl: "https://github.com/Vibhashana/bookmark-landing-page-master",
  },
];

const projectAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const ProjectGrid = () => {
  const MotionImage = motion.create(Image);

  return (
    <>
      {projects.map(
        ({ id, title, description, image, liveUrl, githubUrl }, index) => (
          <motion.div
            className="group relative isolate flex flex-col gap-10 rounded-lg p-6 outline outline-2 outline-neutral-800/10 dark:outline-white/10 md:mb-10 md:p-6 lg:flex-row lg:items-center lg:p-10 lg:even:flex-row-reverse"
            key={id}
            variants={projectAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
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
              <MotionImage
                whileHover={{ scale: 1.15 }}
                src={image}
                alt={title}
                width={1086}
                height={648}
                className="rounded-xl"
                sizes="(min-width: 1360px) 460px, (min-width: 1040px) 33.67vw, calc(95.56vw - 67px)"
              />
            </div>
          </motion.div>
        )
      )}
    </>
  );
};

export default ProjectGrid;
