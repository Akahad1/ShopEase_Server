import { Product } from "./products.model";

const getProductFromDB = async () => {
  const result = await Product.find();
  return result;
};
export const productServices = {
  getProductFromDB,
};
