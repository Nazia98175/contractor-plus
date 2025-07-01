import { PlayIcon, StartIcon } from "./Icons";
import Image from "next/image";
import { Review } from "@/types";
import { OurReviewList } from "./Helper";

interface ReviewCardProps {
  review: Review;
  openModal: () => void;
  index: any;
}

// Fixed helper function to render stars based on rating
const renderStars = (rating: number) => {
  const roundedRating = Math.round(Number(rating));
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index} className="h-5 w-5">
      <StartIcon filled={index < roundedRating} />
    </span>
  ));
};
const getInitials = (name: string) => {
  if (!name) return "";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0]?.toUpperCase();
  return `${words[0][0]?.toUpperCase()}${words[1][0]?.toUpperCase()}`;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  openModal,
  index,
}) => {
  const profileImage = review.profileUrl || OurReviewList?.[index]?.profileUrl;
  const initials = getInitials(review.userName ?? "");
  return (
    <div className="mr-5 h-full min-h-full">
      <article
        onClick={review.isModal ? openModal : undefined}
        className={` ${
          review.isModal ? "cursor-pointer" : ""
        } bg-doctor group btn-hover relative flex h-full min-h-full w-full max-w-[350px] flex-col justify-between overflow-hidden rounded-[10px] p-2 md:max-w-[419px]`}
      >
        <div className="flex items-start justify-between gap-5 lg:p-2">
          <div className="flex items-center gap-2">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="avatar"
                width={42}
                height={42}
                className="max-w-[42px] rounded-full object-contain"
              />
            ) : (
              <div className="bg-primary flex h-[42px] w-[42px] items-center justify-center rounded-full text-base font-semibold text-red-900">
                {initials}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lightBlack max-w-[160px] truncate text-base font-medium text-nowrap">
                  {review.userName}
                </p>
                {review.isModal && (
                  <span
                    onClick={openModal}
                    className="group-hover:text-romanRed text-lightBlack"
                  >
                    <PlayIcon />
                  </span>
                )}
              </div>
              <p className="text-secondary max-w-[160px] truncate pt-1 text-xs font-medium text-nowrap">
                {review.userRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[2px]">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-winterWay mt-3 line-clamp-4 px-2 text-sm font-semibold tracking-[0.1px]">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default ReviewCard;
