import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  // Wrap every hover: variant in @media (hover: hover) so taps on touch
  // devices don't leave sticky hover states behind.
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        night: {
          DEFAULT: "rgb(var(--color-night) / <alpha-value>)",
          raised: "rgb(var(--color-night-raised) / <alpha-value>)",
        },
        "on-night": {
          DEFAULT: "rgb(var(--color-on-night) / <alpha-value>)",
          muted: "rgb(var(--color-on-night-muted) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      // Type scale from the Figma text styles. Display sizes scale fluidly
      // between the 390px and 1440px frames.
      fontSize: {
        "display-xl": [
          "clamp(2.875rem, 0.786rem + 8.571vw, 8.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.045em" },
        ],
        "display-xl-serif": [
          "clamp(3.125rem, 0.804rem + 9.524vw, 9.375rem)",
          { lineHeight: "0.92", letterSpacing: "-0.02em" },
        ],
        "display-l": [
          "clamp(2.75rem, 1.914rem + 3.429vw, 5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.035em" },
        ],
        "display-l-serif": [
          "clamp(2.375rem, 1.293rem + 4.444vw, 5.5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.015em" },
        ],
        "display-m": [
          "clamp(2.25rem, 1.32rem + 3.81vw, 4rem)",
          { lineHeight: "0.96", letterSpacing: "-0.035em" },
        ],
        "title-l": [
          "clamp(1.75rem, 1.1rem + 2.667vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "title-m": [
          "clamp(1.875rem, 1.364rem + 2.095vw, 3.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        h2: [
          "clamp(1.875rem, 1.55rem + 1.333vw, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        stat: [
          "clamp(2.125rem, 1.893rem + 0.952vw, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        h3: [
          "clamp(1.375rem, 1.236rem + 0.571vw, 1.75rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em" },
        ],
        "body-l": [
          "clamp(1.0625rem, 0.993rem + 0.286vw, 1.25rem)",
          { lineHeight: "1.5", letterSpacing: "-0.006em" },
        ],
        "body-m": [
          "1.0625rem",
          { lineHeight: "1.55", letterSpacing: "-0.003em" },
        ],
        "body-s": [
          "0.9375rem",
          { lineHeight: "1.5", letterSpacing: "-0.001em" },
        ],
        label: ["0.9375rem", { lineHeight: "1.2", letterSpacing: "-0.002em" }],
        "mono-s": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
        "mono-m": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }],
      },
      maxWidth: {
        page: "80rem",
      },
      // Stronger curves than the CSS defaults. These replace Tailwind's
      // ease-out / ease-in-out, so every existing usage picks them up.
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
