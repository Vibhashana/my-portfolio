import type { MetadataRoute } from "next";
import { sizes } from "./icon";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahan Bandara's Portfolio",
    short_name: "Sahan Bandara",
    description:
      "A portfolio website showcasing the work, skills, and experience of Sahan Bandara, a frontend developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: sizes.map((size) => ({
      src: `/icon?size=${size.width}`,
      sizes: `${size.width}x${size.height}`,
      type: "image/png",
      purpose: "maskable",
    })),
  };
}
