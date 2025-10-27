import { MetadataRoute } from "next";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";
import { getBlogs } from "@/services/blogs";
import axiosInstance from "@/lib/axios";

// Fetch helpers for dynamic content
const getAllFeatures = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `features-pages?locale=${locale}&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

const getAllIntegrations = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `integration-details?locale=${locale}&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching integrations:", error);
    return [];
  }
};

const getAllResources = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `resources?locale=${locale}&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN ||
    process.env.DOMAIN_URL ||
    "https://v2site.contractorplus.app";
  const locales = ["en", "fr", "es"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Helper to create alternates
  const createAlternates = (path: string) => {
    return {
      languages: {
        en: `${baseUrl}${path}`,
        fr: `${baseUrl}/fr${path}`,
        es: `${baseUrl}/es${path}`,
      },
    };
  };

  // 1. Add homepage for all locales
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
    alternates: createAlternates(""),
  });

  // 2. Add static pages
  const staticPages = [
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/why-contractor",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/all-features",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    { path: "/industries", priority: 0.8, changeFrequency: "weekly" as const },
    {
      path: "/integrations",
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    { path: "/blogs", priority: 0.7, changeFrequency: "daily" as const },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/events", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/investors", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/affiliates", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/opportunity-tracker",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    { path: "/suppliers", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/podcasts", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/lp", priority: 0.5, changeFrequency: "monthly" as const },
    {
      path: "/local-seo-for-contractors",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/cookie-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms-of-service",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    { path: "/gdpr", priority: 0.3, changeFrequency: "yearly" as const },
    {
      path: "/accessibility",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: createAlternates(page.path),
    });
  });

  // 3. Add dynamic content for all locales
  for (const locale of locales) {
    const localePrefix = locale === "en" ? "" : `/${locale}`;

    try {
      // Fetch and add industries
      const industries = await getAllIndustries(locale);
      if (industries && Array.isArray(industries)) {
        industries.forEach((industry: any) => {
          sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/industries/${industry.slug}`,
            lastModified: industry.updatedAt
              ? new Date(industry.updatedAt)
              : new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
            alternates: createAlternates(`/industries/${industry.slug}`),
          });
        });
      }

      // Fetch and add blogs
      const blogsResponse = await getBlogs(
        locale,
        "&pagination[page]=1&pagination[pageSize]=100",
      );
      const blogs = blogsResponse?.data || [];
      blogs.forEach((blog: any) => {
        sitemapEntries.push({
          url: `${baseUrl}${localePrefix}/blogs/${blog.slug}`,
          lastModified: blog.publishedAt
            ? new Date(blog.publishedAt)
            : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: createAlternates(`/blogs/${blog.slug}`),
        });
      });

      // Fetch and add features
      const features = await getAllFeatures(locale);
      if (features && Array.isArray(features)) {
        features.forEach((feature: any) => {
          sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/all-features/${feature.slug}`,
            lastModified: feature.updatedAt
              ? new Date(feature.updatedAt)
              : new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
            alternates: createAlternates(`/all-features/${feature.slug}`),
          });
        });
      }

      // Fetch and add integrations
      const integrations = await getAllIntegrations(locale);
      if (integrations && Array.isArray(integrations)) {
        integrations.forEach((integration: any) => {
          sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/integrations/${integration.slug}`,
            lastModified: integration.updatedAt
              ? new Date(integration.updatedAt)
              : new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
            alternates: createAlternates(`/integrations/${integration.slug}`),
          });
        });
      }

      // Fetch and add resources
      const resources = await getAllResources(locale);
      if (resources && Array.isArray(resources)) {
        resources.forEach((resource: any) => {
          sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/resources/${resource.slug}`,
            lastModified: resource.updatedAt
              ? new Date(resource.updatedAt)
              : new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
            alternates: createAlternates(`/resources/${resource.slug}`),
          });
        });
      }
    } catch (error) {
      console.error(
        `Error generating sitemap entries for locale ${locale}:`,
        error,
      );
    }

    // Only process once for all locales (avoid duplicates)
    if (locale === "en") {
      break;
    }
  }

  return sitemapEntries;
}
