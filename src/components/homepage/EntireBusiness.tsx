"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckIcon } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

interface EntireBusiness {
  title: string,
  sub_title: string,
  txt: string,
  btnTxt: string,
  url: string
}
interface TheEntireBusinessProps {
  entireBusiness: EntireBusiness[],
  ncc_text: string
}

const EntireBusiness: React.FC<TheEntireBusinessProps> = ({
  entireBusiness , ncc_text
})=> {
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
    <div className=" px-2 relative z-20">
      <div className="pt-[38px] md:pt-[44px] pb-7">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="text-[26px] text-center sm:text-[28px] md:text-[32px] font-extrabold text-decemberSky font-jakarta">
            {entireBusiness?.[0]?.title}
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="paragraph-text font-medium text-decemberSky font-jakarta text-center py-4">
            {entireBusiness?.[0]?.sub_title}
          </p>
        </TextAnimation>
        <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
          <form
            className="flex flex-col md:flex-row justify-center items-start gap-3"
            onSubmit={handleSubmit}
          >
            <div className="md:max-w-[414px] w-full">
              <input
                type="email"
                placeholder={entireBusiness?.[1]?.txt}
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
                  {ncc_text}
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-red-linear h-10 primary-btn flex items-center justify-center !min-w-[230px] w-full mx-auto md:mx-0 sm:!w-auto"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
               entireBusiness?.[2]?.btnTxt
              )}
            </button>
            <div className="md:hidden flex justify-center items-center w-full">
              <p className="flex items-center gap-2 pt-1">
                <span>
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold font-myriad text-white">
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
