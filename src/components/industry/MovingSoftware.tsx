import { TheSwitchingToolProps } from "@/components/crmbussiness/SwitchingTool";
import SoftwareCard from "./SoftwareCard";

const MovingSoftware: React.FC<TheSwitchingToolProps> = ({ switchingTool }) => {
  return (
    <section className="1xl:pb-[151px] hvac-software-bg relative z-30 mx-auto w-full max-w-[1354px] overflow-hidden px-2 pb-12 md:pb-20 lg:pb-[100px] xl:pb-[120px]">
      <h3 className="heading text-winterWay mx-auto hidden max-w-[90%] text-center !font-semibold sm:block">
        {switchingTool?.title}
      </h3>
      <h3 className="heading crm-gradient mx-auto block max-w-[90%] text-center !font-bold sm:hidden">
        {switchingTool?.title}
      </h3>
      <div className="1xl:mt-[91px] mt-5 flex flex-wrap justify-center gap-5 px-2 sm:mt-8 md:mt-12 md:px-6 lg:mt-16 lg:gap-8 xl:mt-20 xl:gap-[42px]">
        {switchingTool?.cardsDetail?.map((card: any, index: number) => (
          <SoftwareCard card={card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default MovingSoftware;
