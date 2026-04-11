import { useState } from "react";
import Button from "./Button";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";
import { useTranslation } from "react-i18next";

type Review = {
  author_name: string;
  author_url: string;
  language?: string;
  original_language?: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
  translated?: boolean;
};
type Props = {
  reviews: Review[];
  overallRating?: number;
  onWriteReviewClick?: () => void;
};

export default function GoogleReviewsWidget({
  reviews,
  overallRating = 4.6,
}: // onWriteReviewClick,
Props) {
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  const { t } = useTranslation();
  function handler() {
    setIsReviewsVisible(!isReviewsVisible);
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center max-[640px]:flex-col max-[640px]:items-center text-center gap-4 mb-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </h2>

            <div className="text-3xl md:text-4xl font-semibold">
              {overallRating.toFixed(1)}
            </div>
            <StarRating rating={overallRating} />
          </div>
          <Button
            type="link"
            href="https://www.google.com/maps/place/%D0%A8%D0%B0%D0%BD%D1%81+Sans+LPG+Company/@46.9911796,28.9091921,17z/data=!4m8!3m7!1s0x40c97b616bec9ff9:0xc1007130e6ca81b4!8m2!3d46.9911796!4d28.9091921!9m1!1b1!16s%2Fg%2F11v4pvc6q2?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
            title={t("main.section-reviews.write-review")}
            handler={() => {}}
          />
        </div>
        <div className="mx-auto ">
          <Button title={t("main.section-reviews.last-review")} handler={handler} />
        </div>
      </div>

      {isReviewsVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {reviews.slice(0, 5).map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
