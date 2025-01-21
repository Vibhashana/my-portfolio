"use client";

import { motion } from "motion/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiCssmodules,
  SiStyledcomponents,
  SiBootstrap,
  SiReact,
  SiChakraui,
  SiMui,
} from "react-icons/si";

import SectionHeader from "@/components/section-header";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      icon: SiHtml5,
    },
    {
      title: "CSS",
      icon: SiCss3,
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "ShadCN",
      icon: SiShadcnui,
    },
    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      title: "Sass",
      icon: SiSass,
    },
    {
      title: "CSS Modules",
      icon: SiCssmodules,
    },
    {
      title: "Styled Components",
      icon: SiStyledcomponents,
    },
    {
      title: "Chakra UI",
      icon: SiChakraui,
    },
    {
      title: "Material UI",
      icon: SiMui,
    },
    {
      title: "Bootstrap",
      icon: SiBootstrap,
    },
  ];

  const skillIconsAnimationVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05 },
    }),
  };

  return (
    <section className="py-10" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="My Toolbox"
          title="Skills & Technologies"
          description="Here are the tools and technologies I use to turn ideas into reality:"
        />

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {skills.map(({ title, icon: Icon }, index) => (
            <motion.div
              className="inline-flex items-center gap-3 rounded-lg border-2 px-5 py-2.5"
              key={title}
              custom={index}
              initial="hidden"
              variants={skillIconsAnimationVariant}
              whileInView="visible"
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 0.15}deg) rotateY(${x * 0.15}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              {<Icon className="size-7" />}
              {title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
