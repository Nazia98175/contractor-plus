import Image from "next/image";
import React from "react";
import Copy from "../common/Copy";

const FeatureCard: React.FC<FeatureCardProps> = ({ obj, index }) => {
  return (
    <article className="font-jakarta flex flex-col items-center justify-between rounded-lg bg-white p-3">
      <div>
        <Copy animateOnScroll={true} delay={0.1 * (index + 1)}>
          <h4 className="text-winterWay text-center text-xl font-bold sm:text-2xl">
            {obj.title}
          </h4>
        </Copy>
        <Copy animateOnScroll={true} delay={0.13 * (index + 1)}>
          <p className="text-wallStreet xs:text-sm mt-4 mb-5 max-w-[261px] text-center text-xs leading-normal sm:max-w-full md:text-base xl:text-lg">
            {obj.subTitle}
          </p>
        </Copy>
      </div>
      <div className="relative h-[184px] w-full">
        <Image
          src={obj.img}
          alt={obj.title || "Feature image"}
          fill
          className="xs:object-center ios-image object-contain"
          loading={index === 0 ? "eager" : "lazy"} 
          priority={index === 0} 
          quality={80} 
          sizes="(max-width: 640px) 300px, 
                 (max-width: 1024px) 400px, 
                 500px"
        />
      </div>
    </article>
  );
};

export default FeatureCard;
