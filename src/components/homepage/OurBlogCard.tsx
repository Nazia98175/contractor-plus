import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurBlogCard = ({
  blogListMobile,
  article,
  index,
}: {
  blogListMobile: any;
  article: any;
  index: number;
}) => {
  return (
    <Link
      href={"#"}
      key={blogListMobile?.[index]?.id}
      className="card-shine-2 group relative h-fit w-full max-w-[406px] cursor-pointer rounded-2xl md:h-[400px]"
    >
      <img
        className="absolute top-16 right-0 w-full"
        style={{
          maxWidth: blogListMobile?.[index]?.imageWidth,
          objectFit: "contain",
        }}
        src={blogListMobile?.[index]?.imageSrc}
        alt="blog images"
      />
      <div className="polygon-bg relative flex h-[207px] w-[207px] flex-col justify-between overflow-hidden rounded-2xl py-6">
        {/* <Image
          fill={true}
          className="pointer-events-none absolute top-0 -left-1 z-10 h-full w-full object-contain"
          src="images/svg/blog-bg.svg"
          alt="blog angle"
        /> */}
        <Image
          width={160}
          height={126}
          src={blogListMobile?.[index]?.backgroundImage}
          alt={article.blogTitle}
          className="absolute bottom-0 left-0 z-10 h-full max-h-[126px] w-fit object-cover"
        />
      </div>
      <div className="relative mt-2 w-[346px] px-2.5 py-6">
        <Image
          fill={true}
          className="absolute top-0 left-0 z-0 h-full w-full"
          src="/images/webp/blog-angle2.webp"
          alt="blog angle"
        />
        <h3 className="text-winterWay font-jakarta group-hover: relative z-10 pb-2 text-base leading-none font-extrabold transition-all duration-300 ease-in-out md:text-lg">
          {article.blogTitle}
        </h3>
        <p className="text-secondary font-jakarta relative z-10 max-w-[255px] text-xs font-medium">
          {article.blogDescription}
        </p>
      </div>
    </Link>
  );
};

export default OurBlogCard;
