import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  createdAt: { type: Date, required: true },
});
