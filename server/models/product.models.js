const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    pieces: {
        type: Number,
        default: 1,
        required: true
    },
})
const Product = mongoose.model("Product", ProductSchema);