import express from'express';
const router = express.Router();
import artistController from '../controllers/artist.controller.js';

router.get('/artists' , artistController);

export default router;