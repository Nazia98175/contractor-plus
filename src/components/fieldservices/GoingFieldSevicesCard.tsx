interface Step {
  icon: React.ReactNode;
  text: string;
}
interface Props {
  step: Step;
}
const GoingFieldSevicesCard: React.FC<Props> = ({ step }) => {
  return (
    <div className="relative z-10 mx-auto flex h-full w-full max-w-[300px] flex-col items-center gap-1 text-center md:w-[48%] lg:w-full">
      <div className="mb-2 w-7 sm:w-8">{step.icon}</div>
      <p className="text-winterWay line-clamp-3 max-w-[327px] text-center text-base font-medium sm:text-lg md:text-xl md:leading-[128%]">
        {step.text}
      </p>
    </div>
  );
};

export default GoingFieldSevicesCard;
