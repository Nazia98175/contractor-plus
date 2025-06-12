import React from "react";
const CloudsAnimation = ({
  className = "",
  cloud1Class = "",
  cloud2Class = "",
  cloud3Class = "",
  cloud4Class = "",
  imageClass = "",
}: {
  className?: string;
  cloud1Class?: string;
  cloud2Class?: string;
  cloud3Class?: string;
  cloud4Class?: string;
  imageClass?: string;
}) => {
  return (
    <div
      className={`${className} clouds absolute right-0 -bottom-[9%] left-0 z-20 h-full overflow-hidden`}
    >
      <div
        className={`${cloud1Class} clouds-1 absolute right-0 bottom-[62px] left-0 h-12 w-full bg-[url("/images/png/pngwing.png")] bg-contain bg-repeat-x opacity-30 grayscale-75 sm:bottom-[50px] sm:h-16 md:bottom-[30px] md:h-20 lg:bottom-0`}
      ></div>
      <div
        className={`${cloud2Class} clouds-2 absolute right-0 bottom-[51px] left-0 h-16 w-full bg-[url("/images/png/pngwing-5.png")] bg-contain bg-repeat-x opacity-30 grayscale-75 sm:bottom-[60px] md:bottom-[50px] md:h-20 lg:bottom-0 lg:h-[140px]`}
      ></div>
      <div
        className={`${cloud3Class} clouds-2 absolute right-0 bottom-0 left-0 h-16 w-full bg-[url("/images/png/pngwing-2.png")] bg-contain bg-repeat-x opacity-30 grayscale-75 md:h-20 lg:h-[140px]`}
      ></div>
      <div
        className={`${cloud4Class} clouds-3 absolute right-0 bottom-0 left-0 w-full bg-[url("/images/png/pngwing-3.png")] bg-contain bg-repeat-x opacity-30 grayscale-75 sm:h-20 md:h-28 lg:h-[160px]`}
      ></div>
      <img
        className={`${imageClass} absolute bottom-4 left-0 h-28 w-full object-left-bottom`}
        src="/images/png/cloud-layer.png"
        alt="cloud-layer"
      />
    </div>
  );
};
export default CloudsAnimation;
