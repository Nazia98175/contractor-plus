import Image from "next/image";

const IntegrationDetailHero = ({ user }) => {
  return (
    <section className="relative flex h-full min-h-[60vh] flex-col items-center justify-center">
      <div className="absolute inset-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border-[8px] before:border-[rgba(12,13,17,0.02)] before:blur-[40px] before:backdrop-blur-3xl"></div>
      <div className="integration-logo-bg relative rounded-full p-[18px]">
        <div className="relative h-[72px] w-[72px] rounded-full border-[8px] border-transparent">
          <Image src={user.logo} width={72} height={72} alt={user.name} />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[739px] flex-col items-center justify-center">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Contractor + {user.name}
        </h4>
        <h1 className="main-heading text-gradient-effect text-center">
          Unlocking Financial Simplicity With Paypal
        </h1>
        <p className="hero-description !text-ashGray mt-3 text-center">
          Contractor+ proudly announces its collaboration with PayPal, a global
          icon in digital payments.
        </p>
      </div>
    </section>
  );
};

export default IntegrationDetailHero;
