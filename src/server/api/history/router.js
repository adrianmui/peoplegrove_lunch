const router  = require('express').Router();
const controller = require('./controller');

router.route('/')
  .post(controller.create);

router.route('/:id')
  .get(controller.get);

module.exports = router;

