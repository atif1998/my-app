const express = require("express");
const { registerUser, loginUser, getProfile,deleteUser,updateUser, getUsers } = require("../controllers/user.controller");
const { authMiddleware, isDeleted } = require("../middlerwares/auth.middlewares");

const routes = express.Router();

routes.get("/me", authMiddleware, isDeleted);
routes.get("/:id",getProfile)
routes.post("/login", loginUser)
routes.post("/register", registerUser)
routes.put("/update/:id", updateUser);
routes.delete("/delete/:id", deleteUser)
routes.get("",getUsers)

module.exports = routes; 