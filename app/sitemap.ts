import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cleanwebsites.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://cleanwebsites.co.uk/demo/barber",
      lastModified: new Date(),
    },
    {
      url: "https://cleanwebsites.co.uk/demo/burger",
      lastModified: new Date(),
    },
    {
      url: "https://cleanwebsites.co.uk/demo/trades",
      lastModified: new Date(),
    },
    {
      url: "https://cleanwebsites.co.uk/start",
      lastModified: new Date(),
    },
  ];
}
