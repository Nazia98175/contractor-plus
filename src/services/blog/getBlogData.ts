import axiosInstance from "@/lib/axios";

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

export const getAllBlogs = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?locale=${locale}&sort=postedOn:desc&populate[blogImg][populate]=*&populate[tags][populate]=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching common data:", error);
    throw new Error(error);
  }
};

export const getBlogDataBySlug = async (locale: string, blogUrl: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?locale=${locale}&populate=*&filters[blogUrl][$eq]=${blogUrl}`,
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
      `blogs?filters[blogTitle][$containsi]=${query}&locale=${locale}&populate=*`,
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

    console.log(`🔍 Fetching blogs for sitemap (locale: ${locale})`);

    // Fetch first page to get total count
    const firstResponse = await axiosInstance.get(
      `blogs?locale=${locale}&fields[0]=blogTitle&fields[1]=blogUrl&fields[2]=postedOn&pagination[page]=1&pagination[pageSize]=${pageSize}`,
    );

    const { data: firstData, meta } = firstResponse.data;

    if (!firstData || firstData.length === 0) {
      console.log("⚠️ No blogs found");
      return [];
    }

    allBlogs = [...firstData];

    const totalPages = meta?.pagination?.pageCount || 1;
    const totalBlogs = meta?.pagination?.total || firstData.length;

    console.log(`📊 Found ${totalBlogs} blogs across ${totalPages} pages`);

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
          console.log(`✅ Page ${index + 2}: ${data.length} blogs`);
        }
      });
    }

    console.log(`✅ Total blogs fetched for sitemap: ${allBlogs.length}`);
    console.log(allBlogs, "allBlogs");

    return allBlogs;
  } catch (error: any) {
    console.error("Error fetching blogs for sitemap:", error?.message || error);
    return []; // Return empty array instead of throwing to prevent sitemap from breaking
  }
};
