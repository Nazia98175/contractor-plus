import React from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";

const ServiceContractorsMarquee = () => {
  return (
    <section className="relative z-20">
      <h3 className="section-heading gradient-white hidden text-center sm:block">
        Trusted by over 50,000 build and service contractors
      </h3>
      <h3 className="gradient-white mx-auto block max-w-[90%] text-center text-[26px] leading-[130%] font-bold sm:hidden">
        Trusted by over 50,000 build and service contractors
      </h3>
      {/* <Marquee speed={30} direction="right" pauseOnHover>
        {reviews?.data?.[0]?.reviews?.reviews?.map((review: any) => (
          <TrustedServiceCard
            key={review.id}
            review={review as Review}
            openModal={
              review.isModal
                ? () => openModal(review.videolink || "")
                : () => {}
            }
          />
        ))}
      </Marquee> */}
    </section>
  );
};

export default ServiceContractorsMarquee;
