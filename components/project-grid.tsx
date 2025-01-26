"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import Tag from "./ui/tag";
import { projects } from "@/lib/data";

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
        (
          { id, title, description, image, liveUrl, githubUrl, tags },
          index
        ) => (
          <motion.div
            className="group relative isolate flex flex-col gap-10 rounded-lg p-6 outline outline-2 outline-neutral-800/10 dark:outline-white/10 md:mb-10 md:flex-row md:p-6 lg:items-center lg:p-10 lg:even:flex-row-reverse"
            key={id}
            variants={projectAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 -z-10 rounded-lg bg-grain opacity-5" />
            <div className="lg:w-[1500px]">
              <h3 className="mb-4 text-xl font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map(({ icon, name }) => (
                  <Tag key={`${id}-${name}`} text={name} icon={icon} />
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row md:mt-8">
                <Button asChild>
                  <Link href={liveUrl} target="_blank">
                    <span>Visit live site</span>
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={githubUrl} target="_blank">
                    <FaGithub />
                    <span>Go to GitHub repository</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="z-10 lg:-mt-24">
              <MotionImage
                whileHover={{ scale: 1.05 }}
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
