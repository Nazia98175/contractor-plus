"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckIcon } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import CardRequiredButton from "../common/CardRequiredButton";

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
    <div className="relative z-10 px-2 pt-[38px] pb-7 md:py-11">
      <PrimaryAnimatedText
        className="text-decemberSky text-center text-[26px] font-extrabold sm:text-[28px] md:text-[32px]"
        delay={3000}
      >
        {entireBusiness?.[0]?.title}
      </PrimaryAnimatedText>
      <PrimaryAnimatedText
        className="paragraph-text text-decemberSky py-4 text-center font-medium"
        delay={3000}
      >
        {entireBusiness?.[0]?.sub_title}
      </PrimaryAnimatedText>
      <CardReveal staggerDelay={0.15} animationDuration={0.8} distance={50}>
        <form
          className="flex flex-col items-center justify-center gap-2.5 md:flex-row md:items-start"
          onSubmit={handleSubmit}
        >
          <div className="w-full sm:max-w-[414px]">
            <input
              type="email"
              placeholder={entireBusiness?.[1]?.txt}
              required
              value={email}
              onChange={handleEmailChange}
              className="bg-lightBlack h-[40px] w-full rounded-[6px] border-b border-white px-2 text-white outline-none"
            />
          </div>
          <div className="w-full md:w-fit">
            <button
              type="submit"
              className="bg-red-linear primary-btn mx-auto flex h-10 w-full !min-w-[230px] items-center justify-center md:mx-0 md:!w-auto"
              disabled={loading}
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                entireBusiness?.[2]?.btnTxt
              )}
            </button>
            <div className="mt-3 flex w-full items-center justify-center">
              <CardRequiredButton text={ncc_text} />
            </div>
          </div>
        </form>
      </CardReveal>
    </div>
  );
};

export default EntireBusiness;
