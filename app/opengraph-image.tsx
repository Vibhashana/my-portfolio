/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const runtime = "edge";

// Image metadata
export const alt = "Sahan Bandara";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const loadGoogleFont = async (font: string, weight: number) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;
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

  throw new Error("❌ Failed to load font data!");
};

// Image generation
const icons = [
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiShadcnui,
];

export default async function GenerateOgImage() {
  // Font
  //   const interSemiBold = fetch(
  //     new URL("./Poppins-SemiBold.ttf", import.meta.url)
  //   ).then((res) => res.arrayBuffer());

  const imageData = await fetch(
    new URL("../assets/images/sahan-cropped.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex w-full h-full items-center justify-center bg-blue-600 text-white gap-4">
        <div tw="flex flex-col">
          <div tw="flex">
            <div tw="flex overflow-hidden rounded-full w-[150px] h-[150px] border-[5px] border-white mr-10 shadow-2xl">
              <img
                src={imageData as unknown as string} // Use the loaded image data
                alt="Profile"
              />
            </div>
            <div tw="flex flex-col">
              <h1 tw="text-6xl font-bold mb-2 mt-0">Sahan Bandara</h1>
              <p tw="text-4xl mb-1 mt-0">Frontend Developer</p>
              <p tw="text-2xl mb-1 mt-0">hello@sahanbandara.com</p>
            </div>
          </div>

          <div tw="flex mt-16 mx-auto">
            {icons.map((Icon, index: number) => (
              <div tw={`flex ${index !== 0 && `ml-10`}`} key={index}>
                <Icon size={45} />
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
        {
          name: "Poppins",
          data: await loadGoogleFont("Poppins", 400),
          style: "normal",
          weight: 400,
        },
        {
          name: "Poppins",
          data: await loadGoogleFont("Poppins", 700),
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
