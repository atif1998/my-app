const mongoose = require("mongoose")
const userschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: "String", required: true },
    pic: {
        type: "String",
        required: true,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
},
    { timestaps: true }
)
const User = mongoose.model("User", userschema)
module.exports = User;