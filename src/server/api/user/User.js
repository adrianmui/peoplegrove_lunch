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
  token: {
    type: DataTypes.String,
    required: true
  }
});

userSchema.methods = {
  /** https://stackoverflow.com/questions/40102372/find-one-or-create-with-mongoose */
  findOrCreate: (condition, doc, callback) => {
    const self = this;
    self.findOne(condition, (err, result) => {
      return result 
        ? callback(err, result)
        : self.create(doc, (err, result) => {
          return callback(err, result);
        });
    });
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;