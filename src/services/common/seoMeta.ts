import axiosInstance from "@/lib/axios";
import { notFound } from "next/navigation";
import { AxiosResponse } from "axios";

interface SeoDataItem {
  seoMeta?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    canonicalUrl?: string;
  };
  hero?: {
    heroTitle?: string;
    subtitle?: string;
  };
  hero_title?: string;
}

// Instead of returning SeoDataItem | SeoDataItem[], we normalize it to always return SeoDataItem
/**
 * Fetches SEO data for any CMS page type.
 * @param collectionType - API collection name (e.g., 'homepage', 'services-pages')
 * @param locale - locale string (e.g., 'en', 'fr', 'es')
 * @param slug - (optional) page slug or title used for filtering (if dynamic)
 * @param query - (optional) populate query string for seoMeta, hero, etc.
 */
export const getSeoData = async (
  collectionType: string,
  locale: string,
  slug?: string,
  query: string = "&populate=*"
): Promise<SeoDataItem | null> => {
  const url =
    collectionType === "services-pages"
      ? `${collectionType}?filters[title][$eq]=${slug}&locale=${locale}${query}`
      : `${collectionType}?locale=${locale}${query}`;

  try {
    const res: AxiosResponse<{ data?: SeoDataItem | SeoDataItem[] }> = await axiosInstance.get(url);
    const { data } = res.data;

    if (!data) return null;

    // ✅ Normalize: Always return a single object
    if (Array.isArray(data)) {
      return data?.[0] ?? null;
    }

    return data;
  } catch (error: any) {
    console.error(`Failed to fetch SEO data for ${slug} from ${collectionType}:`, error);
    if (error.response?.status === 404) {
      return notFound();
    }
    throw new Error(error);
  }
};
