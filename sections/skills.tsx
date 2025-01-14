"use client";

import { motion } from "motion/react";
import {
  BootstrapIcon,
  ChakraUIIcon,
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  MuiIcon,
  NextIcon,
  ReacthookformIcon,
  ReactjsIcon,
  ReduxIcon,
  SanityIcon,
  SassIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon,
  ZodIcon,
} from "@/assets/icons";
import SkillIcon from "@/components/skill-icon";
import SectionHeader from "@/components/section-header";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      iconType: HtmlIcon,
    },
    {
      title: "CSS",
      iconType: CssIcon,
    },
    {
      title: "React",
      iconType: ReactjsIcon,
    },
    {
      title: "JavaScript",
      iconType: JavascriptIcon,
    },
    {
      title: "TypeScript",
      iconType: TypescriptIcon,
    },
    {
      title: "Next.js",
      iconType: NextIcon,
    },
    {
      title: "ShadCN",
      iconType: ShadcnIcon,
    },
    {
      title: "Tailwind",
      iconType: TailwindIcon,
    },
    {
      title: "Sass",
      iconType: SassIcon,
    },
    {
      title: "Chakra UI",
      iconType: ChakraUIIcon,
    },
    {
      title: "Material UI",
      iconType: MuiIcon,
    },
    {
      title: "Bootstrap",
      iconType: BootstrapIcon,
    },
    {
      title: "Zod",
      iconType: ZodIcon,
    },
    {
      title: "React Hook Form",
      iconType: ReacthookformIcon,
    },
    {
      title: "Redux",
      iconType: ReduxIcon,
    },
    {
      title: "Sanity",
      iconType: SanityIcon,
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
          {skills.map(({ title, iconType: Icon }, index) => (
            <motion.div
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5"
              key={title}
              custom={index}
              initial="hidden"
              variants={skillIconsAnimationVariant}
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Icon && <SkillIcon component={Icon} />}
              {title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
