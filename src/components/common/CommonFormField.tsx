"use client";
import { generateOneLinkUrl } from "@/app/lib/generateOneLinkUrl";
import { variantsForm } from "@/utils/getVariants";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ButtonLoader from "./ButtonLoader";
import CardRequiredButton from "./CardRequiredButton";
import CardReveal from "./CardReveal";
import Copy from "./Copy";

interface CommonFormFieldProps {
  title?: string;
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
  variant = "default",
  variantBtn = "default",
  className,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const pathname = usePathname();

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setLoading(true);

    // For desktop: include email parameter
    const oneLinkUrl = generateOneLinkUrl(pathname, { email });
    window.location.href = oneLinkUrl;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMobileClick = () => {
    // For mobile: no email parameter needed
    const oneLinkUrl = generateOneLinkUrl(pathname);
    window.location.href = oneLinkUrl;
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
          <p
            className={`paragraph-text mx-auto max-w-[1024px] text-center ${variantStyles.subtitle}`}
          >
            {subTitle}
          </p>
        </Copy>
        <CardReveal distance={50}>
          {/* Desktop Form - Hidden on Mobile */}
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
                {loading ? <ButtonLoader /> : createBtn}
              </button>

              <div className="hidden items-center gap-2 pt-3 md:flex">
                <CardRequiredButton variantBtn={variantBtn} text={ncc} />
              </div>
            </div>
            <div className="flex w-full items-center justify-center md:hidden">
              <CardRequiredButton text={ncc} variantBtn={variantBtn} />
            </div>
          </form>

          {/* Mobile Button - Direct to App Store */}
          <div className="flex flex-col items-center gap-3 sm:hidden">
            <button
              onClick={handleMobileClick}
              className="bg-red-linear primary-btn mx-auto h-10 !w-full max-w-[500px]"
              type="button"
            >
              {mobileBtn || "Get started FREE"}
            </button>

            {/* No credit card required text for mobile */}
            <div className="flex items-center justify-center">
              <CardRequiredButton text={ncc} variantBtn={variantBtn} />
            </div>
          </div>
        </CardReveal>
      </div>
    </>
  );
};

export default CommonFormField;
