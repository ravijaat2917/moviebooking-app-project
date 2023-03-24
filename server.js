import express from'express' ; const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dbconfig from'./config/db.config.js';
import {artistModel , genreModel , movieModel , userModel} from './models/index.js';
const port = dbconfig.port;



// Import Routes 
import artists from'./routes/artist.routes.js';
import genres from './routes/genre.routes.js';
import movies from './routes/movie.routes.js';
import users from './routes/user.routes.js';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Movie booking application"});
});

// Make routes in working
app.use('/api',artists);
app.use('/api',genres);
app.use('/api',movies);
app.use('/api',users);
  

mongoose
  .connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the moviesdb database!", err);
    process.exit();
  });
  

app.listen(port , () => {
    console.log(`Server listening at  http://localhost:${port}`);
});

export  {artistModel , genreModel , movieModel , userModel};