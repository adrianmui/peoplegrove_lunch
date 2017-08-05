const router = require('express').Router();

const userRouter = require('./user/router');
const placeRouter = require('./place/router');

router.use('/users', userRouter);
router.use('/places', placeRouter);

module.exports = router;