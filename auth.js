const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8090/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  // Store the user's ID in the session
  done(null, user, user.id);
});

passport.deserializeUser(function (user, done) {
  // Find the user in the database or data source based on the stored ID

  done(null, user);
});
