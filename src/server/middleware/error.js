const logger = require('morgan');

module.exports = (err, req, res, next) => 
(logger.error(err.stack), res.status(err.status || 500).send(err.message));

