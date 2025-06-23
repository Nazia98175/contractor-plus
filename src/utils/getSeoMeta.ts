import { Metadata } from "next";

interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string;
}

export const getSeoMeta = (seoMeta: SeoMeta | undefined): Metadata => {
  return {
    title: seoMeta?.metaTitle || "Default Title",
    description: seoMeta?.metaDescription || "Default Description",
    keywords: seoMeta?.keywords,
    alternates: {
      canonical: seoMeta?.canonicalUrl,
    },
  };
};
