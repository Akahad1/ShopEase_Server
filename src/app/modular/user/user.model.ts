import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchma = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "Customer" },
  number: { type: Number, required: true },
});

export const User = model<TUser>("User", userSchma);
