const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const registerUser = async (req, res) => {
    console.log("inside register")
    const { password, ...rest } = req.body
    const exist = await User.findOne({ email: rest.email, isdeleted: false })
    if (exist) return res.status(400).send("user already exist")
    try {
        const user = new User({
            ...rest,
        })
        const salt = await bcrypt.genSalt(12);
        const hasPassword = await bcrypt.hash(password, salt)
        user.password = hasPassword;
        user.save();
        res.send({ message: "user added successfuly" })
    }
    catch (err) {
        res.status(500).send({
            message: (err).message
        })
    }
}
const loginUser = async (req, res) => {
    console.log("inside login")
    const { password, email } = req.body;
    const user = await User.findOne({ email, isDeleted: false });
    if (!user) return res.status(400).send({ message: "User not Found" })
    try {
        const response = await bcrypt.compare(password, user.password)
        const token = await jwt.sign({
            id: user._id, email: user.email, password: user.password
        },
            process.env.JWT_PRIVATE_KEY);
        console.log("token", token)
        return res.send({ user, token, message: "User Logged in" })
    }
    catch (err) {
        console.log("error", err)
        res.status(500).send({
            message: (err).message
        })

    }
}
const getProfile = async (req, res) => {
    console.log("inside get product")
    const { id, email, name } = req.user;
    try {
        const users = await User.findById({ _id: id })
        res.send({ user, message: "profile fetched Succesfuly" })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}
// exports.newUser = (req, res) => {
//     const { name, email, age, username, password } = req.body
//     const user = new User({
//         name,
//         email,
//         age,
//         username,
//         password
//     })
//     user.save((err) => {
//         if (err) {
//             res.status(500).send('Unable to add the User!')
//         }
//         res.status(200).send('User Added Successfully!')
//     })
// }

// exports.allUsers = (req, res) => {
//     User.find((err, users) => {
//         if (err) {
//             res.status(500).send('Failed to Connect to the Users!')
//         }
//         res.status(200).send(users)
//     })
// }

// exports.oneUser = (req, res) => {
//     const _id = req.params.id
//     User.findOne({ _id }, (err, user) => {
//         if (err) {
//             res.status(500).send('Failed to Fetch Single User!')
//         }
//         res.status(200).send(user)
//     })
// }

// exports.editUser = (req, res) => {
//     res.status(200).send("Edit Route Working!")
// }

// exports.removeUser = (req, res) => {
//     const _id = new mongodb.ObjectID(req.params._id)
//     User.deleteOne({ _id }, (err, record) => {
//         if (err) {
//             res.status(500).send('Unable to Delete the Record!')
//         }
//         res.status(200).send({ message: "Record Deleted Successfully!" })
//     })
// }
module.exports = { registerUser, loginUser, getProfile }