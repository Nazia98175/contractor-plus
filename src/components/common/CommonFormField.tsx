"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TextAnimation from "./TextAnimation";
import CardReveal from "./CardReveal";
import { CheckIcon } from "./Icons";
import { variantsForm } from "@/utils/getVariants";

interface CommonFormFieldProps {
  title: string;
  sub_title: string;
  placeholder: string;
  createBtn: string;
  mobileBtn?: string;
  ncc: string;
  showTitle?: boolean;
  showDescription?: boolean;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const CommonFormField: React.FC<CommonFormFieldProps> = ({
  title,
  sub_title,
  placeholder,
  createBtn,
  mobileBtn,
  ncc,
  showTitle = true,
  showDescription = true,
  variant = "default",
  className,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getVariantStyles = () => {
    return variantsForm[variant];
  };
  const variantStyles = getVariantStyles();

  return (
    <>
      {showTitle && (
        // <TextAnimation animateOnScroll={false} delay={0.2}>
        <h3
          className={`mx-auto pb-2 text-center ${variantStyles.title} ${className || "max-w-[780px]"}`}
        >
          {title}
        </h3>
        // </TextAnimation>
      )}

      {showDescription && (
        <TextAnimation animateOnScroll={false} delay={0.2}>
          <p
            className={`paragraph-text mb-7 text-center md:mb-[34px] ${variantStyles.subtitle}`}
          >
            {sub_title}
          </p>
        </TextAnimation>
      )}
      <CardReveal distance={50}>
        <form
          className="mx-auto hidden w-full max-w-[550px] flex-col items-start justify-center gap-3 sm:flex md:max-w-[657px] md:flex-row"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:max-w-[414px]">
            <input
              type="email"
              placeholder={placeholder}
              required
              value={email}
              onChange={handleEmailChange}
              className={`h-[40px] w-full rounded-[6px] px-2 outline-none ${variantStyles.input}`}
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
                createBtn
              )}
            </button>

            <p className="hidden items-center gap-2 pt-3 md:flex">
              <CheckIcon />
              <span className="font-myriad text-sm font-semibold text-white">
                {ncc}
              </span>
            </p>
          </div>
          <div className="flex w-full items-center justify-center md:hidden">
            <p className="flex items-center gap-2 pt-1">
              <CheckIcon />
              <span className="font-myriad text-sm font-semibold text-white">
                {ncc}
              </span>
            </p>
          </div>
        </form>

        {/* Mobile Button */}
        <button
          onClick={handleSubmit}
          className="bg-red-linear primary-btn h-10 !w-full sm:!hidden md:mx-0 md:!w-auto"
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            mobileBtn
          )}
        </button>
      </CardReveal>
    </>
  );
};

export default CommonFormField;
