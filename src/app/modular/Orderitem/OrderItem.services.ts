import { Order } from "./OrderItem.model";

const crateOderIntomDB = async (data: any) => {
  const result = await Order.create(data);
  return result;
};
const getOrderFormDB = async (data: any) => {
  const result = await Order.find({ email: data.email });
  return result;
};
export const oderServices = {
  crateOderIntomDB,
  getOrderFormDB,
};
