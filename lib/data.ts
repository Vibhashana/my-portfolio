import type { StaticImageData } from "next/image";

import ezRsvpImage from "@/assets/images/ezrsvp.png";
import solarMonitorImage from "@/assets/images/solar-monitor.png";
import innkeepImage from "@/assets/images/innkeep-mockup.png";
import qrGeneratorImage from "@/assets/images/qrafty-mockup.png";
import ycDirectoryImage from "@/assets/images/yc-directory.png";
import bookNestImage from "@/assets/images/booknest.png";
import nextDashboardImage from "@/assets/images/next-dashboard.png";
import bookmarkImage from "@/assets/images/bookmark.png";

export const profile = {
  name: "Sahan Bandara",
  fullName: "Sahan Vibhashana Bandara",
  role: "Frontend Developer",
  linkedin: "https://www.linkedin.com/in/sahan-bandara/",
  github: "https://github.com/Vibhashana",
  resume: "/CV of Sahan Vibhashana Bandara.pdf",
} as const;

export const navLinks = [
  { title: "Work", href: "/#work", id: "work" },
  { title: "About", href: "/#about", id: "about" },
  { title: "Experience", href: "/#experience", id: "experience" },
  { title: "Toolbox", href: "/#toolbox", id: "toolbox" },
  { title: "Contact", href: "/#contact", id: "contact" },
] as const;

export const facts = [
  { value: "10+", label: "Years in frontend", shortLabel: "Years" },
  { value: "06", label: "Companies", shortLabel: "Teams" },
  { value: "04", label: "Featured builds", shortLabel: "Builds" },
];

export const services = [
  {
    title: "Frontend engineering",
    description:
      "Fast, accessible interfaces in React, Next.js and TypeScript — built from reusable components and tested with Vitest and Testing Library.",
    chips: ["React", "Next.js", "TypeScript", "Vitest"],
  },
  {
    title: "Design to code",
    description:
      "Years as a UI/UX engineer mean I read a Figma file like a spec — spacing, states and edge cases included. I design and build design systems too.",
    chips: ["Figma", "Design systems", "Tailwind CSS", "ShadCN"],
  },
  {
    title: "Product builds",
    description:
      "From idea to live SaaS: auth, data, payments and monitoring. ezRSVP runs on Next.js, PostgreSQL, Paddle and Sentry.",
    chips: ["PostgreSQL", "Drizzle ORM", "Paddle", "Sentry"],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  shortDescription: string;
  stack: string[];
  image: StaticImageData;
  theme: "light" | "dark";
  primary?: ProjectLink;
  caseStudy: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "innkeep",
    title: "Innkeep",
    tag: "Hotel PMS SaaS · In progress",
    description:
      "A property management system for guesthouses, villas and small hotels — bookings, check-in, bills and housekeeping in one app, with every booking site kept in sync. I designed all of it and I’m now building the frontend.",
    shortDescription:
      "Bookings, check-in, bills and housekeeping for small hotels in one app. I designed all 134 screens and the design system, and I’m now building the frontend.",
    stack: [
      "Design + code",
      "134 screens",
      "Design system",
      "Frontend build in progress",
    ],
    image: innkeepImage,
    theme: "light",
    caseStudy: "/work/innkeep",
  },
  {
    slug: "solar-monitor",
    title: "Solar Monitor",
    tag: "Home solar PWA",
    description:
      "A monitoring PWA for a home solar setup. An ESP32 running ESPHome reads the MPPT charge controller and posts readings to Supabase every 30 seconds; the app shows live production, history and battery trends, works offline, and sends Telegram alerts.",
    shortDescription:
      "An ESP32 posts charge-controller readings to Supabase every 30 seconds; the app shows live production, history and battery trends, works offline and sends Telegram alerts.",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "PWA",
      "Supabase",
      "ESPHome",
      "Telegram Bot",
    ],
    image: solarMonitorImage,
    theme: "dark",
    primary: {
      label: "Visit live site",
      href: "https://solar-monitor.sahanbandara.com/",
      external: true,
    },
    caseStudy: "/work/solar-monitor",
  },
  {
    slug: "ezrsvp",
    title: "ezRSVP",
    tag: "Wedding RSVP SaaS",
    description:
      "A wedding RSVP SaaS where couples design a wedding page, send each household its own RSVP link by email or WhatsApp, and track live headcounts and meal choices per event. Guests RSVP without creating an account.",
    shortDescription:
      "Couples design a wedding page, send each household its own RSVP link by email or WhatsApp, and track live headcounts and meal choices per event.",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "ShadCN",
      "PostgreSQL",
      "Drizzle ORM",
      "Paddle",
      "Sentry",
    ],
    image: ezRsvpImage,
    theme: "light",
    primary: {
      label: "Visit live site",
      href: "https://ezrsvp.sahanbandara.com/",
      external: true,
    },
    caseStudy: "/work/ezrsvp",
  },
  {
    slug: "qr-generator",
    title: "QR Generator",
    tag: "UI/UX assessment",
    description:
      "A 48-hour redesign of a QR code generator’s homepage and PDF flow: the finished code shown first, a split editor with a live preview, and a token-driven design system behind both.",
    shortDescription:
      "A 48-hour redesign of a QR code generator: the finished code shown first, a split editor with a live preview, and a token-driven design system.",
    stack: [
      "UX audit",
      "Product design",
      "Design system",
      "43 component sets",
      "Desktop + mobile",
    ],
    image: qrGeneratorImage,
    theme: "dark",
    primary: {
      label: "View design file",
      href: "https://www.figma.com/design/5isbV1YASygvTtBJVbJzzK/Rightmo-UI-Assessment",
      external: true,
    },
    caseStudy: "/work/qr-generator",
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  image: StaticImageData;
  liveUrl: string;
  githubUrl: string;
};

export const otherProjects: Project[] = [
  {
    title: "YC Directory",
    tag: "Startup pitches",
    description:
      "A web app for startup pitches built with Next.js 15, Sanity CMS and TypeScript. Submit, view and explore pitches through a clean, intuitive interface.",
    stack: ["TypeScript", "Next.js", "Tailwind", "ShadCN", "Zod", "Sanity", "Sentry"],
    image: ycDirectoryImage,
    liveUrl: "https://ycdirectory.sahanbandara.com",
    githubUrl: "https://github.com/Vibhashana/yc_directory",
  },
  {
    title: "BookNest",
    tag: "Online bookstore",
    description:
      "A modern Next.js web app with an intuitive interface for browsing and purchasing books online.",
    stack: ["TypeScript", "Next.js", "Tailwind", "ShadCN", "Sentry"],
    image: bookNestImage,
    liveUrl: "https://booknest.sahanbandara.com",
    githubUrl: "https://github.com/Vibhashana/circle-frontend-challenge",
  },
  {
    title: "Acme Dashboard",
    tag: "Dashboard",
    description:
      "A responsive dashboard built with the Next.js App Router and authentication.",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadCN",
      "React Hook Form",
      "Zod",
    ],
    image: nextDashboardImage,
    liveUrl: "https://acmedashboard.sahanbandara.com/login",
    githubUrl: "https://github.com/Vibhashana/nextjs_dashboard",
  },
  {
    title: "Bookmark",
    tag: "Landing page",
    description:
      "A responsive landing page for a bookmark managing service — a Frontend Mentor challenge solution.",
    stack: ["HTML", "Sass", "JavaScript"],
    image: bookmarkImage,
    liveUrl: "https://bookmark-fm.netlify.app/",
    githubUrl: "https://github.com/Vibhashana/bookmark-landing-page-master",
  },
];

export type Company = {
  name: string;
  role: string;
  start: string;
  end: string;
  url: string;
  highlights: string[];
  stack: string[];
};

export const companies: Company[] = [
  {
    name: "Sinorbis",
    role: "Frontend Developer (Contractor)",
    start: "Oct 2024",
    end: "Sep 2026",
    url: "https://www.sinorbis.com/",
    highlights: [
      "Build features for the Sinorbis platform and other Sinorbis products alongside the engineering team.",
      "Translate UI/UX designs into code and produce the visual elements of the platform.",
      "Build reusable code and libraries, optimising the UI for speed and scalability.",
      "Develop, test and document features; troubleshoot issues reported by customers and internal teams.",
    ],
    stack: ["ReactJS", "TypeScript", "Ant Design", "Redux", "Figma"],
  },
  {
    name: "Euka Future Learning",
    role: "Software Engineer (Frontend)",
    start: "Oct 2023",
    end: "Oct 2024",
    url: "https://euka.edu.au/",
    highlights: [
      "Developed dynamic web apps using ReactJS, TypeScript and Chakra UI for responsive, accessible design.",
      "Integrated user interfaces from Figma and Zeplin with pixel-perfect precision.",
      "Optimised state management with Jotai and enhanced frontend-backend synergy using Laravel and InertiaJS.",
      "Employed Agile practices for iterative development and timely delivery.",
      "Led knowledge-sharing sessions to promote team growth and collaboration.",
    ],
    stack: [
      "ReactJS",
      "TypeScript",
      "Chakra UI",
      "Vitest",
      "Testing Library",
      "Vite",
      "Laravel",
      "Figma",
    ],
  },
  {
    name: "Pearson",
    role: "Software Engineer (UI/UX)",
    start: "Sep 2021",
    end: "Sep 2023",
    url: "https://www.pearson.com/",
    highlights: [
      "Built responsive, accessible UIs based on design team specifications.",
      "Collaborated with developers and stakeholders to ensure project success.",
      "Utilised ReactJS, SCSS and CSS-in-JS techniques like Styled Components.",
      "Streamlined workflows with Webpack, Yarn and CRA, ensuring smooth development.",
      "Ensured accessibility with Figma and adhered to Agile practices using Jira.",
    ],
    stack: [
      "ReactJS",
      "JavaScript",
      "Sass",
      "CSS Modules",
      "Styled Components",
      "Webpack",
      "Figma",
    ],
  },
  {
    name: "Eyepax",
    role: "Software Engineer (UI/UX)",
    start: "Dec 2017",
    end: "Sep 2021",
    url: "https://eyepax.com/",
    highlights: [
      "Designed and implemented responsive, accessible UIs, enforcing coding standards.",
      "Collaborated with developers and stakeholders to align project goals.",
      "Utilised ReactJS, SCSS, Sass, PHP and Laravel for robust web applications.",
      "Bridged design and development using Figma, Adobe XD and Zeplin.",
      "Optimised workflows with Gulp, Webpack and Agile practices via Jira.",
    ],
    stack: [
      "ReactJS",
      "JavaScript",
      "Sass",
      "Bootstrap",
      "PHP",
      "Laravel",
      "Figma",
      "Adobe XD",
    ],
  },
  {
    name: "Xcendant",
    role: "UI/UX Engineer",
    start: "Nov 2016",
    end: "Nov 2017",
    url: "https://lk.linkedin.com/company/excelsoft-pvt-ltd-",
    highlights: [
      "Created responsive UIs for web and mobile, adhering to coding standards.",
      "Collaborated with developers and stakeholders for aligned project goals.",
      "Leveraged HTML, CSS, JavaScript, jQuery, PHP and GSAP for dynamic designs.",
      "Enhanced visuals using Adobe XD, Photoshop and Illustrator.",
      "Streamlined workflows with Git and SVN for version control.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "PHP", "Adobe XD"],
  },
  {
    name: "iOneSoft",
    role: "UI/UX Engineer",
    start: "Jan 2014",
    end: "Nov 2016",
    url: "https://www.ionesoftsolutions.com/",
    highlights: [
      "Designed and implemented responsive UIs for web, mobile, desktop and kiosk applications.",
      "Enforced UI coding standards and collaborated globally with teams and clients.",
      "Used HTML, CSS, JavaScript, AngularJS, KnockoutJS and tools like WordPress and Ionic.",
      "Streamlined workflows with Git and TFS for efficient project delivery.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "AngularJS", "Ionic", "WordPress"],
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { title: "Frameworks", skills: ["ReactJS", "Next.js", "React Native"] },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "ShadCN",
      "Sass",
      "CSS Modules",
      "Styled Components",
      "Chakra UI",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Testing & tools",
    skills: ["Vitest", "Testing Library", "Git", "Figma", "Adobe XD"],
  },
];
