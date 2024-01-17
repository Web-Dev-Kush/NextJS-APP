import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fname: String,
  lname: String,
  age: Number,
  role: String,
  company: String,
  phone: Number,
  address: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
