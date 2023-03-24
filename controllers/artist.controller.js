import { artistModel } from "../server.js";

const findAllArtists = async (req, res) => {
  // res.send("All Artists Data in JSON format from Mongo DB");
  let artists = await artistModel.find();
  res.send(artists);
};

export default findAllArtists;
