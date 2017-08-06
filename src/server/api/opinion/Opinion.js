const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const opinionSchema = mongoose.Schema({
  rating: {
    type: DataTypes.Number,
    required: true
  },
  comments: {
    type: DataTypes.String,
    required: true,
  },

  place: {type: DataTypes.ObjectId, ref: 'Place'},

  author: {type: DataTypes.ObjectId, ref: 'User'}
});

const opinion = mongoose.model('Opinion', opinionSchema);

module.exports = opinion;