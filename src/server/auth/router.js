const router = require('express').Router();
const passport = require('./local');
const auth = require('./auth');

const User = require('./../api/user/User');

const handleResponse = (res, code, statusMsg) => (
  (statusMsg == 'success') ? res.redirect('/') : next(new Error(statusMsg)));

// GET /auth/google
// router.get('/google', auth.loginRedirect,
//   () => passport.authenticate('google', 
//   { scope : ['profile', 'email'] },
//   (err, success) => {
//     console.log(err, success);
//   } 

// ));

router.get('/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read'] 
}));

router.get( '/google/callback', 
        passport.authenticate( 'google', { 
            successRedirect: '/landing',
            failureRedirect: '/'
}));

router.get('/logout', auth.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});

module.exports = router;