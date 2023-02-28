const Product = require("../models/product.models")
const mongodb = require('mongodb');
const User = require("../models/user.model");

const getAllProducts = async (req, res) => {
    console.log("Inside all products")
    const products = await Product.find({})
    res.send(products)
}
const addProduct = async (req, res) => {
    console.log("added")
    const { id, email, name } = req.user;
    const product = await Product.create({ ...req.body, owner: id })
    const owner = await User.findById({ _id: id })
    owner.products.push(product._id)
    owner.save()
    res.send({
        product,
        message: "Product added succedfully"
    })
}
const editUser = async (req, res) => {
    console.log("inside editor")
    const updatedProduct = await Product.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true });
    res.send({
        product: updatedProduct,
        message: "product added succesfuly"
    })

}
const findById = async (req, res) => {
    console.log("inside findbyid");
    const product = await Product.findById({ _id: req.params.id }).populate("owner")
    res.send({
        product,
        message: "product fetched successfuly",
    });

}
const removeUser = async (req, res) => {
    console.log("inside delete api")
    await Product.deleteOne({ _id: req.params.id })
    res.send({

        message: "deleted Succesfuly"
    })

}

module.exports = { getAllProducts, addProduct, editUser, removeUser, findById }