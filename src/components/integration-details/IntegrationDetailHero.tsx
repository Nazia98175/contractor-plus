import { IntegrationItem } from "@/types";
import Image from "next/image";
import { ResizeIcon, UnionIcon } from "../common/Icons";

interface IntegrationDetailHeroProps {
  user: IntegrationItem;
}
const IntegrationDetailHero: React.FC<IntegrationDetailHeroProps> = ({
  user,
}) => {
  return (
    <section className="pb-[117px] relative flex h-full flex-col items-center justify-center pt-[144px]">
      <div className="mb-6 flex items-center justify-center gap-5 px-2 sm:gap-7 md:gap-12">
        <div className="integration-logo-bg rounded-full bg-center p-3 md:p-[18px]">
          <Image
            className="h-14 w-auto object-center sm:h-[72px]"
            src="/images/png/center-icon.png"
            width={72}
            height={72}
            alt={user.name}
            sizes={"51px"}
          />
        </div>
        <span className="h-16 w-16 sm:h-[92px] sm:w-[92px]">
          <UnionIcon />
        </span>
        <div className="integration-logo-bg rounded-full bg-center p-3 md:p-[18px]">
          <Image
            src={user.logo}
            width={72}
            height={72}
            alt={user.name}
            className="h-14 w-14 object-center sm:h-[72px] sm:w-[72px]"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full flex-col items-center justify-center px-4">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Contractor + {user.name}
        </h4>
        <h1 className="main-heading text-gradient-effect max-w-[840px] text-center">
          Unlocking Financial Simplicity With Paypal
        </h1>
        <p className="hero-description !text-ashGray mx-auto mt-3 max-w-[739px] text-center">
          Contractor+ proudly announces its collaboration with PayPal, a global
          icon in digital payments.
        </p>
      </div>

      <button className="my-5 text-[#505050] duration-300 hover:text-white sm:my-8 md:my-12">
        <ResizeIcon />
      </button>
    </section>
  );
};

export default IntegrationDetailHero;
