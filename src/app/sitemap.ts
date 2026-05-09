import type { MetadataRoute } from "next";

export const revalidate = 86400;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://shodhdhara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/contact-us/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about-us/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/research-journals/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guidelines/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/frequency-of-publication/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/board-members/", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/declaration-form/", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/membership-form/", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/current-issue/", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
