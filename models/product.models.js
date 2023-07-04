const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  purchasePrice: {
    type: Number,
    default: 0,
    required: true,
  },
  salesPrice: {
    type: Number,
    default: 0,
    required: true,
  },
  pieces: {
    type: Number,
    default: 1,
    default: true,
  },
  manufacture: {
    type: String,
    default: "",
    required: false,
  },
  class: {
    type: String,
    default: "",
    required: false,
  },
  category: {
    type: String,
    default: "",
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
