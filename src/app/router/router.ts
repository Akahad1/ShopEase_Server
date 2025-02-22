import { Router } from "express";
import { productsRouter } from "../modular/products/products.router";
import { userRouter } from "../modular/user/user.router";
import { orderRouter } from "../modular/Orderitem/OrderItem.router";

const router = Router();

const moduleRoute = [
  {
    path: "/products",
    route: productsRouter,
  },
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/order",
    route: orderRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
