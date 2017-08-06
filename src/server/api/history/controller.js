const History = require('./history');

module.exports = {
  get: (req, res, next) => (
    History.findById(req.params.id)
    .populate('place')
    .exec()
    .then(history => res.json(history))
    .catch(err => next(err))
  ),

  create: (req, res, next) => (
    History.create(req.body)
      .then(history => res.json(history))
      .catch(err => next(err))
  )
};