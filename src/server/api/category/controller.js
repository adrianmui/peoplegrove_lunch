const Category = require('./category');

module.exports = {
  get: (req, res, next) => (
    Category.find({})
    .then(category => res.json(category))
    .catch(err => next(err))
  ),

  create: (req, res, next) => (
    Category.create(req.body)
      .then(category => res.json(category))
      .catch(err => next(err))
  )
};