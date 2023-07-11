const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
require("./models/db")();
require("dotenv").config();
require("./config/db.config")();
require("./auth");

const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.route");
const todoRouter = require("./routes/todo.routes");
const sendMail = require("./controllers/mail.controller");
const passport = require("passport");

app.use(express.json());

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

// auth 2

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, async () => {
  console.log("client connected succesfully");
  console.log(`Server is running on port ${PORT}.`);
});
