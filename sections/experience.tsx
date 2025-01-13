"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// const experienceCardVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0 },
// };

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  const companies = [
    {
      id: 1,
      name: "Euka Future Learning",
      title: "Frontend Developer",
      duration: "Oct 2023 - Oct 2024",
      responsibilities: [
        "Developed dynamic web apps using ReactJS, TypeScript, and Chakra UI for responsive, accessible design.",
        "Integrated user interfaces from Figma and Zeplin with pixel-perfect precision.",
        "Optimized state management with Jotai and enhanced frontend-backend synergy using Laravel and InertiaJS.",
        "Employed Agile practices for iterative development and timely delivery.",
        "Led knowledge-sharing sessions to promote team growth and collaboration.",
      ],
    },
    {
      id: 2,
      name: "Pearson",
      title: "Software Engineer (UI/UX)",
      duration: "Sep 2021 - Sep 2023",
      responsibilities: [
        "Built responsive, accessible UIs based on design team specifications.",
        "Collaborated with developers and stakeholders to ensure project success.",
        "Utilized ReactJS, SCSS, and CSS-in-JS techniques like Styled Components.",
        "Streamlined workflows with Webpack, Yarn, and CRA, ensuring smooth development.",
        "Ensured accessibility with Figma and adhered to Agile practices using Jira.",
      ],
    },
    {
      id: 3,
      name: "Eyepax",
      title: "Software Engineer (UI/UX)",
      duration: "Dec 2017 - Sep 2021",
      responsibilities: [
        "Designed and implemented responsive, accessible UIs, enforcing coding standards.",
        "Collaborated with developers and stakeholders to align project goals.",
        "Utilized ReactJS, SCSS, Sass, PHP, and Laravel for robust web applications.",
        "Bridged design and development using Figma, Adobe XD, and Zeplin.",
        "Optimized workflows with Gulp, Webpack, and Agile practices via Jira.",
      ],
    },
    {
      id: 4,
      name: "Xcendant",
      title: "UI/UX Engineer",
      duration: "Nov 2016 - Nov 2017",
      responsibilities: [
        "Created responsive UIs for web and mobile, adhering to coding standards.",
        "Collaborated with developers and stakeholders for aligned project goals.",
        "Leveraged HTML, CSS, JavaScript, jQuery, PHP, and GSAP for dynamic designs.",
        "Enhanced visuals using Adobe XD, Photoshop, and Illustrator.",
        "Streamlined workflows with Git and SVN for version control.",
      ],
    },
    {
      id: 5,
      name: "iOneSoft",
      title: "UI/UX Engineer",
      duration: "Jan 2014 - Nov 2016",
      responsibilities: [
        "Designed and implemented responsive UIs for web, mobile, desktop, and kiosk applications.",
        "Enforced UI coding standards and collaborated globally with teams and clients.",
        "Used HTML, CSS, JavaScript, AngularJS, KnockoutJS, and tools like WordPress and Ionic.",
        "Streamlined workflows with Git and TFS for efficient project delivery.",
      ],
    },
  ];

  return (
    <section className="py-10" id="experience">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            My Journey
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Work Experience
        </h2>
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-muted-foreground">
          I&apos;ve had the privilege of working on diverse projects that honed
          my technical skills and creativity. Here are some highlights:
        </p>

        <div className="relative isolate mt-10 grid grid-cols-1 gap-10 after:absolute after:bottom-0 after:left-1/2 after:top-0 after:-z-20 after:w-[4px] after:-translate-x-1/2 after:bg-gradient-to-b after:from-blue-600 after:to-sky-300 lg:grid-cols-2 lg:gap-y-0">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group relative col-start-1 lg:-mt-[25%] lg:first:mt-0 lg:odd:col-start-2 lg:odd:ml-[30px] lg:even:mr-[30px]"
              style={{
                gridRowStart: index + 1,
              }}
            >
              {/* Dot */}
              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="absolute -top-[20px] left-1/2 size-[20px] -translate-x-1/2 rounded-full border-[5px] border-background bg-blue-700 before:absolute before:-left-[7px] before:-top-[7px] before:-z-10 before:size-[25px] before:rounded-full before:bg-blue-500 before:opacity-0 lg:-left-[60px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:even:left-auto lg:group-even:-right-[60px] lg:group-even:left-auto"
              />

              <motion.div
                // initial="hidden"
                // whileInView="visible"
                viewport={{ once: true }}
                // variants={experienceCardVariants}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                initial={{
                  opacity: 0,
                  x: index % 2 == 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
              >
                <div className="absolute left-1/2 top-[21px] -z-10 size-[20px] -translate-x-1/2 rotate-45 border bg-background lg:-left-[10px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[10px] lg:group-even:left-auto" />

                <div className="absolute left-1/2 top-[22px] z-10 size-[18px] -translate-x-1/2 rotate-45 bg-background lg:-left-[9px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[9px] lg:group-even:left-auto" />

                <Card className="z-10 mt-[30px] lg:mt-0">
                  <CardHeader>
                    <p className="text-xs text-muted-foreground">
                      {company.duration}
                    </p>
                    <p className="text-sm">{company.name}</p>
                    <p className="text-lg font-medium">{company.title}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                      {company.responsibilities.map((responsibility, key) => (
                        <motion.li
                          key={`${company.id}-${key}`}
                          variants={listItemVariants}
                          transition={{ duration: 0.3, delay: key * 0.1 }}
                        >
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
