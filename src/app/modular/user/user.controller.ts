import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { userServices } from "./user.servies";

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await userServices.createUserFromDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create user Successfully",
    data: result,
  });
});
const LoginUserFromDB = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await userServices.LoginUserFromDBFromDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Log In Successfully",
    data: result,
  });
});
const getUser = catchAsync(async (req, res) => {
  const data = req.query;
  const result = await userServices.getUserFromDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " get User Successfully",
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " getAllUser Successfully",
    data: result,
  });
});
export const userController = {
  createUser,
  LoginUserFromDB,
  getUser,
  getAllUser,
};
