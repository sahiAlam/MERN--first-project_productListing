import mongoose from "mongoose";

// Schema
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

// Model
const Product = mongoose.model("Product", productSchema);

export default Product;
