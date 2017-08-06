const router  = require('express').Router();
const controller = require('./controller');

router.route('/')
  .get(controller.get)
  .post(controller.create);

router.route('/:id')
  .get(controller.getOne);

module.exports = router;

