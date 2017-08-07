const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: root('./src/client/main.server.ts'),
  output: {
    filename: 'server.js'
  },
  target: 'node'
};
