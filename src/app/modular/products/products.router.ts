import express from "express";
import { productController } from "./products.controllers";

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getspecificProducts);
router.put("/:id", productController.updateSpecificProducts);
router.delete("/:id", productController.deleteSpecificProducts);

export const productsRouter = router;
