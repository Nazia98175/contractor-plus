import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard"; // Import the ReviewCard component
import { GroupStartIcon } from "../common/Icons";
import { OurReviewList } from "../common/Helper";

const OurReviews: React.FC = () => {
  return (
    <section className="pt-[15px] pb-[35px] md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 main-container">
        <h3 className="section-heading text-black text-center md:text-start">
          Here you can find our reviews
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <img
            className="max-w-[135px] w-full"
            src="/images/svg/capterra-icon.svg"
            alt="capterra icon"
          />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-winterWay text-sm font-bold font-jakarta">
                Excellent
              </h3>
              <p className="text-base font-extrabold text-[#439777] font-jakarta">
                4.9
              </p>
              <span>
                <GroupStartIcon />
              </span>
            </div>
            <p className="text-winterWay text-xs font-medium pt-1 font-jakarta text-center md:text-start">
              Based On 1,320 reviews
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left z-40  hidden lg:block blur-2xl"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right z-40  hidden lg:block blur-2xl"></div>
        {/* First Marquee going left */}
        <div className="pt-[35px] md:pt-[77px] flex">
          <Marquee
            direction="left"
            speed={40}
            autoFill={true}
            pauseOnHover={true}
          >
            {OurReviewList.slice(0, 3).map((review, index) => (
              <ReviewCard key={`left-${index}`} review={review} />
            ))}
          </Marquee>
        </div>

        {/* Second Marquee going right */}
        <div className="pt-[27px] hidden md:flex">
          <Marquee
            direction="right"
            speed={40}
            autoFill={true}
            pauseOnHover={true}
          >
            {OurReviewList.slice(3).map((review, index) => (
              <ReviewCard key={`right-${index}`} review={review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurReviews;
