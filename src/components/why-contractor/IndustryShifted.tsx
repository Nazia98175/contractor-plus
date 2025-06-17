import React, { JSX } from "react";
import TextAnimation from "../common/TextAnimation";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";

interface IndustryItem {
  id: number;
  icon: JSX.Element;
  text: string;
}

const IndustryShifted: React.FC = () => {
  const industryItems: IndustryItem[] = [
    {
      id: 1,
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6667 9.15618V13.8393C26.6667 14.0703 26.5992 14.296 26.4727 14.488C26.3463 14.68 26.1666 14.8297 25.9564 14.918C25.7461 15.0064 25.5148 15.0295 25.2916 14.9845C25.0684 14.9395 24.8634 14.8283 24.7025 14.665L23.2146 13.1549L17.1239 19.3364C16.9081 19.5554 16.6155 19.6784 16.3104 19.6784C16.0053 19.6784 15.7126 19.5554 15.4968 19.3364L11.7076 15.4907L5.61686 21.6722C5.39984 21.8849 5.10917 22.0026 4.80746 22C4.50574 21.9973 4.21713 21.8745 4.00378 21.6579C3.79043 21.4414 3.66941 21.1485 3.66679 20.8423C3.66417 20.5361 3.78015 20.2411 3.98977 20.0208L10.894 13.0136C11.1098 12.7947 11.4024 12.6717 11.7076 12.6717C12.0127 12.6717 12.3053 12.7947 12.5211 13.0136L16.3104 16.8594L21.5875 11.5036L20.0997 9.99354C19.9388 9.83022 19.8292 9.62214 19.7848 9.39563C19.7405 9.16912 19.7633 8.93434 19.8503 8.72098C19.9374 8.50761 20.0849 8.32523 20.274 8.1969C20.4632 8.06857 20.6857 8.00005 20.9132 8H25.516L25.5713 8.00117C25.8651 8.01464 26.1426 8.14212 26.3465 8.35728C26.5503 8.57244 26.665 8.85769 26.6667 9.15618Z"
            fill="url(#paint0_linear_2437_2871)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2437_2871"
              x1="15.1667"
              y1="18.5"
              x2="15.1667"
              y2="-20.2652"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A9A9A9" />
              <stop offset="0.55" stopColor="#0C1711" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Labor costs are up",
    },
    {
      id: 2,
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 16.875L2.8125 15H9.375L8.625 13.125H2.5L1.5625 11.25H11.3125L10.5625 9.375H1.3875L0.3125 7.5H5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H22.5V10H26.25L30 15V21.25H27.5C27.5 22.2446 27.1049 23.1984 26.4017 23.9017C25.6984 24.6049 24.7446 25 23.75 25C22.7554 25 21.8016 24.6049 21.0983 23.9017C20.3951 23.1984 20 22.2446 20 21.25H15C15 22.2446 14.6049 23.1984 13.9017 23.9017C13.1984 24.6049 12.2446 25 11.25 25C10.2554 25 9.30161 24.6049 8.59835 23.9017C7.89509 23.1984 7.5 22.2446 7.5 21.25H5V16.875H3.75ZM23.75 23.125C24.2473 23.125 24.7242 22.9275 25.0758 22.5758C25.4275 22.2242 25.625 21.7473 25.625 21.25C25.625 20.7527 25.4275 20.2758 25.0758 19.9242C24.7242 19.5725 24.2473 19.375 23.75 19.375C23.2527 19.375 22.7758 19.5725 22.4242 19.9242C22.0725 20.2758 21.875 20.7527 21.875 21.25C21.875 21.7473 22.0725 22.2242 22.4242 22.5758C22.7758 22.9275 23.2527 23.125 23.75 23.125ZM25.625 11.875H22.5V15H28.075L25.625 11.875ZM11.25 23.125C11.7473 23.125 12.2242 22.9275 12.5758 22.5758C12.9275 22.2242 13.125 21.7473 13.125 21.25C13.125 20.7527 12.9275 20.2758 12.5758 19.9242C12.2242 19.5725 11.7473 19.375 11.25 19.375C10.7527 19.375 10.2758 19.5725 9.92417 19.9242C9.57254 20.2758 9.375 20.7527 9.375 21.25C9.375 21.7473 9.57254 22.2242 9.92417 22.5758C10.2758 22.9275 10.7527 23.125 11.25 23.125Z"
            fill="url(#paint0_linear_2437_2877)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2437_2877"
              x1="15.1562"
              y1="10"
              x2="15.1562"
              y2="65.3788"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A9A9A9" />
              <stop offset="0.55" stopColor="#0C1711" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Customers demand speed",
    },
    {
      id: 3,
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2942 1.1026L20.3961 4.95514L26.748 3.69344L25.2941 1.10254L25.2942 1.1026ZM18.1824 1.15568L16.9243 6.51701L21.5954 1.15568H18.1824ZM8.76886 1.41379L8.64071 1.78C7.86511 3.98061 7.39185 6.40902 7.39185 8.69957C7.39185 11.8516 8.27274 14.1595 9.74849 15.6648C10.857 16.7957 12.2789 17.4517 13.8372 17.7083C14.841 20.5287 14.7852 23.6304 13.6924 26.4259C11.9011 26.7254 10.1612 27.4977 8.63333 28.7421H22.1794C20.6524 27.4981 18.9128 26.7275 17.1222 26.4276C16.0296 23.6336 15.9737 20.5332 16.9757 17.7137C18.545 17.4613 19.975 16.8044 21.0846 15.6647C21.8665 14.8616 22.4777 13.8303 22.879 12.5648L17.9132 8.36617L14.89 8.30213L17.946 15.3114L15.0055 10.9938L10.3674 14.7713L14.1064 9.67721L13.1525 8.27652L9.99751 7.32988L9.42253 7.15773L9.64776 6.59934L11.7571 1.41379H8.76886ZM12.9382 1.41379L10.8892 6.45285L13.7347 7.30797L15.6554 5.33395L14.6337 1.41373H12.9382V1.41379ZM23.1701 5.68563L18.3783 7.32625L23.1775 11.3839C23.3361 10.5688 23.421 9.67498 23.421 8.69969C23.421 7.71063 23.3324 6.6966 23.1701 5.68563Z"
            fill="url(#paint0_linear_2437_2883)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2437_2883"
              x1="17.0699"
              y1="8.01243"
              x2="17.0699"
              y2="84.5447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A9A9A9" />
              <stop offset="0.55" stopColor="#0C1711" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Good work isn't enough anymore",
    },
  ];

  return (
    <section className="pb-20 sm:pb-[35px]">
      <div className="mx-auto max-w-[1340px] px-4">
        <TextAnimation animateOnScroll={true} delay={0}>
          <h3 className="sub-heading !font-light mb-[34px] text-center text-gray-300 max-sm:!text-lg sm:mb-[37px]">
            The industry shifted
          </h3>
        </TextAnimation>
        <div className="flex flex-col gap-1 sm:flex-row">
          {industryItems.map((item, index) => (
            <PrimaryAnimatedText key={index} className="w-full" delay={1000}>
              <div
                className={`flex w-full flex-col items-center justify-center p-2.5 ${
                  index === 2
                    ? ""
                    : "[border-image-slice:1] [border-image-source:radial-gradient(44.41%_273.82%_at_52.96%_98.33%,_#505050_0%,_#0F0C11_100%)] max-sm:border-b"
                }`}
              >
                <div className="mb-2.5">{item.icon}</div>
                <p
                  className="bg-clip-text text-center text-lg font-bold text-transparent xl:text-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #A9A9A9 25%, #0C1711 177.29%)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </PrimaryAnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShifted;
