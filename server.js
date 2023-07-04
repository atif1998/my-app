const express = require("express");
const app = express();
const cors = require("cors");
require("./models/db")();
require("dotenv").config();

const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.route");
const todoRouter = require("./routes/todo.routes");

app.use(express.json());
const { MongoClient } = require("mongodb");
const sendMail = require("./controllers/mail.controller");
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(
  cors({
    cors: "*",
  })
);
app.use(express.json());

// simple route

app.get("/sendmail", sendMail);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, async () => {
  const uri =
    "mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/users";
  const client = new MongoClient(uri);
  await client.connect;
  console.log("client connected succesfully");
  console.log(`Server is running on port ${PORT}.`);
});
