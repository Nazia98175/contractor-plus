"use client";
import { useTranslations } from "next-intl";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CardReveal from "../common/CardReveal";
import { CheckIcon, FooterRedLineIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import CloudsAnimation from "../common/CloudsAnimation";
interface Props {
  data: any;
  ncc: string;
  createBtn: string;
}

const CrmSercive: React.FC<Props> = ({ data, ncc, createBtn }) => {
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
    <div className="relative z-20 w-full">
      <div className="relative overflow-hidden px-2 xl:overflow-visible">
        <FooterRedLineIcon className="pointer-events-none absolute top-[-236px] left-[-6px] rotate-[90deg] md:left-[209px]" />
        <div className="py-[75px]">
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
              className="mx-auto flex w-full max-w-[550px] flex-col items-start justify-center gap-3 md:max-w-[657px] md:flex-row"
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
                  className="bg-red-linear primary-btn flex h-10 !w-full !min-w-[230px] items-center justify-center md:mx-0 md:!w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  ) : (
                    `${createBtn}`
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
          </CardReveal>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-11%] left-0 z-50 flex h-[67%] w-full rotate-180">
        <CloudsAnimation
          className="-bottom-[11%]"
          imageClass="h-full z-20 !bottom-[-45px]"
          cloud1Class="bottom-0"
          cloud2Class="bottom-0"
        />
      </div>
    </div>
  );
};

export default CrmSercive;
