const Todo = require("../models/todo.model");

const getAllTodos = async (req, res) => {
  console.log("Inside all products");
  const todos = await Todo.find({});
  res.send(todos);
};
const addTodo = async (req, res) => {
  console.log("inside addTodo");
  const { name } = req.body;
  const exist = await Todo.findOne({ name });
  if (exist) return res.status(400).send("todo already exist");
  try {
    const todo = await Todo.create({ ...req.body });
    res.send({
      todo,
      message: "Todo added succedfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  console.log("inside delete");
  await Todo.findByIdAndDelete({ _id: req.params.id });
  res.send({ message: "deleletd successfully" });
};
const updateTodo = async (req, res) => {
  console.log("update todo");
  const updatedTodo = await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );
  res.send({
    updatedTodo,
    message: "User updated successfuly",
  });
};
const findById = async (req, res) => {
  console.log("inside find by id");
  const todo = await Todo.findById({ _id: req.params.id });
  res.send(todo);
};
const deleteAll = async (req, res) => {
  console.log("inside delete all");
  await Todo.deleteMany({});
  res.send(200);
};
module.exports = {
  getAllTodos,
  deleteTodo,
  addTodo,
  updateTodo,
  findById,
  deleteAll,
};
