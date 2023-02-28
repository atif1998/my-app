const express = require("express")
const { getAllProducts, addProduct, removeUser, editUser, findById } = require("../controllers/product.controller")
const router = express.Router()
const { authMiddleware } = require("../middlerwares/auth.middlewares")


router.get("", getAllProducts)

router.post("/add", authMiddleware, addProduct)
router.delete("/delete/:id", removeUser)
router.put("/update/:id", editUser)
router.get("/:id", findById);
module.exports = router