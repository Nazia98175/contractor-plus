"use client";
import { variantsForm } from "@/utils/getVariants";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CardRequiredButton from "./CardRequiredButton";
import CardReveal from "./CardReveal";
import Copy from "./Copy";


interface CommonFormFieldProps {
  title: string;
  subTitle: string;
  placeholder: string;
  createBtn: string;
  mobileBtn?: string;
  ncc: string;
  showTitle?: boolean;
  showDescription?: boolean;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "tertiary" | "white";
  variantBtn?: "default" | "primary" | "light" | "dark" | "muted";
}

const CommonFormField: React.FC<CommonFormFieldProps> = ({
  title,
  subTitle,
  placeholder,
  createBtn,
  mobileBtn,
  ncc,
  showTitle = true,
  showDescription = true,
  variant = "default",
  variantBtn = "default",
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
        <Copy animateOnScroll={true}>
          <h3
            className={`mx-auto pb-2 text-center ${variantStyles.title} ${className || "max-w-[780px]"}`}
          >
            {title}
          </h3>
        </Copy>
      )}

      <div className="flex flex-col gap-7 md:gap-[34px]">
        <Copy animateOnScroll={true}>
          <p className={`paragraph-text text-center ${variantStyles.subtitle}`}>
            {subTitle}
          </p>
        </Copy>
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

              <div className="hidden items-center gap-2 pt-3 md:flex">
                <CardRequiredButton variantBtn={variantBtn} text={ncc} />
              </div>
            </div>
            <div className="flex w-full items-center justify-center md:hidden">
              <CardRequiredButton text={ncc} variantBtn={variantBtn} />
            </div>
          </form>

          {/* Mobile Button */}
          <button
            onClick={handleSubmit}
            className="bg-red-linear primary-btn mx-auto h-10 !w-full max-w-[500px] sm:!hidden md:mx-0 md:!w-auto"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              mobileBtn
            )}
          </button>
        </CardReveal>
      </div>
    </>
  );
};

export default CommonFormField;
