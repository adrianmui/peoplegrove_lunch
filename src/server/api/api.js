const router = require('express').Router();

const userRouter = require('./user/router');
const placeRouter = require('./place/router');
const categoryRouter = require('./category/router');
const historyRouter = require('./history/router');
const opinionRouter = require('./opinion/router');

router.use('/users', userRouter);
router.use('/places', placeRouter);
router.use('/categories', categoryRouter)
router.use('/histories', historyRouter);
router.use('/opinions', opinionRouter);

module.exports = router;