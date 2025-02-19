import { model, Schema } from "mongoose";
import { TProduct } from "./products.Interface";

const productSchma = new Schema<TProduct>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  review: { type: Number, required: true, min: 1, max: 5 },
  status: { type: String, enum: ["In Stock", "Out of Stock"], required: true },
  details: { type: String, required: true },
  categories: { type: String, required: true },
});

export const Product = model<TProduct>("Product", productSchma);
