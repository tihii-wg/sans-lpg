import type { Review } from "./Reviews";
import StarRating from "./StarRating";
import VerifiedBadge from "./VerifiedBadge";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <img
          src={review.profile_photo_url}
          alt={review.author_name}
          className="w-11 h-11 rounded-full object-cover"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-zinc-900 truncate">
              {review.author_name}
            </h3>
            <VerifiedBadge />
          </div>

          <p className="text-sm text-zinc-500">
            {review.relative_time_description} on{" "}
            <span className="font-medium text-[#4285F4]">Google</span>
          </p>
        </div>
      </div>

      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {review.text ? (
        <p className="text-[17px] leading-7 text-zinc-800">{review.text}</p>
      ) : (
        <p className="text-[17px] leading-7 text-zinc-400 italic">
          No text review
        </p>
      )}
    </article>
  );
}
