const Opinion = require('./opinion');

module.exports = {
  get: (req, res, next) => (
    Opinion.find({})
    .populate('place author')
    .exec()
    .then(opinion => res.json(opinion))
    .catch(err => next(err))
  ),
  create: (req, res, next) => (
    Opinion.create({
      ...req.body,
      author: req.user._id
      })
      .then(opinion => res.json(opinion))
      .catch(err => next(err))
  ),

  getOne: (req, res, next) => (
    Opinion.findById(req.params.id)
    .populate('place author')
    .exec()
    .then(opinion => res.json(opinion))
    .catch(err => next(err))
  )
};