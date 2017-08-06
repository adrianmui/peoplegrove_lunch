const Place = require('./place');

module.exports = {
  create: (req, res, next) => (
    Place.create(req.body)
      .then(place => res.json(place))
      .catch(err => next(err))
  ),

  getOne: (req, res, next) => (
    Place.findById(req.params.id)
    .populate('categories')
    .exec()
    .then(place => res.json(place))
    .catch(err => next(err))
  )
};