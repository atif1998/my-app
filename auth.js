const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "979022512975-bit87n3u97an8gcs5jt13s3cl4bh7rrr.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8090/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
