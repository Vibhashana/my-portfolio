import type { Metadata } from "next";

import ezRsvpImage from "@/assets/images/ezrsvp.png";
import qrGeneratorImage from "@/assets/images/qr-generator/hero.png";
import CaseHero from "@/components/case/case-hero";
import {
  Brief,
  CaseHeading,
  CaseSection,
  Flow,
  NextProject,
  Showcase,
} from "@/components/case/blocks";

export const metadata: Metadata = {
  title: "ezRSVP — case study",
  description:
    "A wedding RSVP SaaS where each household gets its own RSVP link and couples track live headcounts and meal choices per event.",
  alternates: { canonical: "/work/ezrsvp" },
};

const stack = [
  ["Next.js + TypeScript", "The app, wedding pages and RSVP flows"],
  ["Tailwind CSS + ShadCN", "UI components and theming"],
  ["PostgreSQL + Drizzle ORM", "Households, guests, events and meal choices"],
  ["Paddle", "Payments"],
  ["Sentry", "Error tracking in production"],
];

export default function EzRsvpCaseStudy() {
  return (
    <>
      <CaseHero
        eyebrow="03 — Wedding RSVP SaaS"
        title="ezRSVP"
        tagline="One link per family. Every RSVP counted."
        intro="A wedding RSVP SaaS where couples design a wedding page, send each household its own RSVP link by email or WhatsApp, and track live headcounts and meal choices per event. Guests RSVP without creating an account."
        cta={{
          label: "Visit live site",
          href: "https://ezrsvp.sahanbandara.com/",
        }}
        meta={[
          { label: "Product", value: "Wedding RSVP SaaS" },
          { label: "For", value: "Couples planning a wedding" },
          {
            label: "Guest experience",
            value: "RSVP without creating an account",
          },
          { label: "Stack", value: "Next.js · TypeScript · PostgreSQL" },
        ]}
      />

      <CaseSection className="md:pb-[104px]">
        <Showcase
          image={ezRsvpImage}
          alt="ezRSVP wedding page on laptop and phone"
        />
      </CaseSection>

      <CaseSection>
        <Brief
          eyebrow="The idea"
          title="Built around the household, not the individual guest."
          paragraphs={[
            "Each household gets its own RSVP link, sent by email or WhatsApp. Guests open it and answer for everyone in their family — no account, no password.",
            "Couples see the result as it happens: live headcounts and meal choices for every event of the wedding.",
          ]}
        />
      </CaseSection>

      <CaseSection>
        <CaseHeading
          eyebrow="How it works"
          title="From wedding page to final headcount"
        />
        <Flow
          steps={[
            {
              title: "Design",
              description:
                "The couple designs their wedding page and its events.",
            },
            {
              title: "Invite",
              description:
                "Each household gets its own RSVP link by email or WhatsApp.",
            },
            {
              title: "RSVP",
              description:
                "Guests answer per event and choose meals — no account needed.",
            },
            {
              title: "Track",
              description: "Live headcounts and meal choices for every event.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection>
        <div className="grid gap-6 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-6 md:gap-5">
            <p className="eyebrow">Under the hood</p>
            <h2 className="text-balance text-h2 font-semibold">
              The full stack behind the product
            </h2>
          </div>
          <dl className="border-b border-line">
            {stack.map(([tool, use]) => (
              <div
                key={tool}
                className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:justify-between sm:gap-6"
              >
                <dt className="text-label font-medium sm:w-[200px] sm:shrink-0 sm:pt-[5px]">
                  {tool}
                </dt>
                <dd className="text-body-m text-ink-muted sm:w-[328px]">
                  {use}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </CaseSection>

      <NextProject
        title="QR Generator"
        description="A 48-hour redesign of a QR code generator — the finished code shown first."
        href="/work/qr-generator"
        image={qrGeneratorImage}
      />
    </>
  );
}
