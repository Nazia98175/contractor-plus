import React from "react";

const OurReviews = () => {
  return (
    <section className="py-20">
      <div className="flex justify-between items-center gap-3">
        <h3 className="section-heading text-black">
          Here you can find our reviews
        </h3>
        <div className="flex">
          <img
            className="max-w-[135px] w-full"
            src="/images/svg/capterra-icon.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurReviews;
