import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  genreid: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const genreModel = mongoose.model("genres", genreSchema);

export default genreModel;
