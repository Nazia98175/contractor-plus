
import { Metadata } from "next";

interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string;
}

interface GetSeoMetaOptions {
  seoMeta?: SeoMeta;
  fallbackTitle?: string;
  fallbackDescription?: string;
  slug?: string;
  locale?: string;
}

export const getSeoMeta = ({
  seoMeta,
  fallbackTitle = "Contractor+",
  fallbackDescription = "",
  slug,
  locale,
}: GetSeoMetaOptions): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const localePath =
    locale && locale !== "en" ? `/${locale}/${slug}` : `/${slug}`;

  return {
    title: seoMeta?.metaTitle || `${fallbackTitle} ${slug}`,
    description: seoMeta?.metaDescription || fallbackDescription,
    keywords: seoMeta?.keywords,
    alternates: {
      canonical: seoMeta?.canonicalUrl || `${baseUrl}${localePath}`,
    },
  };
};

interface GenerateSeoMetadataOptions {
  page: any;
  slug?: string;
}

export const generateSeoMetadata = ({
  page,
  slug,
}: GenerateSeoMetadataOptions): Metadata => {
  const title =
    page?.seoMetaData?.metaTitle ||
    page?.hero?.heroTitle ||
    (slug ? `Contractor+ ${slug}` : "");

  const description =
    page?.seoMetaData?.metaDescription || page?.hero?.subTitle || "";

  const keywords = page?.seoMetaData?.keywords || "";

  const canonical =
    page?.seoMetaData?.canonicalUrl ??
    `${process.env.NEXT_PUBLIC_DOMAIN}/${slug || ""}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
  };
};
