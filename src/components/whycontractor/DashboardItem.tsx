import GlowEffect from "./GlowEffect";
import { TickIcon } from "./Icons";

interface DashboardItemProps {
  title: string;
  index: number;
  animationOrder: number[];
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  title,
  index,
  animationOrder,
}) => {
  const getPositionClass = () => {
    if (index === 1) return "md:-translate-y-10 xl:-translate-y-20";
    if (index === 2) return "md:translate-y-10 xl:translate-y-20";
    return "";
  };

  return (
    <div
      data-animation-order={animationOrder.indexOf(index)}
      className={`dashboard-item relative flex h-fit flex-col items-center justify-center gap-[18px] px-3 text-center max-sm:py-3 sm:gap-3 md:mx-auto md:max-w-[280px] lg:max-w-[327px] xl:mt-[72px] ${getPositionClass()}`}
    >
      <p className="dashboard-title text-lg font-semibold text-white opacity-60 duration-300 md:text-base lg:text-lg">
        {title}
      </p>
      <span className="relative flex items-center justify-center py-10 md:py-0">
        <GlowEffect />
        <TickIcon className="tick-icon" />
      </span>
    </div>
  );
};

export default DashboardItem;