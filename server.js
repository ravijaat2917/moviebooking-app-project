import express from'express' ; const app = express();
import mongoose from 'mongoose';
import dbconfig from'./config/db.config.js';
import artistdb  from './models/artist.model.js';
const port = dbconfig.port;

// Import Routes 
import artists from'./routes/artist.routes.js';
import genres from './routes/genre.routes.js';
import movies from './routes/movie.routes.js';
import users from './routes/user.routes.js';

// Make routes in working
app.use('/',artists);
app.use('/',genres);
app.use('/',movies);
// app.use('/',users);


// Database connection
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  
app.listen(port , () => {
    console.log(`Server listening at  http://localhost:9000`);
});