interface Step {
  icon: React.ReactNode;
  text: string;
}
interface Props {
  step: Step;
}
const GoingFieldSevicesCard: React.FC<Props> = ({ step }) => {
  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center text-center md:w-[48%] lg:w-full">
      {/* <div className="absolute right-[10px] bottom-0 h-[84px] w-[160px] bg-[#f9f2f200] backdrop-blur-[0.6px]"></div> */}
      <div className="mb-2">{step.icon}</div>
      <p className="text-winterWay max-w-[327px] text-center text-base font-medium sm:text-lg md:text-xl md:leading-[116%]">
        {step.text}
      </p>
    </div>
  );
};

export default GoingFieldSevicesCard;
