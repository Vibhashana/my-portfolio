import type { Metadata } from "next";
import Image from "next/image";

import innkeepImage from "@/assets/images/innkeep/landing.png";
import coloursImage from "@/assets/images/qr-generator/colours.png";
import featuresImage from "@/assets/images/qr-generator/features.png";
import heroImage from "@/assets/images/qr-generator/hero.png";
import editorMobileImage from "@/assets/images/qr-generator/meditor.png";
import mockupImage from "@/assets/images/qrafty-mockup.png";
import heroMobileImage from "@/assets/images/qr-generator/mhero.png";
import previewMobileImage from "@/assets/images/qr-generator/mpreview.png";
import step2Image from "@/assets/images/qr-generator/step2.png";
import CaseHero from "@/components/case/case-hero";
import {
  Brief,
  CaseHeading,
  CaseSection,
  FeatureRow,
  Flow,
  NextProject,
  Showcase,
} from "@/components/case/blocks";
import { BrowserFrame, PhoneFrame } from "@/components/case/devices";
import Reveal from "@/components/reveal";
import Chip, { ChipList } from "@/components/ui/chip";

export const metadata: Metadata = {
  title: "QR Generator — case study",
  description:
    "A 48-hour UI/UX assessment: a redesign of a QR code generator’s homepage and the Step 2 editor of its PDF QR flow, built on a token-driven design system.",
  alternates: { canonical: "/work/qr-generator" },
};

const designFileUrl =
  "https://www.figma.com/design/5isbV1YASygvTtBJVbJzzK/Rightmo-UI-Assessment";

const stats = [
  { value: "48 h", label: "Brief to handoff" },
  { value: "43", label: "Component sets" },
  { value: "64", label: "Line icons" },
  { value: "5", label: "Upload states designed" },
];

const features = [
  {
    eyebrow: "01 — Homepage",
    title: "Show the result, not the promise",
    description:
      "The hero takes a link in one field and shows the finished code on a phone, with cards for scans this week, editing after printing, logo and colours, and print-ready files.",
    bullets: [
      "One field and one filled “Generate QR code” above the fold",
      "Free forever, no sign-up and file formats stated up front",
      "Three hero versions explored; the final one shows the result",
    ],
    url: "qrafty.com",
    image: heroImage,
    alt: "Redesigned QR generator homepage hero",
    visualClassName: "items-center pb-[18px] lg:min-h-[640px] lg:pb-12",
    frameClassName: "aspect-[660/476]",
  },
  {
    eyebrow: "02 — Step 2 editor",
    title: "A split workspace with a live preview",
    description:
      "Inputs sit on the left and a sticky preview on the right, so every change shows at once. Fields are grouped into four numbered accordions, with optional settings collapsed and marked.",
    bullets: [
      "Document · Landing page branding · QR design · Settings",
      "Collapsed accordions show a summary and a status badge",
      "Switch between the landing page and the styled QR card",
    ],
    url: "qrafty.com/create/pdf",
    image: step2Image,
    alt: "Step 2 editor of the PDF QR flow with a live preview",
  },
  {
    eyebrow: "03 — Homepage sections",
    title: "Each section answers the next question",
    description:
      "Below the hero: how it works, QR types, a features bento, use cases, pricing with one recommended plan, then the FAQ.",
    bullets: [
      "QR types led by Website/URL, plus “And 11 more”",
      "Monthly/yearly pricing with one “Most popular” plan",
      "FAQ and footer keep the live site’s support content",
    ],
    url: "qrafty.com/#features",
    image: featuresImage,
    alt: "Features bento and QR types on the redesigned homepage",
  },
];

const phones = [
  {
    title: "Homepage",
    description:
      "The same hero, stacked: one field, one button, the result below.",
    image: heroMobileImage,
  },
  {
    title: "Step 2 editor",
    description: "The accordions stack, with the preview one tap away.",
    image: editorMobileImage,
  },
  {
    title: "Live preview",
    description: "The landing page exactly as people who scan will see it.",
    image: previewMobileImage,
  },
];

const specs = [
  [
    "Colour",
    "Primitive ramps and semantic tokens, plus a landing/* set that keeps the customer’s brand apart",
  ],
  ["Spacing", "8 px scale; radius from none to full"],
  ["Type", "Plus Jakarta Sans, desktop and mobile collections"],
  ["Components", "43 component sets and 64 line icons"],
  ["Effects", "Shadows XS–LG and focus rings"],
];

const uploadStates = ["Default", "Drag-over", "Uploading", "Success", "Error"];

const craft = [
  {
    eyebrow: "Focus",
    title: "Visible focus",
    description:
      "Default and error focus rings on every interactive component.",
  },
  {
    eyebrow: "Errors",
    title: "Errors in words",
    description:
      "Visible labels and helper text; errors never rely on colour alone.",
  },
  {
    eyebrow: "Selection",
    title: "Not by colour alone",
    description:
      "Selected swatches get a ring, a white gap and a check mark.",
  },
  {
    eyebrow: "Targets",
    title: "40–48 px controls",
    description: "Buttons and toggles sized for easy use on desktop.",
  },
  {
    eyebrow: "Testing",
    title: "A plan to validate",
    description:
      "Five to eight moderated sessions per page, then an A/B test of the hero.",
  },
  {
    eyebrow: "Metrics",
    title: "What to measure",
    description: "Time to first code, Step 2 completion and upload errors.",
  },
];

export default function QrGeneratorCaseStudy() {
  return (
    <>
      <CaseHero
        eyebrow="04 — UI/UX assessment"
        title="QR Generator"
        tagline="Show the code first."
        intro="A 48-hour UI/UX engineer assessment: a redesign of a QR code generator’s homepage and the Step 2 editor of its PDF QR flow, built on a token-driven design system in Figma."
        cta={{ label: "View design file", href: designFileUrl }}
        meta={[
          { label: "My role", value: "UX audit, UI design, design system" },
          { label: "Timeframe", value: "48 hours" },
          { label: "Scope", value: "Homepage + PDF QR flow, Step 2" },
          { label: "Platforms", value: "Desktop 1440 · mobile 390" },
        ]}
      />

      <CaseSection className="pb-12 md:pb-[104px]">
        <div className="enter relative overflow-hidden rounded-3xl bg-night pb-[59px] pl-[5%] pt-8 [animation-delay:220ms] md:rounded-[36px] md:pb-[31px] md:pl-16 md:pt-20">
          <Showcase
            image={mockupImage}
            alt="QR Generator homepage"
            tone="dark"
          />
        </div>
      </CaseSection>

      <CaseSection className="pb-14 md:pb-[120px]">
        <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4 md:border-b-0">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={
                "flex flex-col-reverse gap-3 py-6 md:py-9 " +
                (i % 2 === 0 ? "pr-4" : "pl-4 md:pl-0") +
                (i < 2 ? "border-b border-line md:border-0" : "")
              }
            >
              <dt className="mono-label text-ink-muted">{label}</dt>
              <dd className="text-display-l font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </CaseSection>

      <CaseSection>
        <Brief
          eyebrow="The brief"
          title="The product worked, but it asked for effort before it showed any value."
          paragraphs={[
            "The live homepage promised “We make QR codes easy” without showing a single code. Styling sat a step away from content, so people couldn’t judge the result while they typed, and Step 2 was one long form where required and optional fields looked the same.",
            "The task was to redesign the homepage and Step 2 of the PDF QR flow at 1440, keeping the product’s structure and content. I audited the live product first, then added 390 mobile layouts on top of the brief.",
          ]}
        />
      </CaseSection>

      <CaseSection>
        <CaseHeading
          eyebrow="The flow"
          title="One example, from hero to editor"
          description="What the hero collects is never asked for again: Step 2 opens with the content filled in."
        />
        <Flow
          steps={[
            {
              title: "Hero",
              description:
                "Paste a link and generate, or jump to PDF, vCard, Wi-Fi or menu codes.",
            },
            {
              title: "Choose type",
              description:
                "Every QR type as a visual card, led by Website/URL.",
            },
            {
              title: "Content & design",
              description:
                "A split editor with a live preview pinned beside the form.",
            },
            {
              title: "Export",
              description:
                "Download PNG, SVG or EPS, or save it to track scans.",
            },
          ]}
        />
      </CaseSection>

      {features.map(
        (
          { url, image, alt, visualClassName, frameClassName, ...feature },
          i
        ) => (
          <FeatureRow
            key={feature.title}
            {...feature}
            reverse={i % 2 === 1}
            visualClassName={visualClassName}
            visual={
              <BrowserFrame
                url={url}
                image={image}
                alt={alt}
                sizes="(min-width: 1024px) 660px, calc(100vw - 68px)"
                className={
                  "w-full max-w-[660px] " +
                  (frameClassName ?? "aspect-[660/592] rounded-b-none")
                }
              />
            }
          />
        )
      )}

      <section className="bg-night text-on-night">
        <div className="container-page py-16 md:py-[120px]">
          <CaseHeading
            eyebrow="Mobile"
            title="Designed for 390 as well"
            description="Mobile wasn’t required by the brief. I added the homepage and Step 2 at 390, with their own type scale."
            tone="dark"
          />
          <ul className="mt-8 grid grid-cols-2 gap-4 md:mt-[72px] md:flex md:justify-center md:gap-14">
            {phones.map(({ title, description, image }, i) => (
              <li
                key={title}
                className={
                  "flex flex-col items-center gap-3.5 text-center md:w-[300px] " +
                  (i === 2 ? "hidden md:flex" : "")
                }
              >
                <PhoneFrame
                  image={image}
                  alt={`QR generator ${title.toLowerCase()} on mobile`}
                  className="w-full"
                />
                <h3 className="mt-6 hidden text-label font-medium md:block">
                  {title}
                </h3>
                <p className="hidden text-body-s text-on-night-muted md:block">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CaseSection tone="surface" className="py-16 md:py-[120px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[72px]">
          <div className="flex flex-col gap-6 lg:w-[420px] lg:shrink-0 lg:gap-5">
            <p className="eyebrow">Design system</p>
            <h2 className="text-balance text-h2 font-semibold">
              Tokens first, so one change updates every screen
            </h2>
            <p className="text-body-m text-ink-muted">
              Every frame is built from variables, styles and components, with
              Auto Layout and semantic layer names such as
              Step2/LeftPanel/Accordion-Branding.
            </p>
            <dl className="hidden pt-2 lg:block">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex gap-4 border-t border-line py-3.5"
                >
                  <dt className="mono-label w-[140px] shrink-0 pt-[3px] text-ink-muted">
                    {label}
                  </dt>
                  <dd className="text-body-s">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex-1 rounded-2xl border border-line bg-card p-3 lg:rounded-[28px] lg:p-6">
            <Image
              src={coloursImage}
              alt="QR generator colour tokens"
              sizes="(min-width: 1024px) 658px, calc(100vw - 64px)"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 md:mt-14 md:border-t md:border-line md:pt-6">
          <p className="mono-label text-ink-muted">
            Upload states, all designed
          </p>
          <ChipList>
            {uploadStates.map((state) => (
              <Chip key={state}>{state}</Chip>
            ))}
          </ChipList>
        </div>
      </CaseSection>

      <CaseSection className="pt-16 md:pt-[120px]">
        <CaseHeading
          eyebrow="Accessibility & next steps"
          title="Built to be accessible, honest about what’s untested"
        />
        <ul className="mt-8 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {craft.map(({ eyebrow, title, description }, i) => (
            <Reveal
              key={title}
              as="li"
              delay={(i % 3) * 70}
              className="flex flex-col gap-3 rounded-3xl border border-line bg-card px-7 py-8"
            >
              <span className="eyebrow">{eyebrow}</span>
              <h3 className="text-h3 font-semibold">{title}</h3>
              <p className="text-body-s text-ink-muted">{description}</p>
            </Reveal>
          ))}
        </ul>
      </CaseSection>

      <NextProject
        title="Innkeep"
        description="A hotel PMS SaaS — run your whole hotel from one screen."
        href="/work/innkeep"
        image={innkeepImage}
      />
    </>
  );
}
