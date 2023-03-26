const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const productRouter = require("./routes/product.routes")
const userRouter = require("./routes/user.route")
const products = require("./../data.json")
const { chats } = require("./data/data")
const db = require("./models")
app.use(express.json())
const { MongoClient } = require('mongodb');
const { json } = require("express");
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(cors({
  cors: '*'
}))
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("method", req.method, req.url)
  next()
})
// simple route

app.get("", (req, res) => {
  res.json({ products });
});
app.get("", (req, res) => {
  res.json({ user });
});
app.get("/api/chat", (req, res) => {
  res.send(chats)
})
app.get("/api/chat/:id", (req, res) => {

  const singlechat = chats.find((c) => c._id === req.params.id)
  res.send(singlechat)
})
app.use("/api/product", productRouter)
app.post("/api/product", productRouter)
app.put("/api/product", productRouter)
app.delete("/api/product", productRouter)

app.use("/api/user", userRouter)


// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  const uri = "mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/test"
  const client = new MongoClient(uri)
  await client.connect;
  console.log("client connected succesfully")
  console.log(`Server is running on port ${PORT}.`);
});





// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);

