const development = require('./local');
const production = require('./production');

const config = {
  development, 
  production
};

module.exports = (process.env.NODE_ENV || 'development') ? config[process.env.NODE_ENV] : config.development;