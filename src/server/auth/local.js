const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const config = require('./../config/config');
const init = require('./passport');
const User = require('./../api/user/User');

init();

passport.use(new GoogleStrategy({
    consumerKey: process.env.Google.consumerKey,
    consumerSecret: process.env.Google.consumerSecret,
    callbackURL: `http://localhost:${config.port}/auth/google/callback`
  },
  (token, tokenSecret, profile, done) => {
      console.log('google profile: ', profile);
      User.findOrCreate({ email: profile.id })
        .then(user => done(null, user))
        .catch(err => done(err))
  }
));

module.exports = passport;