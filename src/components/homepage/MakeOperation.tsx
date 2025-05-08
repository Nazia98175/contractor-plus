import { MakeOperationlist } from "../common/Helper";

const MakeOperation = () => {
  return (
    <section className="bg-[#0D0F13] relative">
      <img
        className="top-0 left-0 absolute h-[600px] w-full"
        src="/images/png/stars.png"
        alt="stars image"
      />
      {/* <span className="top-0 left-0 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="499"
          height="879"
          fill="none"
          viewBox="0 0 499 879"
        >
          <g
            filter="url(#filter0_f_69_5069)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              stroke="url(#paint0_linear_69_5069)"
              strokeLinecap="square"
              strokeOpacity="0.15"
              strokeWidth="85"
              d="M342 722 59.5 439.5-223 157"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_69_5069"
              x1="-222.646"
              x2="342.354"
              y1="156.646"
              y2="721.646"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6DDCFF" stopOpacity="0"></stop>
              <stop offset="0.505" stopColor="#6DDCFF"></stop>
              <stop offset="1" stopColor="#6DDCFF" stopOpacity="0"></stop>
            </linearGradient>
            <filter
              id="filter0_f_69_5069"
              width="877.209"
              height="877.208"
              x="-379.104"
              y="0.896"
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
                result="effect1_foregroundBlur_69_5069"
                stdDeviation="48"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </span> */}
      <img
        className="top-0 left-0 absolute h-[400px] w-[600px]"
        src="/images/png/god-ray.png"
        alt="stars image"
      />
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
