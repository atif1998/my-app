const mongoose = require("mongoose")

module.exports = function () {
    const db = "mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/test";
    mongoose.set('strictQuery', false)
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
mongoose.connection.on("connected", function () {
    console.log("Mongoose is connected to " + db)
})

mongoose.connection.on("connected", function (err) {
    console.log("Mongoose  connected error" + err)
})

