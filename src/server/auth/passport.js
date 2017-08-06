const passport = require('passport');
const User = require('./../api/user/User');

module.exports = () => { 
  // passport.serializeUser((user, done) => 
  //   done(null, user.id));

  // passport.deserializeUser((id, done) => (
  //   User.findById(id)
  //     .then(user => done(null, user))
  //     .catch(err => done(err, null)) 
  // ));

  passport.serializeUser(function(user, done) {
    done(null, user);
    console.log("User: "+ user.displayName); // If there is a persistent session, the console logs out the displayName
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
};