import Image from "next/image";
import { TickIcon } from "./Icons";

const Dashboard = () => {
  return (
    <div className="bg-kuroiBlack relative z-10 -mt-20 xl:mt-[-97px]">
      <Image
        unoptimized
        width={100}
        height={100}
        className="w-full md:hidden"
        src={"/images/png/dashboard-img-mobile.png"}
        alt="dashboard"
      />
      <Image
        unoptimized
        width={100}
        height={100}
        className="w-full max-md:hidden xl:h-[1300px] 2xl:h-[unset]"
        src={"/images/png/dashboard-img.png"}
        alt="dashboard"
      />
      <div className="z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-between px-3 max-md:mt-10 max-md:gap-24 md:absolute md:top-[12%] md:left-1/2 md:translate-x-[-50%] md:grid-cols-2 lg:h-[400px]">
        <div className="flex h-fit flex-col items-center justify-center gap-[18px] sm:gap-3 max-sm:py-3 px-3 text-center md:mx-auto md:mt-12 md:max-w-[280px] lg:mt-[72px] lg:max-w-[327px]">
          <p className="text-cyanBlue text-lg font-semibold md:text-base lg:text-lg">
            One dashboard for office and field
          </p>
          <TickIcon />
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-[18px] sm:gap-3 max-sm:py-3 px-3 text-center md:mx-auto md:max-w-[280px] lg:max-w-[327px]">
          <p className="text-cyanBlue text-lg font-semibold md:text-base lg:text-lg">
            One source of truth
          </p>
          <TickIcon />
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-[18px] sm:gap-3 max-sm:py-3 px-3 text-center md:mx-auto md:mt-12 md:max-w-[280px] lg:mt-[72px] lg:max-w-[327px]">
          <p className="text-cyanBlue text-lg font-semibold md:text-base lg:text-lg">
            One solution that needs no workarounds
          </p>
          <TickIcon />
        </div>
        <div className="flex h-fit flex-col items-center justify-center gap-[18px] sm:gap-3 max-sm:py-3 px-3 text-center md:mx-auto md:max-w-[280px] lg:max-w-[327px]">
          <p className="text-cyanBlue text-lg font-semibold md:text-base lg:text-lg">
            One mobile app your team actually uses
          </p>
          <TickIcon />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
