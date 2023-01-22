const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/user.controller");
const { authMiddleware } = require("../middlerwares/auth.middlewares");
const routes = express.Router();

routes.get("/me", authMiddleware, getProfile);
// routes.get("/:id", getUserById)
routes.post("/login", loginUser)
routes.post("/register", registerUser)
// routes.put("/update/:id", updateUser);
// routes.put("/delete/:id", deleteUser)

module.exports = routes; 