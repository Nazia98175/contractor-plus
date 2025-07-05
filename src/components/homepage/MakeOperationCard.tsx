import CountUp from "react-countup";
import LottieAnimation from "../common/LottieAnimation";

const MakeOperationCard = ({
  item,
  index,
  icons,
  inView,
}: {
  item: any;
  index: number;
  icons: any[];
  inView: boolean;
}) => {
  return (
    <article className="flex flex-col items-center gap-2 text-center">
      <LottieAnimation
        className="xcc h-8 w-8 fill-white text-white"
        animationData={icons[index]}
      />

      <h3 className="countup-title text-white">
        {inView ? (
          <CountUp
            start={item.start}
            end={item.end}
            duration={5}
            suffix={item.suffix}
          />
        ) : (
          `${item.start}${item.suffix}`
        )}
        <span className="ml-1 inline-block text-2xl">{item.title}</span>
      </h3>

      <p className="text-secondary countup-desc">{item.subTitle}</p>
    </article>
  );
};

export default MakeOperationCard;
