const Product = require("../models/product.models")
const mongodb = require('mongodb');

const getAllProducts = async (req, res) => {
    console.log("Inside all products")
    const products = await Product.find({})
    res.send(products)
}
const addProduct = async (req, res) => {
    console.log("added")
    const product = await Product.create({ ...req.body })
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

const removeUser = async (req, res) => {
    console.log("inside delete api")
    await Product.findByIdAndUpdate({ _id: req.params.id }, { isDeleted: true }, { new: true })
    req.send({
        message: "deleted Succesfuly"
    })

}

module.exports = { getAllProducts, addProduct, editUser, removeUser }