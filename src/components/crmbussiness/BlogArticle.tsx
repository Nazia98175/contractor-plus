import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string | number;
  image: string;
  title: string;
  href: string;
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
    <Link
      href={blog.href}
      key={blog.id}
      className={`${bgClass} card-shine relative z-20 flex w-full flex-col items-start gap-4 rounded-xl p-2 md:flex-row`}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={170}
        height={170}
        className="h-full w-full rounded-md object-cover md:max-w-[100px] lg:max-w-[170px]"
      />
      <div className="flex-1 text-sm">
        <p className="font-jakarta text-secondary text-[10px] font-medium">
          {blog.category} | {blog.date}
        </p>
        <h3
          className={`${textClass} font-jakarta text-base font-medium md:text-sm lg:text-base`}
        >
          {blog.title}
        </h3>
        <p className="text-wallStreet max-w-[300px] truncate pt-1 text-xs sm:max-w-[240px]">
          {blog.descrition}
        </p>
      </div>
    </Link>
  );
};

export default BlogArticle;
