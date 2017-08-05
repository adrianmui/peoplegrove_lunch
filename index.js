// .env
require('dotenv').config();

const server = require('./src/server/app');
const config = require('./config/local');

console.log(config);

server.listen(config.port, () => (console.log(`listening to http://localhost:${config.port}`)));