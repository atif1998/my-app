const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const registerUser = async (req, res) => {
  console.log("inside register", req);
  const { password, ...rest } = req.body;
  const exist = await User.findOne({ email: rest.email, isdeleted: false });
  if (exist) return res.status(400).send("user already exist");
  try {
    const user = new User({
      ...rest,
    });
    const salt = await bcrypt.genSalt(12);
    const hasPassword = await bcrypt.hash(password, salt);
    user.password = hasPassword;
    user.save();
    res.send({ message: "user added successfuly" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const loginUser = async (req, res) => {
  console.log("inside login");
  const { password, email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).send({ message: "User not Found" });
  try {
    const response = await bcrypt.compare(password, user.password);
    const token = await jwt.sign(
      {
        id: user._id,
        email: user.email,
        password: user.password,
      },
      process.env.JWT_PRIVATE_KEY
    );
    console.log("token", token);
    return res.send({ user, token, message: "User Logged in" });
  } catch (err) {
    console.log("error", err);
    res.status(500).send({
      message: err.message,
    });
  }
};
const getProfile = async (req, res) => {
  console.log("get user");
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById({ _id: id, isDeleted: false });
    const { email, ...rest } = user;
    console.log(user, email, rest);
    res.send({ email, rest, message: "profile fetched Succesfuly" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const getUsers = async (req, res) => {
  console.log("Inside ALl Users");
  const users = await User.find();
  if (!users) {
    res.status(500);
    throw new Error("Something went wrong");
  }
  const emails = users.map((user) => user.email);
  console.log(emails);
  return emails;
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log("User Deleted", deletedUser);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
const updateUser = async (req, res) => {
  console.log("update user");
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );
  res.send({
    updatedUser,
    message: "User updated successfuly",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  deleteUser,
  updateUser,
  getUsers,
};
