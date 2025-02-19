import { Router } from "express";
import { productsRouter } from "../modular/products/products.router";

const router = Router();

const moduleRoute = [
  {
    path: "/products",
    route: productsRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
