const passport = require('passport');
const User = require('./../api/user/User');

module.exports = () => { 
  passport.serializeUser((user, done) => 
    done(null, user.id));

  passport.deserializeUser((id, done) => (
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err, null)) 
  ));
};