import axiosInstance from "@/lib/axios";
import { Blog } from "@/types";

export const getBlogsDetails = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blog-detail?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};
export const getBlogsList = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blog-list?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};

export const getAllBlogs = async (
  locale: string,
  getAll: boolean = false,
): Promise<Blog[] | []> => {
  try {
    if (!getAll) {
      const response = await axiosInstance.get(
        `blogs?locale=${locale}&sort=postedOn:desc&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=shortDescription&populate[blogImg][fields][0]=url&populate[tags]=*`,
      );
      return response.data.data || [];
    }

    const firstPage = await axiosInstance.get(
      `blogs?locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&pagination[page]=1&pagination[pageSize]=100`,
    );

    const totalPages = firstPage.data.meta.pagination.pageCount;
    let allBlogs = firstPage.data.data || [];

    if (totalPages > 1) {
      const pagePromises = [];
      for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(
          axiosInstance.get(
            `blogs?locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&pagination[page]=${page}&pagination[pageSize]=100`,
          ),
        );
      }

      const responses = await Promise.all(pagePromises);
      responses.forEach((response) => {
        if (response.data.data) {
          allBlogs = [...allBlogs, ...response.data.data];
        }
      });
    }

    return allBlogs;
  } catch (error: any) {
    console.error("Error fetching common data:", error);
    throw new Error(error);
  }
};

export const getBlogDataBySlug = async (locale: string, blogUrl: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?locale=${locale}&filters[blogUrl][$eq]=${blogUrl}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};

export const searchBlogs = async (locale: string, query: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?filters[blogTitle][$containsi]=${query}&locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=shortDescription&populate[blogImg][fields][0]=url`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error searching blogs:", error);
    throw new Error("Failed to search blogs");
  }
};

export const getAllBlogsForSitemap = async (locale: string) => {
  try {
    let allBlogs: any[] = [];
    const pageSize = 100;

    // Fetch first page to get total count
    const firstResponse = await axiosInstance.get(
      `blogs?locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=postedOn&pagination[page]=1&pagination[pageSize]=${pageSize}`,
    );

    const { data: firstData, meta } = firstResponse.data;

    if (!firstData || firstData.length === 0) {
      return [];
    }

    allBlogs = [...firstData];

    const totalPages = meta?.pagination?.pageCount || 1;
    const totalBlogs = meta?.pagination?.total || firstData.length;

    // Fetch remaining pages if there are any
    if (totalPages > 1) {
      const pagePromises = [];

      for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(
          axiosInstance.get(
            `blogs?locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=postedOn&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
          ),
        );
      }

      console.log(
        `📦 Fetching remaining ${totalPages - 1} pages in parallel...`,
      );

      const responses = await Promise.all(pagePromises);

      responses.forEach((response, index) => {
        const { data } = response.data;
        if (data && data.length > 0) {
          allBlogs = [...allBlogs, ...data];
        }
      });
    }

    return allBlogs;
  } catch (error: any) {
    console.error("Error fetching blogs for sitemap:", error?.message || error);
    return []; // Return empty array instead of throwing to prevent sitemap from breaking
  }
};
