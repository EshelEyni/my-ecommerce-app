import type { FC } from "react";
import type { Review as ReviewType } from "../../../types/review";

type ReviewProps = {
  review: ReviewType;
};

export const Review: FC<ReviewProps> = ({ review }) => {
  return (
    <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-sm font-semibold text-slate-800">{review.username}</p>
      <p className="mt-1 text-sm text-slate-700">{review.comment}</p>
    </li>
  );
};
