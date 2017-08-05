const server = require('./app');
const config = require('./config/local');

server.listen(config.port, function() {
  console.log(`listening to http://localhost:${config.port}`);
});