import type { Metadata } from "next";

import ezRsvpImage from "@/assets/images/ezrsvp.png";
import solarMonitorImage from "@/assets/images/solar-monitor.png";
import CaseHero from "@/components/case/case-hero";
import {
  CaseHeading,
  CaseSection,
  Flow,
  NextProject,
  Showcase,
} from "@/components/case/blocks";

export const metadata: Metadata = {
  title: "Solar Monitor — case study",
  description:
    "A monitoring PWA for a home solar setup: an ESP32 posts charge-controller readings to Supabase, and the app shows live production, history and battery trends.",
  alternates: { canonical: "/work/solar-monitor" },
};

const highlights = [
  { tag: "Live", title: "Live production", description: "Current solar output as new readings arrive." },
  { tag: "History", title: "History charts", description: "Production over time, at a glance." },
  { tag: "Battery", title: "Battery trends", description: "How the battery charges and drains." },
  { tag: "Offline", title: "Works offline", description: "An installable PWA that keeps working without a connection." },
  { tag: "Alerts", title: "Telegram alerts", description: "Notifications delivered through a Telegram bot." },
  { tag: "Stack", title: "TypeScript + React", description: "Built with Vite, Supabase and ESPHome." },
];

export default function SolarMonitorCaseStudy() {
  return (
    <>
      <CaseHero
        eyebrow="02 — Home solar PWA"
        title="Solar Monitor"
        tagline="Live solar data, from roof to pocket."
        intro="A monitoring PWA for a home solar setup. An ESP32 running ESPHome reads the MPPT charge controller and posts readings to Supabase every 30 seconds, and the app shows live production, history charts and battery trends, works offline, and sends Telegram alerts."
        cta={{
          label: "Visit live site",
          href: "https://solar-monitor.sahanbandara.com/",
        }}
        meta={[
          { label: "Type", value: "Personal IoT project + PWA" },
          { label: "Hardware", value: "ESP32 running ESPHome" },
          { label: "Data", value: "Readings to Supabase every 30 seconds" },
          { label: "Alerts", value: "Telegram bot" },
        ]}
      />

      <CaseSection className="md:pb-[104px]">
        <Showcase
          image={solarMonitorImage}
          alt="Solar Monitor dashboard on laptop and phone"
          tone="dark"
        />
      </CaseSection>

      <CaseSection tone="dark" className="py-16 md:py-[120px]">
        <CaseHeading
          eyebrow="Architecture"
          title="From charge controller to phone"
          tone="dark"
        />
        <Flow
          tone="dark"
          steps={[
            {
              title: "MPPT controller",
              description:
                "The solar charge controller is the source of every reading.",
            },
            {
              title: "ESP32 + ESPHome",
              description:
                "Reads the controller and posts readings every 30 seconds.",
            },
            {
              title: "Supabase",
              description:
                "Stores readings and serves live and historical data.",
            },
            {
              title: "PWA",
              description:
                "React + Vite app for live production, history and battery trends.",
            },
            {
              title: "Telegram",
              description: "Alerts pushed through a Telegram bot.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection className="pt-16 md:pt-[120px]">
        <CaseHeading
          eyebrow="What it does"
          title="Everything at a glance, even offline"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
          {highlights.map(({ tag, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-3xl border border-line bg-card px-7 py-8"
            >
              <span className="eyebrow">{tag}</span>
              <h3 className="text-h3 font-semibold">{title}</h3>
              <p className="text-body-s text-ink-muted">{description}</p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <NextProject
        title="ezRSVP"
        description="A wedding RSVP SaaS — one link per family, every RSVP counted."
        href="/work/ezrsvp"
        image={ezRsvpImage}
      />
    </>
  );
}
