import Image from "next/image";
import React from "react";
type AlwaysTransparentAccessibleProps = {
  imgPath: string;
  headingPrimary: string;
  headingSecondary: string;
  description: string;
};
const AlwaysTransparentAccessible = ({
  imgPath,
  headingPrimary,
  headingSecondary,
  description,
}: AlwaysTransparentAccessibleProps) => {
  return (
    <section className="mx-auto flex w-full max-w-[1053px] flex-col items-center justify-between gap-6 px-2 sm:flex-row sm:gap-10">
      <div className="relative w-full max-w-[429px] overflow-hidden">
        <Image
          className="object-cover"
          src={imgPath}
          alt="always-transparent"
          width={429}
          height={290}
        />
        <div className="white-gradient-img-overlay pointer-events-none absolute top-0 left-0 z-0 h-full w-full"></div>
      </div>
      <div className="w-full max-w-[500px] space-y-5">
        <div className="heading text-winterWay text-center sm:text-start">
          <h4>{headingPrimary}</h4>
          <h5>{headingSecondary}</h5>
        </div>
        <p className="text-wallStreet text-center text-sm font-medium sm:text-start md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AlwaysTransparentAccessible;
