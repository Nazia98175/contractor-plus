import React from "react";

const ServiceContractorsMarquee = () => {
  return (
    <section className="">
      <h3 className="main-heading section-heading gradient-white text-center">
        Trusted by over 50,000 build and service contractors
      </h3>
      {/* <div className="">
        <Marquee speed={30} direction="left" pauseOnHover className="py-5">
          {reviewsList?.map((review: any, index: any) => (
            <ReviewCard
              key={review.id}
              index={index}
              review={review as Review}
              openModal={
                review.isModal
                  ? () => openModal(review.videolink || "")
                  : () => {}
              }
            />
          ))}
        </Marquee>
      </div> */}
    </section>
  );
};

export default ServiceContractorsMarquee;
