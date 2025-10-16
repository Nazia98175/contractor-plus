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

export const generateSeoMetadataEvent = ({
  page,
  slug,
}: GenerateSeoMetadataOptions): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const title =
    page?.SeoMetaData?.metaTitle || (slug ? `Contractor+ ${slug}` : "");

  const description = page?.SeoMetaData?.metaDescription || "";

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

export const generateSeoMetaData = ({
  page,
  slug,
}: GenerateSeoMetadataOptions): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const title =
    page?.seoData?.metaTitle ||
    page?.seoMetaData?.metaTitle ||
    page?.SeoMetaData?.metaTitle ||
    page?.SeoData?.metaTitle ||
    (slug ? `Contractor+ ${slug}` : "");

  const description =
    page?.seoData?.metaDescription ||
    page?.seoMetaData?.metaDescription ||
    page?.SeoMetaData?.metaDescription ||
    page?.SeoData?.metaDescription ||
    "";

  const keywords =
    page?.seoData?.keywords ||
    page?.seoMetaData?.keywords ||
    page?.SeoMetaData?.keywords ||
    page?.SeoData?.keywords ||
    "";

  const openGraph = page?.seoData?.ogImage
    ? {
        images: [
          {
            url: page?.seoData?.ogImage?.url,
          },
        ],
      }
    : page?.seoMetaData?.ogImage
      ? {
          images: [
            {
              url: page?.seoMetaData?.ogImage?.url,
            },
          ],
        }
      : page?.SeoMetaData?.ogImage
        ? {
            images: [
              {
                url: page?.SeoMetaData?.ogImage?.url,
              },
            ],
          }
        : page?.SeoData?.ogImage
          ? { images: [{ url: page?.SeoData?.ogImage?.url }] }
          : undefined;
          
  const canonical = `${baseUrl}${page?.seoData?.canonicalUrl || page?.SeoMetaData?.canonicalUrl || page?.SeoData?.canonicalUrl || `${slug}`}`;

  return {
    title,
    description,
    keywords,
    openGraph: openGraph,
    alternates: {
      canonical,
    },
  };
};
