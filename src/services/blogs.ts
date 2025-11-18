import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getBlogs = async (
  locale: string,
  query: string,
): Promise<HomePageResponse | null> => {
  const url = `blogs?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch blogs:", error?.response?.data);
    return notFound();
  }
};

export const getBlogsByCategory = async (
  locale: string,
  categoryText: string,
  isLimit: boolean = true,
): Promise<HomePageResponse | null> => {
  try {
    const keywords = categoryText.split("-");
    const allResults: any[] = [];

    for (const kw of keywords) {
      const url = `blogs?filters[tags][list][$containsi]=${kw}&locale=${locale}&publicationState=live&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=shortDescription&fields[3]=postedOn&fields[4]=publishedAt&populate[blogImg][fields][0]=url${isLimit ? "&pagination[limit]=3" : ""}`;
      const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
      if (res.data?.data?.length) {
        allResults.push(...res.data.data);
      }
    }

    const uniqueBlogs = Array.from(
      new Map(allResults.map((b) => [b.id, b])).values(),
    );

    return { data: uniqueBlogs } as HomePageResponse;
  } catch (error: any) {
    console.log("Failed to fetch blogs by category:", error?.response?.data);
    return notFound();
  }
};
