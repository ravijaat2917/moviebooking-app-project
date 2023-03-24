import {movieModel} from '../server.js';

// Route to rootPath
const rootPath = (req, res) => {
  res.json({
    message: "Movie booking application",
  });
};

// To get all the movies...
const findAllMovies = async (req, res) => {
  let Query = req.query.status;
  if (Query != undefined) {
    var status = Query.toUpperCase();
  }
  if (Query == undefined) {
    let Movies = await movieModel.find();
    res.send(Movies);
    // res.json({ message: "Welcome to Upgrad Movie booking application development." });
  } else if (status == "PUBLISHED") {
    let filter = {
      published: true,
    };
    let Movie = await movieModel.find(filter);
    res.send(Movie);
  } else if (status == "RELEASED") {
    // console.log(req.query.title);
    if(req.query.title == undefined){
      let filter = {
        released: true,
      };
      let Movie = await movieModel.find(filter);
      res.send(Movie);
    }else{
      let details = req.query;
      let Movie = await movieModel.find(details);
      res.send(Movie);
    }
  }
};

// to get the movie by movie id...
const findOne = async (req, res) => {
  let id = req.params.movieID;
  let Movie = await movieModel.find({ movieid: id });
  // console.log(Movie);
  res.send(Movie);
};

export { rootPath, findAllMovies, findOne };
