const express = require("express");
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  findById,
  deleteAll,
} = require("../controllers/todo.controller");
const route = express.Router();

route.get("/", getAllTodos);
route.post("/add", addTodo);
route.delete("/delete/:id", deleteTodo);
route.put("/update/:id", updateTodo);
route.get("/:id", findById);
route.delete("/delete", deleteAll);
module.exports = route;
