import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
  updatePassword,
  updateAccountDetails,
} from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/login", loginUser);

userRouter.get("/logout", verifyJWT, logoutUser);

userRouter.get("/refreshAccessToken", refreshAccessToken);

userRouter.get("/getCurrentUser", verifyJWT, getCurrentUser);

userRouter.patch("/updatePassword", verifyJWT, updatePassword);

userRouter.patch("/updateAccountDetails", verifyJWT, updateAccountDetails);

export default userRouter;