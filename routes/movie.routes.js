import express from 'express';
const router = express.Router();
import {findAllMovies, findOne, rootPath} from'../controllers/movie.controller.js';

// Route to routePath
router.get('/' , rootPath);


// Route to get all the movies
router.get('/movies' , findAllMovies );


// Route to get by movieID
router.get('/movies/:movieID' , findOne);


export default router;