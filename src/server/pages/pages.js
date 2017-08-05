const router = require('express').Router();

const users = require('./routes/users');
const index = require('./routes/index');

router.use('/', index);
router.use('/users', users);

module.exports = router;