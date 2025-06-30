// utils/getSeoMeta.ts
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



// import { Metadata } from "next";

// interface SeoMeta {
//   metaTitle?: string;
//   metaDescription?: string;
//   canonicalUrl?: string;
//   keywords?: string;
// }

// export const getSeoMeta = (seoMeta: SeoMeta | undefined): Metadata => {
//   return {
//     title: seoMeta?.metaTitle || "Default Title",
//     description: seoMeta?.metaDescription || "Default Description",
//     keywords: seoMeta?.keywords,
//     alternates: {
//       canonical: seoMeta?.canonicalUrl,
//     },
//   };
// };
