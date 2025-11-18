import type { FC } from "react";
import type { Review as ReviewType } from "../../../types/review";
import { Review } from "./Review";

type ReviewListProps = {
  reviews: ReviewType[];
};

export const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Reviews</h2>
        <span className="text-xs font-medium text-slate-500">
          {reviews.length} review{reviews.length !== 1 ? "s" : ""}
        </span>
      </div>

      {reviews.length === 0 ? (
        <p className="text-sm text-slate-500">
          No reviews yet. Be the first to review this product.
        </p>
      ) : (
        <ul className="space-y-3">
          {reviews.map((review, idx) => (
            <Review key={`${review.username}-${idx}`} review={review} />
          ))}
        </ul>
      )}
    </section>
  );
};
