const CloudsAnimation = () => {
  return (
    <>
      <div className="clouds absolute right-0 -bottom-[8%] left-0 z-20 h-full overflow-hidden">
        <div className="clouds-1 absolute right-0 bottom-0 left-0 h-12 w-full bg-[url('/images/png/pngwing.png')] bg-contain bg-repeat-x sm:h-16 md:h-20 lg:h-[120px]"></div>
        <div className="clouds-2 absolute right-0 bottom-0 left-0 h-16 w-full bg-[url('/images/png/pngwing-5.png')] bg-contain bg-repeat-x md:h-20 lg:h-[140px]"></div>
        <div className="clouds-2 absolute right-0 bottom-0 left-0 h-16 w-full bg-[url('/images/png/pngwing-2.png')] bg-contain bg-repeat-x md:h-20 lg:h-[140px]"></div>
        <div className="clouds-3 absolute right-0 bottom-0 left-0 w-full bg-[url('/images/png/pngwing-3.png')] bg-contain bg-repeat-x sm:h-20 md:h-28 lg:h-[160px]"></div>
        {/* <div className="clouds-4 absolute right-0 bottom-0 left-0 h-14 w-full bg-[url('/images/png/pngwing-5.png')] bg-contain bg-repeat-x sm:h-[120px] lg:h-[140px]"></div> */}
      </div>
    </>
  );
};

export default CloudsAnimation;
