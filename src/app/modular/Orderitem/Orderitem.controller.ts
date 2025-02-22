import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { oderServices } from "./OrderItem.services";
const createOder = catchAsync(async (req, res) => {
  const orderdata = req.body;
  console.log(orderdata);
  const result = await oderServices.crateOderIntomDB(orderdata);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "create Oder Successfully",
    data: result,
  });
});
const getorder = catchAsync(async (req, res) => {
  const orderdata = req.query;
  console.log(orderdata);
  const result = await oderServices.getOrderFormDB(orderdata);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "create Oder Successfully",
    data: result,
  });
});
export const orderController = {
  createOder,
  getorder,
};
