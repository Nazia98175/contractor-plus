import Image from "next/image";
import Link from "next/link";

const PostCard = ({ blogData }: { blogData: any }) => {
  return (
    <article className="relative z-30 flex flex-col gap-5 sm:max-w-[90%] sm:flex-row md:max-w-[80%] xl:max-w-[967px]">
      <img
        src={`${blogData?.avatar ? blogData?.avatar?.url : "/images/webp/review-profile-7.webp"}`}
        alt="User Profile"
        className="h-[90px] w-[90] rounded-sm object-cover sm:rounded-full"
      />
      <div className="space-y-3.5">
        <h5 className="font-inter md:ext-2xl text-xl font-medium tracking-[0.1px]">
          <span className="text-lightBlack">{blogData?.authorName ?? ""}</span>{" "}
          -<span className="text-pantone3"> {blogData?.authorRole ?? ""}</span>
        </h5>
        <p className="text-wallStreet text-justify text-sm font-medium tracking-[0.1px] md:text-base">
          {blogData?.authorDescription ?? ""}
        </p>
        {blogData?.authorSocial && blogData?.authorSocial.length > 0 && (
          <div className="flex items-center gap-2.5">
            {blogData?.authorSocial?.map((item: any, index: number) => (
              <Link href={item?.url} key={index} className="block">
                <Image
                  src={`${item?.icon?.url}`}
                  alt={item?.icon?.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
