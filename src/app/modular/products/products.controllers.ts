import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { productServices } from "./products.services";

const getProducts = catchAsync(async (req, res) => {
  const result = await productServices.getProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Producs get Successfully",
    data: result,
  });
});

export const productController = {
  getProducts,
};
