"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogArticle: React.FC<{ blogsList: any; blogsData: any[] }> = ({
  blogsList,
  blogsData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Blogs to show in each page

  const totalPages = Math.ceil(blogsData.length / pageSize);

  const paginatedBlogs = blogsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pb-6 sm:mt-10 lg:mt-12 xl:mt-14">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold lg:pb-6 xl:pb-8">
        {blogsList?.popularTitle ?? ""}
      </h2>

      {/* Articles */}
      {paginatedBlogs.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedBlogs.map((article) => (
            <div key={article.id ?? article.documentId ?? article.blogUrl}>
              <BlogCard article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
          <p className="text-alice text-sm">
            No blogs found. Try a different search or category.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="border-brightGrey relative mt-6 flex w-full items-center justify-center gap-3 border-t pt-5">
          <div className="relative mx-auto flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <p
                key={index}
                className={`cursor-pointer px-2 ${
                  currentPage === index + 1
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
