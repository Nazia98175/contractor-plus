"use client";
import { useTranslations } from "next-intl";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CardReveal from "../common/CardReveal";
// import { CheckIcon, FooterRedLineIcon } from "../common/Icons";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";

const CrmSercive: React.FC = () => {
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
    <div className="px-2 relative overflow-hidden xl:overflow-visible">
      <span className="top-[-236px] left-[-6px] md:left-[209px] rotate-[90deg] absolute pointer-events-none">
        {/* <FooterRedLineIcon /> */}
      </span>
      <div className="py-[75px]">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading gradient-text text-center">
            This is what a field service CRM should have been all along
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="paragraph-style text-center mb-7 md:mb-10 lg:mb-14">
            Start using Contractor+ free. You won’t look back.
          </p>
        </TextAnimation>
        <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
          <form
            className="flex flex-col md:flex-row justify-center max-w-[550px] mx-auto md:max-w-[657px] w-full items-start gap-3"
            onSubmit={handleSubmit}
          >
            <div className="md:max-w-[414px] w-full">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                required
                value={email}
                onChange={handleEmailChange}
                className="bg-lightBlack border-white border-b rounded-[6px] text-white outline-none px-2 w-full h-[40px]"
              />
              <p className="hidden md:flex items-center gap-2 pt-3">
                <span>
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold font-myriad text-white">
                  No Credit Card Required
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-red-linear h-10 primary-btn flex items-center justify-center !min-w-[230px] !w-full md:mx-0 md:!w-auto"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Create Free Account"
              )}
            </button>
            <div className="md:hidden flex justify-center items-center w-full">
              <p className="flex items-center gap-2 pt-1">
                <span>
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold font-myriad text-white">
                  No Credit Card Required
                </span>
              </p>
            </div>
          </form>
        </CardReveal>
      </div>
    </div>
  );
};

export default CrmSercive;
