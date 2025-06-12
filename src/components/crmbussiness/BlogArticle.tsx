import React from "react";
import Image from "next/image";

interface Blog {
  id: string | number;
  image: string;
  title: string;
  category: string;
  date: string;
  descrition: string;
}

interface BlogArticleProps {
  blog: Blog;
  bgClass?: string;
  textClass?: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  blog,
  bgClass = "",
  textClass = "",
}) => {
  return (
    <article
      key={blog.id}
      className={`${bgClass} card-shine relative z-20 flex w-full flex-col items-start gap-4 rounded-xl p-2 sm:flex-row`}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={170}
        height={170}
        className="w-full rounded-md sm:max-w-[170px]"
      />
      <div className="flex-1 text-sm">
        <p className="font-jakarta text-secondary text-[10px] font-medium">
          {blog.category} | {blog.date}
        </p>
        <h3 className={`${textClass} font-jakarta text-base font-medium`}>
          {blog.title}
        </h3>
        <p className="text-wallStreet max-w-[300px] truncate pt-1 text-xs sm:max-w-[240px]">
          {blog.descrition}
        </p>
      </div>
    </article>
  );
};

export default BlogArticle;
