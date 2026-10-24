import type { MetadataRoute } from "next";

import { featuredProjects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sahanbandara.com",
      lastModified: new Date(),
      priority: 1,
    },
    ...featuredProjects.map(({ caseStudy }) => ({
      url: `https://sahanbandara.com${caseStudy}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
