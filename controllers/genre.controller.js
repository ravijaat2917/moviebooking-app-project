import { genreModel } from "../server.js";

// // Route to rootPath
const findAllGenres = async (req,res) =>{
    // res.send("All Genres Data in JSON format from Mongo DB");
    let genres = await genreModel.find();
    res.send(genres);
};

export default findAllGenres;