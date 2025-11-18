import type { Review } from "./review";

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  thumbnailUrl: string;
  longDescription: string;
  category: string;
  reviews: Review[];
}
