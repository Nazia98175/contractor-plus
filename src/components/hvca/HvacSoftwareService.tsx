"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent, FormEvent, useState } from "react";
import CardReveal from "../common/CardReveal";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";

const HvacSoftwareService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const t = useTranslations("entireBusiness");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
      console.log("Form submitted with email:", email);
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative z-10 w-full">
      <div className="relative overflow-hidden px-2 xl:overflow-visible">
        <div className="pb-[75px]">
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <h3 className="sub-heading mb-4 text-center !font-extrabold text-white">
              This is what HVAC software should have been all along
            </h3>
          </TextAnimation>
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <p className="paragraph-text text-decemberSky mb-7 text-center md:mb-8 lg:mb-9">
              Start using Contractor+ FREE. You won’t look back.
            </p>
          </TextAnimation>
          <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
            <form
              className="mx-auto flex w-full max-w-[550px] flex-col items-start justify-center gap-3 md:max-w-[657px] md:flex-row"
              onSubmit={handleSubmit}
            >
              <div className="w-full md:max-w-[414px]">
                <input
                  type="email"
                  placeholder={"Your Email"}
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="h-[40px] w-full rounded-[6px] bg-white px-2 text-[#ADB1B5] outline-none"
                />
                <p className="hidden items-center gap-2 pt-3 md:flex">
                  <span>
                    <CheckIcon />
                  </span>
                  <span className="font-myriad text-sm font-semibold text-white">
                    No Credit Card Required
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="bg-red-linear primary-btn flex h-10 !w-full !min-w-[230px] items-center justify-center md:mx-0 md:!w-auto"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  `${"Get started FREE"}`
                )}
              </button>
              <div className="flex w-full items-center justify-center md:hidden">
                <p className="flex items-center gap-2 pt-1">
                  <span>
                    <CheckIcon />
                  </span>
                  <span className="font-myriad text-sm font-semibold text-white">
                    No Credit Card Required
                  </span>
                </p>
              </div>
            </form>
          </CardReveal>
        </div>
      </div>
    </div>
  );
};

export default HvacSoftwareService;
