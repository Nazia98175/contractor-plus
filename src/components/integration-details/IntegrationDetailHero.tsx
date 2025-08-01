import { IntegrationItem } from "@/types";
import Image from "next/image";
import { UnionIcon } from "../common/Icons";
interface IntegrationDetailHeroProps {
  user: IntegrationItem;
}
const IntegrationDetailHero: React.FC<IntegrationDetailHeroProps> = ({
  user,
}) => {
  return (
    <section className="pb-[117px ] relative flex h-full flex-col items-center justify-center pt-[144px]">
      <div className="flex items-center justify-center gap-12">
        <div className="integration-logo-bg relative rounded-full p-[18px]">
          <Image
            src={user.logo}
            width={72}
            height={72}
            alt={user.name}
            className="h-[72px] w-[72px]"
          />
        </div>
        <UnionIcon />
        <div className="integration-logo-bg relative rounded-full p-[18px]">
          <Image
            src={user.logo}
            width={72}
            height={72}
            alt={user.name}
            className="h-[72px] w-[72px]"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full flex-col items-center justify-center">
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
    </section>
  );
};

export default IntegrationDetailHero;
