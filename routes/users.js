var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {message: 'heyyooo', title: 'adrian'});
});

module.exports = router;
