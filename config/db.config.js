const mongose = require("mongoose");

module.exports = function () {
  mongose.connect(
    "mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("dbErr:", err.message);
      }
    }
  );

  const connect = mongose.connection;

  connect.once("open", () => {
    console.log("mogoDb connected!");
  });
};
