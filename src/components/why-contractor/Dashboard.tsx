import Image from "next/image";
import { TickIcon } from "./Icons";

const Dashboard = () => {
  return (
    <div className="relative z-10 -mt-20 xl:mt-[-130px] bg-kuroiBlack">
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
        className="w-full max-md:hidden"
        src={"/images/png/dashboard-img.png"}
        alt="dashboard"
      />
      <div className="md:absolute md:top-[12%] md:left-1/2 z-10 mx-auto grid grid-cols-1 md:grid-cols-2 w-full max-w-[1100px] md:translate-x-[-50%] justify-between px-3 lg:h-[400px] max-md:gap-24 max-md:mt-10">
        <div className="flex flex-col items-center justify-center gap-3 px-3 h-fit md:max-w-[280px] lg:max-w-[327px] md:mx-auto text-center md:mt-12 lg:mt-[72px]">
          <p className="text-highRise text-lg md:text-base lg:text-lg font-semibold">
            One dashboard for office and field
          </p>
          <TickIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-4 h-fit md:max-w-[280px] lg:max-w-[327px] md:mx-auto text-center">
          <p className="text-highRise text-lg md:text-base lg:text-lg font-semibold">
            One source of truth
          </p>
          <TickIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-4 h-fit md:max-w-[280px] lg:max-w-[327px] md:mx-auto text-center md:mt-12 lg:mt-[72px]">
          <p className="text-highRise text-lg md:text-base lg:text-lg font-semibold">
            One solution that needs no workarounds
          </p>
          <TickIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-4 h-fit md:max-w-[280px] lg:max-w-[327px] md:mx-auto text-center">
          <p className="text-highRise text-lg md:text-base lg:text-lg font-semibold">
            One mobile app your team actually uses
          </p>
          <TickIcon />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
