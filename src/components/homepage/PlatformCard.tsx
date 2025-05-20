import React from "react";
interface Platform {
  logo: string;
  name: string;
  rating: number;
}

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  return (
    <div className="flex flex-col-reverse justify-between w-full lg:w-fit gap-3.5 sm:flex-col items-center relative z-20">
      <img
        src={platform.logo}
        alt={`${platform.name} rating`}
        className="h-8 md:h-10 object-contain max-w-[155px]"
      />
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className="max-w-7 md:max-w-5"
            viewBox="0 0 23 23"
            fill={i < platform.rating ? "#FFA928" : "#E0E0E0"}
          >
            <path d="M9.99448 4.50789C10.3708 3.34967 12.0094 3.34967 12.3857 4.50788L13.3775 7.56031C13.5458 8.07828 14.0285 8.42898 14.5731 8.42898H17.7826C19.0005 8.42898 19.5068 9.98735 18.5216 10.7032L15.925 12.5897C15.4844 12.9098 15.3 13.4772 15.4683 13.9952L16.4601 17.0476C16.8364 18.2058 15.5108 19.169 14.5256 18.4532L11.929 16.5667C11.4884 16.2465 10.8918 16.2465 10.4512 16.5667L7.85462 18.4532C6.86938 19.169 5.54375 18.2058 5.92007 17.0476L6.91187 13.9952C7.08017 13.4772 6.8958 12.9098 6.45518 12.5897L3.85864 10.7032C2.8734 9.98735 3.37974 8.42898 4.59757 8.42898H7.80708C8.3517 8.42898 8.83439 8.07828 9.00269 7.56031L9.99448 4.50789Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default PlatformCard;
