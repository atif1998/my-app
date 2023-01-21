const express = require("express");
const cors = require("cors");
const productRouter = require("./route/product.routes")
const products = require("./../data.json")
const app = express();
const db = require("./models")
app.use(express.json())
const Role = db.role
const { MongoClient } = require('mongodb')
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

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
app.post("/api/add", productRouter)
app.post("/users", (req, res) => {
  const posts = req.body;
  console.log(posts);
  res.status(200).send('Succes')
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  const uri = "mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/test"
  const client = new MongoClient(uri)
  await client.connect;
  console.log("client connected succesfully")
  console.log(`Server is running on port ${PORT}.`);
});
db.mongoose
  .connect("mongodb+srv://Atif:emenust@12@cluster0.tsmvc2f.mongodb.net/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}



require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);