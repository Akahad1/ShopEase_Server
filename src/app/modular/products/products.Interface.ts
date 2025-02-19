export interface TProduct {
  name: string;
  image: string;
  price: number;
  review: number;
  status: "In Stock" | "Out of Stock";
  details: string;
  categories: string;
}
