"use client";
import { featureKeys } from "../common/Helper";
import SliderLayout from "../common/SliderLayout";
import FeatureCard from "./FeatureCard";

const Features = ({ features }: { features: any }) => {
  const featureData = featureKeys.map((item, index) => ({
    title: features?.[index]?.title,
    subTitle: features?.[index]?.subTitle,
    img: item.img,
  }));

  return (
    <section className="relative z-20 bg-white pt-11 pb-6 sm:px-2 lg:pb-[46px] xl:pt-[45px]">
      <div className="mx-auto w-full max-w-[1338px] px-2">
        <div className="bg-doctor py-4 sm:rounded-4xl md:py-6 lg:rounded-[32px] lg:py-8 xl:p-9">
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {featureData.map((obj, index) => (
              <FeatureCard obj={obj} index={index} key={index} />
            ))}
          </div>
          <div className="blog-post lg:hidden">
            <SliderLayout
              autoplay
              pagination
              navigation
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 12 },
                520: { slidesPerView: 1.5, spaceBetween: 12 },
                640: { slidesPerView: 2, spaceBetween: 14 },
                768: { slidesPerView: 2.6, spaceBetween: 16 },
              }}
            >
              {featureData.map((obj, index) => (
                <FeatureCard obj={obj} index={index} key={index} />
              ))}
            </SliderLayout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
