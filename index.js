require('dotenv').config(); // .env

const server = require('./src/server/app');
const config = require('./config');
const db = require('./db/connect');

db.on('connected', () => {
  console.log('...Connected!')

  server.listen(config.port, () => (console.log(`listening to http://localhost:${config.port}`)));
});
