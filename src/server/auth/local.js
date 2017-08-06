const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const config = require('./../../../config');
const init = require('./passport');
const User = require('./../api/user/User');

init();

passport.use(new GoogleStrategy({
    ...config.Google,
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