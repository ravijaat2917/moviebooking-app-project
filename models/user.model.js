import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isLoggedIn: {
    type: Boolean,
    required: true,
  },
  uuid: {
    type: String,
  },
  accesstoken: {
    type: String,
  },
  coupens: [],
  bookingRequests: [],
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
