import express from 'express';
const router = express.Router();
import genreController from '../controllers/genre.controller.js';

router.get('/genres' , genreController);

export default router;