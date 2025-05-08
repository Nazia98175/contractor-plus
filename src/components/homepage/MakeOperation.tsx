import { MakeOperationlist } from "../common/Helper";

const MakeOperation = () => {
  return (
    <section className="bg-[#0D0F13] relative">
      <img
        className="top-0 left-0 absolute h-[600px] w-full pointer-events-none"
        src="/images/png/stars.png"
        alt="stars image"
      />
      <div className="hidden lg:block absolute bottom-0 left-[70px] max-w-[40px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-[#6DDCFF] blur-[34px] opacity-20 pointer-events-none"></div>
      {/* <img
        className="top-0 right-0 absolute h-[600px] w-[300px]"
        src="/images/png/large-comet.png"
        alt=""
      /> */}
      <span className="top-[-202px] right-0 absolute pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="993"
          height="1112"
          fill="none"
          viewBox="0 0 993 1112"
        >
          <g
            filter="url(#filter0_f_69_4651)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              stroke="url(#paint0_linear_69_4651)"
              strokeLinecap="round"
              strokeWidth="432"
              d="m305 305 434.784 251.023 434.786 251.023"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_69_4651"
              x1="755.313"
              x2="1065.72"
              y1="874.455"
              y2="654.336"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.062" stopOpacity="0"></stop>
              <stop offset="0.997" stopColor="#EE1E25"></stop>
              <stop offset="1" stopColor="#fff"></stop>
            </linearGradient>
            <filter
              id="filter0_f_69_4651"
              width="1477.64"
              height="1110.12"
              x="0.964"
              y="0.964"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_69_4651"
                stdDeviation="44"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </span>
      <div className="main-container py-10">
        <h3 className=" text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
          Make operations your competitive edge
        </h3>
        <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
          The ROI from Contractor+ makes the choice easy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
          {MakeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{item.icon}</span>
              <h3 className="text-2xl font-bold text-white font-jakarta">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;
