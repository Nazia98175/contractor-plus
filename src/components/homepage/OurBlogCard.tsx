import { ResourceHomepage } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const OurBlogCard: FC<{ article: ResourceHomepage }> = ({ article }) => {
  return (
    <Link
      href={article.blogUrl}
      key={article.id}
      className="group block cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative h-[180px] md:h-[220px]">
          {/* Foreground main image */}
          <Image
            src={article.imageSrc}
            alt={article.title || "blog image"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="pointer-events-none z-20 object-contain select-none"
            priority={false}
          />
          {/* Background decorative image */}
          <Image
            src={article.backgroundImage}
            alt=""
            fill
            className="absolute bottom-0 left-0 z-0 max-h-[126px] object-bottom"
            sizes="100vw"
          />
          {/* <img
            src={article.backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-0 h-full max-h-[126px] w-auto object-cover"
          /> */}
        </div>

        <div className="relative mt-2 overflow-hidden px-2.5 py-6">
          <img
            className="absolute inset-0 z-0 h-full w-full"
            src="/images/webp/blog-angle2.webp"
            alt=""
            aria-hidden="true"
          />
          <h3 className="text-winterWay relative z-10 text-base leading-none font-extrabold md:text-lg">
            {article.title}
          </h3>
          <p className="text-secondary relative z-10 mt-2 max-w-[255px] text-xs font-medium">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OurBlogCard;
