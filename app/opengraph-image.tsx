/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { facts } from "@/lib/data";

export const runtime = "edge";

// Image metadata
export const alt =
  "Sahan Bandara — I design and build thoughtful web products.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Design tokens from styles/globals.css
const colors = {
  paper: "rgb(244 242 237)",
  card: "rgb(255 255 255)",
  ink: "rgb(17 17 17)",
  inkMuted: "rgb(110 106 99)",
  line: "rgb(217 213 204)",
  accent: "rgb(255 79 23)",
  success: "rgb(43 182 115)",
};

// `family` is the Google Fonts css2 family spec, e.g. "Geist:wght@600"
const loadGoogleFont = async (family: string) => {
  const url = `https://fonts.googleapis.com/css2?family=${family}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error(`❌ Failed to load font data for ${family}!`);
};

// Image generation
export default async function GenerateOgImage() {
  const [portrait, geistMedium, geistSemiBold, geistMono, instrumentSerif] =
    await Promise.all([
      fetch(new URL("../assets/images/portrait-pill.jpg", import.meta.url)).then(
        (res) => res.arrayBuffer()
      ),
      loadGoogleFont("Geist:wght@500"),
      loadGoogleFont("Geist:wght@600"),
      loadGoogleFont("Geist+Mono:wght@400"),
      loadGoogleFont("Instrument+Serif:ital@1"),
    ]);

  return new ImageResponse(
    (
      <div
        tw="flex flex-col justify-between w-full h-full"
        style={{
          backgroundColor: colors.paper,
          color: colors.ink,
          fontFamily: "Geist",
          padding: "56px 64px",
        }}
      >
        {/* Top row: availability chip + domain */}
        <div tw="flex items-center justify-between">
          <div
            tw="flex items-center rounded-full"
            style={{
              backgroundColor: colors.card,
              border: `1px solid ${colors.line}`,
              padding: "10px 20px 10px 16px",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            <div
              tw="flex rounded-full"
              style={{
                width: 10,
                height: 10,
                marginRight: 12,
                backgroundColor: colors.success,
              }}
            />
            Open to full-time roles &amp; freelance
          </div>
          <div
            style={{
              fontFamily: "Geist Mono",
              fontSize: 18,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: colors.inkMuted,
            }}
          >
            sahanbandara.com
          </div>
        </div>

        {/* Headline */}
        <div
          tw="flex flex-col"
          style={{
            fontSize: 104,
            fontWeight: 600,
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
          }}
        >
          <div>I design and build</div>
          <div tw="flex items-center" style={{ marginTop: 6 }}>
            <img
              src={portrait as unknown as string}
              alt=""
              width={206}
              height={105}
              tw="rounded-full"
              style={{ objectFit: "cover", marginRight: 28 }}
            />
            <div
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 116,
                letterSpacing: "-0.02em",
                color: colors.accent,
              }}
            >
              thoughtful
            </div>
          </div>
          <div style={{ marginTop: 6 }}>web products.</div>
        </div>

        {/* Bottom row: name + facts */}
        <div
          tw="flex items-end justify-between"
          style={{ borderTop: `1px solid ${colors.line}`, paddingTop: 24 }}
        >
          <div tw="flex flex-col">
            <div
              style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.025em" }}
            >
              Sahan Bandara
            </div>
            <div
              style={{
                marginTop: 6,
                fontFamily: "Geist Mono",
                fontSize: 15,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: colors.inkMuted,
              }}
            >
              Frontend Developer
            </div>
          </div>

          <div tw="flex">
            {facts.map(({ value, label }, index) => (
              <div
                key={label}
                tw="flex flex-col"
                style={{ marginLeft: index === 0 ? 0 : 56 }}
              >
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontFamily: "Geist Mono",
                    fontSize: 15,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: colors.inkMuted,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
        { name: "Geist", data: geistSemiBold, style: "normal", weight: 600 },
        { name: "Geist Mono", data: geistMono, style: "normal", weight: 400 },
        {
          name: "Instrument Serif",
          data: instrumentSerif,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
