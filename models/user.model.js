const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        default: "",
        required: true
    },
    age: {
        type: String,
        default: "",
        required: true
    },
    contact: {
        type: Number,
        default: "",
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    }
})
const User = mongoose.model("User", UserSchema);
module.exports = User