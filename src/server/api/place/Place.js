const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const placeSchema = mongoose.Schema({
  name: { 
    type: DataTypes.String,
    required: true,
    unique: true
  },

  categories: [{type: DataTypes.ObjectId, ref: 'category'}]
});

placeSchema.methods = {
  foo: () => (console.log(`hi my place account is associated with ${email}.`))
};

const place = mongoose.model('Place', placeSchema);

module.exports = place;