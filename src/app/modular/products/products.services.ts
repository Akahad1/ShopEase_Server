import { Product } from "./products.model";

const getProductFromDB = async (query: any) => {
  const { minPrice, maxPrice, category, minReview } = query;

  let filter: any = {};

  // 🔹 Filter by price range
  if (minPrice && maxPrice) {
    filter.price = {
      $gte: parseInt(minPrice as string),
      $lte: parseInt(maxPrice as string),
    };
  }

  // 🔹 Filter by category
  if (category) {
    filter.categories = category;
  }

  // 🔹 Filter by review rating
  if (minReview) {
    filter.review = { $gte: parseInt(minReview as string) };
  }

  // 🔹 Sorting options

  const result = await Product.find(filter);
  return result;
};
const getspecificProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateSpecificProductsFromDB = async (id: string, payload: any) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteSpecificProductsFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const productServices = {
  getProductFromDB,
  getspecificProductFromDB,
  deleteSpecificProductsFromDB,
  updateSpecificProductsFromDB,
};
