const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const userSchema = mongoose.Schema({
  email: DataTypes.String,
  token: DataTypes.String
});

userSchema.methods.foo = () => (console.log(`hi my user account is associated with ${email}.`));

const User = mongoose.model('User', userSchema);

module.exports = User;