const User = require('./User');

module.exports = {
  get: (req, res, next) => (
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => next(err))
  ),

  create: (req, res, next) => (
    User.create({ 
      ...req.body,
      token: Common.encrypt(req.body.token)
      })
      .then(user => res.json(user))
      .catch(err => next(err))
  )
};