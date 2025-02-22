import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController.createUser);
router.post("/login", userController.LoginUserFromDB);

export const userRouter = router;
