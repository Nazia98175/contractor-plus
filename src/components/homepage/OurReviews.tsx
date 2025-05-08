import React from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard"; // Import the ReviewCard component

// Define the Review interface (can be moved to a separate types file)
interface Review {
  profileUrl: string;
  userName: string;
  companyIcon: string;
  rating: number;
  reviewText: string;
}

const OurReviews: React.FC = () => {
  // Review data
  const OurReviewList: Review[] = [
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "Jessica J.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 5,
      reviewText:
        "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
    },
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "Michael T.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 5,
      reviewText:
        "This platform has completely transformed how I manage my contracting business. Highly recommended!",
    },
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "Sarah K.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 4,
      reviewText:
        "The estimating features alone have saved me countless hours. Great customer service too.",
    },
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "David M.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 5,
      reviewText:
        "After trying several other solutions, Contractor+ is by far the most intuitive and comprehensive tool.",
    },
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "Emily R.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 5,
      reviewText:
        "My clients are impressed with the professional estimates I can now create in minutes.",
    },
    {
      profileUrl: "/images/webp/review-profile.webp",
      userName: "Robert L.",
      companyIcon: "/images/svg/randsIcon.svg",
      rating: 4,
      reviewText:
        "The mobile app makes it easy to manage projects on the go. Perfect for busy contractors.",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 main-container">
        <h3 className="section-heading text-black text-center md:text-start">
          Here you can find our reviews
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <img
            className="max-w-[135px] w-full"
            src="/images/svg/capterra-icon.svg"
            alt="capterra icon"
          />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-winterWay text-sm font-bold font-jakarta">
                Excellent
              </h3>
              <p className="text-base font-extrabold text-[#439777] font-jakarta">
                4.9
              </p>
              <span>
                <svg
                  width="102"
                  height="18"
                  viewBox="0 0 102 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="18"
                    height="18"
                    transform="translate(4)"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M12.671 13.275L9.55851 15.15C9.42101 15.2375 9.27726 15.275 9.12726 15.2625C8.97726 15.25 8.84601 15.2 8.73351 15.1125C8.62101 15.025 8.53351 14.9158 8.47101 14.7847C8.40851 14.6533 8.39601 14.5063 8.43351 14.3438L9.25851 10.8L6.50226 8.41875C6.37726 8.30625 6.29926 8.178 6.26826 8.034C6.23676 7.8905 6.24601 7.75 6.29601 7.6125C6.34601 7.475 6.42101 7.3625 6.52101 7.275C6.62101 7.1875 6.75851 7.13125 6.93351 7.10625L10.571 6.7875L11.9773 3.45C12.0398 3.3 12.1368 3.1875 12.2683 3.1125C12.3993 3.0375 12.5335 3 12.671 3C12.8085 3 12.943 3.0375 13.0745 3.1125C13.2055 3.1875 13.3023 3.3 13.3648 3.45L14.771 6.7875L18.4085 7.10625C18.5835 7.13125 18.721 7.1875 18.821 7.275C18.921 7.3625 18.996 7.475 19.046 7.6125C19.096 7.75 19.1055 7.8905 19.0745 8.034C19.043 8.178 18.9648 8.30625 18.8398 8.41875L16.0835 10.8L16.9085 14.3438C16.946 14.5063 16.9335 14.6533 16.871 14.7847C16.8085 14.9158 16.721 15.025 16.6085 15.1125C16.496 15.2 16.3648 15.25 16.2148 15.2625C16.0648 15.275 15.921 15.2375 15.7835 15.15L12.671 13.275Z"
                    fill="#FF9800"
                  />
                  <rect
                    width="18"
                    height="18"
                    transform="translate(23)"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M31.671 13.275L28.5585 15.15C28.421 15.2375 28.2773 15.275 28.1273 15.2625C27.9773 15.25 27.846 15.2 27.7335 15.1125C27.621 15.025 27.5335 14.9158 27.471 14.7847C27.4085 14.6533 27.396 14.5063 27.4335 14.3438L28.2585 10.8L25.5023 8.41875C25.3773 8.30625 25.2993 8.178 25.2683 8.034C25.2368 7.8905 25.246 7.75 25.296 7.6125C25.346 7.475 25.421 7.3625 25.521 7.275C25.621 7.1875 25.7585 7.13125 25.9335 7.10625L29.571 6.7875L30.9773 3.45C31.0398 3.3 31.1368 3.1875 31.2683 3.1125C31.3993 3.0375 31.5335 3 31.671 3C31.8085 3 31.943 3.0375 32.0745 3.1125C32.2055 3.1875 32.3023 3.3 32.3648 3.45L33.771 6.7875L37.4085 7.10625C37.5835 7.13125 37.721 7.1875 37.821 7.275C37.921 7.3625 37.996 7.475 38.046 7.6125C38.096 7.75 38.1055 7.8905 38.0745 8.034C38.043 8.178 37.9648 8.30625 37.8398 8.41875L35.0835 10.8L35.9085 14.3438C35.946 14.5063 35.9335 14.6533 35.871 14.7847C35.8085 14.9158 35.721 15.025 35.6085 15.1125C35.496 15.2 35.3648 15.25 35.2148 15.2625C35.0648 15.275 34.921 15.2375 34.7835 15.15L31.671 13.275Z"
                    fill="#FF9800"
                  />
                  <rect
                    width="18"
                    height="18"
                    transform="translate(42)"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M50.671 13.275L47.5585 15.15C47.421 15.2375 47.2773 15.275 47.1273 15.2625C46.9773 15.25 46.846 15.2 46.7335 15.1125C46.621 15.025 46.5335 14.9158 46.471 14.7847C46.4085 14.6533 46.396 14.5063 46.4335 14.3438L47.2585 10.8L44.5023 8.41875C44.3773 8.30625 44.2993 8.178 44.2683 8.034C44.2368 7.8905 44.246 7.75 44.296 7.6125C44.346 7.475 44.421 7.3625 44.521 7.275C44.621 7.1875 44.7585 7.13125 44.9335 7.10625L48.571 6.7875L49.9773 3.45C50.0398 3.3 50.1368 3.1875 50.2683 3.1125C50.3993 3.0375 50.5335 3 50.671 3C50.8085 3 50.943 3.0375 51.0745 3.1125C51.2055 3.1875 51.3023 3.3 51.3648 3.45L52.771 6.7875L56.4085 7.10625C56.5835 7.13125 56.721 7.1875 56.821 7.275C56.921 7.3625 56.996 7.475 57.046 7.6125C57.096 7.75 57.1055 7.8905 57.0745 8.034C57.043 8.178 56.9648 8.30625 56.8398 8.41875L54.0835 10.8L54.9085 14.3438C54.946 14.5063 54.9335 14.6533 54.871 14.7847C54.8085 14.9158 54.721 15.025 54.6085 15.1125C54.496 15.2 54.3648 15.25 54.2148 15.2625C54.0648 15.275 53.921 15.2375 53.7835 15.15L50.671 13.275Z"
                    fill="#FF9800"
                  />
                  <rect
                    width="18"
                    height="18"
                    transform="translate(61)"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M69.671 13.275L66.5585 15.15C66.421 15.2375 66.2773 15.275 66.1273 15.2625C65.9773 15.25 65.846 15.2 65.7335 15.1125C65.621 15.025 65.5335 14.9158 65.471 14.7847C65.4085 14.6533 65.396 14.5063 65.4335 14.3438L66.2585 10.8L63.5023 8.41875C63.3773 8.30625 63.2993 8.178 63.2683 8.034C63.2368 7.8905 63.246 7.75 63.296 7.6125C63.346 7.475 63.421 7.3625 63.521 7.275C63.621 7.1875 63.7585 7.13125 63.9335 7.10625L67.571 6.7875L68.9773 3.45C69.0398 3.3 69.1368 3.1875 69.2683 3.1125C69.3993 3.0375 69.5335 3 69.671 3C69.8085 3 69.943 3.0375 70.0745 3.1125C70.2055 3.1875 70.3023 3.3 70.3648 3.45L71.771 6.7875L75.4085 7.10625C75.5835 7.13125 75.721 7.1875 75.821 7.275C75.921 7.3625 75.996 7.475 76.046 7.6125C76.096 7.75 76.1055 7.8905 76.0745 8.034C76.043 8.178 75.9648 8.30625 75.8398 8.41875L73.0835 10.8L73.9085 14.3438C73.946 14.5063 73.9335 14.6533 73.871 14.7847C73.8085 14.9158 73.721 15.025 73.6085 15.1125C73.496 15.2 73.3648 15.25 73.2148 15.2625C73.0648 15.275 72.921 15.2375 72.7835 15.15L69.671 13.275Z"
                    fill="#FF9800"
                  />
                  <rect
                    width="18"
                    height="18"
                    transform="translate(80)"
                    fill="#F8F8F8"
                  />
                  <path
                    d="M88.671 13.275L85.5585 15.15C85.421 15.2375 85.2773 15.275 85.1273 15.2625C84.9773 15.25 84.846 15.2 84.7335 15.1125C84.621 15.025 84.5335 14.9158 84.471 14.7847C84.4085 14.6533 84.396 14.5063 84.4335 14.3438L85.2585 10.8L82.5023 8.41875C82.3773 8.30625 82.2993 8.178 82.2683 8.034C82.2368 7.8905 82.246 7.75 82.296 7.6125C82.346 7.475 82.421 7.3625 82.521 7.275C82.621 7.1875 82.7585 7.13125 82.9335 7.10625L86.571 6.7875L87.9773 3.45C88.0398 3.3 88.1368 3.1875 88.2683 3.1125C88.3993 3.0375 88.5335 3 88.671 3C88.8085 3 88.943 3.0375 89.0745 3.1125C89.2055 3.1875 89.3023 3.3 89.3648 3.45L90.771 6.7875L94.4085 7.10625C94.5835 7.13125 94.721 7.1875 94.821 7.275C94.921 7.3625 94.996 7.475 95.046 7.6125C95.096 7.75 95.1055 7.8905 95.0745 8.034C95.043 8.178 94.9648 8.30625 94.8398 8.41875L92.0835 10.8L92.9085 14.3438C92.946 14.5063 92.9335 14.6533 92.871 14.7847C92.8085 14.9158 92.721 15.025 92.6085 15.1125C92.496 15.2 92.3648 15.25 92.2148 15.2625C92.0648 15.275 91.921 15.2375 91.7835 15.15L88.671 13.275Z"
                    fill="#FF9800"
                  />
                </svg>
              </span>
            </div>
            <p className="text-winterWay text-xs font-medium pt-1 font-jakarta text-center md:text-start">
              Based On 1,320 reviews
            </p>
          </div>
        </div>
      </div>

      {/* First Marquee going left */}
      <div className="pt-[77px] flex">
        <Marquee
          direction="left"
          speed={40}
          autoFill={true}
          pauseOnHover={true}
        >
          {OurReviewList.slice(0, 3).map((review, index) => (
            <ReviewCard key={`left-${index}`} review={review} />
          ))}
        </Marquee>
      </div>

      {/* Second Marquee going right */}
      <div className="pt-[27px] flex">
        <Marquee
          direction="right"
          speed={40}
          autoFill={true}
          pauseOnHover={true}
        >
          {OurReviewList.slice(3).map((review, index) => (
            <ReviewCard key={`right-${index}`} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurReviews;
