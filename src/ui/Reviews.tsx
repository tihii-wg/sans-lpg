import { useEffect, useState } from "react";
// import StarRating from "./StarRating";
import GoogleReviewsWidget from "./GoogleReviewsWidget";

export type Review = {
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

export default function Reviews() {
  const [reviews, setRewiews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/reviews")
      .then((res) => res.json())
      .then((data) => setRewiews(data))
  }, []);

  console.log(reviews);
  const rating =
    reviews?.reduce((acc: number, rev) => acc + rev.rating, 0) /
      reviews.length || 1;

  if (reviews.length < 1) return null;

  return (
    <div>
      <GoogleReviewsWidget reviews={reviews} overallRating={rating} />
    </div>
  );
}
