require('babel-register');

const path = require('path');
const express = require('express');
const app = express();

const config = require('./../../config');
const redirect = require('./middleware/redirect');

//passport
const passport = require('passport');
const auth = require('./auth/auth');
const flash = require('connect-flash');
const session = require('express-session');

//routers
const apiRouter = require('./api/api');
const pagesRouter = require('./pages/pages');
const authRouter = require('./auth/router');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
require('./middleware')(app);

//passport
app.use(session({secret: config.Passport.secret})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // flash messages stored in session

// serving public folder
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// router
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/', pagesRouter);

// redirect if nothing
app.use(redirect);

module.exports = app;
