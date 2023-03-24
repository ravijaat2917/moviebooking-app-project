import express from "express";
const router = express.Router();
import {
  signUp,
  login,
  logout,
  getCouponCode,
  bookShow,
} from "../controllers/user.controller.js";

router.post("/auth/signup", signUp);

router.post("/auth/login", login);

router.post("/auth/logout", logout);

router.get("/getCouponCode", getCouponCode);

router.get("/bookShow", bookShow);

export default router;