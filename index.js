require('babel-register');
require('babel-polyfill');

require('dotenv').config(); // .env

const server = require('./src/server/app');
const config = require('./config');
const db = require('./db/connect');

db.on('connected', function() {
  console.log('...Connected!');

  server.listen(config.port, function() {
    console.log(`listening to http://localhost:${config.port}`);
  });
});
