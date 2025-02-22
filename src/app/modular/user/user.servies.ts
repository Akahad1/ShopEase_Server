import { AppError } from "../../error/AppError";
import { User } from "./user.model";
import httpStatus from "http-status";

const createUserFromDB = async (data: any) => {
  const result = await User.create(data);
  return result;
};
const LoginUserFromDBFromDB = async (data: any) => {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid email ");
  }

  return user;
};
const getUserFromDB = async (data: any) => {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid email ");
  }

  return user;
};
const getAllUserFromDB = async () => {
  const user = await User.find();

  return user;
};
export const userServices = {
  createUserFromDB,
  LoginUserFromDBFromDB,
  getUserFromDB,
  getAllUserFromDB,
};
