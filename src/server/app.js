const path = require('path');
const express = require('express');
const app = express();

const config = require('./../../config');
const redirect = require('./middleware/redirect');

//passport
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

//routers
const apiRouter = require('./api/api');
const authRouter = require('./auth/router');

import { angularRouter, reactRouter, userRouter, appCards } from './pages';
import { loginRequired } from './auth/auth';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
require('./middleware')(app);

//passport
app.use(session({ secret: config.Passport.secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // flash messages stored in session

// serving public folder
app.use('static', express.static(path.join(__dirname, './views/styles')));
const serveReact = (req, res, next) => {
  console.log('serving react');
  app.use(express.static(path.join(__dirname, '../client-react/build')));
  next();
};
const serveAngular = (req, res, next) => {
  console.log('serving angular');
  app.use(express.static(path.join(__dirname, '../../public')));
  next();
};

// router
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.get('/profile', loginRequired, (req, res, next) => {
  res.render('user/profile', { user: req.user });
});

app.use('/user', loginRequired, userRouter);

app.use('/angular', serveAngular, angularRouter);
app.use('/react', serveReact, reactRouter);

app.get('/', (req, res, next) => {
  console.log(`current user is: ${req.user}`);
  res.render('index', { user: req.user, cards: appCards });
});

// redirect if nothing
app.use(redirect);

module.exports = app;
