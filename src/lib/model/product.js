import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  company: String,
  colour: String,
  category: String,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productSchema);
