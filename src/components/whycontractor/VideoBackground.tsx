interface VideoBackgroundProps {
  mobileVideoSrc: string;
  desktopVideoSrc: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  mobileVideoSrc,
  desktopVideoSrc,
  className = "",
}) => {
  return (
    <>
      {/* Mobile Video */}
      <video
        className="w-full mix-blend-screen md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mobileVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desktop Video */}
      <div className={`relative mx-auto w-full max-w-[1440px] overflow-hidden max-md:hidden xl:h-[1300px] ${className}`}>
        <video className="h-full w-full" autoPlay loop muted playsInline>
          <source src={desktopVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoBackground;