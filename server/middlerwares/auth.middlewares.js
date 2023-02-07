const jwt = require("jsonwebtoken");
const User = require("../models/user.model")
console.log(User)
const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization;

    if (!token) return res.status(401).send("Acces denied user in not authorized to use route")
    try {
        const decode = jwt.verify(token.split(" ")[1], process.env.JWT_PRIVATE_KEY)
        req.user = decode;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid token")
    }
}

const isDeleted = async (req, res, next) => {
    console.log("in isdeleted")
    const { id } = req.user;
    const user = await User.findOne({ _id: id, isDeleted: false })
    if (!user) {
        return res.status(400).send({
            message: "user not found"
        }
        )
    }
    next()

}
module.exports = { authMiddleware, isDeleted }