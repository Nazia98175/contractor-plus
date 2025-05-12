import React from "react";

const OurReviewCard = () => {
  return (
    <article className="bg-doctor3 rounded-[10px] p-2 max-w-[419px] w-full mx-3">
      <div className="flex justify-between items-start gap-5">
        <div className="flex items-center gap-2">
          <img
            className="max-w-[42px]"
            src="/images/webp/review-profile.webp"
            alt="avtar"
          />
          <div>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium text-lightBlack font-jakarta">
                Jessica J.
              </p>
              <span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.5"
                    width="19"
                    height="19"
                    rx="9.5"
                    fill="black"
                    fillOpacity="0.12"
                  />
                  <path
                    d="M7.96245 13.9984C7.74482 14.1422 7.52458 14.1507 7.30173 14.0236C7.07888 13.8966 6.96723 13.7 6.9668 13.434V6.5621C6.9668 6.29651 7.07844 6.09998 7.30173 5.9725C7.52502 5.84503 7.74526 5.85344 7.96245 5.99774L13.2835 9.4337C13.4794 9.56649 13.5773 9.75461 13.5773 9.99806C13.5773 10.2415 13.4794 10.4296 13.2835 10.5624L7.96245 13.9984Z"
                    fill="#1C2731"
                  />
                </svg>
              </span>
            </div>
            <img
              className="max-w-[52px]"
              src="/images/svg/randsIcon.svg"
              alt="avtar"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 6].map((item, index) => (
            <span key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.67101 13.275L5.55851 15.15C5.42101 15.2375 5.27726 15.275 5.12726 15.2625C4.97726 15.25 4.84601 15.2 4.73351 15.1125C4.62101 15.025 4.53351 14.9158 4.47101 14.7847C4.40851 14.6533 4.39601 14.5063 4.43351 14.3438L5.25851 10.8L2.50226 8.41875C2.37726 8.30625 2.29926 8.178 2.26826 8.034C2.23676 7.8905 2.24601 7.75 2.29601 7.6125C2.34601 7.475 2.42101 7.3625 2.52101 7.275C2.62101 7.1875 2.75851 7.13125 2.93351 7.10625L6.57101 6.7875L7.97726 3.45C8.03976 3.3 8.13676 3.1875 8.26826 3.1125C8.39926 3.0375 8.53351 3 8.67101 3C8.80851 3 8.94301 3.0375 9.07451 3.1125C9.20551 3.1875 9.30226 3.3 9.36476 3.45L10.771 6.7875L14.4085 7.10625C14.5835 7.13125 14.721 7.1875 14.821 7.275C14.921 7.3625 14.996 7.475 15.046 7.6125C15.096 7.75 15.1055 7.8905 15.0745 8.034C15.043 8.178 14.9648 8.30625 14.8398 8.41875L12.0835 10.8L12.9085 14.3438C12.946 14.5063 12.9335 14.6533 12.871 14.7847C12.8085 14.9158 12.721 15.025 12.6085 15.1125C12.496 15.2 12.3648 15.25 12.2148 15.2625C12.0648 15.275 11.921 15.2375 11.7835 15.15L8.67101 13.275Z"
                  fill="#FF9800"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
      <p className="text-winterWay text-sm font-semibold p-2 mt-3">
        "Since I started sending all my estimates using Contractor+, / have
        stopped losing bids."
      </p>
    </article>
  );
};

export default OurReviewCard;
