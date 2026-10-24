import type { Metadata } from "next";
import Image from "next/image";

import bookDoneImage from "@/assets/images/innkeep/bookdone.png";
import bookRoomsImage from "@/assets/images/innkeep/bookrooms.png";
import calendarImage from "@/assets/images/innkeep/calendar.png";
import channelsImage from "@/assets/images/innkeep/channels.png";
import checkInImage from "@/assets/images/innkeep/checkin.png";
import coloursImage from "@/assets/images/innkeep/colours.png";
import housekeepingImage from "@/assets/images/innkeep/hkmobile.png";
import landingImage from "@/assets/images/innkeep/landing.png";
import mockupImage from "@/assets/images/innkeep-mockup.png";
import todayImage from "@/assets/images/innkeep/today.png";
import solarMonitorImage from "@/assets/images/solar-monitor.png";
import CaseHero from "@/components/case/case-hero";
import {
  Brief,
  CaseHeading,
  CaseSection,
  FeatureRow,
  NextProject,
  Showcase,
} from "@/components/case/blocks";
import { BrowserFrame, PhoneFrame } from "@/components/case/devices";
import Chip, { ChipList } from "@/components/ui/chip";

export const metadata: Metadata = {
  title: "Innkeep — case study",
  description:
    "A hotel PMS SaaS for guesthouses, villas and small hotels — bookings, check-in, bills and housekeeping in one app, with every booking site kept in sync.",
  alternates: { canonical: "/work/innkeep" },
};

const stats = [
  { value: "134", label: "PMS screens & states" },
  { value: "14", label: "Booking engine & web frames" },
  { value: "66", label: "Component sets" },
  { value: "178", label: "Design tokens" },
];

const features = [
  {
    eyebrow: "01 — Front desk",
    title: "The whole day on one screen",
    description:
      "Today opens with who is arriving, leaving and in-house, room status from housekeeping, messages waiting to go out and occupancy for the next two weeks.",
    bullets: [
      "Arrivals, departures and in-house tabs",
      "A needs-attention queue: unready rooms, deposits due, booking-site changes",
      "Occupancy forecast for the next 14 days",
    ],
    url: "app.innkeep.com/today",
    image: todayImage,
    alt: "Innkeep Today dashboard",
  },
  {
    eyebrow: "02 — Calendar",
    title: "Drag a stay to move it",
    description:
      "A two-week tape chart shows every room at once. Bookings move by dragging, rooms can be blocked, and any stay opens without leaving the grid.",
    bullets: [
      "Move-booking and block-rooms flows",
      "Tonight’s summary: rooms occupied, arrivals, departures",
      "Status colours: checked in, confirmed, deposit due, checked out",
    ],
    url: "app.innkeep.com/calendar",
    image: calendarImage,
    alt: "Innkeep tape-chart calendar",
  },
  {
    eyebrow: "03 — Check-in & billing",
    title: "Bills that add up, every time",
    description:
      "Check-in captures the guest’s ID and signature. The folio takes payments, adds or voids charges, splits bills and sends payment links — then prints the registration card.",
    bullets: [
      "Scan ID and signature steps",
      "Split payment, payment link and refund flows",
      "Printable registration card and arrivals list",
    ],
    url: "app.innkeep.com/check-in",
    image: checkInImage,
    alt: "Innkeep check-in flow",
  },
  {
    eyebrow: "04 — Channels",
    title: "Sell everywhere. Double-book nowhere.",
    description:
      "Booking.com, Agoda, Expedia and Airbnb stay in sync. When a sync breaks, the owner sees the error, the sync log and a guided fix-mapping flow instead of a cryptic code.",
    bullets: [
      "Connect, manage and change channel providers",
      "Sync error and sync log views",
      "Fix-mapping flow for rooms and rate plans",
    ],
    url: "app.innkeep.com/channels",
    image: channelsImage,
    alt: "Innkeep channel manager",
  },
];

const phones = [
  {
    title: "Housekeeping",
    description: "Staff see their rooms and update status as they go.",
    image: housekeepingImage,
  },
  {
    title: "Booking engine",
    description: "Guests compare rooms and rates, then book direct.",
    image: bookRoomsImage,
  },
  {
    title: "Confirmed",
    description: "A clear confirmation with everything the guest needs.",
    image: bookDoneImage,
  },
];

const specs = [
  ["Variables", "Primitives, semantic colours, spacing, radius"],
  ["Typography", "15 text styles, desktop and mobile modes"],
  ["Components", "66 component sets plus PMS parts like booking status"],
  ["Typeface", "Inter"],
];

const edgeCases = [
  "Loading",
  "Empty reservations",
  "Offline",
  "Payment failed",
  "Trial ending",
  "Sync error",
  "Agoda failed",
  "Not found",
  "Two-step sign-in",
  "First day",
  "Late check-out",
  "No-show",
];

export default function InnkeepCaseStudy() {
  return (
    <>
      <CaseHero
        eyebrow="01 — Hotel PMS SaaS"
        title="Innkeep"
        tagline="Run your whole hotel from one screen."
        intro="Bookings, check-in, bills and housekeeping in one simple app for guesthouses, villas and small hotels — with Booking.com, Agoda, Expedia and Airbnb kept in sync. I designed the whole product and I’m now building it."
        meta={[
          { label: "Product", value: "Hotel property management (PMS) SaaS" },
          { label: "Built for", value: "Guesthouses, villas and small hotels" },
          { label: "My role", value: "Product design + frontend development" },
          { label: "Status", value: "Designed · frontend build in progress" },
        ]}
      />

      <CaseSection className="pb-12 md:pb-[104px]">
        <Showcase
          image={mockupImage}
          alt="Innkeep dashboard on laptop and phone"
          tone="dark"
        />
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
          title="Most small hotels juggle an extranet, WhatsApp and a notebook."
          paragraphs={[
            "Innkeep puts it in one place: bookings, check-in, bills and housekeeping in one simple app, with every booking site kept in sync so the same room is never sold twice.",
            "It is priced in rupees and built for a phone at reception, so an owner can set it up on a call and go live in a day.",
          ]}
        />
      </CaseSection>

      {features.map(({ url, image, alt, ...feature }, i) => (
        <FeatureRow
          key={feature.title}
          {...feature}
          reverse={i % 2 === 1}
          visual={
            <BrowserFrame
              url={url}
              image={image}
              alt={alt}
              sizes="(min-width: 1024px) 660px, calc(100vw - 68px)"
              className="aspect-[660/592] w-full max-w-[660px] rounded-b-none"
            />
          }
        />
      ))}

      <section className="bg-night text-on-night">
        <div className="container-page py-16 md:py-[120px]">
          <CaseHeading
            eyebrow="Mobile"
            title="On the phone at reception, and in the corridor"
            description="Housekeeping staff update rooms from their phones, and guests book direct through a mobile booking engine."
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
                  alt={`Innkeep ${title.toLowerCase()} screen`}
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
              One system behind 134 screens
            </h2>
            <p className="text-body-m text-ink-muted">
              Every screen is built from shared foundations and components, so
              the PMS, the booking engine and the marketing site feel like one
              product.
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
              alt="Innkeep colour tokens"
              sizes="(min-width: 1024px) 658px, calc(100vw - 64px)"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 md:mt-14 md:border-t md:border-line md:pt-6">
          <p className="mono-label text-ink-muted">Every edge case, designed</p>
          <ChipList>
            {edgeCases.map((state) => (
              <Chip key={state}>{state}</Chip>
            ))}
          </ChipList>
        </div>
      </CaseSection>

      <FeatureRow
        eyebrow="05 — Marketing site"
        title="And the site that sells it"
        description="A landing page that speaks to owners: no double bookings, no commission on direct bookings, bills that add up — and simple prices in rupees."
        bullets={[
          "Desktop and mobile layouts",
          "Pricing in LKR, one price per property per month",
          "FAQ written around owners’ real questions",
        ]}
        visualClassName="items-center pb-[18px] lg:pb-12 lg:pt-12 pt-[18px] lg:min-h-[560px]"
        visual={
          <BrowserFrame
            url="innkeep.com"
            image={landingImage}
            alt="Innkeep marketing site"
            sizes="(min-width: 1024px) 660px, calc(100vw - 68px)"
            className="aspect-[660/391] w-full max-w-[660px]"
          />
        }
        bodyClassName="pt-16 md:pt-[120px]"
      />

      <NextProject
        title="Solar Monitor"
        description="A monitoring PWA for a home solar setup, from ESP32 to phone."
        href="/work/solar-monitor"
        image={solarMonitorImage}
      />
    </>
  );
}
