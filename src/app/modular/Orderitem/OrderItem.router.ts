import express from "express";
import { orderController } from "./Orderitem.controller";

const router = express.Router();

router.post("/", orderController.createOder);
router.get("/", orderController.getorder);

export const orderRouter = router;
