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
import { FaMicrosoft } from "react-icons/fa";

import eukaLogo from "@/assets/images/euka-logo.png";
import pearsonLogo from "@/assets/images/pearson-logo.png";
import eyepaxLogo from "@/assets/images/eyepax-logo.png";
import xcendantLogo from "@/assets/images/xcendant-logo.png";
import ioneLogo from "@/assets/images/ione-logo.png";

export const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
] as const;

export const companies = [
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
