"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent, FormEvent, useState } from "react";
import CardReveal from "../common/CardReveal";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Link from "next/link";
interface HvacSoftwareServiceProps {
  data: any;
  ncc: string;
  createBtn: string;
  mobileBtn: string;
  descColorClass?: string;
  titleClass?: string;
  inputClass?: string;
  ccClass?: string;
  mobileBtnHref: string;
}

const HvacSoftwareService: React.FC<HvacSoftwareServiceProps> = ({
  descColorClass = "text-decemberSky",
  ncc,
  createBtn,
  mobileBtn,
  data,
  titleClass,
  inputClass,
  ccClass,
  mobileBtnHref,
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
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative z-10 w-full pt-8 lg:pt-[90px]">
      <div className="relative overflow-hidden px-2 xl:overflow-visible">
        <div className="pb-[47px] md:pb-[75px]">
          <TextAnimation animateOnScroll={false} delay={0.2}>
            <h3
              className={`sub-heading mx-auto mb-4 max-w-[840px] text-center font-bold text-white ${titleClass}`}
            >
              {data?.title}
            </h3>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.2}>
            <p
              className={`${descColorClass} mb-7 text-center text-base font-medium md:mb-8 lg:mb-9 lg:text-lg xl:text-xl xl:!leading-[124%]`}
            >
              {data?.sub_title}
            </p>
          </TextAnimation>
          <CardReveal>
            <form
              className="mx-auto flex w-full max-w-[550px] flex-col items-start justify-center gap-3 md:max-w-[657px] md:flex-row"
              onSubmit={handleSubmit}
            >
              <div className={`w-full md:max-w-[414px] ${inputClass}`}>
                <input
                  type="email"
                  placeholder={data?.placeholder}
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="h-[40px] w-full rounded-[6px] bg-white px-2 outline-none placeholder:text-[#ADB1B5]"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center md:w-fit">
                {mobileBtn && mobileBtnHref && (
                  <Link
                    href={mobileBtnHref || "/default-path"}
                    className="w-full max-sm:inline-block sm:!hidden"
                  >
                    <button
                      type="button"
                      className="bg-red-linear primary-btn flex h-10 w-full !min-w-[230px] items-center justify-center md:mx-0 md:!w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      ) : (
                        `${mobileBtn}`
                      )}
                    </button>
                  </Link>
                )}
                <button
                  type="submit"
                  className={`bg-red-linear primary-btn flex h-10 !w-full !min-w-[230px] items-center justify-center md:mx-0 md:!w-auto ${mobileBtn && "max-sm:!hidden"}`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  ) : (
                    `${createBtn}`
                  )}
                </button>
                <p className="hidden items-center gap-2 pt-3 md:flex">
                  <span className="font-myriad text-sm font-semibold text-white">
                    {ncc}
                  </span>
                </p>
              </div>
              <div
                className={`flex w-full items-center justify-center md:hidden ${ccClass}`}
              >
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
    </div>
  );
};

export default HvacSoftwareService;
