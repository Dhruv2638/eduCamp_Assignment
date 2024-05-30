import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  password: { type: String, require: true },
});
