const User = require('./../api/user/User');

let auth = {};

auth.isLoggedIn = (req, res, next) => (
  console.log(`Authenticated: ${req.isAuthenticated()}`),
  req.isAuthenticated() ? next() : res.redirect('/')
);

auth.loginRequired = (req, res, next) =>
  (req.user ? res.status(401).send(`status: already logged in`) : next());

auth.loginRequired = (req, res, next) =>
  (!req.user ? res.status(401).send(`status: please login`) : next());

auth.adminRequired = (req, res, next) => (
  (!req.user) ? res.status(401).json({status: 'Please log in'}) : 
  User.findById(req.user.id)
    .then(user => (!user.admin) ? res.status(401).json({status: 'You are not authorized'}) : next())
    .catch(err => next(err))
);

module.exports = auth;