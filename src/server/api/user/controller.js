const User = require('./User');

module.exports = () => ({
  get: (req, res, next) => (
    User.findOne({where: {id: req.params.id}})
    .then(user => res.json(user))
    .catch((err) => next(err))
  )
});