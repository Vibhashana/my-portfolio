import type { MetadataRoute } from "next";

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
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
