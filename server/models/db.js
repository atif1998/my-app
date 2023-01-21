const mongoose = require("mongoose")

module.exports = function () {
    const db = "";
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

