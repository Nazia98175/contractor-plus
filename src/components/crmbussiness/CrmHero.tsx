import Image from "next/image";
import { RedClipIcon, StartIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
const CrmHero = () => {
  return (
    <section className="relative">
      <div className="bg-kuroiBlack blur-[30px]  h-[100px] w-full hidden md:block bottom-[-10px] left-0 absolute z-40"></div>
      <span className="top-[112px] md:top-[-202px] right-[-194px] md:right-0 absolute pointer-events-none bubbling-animation">
        <RedClipIcon />
      </span>
      <div className="hidden lg:block absolute top-0 left-[70px] max-w-[90px] rotate-[-45deg] w-full h-[500px]  rounded-[10px] bg-gradient-to-r from-transparent via-[#6DDCFF] to-transparent opacity-15 blur-[48px] pointer-events-none mix-blend-plus-lighter"></div>
      <div className="max-w-[1050px] w-full mx-auto pt-[46px] sm:pt-20 lg:pt-[139px] xl:pt-[154px]">
        <div className="pt-10 max-w-[900px] mx-auto block px-5 md:hidden relative">
          <div className="switch-tool-bg h-[100px] w-full hidden md:block top-[-10px] left-0 absolute z-[-5]"></div>
          <Image
            width={900}
            height={616}
            className="w-full h-full object-cover"
            src="/images/webp/crm-hero.webp"
            alt="crm hero"
          />
        </div>
        <div className="px-2 pt-8 md:pt-0">
          <TextAnimation animateOnScroll={false} delay={0.2}>
            <h2 className="gradient-2 w-fit main-heading text-start sm:text-center mx-auto mb-[26px]">
              A{" "}
              <span className="bg-petal text-transparent bg-clip-text">
                field service CRM
              </span>{" "}
              that runs your business, not just stores contacts
            </h2>
          </TextAnimation>

          <TextAnimation animateOnScroll={false} delay={0.2}>
            <p className="text-decemberSky text-xs sm:text-sm md:text-base lg:text-lg font-semibold md:font-medium max-w-[826px] mx-auto mb-[26px] text-center">
              Built-in phone and SMS. AI receptionist. Property profiles. Full
              communication history. You no longer need 6 separate tools to do
              what Contractor+ CRM does in one.
            </p>
          </TextAnimation>
        </div>

        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={false}
        >
          <div className="flex flex-wrap-reverse justify-center items-center gap-5 w-full ">
            <div className="flex gap-4 md:pb-0 bg-black sm:bg-transparent w-full sm:w-fit justify-center py-6 sm:py-0">
              <div className="flex flex-col-reverse sm:flex-col gap-1">
                <Image
                  src="/images/svg/play-google.svg"
                  alt="google icon"
                  width={144}
                  height={36}
                />
                <div className="flex justify-center items-center">
                  {[...Array(5)].map((_, i) => (
                    <StartIcon key={i} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-col gap-1">
                <Image
                  src="/images/svg/Apple-Icon.svg"
                  alt="google icon"
                  width={144}
                  height={36}
                />
                <div className="flex justify-center items-center ">
                  {[...Array(5)].map((_, i) => (
                    <StartIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-fit px-2">
              <button className="bg-red-linear !h-[40px] primary-btn gap-2">
                <span className="lg:block hidden">Create Free Account</span>
                <span className="lg:hidden block">Download App</span>
              </button>
              <p className="text-wallStreet !font-semibold sm:text-secondary !text-xs font-myriad text-center pt-[6px]">
                No Credit Card Required
              </p>
            </div>
          </div>
        </CardReveal>

        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={false}
        >
          <div className="pt-9 max-w-[900px] mx-auto hidden md:block relative z-30">
            <Image
              className="w-full h-full object-cover"
              src="/images/webp/crm-hero.webp"
              width={900}
              height={616}
              alt="crm-hero"
            />
          </div>
        </CardReveal>
      </div>
    </section>
  );
};
export default CrmHero;
