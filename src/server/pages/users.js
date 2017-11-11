const router = require('express').Router();

/* GET users listing. */
router.get('/', (req, res, next) =>
  res.render('index', {message: 'heyyooo', title: 'adrian'}));

module.exports = router;
