import Image from "next/image";
import Link from "next/link";

const OurBlogCard = ({
  blogListMobile,
  article,
  index,
}: {
  blogListMobile?: any;
  article: any;
  index: number;
}) => {
  return (
    <Link
      href={`${blogListMobile?.[index]?.blogUrl}`}
      key={blogListMobile?.[index]?.id}
      className="card-shine group relative z-20 h-fit w-full cursor-pointer overflow-hidden rounded-2xl"
    >
      <Image
        fill
        unoptimized
        className="absolute top-16 w-full"
        style={{
          maxWidth: blogListMobile?.[index]?.imageWidth,
          objectFit: "contain",
        }}
        src={blogListMobile?.[index]?.imageSrc}
        alt="blog images"
      />
      <div className="polygon-bg relative flex min-h-[207px] flex-col justify-between overflow-hidden rounded-2xl py-6">
        <img
          src={blogListMobile?.[index]?.backgroundImage}
          alt={article.blogTitle}
          className="absolute bottom-0 left-0 z-10 h-full max-h-[126px] w-fit object-cover"
        />
      </div>
      <div className="relative mt-2 overflow-hidden px-2.5 py-6">
        <img
          className="absolute top-0 left-0 z-0 h-full w-full"
          src="/images/webp/blog-angle2.webp"
          alt="blog angle"
        />
        <h3 className="text-winterWay relative z-10 pb-2 text-base leading-none font-extrabold transition-all duration-300 ease-in-out md:text-lg">
          {article?.blogTitle ?? ""}
        </h3>
        <p className="text-secondary relative z-10 max-w-[255px] text-xs font-medium">
          {article?.blogShortDescription ?? ""}
        </p>
      </div>
    </Link>
  );
};

export default OurBlogCard;
