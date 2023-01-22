const express = require("express")
const { getAllProducts, addProduct, removeUser, editUser } = require("../controllers/product.controller")
const router = express.Router()


router.get("", getAllProducts)

router.post("/add", addProduct)
router.delete("/delete/:id", removeUser)
router.put("/update/:id", editUser)
module.exports = router