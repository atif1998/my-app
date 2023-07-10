const express = require("express");
const app = express();
const cors = require("cors");
require("./models/db")();
require("dotenv").config();
require("./config/db.config")();

const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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

passport.use(
  new GoogleStrategy(
    {
      clientID: "muhammadatiflatif5468@gmail.com",
      clientSecret: "utrfeimgvktbdlvx",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// Google callback route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/sendmail", sendMail);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, async () => {
  console.log("client connected succesfully");
  console.log(`Server is running on port ${PORT}.`);
});
