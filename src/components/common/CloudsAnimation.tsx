const CloudsAnimation = ({
  className = "clouds absolute right-0 -bottom-[9%] left-0 z-20 h-full overflow-hidden",
}) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="clouds-1 absolute right-0 bottom-0 left-0 h-12 w-full bg-[url('/images/png/pngwing.png')] bg-contain bg-repeat-x opacity-30 grayscale-75 sm:h-16 md:h-20 lg:h-[120px]"></div>
        <div className="clouds-2 absolute right-0 bottom-0 left-0 h-16 w-full bg-[url('/images/png/pngwing-5.png')] bg-contain bg-repeat-x opacity-30 grayscale-75 md:h-20 lg:h-[140px]"></div>
        <div className="clouds-2 absolute right-0 bottom-0 left-0 h-16 w-full bg-[url('/images/png/pngwing-2.png')] bg-contain bg-repeat-x opacity-30 grayscale-75 md:h-20 lg:h-[140px]"></div>
        <div className="clouds-3 absolute right-0 bottom-0 left-0 w-full bg-[url('/images/png/pngwing-3.png')] bg-contain bg-repeat-x opacity-30 grayscale-75 sm:h-20 md:h-28 lg:h-[160px]"></div>
        {/* <div className=" clouds-4 absolute opacity-30 right-0 bottom-0 left-0 h-14 w-full bg-[url('/images/png/pngwing-5.png')] bg-contain bg-repeat-x sm:h-[120px] lg:h-[140px]"></div> */}
        <img
          className="absolute bottom-4 left-0 h-28 w-full object-left-bottom"
          src="/images/png/cloud-layer.png"
          alt="cloud-layer"
        />
      </div>
    </>
  );
};

export default CloudsAnimation;
