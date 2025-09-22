import Image from "next/image";
import React from "react";
type AlwaysTransparentAccessibleProps = {
  image?: any;
  title?: string;
  desc?: string;
};
const AlwaysTransparentAccessible = ({
  image,
  title,
  desc,
}: AlwaysTransparentAccessibleProps) => {
  return (
    <section className="mx-auto flex w-full max-w-[1053px] flex-col items-center justify-between gap-6 px-2 py-6 sm:flex-row sm:gap-10 md:py-10">
      <div className="relative w-full max-w-[429px] overflow-hidden">
        <Image
          className="object-cover"
          src={image.url || "images/webp/always-transparent.webp"}
          alt="always-transparent"
          width={429}
          height={290}
        />
        <div className="white-gradient-img-overlay pointer-events-none absolute top-0 left-0 z-0 h-full w-full"></div>
      </div>
      <div className="w-full max-w-[500px] space-y-5">
        <div className="heading text-winterWay text-center sm:text-start">
          <h4>{title}</h4>
        </div>
        <p className="text-wallStreet text-center text-sm font-medium sm:text-start md:text-base lg:text-lg">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default AlwaysTransparentAccessible;
