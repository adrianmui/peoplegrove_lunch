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

const place = mongoose.model('Place', placeSchema);

module.exports = place;