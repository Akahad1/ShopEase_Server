import express from "express";
import { productController } from "./products.controllers";

const router = express.Router();

router.get("/", productController.getProducts);

export const productsRouter = router;
