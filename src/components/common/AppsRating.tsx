import React from "react";
import CardReveal from "./CardReveal";
import Link from "next/link";
import Image from "next/image";
import { StartIcon } from "./Icons";

type AppsRatingProps = {
  className?: string;
  className2?: string;
  delayGoogle?: number;
  delayApple?: number;
};

const AppsRating: React.FC<AppsRatingProps> = ({
  className = "",
  className2 = "",
  delayGoogle = 0.5,
  delayApple = 0.5,
}) => {
  return (
    <>
      <CardReveal distance={50} delay={delayGoogle}>
        <Link
          href="https://contractorplus.app/"
          target="_blank"
          className={`mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0 ${className}`}
        >
          <Image
            src="/images/webp/play-google.webp"
            alt="google icon"
            width={144}
            height={36}
            // sizes="(max-width: 768px) 100px, 144px"
            priority
          />
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="max-w-7 md:max-w-5">
                <StartIcon />
              </span>
            ))}
          </div>
        </Link>
      </CardReveal>

      <CardReveal distance={50} delay={delayApple}>
        <Link
          href="https://apps.apple.com/app/id1516738407"
          target="_blank"
          className={`mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0 ${className2}`}
        >
          <Image
            src="/images/svg/Apple-Icon.svg"
            alt="apple icon"
            width={144}
            height={36}
            // sizes="(max-width: 768px) 100px, 144px"
            priority
          />
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="max-w-7 md:max-w-5">
                <StartIcon />
              </span>
            ))}
          </div>
        </Link>
      </CardReveal>
    </>
  );
};

export default AppsRating;
