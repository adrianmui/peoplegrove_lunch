const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const placeSchema = mongoose.Schema({
  email: DataTypes.String,
  token: DataTypes.String,

  categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

placeSchema.methods.foo = () => (console.log(`hi my place account is associated with ${email}.`));

const place = mongoose.model('Place', placeSchema);

module.exports = place;