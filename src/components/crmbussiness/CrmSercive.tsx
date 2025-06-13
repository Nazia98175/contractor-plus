"use client";
import { useTranslations } from "next-intl";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CardReveal from "../common/CardReveal";
import { CheckIcon, FooterRedLineIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CloudsAnimation from "../common/CloudsAnimation";
import FreeAccountButton from "../common/FreeAccountButton";
interface Props {
  data: any;
  ncc: string;
  createBtn: string;
  mobileBtn: string;
}

const CrmSercive: React.FC<Props> = ({ data, ncc, createBtn, mobileBtn }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const t = useTranslations("entireBusiness");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <section className="relative z-20 overflow-hidden px-2 xl:overflow-visible">
      <div className="pt-[93px] pb-10 sm:py-[75px]">
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h3 className="section-heading text-decemberSky sub-heading pb-2 text-center">
            {data?.title}
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p className="paragraph-text text-secondary mb-7 text-center md:mb-[34px]">
            {data?.sub_title}
          </p>
        </TextAnimation>
        <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
          <form
            className="mx-auto hidden w-full max-w-[550px] flex-col items-start justify-center gap-3 sm:flex md:max-w-[657px] md:flex-row"
            onSubmit={handleSubmit}
          >
            <div className="w-full md:max-w-[414px]">
              <input
                type="email"
                placeholder={data?.placeholder}
                required
                value={email}
                onChange={handleEmailChange}
                className="bg-lightBlack h-[40px] w-full rounded-[6px] border-b border-white px-2 text-white outline-none"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center md:w-fit">
              <button
                type="submit"
                className="bg-red-linear primary-btn hidden h-10 !w-full !min-w-[230px] items-center justify-center sm:flex md:mx-0 md:!w-auto"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  `${createBtn}`
                )}
              </button>
              <button
                type="submit"
                className="bg-red-linear primary-btn flex h-10 !w-full !min-w-[230px] items-center justify-center sm:hidden md:mx-0 md:!w-auto"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  `${mobileBtn}`
                )}
              </button>
              <p className="hidden items-center gap-2 pt-3 md:flex">
                <span>
                  <CheckIcon />
                </span>
                <span className="font-myriad text-sm font-semibold text-white">
                  {ncc}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center justify-center md:hidden">
              <p className="flex items-center gap-2 pt-1">
                <span>
                  <CheckIcon />
                </span>
                <span className="font-myriad text-sm font-semibold text-white">
                  {ncc}
                </span>
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="bg-red-linear primary-btn flex h-10 !w-full !min-w-[230px] items-center justify-center sm:hidden md:mx-0 md:!w-auto"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              `${mobileBtn}`
            )}
          </button>
        </CardReveal>
      </div>
      <CloudsAnimation
        className="pointer-events-none absolute top-[-13%] -bottom-[11%] left-0 z-50 flex h-[67%] w-full rotate-180 sm:top-[-11%]"
        imageClass="h-[50%] z-20 !bottom-[-30px]"
        imageClassMobile="h-[50%] z-20 !bottom-[30px]"
        cloud1Class="md:bottom-0 !bottom-[47px] sm:bottom-[65px] h-[84px]"
        cloud2Class="bottom-0"
      />
    </section>
  );
};

export default CrmSercive;
