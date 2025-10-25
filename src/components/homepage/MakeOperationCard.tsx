import CountUp from "react-countup";
import Copy from "../common/Copy";
import LottieAnimation from "./LottieAnimation";

const MakeOperationCard = ({
  item,
  index,
  icons,
  inView,
  setLottieRef,
}: {
  item: any;
  index: number;
  icons: any[];
  inView: boolean;
  setLottieRef: any;
}) => {
  return (
    <article
      id={`make-operation-card-${index}`}
      className="flex flex-col items-center gap-2 text-center"
    >
      <LottieAnimation
        ref={setLottieRef(index)}
        loop={true} // Changed to false since we'll control playback
        autoplay={true} // Changed to false since we'll control playback
        className="h-8 w-8 fill-white text-white"
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
        <Copy animateOnScroll={true}>
          <span className="ml-1 inline-block text-2xl">{item.title}</span>
        </Copy>
      </h3>
      <Copy animateOnScroll={true}>
        <p className="text-secondary countup-desc">{item.subTitle}</p>
      </Copy>
    </article>
  );
};

export default MakeOperationCard;
