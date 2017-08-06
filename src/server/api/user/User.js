const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const userSchema = mongoose.Schema({
  email: { 
    type: DataTypes.String,
    required: true,
    unique: true
  },
  admin: {
    type: DataTypes.Boolean,
    required: false
  },
  photoUrl: {
    type: DataTypes.String,
    default: 'hhttps://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'
  },
  token: {
    type: DataTypes.String,
    required: false
  }
});

/** https://stackoverflow.com/questions/40102372/find-one-or-create-with-mongoose */
userSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
  const self = this;
  return self.findOne(condition)
    .then(found => {
      if (found) {
        console.log(`found: `, found);
        return found;
      }
      self.create(condition)
        .then(created => console.log(`created: `, created))
        .catch(err => next(err))
    })
};



const User = mongoose.model('User', userSchema);

module.exports = User;