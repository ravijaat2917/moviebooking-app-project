import express from 'express';
const router = express.Router();
import movieController from'../controllers/movie.controller.js';

router.get('/movies' , movieController);

export default router;