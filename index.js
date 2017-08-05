const server = require('./src/server/app');
const config = require('./config/local');

server.listen(config.port, () => (console.log(`listening to http://localhost:${config.port}`)));