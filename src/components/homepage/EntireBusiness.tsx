"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckIcon } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

interface EntireBusiness {
  title: string;
  sub_title: string;
  txt: string;
  btnTxt: string;
  url: string;
}
interface TheEntireBusinessProps {
  entireBusiness: EntireBusiness[];
  ncc_text: string;
}

const EntireBusiness: React.FC<TheEntireBusinessProps> = ({
  entireBusiness,
  ncc_text,
}) => {
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
    <div className="relative z-20 px-2">
      <div className="pt-[38px] pb-7 md:pt-[44px]">
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <h3 className="text-decemberSky font-jakarta text-center text-[26px] font-extrabold sm:text-[28px] md:text-[32px]">
            {entireBusiness?.[0]?.title}
          </h3>
        </CardReveal>
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <p className="paragraph-text text-decemberSky font-jakarta py-4 text-center font-medium">
            {entireBusiness?.[0]?.sub_title}
          </p>
        </CardReveal>
        <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
          <form
            className="flex flex-col items-start justify-center gap-3 md:flex-row"
            onSubmit={handleSubmit}
          >
            <div className="w-full md:max-w-[414px]">
              <input
                type="email"
                placeholder={entireBusiness?.[1]?.txt}
                required
                value={email}
                onChange={handleEmailChange}
                className="bg-lightBlack h-[40px] w-full rounded-[6px] border-b border-white px-2 text-white outline-none"
              />
              <p className="hidden items-center gap-2 pt-3 md:flex">
                <span>
                  <CheckIcon />
                </span>
                <span className="font-myriad text-sm font-semibold text-white">
                  {ncc_text}
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-red-linear primary-btn mx-auto flex h-10 w-full !min-w-[230px] items-center justify-center sm:!w-auto md:mx-0"
              disabled={loading}
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                entireBusiness?.[2]?.btnTxt
              )}
            </button>
            <div className="flex w-full items-center justify-center md:hidden">
              <p className="flex items-center gap-2 pt-1">
                <span>
                  <CheckIcon />
                </span>
                <span className="font-myriad text-sm font-semibold text-white">
                  {ncc_text}
                </span>
              </p>
            </div>
          </form>
        </CardReveal>
      </div>
    </div>
  );
};

export default EntireBusiness;
