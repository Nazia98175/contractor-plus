import Image from "next/image";
import { RedClipIcon, StartIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
interface TheHeroProps {
  hero: any;
}
const CrmHero: React.FC<TheHeroProps> = ({ hero }) => {
  return (
    <section className="relative z-10">
      <div className="bg-kuroiBlack absolute bottom-[-10px] left-0 z-40 hidden h-[100px] w-full blur-[30px] md:block"></div>
      <span className="bubbling-animation pointer-events-none absolute top-[112px] right-[-194px] md:top-[-202px] md:right-0">
        <RedClipIcon />
      </span>
      <div className="via-athenaBlue pointer-events-none absolute top-0 left-[70px] hidden h-[500px] w-full max-w-[90px] rotate-[-45deg] rounded-[10px] bg-gradient-to-r from-transparent to-transparent opacity-15 mix-blend-plus-lighter blur-[48px] lg:block"></div>
      <div className="mx-auto w-full max-w-[1050px] pt-[46px] sm:pt-20 lg:pt-[139px] xl:pt-[154px]">
        <div className="relative mx-auto block max-w-[900px] px-5 pt-10 md:hidden">
          <div className="switch-tool-bg absolute top-[-10px] left-0 z-[-5] hidden h-[100px] w-full md:block"></div>
          <Image
            width={900}
            height={616}
            className="h-full w-full object-cover"
            src="/images/webp/crm-hero.webp"
            alt="crm hero"
          />
        </div>
        <div className="px-2 pt-8 md:pt-0">
          <TextAnimation animateOnScroll={false} delay={3}>
            <h2 className="gradient-2 main-heading mx-auto mb-2 w-fit text-start sm:text-center md:mb-4 lg:mb-[26px]">
              {hero?.heroTitle}
            </h2>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={3}>
            <p className="text-decemberSky mx-auto mb-4 max-w-[826px] text-center text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:mb-[26px] lg:text-lg">
              {hero?.heroDescription}
            </p>
          </TextAnimation>
        </div>
        <CardReveal
          staggerDelay={0.2}
          animationDuration={0.8}
          distance={50}
          delay={3.1}
          animateOnScroll={false}
          className="flex w-full flex-wrap-reverse items-center justify-center gap-4 sm:gap-5"
        >
          <div className="flex flex-col-reverse gap-1 sm:flex-col">
            <Image
              src="/images/webp/play-google.webp"
              alt="google icon"
              width={144}
              height={36}
            />
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="max-w-7 md:max-w-5">
                  <StartIcon key={i} />
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col-reverse gap-1 sm:flex-col">
            <Image
              src="/images/svg/Apple-Icon.svg"
              alt="google icon"
              width={144}
              height={36}
            />
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <span className="max-w-7 md:max-w-5">
                  <StartIcon key={i} />
                </span>
              ))}
            </div>
          </div>
          <div className="w-full px-2 sm:w-fit">
            <button className="bg-red-linear primary-btn !h-[40px] gap-2">
              <span className="hidden lg:block">{hero?.createBtn}</span>
              <span className="block lg:hidden">Download App</span>
            </button>
            <p className="text-wallStreet sm:text-secondary font-myriad hidden pt-[6px] text-center !text-xs !font-semibold sm:block">
              {hero?.ncc_txt}
            </p>
          </div>
        </CardReveal>
        <div className="relative z-30 mx-auto hidden max-w-[900px] pt-9 md:block">
          <Image
            className="h-full w-full object-cover"
            src="/images/webp/crm-hero.webp"
            width={900}
            height={616}
            alt="crm-hero"
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default CrmHero;
