const router = require('express').Router();
const passport = require('./local');
const auth = require('./auth');

const User = require('./../api/user/User');

const handleResponse = (res, code, statusMsg) => (
  (statusMsg == 'success') ? res.redirect('/') : next(new Error(statusMsg)));

// GET /auth/google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', auth.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});

module.exports = router;