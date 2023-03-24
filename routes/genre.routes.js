import express from "express";
const router = express.Router();
import findAllGenres from "../controllers/genre.controller.js";

router.get("/genres", findAllGenres);

export default router;
