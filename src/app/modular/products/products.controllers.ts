import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { productServices } from "./products.services";

const getProducts = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await productServices.getProductFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Producs get Successfully",
    data: result,
  });
});
const getspecificProducts = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.getspecificProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Producs get Successfully",
    data: result,
  });
});
const deleteSpecificProducts = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.deleteSpecificProductsFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Producs delete Successfully",
    data: result,
  });
});
const updateSpecificProducts = catchAsync(async (req, res) => {
  const id = req.params.id;
  const playload = req.body;
  const result = await productServices.updateSpecificProductsFromDB(
    id,
    playload
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Producs Update Successfully",
    data: result,
  });
});
export const productController = {
  getProducts,
  getspecificProducts,
  deleteSpecificProducts,
  updateSpecificProducts,
};
