import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GreenDotIcon2, RedCrossIcon, Slidericon } from "../common/Icons";
import { Navigation, Pagination } from "swiper/modules";
interface RunWithContractorMobileProps {
  run_contractor: { ourProductNote: string; competitorsNote: string  }[];
  your: string;
  their: string;
}

const RunWithContractorMobile: React.FC<RunWithContractorMobileProps> = ({
  run_contractor, your , their
}) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        }}
        pagination={{
          el: ".swiper-pagination-real-time-2",
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
      >
        {run_contractor.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto grid w-fit grid-cols-1 items-center gap-3 text-center">
              {/* Their way */}
              <div>
                <p className="font-myriad text-highRise pb-2 text-center text-sm font-semibold sm:text-lg md:text-xl">
                 {their}
                </p>
                <div className="their-way flex items-center gap-3 rounded-[10px] px-3 py-2">
                  <span>
                    {/* Red Cross Icon */}
                    <RedCrossIcon />
                  </span>
                  <p className="text-sangoPink text-start text-sm font-medium">
                    {item.competitorsNote}
                  </p>
                </div>
              </div>

              {/* Your way */}
              <div>
                <p className="font-myriad text-oldMoney pb-2 text-center text-base font-semibold sm:text-lg md:text-xl">
              {your}
                </p>
                <div className="your-way flex items-center gap-2 rounded-[10px] px-3 py-2">
                  <span>
                    {/* Green Dot Icon */}
                    <GreenDotIcon2 />
                  </span>
                  <p className="text-majorelleGardens text-start text-sm font-bold">
                    {item.ourProductNote}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative mx-auto mt-3 flex w-full max-w-[158px] items-center justify-between gap-3">
        <div className="swiper-button-prev2 !relative !right-0 !bottom-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 after:hidden">
          <Slidericon />
        </div>

        <div className="swiper-pagination-real-time-2 relative left-0 flex translate-x-0 items-center justify-center gap-1" />

        <div className="swiper-button-next2 !relative !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 rotate-180 after:hidden">
          <Slidericon />
        </div>
      </div>
    </>
  );
};

export default RunWithContractorMobile;
