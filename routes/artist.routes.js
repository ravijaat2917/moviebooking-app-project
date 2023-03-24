import express from "express";
const router = express.Router();
import findAllArtists from "../controllers/artist.controller.js";

router.get("/artists", findAllArtists);

export default router;
