const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
