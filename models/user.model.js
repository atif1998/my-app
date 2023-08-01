const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
    required: [true, "please enter a name"],
  },
  age: {
    type: String,
    default: "",
    required: true,
  },
  contact: {
    type: Number,
    default: "",
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "please enter a valid password"],
    minlength: 8,
  },
  passwordConfirmation: {
    type: String,
    required: [true, "please enter a valid password"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
    },
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
