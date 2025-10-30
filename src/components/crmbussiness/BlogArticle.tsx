import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO, isValid } from "date-fns";

interface Blog {
  id?: string | number;
  blogTitle: string;
  date?: string;
  createdAt?: string;
  descrition: string;
  blogImg: { url: string }[];
  publishedAt?: string;
  blogUrl: string;
  shortDescription?: string;
  category: { text: string; id: number }[];
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
  const getDateLabel = () => {
    const raw = blog?.publishedAt ?? blog?.createdAt;
    if (!raw) return "";

    let d = parseISO(raw);
    if (!isValid(d)) {
      d = new Date(raw);
    }
    if (!isValid(d)) return "";

    return format(d, "dd MMM yyyy");
  };

  const dateLabel = getDateLabel();
  const imgUrl = blog?.blogImg?.[0]?.url || "";

  return (
    <Link
      href={`/blog/${blog?.blogUrl}`}
      key={blog?.id}
      className={`${bgClass} card-shine relative z-20 flex w-full flex-col items-start gap-4 rounded-xl p-2 md:flex-row`}
    >
      {!!imgUrl && (
        <Image
          width={170}
          height={170}
          src={imgUrl}
          alt={blog?.blogTitle}
          className="ios-image h-full max-h-[170px] min-h-[170px] w-full rounded-md object-cover md:max-h-[94px] md:min-h-[94px] md:max-w-[100px] lg:max-w-[170px]"
        />
      )}

      <div className="flex-1 text-sm">
        <p className="font-jakarta text-secondary text-[10px] font-medium">
          {blog?.category?.[0]?.text}
          {dateLabel ? ` | ${dateLabel}` : ""}
        </p>

        <h3
          className={`${textClass} font-jakarta line-clamp-2 text-base font-medium md:text-sm lg:text-base`}
        >
          {blog?.blogTitle}
        </h3>

        <p className="text-wallStreet line-clamp-1 max-w-[300px] truncate pt-1 text-xs sm:max-w-[240px]">
          {blog?.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default BlogArticle;
