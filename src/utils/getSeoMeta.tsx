import { Metadata } from "next";

interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string;
}

interface GenerateSeoMetadataOptions {
  page: any;
  slug?: string;
}

export const generateSeoMetadata = ({
  page,
  slug,
}: GenerateSeoMetadataOptions): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const title =
    page?.seoMetaData?.metaTitle ||
    page?.hero?.heroTitle ||
    (slug ? `Contractor+ ${slug}` : "");

  const description =
    page?.seoMetaData?.metaDescription || page?.hero?.subTitle || "";

  const keywords = page?.seoMetaData?.keywords || "";

  const canonical =
    `${baseUrl}${page?.seoMetaData?.canonicalUrl}` ||
    `${baseUrl}/${slug || ""}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
  };
};

export const generateSeoMetadataBlogs = ({
  page,
  slug,
}: GenerateSeoMetadataOptions): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const title =
    page?.SeoMetaData?.metaTitle || (slug ? `Contractor+ ${slug}` : "");

  const description =
    page?.SeoMetaData?.metaDescription || page?.hero?.subTitle || "";

  const keywords = page?.SeoMetaData?.keywords || "";

  const canonical =
    `${baseUrl}${page?.SeoMetaData?.canonicalUrl}` ||
    `${baseUrl}/${slug || ""}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
  };
};
