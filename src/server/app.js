const path = require('path');
const express = require('express');
const app = express();

const config = require('./../../config/local');
const redirect = require('./helpers/redirect');

const apiRouter = require('./api/api');
const pagesRouter = require('./pages/pages');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
require('./middleware')(app);

// serving public folder
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// router
app.use('/api', apiRouter);
app.use('/', pagesRouter);

// redirect if nothing
app.use(redirect);

module.exports = app;
