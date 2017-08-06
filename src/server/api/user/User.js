const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const userSchema = mongoose.Schema({
  email: { 
    type: DataTypes.String,
    required: true,
    unique: true
  },
  token: DataTypes.String
});

userSchema.methods = {
  foo: () => (console.log(`hi my user account is associated with ${email}.`))
}

const User = mongoose.model('User', userSchema);

module.exports = User;