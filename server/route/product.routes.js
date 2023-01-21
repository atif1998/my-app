const express = require("express")
const router = express.Router()

router.get("", (res, req) => {
    res.send("this is product")
})

router.post("/add", (res, req) => {
    res.send(req.body)
})
router.delete("/delete", (req, res) => {
    res.send(req.body)
})
router.put("/update", (req, res) => {
    res.send(req.body)
})
module.exports = router