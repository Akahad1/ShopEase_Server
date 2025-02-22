import { model, Schema } from "mongoose";
import { TOrder } from "./OrderItem.interface";
const ProductSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const OrderSchma = new Schema<TOrder>({
  firstName: { type: String, required: true },
  lastName: { type: String },
  company: { type: String },
  address: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cart: { type: [ProductSchema], required: true },
  subtotal: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
});

export const Order = model<TOrder>("Order", OrderSchma);
