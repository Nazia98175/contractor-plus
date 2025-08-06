"use client";
import { useState } from "react";
import { articles } from "../common/Helper";
import BlogCard from "./BlogCard";
import { handleClickProps } from "@/types";

const BlogArticle: React.FC<handleClickProps> = ({ handleClick }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 34; // You can adjust this number

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pb-6 sm:mt-10 lg:mt-12 xl:mt-14">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold lg:pb-6 xl:pb-8">
        Most popular articles
      </h2>

      {/* Dummy articles */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 13).map((article, index) => (
          <div key={index}>
            <BlogCard
              article={article}
              onClick={() => handleClick(article.title)}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="border-brightGrey relative mt-6 flex w-full items-center justify-center gap-3 border-t pt-5">
        <div className="relative mx-auto flex items-center justify-center gap-3">
          {/* Page 1 */}
          <p
            className={`cursor-pointer px-2 ${
              currentPage === 0 ? "font-bold text-black" : "text-gray-500"
            }`}
            onClick={() => handlePageClick(0)}
          >
            1
          </p>

          {/* Page 2 */}
          <p
            className={`cursor-pointer px-2 ${
              currentPage === 1 ? "font-bold text-black" : "text-gray-500"
            } `}
            onClick={() => handlePageClick(1)}
          >
            2
          </p>

          {/* Ellipsis (non-clickable) */}
          <p className="text-gray-500">...</p>

          {/* Last Page */}
          <p
            className={`cursor-pointer px-2 ${
              currentPage === totalPages - 1
                ? "font-bold text-black"
                : "text-gray-500"
            }`}
            onClick={() => handlePageClick(totalPages - 1)}
          >
            {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
