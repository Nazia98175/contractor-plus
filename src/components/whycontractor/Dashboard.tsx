"use client";

import DashboardItem from "./DashboardItem";
import VideoBackground from "./VideoBackground";
import { PropWayToWin } from "./WayToWin";
import { useDashboardAnimation } from "@/hooks/useDashboardAnimation";

const Dashboard: React.FC<PropWayToWin> = ({ connectedSystem }) => {
  const animationOrder = [1, 0, 3, 2];
  const { sectionRef, itemRefs } = useDashboardAnimation(animationOrder);

  return (
    <div
      ref={sectionRef}
      className="relative z-[0] -mt-10 bg-black lg:-mt-16 xl:mt-[-97px]"
    >
      <VideoBackground
        mobileVideoSrc="/video/dashboard-mobile.mp4"
        desktopVideoSrc="/video/dashboard-desktop.mp4"
      />

      <div className="z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-between px-3 max-md:mt-10 max-md:gap-24 md:absolute md:left-1/2 md:top-[12%] md:translate-x-[-50%] md:grid-cols-2 lg:h-[300px] xl:h-[400px]">
        {connectedSystem?.systemList?.map((item: any, i: number) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
          >
            <DashboardItem
              title={item.title}
              index={i}
              animationOrder={animationOrder}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;