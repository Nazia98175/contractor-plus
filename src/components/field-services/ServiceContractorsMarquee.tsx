import React from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";

const ServiceContractorsMarquee = () => {
  return (
    <section className="">
      <h3 className="main-heading section-heading gradient-white text-center">
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
