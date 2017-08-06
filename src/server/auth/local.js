const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('./../../../config');
const init = require('./passport');
const User = require('./../api/user/User');

init();

passport.use(new GoogleStrategy({
    clientID: config.Google.clientID,
    clientSecret: config.Google.clientSecret,
    callbackURL: `http://localhost:${config.port}/auth/google/callback`,
    passReqToCallback: true
  },
  (req, token, tokenSecret, profile, done) => {
    let data = {};
    if (profile.photos.length > 0) data.photoUrl = profile.photos[0].value
    if (profile.emails.length > 0) data.email = profile.emails[0].value

    User.findOneOrCreate(data)
      .then(success => done(null,success))
      .catch(err => done(err, null))
  }
));

module.exports = passport;