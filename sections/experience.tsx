"use client";

import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

import eukaLogo from "@/assets/images/euka-logo.png";
import pearsonLogo from "@/assets/images/pearson-logo.png";
import eyepaxLogo from "@/assets/images/eyepax-logo.png";
import xcendantLogo from "@/assets/images/xcendant-logo.png";
import ioneLogo from "@/assets/images/ione-logo.png";
import Link from "next/link";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAndroid,
  SiAngular,
  SiAxios,
  SiBitbucket,
  SiChakraui,
  SiCreatereactapp,
  SiCss3,
  SiCssmodules,
  SiFigma,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiJira,
  SiJoomla,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVitest,
  SiWebpack,
  SiWordpress,
  SiYarn,
} from "react-icons/si";
import Tag from "@/components/ui/tag";
import { FaMicrosoft } from "react-icons/fa";

// const experienceCardVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0 },
// };

const experienceCardAnimationVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 == 0 ? -20 : 20,
  }),

  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * index },
  }),
};

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
      logo: eukaLogo,
      companyUrl: "https://euka.edu.au/",
      techStack: [
        { icon: SiReact, name: "ReactJS" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiChakraui, name: "Chakra UI" },
        { icon: SiAxios, name: "Axios" },
        { icon: SiWordpress, name: "Wordpress" },
        { icon: SiVitest, name: "Vitest" },
        { icon: SiTestinglibrary, name: "React Testing Library" },
        { icon: SiVite, name: "Vite" },
        { icon: SiLaravel, name: "Laravel" },
        { icon: SiFigma, name: "Figma" },
        { icon: SiGithub, name: "GitHub" },
        { icon: SiBitbucket, name: "BitBucket" },
        { icon: SiJira, name: "Jira" },
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
      logo: pearsonLogo,
      companyUrl: "https://www.pearson.com/",
      techStack: [
        { icon: SiReact, name: "ReactJS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiAxios, name: "Axios" },
        { icon: SiSass, name: "Sass" },
        { icon: SiCssmodules, name: "CSS Modules" },
        { icon: SiStyledcomponents, name: "Styled Components" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: SiYarn, name: "Yarn" },
        { icon: SiCreatereactapp, name: "Create React App" },
        { icon: SiFigma, name: "Figma" },
        { icon: SiGitlab, name: "GitLab" },
        { icon: SiBitbucket, name: "BitBucket" },
        { icon: SiJira, name: "Jira" },
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
      logo: eyepaxLogo,
      companyUrl: "https://eyepax.com/",
      techStack: [
        { icon: SiReact, name: "ReactJS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiAxios, name: "Axios" },
        { icon: SiSass, name: "Sass" },
        { icon: SiCssmodules, name: "CSS Modules" },
        { icon: SiCreatereactapp, name: "Create React App" },
        { icon: SiPhp, name: "PHP" },
        { icon: SiLaravel, name: "Laravel" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: SiYarn, name: "Yarn" },
        { icon: SiFigma, name: "Figma" },
        { icon: SiAdobexd, name: "Adobe XD" },
        { icon: SiBitbucket, name: "BitBucket" },
        { icon: SiJira, name: "Jira" },
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
      logo: xcendantLogo,
      companyUrl: "https://lk.linkedin.com/company/excelsoft-pvt-ltd-",
      techStack: [
        { icon: SiHtml5, name: "HTML 5" },
        { icon: SiCss3, name: "CSS 3" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiSass, name: "Sass" },
        { icon: SiPhp, name: "PHP" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiAdobexd, name: "Adobe XD" },
        { icon: SiAdobephotoshop, name: "Adobe Photoshop" },
        { icon: SiAdobeillustrator, name: "Adobe Illustrator" },
        { icon: SiBitbucket, name: "BitBucket" },
        { icon: SiJira, name: "Jira" },
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
      logo: ioneLogo,
      companyUrl: "https://www.ionesoftsolutions.com/",
      techStack: [
        { icon: SiHtml5, name: "HTML 5" },
        { icon: SiCss3, name: "CSS 3" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiAngular, name: "AngularJS" },
        { icon: SiPhp, name: "PHP" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiWordpress, name: "Wordpress" },
        { icon: SiIonic, name: "Ionic" },
        { icon: SiAndroid, name: "Android" },
        { icon: SiJoomla, name: "Joomla" },
        { icon: SiAdobexd, name: "Adobe XD" },
        { icon: SiAdobephotoshop, name: "Adobe Photoshop" },
        { icon: SiAdobeillustrator, name: "Adobe Illustrator" },
        { icon: FaMicrosoft, name: "TFS" },
        { icon: SiBitbucket, name: "BitBucket" },
        { icon: SiJira, name: "Jira" },
      ],
    },
  ];

  return (
    <section className="py-10" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Work Experience"
          description="I've had the privilege of working on diverse projects that honed
          my technical skills and creativity. Here are some highlights:"
        />

        <div className="relative isolate mt-10 grid grid-cols-1 gap-10 after:absolute after:bottom-0 after:left-1/2 after:top-0 after:-z-20 after:w-[4px] after:-translate-x-1/2 after:bg-gradient-to-b after:from-blue-600 after:to-sky-300 md:mt-20 md:overflow-y-clip lg:grid-cols-2 lg:gap-y-0">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group relative col-start-1 lg:-mt-[35%] lg:first:mt-0 lg:odd:col-start-2 lg:odd:ml-[30px] lg:even:mr-[30px]"
              style={{
                gridRowStart: index + 1,
              }}
            >
              {/* Dot */}
              <div className="absolute -top-[20px] left-1/2 size-[20px] -translate-x-1/2 rounded-full border-[5px] border-background bg-blue-700 lg:-left-[60px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:even:left-auto lg:group-even:-right-[60px] lg:group-even:left-auto" />

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                variants={experienceCardAnimationVariants}
                custom={index}
                className="z-0"
              >
                <div className="absolute left-1/2 top-[21px] -z-10 size-[20px] -translate-x-1/2 rotate-45 border-2 bg-background lg:-left-[10px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[10px] lg:group-even:left-auto" />

                <div className="absolute left-1/2 top-[24px] z-20 size-[18px] -translate-x-1/2 rotate-45 bg-[#f2f2f2] dark:bg-[#080e1c] lg:-left-[7px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[7px] lg:group-even:left-auto" />

                <Card className="relative z-10 mt-[30px] border-2 after:absolute after:inset-0 after:-z-10 after:bg-grain after:opacity-5 lg:mt-0">
                  <CardHeader className="flex flex-row items-center justify-between gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {company.duration}
                      </p>
                      <p className="text-sm">
                        <Link href={company.companyUrl} target="_blank">
                          {company.name}
                        </Link>
                      </p>
                      <p className="text-lg font-medium">{company.title}</p>
                    </div>
                    <div className="!mt-0">
                      <Link href={company.companyUrl} target="_blank">
                        <Image
                          src={company.logo}
                          alt={company.title}
                          width={80}
                          height={80}
                          className="h-auto w-[40px] object-cover md:w-[60px]"
                          sizes="(min-width: 780px) 60px, 38px"
                        />
                      </Link>
                    </div>
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
                    <div className="mt-4">
                      <p className="text-sm font-medium">
                        Tech Stack and tools:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {company.techStack?.map(({ icon, name }) => (
                          <Tag
                            key={`${company.id}-${name}`}
                            text={name}
                            icon={icon}
                          />
                        ))}
                      </div>
                    </div>
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
