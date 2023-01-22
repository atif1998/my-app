const { JsonWebTokenError } = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const { authrization } = req.headers;
    const token = authrization;

    if (!token) return res.status(401).send("Acces denied user in not authorized to use route")
    try {
        const decode = JsonWebTokenError.verify(token.split(" ")[1], process.env.JWT_PRIVATE_KEY)
        req.user = decode;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid token")
    }
}

module.exports = { authMiddleware }