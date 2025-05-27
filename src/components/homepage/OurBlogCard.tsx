import Image from "next/image";
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
    <article
      key={blogListMobile?.[index]?.id}
      className="xl:pt-10  h-fit md:h-[400px] overflow-hidden w-full max-w-[406px] relative"
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
      <div className="py-6 relative overflow-hidden flex flex-col justify-between w-[207px] h-[207px]">
        <Image
          fill={true}
          className="absolute top-0 -left-1 w-full h-full z-10 pointer-events-none object-contain"
          src="images/svg/blog-bg.svg"
          alt="blog angle"
        />
        <Image
          width={160}
          height={200}
          src={blogListMobile?.[index]?.backgroundImage}
          alt={article.blogTitle}
          className="absolute h-full max-h-[160px] w-fit object-cover left-0 bottom-0 z-10"
        />
      </div>
      <div className="relative py-6 px-4 w-[346px] mt-2">
        <Image
          fill={true}
          className="absolute top-0 left-0 h-full w-full z-0"
          src="/images/webp/blog-angle2.webp"
          alt="blog angle"
        />
        <h3 className="text-base relative z-10 md:text-lg text-winterWay font-extrabold pb-1 font-jakarta">
          {article.blogTitle}
        </h3>
        <p className="text-secondary relative z-10 font-medium text-xs max-w-[255px] font-jakarta">
          {article.blogDescription}
        </p>
      </div>
    </article>
  );
};

export default OurBlogCard;
